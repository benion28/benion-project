import { ContactsComponent } from './../../components/contacts/contacts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactsRoutingModule } from './contacts-routing.module';
import {
  MatTabsModule,
  MatInputModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatIconModule,
  MatCardModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatDialogModule,
  MatRadioModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatListModule,
  MatGridListModule
} from '@angular/material';
import { RepDialogComponent } from 'src/app/components/rep-dialog/rep-dialog.component';



@NgModule({
  declarations: [
    ContactsComponent,
    RepDialogComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
    MatSortModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatListModule,
    MatGridListModule
  ],
  entryComponents: [RepDialogComponent]
})
export class ContactsModule { }
