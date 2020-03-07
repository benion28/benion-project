(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/admin/admin.module": [
		"./src/app/modules/admin/admin.module.ts"
	],
	"./modules/contacts/contacts.module": [
		"./src/app/modules/contacts/contacts.module.ts",
		"modules-contacts-contacts-module"
	],
	"./modules/todos/todos.module": [
		"./src/app/modules/todos/todos.module.ts",
		"modules-todos-todos-module"
	],
	"./modules/users/users.module": [
		"./src/app/modules/users/users.module.ts"
	],
	"./modules/works/works.module": [
		"./src/app/modules/works/works.module.ts",
		"modules-works-works-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container class=\"container\" autosize>\n  <mat-drawer #drawer class=\"sidenav\">\n    <mat-action-list>\n      <mat-list-item *ngFor=\"let date of timeService.getDate\">\n        <h1 align=\"center\">{{ date.hour }}:{{ date.minute }}</h1>\n      </mat-list-item>\n    </mat-action-list>\n    <mat-card>\n      <mat-card-header>\n        <div mat-card-avatar></div>\n        <mat-card-title>Bernard Iorver</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src=\"/assets/images/benion.jpg\" />\n      <mat-action-list *ngFor=\"let date of timeService.getDate\">\n        <mat-list-item>\n          <h2 align=\"center\">{{ date.week }}</h2>\n        </mat-list-item>\n      </mat-action-list>\n      <mat-action-list *ngFor=\"let date of timeService.getDate\">\n        <mat-list-item>\n          <h5 align=\"center\">{{ date.day }} {{ date.month }}, {{ date.year }}</h5>\n        </mat-list-item>\n      </mat-action-list>\n      <mat-card-content>\n        <span class=\"menu-span\" align=\"center\">Log In</span>\n        <form\n          class=\"login-form\"\n          [formGroup]=\"homeService.loginForm\"\n          (submit)=\"onLogin()\"\n        >\n          <mat-form-field>\n            <input\n              type=\"text\"\n              formControlName=\"userName\"\n              matInput\n              placeholder=\"User Name\"\n              required\n            />\n            <mat-error\n              *ngIf=\"\n                homeService.loginForm.controls['userName'].errors?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n            <mat-error\n              *ngIf=\"\n                homeService.loginForm.controls['userName'].errors?.maxlength\n              \"\n              >Characters Should Not Be More Than 10</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              type=\"password\"\n              formControlName=\"password\"\n              matInput\n              placeholder=\"Password\"\n              required\n            />\n            <mat-error\n              *ngIf=\"\n                homeService.loginForm.controls['userName'].errors?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n            <mat-error\n              *ngIf=\"\n                homeService.loginForm.controls['userName'].errors?.minlength\n              \"\n              >Characters Should Not Be Less Than 8</mat-error\n            >\n          </mat-form-field>\n          <div>\n            <button\n              mat-raised-button\n              color=\"accent\"\n              type=\"submit\"\n              [disabled]=\"homeService.loginForm.invalid\"\n            >\n              Log In\n            </button>\n          </div>\n        </form>\n      </mat-card-content>\n      <mat-card-actions>\n        <span class=\"center\">Contacts</span>\n        <button mat-icon-button color=\"accent\" class=\"mat-button\" routerLink=\"/contacts\">\n          <mat-icon>people_alt</mat-icon>\n        </button>\n        <span class=\"center\">Users</span>\n        <button mat-icon-button color=\"accent\" class=\"mat-button\" routerLink=\"/users\">\n          <mat-icon>collections</mat-icon>\n        </button>\n        <span class=\"center\">Todos</span>\n        <button mat-icon-button color=\"accent\" class=\"mat-button\" routerLink=\"/todos\">\n          <mat-icon>layers</mat-icon>\n        </button>\n        <span class=\"center\">Works</span>\n        <button mat-icon-button color=\"accent\" class=\"mat-button\" routerLink=\"/works\">\n          <mat-icon>category</mat-icon>\n        </button>\n        <span class=\"center\">User Info</span>\n        <button\n        mat-icon-button  \n        color=\"accent\"\n          class=\"mat-button\"\n          routerLink=\"/users/user-info\"\n        >\n          <mat-icon>info</mat-icon>\n        </button>\n      </mat-card-actions>\n    </mat-card>\n  </mat-drawer>\n  <div class=\"sidenav-content\">\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row>\n        <button\n          class=\"sidenav-button\"\n          mat-icon-button\n          (click)=\"drawer.toggle()\"\n          matTooltip=\"Menu\"\n          matTooltipClass=\"example-tooltip\"\n        >\n          <mat-icon>menu</mat-icon>\n        </button>\n        <button\n          mat-icon-button\n          color=\"ascent\"\n          class=\"mat-button\"\n          matTooltip=\"Home\"\n          matTooltipClass=\"example-tooltip\"\n          routerLink=\"/home\"\n        >\n          <mat-icon>home</mat-icon>\n        </button>\n        <span>Benion World Of Technology</span>\n        <span class=\"spacer\"></span>\n        <mat-action-list>\n          <mat-list-item *ngFor=\"let date of timeService.getDate\">\n            <h1 align=\"center\">{{ date.hour }}:{{ date.minute }}</h1>\n          </mat-list-item>\n        </mat-action-list>\n        <button\n          mat-icon-button\n          matTooltip=\"Reload Time\"\n          matTooltipClass=\"example-tooltip\"\n          (click)=\"onReload()\"\n        >\n          <mat-icon>access_time</mat-icon>\n        </button>\n        <span>Sign Up</span>\n        <button\n          mat-icon-button\n          class=\"sidenav-button\"\n          [matMenuTriggerFor]=\"menu\"\n          matTooltip=\"Sign Up\"\n          matTooltipClass=\"example-tooltip\"\n        >\n          <mat-icon>more_vert</mat-icon>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <mat-card>\n            <mat-card-title>Sign Up</mat-card-title>\n            <mat-card-content> </mat-card-content>\n            <mat-card-actions>\n              <button\n                mat-menu-item\n                matTooltip=\"Create New User\"\n                matTooltipClass=\"example-tooltip\"\n                (click)=\"onCreate()\"\n              >\n                <span>Create An Account</span>\n                <mat-icon>add_box</mat-icon>\n              </button>\n              <button mat-menu-item>\n                <span>Share</span>\n                <mat-icon>publish</mat-icon>\n              </button>\n              <button mat-menu-item disabled>\n                <span>Comment</span>\n                <mat-icon>mode_comment</mat-icon>\n              </button>\n              <button mat-menu-item>\n                <span>Delete</span>\n                <mat-icon>delete</mat-icon>\n              </button>\n            </mat-card-actions>\n          </mat-card>\n        </mat-menu>\n      </mat-toolbar-row>\n    </mat-toolbar>\n    <router-outlet></router-outlet>\n  </div>\n</mat-drawer-container>\n\n\n    <mat-card class=\"bottom-toolbar\">\n      <mat-card-header>\n          <div mat-card-avatar></div>\n          <mat-card-title class=\"card-bottom-title\">CONTACT US</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image class=\"card-bottom-image\" src=\"/assets/images/benion.jpg\">\n      <mat-card-content>\n          <span class=\"card-bottom-span\">Benion</span>\n      </mat-card-content>\n      <mat-card-actions class=\"card-bottom-actions\">\n        <div class=\"first-div\">\n          <mat-action-list>\n            <mat-list-item>\n              <a href=\"https://facebook.com/biorver.7\"><mat-icon matListIcon color=\"accent\">person_add</mat-icon></a>\n              <h6 matLine>Add Admin On Facebook</h6>\n            </mat-list-item>\n            <mat-list-item>\n              <a href=\"https://twitter.com/benion28\"><mat-icon matListIcon color=\"accent\">verified_user</mat-icon></a>\n              <h6 matLine>Follow Admin On Twitter</h6>\n            </mat-list-item>\n            <mat-list-item>\n              <a href=\"https://instagram.com/benion28\"><mat-icon matListIcon color=\"accent\">stars</mat-icon></a>\n              <h6 matLine>Follow Admin On Instagram</h6>\n            </mat-list-item>\n            <mat-list-item>\n              <a href=\"https://facebook.com/benion4life\"><mat-icon matListIcon color=\"accent\">thumb_up_alt</mat-icon></a>\n              <h6 matLine>Like Our Facebook Page</h6>\n            </mat-list-item>\n          </mat-action-list>\n        </div>\n        <div class=\"second-div\">\n          <header>Other Works</header>\n          <div>\n            <a href=\"https://benion28.github.io/validation/\"><mat-icon matTooltip=\"Validation\" matTooltipClass=\"example-tooltip\" color=\"accent\">drafts</mat-icon></a>\n            <a href=\"https://benion28.github.io/counters/\"><mat-icon matTooltip=\"Counters\" matTooltipClass=\"example-tooltip\" color=\"accent\">flag</mat-icon></a>\n            <a href=\"https://benion28.github.io/calculator/\"><mat-icon matTooltip=\"Calculator\" matTooltipClass=\"example-tooltip\" color=\"accent\">policy</mat-icon></a>\n          </div>\n          <div>\n            <a href=\"https://benion28.github.io/transparent/\"><mat-icon matTooltip=\"Transparent\" matTooltipClass=\"example-tooltip\" color=\"accent\">waves</mat-icon></a>\n            <a href=\"https://material-8a238.firebaseapp.com/\"><mat-icon matTooltip=\"Material\" matTooltipClass=\"example-tooltip\" color=\"accent\">ballot</mat-icon></a>\n            <a href=\"https://todolists-92cb4.firebaseapp.com/\"><mat-icon matTooltip=\"Todolist\" matTooltipClass=\"example-tooltip\" color=\"accent\">gesture</mat-icon></a>\n          </div>\n        </div>\n      </mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-news/admin-news.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-news/admin-news.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  mat-icon-button\n  color=\"accent\"\n  class=\"mat-button\"\n  matTooltip=\"Admin Home\"\n  matTooltipClass=\"example-tooltip\"\n  routerLink=\"/benion-admin\"\n>\n  <mat-icon>home</mat-icon>\n</button>\n\n<mat-tab-group>\n  <mat-tab label=\"Top Stories\">\n    <mat-card>\n      <mat-card-title>{{\n        topStoriesNews.topStoriesForm.controls[\"$key\"].value\n          ? \"Modify An Existing Top Stories News\"\n          : \"Add A Top Stories News\"\n      }}</mat-card-title>\n      <mat-card-content>\n        <form\n          [formGroup]=\"topStoriesNews.topStoriesForm\"\n          class=\"normal-form\"\n          (submit)=\"onSubmitTopStories()\"\n        >\n          <input type=\"hidden\" formControlName=\"$key\" />\n          <input type=\"hidden\" formControlName=\"isView\" />\n          <mat-form-field class=\"full-width\">\n            <input\n              formControlName=\"title\"\n              matInput\n              placeholder=\"Add A News\"\n              required\n            />\n            <mat-error\n              *ngIf=\"\n                topStoriesNews.topStoriesForm.controls['title'].errors\n                  ?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <textarea\n              formControlName=\"details\"\n              matInput\n              placeholder=\"Add News Content\"\n              required\n            ></textarea>\n            <mat-error\n              *ngIf=\"\n                topStoriesNews.topStoriesForm.controls['details'].errors\n                  ?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <div class=\"add-bottom-padding\">\n            <div class=\"news-button\">\n              <button\n                mat-raised-button\n                color=\"accent\"\n                type=\"submit\"\n                [disabled]=\"topStoriesNews.topStoriesForm.invalid\"\n              >\n                {{\n                  topStoriesNews.topStoriesForm.controls[\"$key\"].value\n                    ? \"Update\"\n                    : \"Submit\"\n                }}\n              </button>\n            </div>\n          </div>\n        </form>\n        <div>\n          <mat-action-list>\n            <mat-list-item @fade *ngFor=\"let news of topStoriesNews.topStories\">\n              <mat-icon\n                @fade\n                color=\"warn\"\n                (click)=\"onDeleteTopStories(news.$key)\"\n                matTooltip=\"Delete\"\n                matTooltipClass=\"news-icon-button\"\n                matListIcon\n                >delete_outline</mat-icon\n              >\n              <h3 @fade align=\"center\" matLine>{{ news.title }}</h3>\n              <mat-icon\n                @fade\n                mat-list-item\n                (click)=\"onEditTopStories(news)\"\n                matTooltip=\"Edit\"\n                matTooltipClass=\"news-icon-button\"\n                >create</mat-icon\n              >\n            </mat-list-item>\n          </mat-action-list>\n        </div>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Sports\">\n    <mat-card>\n      <mat-card-title>{{\n        sportsNews.sportsForm.controls[\"$key\"].value\n          ? \"Modify An Existing Sports News\"\n          : \"Add A Sports News\"\n      }}</mat-card-title>\n      <mat-card-content>\n        <form\n          [formGroup]=\"sportsNews.sportsForm\"\n          class=\"normal-form\"\n          (submit)=\"onSubmitSports()\"\n        >\n          <input type=\"hidden\" formControlName=\"$key\" />\n          <input type=\"hidden\" formControlName=\"isView\" />\n          <mat-form-field class=\"full-width\">\n            <input\n              formControlName=\"title\"\n              matInput\n              placeholder=\"Add A News\"\n              required\n            />\n            <mat-error\n              *ngIf=\"sportsNews.sportsForm.controls['title'].errors?.required\"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <textarea\n              formControlName=\"details\"\n              matInput\n              placeholder=\"Add News Content\"\n              required\n            ></textarea>\n            <mat-error\n              *ngIf=\"\n              sportsNews.sportsForm.controls['details'].errors\n                  ?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <div class=\"add-bottom-padding\">\n            <div class=\"news-button\">\n              <button\n                mat-raised-button\n                color=\"accent\"\n                type=\"submit\"\n                [disabled]=\"sportsNews.sportsForm.invalid\"\n              >\n                {{\n                  sportsNews.sportsForm.controls[\"$key\"].value\n                    ? \"Update\"\n                    : \"Submit\"\n                }}\n              </button>\n            </div>\n          </div>\n        </form>\n        <div>\n          <mat-action-list>\n            <mat-list-item @fade *ngFor=\"let news of sportsNews.sports\">\n              <mat-icon\n                @fade\n                color=\"warn\"\n                (click)=\"onDeleteSports(news.$key)\"\n                matTooltip=\"Delete\"\n                matTooltipClass=\"news-icon-button\"\n                matListIcon\n                >delete_outline</mat-icon\n              >\n              <h3 @fade align=\"center\" matLine>{{ news.title }}</h3>\n              <mat-icon\n                @fade\n                mat-list-item\n                (click)=\"onEditSports(news)\"\n                matTooltip=\"Edit\"\n                matTooltipClass=\"news-icon-button\"\n                >create</mat-icon\n              >\n            </mat-list-item>\n          </mat-action-list>\n        </div>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Entertainment\">\n    <mat-card>\n      <mat-card-title>{{\n        entertainmentNews.entertainmentForm.controls[\"$key\"].value\n          ? \"Modify An Existing Entertainment News\"\n          : \"Add An Entertainment News\"\n      }}</mat-card-title>\n      <mat-card-content>\n        <form\n          [formGroup]=\"entertainmentNews.entertainmentForm\"\n          class=\"normal-form\"\n          (submit)=\"onSubmitEntertainment()\"\n        >\n          <input type=\"hidden\" formControlName=\"$key\" />\n          <input type=\"hidden\" formControlName=\"isView\" />\n          <mat-form-field class=\"full-width\">\n            <input\n              formControlName=\"title\"\n              matInput\n              placeholder=\"Add A News\"\n              required\n            />\n            <mat-error\n              *ngIf=\"\n                entertainmentNews.entertainmentForm.controls['title'].errors\n                  ?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <textarea\n              formControlName=\"details\"\n              matInput\n              placeholder=\"Add News Content\"\n              required\n            ></textarea>\n            <mat-error\n              *ngIf=\"\n                entertainmentNews.entertainmentForm.controls['details'].errors\n                  ?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <div class=\"add-bottom-padding\">\n            <div class=\"news-button\">\n              <button\n                mat-raised-button\n                color=\"accent\"\n                type=\"submit\"\n                [disabled]=\"entertainmentNews.entertainmentForm.invalid\"\n              >\n                {{\n                  entertainmentNews.entertainmentForm.controls[\"$key\"].value\n                    ? \"Update\"\n                    : \"Submit\"\n                }}\n              </button>\n            </div>\n          </div>\n        </form>\n        <div>\n          <mat-action-list>\n            <mat-list-item @fade *ngFor=\"let news of entertainmentNews.entertainment\">\n              <mat-icon\n                @fade\n                color=\"warn\"\n                (click)=\"onDeleteEntertainment(news.$key)\"\n                matTooltip=\"Delete\"\n                matTooltipClass=\"news-icon-button\"\n                matListIcon\n                >delete_outline</mat-icon\n              >\n              <h3 @fade align=\"center\" matLine>{{ news.title }}</h3>\n              <mat-icon\n                @fade\n                mat-list-item\n                (click)=\"onEditEntertainment(news)\"\n                matTooltip=\"Edit\"\n                matTooltipClass=\"news-icon-button\"\n                >create</mat-icon\n              >\n            </mat-list-item>\n          </mat-action-list>\n        </div>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Education\">\n    <mat-card>\n      <mat-card-title>{{\n        educationNews.educationForm.controls[\"$key\"].value\n          ? \"Modify An Existing Education News\"\n          : \"Add An Education News\"\n      }}</mat-card-title>\n      <mat-card-content>\n        <form\n          [formGroup]=\"educationNews.educationForm\"\n          class=\"normal-form\"\n          (submit)=\"onSubmitEducation()\"\n        >\n          <input type=\"hidden\" formControlName=\"$key\" />\n          <input type=\"hidden\" formControlName=\"isView\" />\n          <mat-form-field class=\"full-width\">\n            <input\n              formControlName=\"title\"\n              matInput\n              placeholder=\"Add A News\"\n              required\n            />\n            <mat-error\n              *ngIf=\"\n                educationNews.educationForm.controls['title'].errors?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <textarea\n              formControlName=\"details\"\n              matInput\n              placeholder=\"Add News Content\"\n              required\n            ></textarea>\n            <mat-error\n              *ngIf=\"\n                educationNews.educationForm.controls['details'].errors?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <div class=\"add-bottom-padding\">\n            <div class=\"news-button\">\n              <button\n                mat-raised-button\n                color=\"accent\"\n                type=\"submit\"\n                [disabled]=\"educationNews.educationForm.invalid\"\n              >\n                {{\n                  educationNews.educationForm.controls[\"$key\"].value\n                    ? \"Update\"\n                    : \"Submit\"\n                }}\n              </button>\n            </div>\n          </div>\n        </form>\n        <div>\n          <mat-action-list>\n            <mat-list-item @fade *ngFor=\"let news of educationNews.education\">\n              <mat-icon\n                @fade\n                color=\"warn\"\n                (click)=\"onDeleteEducation(news.$key)\"\n                matTooltip=\"Delete\"\n                matTooltipClass=\"news-icon-button\"\n                matListIcon\n                >delete_outline</mat-icon\n              >\n              <h3 @fade align=\"center\" matLine>{{ news.title }}</h3>\n              <mat-icon\n                @fade\n                mat-list-item\n                (click)=\"onEditEducation(news)\"\n                matTooltip=\"Edit\"\n                matTooltipClass=\"news-icon-button\"\n                >create</mat-icon\n              >\n            </mat-list-item>\n          </mat-action-list>\n        </div>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Technology\">\n    <mat-card>\n      <mat-card-title>{{\n        technologyNews.technologyForm.controls[\"$key\"].value\n          ? \"Modify An Existing Technology News\"\n          : \"Add A Technology News\"\n      }}</mat-card-title>\n      <mat-card-content>\n        <form\n          [formGroup]=\"technologyNews.technologyForm\"\n          class=\"normal-form\"\n          (submit)=\"onSubmitTechnology()\"\n        >\n          <input type=\"hidden\" formControlName=\"$key\" />\n          <input type=\"hidden\" formControlName=\"isView\" />\n          <mat-form-field class=\"full-width\">\n            <input\n              formControlName=\"title\"\n              matInput\n              placeholder=\"Add A News\"\n              required\n            />\n            <mat-error\n              *ngIf=\"\n                technologyNews.technologyForm.controls['title'].errors\n                  ?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <textarea\n              formControlName=\"details\"\n              matInput\n              placeholder=\"Add News Content\"\n              required\n            ></textarea>\n            <mat-error\n              *ngIf=\"\n                technologyNews.technologyForm.controls['details'].errors\n                  ?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <div class=\"add-bottom-padding\">\n            <div class=\"news-button\">\n              <button\n                mat-raised-button\n                color=\"accent\"\n                type=\"submit\"\n                [disabled]=\"technologyNews.technologyForm.invalid\"\n              >\n                {{\n                  technologyNews.technologyForm.controls[\"$key\"].value\n                    ? \"Update\"\n                    : \"Submit\"\n                }}\n              </button>\n            </div>\n          </div>\n        </form>\n        <div>\n          <mat-action-list>\n            <mat-list-item @fade *ngFor=\"let news of technologyNews.technology\">\n              <mat-icon\n                @fade\n                color=\"warn\"\n                (click)=\"onDeleteTechnology(news.$key)\"\n                matTooltip=\"Delete\"\n                matTooltipClass=\"news-icon-button\"\n                matListIcon\n                >delete_outline</mat-icon\n              >\n              <h3 @fade align=\"center\" matLine>{{ news.title }}</h3>\n              <mat-icon\n                @fade\n                mat-list-item\n                (click)=\"onEditTechnology(news)\"\n                matTooltip=\"Edit\"\n                matTooltipClass=\"news-icon-button\"\n                >create</mat-icon\n              >\n            </mat-list-item>\n          </mat-action-list>\n        </div>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-todos/admin-todos.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-todos/admin-todos.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  mat-icon-button\n  color=\"accent\"\n  class=\"mat-button\"\n  matTooltip=\"Admin Home\"\n  matTooltipClass=\"example-tooltip\"\n  routerLink=\"/benion-admin\"\n>\n  <mat-icon>home</mat-icon>\n</button>\n\n<mat-card>\n    <mat-card-title>{{ contactsService.todoForm.controls['$key'].value?\"Modify An Existing Todo\":\"Add A New Todo\" }}</mat-card-title>\n    <mat-card-content>\n      <ng-container>\n        <form\n          [formGroup]=\"contactsService.todoForm\"\n          class=\"normal-form\"\n          (submit)=\"onSubmit()\"\n        >\n          <input type=\"hidden\" formControlName=\"$key\" />\n          <mat-form-field class=\"full-width\">\n            <input\n              formControlName=\"addTodo\"\n              matInput\n              placeholder=\"Add A Todo Item\"\n              required\n            />\n            <mat-error\n              *ngIf=\"\n                contactsService.todoForm.controls['addTodo'].errors?.required\n              \"\n              >This Field Is Mandatory</mat-error\n            >\n          </mat-form-field>\n          <div class=\"add-bottom-padding\">\n            <mat-checkbox formControlName=\"isCompleted\"\n              >Is Completed</mat-checkbox\n            >\n            <div class=\"todo-button\">\n              <button\n                mat-raised-button\n                color=\"accent\"\n                type=\"submit\"\n                [disabled]=\"contactsService.todoForm.invalid\"\n              >\n              {{ contactsService.todoForm.controls['$key'].value?\"Update\":\"Submit\" }}\n              </button>\n            </div>\n          </div>\n        </form>\n      </ng-container>\n      <div>\n        <mat-action-list>\n          <mat-list-item @fade *ngFor=\"let todo of contactsService.todos\">\n            <mat-icon @fade color=\"warn\" (click)=\"onDelete(todo.$key)\" matTooltip=\"Delete\" matTooltipClass=\"todo-icon-button\" matListIcon>delete_outline</mat-icon>\n            <h3 [ngClass]=\"recieveTodo(todo)\" @fade align=\"center\" matLine>{{ todo.addTodo }}</h3>\n            <mat-icon @fade mat-list-item (click)=\"onEdit(todo)\" matTooltip=\"Edit\" matTooltipClass=\"todo-icon-button\">create</mat-icon>\n          </mat-list-item>\n        </mat-action-list>\n      </div>\n    </mat-card-content>\n    <mat-card-actions></mat-card-actions>\n  </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin-users/admin-users.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin-users/admin-users.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  mat-icon-button\n  color=\"accent\"\n  class=\"mat-button\"\n  matTooltip=\"Admin Home\"\n  matTooltipClass=\"example-tooltip\"\n  routerLink=\"/benion-admin\"\n>\n  <mat-icon>home</mat-icon>\n</button>\n\n<div class=\"search-div\">\n    <button mat-raised-button (click)=\"onCreate()\">\n        <mat-icon matTooltip=\"Create New User\" matTooltipClass=\"example-tooltip\">add</mat-icon>\n    </button>\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\n        <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Search For Data\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\n        <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"searchKey\" (click)=\"onSearchClear()\">\n            <mat-icon>close</mat-icon>\n        </button> \n    </mat-form-field>\n    <div class=\"select-actions\">\n        <button mat-button color=\"accent\">DELETE</button>\n        <button mat-button color=\"accent\">SEND</button>\n        <button mat-button color=\"accent\" (click)=\"reloadChecks()\">RELOAD</button>\n    </div>\n</div>\n\n<div class=\"mat-elevation-z8\">\n    <mat-table [dataSource]=\"listData\" matSort multiTemplateDataRows>\n        <ng-container matColumnDef=\"check\">\n            <mat-header-cell *matHeaderCellDef>\n                <mat-checkbox [checked]=\"checkUser\" (change)=\"selectAll()\"></mat-checkbox>\n            </mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">\n                <mat-checkbox [checked]=\"element.isWorking\" (change)=\"onCheck(element)\"></mat-checkbox>\n            </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"$key\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>#ID</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.$key }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"firstName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.firstName }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"lastName\">\n            <mat-header-cell *matHeaderCellDef>Last Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.lastName }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"userName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>User Name</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.userName }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"email\">\n            <mat-header-cell *matHeaderCellDef>Email Address</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.email }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"mobile\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile No</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.mobile }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"school\">\n            <mat-header-cell *matHeaderCellDef>School</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.school }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"departmentName\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Department</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.department }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"city\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header>City</mat-header-cell>\n            <mat-cell *matCellDef=\"let element\">{{ element.city }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"actions\">\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\n            <mat-cell *matCellDef=\"let row\">\n                <button mat-icon-button matTooltip=\"Edit\" matTooltipClass=\"example-tooltip\" (click)=\"onEdit(row)\"><mat-icon>create</mat-icon></button>\n                <button mat-icon-button color=\"warn\" matTooltip=\"Delete\" matTooltipClass=\"example-tooltip\" (click)=\"onDelete(row.$key)\"><mat-icon>delete_outline</mat-icon></button>\n            </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"loading\">\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                Please Wait, Data Is Loading......\n            </mat-footer-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"noData\">\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                Currently There Is No Data......\n            </mat-footer-cell>\n        </ng-container>\n\t\t<ng-container matColumnDef=\"totalUsers\">\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\n                Total Users Are {{ totalUsers }}\n            </mat-footer-cell>\n        </ng-container>\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n        <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{ 'hide':listData!=null }\"></mat-footer-row>\n        <mat-footer-row *matFooterRowDef=\"[ 'noData' ]\" [ngClass]=\"{ 'hide':!(listData!=null && listData.data.length===0) }\"></mat-footer-row>\n\t\t<mat-footer-row *matFooterRowDef=\"['totalUsers']\"></mat-footer-row>\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[ 5, 10, 25, 50, 75, 100]\" [pageSize]=\"20\" showFirstLastButtons></mat-paginator>\n</div>\n<!-- <button mat-icon-button color=\"warn\" (click)=\"onTest()\"><mat-icon>delete_outline</mat-icon></button> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/admin/admin.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <div mat-card-avatar></div>\n        <mat-card-title>BENION ADMIN PAGE</mat-card-title>\n    </mat-card-header>\n    <img mat-card-image src=\"/assets/images/benion.jpg\">\n    <mat-card-content>\n        <span class=\"menu-span\" align=\"center\">Admin Links</span>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-stroked-button color=\"accent\" class=\"mat-button\" routerLink=\"/benion-admin/admin-users\">\n          Users\n        </button>\n        <button mat-stroked-button color=\"accent\" class=\"mat-button\" routerLink=\"/benion-admin/admin-todos\">\n          Todos\n        </button>\n        <button mat-stroked-button color=\"accent\" class=\"mat-button\" routerLink=\"/benion-admin/admin-news\">\n          News\n        </button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/confirm-dialog/confirm-dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/confirm-dialog/confirm-dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"content-container\">\n        <mat-icon id=\"close-icon\" (click)=\"closeDialog()\">close</mat-icon>\n        <span class=\"content-span full-width\">{{ data.message }}</span>\n    </div>\n    <button mat-flat-button id=\"no-button\" [mat-dialog-close]=\"false\">NO</button>\n    <button mat-flat-button id=\"yes-button\" [mat-dialog-close]=\"true\">YES</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/homepage/homepage.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-marquee duration=\"30\">\n  {{ marquee }}\n</ng-marquee>\n\n<mat-tab-group>\n  <mat-tab label=\"Top Stories\">\n    <mat-card>\n      <mat-card-title>Top Stories</mat-card-title>\n      <mat-card-content>\n        <ng-container>\n          <mat-action-list>\n            <mat-list-item *ngFor=\"let news of topStoriesNews.topStories\">\n              <div *ngIf=\"viewTopStoriesNews === false\">\n                <span matLine>{{ news.title }}</span>\n                <mat-icon matTooltip=\"View\" matTooltipClass=\"example-tooltip\" mat-list-item (click)=\"onViewTopStoriesNews(news)\">menu_book</mat-icon>\n              </div>\n              <div *ngIf=\"news.isView === true\" class=\"news-details\">\n                <h5>{{ news.details }}</h5>\n                <mat-icon class=\"news-close\" matTooltip=\"Close\" matTooltipClass=\"example-tooltip\" (click)=\"onCloseTopStoriesNews(news)\">close</mat-icon>\n              </div>\n            </mat-list-item>\n          </mat-action-list>\n        </ng-container>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n  <mat-tab label=\"Entertainment\">\n    <mat-card>\n      <mat-card-title>Entertainment</mat-card-title>\n      <mat-card-content>\n        <ng-container>\n          <mat-action-list>\n            <mat-list-item *ngFor=\"let news of entertainmentNews.entertainment\">\n              <div *ngIf=\"viewEntertaimentNews === false\">\n                <span matLine>{{ news.title }}</span>\n                <mat-icon matTooltip=\"View\" matTooltipClass=\"example-tooltip\" mat-list-item (click)=\"onViewEntertainmentNews(news)\">menu_book</mat-icon>\n              </div>\n              <div *ngIf=\"news.isView === true\" class=\"news-details\">\n                <h5>{{ news.details }}</h5>\n                <mat-icon class=\"news-close\" matTooltip=\"Close\" matTooltipClass=\"example-tooltip\" (click)=\"onCloseEntertainmentNews(news)\">close</mat-icon>\n              </div>\n            </mat-list-item>\n          </mat-action-list>\n        </ng-container>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n  <mat-tab label=\"Sport\">\n    <mat-card>\n      <mat-card-title>Sport</mat-card-title>\n      <mat-card-content>\n        <ng-container>\n          <mat-action-list>\n            <mat-list-item *ngFor=\"let news of sportsNews.sports\">\n              <div *ngIf=\"viewSportNews === false\">\n                <span matLine>{{ news.title }}</span>\n                <mat-icon matTooltip=\"View\" matTooltipClass=\"example-tooltip\" mat-list-item (click)=\"onViewSportsNews(news)\">menu_book</mat-icon>\n              </div>\n              <div *ngIf=\"news.isView === true\" class=\"news-details\">\n                <h5>{{ news.details }}</h5>\n                <mat-icon class=\"news-close\" matTooltip=\"Close\" matTooltipClass=\"example-tooltip\" (click)=\"onCloseSportsNews(news)\">close</mat-icon>\n              </div>\n            </mat-list-item>\n          </mat-action-list>\n        </ng-container>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n  <mat-tab label=\"Education\">\n    <mat-card>\n      <mat-card-title>Education</mat-card-title>\n      <mat-card-content>\n        <ng-container>\n          <mat-action-list>\n            <mat-list-item *ngFor=\"let news of educationNews.education\">\n              <div *ngIf=\"viewEducationNews === false\">\n                <span matLine>{{ news.title }}</span>\n                <mat-icon matTooltip=\"View\" matTooltipClass=\"example-tooltip\" mat-list-item (click)=\"onViewEducationNews(news)\">menu_book</mat-icon>\n              </div>\n              <div *ngIf=\"news.isView === true\" class=\"news-details\">\n                <h5>{{ news.details }}</h5>\n                <mat-icon class=\"news-close\" matTooltip=\"Close\" matTooltipClass=\"example-tooltip\" (click)=\"onCloseEducationNews(news)\">close</mat-icon>\n              </div>\n            </mat-list-item>\n          </mat-action-list>\n        </ng-container>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n  <mat-tab label=\"Technology\">\n    <mat-card>\n      <mat-card-title>Technology</mat-card-title>\n      <mat-card-content>\n        <ng-container>\n          <mat-action-list>\n            <mat-list-item *ngFor=\"let news of technologyNews.technology\">\n              <div *ngIf=\"viewTechnologyNews === false\">\n                <span matLine>{{ news.title }}</span>\n                <mat-icon matTooltip=\"View\" matTooltipClass=\"example-tooltip\" mat-list-item (click)=\"onViewTechnologyNews(news)\">menu_book</mat-icon>\n              </div>\n              <div *ngIf=\"news.isView === true\" class=\"news-details\">\n                <h5>{{ news.details }}</h5>\n                <mat-icon class=\"news-close\" matTooltip=\"Close\" matTooltipClass=\"example-tooltip\" (click)=\"onCloseTechnologyNews(news)\">close</mat-icon>\n              </div>\n            </mat-list-item>\n          </mat-action-list>\n        </ng-container>\n      </mat-card-content>\n      <mat-card-actions></mat-card-actions>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/new-user/new-user.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/new-user/new-user.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n    <span>{{ userService.userForm.controls['$key'].value?\"Modify An Existing User\":\"Create A New User\" }}</span>\n    <span class=\"fill-remaining-space\"></span>\n    <button class=\"button-dialog-close\" mat-stroked-button (click)=\"onClose()\" tabIndex=\"-1\"><mat-icon>clear</mat-icon></button>\n</mat-toolbar>\n\n<form [formGroup]=\"userService.userForm\" class=\"normal-form\" (submit)=\"onSubmit()\">\n    <mat-grid-list cols=\"3\" rowHeight=\"300px\">\n        <mat-grid-tile>\n            <div class=\"controllers-container\">\n                <input type=\"hidden\" formControlName=\"$key\">\n                <mat-form-field>\n                    <input formControlName=\"firstName\" matInput placeholder=\"First Name\" required>\n                    <mat-error *ngIf=\"userService.userForm.controls['firstName'].errors?.required\">This Field Is Mandatory</mat-error>\n                    <mat-error *ngIf=\"userService.userForm.controls['firstName'].errors?.maxlength\">Characters Should Not Be More Than 10</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input formControlName=\"lastName\" matInput placeholder=\"Last Name\" required>\n                    <mat-error *ngIf=\"userService.userForm.controls['lastName'].errors?.required\">This Field Is Mandatory</mat-error>\n                    <mat-error *ngIf=\"userService.userForm.controls['lastName'].errors?.maxlength\">Characters Should Not Be More Than 10</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input formControlName=\"userName\" matInput placeholder=\"User Name\" required>\n                    <mat-error *ngIf=\"userService.userForm.controls['userName'].errors?.required\">This Field Is Mandatory</mat-error>\n                    <mat-error *ngIf=\"userService.userForm.controls['userName'].errors?.maxlength\">Characters Should Not Be More Than 10</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input formControlName=\"email\" matInput placeholder=\"Email Address\" required>\n                    <mat-error *ngIf=\"userService.userForm.controls['email'].errors?.required\">This Field Is Mandatory</mat-error>\n                    <mat-error *ngIf=\"userService.userForm.controls['email'].errors?.email\">Please Provide A Valid Email</mat-error>\n                </mat-form-field>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"controllers-container\">\n                <mat-form-field>\n                    <input type=\"number\" formControlName=\"mobile\" matInput placeholder=\"Mobile No\" required>\n                    <mat-error *ngIf=\"userService.userForm.controls['mobile'].errors?.required\">This Field Is Mandatory</mat-error>\n                    <mat-error *ngIf=\"userService.userForm.controls['mobile'].errors?.minlength\">Characters Should Not Be Less Than 8</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input formControlName=\"password\" matInput placeholder=\"Password\" required type=\"password\">\n                    <mat-error *ngIf=\"userService.userForm.controls['password'].errors?.required\">This Field Is Mandatory</mat-error>\n                    <mat-error *ngIf=\"userService.userForm.controls['password'].errors?.minlength\">Characters Should Not Be Less Than 8</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <input formControlName=\"city\" matInput placeholder=\"City\">\n                </mat-form-field>\n                <mat-form-field>\n                    <input formControlName=\"school\" matInput placeholder=\"School\" required>\n                    <mat-error>This Field Is Mandatory</mat-error>\n                </mat-form-field>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile>\n            <div class=\"controllers-container\">\n                <div class=\"add-bottom-padding\">\n                    <mat-radio-group formControlName=\"gender\">\n                        <mat-radio-button value=\"g0\">Male</mat-radio-button>\n                        <mat-radio-button value=\"g1\">Female</mat-radio-button>\n                        <mat-radio-button value=\"g2\">Others</mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <mat-form-field>\n                    <mat-select formControlName=\"department\" placeholder=\"Department\" >\n                        <mat-option>None</mat-option>\n                        <ng-container *ngFor=\"let department of departmentsService.array\">\n                            <mat-option value=\"{{ department.$key}} \">{{ department.code }} -- {{ department.name }}</mat-option>\n                        </ng-container>\n                        <!-- <ng-container *ngFor=\"let department of departmentsService.departments\">\n                            <mat-option value=\"{{ department.id}}\">{{ department.code }} -- {{ department.name }}</mat-option>\n                        </ng-container> -->\n                    </mat-select>\n                </mat-form-field>\n                <mat-form-field>\n                    <input formControlName=\"birthday\" matInput [matDatepicker]=\"picker\" placeholder=\"Birthday\" required>\n                    <mat-error>Please Provide A Valid Date (mm/dd/yyyy)</mat-error>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n                <div class=\"add-bottom-padding\">\n                    <mat-checkbox formControlName=\"isWorking\">Have A Job</mat-checkbox>\n                </div>\n                <div class=\"button-row\">\n                    <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"userService.userForm.invalid\">{{ userService.userForm.controls['$key'].value?\"Update\":\"Submit\" }}</button>\n                    <button mat-raised-button color=\"warn\" (click)=\"onClear()\">Reset</button>\n                </div>\n            </div>\n        </mat-grid-tile>\n    </mat-grid-list>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/user-info/user-info.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/user-info/user-info.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <div mat-card-avatar></div>\n        <mat-card-title>Bernard Bemshima Iorver</mat-card-title>\n        <mat-card-subtitle>Benion</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"/assets/images/abosho.jpg\">\n    <mat-card-content>\n        <p>Yeh This Is My Princessa ... Love Ya.. #Miss_Abosh</p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button color=\"accent\">LIKE</button>\n        <button mat-button color=\"accent\">DELETE</button>\n        <div class=\"flex-spacer\"></div>\n        <button mat-icon-button><mat-icon>publish</mat-icon></button>\n    </mat-card-actions>\n\n\n    <img mat-card-image src=\"/assets/images/chiki.jpg\">\n    <mat-card-content>\n        <p>My Troublesome Kid Sis. Heart Ya.. #Chiki</p>\n    </mat-card-content>\n    <mat-card-actions>\n        <button mat-button color=\"accent\">LIKE</button>\n        <button mat-button color=\"accent\">DELETE</button>\n        <div class=\"flex-spacer\"></div>\n        <button mat-icon-button><mat-icon>publish</mat-icon></button>\n    </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/users/users.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/users/users.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"search-div\">\r\n    <button mat-raised-button (click)=\"onCreate()\">\r\n        <mat-icon matTooltip=\"Create New User\" matTooltipClass=\"example-tooltip\">add</mat-icon>\r\n    </button>\r\n    <mat-form-field class=\"search-form-field\" floatLabel=\"never\">\r\n        <input matInput [(ngModel)]=\"searchKey\" placeholder=\"Search For Data\" autocomplete=\"off\" (keyup)=\"applyFilter()\">\r\n        <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"searchKey\" (click)=\"onSearchClear()\">\r\n            <mat-icon>close</mat-icon>\r\n        </button> \r\n    </mat-form-field>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8\">\r\n    <mat-table [dataSource]=\"listData\" matSort multiTemplateDataRows>\r\n        <ng-container matColumnDef=\"$key\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>#ID</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.$key }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"firstName\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>First Name</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.firstName }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"lastName\">\r\n            <mat-header-cell *matHeaderCellDef>Last Name</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.lastName }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"userName\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>User Name</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.userName }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"email\">\r\n            <mat-header-cell *matHeaderCellDef>Email Address</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.email }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"mobile\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile No</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.mobile }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"school\">\r\n            <mat-header-cell *matHeaderCellDef>School</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.school }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"departmentName\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>Department</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.department }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"city\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header>City</mat-header-cell>\r\n            <mat-cell *matCellDef=\"let element\">{{ element.city }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"actions\">\r\n            <mat-header-cell *matHeaderCellDef></mat-header-cell>\r\n            <mat-cell *matCellDef=\"let row\">\r\n                <button mat-icon-button matTooltip=\"Edit\" matTooltipClass=\"example-tooltip\" (click)=\"onEdit(row)\"><mat-icon>launch</mat-icon></button>\r\n                <button mat-icon-button color=\"warn\" matTooltip=\"Delete\" matTooltipClass=\"example-tooltip\" (click)=\"onDelete(row.$key)\"><mat-icon>delete_outline</mat-icon></button>\r\n            </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"loading\">\r\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                Please Wait, Data Is Loading......\r\n            </mat-footer-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"noData\">\r\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                Currently There Is No Data......\r\n            </mat-footer-cell>\r\n        </ng-container>\r\n\t\t<ng-container matColumnDef=\"totalUsers\">\r\n            <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                Total Users Are {{ totalUsers }}\r\n            </mat-footer-cell>\r\n        </ng-container>\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        <mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{ 'hide':listData!=null }\"></mat-footer-row>\r\n        <mat-footer-row *matFooterRowDef=\"[ 'noData' ]\" [ngClass]=\"{ 'hide':!(listData!=null && listData.data.length===0) }\"></mat-footer-row>\r\n\t\t<!-- <mat-footer-row *matFooterRowDef=\"['totalUsers']\"></mat-footer-row> -->\r\n    </mat-table>\r\n    <mat-paginator [pageSizeOptions]=\"[ 5, 10, 25, 50, 75, 100]\" [pageSize]=\"20\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<!-- <button mat-icon-button color=\"warn\" (click)=\"onTest()\"><mat-icon>delete_outline</mat-icon></button> -->"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: 'contacts',
        loadChildren: './modules/contacts/contacts.module#ContactsModule'
    },
    {
        path: 'users',
        loadChildren: './modules/users/users.module#UsersModule'
    },
    {
        path: 'works',
        loadChildren: './modules/works/works.module#WorksModule'
    },
    {
        path: 'todos',
        loadChildren: './modules/todos/todos.module#TodosModule'
    },
    {
        path: 'benion-admin',
        loadChildren: './modules/admin/admin.module#AdminModule'
    },
    {
        path: 'home',
        component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"],
        data: { title: 'Benion Homepage' }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.container .mat-drawer {\r\n  width: 220px;\r\n}\r\n\r\n.container .mat-drawer .mat-button {\r\n  display: block;\r\n  width: 30%;\r\n  text-align: center;\r\n  -webkit-text-decoration-color: green;\r\n          text-decoration-color: green;\r\n  cursor: pointer;\r\n  height: 5vh;\r\n}\r\n\r\n.container .sidenav-content .sidenav-button {\r\n  cursor: pointer;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.search-div {\r\n  margin: 10px;\r\n}\r\n\r\n.search-form-field {\r\n  width: 60%;\r\n  margin-left: 10px;\r\n  padding: 5px 10px;\r\n  background-color: #f5f5f5;\r\n  border-radius: 5px;\r\n}\r\n\r\n.search-form-field div.mat-form-field-underline {\r\n  display: none;\r\n}\r\n\r\n.search-form-field div.mat-form-field-infix {\r\n  border-top: 0px;\r\n}\r\n\r\n.search-form-field div.mat-form-field-wrapper {\r\n  padding-bottom: 0px;\r\n}\r\n\r\n.search-form-field div.mat-form-field-suffix button {\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n\r\n.login-form {\r\n  font-size: 12pt;\r\n}\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-card-title {\r\n  position: absolute;\r\n  top: 3%;\r\n  left: 5%;\r\n}\r\n\r\n.menu-span {\r\n  align-items: center;\r\n  text-align: center;\r\n  font-size: 13pt;\r\n}\r\n\r\n.mat-card-image {\r\n  border-radius: 50%;\r\n  width: 100%;\r\n  height: 100%;\r\n  align-items: center;\r\n}\r\n\r\n.bottom-toolbar {\r\n  width: 100%;\r\n  position: absolute;\r\n  top: 100%;\r\n  height: 35vh;\r\n}\r\n\r\n.bottom-toolbar .card-bottom-image {\r\n  left: 2%;\r\n  left: 20%;\r\n  border-radius: 50%;\r\n  width: 10em;\r\n  height: 23vh;\r\n}\r\n\r\n.bottom-toolbar .card-bottom-title {\r\n  position: absolute;\r\n  left: 40%;\r\n}\r\n\r\n.bottom-toolbar .card-bottom-actions .first-div {\r\n  position: absolute;\r\n  left: 30%;\r\n  top: 10%;\r\n}\r\n\r\n.bottom-toolbar .card-bottom-actions .second-div {\r\n  position: absolute;\r\n  left: 85%;\r\n  top: 15%;\r\n}\r\n\r\n.bottom-toolbar .center {\r\n  position: absolute;\r\n  left: 6%;\r\n}\r\n\r\n.bottom-toolbar .card-bottom-span {\r\n  position: absolute;\r\n  left: 3%;\r\n  font-size: 14pt;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5tYXQtZHJhd2VyIHtcclxuICB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLm1hdC1kcmF3ZXIgLm1hdC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogZ3JlZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGhlaWdodDogNXZoO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5zaWRlbmF2LWNvbnRlbnQgLnNpZGVuYXYtYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4uc2VhcmNoLWRpdiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VhcmNoLWZvcm0tZmllbGQgZGl2Lm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBib3JkZXItdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtZm9ybS1maWVsZCBkaXYubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1mb3JtLWZpZWxkIGRpdi5tYXQtZm9ybS1maWVsZC1zdWZmaXggYnV0dG9uIHtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgd2lkdGg6IDMycHg7XHJcbn1cclxuXHJcbi5sb2dpbi1mb3JtIHtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMyU7XHJcbiAgbGVmdDogNSU7XHJcbn1cclxuXHJcbi5tZW51LXNwYW4ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWltYWdlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3R0b20tdG9vbGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbn1cclxuXHJcbi5ib3R0b20tdG9vbGJhciAuY2FyZC1ib3R0b20taW1hZ2Uge1xyXG4gIGxlZnQ6IDIlO1xyXG4gIGxlZnQ6IDIwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDEwZW07XHJcbiAgaGVpZ2h0OiAyM3ZoO1xyXG59XHJcblxyXG4uYm90dG9tLXRvb2xiYXIgLmNhcmQtYm90dG9tLXRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDAlO1xyXG59XHJcblxyXG4uYm90dG9tLXRvb2xiYXIgLmNhcmQtYm90dG9tLWFjdGlvbnMgLmZpcnN0LWRpdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMwJTtcclxuICB0b3A6IDEwJTtcclxufVxyXG5cclxuLmJvdHRvbS10b29sYmFyIC5jYXJkLWJvdHRvbS1hY3Rpb25zIC5zZWNvbmQtZGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogODUlO1xyXG4gIHRvcDogMTUlO1xyXG59XHJcblxyXG4uYm90dG9tLXRvb2xiYXIgLmNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDYlO1xyXG59XHJcblxyXG4uYm90dG9tLXRvb2xiYXIgLmNhcmQtYm90dG9tLXNwYW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAzJTtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/time.service */ "./src/app/services/time.service.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(homeService, dialog, userService, timeService) {
        this.homeService = homeService;
        this.dialog = dialog;
        this.userService = userService;
        this.timeService = timeService;
        this.title = 'Benion-Project';
        this.homeService.getLogin();
    }
    AppComponent.prototype.onLogin = function () {
        if (this.homeService.loginForm.valid) {
            if (!this.homeService.loginForm.get('$key').value) {
                this.homeService.insertLogin(this.homeService.loginForm.value);
            }
            this.homeService.loginForm.reset();
            this.homeService.initializeFormGroup();
        }
    };
    AppComponent.prototype.onCreate = function () {
        this.userService.initializeFormGroup();
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '75%';
        this.dialog.open(_components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_5__["NewUserComponent"], dialogConfig);
    };
    AppComponent.prototype.onReload = function () {
        this.timeService.reloadDateTime();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
        { type: _services_time_service__WEBPACK_IMPORTED_MODULE_6__["TimeService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_education_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/education.service */ "./src/app/services/education.service.ts");
/* harmony import */ var _services_entertainment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/entertainment.service */ "./src/app/services/entertainment.service.ts");
/* harmony import */ var _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/admin/admin.module */ "./src/app/modules/admin/admin.module.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _services_departments_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/departments.service */ "./src/app/services/departments.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _modules_materials_materials_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/materials/materials.module */ "./src/app/modules/materials/materials.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_marquee__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-marquee */ "./node_modules/ng-marquee/fesm5/ng-marquee.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ "./src/app/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/todos.service */ "./src/app/services/todos.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _services_news_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/sports.service */ "./src/app/services/sports.service.ts");
/* harmony import */ var _services_top_stories_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/top-stories.service */ "./src/app/services/top-stories.service.ts");
/* harmony import */ var _services_technology_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/technology.service */ "./src/app/services/technology.service.ts");































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_12__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_22__["HomepageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _modules_admin_admin_module__WEBPACK_IMPORTED_MODULE_3__["AdminModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
                _modules_materials_materials_module__WEBPACK_IMPORTED_MODULE_11__["MaterialsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                ng_marquee__WEBPACK_IMPORTED_MODULE_15__["NgMarqueeModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_20__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig)
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services_departments_service__WEBPACK_IMPORTED_MODULE_8__["DepartmentsService"],
                _services_notifications_service__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"],
                _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"],
                _services_home_service__WEBPACK_IMPORTED_MODULE_5__["HomeService"],
                _services_contacts_service__WEBPACK_IMPORTED_MODULE_4__["ContactsService"],
                _services_todos_service__WEBPACK_IMPORTED_MODULE_23__["TodosService"],
                _services_news_service__WEBPACK_IMPORTED_MODULE_26__["NewsService"],
                _services_time_service__WEBPACK_IMPORTED_MODULE_27__["TimeService"],
                _services_sports_service__WEBPACK_IMPORTED_MODULE_28__["SportsService"],
                _services_entertainment_service__WEBPACK_IMPORTED_MODULE_2__["EntertainmentService"],
                _services_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"],
                _services_top_stories_service__WEBPACK_IMPORTED_MODULE_29__["TopStoriesService"],
                _services_technology_service__WEBPACK_IMPORTED_MODULE_30__["TechnologyService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]],
            entryComponents: [
                _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmDialogComponent"],
                _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_25__["NewUserComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-news/admin-news.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-news/admin-news.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-bottom-padding .news-button{\r\n    margin-left: 40%;\r\n}\r\n\r\n.normal-form {\r\n    align-items: center;\r\n}\r\n\r\n.mat-card {\r\n    width: 600px;\r\n    margin: auto;\r\n}\r\n\r\n.mat-card .full-width {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1uZXdzL2FkbWluLW5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1uZXdzL2FkbWluLW5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtYm90dG9tLXBhZGRpbmcgLm5ld3MtYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxufVxyXG5cclxuLm5vcm1hbC1mb3JtIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY2FyZCAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-news/admin-news.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-news/admin-news.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNewsComponent", function() { return AdminNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");
/* harmony import */ var src_app_fade_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/fade-animations */ "./src/app/fade-animations.ts");
/* harmony import */ var src_app_services_top_stories_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/top-stories.service */ "./src/app/services/top-stories.service.ts");
/* harmony import */ var src_app_services_entertainment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/entertainment.service */ "./src/app/services/entertainment.service.ts");
/* harmony import */ var src_app_services_sports_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sports.service */ "./src/app/services/sports.service.ts");
/* harmony import */ var src_app_services_education_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/education.service */ "./src/app/services/education.service.ts");
/* harmony import */ var src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/technology.service */ "./src/app/services/technology.service.ts");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");











