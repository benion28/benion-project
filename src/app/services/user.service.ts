import { Injectable } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserService {

arrays = [];

  constructor(private firebase: AngularFireDatabase) { }

  userList: AngularFireList<any>;

  userForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    userName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
    birthday: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl(''),
    gender: new FormControl('g0'),
    school: new FormControl('', Validators.required),
    department: new FormControl('d0'),
    isWorking: new FormControl(false)
  });

  initializeFormGroup() {
    this.userForm.setValue({
      $key: null,
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      mobile: '',
      birthday: '',
      password: '',
      city: '',
      gender: 'g0',
      school: '',
      department: 'd0',
      isWorking: false
    });
  }

  getUsers() {
    this.userList = this.firebase.list('users');
    return this.userList.snapshotChanges();
  }

  setUser(user) {
    this.arrays.push({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      mobile: user.mobile,
      birthday: user.birthday,
      password: user.password,
      city: user.city,
      gender: user.gender,
      school: user.school,
      department: user.department,
      isWorking: user.isWorking
    });
  }

  insertUser(user) {
    this.userList.push({
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      mobile: user.mobile,
      birthday: user.birthday,
      password: user.password,
      city: user.city,
      gender: user.gender,
      school: user.school,
      department: user.department,
      isWorking: user.isWorking
    });
  }

  updateUser(user) {
    this.userList.update(user.$key,
      {
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        email: user.email,
        mobile: user.mobile,
        birthday: user.birthday,
        password: user.password,
        city: user.city,
        gender: user.gender,
        school: user.school,
        department: user.department,
        isWorking: user.isWorking
      });
  }

  deleteUser($key: string) {
    this.userList.remove($key);
  }

  populateForm(user) {
    this.userForm.setValue(_.omit(user, 'departmentName'));
  }

}
