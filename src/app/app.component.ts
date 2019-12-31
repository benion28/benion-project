import { Component } from '@angular/core';
import { HomeService } from './services/home.service';
import { UserService } from './services/user.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { NewUserComponent } from './components/new-user/new-user.component';
import { TimeService } from './services/time.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Benion-Project';

  constructor(
    private homeService: HomeService,
    private dialog: MatDialog,
    private userService: UserService,
    private timeService: TimeService
    ) {
    this.homeService.getLogin();
  }


  onLogin() {
    if (this.homeService.loginForm.valid) {
      if (!this.homeService.loginForm.get('$key').value) {
        this.homeService.insertLogin(this.homeService.loginForm.value);
      }
      this.homeService.loginForm.reset();
      this.homeService.initializeFormGroup();
    }
  }

  onCreate() {
    this.userService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '75%';
    this.dialog.open(NewUserComponent, dialogConfig);
  }

  onReload() {
    this.timeService.reloadDateTime();
  }

}
