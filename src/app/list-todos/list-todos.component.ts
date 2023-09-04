import { Component } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../service/data/todo-data.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
  
  message: string = '';  
  todos: Todo[] | undefined
  constructor(private route :Router ,private todoService:TodoDataService){
    
  }
  //   new Todo(1,'learn spring framework',false,new Date),
  //   new Todo(2,'learn spring Boot',false,new Date),
  //   new Todo(1,'learn Microservicess',true,new Date),
  
  //   // {id:1,description:'learn spring framework'},
  //   // {id:2,description:'learn spring Boot'},
  //   // {id:3,description:'learn Microservicess'}
  // ];
  //   todo={
    //   id:1,
//   description:'sdsd'
// }

ngOnInit(){
  debugger
  this.refreshTodos();
  // this.todoService.retrieveAllTodos("Sneha").subscribe(res=>{
  //   debugger
  //   this.todos=res;
  //   console.log(res)
  // });
}
refreshTodos() {
  try{
    this.todoService.retrieveAllTodos('Sneha').subscribe(res=>{
      this.todos=res;
    });

  }catch(error){
    alert(error)
    throw error;
  }
  
}
deleteTodo(id:any){
  // console.log(`delete todo  ${id}`)
  this.todoService.deleteTodo('Sneha',id).subscribe(res=>{
    
    this.refreshTodos()
    this.message = `Delete of Todo ${id} Successful!`;
    // console.log(res)
    
    
  })
}

updateTodo(id:any) {
  this.route.navigate(['todos',id]);
}

addTodo() {
  this.route.navigate(['todos', -1])
}
}
