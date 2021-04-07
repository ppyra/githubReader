import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { LoaderService } from "../shared/loading-spinner/loader.service";
import { ErrorService } from "./error.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService, private loaderService: LoaderService)
  { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            errorMessage = `Error: ${error.error.message}`;
          } else {
            errorMessage = `Message: ${error.message}`;
          }
          this.errorService.addErrors(Array.isArray(errorMessage) ? errorMessage : [errorMessage]);
          this.loaderService.display(false);
          return throwError(errorMessage);
        })
      )
  }
 }
