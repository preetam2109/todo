import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  baseUrl: `http://localhost:8080/users/` | undefined;

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:string){
    debugger
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }
  deleteTodo(username:any,id:any){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  retrieveTodo(username:any,id:any){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  updateTodo(username: any, id: any, todo: Todo) {
    return this.http.put(`
    http://localhost:8080/users/${username}/todos/${id}`
      , todo);
  }

  createTodo(username: any, todo: Todo) {
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`
      ,todo);
  }
}
