import { DepartmentsService } from './../../services/departments.service';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'src/app/services/notifications.service';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private departmentsService: DepartmentsService,
    private notificationsService: NotificationsService,
    public dialogRef: MatDialogRef<NewUserComponent>
    ) { }

  ngOnInit() {
    this.userService.getUsers();
  }

  onClear() {
    this.userService.userForm.reset();
    this.userService.initializeFormGroup();
  }

  onSubmit() {
    if (this.userService.userForm.valid) {
      if (!this.userService.userForm.get('$key').value) {
        this.userService.insertUser(this.userService.userForm.value);
        this.userService.userForm.reset();
        this.userService.initializeFormGroup();
        this.userService.setUser(this.userService.userForm.value);
        this.notificationsService.success(':: Has Been Submitted Successfully ::');
      } else {
        this.userService.updateUser(this.userService.userForm.value);
        this.userService.userForm.reset();
        this.userService.initializeFormGroup();
        this.notificationsService.success(':: Has Been Updated Successfully ::');
      }
      this.onClose();
    }
  }

  onClose() {
    this.userService.userForm.reset();
    this.userService.initializeFormGroup();
    this.dialogRef.close();
  }


}
