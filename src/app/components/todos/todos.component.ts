import { TodosService } from './../../services/todos.service';
import { Component, OnInit } from '@angular/core';

export class Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

// Delete Todo
  deleteTodo(todo: Todo) {
    console.log('Deleted');
    // Delete In UI
    this.todos = this.todos.filter(item => item.id !== todo.id);

    // Delete On Server
    this.todoService.deleteTodo(todo).subscribe();
  }

// Add Todo On Server
  addTodo(todo: Todo) {
    this.todoService.addTodo(todo).subscribe(item => {
      this.todos.push(item);
    });
  }

}
