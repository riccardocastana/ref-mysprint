import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface ErrorMessages {
  errors: [
    {
      message: string;
    }
  ];
}

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const shouldSkipErrorHandling = request.headers.has(
          'rpi-skip-error-handling'
        );
        if (shouldSkipErrorHandling) {
          return throwError(error);
        }

        // let errorArrayMessage: string[] = [];
        // if (error.error as ErrorMessages) {
        //   errorArrayMessage = error.error.errors.map((data) => data.message);
        // }

        // errorArrayMessage.forEach((data) => {
        //   this.snackBarService.warn(data);
        // });

        return throwError(error);
      })
    );
  }
}
