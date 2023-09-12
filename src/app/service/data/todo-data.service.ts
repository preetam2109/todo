import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jpa_baseUrl} from 'src/app/app.constants';
import { Todo } from 'src/app/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  retrieveAllTodos(username:string){
    debugger
    return this.http.get<Todo[]>(`${Jpa_baseUrl}/users/${username}/todos`)
  }
  deleteTodo(username:any,id:any){
    return this.http.delete(`${Jpa_baseUrl}/users/${username}/todos/${id}`)
  }
  retrieveTodo(username:any,id:any){
    return this.http.get<Todo>(`${Jpa_baseUrl}/users/${username}/todos/${id}`)
  }
  updateTodo(username: any, id: any, todo: Todo) {
    return this.http.put(`
    ${Jpa_baseUrl}/users/${username}/todos/${id}`
      , todo);
  }

  createTodo(username: any, todo: Todo) {
    return this.http.post(
      `${Jpa_baseUrl}/users/${username}/todos`
      ,todo);
  }
}
