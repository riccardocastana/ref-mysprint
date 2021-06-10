import { HttpResponseType } from './../enums/http-response-type.enum';
import { HttpMethod } from './../enums/http-method.enum';
import { HttpParams, HttpHeaders } from '@angular/common/http';

/**
 * Defines the shape of a remote call.
 */
export interface RemoteCallInterface {
  /**
   * The base url of the call.
   */
  baseUrl: string;

  /**
   * The path to the endpoint.
   */
  relativePath: string;

  /**
   * The HTTP method of the request.
   */
  method: HttpMethod;

  /**
   * A flag that tells if the credentials should be sent over the CORS.
   */
  withCredentials: boolean;

  /**
   * The declared response type.
   */
  responseType: HttpResponseType;

  /**
   * The property embedding the content of the remote call response.
   */
  contentProperty: string;

  /**
   * A max age (ms) associated to the remote call and used
   * for caching. Set it to 0 to disabled caching.
   */
  maxAge: number;

  /**
   * The number of attempt before aborting the request.
   */
  retryAttemptCount: number;

  /**
   * The delay before retrying to perform a request.
   */
  retryDelay: number;

  /**
   * The headers of the request.
   */
  getHeaders(): HttpHeaders;

  /**
   * The query parameters of the request.
   */
  getQuery(): HttpParams;

  /**
   * The body of the request.
   */
  getBody(): any;
}
