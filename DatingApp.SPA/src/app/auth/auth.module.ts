import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http:Http,options:RequestOptions){
        return new AuthHttp(new AuthConfig({
          tokenName : 'token',
          tokenGetter : (() => localStorage.getItem('token')),
          globalHeaders : [{'Content-type' : 'application/json'}],
        }), http, options);
}

@NgModule({
  providers : [
    {
      provide : AuthHttp,
      useFactory : authHttpServiceFactory,
      deps : [Http, RequestOptions]
    }
  ]
})
export class AuthModule { }
