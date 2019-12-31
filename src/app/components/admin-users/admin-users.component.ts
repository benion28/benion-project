import { Component, OnInit, ViewChild } from '@angular/core';
import { NewUserComponent } from '../new-user/new-user.component';
import { MatDialogConfig, MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { DialogService } from './../../services/dialog.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { DepartmentsService } from './../../services/departments.service';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(
    private userService: UserService,
    private departmentService: DepartmentsService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    '$key',
    'firstName',
    'lastName',
    'userName',
    'mobile',
    'departmentName',
    'school',
    'city',
    'email',
    'actions'
  ];

  array = [];
  totalUsers = this.array.length;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.userService.getUsers().subscribe(
      list => {
        this.array = list.map(item => {
          const department = 'department';
          const departmentName = this.departmentService.getDepartmentName(item.payload.val()[department]);
          return {
            $key: item.key,
            departmentName,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(this.array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        this.listData.filterPredicate = (data, filter) => {
          return this.displayedColumns.some(element => {
            return element !== 'actions' && data[element].toLowerCase().indexOf(filter) !== -1;
          });
        };
      }
    );
  }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.userService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '75%';
    this.dialog.open(NewUserComponent, dialogConfig);
  }

  onEdit(row) {
    this.userService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '75%';
    this.dialog.open(NewUserComponent, dialogConfig);
  }

  onDelete($key) {
    // if (confirm('Are You Sure You Want To Delete This Record ?')) {
    //   this.userService.deleteUser($key);
    //   this.notificationService.warn(' !! It Has Been Deleted Successfully !!! ');
    // }

    this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
      console.log(response);
      if (response) {
        this.userService.deleteUser($key);
        this.notificationService.warn(' !! It Has Been Deleted Successfully !!! ');
      }
    });
  }

  // onTest() {
  //   this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(response => {
  //     console.log(response);
  //     if (response) {
  //       this.notificationService.warn(' !! It Has Been Deleted Successfully !!! ');
  //     }
  //   });
  // }


}
