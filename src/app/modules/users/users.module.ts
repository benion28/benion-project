import { UserInfoComponent } from './../../components/user-info/user-info.component';
import { UsersComponent } from './../../components/users/users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from 'src/app/components/new-user/new-user.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSnackBarModule,
  MatTableModule,
  MatIconModule,
  MatSortModule,
  MatPaginatorModule,
  MatDialogModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule
} from '@angular/material';


@NgModule({
  declarations: [
    UsersComponent,
    NewUserComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,
    MatCardModule,
    MatTooltipModule
  ],
  entryComponents: [
    NewUserComponent
]
})
export class UsersModule { }
