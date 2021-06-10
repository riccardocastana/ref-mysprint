import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpMethod } from './../enums/http-method.enum';
import { HttpResponseType } from './../enums/http-response-type.enum';
import { RemoteCallInterface } from './remote-call.interface';

export abstract class AbstractRemoteCall implements RemoteCallInterface {
  /**
   * @inheritdoc
   */
  withCredentials = false;

  /**
   * @inheritdoc
   */
  responseType: HttpResponseType = HttpResponseType.json;

  /**
   * @inheritdoc
   */
  contentProperty = 'body';

  /**
   * @inheritdoc
   */
  maxAge = 0;

  /**
   * @inheritdoc
   */
  retryAttemptCount = 0;

  /**
   * @inheritdoc
   */
  retryDelay = 500;

  /**
   * The base url of the call.
   */
  abstract baseUrl: string;

  /**
   * @inheritdoc
   */
  abstract relativePath: string;

  /**
   * @inheritdoc
   */
  abstract method: HttpMethod;

  /**
   * @inheritDoc
   */
  getHeaders(): HttpHeaders {
    return new HttpHeaders();
  }

  /**
   * @inheritDoc
   */
  getQuery(): HttpParams {
    return new HttpParams();
  }

  /**
   * @inheritDoc
   */
  getBody(): any {
    return null;
  }
}
