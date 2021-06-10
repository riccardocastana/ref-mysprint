import { HttpClient } from '@angular/common/http';
import { RemoteCallCacheService } from '../cache/remote-call-cache.service';
import { ObjectExtensionsService } from '../../primitive-types/extensions/object-extensions.service';
import { HttpClientService } from '../client/http-client.service';

export class HttpApiClientFactory {
  /**
   * Creates and returns an instance of the api client service.
   */
  static create(
    httpClient: HttpClient,
    objectExtensionsService: ObjectExtensionsService,
    remoteCallCache: RemoteCallCacheService
  ): HttpClientService {
    const apiClientService = new HttpClientService(
      httpClient,
      objectExtensionsService,
      remoteCallCache
    );
    return apiClientService;
  }
}