var AdminNewsComponent = /** @class */ (function () {
    function AdminNewsComponent(topStoriesNews, entertainmentNews, sportsNews, educationNews, technologyNews, notificationsService, dialogService, newsService) {
        this.topStoriesNews = topStoriesNews;
        this.entertainmentNews = entertainmentNews;
        this.sportsNews = sportsNews;
        this.educationNews = educationNews;
        this.technologyNews = technologyNews;
        this.notificationsService = notificationsService;
        this.dialogService = dialogService;
        this.newsService = newsService;
    }
    AdminNewsComponent.prototype.ngOnInit = function () {
        this.topStoriesNews.getTopStories();
        this.entertainmentNews.getEntertainment();
        this.sportsNews.getSports();
        this.educationNews.getEducation();
        this.technologyNews.getTechnology();
    };
    AdminNewsComponent.prototype.onSubmitTopStories = function () {
        if (this.topStoriesNews.topStoriesForm.valid) {
            if (!this.topStoriesNews.topStoriesForm.get('$key').value) {
                this.topStoriesNews.insertTopStories(this.topStoriesNews.topStoriesForm.value);
                this.topStoriesNews.topStoriesForm.reset();
                this.topStoriesNews.initializeFormGroupTopStories();
                this.notificationsService.success(':: Has Been Submitted Successfully ::');
            }
            else {
                this.topStoriesNews.updateTopStories(this.topStoriesNews.topStoriesForm.value);
                this.topStoriesNews.topStoriesForm.reset();
                this.topStoriesNews.initializeFormGroupTopStories();
                this.notificationsService.success(':: Has Been Updated Successfully ::');
            }
        }
    };
    AdminNewsComponent.prototype.onEditTopStories = function (news) {
        this.topStoriesNews.populateTopStoriesForm(news);
    };
    AdminNewsComponent.prototype.onDeleteTopStories = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.topStoriesNews.deleteTopStories($key);
                _this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    AdminNewsComponent.prototype.onSubmitSports = function () {
        if (this.sportsNews.sportsForm.valid) {
            if (!this.sportsNews.sportsForm.get('$key').value) {
                this.sportsNews.insertSports(this.sportsNews.sportsForm.value);
                this.sportsNews.sportsForm.reset();
                this.sportsNews.initializeFormGroupSports();
                this.notificationsService.success(':: Has Been Submitted Successfully ::');
            }
            else {
                this.sportsNews.updateSports(this.sportsNews.sportsForm.value);
                this.sportsNews.sportsForm.reset();
                this.sportsNews.initializeFormGroupSports();
                this.notificationsService.success(':: Has Been Updated Successfully ::');
            }
        }
    };
    AdminNewsComponent.prototype.onEditSports = function (news) {
        this.sportsNews.populateSportsForm(news);
    };
    AdminNewsComponent.prototype.onDeleteSports = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.sportsNews.deleteSports($key);
                _this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    AdminNewsComponent.prototype.onSubmitEntertainment = function () {
        if (this.entertainmentNews.entertainmentForm.valid) {
            if (!this.entertainmentNews.entertainmentForm.get('$key').value) {
                this.entertainmentNews.insertEntertainment(this.entertainmentNews.entertainmentForm.value);
                this.entertainmentNews.entertainmentForm.reset();
                this.entertainmentNews.initializeFormGroupEntertainment();
                this.notificationsService.success(':: Has Been Submitted Successfully ::');
            }
            else {
                this.entertainmentNews.updateEntertainment(this.entertainmentNews.entertainmentForm.value);
                this.entertainmentNews.entertainmentForm.reset();
                this.entertainmentNews.initializeFormGroupEntertainment();
                this.notificationsService.success(':: Has Been Updated Successfully ::');
            }
        }
    };
    AdminNewsComponent.prototype.onEditEntertainment = function (news) {
        this.entertainmentNews.populateEntertainmentForm(news);
    };
    AdminNewsComponent.prototype.onDeleteEntertainment = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.entertainmentNews.deleteEntertainment($key);
                _this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    AdminNewsComponent.prototype.onSubmitEducation = function () {
        if (this.educationNews.educationForm.valid) {
            if (!this.educationNews.educationForm.get('$key').value) {
                this.educationNews.insertEducation(this.educationNews.educationForm.value);
                this.educationNews.educationForm.reset();
                this.educationNews.initializeFormGroupEducation();
                this.notificationsService.success(':: Has Been Submitted Successfully ::');
            }
            else {
                this.educationNews.updateEducation(this.educationNews.educationForm.value);
                this.educationNews.educationForm.reset();
                this.educationNews.initializeFormGroupEducation();
                this.notificationsService.success(':: Has Been Updated Successfully ::');
            }
        }
    };
    AdminNewsComponent.prototype.onEditEducation = function (news) {
        this.educationNews.populateEducationForm(news);
    };
    AdminNewsComponent.prototype.onDeleteEducation = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.educationNews.deleteEducation($key);
                _this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    AdminNewsComponent.prototype.onSubmitTechnology = function () {
        if (this.technologyNews.technologyForm.valid) {
            if (!this.technologyNews.technologyForm.get('$key').value) {
                this.technologyNews.insertTechnology(this.technologyNews.technologyForm.value);
                this.technologyNews.technologyForm.reset();
                this.technologyNews.initializeFormGroupTechnology();
                this.notificationsService.success(':: Has Been Submitted Successfully ::');
            }
            else {
                this.technologyNews.updateTechnology(this.technologyNews.technologyForm.value);
                this.technologyNews.technologyForm.reset();
                this.technologyNews.initializeFormGroupTechnology();
                this.notificationsService.success(':: Has Been Updated Successfully ::');
            }
        }
    };
    AdminNewsComponent.prototype.onEditTechnology = function (news) {
        this.technologyNews.populateTechnologyForm(news);
    };
    AdminNewsComponent.prototype.onDeleteTechnology = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.technologyNews.deleteTechnology($key);
                _this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    AdminNewsComponent.ctorParameters = function () { return [
        { type: src_app_services_top_stories_service__WEBPACK_IMPORTED_MODULE_5__["TopStoriesService"] },
        { type: src_app_services_entertainment_service__WEBPACK_IMPORTED_MODULE_6__["EntertainmentService"] },
        { type: src_app_services_sports_service__WEBPACK_IMPORTED_MODULE_7__["SportsService"] },
        { type: src_app_services_education_service__WEBPACK_IMPORTED_MODULE_8__["EducationService"] },
        { type: src_app_services_technology_service__WEBPACK_IMPORTED_MODULE_9__["TechnologyService"] },
        { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_10__["NotificationsService"] },
        { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] },
        { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_3__["NewsService"] }
    ]; };
    AdminNewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-news',
            template: __webpack_require__(/*! raw-loader!./admin-news.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-news/admin-news.component.html"),
            animations: [
                src_app_fade_animations__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]
            ],
            styles: [__webpack_require__(/*! ./admin-news.component.css */ "./src/app/components/admin-news/admin-news.component.css")]
        })
    ], AdminNewsComponent);
    return AdminNewsComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-todos/admin-todos.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin-todos/admin-todos.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-bottom-padding .todo-button{\r\n    margin-left: 40%;\r\n}\r\n\r\n.normal-form {\r\n    align-items: center;\r\n}\r\n\r\n.is-completed {\r\n    text-decoration: line-through;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi10b2Rvcy9hZG1pbi10b2Rvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi10b2Rvcy9hZG1pbi10b2Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1ib3R0b20tcGFkZGluZyAudG9kby1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG59XHJcblxyXG4ubm9ybWFsLWZvcm0ge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmlzLWNvbXBsZXRlZCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin-todos/admin-todos.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-todos/admin-todos.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminTodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTodosComponent", function() { return AdminTodosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fade_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../fade-animations */ "./src/app/fade-animations.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/contacts.service */ "./src/app/services/contacts.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/dialog.service */ "./src/app/services/dialog.service.ts");






var AdminTodosComponent = /** @class */ (function () {
    function AdminTodosComponent(contactsService, notificationsService, dialogService) {
        this.contactsService = contactsService;
        this.notificationsService = notificationsService;
        this.dialogService = dialogService;
    }
    AdminTodosComponent.prototype.ngOnInit = function () {
        this.contactsService.getTodos();
    };
    AdminTodosComponent.prototype.onSubmit = function () {
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
    AdminTodosComponent.prototype.recieveTodo = function (todo) {
        this.item = {
            addTodo: todo.addTodo,
            isCompleted: todo.isCompleted
        };
        return this.setClasses(this.item);
    };
    AdminTodosComponent.prototype.onEdit = function (todo) {
        this.contactsService.populateForm(todo);
    };
    AdminTodosComponent.prototype.onDelete = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.contactsService.deleteTodo($key);
                _this.notificationsService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    AdminTodosComponent.prototype.setClasses = function (item) {
        var classes = {
            'is-completed': item.isCompleted
        };
        return classes;
    };
    AdminTodosComponent.ctorParameters = function () { return [
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"] },
        { type: _services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] },
        { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"] }
    ]; };
    AdminTodosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-todos',
            template: __webpack_require__(/*! raw-loader!./admin-todos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-todos/admin-todos.component.html"),
            animations: [
                _fade_animations__WEBPACK_IMPORTED_MODULE_2__["fadeAnimation"]
            ],
            styles: [__webpack_require__(/*! ./admin-todos.component.css */ "./src/app/components/admin-todos/admin-todos.component.css")]
        })
    ], AdminTodosComponent);
    return AdminTodosComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-users/admin-users.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin-users/admin-users.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\r\n    display: none;\r\n}\r\n\r\nmat-footer-row mat-footer-cell {\r\n    justify-content: center;\r\n    font-style: italic; \r\n}\r\n\r\nmat-header-row:hover {\r\n    background: #7d3c28;\r\n}\r\n\r\nmat-header-row:active {\r\n    background: #4caf50;\r\n}\r\n\r\nmat-row:hover {\r\n    background: #7d3c28;\r\n}\r\n\r\nmat-row:active {\r\n    background: #4caf50;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi11c2Vycy9hZG1pbi11c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluLXVzZXJzL2FkbWluLXVzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5tYXQtZm9vdGVyLXJvdyBtYXQtZm9vdGVyLWNlbGwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxyXG59XHJcblxyXG5tYXQtaGVhZGVyLXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2QzYzI4O1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLXJvdzphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzRjYWY1MDtcclxufVxyXG5cclxubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2QzYzI4O1xyXG59XHJcblxyXG5tYXQtcm93OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/admin-users/admin-users.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-users/admin-users.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUsersComponent", function() { return AdminUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _services_departments_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/departments.service */ "./src/app/services/departments.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");








var AdminUsersComponent = /** @class */ (function () {
    function AdminUsersComponent(userService, departmentService, dialog, notificationService, dialogService) {
        this.userService = userService;
        this.departmentService = departmentService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.dialogService = dialogService;
        this.checkUser = false;
        this.displayedColumns = [
            'check',
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
        this.array = [];
        this.totalUsers = this.array.length;
    }
    AdminUsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (list) {
            _this.array = list.map(function (item) {
                var department = 'department';
                var departmentName = _this.departmentService.getDepartmentName(item.payload.val()[department]);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key, departmentName: departmentName }, item.payload.val());
            });
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.array);
            _this.listData.sort = _this.sort;
            _this.listData.paginator = _this.paginator;
            _this.listData.filterPredicate = function (data, filter) {
                return _this.displayedColumns.some(function (element) {
                    return element !== 'actions' && data[element].toLowerCase().indexOf(filter) !== -1;
                });
            };
        });
        this.array.forEach(function (user) {
            user.isWorking = false;
        });
    };
    AdminUsersComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.applyFilter();
    };
    AdminUsersComponent.prototype.applyFilter = function () {
        this.listData.filter = this.searchKey.trim().toLowerCase();
    };
    AdminUsersComponent.prototype.onCreate = function () {
        this.userService.initializeFormGroup();
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '75%';
        this.dialog.open(_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__["NewUserComponent"], dialogConfig);
    };
    AdminUsersComponent.prototype.onEdit = function (row) {
        this.userService.populateForm(row);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '75%';
        this.dialog.open(_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__["NewUserComponent"], dialogConfig);
    };
    AdminUsersComponent.prototype.onDelete = function ($key) {
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.userService.deleteUser($key);
                _this.notificationService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    AdminUsersComponent.prototype.selectAll = function () {
        if (!this.checkUser) {
            this.array.forEach(function (user) {
                user.isWorking = true;
            });
            this.checkUser = true;
        }
        else {
            this.array.forEach(function (user) {
                user.isWorking = false;
            });
            this.checkUser = false;
        }
    };
    AdminUsersComponent.prototype.onCheck = function (user) {
        this.array.filter(function (item) {
            item.$key = user.$key;
            item.isWorking = !item.isWorking;
        });
    };
    AdminUsersComponent.prototype.reloadChecks = function () {
        this.array.forEach(function (user) {
            user.isWorking = false;
        });
    };
    AdminUsersComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
        { type: _services_departments_service__WEBPACK_IMPORTED_MODULE_6__["DepartmentsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
        { type: _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: false })
    ], AdminUsersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: false })
    ], AdminUsersComponent.prototype, "paginator", void 0);
    AdminUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-users',
            template: __webpack_require__(/*! raw-loader!./admin-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin-users/admin-users.component.html"),
            styles: [__webpack_require__(/*! ./admin-users.component.css */ "./src/app/components/admin-users/admin-users.component.css")]
        })
    ], AdminUsersComponent);
    return AdminUsersComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-image {\r\n    border-radius: 50%;\r\n    width: 50%;\r\n    height: 50%;\r\n    align-items: center;\r\n  }\r\n\r\n  mat-card {\r\n    display: table;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 15%;\r\n  }\r\n\r\n  mat-card-actions {\r\n    display: flex;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 20%;\r\n    left: 60%; \r\n  }\r\n\r\n  .menu-span {\r\n    align-items: center;\r\n    text-align: center;\r\n    font-size: 13pt;\r\n    position: absolute;\r\n    top: 12%;\r\n    left: 65%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7RUFDWDs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7RUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiAxNSU7XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBsZWZ0OiA2MCU7IFxyXG4gIH1cclxuXHJcbiAgLm1lbnUtc3BhbiB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMiU7XHJcbiAgICBsZWZ0OiA2NSU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/confirm-dialog/confirm-dialog.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/confirm-dialog/confirm-dialog.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/confirm-dialog/confirm-dialog.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/confirm-dialog/confirm-dialog.component.ts ***!
  \***********************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(false);
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! raw-loader!./confirm-dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/components/confirm-dialog/confirm-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ng-marquee {\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    background-color: #091a5d;\r\n    display: flow-root;\r\n}\r\n\r\n.mat-card-content {\r\n    margin-top: 3%;\r\n}\r\n\r\n.mat-card-content .news-details {\r\n    position: absolute;\r\n    top: 10%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0VBQXNFO0lBQ3RFLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nLW1hcnF1ZWUge1xyXG4gICAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsICdUaW1lcyBOZXcgUm9tYW4nLCBzZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTFhNWQ7XHJcbiAgICBkaXNwbGF5OiBmbG93LXJvb3Q7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudCAubmV3cy1kZXRhaWxzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_technology_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/technology.service */ "./src/app/services/technology.service.ts");
/* harmony import */ var _services_sports_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/sports.service */ "./src/app/services/sports.service.ts");
/* harmony import */ var _services_top_stories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/top-stories.service */ "./src/app/services/top-stories.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_fade_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/fade-animations */ "./src/app/fade-animations.ts");
/* harmony import */ var src_app_services_entertainment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/entertainment.service */ "./src/app/services/entertainment.service.ts");
/* harmony import */ var src_app_services_education_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/education.service */ "./src/app/services/education.service.ts");
/* harmony import */ var src_app_services_news_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/news.service */ "./src/app/services/news.service.ts");










