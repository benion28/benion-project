import { TodosService } from './../../services/todos.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todos/todos.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  todos: Todo[];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

// Toggle
  onToggle(todo) {
    console.log('Toggled');
    // Toggle In UI
    todo.completed = !todo.completed;
    // Toggle On Server
    this.todoService.toggleCompleted(todo);
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

}
