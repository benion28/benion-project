(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-todos-todos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/components/about-todos/about-todos.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/about-todos/about-todos.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <mat-card>\n    <mat-card-title>About This TodoList Crash Course</mat-card-title>\n\t<mat-card-subtitle>Benion -- #Life_Of_A_Programmer</mat-card-subtitle>\n    <div class=\"card-image\">\n      <img mat-card-image src=\"/assets/images/benion.jpg\">\n    </div>\n    <mat-card-content>\n      <mat-list>\n        <h3 mat-list-item>\n          {{ about }}\n        </h3>\n      </mat-list>\n    </mat-card-content>\n    <mat-card-actions></mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-todo/add-todo.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-todo/add-todo.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form\">\n    <input type=\"text \" name=\"title\" [(ngModel)]=\"title\" placeholder=\"Add Todo\" />\n    <input type=\"submit\" value=\"Add Item\" (ngSubmit)=\"onAddItem()\" class=\"button\" />\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todo-header/todo-header.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todo-header/todo-header.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n    <h1>Benion Todo Lists</h1>\n    <nav>\n        <a routerLink=\"/todos\">Home</a> || <a routerLink=\"/todos/about\">About</a>\n    </nav>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todo-item/todo-item.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todo-item/todo-item.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"setClasses()\">\n  <p>\n    <input (change)=\"onToggle(todo)\" type=\"checkbox\" />\n    {{ todo.title }}\n    <button (click)=\"onDelete(todo)\" class=\"delete\">Delete</button>\n  </p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/todos/todos.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/todos/todos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-todo-header></app-todo-header>\n<app-add-todo (addTodo)=\"addTodo($event)\"></app-add-todo>\n<app-todo-item\n  *ngFor=\"let todo of todos\"\n  [todo]=\"todo\"\n  (deleteTodo)=\"deleteTodo($event)\"\n>\n  <li>{{ todo.title }}</li>\n</app-todo-item>\n"

/***/ }),

/***/ "./src/app/components/about-todos/about-todos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/about-todos/about-todos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    max-width: 500px;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC10b2Rvcy9hYm91dC10b2Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LXRvZG9zL2Fib3V0LXRvZG9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/about-todos/about-todos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/about-todos/about-todos.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutTodosComponent", function() { return AboutTodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutTodosComponent = class AboutTodosComponent {
    constructor() {
        this.about = `This is one of my numerous programming crash courses which i always work on
  as it is part of my dialy job. This Todo fetches Data from JSON Placeholder and with this we will use it to implement CRUD Operations`;
    }
    ngOnInit() {
    }
};
AboutTodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about-todos',
        template: __webpack_require__(/*! raw-loader!./about-todos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/about-todos/about-todos.component.html"),
        styles: [__webpack_require__(/*! ./about-todos.component.css */ "./src/app/components/about-todos/about-todos.component.css")]
    })
], AboutTodosComponent);



/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\r\n    display: inline-block;\r\n    padding: 7px 20px;\r\n    border: none;\r\n    background: #555;\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n    background: #666;\r\n}\r\n\r\n.form {\r\n    display: flex;\r\n}\r\n\r\n.form input[type=\"text\"] {\r\n    flex: 10;\r\n    padding: 5px;\r\n}\r\n\r\n.form input[type=\"submit\"] {\r\n    flex: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksT0FBTztBQUNYIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtdG9kby9hZGQtdG9kby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjY2O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZm9ybSBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICBmbGV4OiAyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/add-todo/add-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-todo/add-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodoComponent", function() { return AddTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddTodoComponent = class AddTodoComponent {
    constructor() {
        this.addTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onAddItem() {
        const todo = {
            title: this.title,
            completed: false
        };
        this.addTodo.emit(todo);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddTodoComponent.prototype, "addTodo", void 0);
AddTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-todo',
        template: __webpack_require__(/*! raw-loader!./add-todo.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-todo/add-todo.component.html"),
        styles: [__webpack_require__(/*! ./add-todo.component.css */ "./src/app/components/add-todo/add-todo.component.css")]
    })
], AddTodoComponent);



/***/ }),

/***/ "./src/app/components/todo-header/todo-header.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/todo-header/todo-header.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\r\n    background: #333;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n\r\n.header a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n}\r\n\r\na {\r\n    color: #333;\r\n    text-decoration: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWhlYWRlci90b2RvLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWhlYWRlci90b2RvLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIGEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-header/todo-header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/todo-header/todo-header.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoHeaderComponent", function() { return TodoHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoHeaderComponent = class TodoHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
TodoHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo-header',
        template: __webpack_require__(/*! raw-loader!./todo-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todo-header/todo-header.component.html"),
        styles: [__webpack_require__(/*! ./todo-header.component.css */ "./src/app/components/todo-header/todo-header.component.css")]
    })
], TodoHeaderComponent);