var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(topStoriesNews, entertainmentNews, sportsNews, educationNews, technologyNews, newsService, dialogService) {
        this.topStoriesNews = topStoriesNews;
        this.entertainmentNews = entertainmentNews;
        this.sportsNews = sportsNews;
        this.educationNews = educationNews;
        this.technologyNews = technologyNews;
        this.newsService = newsService;
        this.dialogService = dialogService;
        this.viewNews = false;
        this.viewTopStoriesNews = false;
        this.viewSportNews = false;
        this.viewEntertaimentNews = false;
        this.viewEducationNews = false;
        this.viewTechnologyNews = false;
        this.topStories = [
            {
                $key: 'id1',
                $title: 'FIRST NEWS OF THE DAY',
                details: "\n      Manatees have been found as far as 75 kilometres (47 mi) offshore, where there are shallow coastal flats and calm mangrove creeks filled with seagrass. Inland lakes where manatees dwell\n      include Lake Volta, the Inner Niger River Delta in Mali, Lake L\u00E9r\u00E9, and Lake de Tr\u00E9n\u00E9. Due to fluctuating flow rates and water levels in rivers, some of these permanent lakes serve as refuges for\n      manatees in connecting rivers during the dry season. From north to south, the river systems that contain manatees include: the Senegal, Saloum, Gambia, Casamance, Cacheu, Mans\u00F4a, Geba,\n      Buba, Tombali, Cacine, Kogon, Kondoure, Sierra Leone, Great Scarcies, Little Scarcies, Sherbro, Malem, Waanje, Sewa, Missunado, Cavalla, St. Paul, Morro, St. John, Bandama, Niouniourou,\n      Sassandra, Como\u00E9, Bia, Tano, Volta, Mono, Oueme, Niger, Mekrou, Benue, Cross, Katsena Ala, Bani, Akwayafe, Rio del Rey, Ngosso, Andokat, Mene, Munaya, Wouri, Sanaga, Faro, Chari,\n      Bamaingui, Bahr-Kieta, Logon\u00E9, Mit\u00E9m\u00E9l\u00E9, Gabon, Ogou\u00E9, Lovanzi, Kouilou, Congo, Dande, Bengo, and Cuanza. Manatees move up these rivers until they are unable to proceed because of\n      shallow waters or strong waterfalls.[1]\n      The areas with the highest manatee populations are Guinea-Bissau, the lagoons of C\u00F4te d'Ivoire, the southern portions of the Niger River in Nigeria, the Sanaga River in Cameroon, the coastal\n      lagoons in Gabon, and the lower parts of the Congo River. As part of a study completed in C\u00F4te d'Ivoire to assess where the majority of African manatees favor living, a sample of African\n      manatees was radio-tagged and tracked. The tracking observed most of the sample in coastal lagoons, mangroves, and other herbaceous growths. They were also found in the grassy estuaries\n      of big rivers with mangroves and in protected coastal spots with less than 3 metres (10 ft) of water containing both mangroves and marine macrophytes.[1]\n      ",
                isView: true
            }
        ];
        this.marquee = "Hello, You Are Welcomed To Benion World Of Creativiy,\nA Home For All Your Entertainment, Sport Updates,\nTechnological Discoveries And An Excellent Medium For Education And Research !!....";
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.topStoriesNews.getTopStories();
        this.entertainmentNews.getEntertainment();
        this.sportsNews.getSports();
        this.educationNews.getEducation();
        this.technologyNews.getTechnology();
        this.technologyNews.technology.forEach(function (item) {
            item.isView = false;
        });
        this.educationNews.education.forEach(function (item) {
            item.isView = false;
        });
        this.topStoriesNews.topStories.forEach(function (item) {
            item.isView = false;
        });
        this.entertainmentNews.entertainment.forEach(function (item) {
            item.isView = false;
        });
        this.sportsNews.sports.forEach(function (item) {
            item.isView = false;
        });
    };
    HomepageComponent.prototype.onViewTopStoriesNews = function (news) {
        if (this.viewNews) {
            this.checkView();
        }
        else {
            this.topStoriesNews.topStories.forEach(function (item) {
                item.isView = true;
            });
            this.viewNews = true;
            this.viewTopStoriesNews = true;
        }
    };
    HomepageComponent.prototype.onCloseTopStoriesNews = function (news) {
        this.topStoriesNews.topStories.forEach(function (item) {
            item.isView = false;
        });
        this.viewNews = false;
        this.viewTopStoriesNews = false;
    };
    HomepageComponent.prototype.onViewEntertainmentNews = function (news) {
        if (this.viewNews) {
            this.checkView();
        }
        else {
            this.entertainmentNews.entertainment.forEach(function (item) {
                item.isView = true;
            });
            this.viewNews = true;
            this.viewEntertaimentNews = true;
        }
    };
    HomepageComponent.prototype.onCloseEntertainmentNews = function (news) {
        this.entertainmentNews.entertainment.forEach(function (item) {
            item.isView = false;
        });
        this.viewNews = false;
        this.viewEntertaimentNews = false;
    };
    HomepageComponent.prototype.onViewSportsNews = function (news) {
        if (this.viewNews) {
            this.checkView();
        }
        else {
            this.sportsNews.sports.forEach(function (item) {
                item.isView = true;
            });
            this.viewNews = true;
            this.viewSportNews = true;
        }
    };
    HomepageComponent.prototype.onCloseSportsNews = function (news) {
        this.sportsNews.sports.forEach(function (item) {
            item.isView = false;
        });
        this.viewNews = false;
        this.viewSportNews = false;
    };
    HomepageComponent.prototype.onViewEducationNews = function (news) {
        if (this.viewNews) {
            this.checkView();
        }
        else {
            this.educationNews.education.forEach(function (item) {
                item.isView = true;
            });
            this.viewNews = true;
            this.viewEducationNews = true;
        }
    };
    HomepageComponent.prototype.onCloseEducationNews = function (news) {
        this.educationNews.education.forEach(function (item) {
            item.isView = false;
        });
        this.viewNews = false;
        this.viewEducationNews = false;
    };
    HomepageComponent.prototype.onViewTechnologyNews = function (news) {
        if (this.viewNews) {
            this.checkView();
        }
        else {
            this.technologyNews.technology.forEach(function (item) {
                item.isView = true;
            });
            this.viewNews = true;
            this.viewTechnologyNews = true;
        }
    };
    HomepageComponent.prototype.onCloseTechnologyNews = function (news) {
        this.technologyNews.technology.forEach(function (item) {
            item.isView = false;
        });
        this.viewNews = false;
        this.viewTechnologyNews = false;
    };
    HomepageComponent.prototype.checkView = function () {
        if (this.viewNews) {
            // this.dialogService.openConfirmDialog('A News Has Already Been Opened, Do Yo Want To Close It ?').afterClosed().subscribe(
            //   response => {
            //   if (response) {
            //     this.viewNews = false;
            //     this.viewTopStoriesNews = false;
            //     this.viewSportNews = false;
            //     this.viewEntertaimentNews = false;
            //     this.viewEducationNews = false;
            //     this.viewTechnologyNews = false;
            //     this.technologyNews.technology.forEach(item => {
            //       item.isView = false;
            //     });
            //     this.educationNews.education.forEach(item => {
            //       item.isView = false;
            //     });
            //     this.topStoriesNews.topStories.forEach(item => {
            //       item.isView = false;
            //     });
            //     this.entertainmentNews.entertainment.forEach(item => {
            //       item.isView = false;
            //     });
            //     this.sportsNews.sports.forEach(item => {
            //       item.isView = false;
            //     });
            //   }
            // });
            alert('A News Has Already Been Opened');
        }
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _services_top_stories_service__WEBPACK_IMPORTED_MODULE_4__["TopStoriesService"] },
        { type: src_app_services_entertainment_service__WEBPACK_IMPORTED_MODULE_7__["EntertainmentService"] },
        { type: _services_sports_service__WEBPACK_IMPORTED_MODULE_3__["SportsService"] },
        { type: src_app_services_education_service__WEBPACK_IMPORTED_MODULE_8__["EducationService"] },
        { type: _services_technology_service__WEBPACK_IMPORTED_MODULE_2__["TechnologyService"] },
        { type: src_app_services_news_service__WEBPACK_IMPORTED_MODULE_9__["NewsService"] },
        { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"] }
    ]; };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/homepage/homepage.component.html"),
            animations: [
                src_app_fade_animations__WEBPACK_IMPORTED_MODULE_6__["fadeAnimation"]
            ],
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/components/homepage/homepage.component.css")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/new-user/new-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".normal-form {\r\n    margin: 10px;\r\n}\r\n\r\n.normal-form .controllers-container {\r\n    width: 100%;\r\n    padding: 5%;\r\n}\r\n\r\n.normal-form .controllers-container > * {\r\n    width: 100%;\r\n}\r\n\r\n.normal-form .add-bottom-padding {\r\n    padding-bottom: 10px;\r\n}\r\n\r\nmat-radio-group mat-radio-button {\r\n    margin-left: 5px;\r\n}\r\n\r\n.button-row button {\r\n    margin: 5px;\r\n}\r\n\r\n.fill-remaining-space {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.button-dialog-close {\r\n    width: 45px;\r\n    min-width: 0px !important;\r\n    height: 40px;\r\n    padding: 0px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctdXNlci9uZXctdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctdXNlci9uZXctdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vcm1hbC1mb3JtIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLm5vcm1hbC1mb3JtIC5jb250cm9sbGVycy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLm5vcm1hbC1mb3JtIC5jb250cm9sbGVycy1jb250YWluZXIgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubm9ybWFsLWZvcm0gLmFkZC1ib3R0b20tcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxubWF0LXJhZGlvLWdyb3VwIG1hdC1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmJ1dHRvbi1yb3cgYnV0dG9uIHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5idXR0b24tZGlhbG9nLWNsb3NlIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgbWluLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/new-user/new-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-user/new-user.component.ts ***!
  \***********************************************************/
/*! exports provided: NewUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewUserComponent", function() { return NewUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_departments_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/departments.service */ "./src/app/services/departments.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var NewUserComponent = /** @class */ (function () {
    function NewUserComponent(userService, departmentsService, notificationsService, dialogRef) {
        this.userService = userService;
        this.departmentsService = departmentsService;
        this.notificationsService = notificationsService;
        this.dialogRef = dialogRef;
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.userService.getUsers();
    };
    NewUserComponent.prototype.onClear = function () {
        this.userService.userForm.reset();
        this.userService.initializeFormGroup();
    };
    NewUserComponent.prototype.onSubmit = function () {
        if (this.userService.userForm.valid) {
            if (!this.userService.userForm.get('$key').value) {
                this.userService.insertUser(this.userService.userForm.value);
                this.userService.userForm.reset();
                this.userService.initializeFormGroup();
                this.userService.setUser(this.userService.userForm.value);
                this.notificationsService.success(':: Has Been Submitted Successfully ::');
            }
            else {
                this.userService.updateUser(this.userService.userForm.value);
                this.userService.userForm.reset();
                this.userService.initializeFormGroup();
                this.notificationsService.success(':: Has Been Updated Successfully ::');
            }
            this.onClose();
        }
    };
    NewUserComponent.prototype.onClose = function () {
        this.userService.userForm.reset();
        this.userService.initializeFormGroup();
        this.dialogRef.close();
    };
    NewUserComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: _services_departments_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentsService"] },
        { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }
    ]; };
    NewUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-new-user',
            template: __webpack_require__(/*! raw-loader!./new-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/new-user/new-user.component.html"),
            styles: [__webpack_require__(/*! ./new-user.component.css */ "./src/app/components/new-user/new-user.component.css")]
        })
    ], NewUserComponent);
    return NewUserComponent;
}());



