import { UserInfoComponent } from './../../components/user-info/user-info.component';
import { NewUserComponent } from './../../components/new-user/new-user.component';
import { UsersComponent } from './../../components/users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    data: { title: 'Benion Users'}
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    data: { title: 'Benion New User'}
  },
  {
    path: 'user-info',
    component: UserInfoComponent,
    data: { title: 'Benion User Info'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
