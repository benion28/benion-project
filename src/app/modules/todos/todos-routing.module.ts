import { AboutTodosComponent } from './../../components/about-todos/about-todos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from 'src/app/components/todos/todos.component';


const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
    data: { title: 'Benion Todos'}
  },
  {
    path: 'about',
    component: AboutTodosComponent,
    data: { title: 'Benion About Todos'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
