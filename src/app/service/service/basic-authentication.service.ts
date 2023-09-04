import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

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
      .get<AuthenticationBean>(`http://localhost:8080/basicauth`,{ headers })
      .pipe(
        map((data) => {
          sessionStorage.setItem('authenticaterUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);

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
      return sessionStorage.getItem('token');
    
    console.log(sessionStorage.getItem('token'))
    return sessionStorage.getItem('token');
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticaterUser');
  }
  logout() {
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('token');
  }
}
export class AuthenticationBean {
  constructor(public message: string) {}
}
