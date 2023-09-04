import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




export class HelloWorldBean {
  constructor(public message: string) { }
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }
  executeHelloWorldBeanService(){
    debugger
     console.log("Execute Hello World Bean Service")
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean")
  }

  executeHelloWorldBeanServiceWithPathVariiable(name:string){
    // debugger
      // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
      // console.log(basicAuthHeaderString);
    
      // const headers = new HttpHeaders({
      // Authorization: basicAuthHeaderString
      // })
      // console.log(headers);
      return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`,
      //{headers}
      );

    
  }


//  createBasicAuthenticationHttpHeader() {
//     let username = 'Sneha'
//     let password = 'Gupta'
//     let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
//     return basicAuthHeaderString;
//   }
  }

