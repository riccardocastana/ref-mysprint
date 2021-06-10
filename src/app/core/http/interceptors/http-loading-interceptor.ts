import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { HttpLoadingService } from '../../loading/http-loading.service';

/**
 * Defines the interceptor to update the loading state of http-loading service.
 */
@Injectable({
  providedIn: 'root',
})
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor(private httpLoadingService: HttpLoadingService) {}

  /**
   * @inheritDoc
   */
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Skip loading handling in case "cpm-ignore-loading" is part of the request.
    if (request.headers.has('cpm-ignore-loading')) {
      const newHeaders = request.headers.delete('cpm-ignore-loading');
      return next.handle(request.clone({ headers: newHeaders }));
    }

    let started = false;

    return next.handle(request).pipe(
      tap(() => {
        if (started) {
          return;
        }
        this.httpLoadingService.setLoading();
        started = true;
      }),
      finalize(() => {
        this.httpLoadingService.unsetLoading();
      })
    );
  }
}