/***/ }),

/***/ "./src/app/components/user-info/user-info.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\r\n    max-width: 300px;\r\n    margin: auto;\r\n}\r\n\r\n.mat-card-avatar {\r\n    background-image: url(\"/assets/images/benion.jpg\");\r\n    background-size: cover;\r\n}\r\n\r\n.mat-card-actions {\r\n    display: flex;\r\n}\r\n\r\n.mat-card-actions .flex-spacer {\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9iZW5pb24uanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMgLmZsZXgtc3BhY2VyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/user-info/user-info.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-info/user-info.component.ts ***!
  \*************************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/user-info/user-info.component.html"),
            styles: [__webpack_require__(/*! ./user-info.component.css */ "./src/app/components/user-info/user-info.component.css")]
        })
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/users/users.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\r\n    display: none;\r\n}\r\n\r\nmat-footer-row mat-footer-cell {\r\n    justify-content: center;\r\n    font-style: italic; \r\n}\r\n\r\nmat-header-row:hover {\r\n    background: #7d3c28;\r\n}\r\n\r\nmat-header-row:active {\r\n    background: #4caf50;\r\n}\r\n\r\nmat-row:hover {\r\n    background: #7d3c28;\r\n}\r\n\r\nmat-row:active {\r\n    background: #4caf50;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5tYXQtZm9vdGVyLXJvdyBtYXQtZm9vdGVyLWNlbGwge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7IFxyXG59XHJcblxyXG5tYXQtaGVhZGVyLXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2QzYzI4O1xyXG59XHJcblxyXG5tYXQtaGVhZGVyLXJvdzphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzRjYWY1MDtcclxufVxyXG5cclxubWF0LXJvdzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjN2QzYzI4O1xyXG59XHJcblxyXG5tYXQtcm93OmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNGNhZjUwO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_departments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/departments.service */ "./src/app/services/departments.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/notifications.service */ "./src/app/services/notifications.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");








var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService, departmentService, dialog, notificationService, dialogService) {
        this.userService = userService;
        this.departmentService = departmentService;
        this.dialog = dialog;
        this.notificationService = notificationService;
        this.dialogService = dialogService;
        this.displayedColumns = [
            'firstName',
            'lastName',
            'userName',
            'school',
            'city'
        ];
        this.array = [];
        this.totalUsers = this.array.length;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (list) {
            _this.array = list.map(function (item) {
                var department = 'department';
                var departmentName = _this.departmentService.getDepartmentName(item.payload.val()[department]);
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key, departmentName: departmentName }, item.payload.val());
            });
            _this.listData = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.array);
            _this.listData.sort = _this.sort;
            _this.listData.paginator = _this.paginator;
            _this.listData.filterPredicate = function (data, filter) {
                return _this.displayedColumns.some(function (element) {
                    return element !== 'actions' && data[element].toLowerCase().indexOf(filter) !== -1;
                });
            };
        });
    };
    UsersComponent.prototype.onSearchClear = function () {
        this.searchKey = '';
        this.applyFilter();
    };
    UsersComponent.prototype.applyFilter = function () {
        this.listData.filter = this.searchKey.trim().toLowerCase();
    };
    UsersComponent.prototype.onCreate = function () {
        this.userService.initializeFormGroup();
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '75%';
        this.dialog.open(_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"], dialogConfig);
    };
    UsersComponent.prototype.onEdit = function (row) {
        this.userService.populateForm(row);
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '75%';
        this.dialog.open(_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"], dialogConfig);
    };
    UsersComponent.prototype.onDelete = function ($key) {
        // if (confirm('Are You Sure You Want To Delete This Record ?')) {
        //   this.userService.deleteUser($key);
        //   this.notificationService.warn(' !! It Has Been Deleted Successfully !!! ');
        // }
        var _this = this;
        this.dialogService.openConfirmDialog('Are You Sure You Want To Delete This Record ?').afterClosed().subscribe(function (response) {
            if (response) {
                _this.userService.deleteUser($key);
                _this.notificationService.warn(' !! It Has Been Deleted Successfully !!! ');
            }
        });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
        { type: src_app_services_departments_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentsService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: src_app_services_notifications_service__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
        { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
    ], UsersComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false })
    ], UsersComponent.prototype, "paginator", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/components/users/users.component.css")]
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/fade-animations.ts":
/*!************************************!*\
  !*** ./src/app/fade-animations.ts ***!
  \************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fade', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'yellow', opacity: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'green', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'white', opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'red', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ backgroundColor: 'white', opacity: 1 }))
    ])
]);


/***/ }),

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var src_app_components_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/admin-users/admin-users.component */ "./src/app/components/admin-users/admin-users.component.ts");
/* harmony import */ var src_app_components_admin_news_admin_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/admin-news/admin-news.component */ "./src/app/components/admin-news/admin-news.component.ts");
/* harmony import */ var src_app_components_admin_todos_admin_todos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/admin-todos/admin-todos.component */ "./src/app/components/admin-todos/admin-todos.component.ts");







