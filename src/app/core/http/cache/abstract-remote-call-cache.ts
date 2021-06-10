import { RemoteCallInterface } from '../remote-calls/remote-call.interface';

export abstract class AbstractRemoteCallCache {
  /**
   * Gets the cached parsed response for the given request.
   */
  abstract get<T>(remoteCall: RemoteCallInterface): T | undefined;

  /**
   * Caches the parsed response for the given request.
   */
  abstract put<T>(remoteCall: RemoteCallInterface, response: T): void;
}