/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 1.4;\r\n}\r\n\r\n.container {\r\n    padding: 0 1rem;\r\n}\r\n\r\n.delete {\r\n    background: #ff0000;\r\n    color: #fff;\r\n    border: none;\r\n    padding: 5px 9px;\r\n    border-radius: 50%;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n.check {\r\n    cursor: pointer;\r\n}\r\n\r\n.todo {\r\n    background: #18054b;\r\n    padding: 10px;\r\n    border-bottom: 1px #ccc dotted;\r\n}\r\n\r\n.is-complete {\r\n    text-decoration: line-through;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0vdG9kby1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kby1pdGVtL3RvZG8taXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcblxyXG4uZGVsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZjAwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCA5cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGVjayB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50b2RvIHtcclxuICAgIGJhY2tncm91bmQ6ICMxODA1NGI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICNjY2MgZG90dGVkO1xyXG59XHJcblxyXG4uaXMtY29tcGxldGUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-item/todo-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-item/todo-item.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoItemComponent", function() { return TodoItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TodoItemComponent = class TodoItemComponent {
    constructor(todoService) {
        this.todoService = todoService;
        this.deleteTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
    }
    // Set Dynamic Classes
    setClasses() {
        const classes = {
            todo: true,
            'is-complete': this.todo.completed
        };
        return classes;
    }
    // Toggle
    onToggle(todo) {
        console.log('Toggled');
        // Toggle In UI
        todo.completed = !todo.completed;
        // Toggle On Server
        this.todoService.toggleCompleted(todo);
    }
    onDelete(todo) {
        this.deleteTodo.emit(todo);
    }
};
TodoItemComponent.ctorParameters = () => [
    { type: _services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], TodoItemComponent.prototype, "todo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], TodoItemComponent.prototype, "deleteTodo", void 0);
TodoItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-todo-item',
        template: __webpack_require__(/*! raw-loader!./todo-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todo-item/todo-item.component.html"),
        styles: [__webpack_require__(/*! ./todo-item.component.css */ "./src/app/components/todo-item/todo-item.component.css")]
    })
], TodoItemComponent);



/***/ }),

/***/ "./src/app/components/todos/todos.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/todos/todos.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    line-height: 1.4;\r\n}\r\n\r\n.container {\r\n    padding: 0 1rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2Rvcy90b2Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0FBQ3BCOztBQUdBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9kb3MvdG9kb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/todos/todos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/todos/todos.component.ts ***!
  \*****************************************************/
/*! exports provided: Todo, TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



class Todo {
}
let TodosComponent = class TodosComponent {
    constructor(todoService) {
        this.todoService = todoService;
    }
    ngOnInit() {
        this.todoService.getTodos().subscribe(todos => {
            this.todos = todos;
        });
    }
    // Delete Todo
    deleteTodo(todo) {
        console.log('Deleted');
        // Delete In UI
        this.todos = this.todos.filter(item => item.id !== todo.id);
        // Delete On Server
        this.todoService.deleteTodo(todo).subscribe();
    }
    // Add Todo On Server
    addTodo(todo) {
        this.todoService.addTodo(todo).subscribe(item => {
            this.todos.push(item);
        });
    }
};
TodosComponent.ctorParameters = () => [
    { type: _services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }
];
TodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-todos',
        template: __webpack_require__(/*! raw-loader!./todos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/todos/todos.component.html"),
        styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/components/todos/todos.component.css")]
    })
], TodosComponent);



/***/ }),

/***/ "./src/app/modules/todos/todos-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/todos/todos-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: TodosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosRoutingModule", function() { return TodosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_about_todos_about_todos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/about-todos/about-todos.component */ "./src/app/components/about-todos/about-todos.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");





const routes = [
    {
        path: '',
        component: src_app_components_todos_todos_component__WEBPACK_IMPORTED_MODULE_4__["TodosComponent"],
        data: { title: 'Benion Todos' }
    },
    {
        path: 'about',
        component: _components_about_todos_about_todos_component__WEBPACK_IMPORTED_MODULE_1__["AboutTodosComponent"],
        data: { title: 'Benion About Todos' }
    }
];
let TodosRoutingModule = class TodosRoutingModule {
};
TodosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], TodosRoutingModule);



/***/ }),

/***/ "./src/app/modules/todos/todos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/todos/todos.module.ts ***!
  \***********************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _todos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos-routing.module */ "./src/app/modules/todos/todos-routing.module.ts");
/* harmony import */ var src_app_components_todos_todos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/todos/todos.component */ "./src/app/components/todos/todos.component.ts");
/* harmony import */ var src_app_components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/todo-item/todo-item.component */ "./src/app/components/todo-item/todo-item.component.ts");
/* harmony import */ var src_app_components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/add-todo/add-todo.component */ "./src/app/components/add-todo/add-todo.component.ts");
/* harmony import */ var src_app_components_about_todos_about_todos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/about-todos/about-todos.component */ "./src/app/components/about-todos/about-todos.component.ts");
/* harmony import */ var src_app_components_todo_header_todo_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/todo-header/todo-header.component */ "./src/app/components/todo-header/todo-header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");











let TodosModule = class TodosModule {
};
TodosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            src_app_components_todos_todos_component__WEBPACK_IMPORTED_MODULE_5__["TodosComponent"],
            src_app_components_add_todo_add_todo_component__WEBPACK_IMPORTED_MODULE_7__["AddTodoComponent"],
            src_app_components_todo_item_todo_item_component__WEBPACK_IMPORTED_MODULE_6__["TodoItemComponent"],
            src_app_components_about_todos_about_todos_component__WEBPACK_IMPORTED_MODULE_8__["AboutTodosComponent"],
            src_app_components_todo_header_todo_header_component__WEBPACK_IMPORTED_MODULE_9__["TodoHeaderComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _todos_routing_module__WEBPACK_IMPORTED_MODULE_4__["TodosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
        ]
    })
], TodosModule);



/***/ })

}]);
//# sourceMappingURL=modules-todos-todos-module-es2015.js.map