import { RemoteCallCacheEntry } from './remote-call-cache-entry.interface';
import { Injectable } from '@angular/core';
import { AbstractRemoteCallCache } from './abstract-remote-call-cache';
import { RemoteCallInterface } from '../remote-calls/remote-call.interface';

@Injectable()
export class RemoteCallCacheService extends AbstractRemoteCallCache {
  /**
   * The local cache providing for a given request url (with params)
   * the corresponding parsed response.
   */
  private readonly cache = new Map<string, RemoteCallCacheEntry<any>>();

  /**
   * Determines if for the given request is available a cached response.
   */
  has(remoteCall: RemoteCallInterface): boolean {
    const key = this.getRequestIdentifier(remoteCall);
    return this.cache.has(key);
  }

  /**
   * Gets the cached entry in the map for the given request.
   */
  get<T>(remoteCall: RemoteCallInterface): T | undefined {
    const reqKey = this.getRequestIdentifier(remoteCall);

    const cachedEntry = this.cache.get(reqKey);
    if (!cachedEntry) {
      return undefined;
    }

    const isExpired = cachedEntry.lastRead + cachedEntry.maxAge < Date.now();
    return isExpired ? undefined : cachedEntry.response;
  }

  /**
   * Puts a new cached response for the given request.
   */
  put<T>(remoteCall: RemoteCallInterface, response: T): void {
    if (!remoteCall.maxAge) {
      this.flush();
      return;
    }

    const reqKey = this.getRequestIdentifier(remoteCall);
    const entry: RemoteCallCacheEntry<T> = {
      response,
      identifier: reqKey,
      lastRead: Date.now(),
      maxAge: remoteCall.maxAge,
    };

    // Update and flush the cache.
    this.cache.set(reqKey, entry);
    this.flush();
  }

  /**
   * Founds all expired entry and deletes them from the cache.
   */
  flush(): void {
    this.cache.forEach((entry) => {
      const isEntryExpired = entry.lastRead + entry.maxAge < Date.now();

      if (isEntryExpired) {
        this.cache.delete(entry.identifier);
      }
    });
  }

  /**
   * Gets the unique key used as idenitifier to store
   * a cached response for the given remote call.
   */
  private getRequestIdentifier(remoteCall: RemoteCallInterface): string {
    const remoteCallUrl = `${remoteCall.getQuery}${remoteCall.relativePath}`;
    const stringifiedParams = remoteCall.getQuery().toString();

    return stringifiedParams
      ? `${remoteCallUrl}?${stringifiedParams}`
      : remoteCallUrl;
  }
}
