import { Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

export class AuthExpiredInterceptor implements HttpInterceptor {

    constructor(
        private injector: Injector
    ) {}

}
