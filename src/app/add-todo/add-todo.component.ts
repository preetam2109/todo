import { Component } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  id: number=0
  todo: Todo = new Todo(this.id, '', false, new Date());


  constructor( private router: Router,private route:ActivatedRoute,private todoService:TodoDataService){

  }
  ngOnInit() {

    this.id = this.route.snapshot.params['id'];


    if (this.id != -1) {
      this.todoService.retrieveTodo('Sneha', this.id)
        .subscribe(
          data => this.todo = data
        )
    
  }
}
saveTodo() {
  if (this.id == -1) { //=== ==
    this.todoService.createTodo('Sneha', this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
  } else {
    this.todoService.updateTodo('Sneha', this.id, this.todo)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['todos'])
        }
      )
  }
}
  }


  