var routes = [
    {
        path: '',
        component: src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        data: { title: 'Benion Admin' }
    },
    {
        path: 'admin-users',
        component: src_app_components_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_4__["AdminUsersComponent"],
        data: { title: 'Benion Admin Users' }
    },
    {
        path: 'admin-news',
        component: src_app_components_admin_news_admin_news_component__WEBPACK_IMPORTED_MODULE_5__["AdminNewsComponent"],
        data: { title: 'Benion Admin News' }
    },
    {
        path: 'admin-todos',
        component: src_app_components_admin_todos_admin_todos_component__WEBPACK_IMPORTED_MODULE_6__["AdminTodosComponent"],
        data: { title: 'Benion Admin News' }
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../users/users.module */ "./src/app/modules/users/users.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var src_app_components_admin_todos_admin_todos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/admin-todos/admin-todos.component */ "./src/app/components/admin-todos/admin-todos.component.ts");
/* harmony import */ var src_app_components_admin_news_admin_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/admin-news/admin-news.component */ "./src/app/components/admin-news/admin-news.component.ts");
/* harmony import */ var src_app_components_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/admin-users/admin-users.component */ "./src/app/components/admin-users/admin-users.component.ts");












var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                src_app_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
                src_app_components_admin_users_admin_users_component__WEBPACK_IMPORTED_MODULE_11__["AdminUsersComponent"],
                src_app_components_admin_news_admin_news_component__WEBPACK_IMPORTED_MODULE_10__["AdminNewsComponent"],
                src_app_components_admin_todos_admin_todos_component__WEBPACK_IMPORTED_MODULE_9__["AdminTodosComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _users_users_module__WEBPACK_IMPORTED_MODULE_1__["UsersModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"]
            ],
            entryComponents: [
                src_app_components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_7__["NewUserComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/materials/materials.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/materials/materials.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialsModule", function() { return MaterialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialsModule = /** @class */ (function () {
    function MaterialsModule() {
    }
    MaterialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"]
            ],
        })
    ], MaterialsModule);
    return MaterialsModule;
}());



