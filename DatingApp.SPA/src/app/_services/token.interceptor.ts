import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';



import { Observable } from 'rxjs';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    
    constructor() {} 

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const token = localStorage.getItem("token");
      
      const authReq = request.clone({ setHeaders: { Authorization: "Bearer " + token } });
  
          return next.handle(authReq);
        // const token = localStorage.getItem("token");
        
        // if(token){
        //     const cloned = request.clone({
        //         headers : request.headers.set("Authorization","Bearer " + token)
        //     });
           
        //     return next.handle(cloned).do((event : HttpEvent<any>) => {
        //         if (event instanceof HttpResponse) {
                    
        //         }});
            
        // }else{
            
        //     return next.handle(request);
            
        // }
    }
}

