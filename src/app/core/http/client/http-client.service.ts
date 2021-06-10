import { concatMap, retryWhen, delay, observeOn, map } from 'rxjs/operators';
import { of, throwError, Observable, asyncScheduler } from 'rxjs';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { RemoteCallInterface } from '../remote-calls/remote-call.interface';
import { ObjectExtensionsService } from '../../primitive-types/extensions/object-extensions.service';
import { AbstractRemoteCallCache } from '../cache/abstract-remote-call-cache';

export class HttpClientService {
  constructor(
    readonly httpClient: HttpClient,
    readonly objectExtensionsService: ObjectExtensionsService,
    readonly remoteCallCache?: AbstractRemoteCallCache
  ) {}

  /**
   * Executes the remote call.
   */
  execute<T>(remoteCall: RemoteCallInterface): Observable<T> {
    // Check if a response is already available in the cache and just returns it
    // if found.
    const cachedResponseEntry = this.remoteCallCache?.get<T>(remoteCall);
    if (cachedResponseEntry) {
      // NOTE: We get a response from the cache, in order to make
      // Angular change detection working fine we provide the cached
      // response asynchrounsly avoiding changing the value while
      // the detection is running!
      return of(cachedResponseEntry).pipe(observeOn(asyncScheduler));
    }

    return (
      of(remoteCall)
        // Create an http request from the remote call.
        .pipe(
          map((call: RemoteCallInterface) => {
            const request = new HttpRequest(
              call.method,
              `${call.baseUrl}${call.relativePath}`,
              call.getBody(),
              {
                withCredentials: call.withCredentials,
                responseType: call.responseType,
                params: call.getQuery(),
                headers: call.getHeaders(),
                reportProgress: false,
              }
            );

            return [request, call];
          }),
          // Performs the http request and propagate the remote call.
          concatMap(
            ([httpRequest, call]: [HttpRequest<any>, RemoteCallInterface]) => {
              let request$ = this.httpClient.request(
                httpRequest.method,
                httpRequest.url,
                {
                  body: httpRequest.body,
                  headers: httpRequest.headers,
                  reportProgress: httpRequest.reportProgress,
                  observe: 'response',
                  params: httpRequest.params,
                  responseType: httpRequest.responseType,
                  withCredentials: httpRequest.withCredentials,
                }
              );

              // Check if we need to setup a request retry.
              const shouldSetupRequestRetry =
                Number.isFinite(call.retryAttemptCount) &&
                call.retryAttemptCount > 0;
              if (shouldSetupRequestRetry) {
                request$ = request$.pipe(
                  retryWhen((notifiers: Observable<HttpResponse<any>>) =>
                    notifiers.pipe(
                      concatMap(
                        (response: HttpResponse<any>, index: number) => {
                          // If the all the attempts has been tried or the request is not failed with status code zero forward the error...
                          if (
                            !response ||
                            response.status !== 0 ||
                            index > call.retryAttemptCount
                          ) {
                            return throwError(response);
                          }
                          // ...otherwise execute the next attempt after a specified amount of time.
                          return of(response).pipe(delay(call.retryDelay));
                        }
                      )
                    )
                  )
                );
              }

              // Finally propagate the remote call along with the request stream.
              return request$.pipe(
                map((response: HttpResponse<any>) => [response, call])
              );
            }
          ),
          // Finally let's perform the mapping to get the response slice that's actually needed.
          map(
            ([httpResponse, call]: [
              HttpResponse<any>,
              RemoteCallInterface
            ]) => {
              const content = this.objectExtensionsService.getObjectValue<T>(
                httpResponse,
                call.contentProperty
              );

              // Update the remote calls cache.
              if (this.remoteCallCache) {
                this.remoteCallCache.put(call, content);
              }

              return content;
            }
          )
        )
    );
  }
}