/***/ }),

/***/ "./src/app/modules/users/users-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/users/users-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var routes = [
    {
        path: '',
        component: _components_users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        data: { title: 'Benion Users' }
    },
    {
        path: 'new-user',
        component: _components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_2__["NewUserComponent"],
        data: { title: 'Benion New User' }
    },
    {
        path: 'user-info',
        component: _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__["UserInfoComponent"],
        data: { title: 'Benion User Info' }
    }
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/users/users.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/users/users.module.ts ***!
  \***********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/user-info/user-info.component */ "./src/app/components/user-info/user-info.component.ts");
/* harmony import */ var _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../components/users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/modules/users/users-routing.module.ts");
/* harmony import */ var src_app_components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/new-user/new-user.component */ "./src/app/components/new-user/new-user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _components_users_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"],
                src_app_components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_6__["NewUserComponent"],
                _components_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_1__["UserInfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_5__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]
            ],
            entryComponents: [
                src_app_components_new_user_new_user_component__WEBPACK_IMPORTED_MODULE_6__["NewUserComponent"]
            ]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/services/contacts.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var ContactsService = /** @class */ (function () {
    function ContactsService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.contacts = [
            {
                id: 1,
                firstName: 'Bernard',
                lastName: 'Iorver',
                city: 'Television',
                isChecked: false
            },
            {
                id: 5,
                firstName: 'Florence',
                lastName: 'Ogwuche',
                city: 'Television',
                isChecked: false
            },
            {
                id: 16,
                firstName: 'Blessing',
                lastName: 'Okawu',
                city: 'Otukpo',
                isChecked: false
            },
            {
                id: 11,
                firstName: 'Aloysius',
                lastName: 'Idoko',
                city: 'Boro',
                isChecked: false
            },
            {
                id: 8,
                firstName: 'Kingsley',
                lastName: 'Egbuta',
                city: 'Aba',
                isChecked: false
            },
            {
                id: 15,
                firstName: 'Joseph',
                lastName: 'Azubuike',
                city: 'Abidjan',
                isChecked: false
            },
            {
                id: 3,
                firstName: 'Dorcas',
                lastName: 'Agaku',
                city: 'Genabe',
                isChecked: false
            },
            {
                id: 12,
                firstName: 'Ferdinard',
                lastName: 'Nwafor',
                city: 'Gimbia',
                isChecked: false
            },
            {
                id: 10,
                firstName: 'Ibrahim',
                lastName: 'Yahaya',
                city: 'Kakuri',
                isChecked: false
            },
            {
                id: 14,
                firstName: 'Isaac',
                lastName: 'Onismus',
                city: 'Television',
                isChecked: false
            },
            {
                id: 7,
                firstName: 'Blessing',
                lastName: 'Linus',
                city: 'Kamazoa',
                isChecked: false
            },
            {
                id: 13,
                firstName: 'Isreal',
                lastName: 'Emmanuel',
                city: 'Barde',
                isChecked: false
            },
            {
                id: 4,
                firstName: 'Susan',
                lastName: 'Agaku',
                city: 'Ijebu',
                isChecked: false
            },
            {
                id: 9,
                firstName: 'Joshua',
                lastName: 'Ayobami',
                city: 'Television',
                isChecked: false
            },
            {
                id: 6,
                firstName: 'Victor',
                lastName: 'Nwabudike',
                city: 'Television',
                isChecked: false
            },
            {
                id: 2,
                firstName: 'Mary',
                lastName: 'Agbaji',
                city: 'Romi',
                isChecked: false
            }
        ];
        this.contactSize = this.contacts.length;
        this.todos = [];
        this.todo = [
            {
                $key: 't1',
                addTodo: 'Dancing',
                isCompleted: true
            },
            {
                $key: 't2',
                addTodo: 'Singing',
                isCompleted: false
            }
        ];
        this.value = this.todos.lastIndexOf;
        this.todoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            addTodo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            isCompleted: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.todoList = this.firebase.list('todos');
        this.todoList.snapshotChanges().subscribe(function (list) {
            _this.todos = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    ContactsService.prototype.initializeFormGroup = function () {
        this.todoForm.setValue({
            $key: null,
            addTodo: '',
            isCompleted: false
        });
    };
    ContactsService.prototype.getTodos = function () {
        return this.todoList.snapshotChanges();
    };
    ContactsService.prototype.insertTodo = function (todo) {
        this.todoList.push({
            addTodo: todo.addTodo,
            isCompleted: todo.isCompleted
        });
    };
    ContactsService.prototype.updateTodo = function (todo) {
        this.todoList.update(todo.$key, {
            addTodo: todo.addTodo,
            isCompleted: todo.isCompleted
        });
    };
    ContactsService.prototype.deleteTodo = function ($key) {
        this.todoList.remove($key);
        console.log(this.value);
    };
    ContactsService.prototype.populateForm = function (todo) {
        this.todoForm.setValue(todo);
    };
    ContactsService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/services/departments.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/departments.service.ts ***!
  \*************************************************/
/*! exports provided: DepartmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsService", function() { return DepartmentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var DepartmentsService = /** @class */ (function () {
    function DepartmentsService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.array = [];
        this.departments = [
            {
                id: 'd0',
                code: 'CSE',
                name: 'Computer Software Engineering'
            },
            {
                id: 'd1',
                code: 'CMP',
                name: 'Computer Science'
            },
            {
                id: 'd2',
                code: 'MCB',
                name: 'Microbiology'
            },
            {
                id: 'd3',
                code: 'ECE',
                name: 'Civil Engineering'
            },
            {
                id: 'd4',
                code: 'EEE',
                name: 'Electrical & Electronics Engineering'
            },
            {
                id: 'd5',
                code: 'EME',
                name: 'Mechanical Engineering'
            },
            {
                id: 'd6',
                code: 'FST',
                name: 'Food Science & Technology'
            },
            {
                id: 'd7',
                code: 'THA',
                name: 'Theatre Arts'
            },
            {
                id: 'd8',
                code: 'ACC',
                name: 'Accounting'
            }
        ];
        this.departmentList = this.firebase.list('departments');
        this.departmentList.snapshotChanges().subscribe(function (list) {
            _this.array = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    DepartmentsService.prototype.getDepartmentName = function ($key) {
        var name = 'name';
        if ($key === '0') {
            return '';
        }
        else {
            return lodash__WEBPACK_IMPORTED_MODULE_3__["find"](this.array, function (object) {
                return object.$key === $key;
            });
        }
    };
    DepartmentsService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    DepartmentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DepartmentsService);
    return DepartmentsService;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/confirm-dialog/confirm-dialog.component */ "./src/app/components/confirm-dialog/confirm-dialog.component.ts");




var DialogService = /** @class */ (function () {
    function DialogService(dialog) {
        this.dialog = dialog;
    }
    DialogService.prototype.openConfirmDialog = function (message) {
        return this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmDialogComponent"], {
            width: '390px',
            panelClass: 'confirm-dialog-container',
            disableClose: true,
            position: { top: '10px' },
            data: {
                message: message
            }
        });
    };
    DialogService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/education.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/education.service.ts ***!
  \***********************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EducationService = /** @class */ (function () {
    function EducationService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.education = [];
        this.educationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            isView: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.educationList = this.firebase.list('educationNews');
        this.educationList.snapshotChanges().subscribe(function (list) {
            _this.education = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    EducationService.prototype.initializeFormGroupEducation = function () {
        this.educationForm.setValue({
            $key: null,
            title: '',
            details: '',
            isView: false
        });
    };
    EducationService.prototype.getEducation = function () {
        return this.educationList.snapshotChanges();
    };
    EducationService.prototype.insertEducation = function (news) {
        this.educationList.push({
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    EducationService.prototype.updateEducation = function (news) {
        this.educationList.update(news.$key, {
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    EducationService.prototype.deleteEducation = function ($key) {
        this.educationList.remove($key);
    };
    EducationService.prototype.populateEducationForm = function (news) {
        this.educationForm.setValue(news);
    };
    EducationService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    EducationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EducationService);
    return EducationService;
}());



/***/ }),

/***/ "./src/app/services/entertainment.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/entertainment.service.ts ***!
  \***************************************************/
/*! exports provided: EntertainmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntertainmentService", function() { return EntertainmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EntertainmentService = /** @class */ (function () {
    function EntertainmentService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.entertainment = [];
        this.entertainmentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            isView: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.entertainmentList = this.firebase.list('entertainmentNews');
        this.entertainmentList.snapshotChanges().subscribe(function (list) {
            _this.entertainment = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    EntertainmentService.prototype.initializeFormGroupEntertainment = function () {
        this.entertainmentForm.setValue({
            $key: null,
            title: '',
            details: '',
            isView: false
        });
    };
    EntertainmentService.prototype.getEntertainment = function () {
        return this.entertainmentList.snapshotChanges();
    };
    EntertainmentService.prototype.insertEntertainment = function (news) {
        this.entertainmentList.push({
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    EntertainmentService.prototype.updateEntertainment = function (news) {
        this.entertainmentList.update(news.$key, {
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    EntertainmentService.prototype.deleteEntertainment = function ($key) {
        this.entertainmentList.remove($key);
    };
    EntertainmentService.prototype.populateEntertainmentForm = function (news) {
        this.entertainmentForm.setValue(news);
    };
    EntertainmentService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    EntertainmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], EntertainmentService);
    return EntertainmentService;
}());



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var HomeService = /** @class */ (function () {
    function HomeService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.logins = [];
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)])
        });
        this.loginList = this.firebase.list('login');
        this.loginList.snapshotChanges().subscribe(function (list) {
            _this.logins = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    HomeService.prototype.initializeFormGroup = function () {
        this.loginForm.setValue({
            $key: null,
            userName: '',
            password: ''
        });
    };
    HomeService.prototype.getLogin = function () {
        return this.loginList.snapshotChanges();
    };
    HomeService.prototype.insertLogin = function (login) {
        this.loginList.push({
            userName: login.userName,
            password: login.password
        });
    };
    HomeService.prototype.deleteLogin = function ($key) {
        this.loginList.remove($key);
    };
    HomeService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
    ]; };
    HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/news.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/news.service.ts ***!
  \******************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _top_stories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-stories.service */ "./src/app/services/top-stories.service.ts");
/* harmony import */ var _entertainment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entertainment.service */ "./src/app/services/entertainment.service.ts");
/* harmony import */ var _sports_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sports.service */ "./src/app/services/sports.service.ts");
/* harmony import */ var _education_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./education.service */ "./src/app/services/education.service.ts");
/* harmony import */ var _technology_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technology.service */ "./src/app/services/technology.service.ts");







var NewsService = /** @class */ (function () {
    function NewsService(topStoriesNews, entertainmentNews, sportsNews, educationNews, technologyNews) {
        this.topStoriesNews = topStoriesNews;
        this.entertainmentNews = entertainmentNews;
        this.sportsNews = sportsNews;
        this.educationNews = educationNews;
        this.technologyNews = technologyNews;
        this.topStories = [];
        this.sports = [];
        this.entertainment = [];
        this.education = [];
        this.technology = [];
        this.topStories = this.topStoriesNews.topStories.reverse();
        this.sports = this.sportsNews.sports.reverse();
        this.entertainment = this.entertainmentNews.entertainment.reverse();
        this.education = this.educationNews.education.reverse();
        this.technology = this.technologyNews.technology.reverse();
    }
    NewsService.ctorParameters = function () { return [
        { type: _top_stories_service__WEBPACK_IMPORTED_MODULE_2__["TopStoriesService"] },
        { type: _entertainment_service__WEBPACK_IMPORTED_MODULE_3__["EntertainmentService"] },
        { type: _sports_service__WEBPACK_IMPORTED_MODULE_4__["SportsService"] },
        { type: _education_service__WEBPACK_IMPORTED_MODULE_5__["EducationService"] },
        { type: _technology_service__WEBPACK_IMPORTED_MODULE_6__["TechnologyService"] }
    ]; };
    NewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NewsService);
    return NewsService;
}());



/***/ }),

/***/ "./src/app/services/notifications.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/notifications.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var NotificationsService = /** @class */ (function () {
    function NotificationsService(snackBar) {
        this.snackBar = snackBar;
        this.config = {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top'
        };
    }
    NotificationsService.prototype.success = function (message) {
        var panelClass = 'panelClass';
        this.config[panelClass] = ['notification', 'success'];
        this.snackBar.open(message, '', this.config);
    };
    NotificationsService.prototype.warn = function (message) {
        var panelClass = 'panelClass';
        this.config[panelClass] = ['notification', 'warn'];
        this.snackBar.open(message, '', this.config);
    };
    NotificationsService.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
    ]; };
    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/services/sports.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/sports.service.ts ***!
  \********************************************/
/*! exports provided: SportsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportsService", function() { return SportsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




var SportsService = /** @class */ (function () {
    function SportsService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.sports = [];
        this.sportsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            isView: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
        this.sportsList = this.firebase.list('sportsNews');
        this.sportsList.snapshotChanges().subscribe(function (list) {
            _this.sports = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    SportsService.prototype.initializeFormGroupSports = function () {
        this.sportsForm.setValue({
            $key: null,
            title: '',
            details: '',
            isView: false
        });
    };
    SportsService.prototype.getSports = function () {
        return this.sportsList.snapshotChanges();
    };
    SportsService.prototype.insertSports = function (news) {
        this.sportsList.push({
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    SportsService.prototype.updateSports = function (news) {
        this.sportsList.update(news.$key, {
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    SportsService.prototype.deleteSports = function ($key) {
        this.sportsList.remove($key);
    };
    SportsService.prototype.populateSportsForm = function (news) {
        this.sportsForm.setValue(news);
    };
    SportsService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
    ]; };
    SportsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SportsService);
    return SportsService;
}());



/***/ }),

/***/ "./src/app/services/technology.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/technology.service.ts ***!
  \************************************************/
/*! exports provided: TechnologyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologyService", function() { return TechnologyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TechnologyService = /** @class */ (function () {
    function TechnologyService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.technology = [];
        this.technologyForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            isView: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.technologyList = this.firebase.list('technologyNews');
        this.technologyList.snapshotChanges().subscribe(function (list) {
            _this.technology = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    TechnologyService.prototype.initializeFormGroupTechnology = function () {
        this.technologyForm.setValue({
            $key: null,
            title: '',
            details: '',
            isView: false
        });
    };
    TechnologyService.prototype.getTechnology = function () {
        return this.technologyList.snapshotChanges();
    };
    TechnologyService.prototype.insertTechnology = function (news) {
        this.technologyList.push({
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    TechnologyService.prototype.updateTechnology = function (news) {
        this.technologyList.update(news.$key, {
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    TechnologyService.prototype.deleteTechnology = function ($key) {
        this.technologyList.remove($key);
    };
    TechnologyService.prototype.populateTechnologyForm = function (news) {
        this.technologyForm.setValue(news);
    };
    TechnologyService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    TechnologyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TechnologyService);
    return TechnologyService;
}());



/***/ }),

/***/ "./src/app/services/time.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/time.service.ts ***!
  \******************************************/
/*! exports provided: TimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeService", function() { return TimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeService = /** @class */ (function () {
    function TimeService() {
        this.date = new Date();
        this.getWeek = this.date.getDay();
        this.weeks = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
        this.day = this.date.getDate();
        this.week = this.weeks[this.getWeek];
        this.getMonth = this.date.getMonth();
        this.months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this.month = this.months[this.getMonth];
        this.year = this.date.getFullYear();
        this.minute = this.date.getMinutes();
        this.hour = this.date.getHours();
        this.getDate = [
            {
                id: 1,
                day: this.day,
                week: this.week,
                month: this.month,
                year: this.year,
                minute: this.minute,
                hour: this.hour
            }
        ];
    }
    TimeService.prototype.reloadDateTime = function () {
        var updatedDate = new Date();
        this.getDate = [
            {
                id: 1,
                day: updatedDate.getDate(),
                week: this.weeks[updatedDate.getDay()],
                month: this.months[updatedDate.getMonth()],
                year: updatedDate.getFullYear(),
                minute: updatedDate.getMinutes(),
                hour: updatedDate.getHours()
            }
        ];
    };
    TimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TimeService);
    return TimeService;
}());



/***/ }),

/***/ "./src/app/services/todos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/todos.service.ts ***!
  \*******************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'applicaion/json'
    })
};
var TodosService = /** @class */ (function () {
    function TodosService(http) {
        this.http = http;
        this.todos = [
            {
                id: 1,
                title: 'Surfing The Internet',
                completed: false
            },
            {
                id: 2,
                title: 'Some Programming Tasks',
                completed: true
            },
            {
                id: 3,
                title: 'Studying Mathematics',
                completed: false
            },
            {
                id: 4,
                title: 'Reading Some Books',
                completed: true
            },
            {
                id: 5,
                title: 'Doing Some Assignments',
                completed: false
            },
            {
                id: 6,
                title: 'Practicing Golf',
                completed: true
            },
            {
                id: 7,
                title: 'Football Training',
                completed: true
            }
        ];
        this.todosUrl = 'https://jsonplaceholder.typicode.com/todos';
        this.todosLimit = '?_limit=20';
    }
    // Get Todos From Server
    TodosService.prototype.getTodos = function () {
        return this.http.get("" + this.todosUrl + this.todosLimit);
    };
    // Toggle On Server
    TodosService.prototype.toggleCompleted = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.put(url, todo, httpOptions);
    };
    // Delete On Server
    TodosService.prototype.deleteTodo = function (todo) {
        var url = this.todosUrl + "/" + todo.id;
        return this.http.delete(url, httpOptions);
    };
    // Add Todo Item
    TodosService.prototype.addTodo = function (todo) {
        return this.http.post(this.todosUrl, todo, httpOptions);
    };
    TodosService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    TodosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TodosService);
    return TodosService;
}());



/***/ }),

/***/ "./src/app/services/top-stories.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/top-stories.service.ts ***!
  \*************************************************/
/*! exports provided: TopStoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopStoriesService", function() { return TopStoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TopStoriesService = /** @class */ (function () {
    function TopStoriesService(firebase) {
        var _this = this;
        this.firebase = firebase;
        this.topStories = [];
        this.topStoriesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            isView: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false)
        });
        this.topStoriesList = this.firebase.list('topStoriesNews');
        this.topStoriesList.snapshotChanges().subscribe(function (list) {
            _this.topStories = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    }
    TopStoriesService.prototype.initializeFormGroupTopStories = function () {
        this.topStoriesForm.setValue({
            $key: null,
            title: '',
            details: '',
            isView: false
        });
    };
    TopStoriesService.prototype.getTopStories = function () {
        return this.topStoriesList.snapshotChanges();
    };
    TopStoriesService.prototype.insertTopStories = function (news) {
        this.topStoriesList.push({
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    TopStoriesService.prototype.updateTopStories = function (news) {
        this.topStoriesList.update(news.$key, {
            title: news.title,
            details: news.details,
            isView: false
        });
    };
    TopStoriesService.prototype.deleteTopStories = function ($key) {
        this.topStoriesList.remove($key);
    };
    TopStoriesService.prototype.populateTopStoriesForm = function (news) {
        this.topStoriesForm.setValue(news);
    };
    TopStoriesService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
    ]; };
    TopStoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TopStoriesService);
    return TopStoriesService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var UserService = /** @class */ (function () {
    function UserService(firebase) {
        this.firebase = firebase;
        this.arrays = [];
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            birthday: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('g0'),
            school: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('d0'),
            isWorking: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false)
        });
    }
    UserService.prototype.initializeFormGroup = function () {
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
    };
    UserService.prototype.getUsers = function () {
        this.userList = this.firebase.list('users');
        return this.userList.snapshotChanges();
    };
    UserService.prototype.setUser = function (user) {
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
    };
    UserService.prototype.insertUser = function (user) {
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
    };
    UserService.prototype.updateUser = function (user) {
        this.userList.update(user.$key, {
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
    };
    UserService.prototype.deleteUser = function ($key) {
        this.userList.remove($key);
    };
    UserService.prototype.populateForm = function (user) {
        this.userForm.setValue(lodash__WEBPACK_IMPORTED_MODULE_4__["omit"](user, 'departmentName'));
    };
    UserService.prototype.updateCheck = function (user) {
        if (user.isWorking) {
            this.userList.update(user.$key, {
                isWorking: false
            });
        }
        else {
            this.userList.update(user.$key, {
                isWorking: true
            });
        }
    };
    UserService.ctorParameters = function () { return [
        { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCYX9LRwby4lMh2SHYV0Ah-De0JgVxBIqg',
        authDomain: 'benion-database.firebaseapp.com',
        databaseURL: 'https://benion-database.firebaseio.com',
        projectId: 'benion-database',
        storageBucket: 'benion-database.appspot.com',
        messagingSenderId: '391934444954',
        appId: '1:391934444954:web:8c014487b17dcce8b26623',
        measurementId: 'G-9PBZGWNL1W'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Benion Programmings\Angular\Benion-Project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map