import { HomepageComponent } from './components/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'contacts',
    loadChildren: './modules/contacts/contacts.module#ContactsModule'
  },
  {
    path: 'users',
    loadChildren: './modules/users/users.module#UsersModule'
  },
  {
    path: 'works',
    loadChildren: './modules/works/works.module#WorksModule'
  },
  {
    path: 'todos',
    loadChildren: './modules/todos/todos.module#TodosModule'
  },
  {
    path: 'benion-admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: 'home',
    component: HomepageComponent,
    data: { title: 'Benion Homepage'}
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
