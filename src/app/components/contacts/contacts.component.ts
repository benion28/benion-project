import { DepartmentsService } from './../../services/departments.service';
import { UserService } from './../../services/user.service';
import { DialogService } from './../../services/dialog.service';
import { ContactsService } from './../../services/contacts.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar, MatTableDataSource, MatSort, PageEvent } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RepDialogComponent } from '../rep-dialog/rep-dialog.component';
import { NotificationsService } from './../../services/notifications.service';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';
import { fadeAnimation } from 'src/app/fade-animations';


class Contacts {
  id: number;
  firstName: string;
  lastName: string;
  city: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  animations: [
    fadeAnimation
  ]
})
export class ContactsComponent implements OnInit {

  // Contacts List
  contactsData: Contacts[];
  totalContacts: number = this.contactsService.contactSize;

// Contacts List
  displayedColumns: string[] = [
    'actions',
    'id',
    'firstName',
    'lastName',
    'city',
  ];

  dataSource: MatTableDataSource<object>;

  length = 100;
  pageIndex = 0;
  pageSize = 20;
  pageSizeOptions = [1, 2, 5, 10, 20];


// New Customer
  emailFormControl: FormControl;
  dateFormControl: FormControl;
  minDate = new Date();

// New Message
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  priorities: string[] = ['High', 'Medium', 'Low'];
  departments: object[] = [
    {
      id: 1,
      name: 'Complaints'
    },
    {
      id: 2,
      name: 'Loyalties'
    },
    {
      id: 3,
      name: 'Promotions'
    }
  ];

// Todo
  item;


// Contacts List
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  pageEvent: PageEvent;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public snackbar: MatSnackBar,
    private contactsService: ContactsService,
    private notificationsService: NotificationsService,
    private dialogService: DialogService,
  ) { }

  // Contacts List
  onPageChange(event) {
    const previousPageIndex = event.previousPageIndex;
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.length = event.length;
    this.loadData(this.pageIndex, this.pageSize);
  }

  loadData(pageIndex, pageSize) {
    this.dataSource = new MatTableDataSource<object>(this.contactsData.slice(pageIndex, pageIndex + pageSize));
  }

  ngOnInit() {
// Contacts
    this.contactsData = this.contactsService.contacts;
    this.loadData(0, this.pageSize);
    this.dataSource.sort = this.sort;


// New Customer
    this.emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    this.dateFormControl = new FormControl('', [
      Validators.required
    ]);

  // New Message
    this.firstFormGroup = this.formBuilder.group({
      emailControl: ['', Validators.required],
      priorityControl: ['', Validators.required],
      departmentControl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      messageControl: ['', Validators.required]
    });

  // Todos
    this.contactsService.getTodos();
  }

  // Contacts List
  selectAll() {
    for (const element of this.contactsData) {
      element.isChecked = !element.isChecked;
    }
  }

  // New Message
  getDepartmentName(department: object) {
    const name = 'name';
    return department ? department[name] : undefined;
  }

// New Customer
  openRepDialog() {
    const dialogRef = this.dialog.open(RepDialogComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(`The User Choose ${ result }`);
    });
  }

// Todos
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
    this.contactsService.updateTodo(this.contactsService.todoForm.value);
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

  // Set Dynamic Classes
  setClasses(item) {
    const classes = {
      'is-completed': item.isCompleted
    };

    return classes;

  }

  openUndoSnackBar() {
    const snackbarRef = this.snackbar.open('Customer Has Been Saved', 'UNDO', {
      horizontalPosition: 'end'
    });

    snackbarRef.onAction().subscribe(() => {
      alert('Undo That Save Now');
    });
  }

}
