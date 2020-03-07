(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-contacts-contacts-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/contacts/contacts.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/contacts/contacts.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"New Message\">\n    <mat-horizontal-stepper [linear]=\"true\" #stepper>\n      <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Enter Reciepient Info</ng-template>\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Email\"\n              formControlName=\"emailControl\"\n              required\n            />\n          </mat-form-field>\n\n          <mat-form-field>\n            <input\n              type=\"text\"\n              formControlName=\"priorityControl\"\n              placeholder=\"Priority\"\n              matInput\n              [matAutocomplete]=\"autoPriority\"\n              required\n            />\n            <mat-autocomplete\n              autoActiveFirstOption\n              #autoPriority=\"matAutocomplete\"\n            >\n              <mat-option\n                *ngFor=\"let priority of priorities\"\n                [value]=\"priority\"\n              >\n                {{ priority }}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input\n              type=\"text\"\n              formControlName=\"departmentControl\"\n              placeholder=\"Department\"\n              matInput\n              [matAutocomplete]=\"autoDepartment\"\n              required\n            />\n            <mat-autocomplete\n              autoActiveFirstOption\n              #autoDepartment=\"matAutocomplete\"\n              [displayWith]=\"getDepartmentName\"\n            >\n              <mat-option\n                *ngFor=\"let department of departments\"\n                [value]=\"department\"\n              >\n                {{ department.name }}\n              </mat-option>\n            </mat-autocomplete>\n          </mat-form-field>\n\n          <div>\n            <button\n              mat-icon-button\n              matStepperNext\n              matTooltip=\"Continue\"\n              matTooltipClass=\"example-tooltip\"\n            >\n              <mat-icon>arrow_forward</mat-icon>\n            </button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [stepControl]=\"secondFormGroup\">\n        <form [formGroup]=\"secondFormGroup\">\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Message\"\n              formControlName=\"messageControl\"\n              required\n            />\n          </mat-form-field>\n          <div>\n            <button\n              mat-icon-button\n              matStepperPrevious\n              matTooltip=\"Previous\"\n              matTooltipClass=\"example-tooltip\"\n            >\n              <mat-icon>arrow_back</mat-icon>\n            </button>\n            <button\n              mat-icon-button\n              matStepperNext\n              matTooltip=\"Finish\"\n              matTooltipClass=\"example-tooltip\"\n            >\n              <mat-icon>mail_outline</mat-icon>\n            </button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step [optional]=\"true\">\n        <ng-template matStepLabel>Preview</ng-template>\n        <p>Message Has Been Sent...!!</p>\n        <div>\n          <button\n            mat-icon-button\n            matStepperPrevious\n            matTooltip=\"Previous\"\n            matTooltipClass=\"example-tooltip\"\n          >\n            <mat-icon>arrow_back</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"stepper.reset()\">\n            <mat-icon>refresh</mat-icon>\n          </button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </mat-tab>\n\n  <mat-tab label=\"New Customer\">\n    <mat-card>\n      <mat-card-title>Add A New Customer</mat-card-title>\n      <mat-card-content>\n        <form>\n          <mat-form-field class=\"full-width\">\n            <input\n              matInput\n              placeholder=\"Email\"\n              [formControl]=\"emailFormControl\"\n              [errorStateMatcher]=\"matcher\"\n            />\n            <mat-hint align=\"end\">Hint: email@domain.com</mat-hint>\n            <mat-error\n              align=\"end\"\n              *ngIf=\"\n                emailFormControl.hasError('email') &&\n                !emailFormControl.hasError('required')\n              \"\n            >\n              Please Enter A Valid Email Address\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"First Name\" />\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Middle Name\" />\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Last Name\" />\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <span matPrefix>+234</span>\n            <input matInput placeholder=\"Phone\" />\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Fax\" />\n            <mat-icon matSuffix>phone</mat-icon>\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Birthday\"\n              [matDatepicker]=\"birthday\"\n              [formControl]=\"dateFormControl\"\n            />\n            <mat-datepicker-toggle\n              matSuffix\n              [for]=\"birthday\"\n            ></mat-datepicker-toggle>\n            <mat-datepicker #birthday></mat-datepicker>\n            <mat-error align=\"end\" *ngIf=\"dateFormControl.hasError('required')\">\n              Please Provide A Valid Date (mm/dd/yyyy)\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              placeholder=\"Proposed Date\"\n              [min]=\"minDate\"\n              [matDatepicker]=\"proposedDate\"\n              [formControl]=\"dateFormControl\"\n            />\n            <mat-datepicker-toggle\n              matSuffix\n              [for]=\"proposedDate\"\n            ></mat-datepicker-toggle>\n            <mat-datepicker #proposedDate></mat-datepicker>\n            <mat-error align=\"end\" *ngIf=\"dateFormControl.hasError('required')\">\n              Please Provide A Valid Date (mm/dd/yyyy)\n            </mat-error>\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput placeholder=\"Fax\" />\n            <mat-icon matSuffix>phone</mat-icon>\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <textarea matInput placeholder=\"Address\"></textarea>\n          </mat-form-field>\n        </form>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button color=\"accent\" (click)=\"openRepDialog()\">\n          SAVE\n        </button>\n        <button mat-raised-button color=\"accent\" (click)=\"openUndoSnackBar()\">\n          UNDO\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Contacts List\">\n    <div class=\"order-actions\">\n      <button mat-button color=\"accent\">DELETE</button>\n      <button mat-button color=\"accent\">ARCHIVE</button>\n    </div>\n    <div class=\"order-container\">\n      <table\n        mat-table\n        [dataSource]=\"dataSource\"\n        matSort\n        multiTemplateDataRows\n      >\n        <ng-container matColumnDef=\"actions\">\n          <th mat-header-cell *matHeaderCellDef>\n            <mat-checkbox (change)=\"selectAll()\"></mat-checkbox>\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-checkbox [checked]=\"element.isChecked\"></mat-checkbox>\n          </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n        <ng-container matColumnDef=\"id\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>#ID</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.id }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n        <ng-container matColumnDef=\"firstName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.firstName }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n        <ng-container matColumnDef=\"lastName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.lastName }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n        <ng-container matColumnDef=\"city\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>City</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.city }}\n          </td>\n          <td mat-footer-cell *matFooterCellDef>\n            Total Contacts Are {{ totalContacts }}\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n        <tr mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n      </table>\n    </div>\n\n    <mat-paginator\n      [length]=\"length\"\n      [pageSize]=\"pageSize\"\n      [pageSizeOptions]=\"pageSizeOptions\"\n      (page)=\"onPageChange($event)\"\n    ></mat-paginator>\n  </mat-tab>\n\n  <mat-tab label=\"Todos\">\n    <mat-card>\n      <mat-card-title>{{\n        contactsService.todoForm.controls[\"$key\"].value\n          ? \"Modify An Existing Todo\"\n          : \"Add A New Todo\"\n      }}</mat-card-title>\n      <mat-card-content>\n        <ng-container>\n          <form\n            [formGroup]=\"contactsService.todoForm\"\n            class=\"normal-form\"\n            (submit)=\"onSubmit()\"\n          >\n            <input type=\"hidden\" formControlName=\"$key\" />\n            <mat-form-field class=\"full-width\">\n              <input\n                formControlName=\"addTodo\"\n                matInput\n                placeholder=\"Add A Todo Item\"\n                required\n              />\n              <mat-error\n                *ngIf=\"\n                  contactsService.todoForm.controls['addTodo'].errors?.required\n                \"\n                >This Field Is Mandatory</mat-error\n              >\n            </mat-form-field>\n            <div class=\"add-bottom-padding\">\n              <mat-checkbox formControlName=\"isCompleted\"\n                >Is Completed</mat-checkbox\n              >\n              <div class=\"todo-button\">\n                <button\n                  mat-raised-button\n                  color=\"accent\"\n                  type=\"submit\"\n                  [disabled]=\"contactsService.todoForm.invalid\"\n                >\n                  {{\n                    contactsService.todoForm.controls[\"$key\"].value\n                      ? \"Update\"\n                      : \"Submit\"\n                  }}\n                </button>\n              </div>\n            </div>\n          </form>\n        </ng-container>\n        <div>\n          <mat-action-list>\n            <mat-list-item @fade *ngFor=\"let todo of contactsService.todos\">\n              <h3 [ngClass]=\"recieveTodo(todo)\" @fade matLine>\n                {{ todo.addTodo }}\n              </h3>\n            </mat-list-item>\n          </mat-action-list>\n        </div>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/rep-dialog/rep-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/rep-dialog/rep-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Select A Response</h1>\n<div mat-dialog-content>\n  <mat-radio-group [(ngModel)]=\"rep\">\n    <mat-radio-button value=\"Benion\">Benion</mat-radio-button>\n    <mat-radio-button value=\"Benion\">Abosh</mat-radio-button>\n    <mat-radio-button value=\"Benion\">Sino</mat-radio-button>\n    <mat-radio-button value=\"Benion\">JoeBlaze</mat-radio-button>\n    <mat-radio-button value=\"Benion\">Vin</mat-radio-button>\n  </mat-radio-group>\n  <div mat-dialog-actions>\n    <button mat-button color=\"primary\" [mat-dialog-close]=\"rep\">SELECT</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    width: 600px;\r\n    margin: auto;\r\n}\r\n\r\n.mat-card .full-width {\r\n    width: 100%;\r\n}\r\n\r\n.mat-card .mat-card-actions {\r\n    display: block;\r\n    text-align: right;\r\n}\r\n\r\n.order-actions {\r\n    margin-top: 20px;\r\n}\r\n\r\n.order-conainer {\r\n    overflow: auto;\r\n    height: 400px;\r\n}\r\n\r\n.example-full-width {\r\n    width: 40%;\r\n}\r\n\r\n.add-bottom-padding .todo-button{\r\n    margin-left: 40%;\r\n}\r\n\r\n.normal-form {\r\n    align-items: center;\r\n}\r\n\r\n.is-completed {\r\n    text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0cy9jb250YWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm1hdC1jYXJkIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm9yZGVyLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLm9yZGVyLWNvbmFpbmVyIHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uYWRkLWJvdHRvbS1wYWRkaW5nIC50b2RvLWJ1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuXHJcbi5ub3JtYWwtZm9ybSB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXMtY29tcGxldGVkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/contacts/contacts.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/contacts/contacts.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rep-dialog/rep-dialog.component */ "./src/app/components/rep-dialog/rep-dialog.component.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var src_app_fade_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/fade-animations */ "./src/app/fade-animations.ts");









