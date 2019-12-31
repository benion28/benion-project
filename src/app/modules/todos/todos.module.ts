import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from 'src/app/components/todos/todos.component';
import { TodoItemComponent } from 'src/app/components/todo-item/todo-item.component';
import { AddTodoComponent } from 'src/app/components/add-todo/add-todo.component';
import { AboutTodosComponent } from 'src/app/components/about-todos/about-todos.component';
import { TodoHeaderComponent } from 'src/app/components/todo-header/todo-header.component';
import { MatListModule, MatCardModule } from '@angular/material';


@NgModule({
  declarations: [
    TodosComponent,
    AddTodoComponent,
    TodoItemComponent,
    AboutTodosComponent,
    TodoHeaderComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatCardModule
  ]
})
export class TodosModule { }
