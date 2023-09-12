import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { AUTHENTICATED_USER } from '../service/service/basic-authentication.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  id: number=0
  todo: Todo = new Todo(this.id, '', false, new Date());
  username=sessionStorage.getItem(AUTHENTICATED_USER)
  
  


  constructor( private router: Router,private route:ActivatedRoute,private todoService:TodoDataService){

  }
  ngOnInit() {
debugger
console.log("session storage username "+this.username)
    this.id = this.route.snapshot.params['id'];

    if (this.id != -1) {
      debugger
      this.todoService.retrieveTodo(`${this.username}`, this.id)
        .subscribe(
          data => this.todo = data
        )
    
  }
}
saveTodo() {
  if (this.id == -1) { //=== ==
    this.todoService.createTodo(`${this.username}`, this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
  } else {
    this.todoService.updateTodo(`${this.username}`, this.id, this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
  }
}
  }


  


