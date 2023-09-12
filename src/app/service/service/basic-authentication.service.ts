import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { baseUrl } from 'src/app/app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'





@Injectable({
  providedIn: 'root',
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) {}

  executeJWTAuthenticationService(username: string, password: string) {
    

    return this.http
      .post<any>(`${baseUrl}/authenticate`,
      {username,
      password})
      .pipe(
        map((data) => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);

          return data;
        })
      );
  }
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
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);

          return data;
        })
      );
  }
  register(username: string, email: string, password: string, role:string[]): Observable<any>{
    debugger
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  
    return this.http.post('http://localhost:8080/api/auth/signup',
    {
      username,
      email ,
      password,
      role

    },
    httpOptions
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
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) 
      return sessionStorage.getItem(TOKEN);
    
    console.log(sessionStorage.getItem(TOKEN))
    return sessionStorage.getItem(TOKEN);
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}
export class AuthenticationBean {
  constructor(public message: string) {}
}
