import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterveterBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthenticationService:BasicAuthenticationService) { 

  }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = 'Sneha'
    // let password = 'Gupta'
    // const basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    
    let username = this.basicAuthenticationService.getAuthenticatedUser()
    console.log("token "+basicAuthHeaderString);
    console.log("username "+username);

    if(basicAuthHeaderString && username) { 
      request = request.clone({
        setHeaders : {
            Authorization : basicAuthHeaderString
          }
        }) 
      }
      return next.handle(request);
  }


}