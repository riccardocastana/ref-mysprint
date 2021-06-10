import { AbstractRemoteCall } from './abstract-remote-call';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

export abstract class AbstractMysRemoteCall extends AbstractRemoteCall {
  /**
   * The base url of the call.
   */
  baseUrl = `${environment.mysBackendUrl}`;

  /**
   * @inheritdoc
   */
  withCredentials = true;

  getHeaders(): HttpHeaders {
    let headers = super.getHeaders();
    headers = headers.set('Content-Type', 'application/json');

    return headers;
  }
}
