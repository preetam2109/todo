import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { baseUrl } from 'src/app/app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {}

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString ='Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    });
    console.log('sdsdsd' + headers);

    return this.http
      .get<AuthenticationBean>(`${baseUrl}/basicauth`,{ headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticaterUser', username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);

          return data;
        })
      );
  }

  //   authenticate(username:any,password:any){
  // if(username=="Sneha" && password=="Gupta"){
  //   sessionStorage.setItem('authenticaterUser',username);
  // return true;
  //   }else{
  //     return false;
  //   }

  //}

  isUserLogedIn() {
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null);
  }

  getAuthenticatedToken() {
    debugger
    if (this.getAuthenticatedUser()) 
      return sessionStorage.getItem(TOKEN);
    
    console.log(sessionStorage.getItem(TOKEN))
    return sessionStorage.getItem(TOKEN);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser');
  }
  logout() {
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
  constructor(public message: string) {}
}
