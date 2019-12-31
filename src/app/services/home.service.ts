import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  logins = [];

  constructor(private firebase: AngularFireDatabase) {
    this.loginList = this.firebase.list('login');
    this.loginList.snapshotChanges().subscribe(
      list => {
        this.logins = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      }
    );
  }

  loginList: AngularFireList<any>;

  loginForm: FormGroup = new FormGroup({
    $key: new FormControl(null),
    userName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  initializeFormGroup() {
    this.loginForm.setValue({
      $key: null,
      userName: '',
      password: ''
    });
  }

  getLogin() {
    return this.loginList.snapshotChanges();
  }

  insertLogin(login) {
    this.loginList.push({
      userName: login.userName,
      password: login.password
    });
  }

  deleteLogin($key: string) {
    this.loginList.remove($key);
  }

}
