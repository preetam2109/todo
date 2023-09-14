import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private http:HttpClient) { }

  retrieveAllUsers(){
    return this.http.get<User[]>(`http://localhost:8080/api/auth/users`)
  }
  deleteUser(id:any){
    return this.http.delete(`http://localhost:8080/api/auth/users/${id}`)
  }
  retrieveUser(id:any){
    debugger
    return this.http.get<User>(`http://localhost:8080/api/auth/users/${id}`)
  }
  updateUser(id: any, user: User){
    debugger
    return this.http.put<User>(`http://localhost:8080/api/auth/users/${id}`,user);
  }
}
