import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ObjectExtensionsService } from '../primitive-types/extensions/object-extensions.service';
import { RemoteCallCacheService } from './cache/remote-call-cache.service';
import { HttpClientService } from './client/http-client.service';
import { HttpApiClientFactory } from './factories/http-api-client.factory';
import { HttpLoadingInterceptor } from './interceptors/http-loading-interceptor';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    RemoteCallCacheService,
    {
      provide: HttpClientService,
      useFactory: HttpApiClientFactory.create,
      deps: [HttpClient, ObjectExtensionsService, RemoteCallCacheService],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoadingInterceptor,
      multi: true,
    },
  ],
})
export class HttpCoreModule {}
