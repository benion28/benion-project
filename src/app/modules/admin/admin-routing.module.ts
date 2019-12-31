import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { AdminUsersComponent } from 'src/app/components/admin-users/admin-users.component';
import { AdminNewsComponent } from 'src/app/components/admin-news/admin-news.component';
import { AdminTodosComponent } from 'src/app/components/admin-todos/admin-todos.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: { title: 'Benion Admin'}
  },
  {
    path: 'admin-users',
    component: AdminUsersComponent,
    data: { title: 'Benion Admin Users'}
  },
  {
    path: 'admin-news',
    component: AdminNewsComponent,
    data: { title: 'Benion Admin News'}
  },
  {
    path: 'admin-todos',
    component: AdminTodosComponent,
    data: { title: 'Benion Admin News'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
