import { UsersModule } from './../users/users.module';
import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
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
  MatTooltipModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewUserComponent } from 'src/app/components/new-user/new-user.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { AdminTodosComponent } from 'src/app/components/admin-todos/admin-todos.component';
import { AdminNewsComponent } from 'src/app/components/admin-news/admin-news.component';
import { AdminUsersComponent } from 'src/app/components/admin-users/admin-users.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminUsersComponent,
    AdminNewsComponent,
    AdminTodosComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UsersModule,
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
    MatTooltipModule,
    MatListModule,
    MatTabsModule
  ],
  entryComponents: [
    NewUserComponent
]
})
export class AdminModule { }
