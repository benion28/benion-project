import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeAnimation } from './../../fade-animations';
import { ContactsService } from './../../services/contacts.service';
import { NotificationsService } from './../../services/notifications.service';
import { DialogService } from './../../services/dialog.service';

@Component({
  selector: 'app-admin-todos',
  templateUrl: './admin-todos.component.html',
  styleUrls: ['./admin-todos.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class AdminTodosComponent implements OnInit {

  item;

  constructor(
    private contactsService: ContactsService,
    private notificationsService: NotificationsService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.contactsService.getTodos();
  }

  onSubmit() {
    if (this.contactsService.todoForm.valid) {
        if (!this.contactsService.todoForm.get('$key').value) {
          this.contactsService.insertTodo(this.contactsService.todoForm.value);
          this.contactsService.todoForm.reset();
          this.contactsService.initializeFormGroup();
          this.notificationsService.success(':: Has Been Submitted Successfully ::');
        } else {
          this.contactsService.updateTodo(this.contactsService.todoForm.value);
          this.contactsService.todoForm.reset();
          this.contactsService.initializeFormGroup();
          this.notificationsService.success(':: Has Been Updated Successfully ::');
        }
      }
    }

    recieveTodo(todo) {
      this.item = {
        addTodo: todo.addTodo,
        isCompleted: todo.isCompleted
      };
      return this.setClasses(this.item);
    }

    onEdit(todo) {
      this.contactsService.populateForm(todo);
    }

    onDelete($key) {
      this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
        console.log(response);
        if (response) {
          this.contactsService.deleteTodo($key);
          this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
        }
      });
    }


    setClasses(item) {
      const classes = {
        'is-completed': item.isCompleted
      };

      return classes;

    }

}