var Contacts = /** @class */ (function () {
    function Contacts() {
    }
    return Contacts;
}());
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(formBuilder, dialog, snackbar, contactsService, notificationsService, dialogService) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.snackbar = snackbar;
        this.contactsService = contactsService;
        this.notificationsService = notificationsService;
        this.dialogService = dialogService;
        this.totalContacts = this.contactsService.contactSize;
        // Contacts List
        this.displayedColumns = [
            'actions',
            'id',
            'firstName',
            'lastName',
            'city',
        ];
        this.length = 100;
        this.pageIndex = 0;
        this.pageSize = 20;
        this.pageSizeOptions = [1, 2, 5, 10, 20];
        this.minDate = new Date();
        this.priorities = ['High', 'Medium', 'Low'];
        this.departments = [
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
    }
    // Contacts List
    ContactsComponent.prototype.onPageChange = function (event) {
        var previousPageIndex = event.previousPageIndex;
        this.pageIndex = event.pageIndex;
        this.pageSize = event.pageSize;
        this.length = event.length;
        this.loadData(this.pageIndex, this.pageSize);
    };
    ContactsComponent.prototype.loadData = function (pageIndex, pageSize) {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.contactsData.slice(pageIndex, pageIndex + pageSize));
    };
    ContactsComponent.prototype.ngOnInit = function () {
        // Contacts
        this.contactsData = this.contactsService.contacts;
        this.loadData(0, this.pageSize);
        this.dataSource.sort = this.sort;
        // New Customer
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email
        ]);
        this.dateFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
        ]);
        // New Message
        this.firstFormGroup = this.formBuilder.group({
            emailControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            priorityControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            departmentControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.secondFormGroup = this.formBuilder.group({
            messageControl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        // Todos
        this.contactsService.getTodos();
    };
    // Contacts List
    ContactsComponent.prototype.selectAll = function () {
        var e_1, _a;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.contactsData), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                element.isChecked = !element.isChecked;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    // New Message
    ContactsComponent.prototype.getDepartmentName = function (department) {
        var name = 'name';
        return department ? department[name] : undefined;
    };
    // New Customer
    ContactsComponent.prototype.openRepDialog = function () {
        var dialogRef = this.dialog.open(_rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RepDialogComponent"], {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            alert("The User Choose " + result);
        });
    };
    // Todos
    ContactsComponent.prototype.onSubmit = function () {
        if (this.contactsService.todoForm.valid) {
            if (!this.contactsService.todoForm.get('$key').value) {
                this.contactsService.insertTodo(this.contactsService.todoForm.value);
                this.contactsService.todoForm.reset();
                this.contactsService.initializeFormGroup();
                this.notificationsService.success(':: Has Been Submitted Successfully ::');
            }
            else {
                this.contactsService.updateTodo(this.contactsService.todoForm.value);
                this.contactsService.todoForm.reset();
                this.contactsService.initializeFormGroup();
                this.notificationsService.success(':: Has Been Updated Successfully ::');
            }
        }
    };
    ContactsComponent.prototype.recieveTodo = function (todo) {
        this.item = {
            addTodo: todo.addTodo,
            isCompleted: todo.isCompleted
        };
        return this.setClasses(this.item);
    };
    ContactsComponent.prototype.onEdit = function (todo) {
        this.contactsService.populateForm(todo);
        this.contactsService.updateTodo(this.contactsService.todoForm.value);
    };
    ContactsComponent.prototype.onDelete = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            console.log(response);
            if (response) {
                _this.contactsService.deleteTodo($key);
                _this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    // Set Dynamic Classes
    ContactsComponent.prototype.setClasses = function (item) {
        var classes = {
            'is-completed': item.isCompleted
        };
        return classes;
    };
    ContactsComponent.prototype.openUndoSnackBar = function () {
        var snackbarRef = this.snackbar.open('Customer Has Been Saved', 'UNDO', {
            horizontalPosition: 'end'
        });
        snackbarRef.onAction().subscribe(function () {
            alert('Undo That Save Now');
        });
    };
    ContactsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"] },
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
        { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
    ], ContactsComponent.prototype, "sort", void 0);
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/contacts/contacts.component.html"),
            animations: [
                src_app_fade_animations__WEBPACK_IMPORTED_MODULE_8__["fadeAnimation"]
            ],
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/components/contacts/contacts.component.css")]
        })
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/components/rep-dialog/rep-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/rep-dialog/rep-dialog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwLWRpYWxvZy9yZXAtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/rep-dialog/rep-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/rep-dialog/rep-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: RepDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepDialogComponent", function() { return RepDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RepDialogComponent = /** @class */ (function () {
    function RepDialogComponent() {
    }
    RepDialogComponent.prototype.ngOnInit = function () {
    };
    RepDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rep-dialog',
            template: __webpack_require__(/*! raw-loader!./rep-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/rep-dialog/rep-dialog.component.html"),
            styles: [__webpack_require__(/*! ./rep-dialog.component.css */ "./src/app/components/rep-dialog/rep-dialog.component.css")]
        })
    ], RepDialogComponent);
    return RepDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/contacts/contacts-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/contacts/contacts-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"],
        data: { title: 'Benion Contacts' }
    }
];
var ContactsRoutingModule = /** @class */ (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/contacts/contacts.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/contacts/contacts.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/contacts/contacts.component */ "./src/app/components/contacts/contacts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/modules/contacts/contacts-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_components_rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/rep-dialog/rep-dialog.component */ "./src/app/components/rep-dialog/rep-dialog.component.ts");








var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_1__["ContactsComponent"],
                src_app_components_rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RepDialogComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _contacts_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactsRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"]
            ],
            entryComponents: [src_app_components_rep_dialog_rep_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RepDialogComponent"]]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ })

}]);
//# sourceMappingURL=modules-contacts-contacts-module-es5.js.map