import { Injectable } from '@angular/core';
import { AbstractLoadingService } from './abstract-loading.service';

@Injectable({
  providedIn: 'root',
})
export class HttpLoadingService extends AbstractLoadingService {}
