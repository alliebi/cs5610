(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");















var routes = [
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid​​​​/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid​​​​/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid​​/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid​​/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\ninput.form-control {\n    margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n    margin-bottom: 2em;\n}\na:hover{\n    text-decoration: none;\n}\n.cl-container-padding {\n    padding-top: 5%;\n    padding-bottom: 10%;\n}\n.cl-blue-navbar{\n    background-color: #337ab7;\n}\n.cl-text-white{\n    color: #fff;\n}\n.cl-text-black{\n    color: #000000;\n}\n.cl-text-bold{\n    font-weight: bold;\n}\n.cl-icon-padding {\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.cl-header-padding{\n    padding-left: 5%;\n}\n.cl-full-width{\n    width: 100%;\n}\n.cl-widget-list-item{\n    padding-bottom: 20px;\n}\n.cl-v-divider{\n    border-right: 1px solid #808080;\n    height: 100%;\n}\n.cl-widget-heading{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.cl-height{\n    height: 100%;\n    min-height: 100%;\n}\n.cl-relative-position{\n    position: relative;\n}\n.cl-absolute-position{\n    position: absolute;\n}\n.cl-widget-list-icons{\n    top: 0px;\n    right: 0px;\n    z-index: 10;\n    background-color: white;\n}\n.cl-zero-right-padding{\n    padding-right: 0px;\n}\n.cl-list-item-borderless {\n    border-top: 0 none;\n    border-bottom: 0 none;\n    border-left: 0 none;\n    border-right: 0 none;\n}\n.cl-widget-images{\n    display: inline;\n    width: 85%;\n    z-index: 100;\n    position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDcwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDcwcHg7XG59XG5pbnB1dC5mb3JtLWNvbnRyb2wge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNsLWZvcm0tYm90dG9tLXBhZGRpbmd7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xufVxuXG5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsLWNvbnRhaW5lci1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLXRvcDogNSU7XG4gICAgcGFkZGluZy1ib3R0b206IDEwJTtcbn1cblxuLmNsLWJsdWUtbmF2YmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbC10ZXh0LXdoaXRle1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uY2wtdGV4dC1ibGFja3tcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNsLXRleHQtYm9sZHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbC1oZWFkZXItcGFkZGluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1saXN0LWl0ZW17XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jbC12LWRpdmlkZXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtaGVhZGluZ3tcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtaGVpZ2h0e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtcmVsYXRpdmUtcG9zaXRpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNsLWFic29sdXRlLXBvc2l0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNsLXplcm8tcmlnaHQtcGFkZGluZ3tcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gICAgYm9yZGVyLXRvcDogMCBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgICBib3JkZXItbGVmdDogMCBub25lO1xuICAgIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<a routerLink=\"/login\">Login</a>\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/user/:uid\">Profile</a>-->\n<!--<a routerLink=\"user/:uid/website\">Website</a>-->\n<!--<a routerLink=\"user/:uid/website/new\">WebsiteNew</a>-->\n<!--<a routerLink=\"user/:uid/website/:wid\">WebsiteEdit</a>-->\n\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ../css/style.css */ "./src/css/style.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-chooser/widget-chooser.component */ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-heading/widget-heading.component */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_9__["WebsiteListComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_10__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_11__["WebsiteEditComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_12__["PageNewComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_13__["PageListComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_14__["PageEditComponent"],
                _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooserComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_16__["WidgetEditComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_17__["WidgetListComponent"],
                _views_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_20__["WidgetHeadingComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_21__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_22__["WidgetYoutubeComponent"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_23__["WidgetHtmlComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_18__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_19__["WebsiteService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/page.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/page.model.client.ts ***!
  \*********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, name, websiteId, description) {
        this._id = _id;
        this.name = name;
        this.wid = websiteId;
        this.title = description;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/models/user.model.client.ts":
/*!*********************************************!*\
  !*** ./src/app/models/user.model.client.ts ***!
  \*********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/models/website.model.client.ts":
/*!************************************************!*\
  !*** ./src/app/models/website.model.client.ts ***!
  \************************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, name, developerId, description) {
        this._id = _id;
        this.name = name;
        this.developerId = developerId;
        this.description = description;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/models/widget.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/widget.model.client.ts ***!
  \***********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(_id, type, pageId, size, text, width, url) {
        if (size === void 0) { size = '1'; }
        if (text === void 0) { text = 'text'; }
        if (width === void 0) { width = '100%'; }
        if (url === void 0) { url = 'url'; }
        this._id = _id;
        this.widgetType = type;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
        this.width = width;
        this.url = url;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/page.model.client */ "./src/app/models/page.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('321', 'Post1', '890', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('432', 'Post2', '567', 'Lorem'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('543', 'Post3', '678', 'Lorem'),
        ];
    }
    PageService.prototype.createWebsite = function (wid, page) {
        var new_page = {
            _id: (new Date()).getTime() + '',
            name: page.name,
            wid: page.wid,
            title: page.title
        };
        this.pages.push(new_page);
    };
    PageService.prototype.findPageBywid = function (wid) {
        var resultSet = [];
        for (var i in this.pages) {
            if (this.pages[i].wid === wid) {
                resultSet.push(this.pages[i]);
            }
        }
        return resultSet;
    };
    PageService.prototype.findPageBywid2 = function (wid) {
        return this.pages.filter(function (page) {
            return page.wid === wid;
        });
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.pages.find(function (page) {
            return page._id === pageId;
        });
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                this.pages[i].name = page.name;
                this.pages[i].title = page.title;
            }
        }
    };
    PageService.prototype.deleteWebsite = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/user.model.client */ "./src/app/models/user.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



// injecting service into module
var UserService = /** @class */ (function () {
    function UserService() {
        // constructor(private userService: UserService) {
        // }
        this.users = [
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('123', 'alice', 'alice', 'Alice', 'Wonder'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('234', 'bob', 'bob', 'Bob', 'Marley'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('345', 'charly', 'charly', 'Charly', 'Garcia'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi')
        ];
    }
    // api = {
    //     'createUser': this.createUser,
    //     'findUserById': this.findUserById
    // };
    UserService.prototype.createUser = function (user) {
        this.users.push(new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"](user._id, user.username, user.password, user.firstName, user.lastName));
    };
    UserService.prototype.findUserByCredential = function (username, password) {
        return this.users.find(function (user) {
            return user.username === username && user.password === password;
        });
    };
    UserService.prototype.findUserById = function (userId) {
        return this.users.find(function (user) {
            return user._id === userId;
        });
    };
    UserService.prototype.findUserByUsername = function (username) {
        return this.users.find(function (user) {
            return user.username === username;
        });
    };
    UserService.prototype.updateUser = function (user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === user._id) {
                this.users[i].firstName = user.firstName;
                this.users[i].lastName = user.lastName;
                return this.users[i];
            }
        }
    };
    UserService.prototype.deleteUserById = function (userId) {
        for (var i in this.users) {
            if (this.users[i]._id === userId) {
                var j = +i;
                this.users.splice(j, 1);
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/website.model.client */ "./src/app/models/website.model.client.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('123', 'faebook', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('234', 'Tweeter', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('456', 'Gizmodo', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('890', 'Go', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('678', 'Checkers', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('789', 'Chess', '234', 'Lorem')
        ];
    }
    WebsiteService.prototype.createWebsite = function (developerId, website) {
        var new_website = {
            _id: (new Date()).getTime() + '',
            name: website.name,
            developerId: website.developerId,
            description: website.description
        };
        this.websites.push(new_website);
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var resultSet = [];
        for (var i in this.websites) {
            if (this.websites[i].developerId === userId) {
                resultSet.push(this.websites[i]);
            }
        }
        return resultSet;
    };
    WebsiteService.prototype.findWebsitesByUser2 = function (userId) {
        return this.websites.filter(function (website) {
            return website.developerId === userId;
        });
    };
    WebsiteService.prototype.findWebsitesById = function (websiteId) {
        return this.websites.find(function (website) {
            return website._id === websiteId;
        });
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i].name = website.name;
                this.websites[i].description = website.description;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");



var WidgetService = /** @class */ (function () {
    function WidgetService() {
        // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('123', 'HEADING', '321', '2', 'GIZMODO', null, null),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('234', 'HEADING', '432', '4', 'Lorem ipsum', null, null),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('345', 'IMAGE', '543', null, null, '100%', 'http://lorempixel.com/400/200/'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('456', 'HTML', '321', null, '<p>Lorem ipsum</p>', null, null),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('567', 'HEADING', '432', '4', 'Lorem ipsum', null, null),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('678', 'YOUTUBE', '543', null, null, '100%', 'https://youtube.com/token'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["Widget"]('789', 'HTML', '321', '<p>Lorem ipsum</p>', null, null)
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        this.widgets.push(widget);
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                switch (widget.widgetType) {
                    case 'HEADER':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        return true;
                    case 'IMAGE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                    case 'YOUTUBE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return true;
                }
            }
        }
        return false;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var resultSet = [];
        for (var i in this.widgets) {
            if (this.widgets[i].pageId === pageId) {
                resultSet.push(this.widgets[i]);
            }
        }
        return resultSet;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        return this.widgets.find(function (widget) {
            return widget._id === widgetId;
        });
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                var j = +i;
                this.widgets.splice(j, 1);
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-4\">\n      <div class=\"container-fluid\">\n        <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\" class=\"cl-text-white navbar-link cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <div class=\"cl-text-white navbar-brand cl-text-bold\" >\n          Pages\n        </div>\n      </div>\n    </div>\n    <div class=\"float-right\">\n      <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\" class=\"cl-text-white navbar-link cl-icon-padding\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/user', uid, 'website', wid, 'page']\">Delete</a>\n</div>\n<nav class=\"navbar fixed-bottom bg-light\">\n  <div class=\"container-fuild col-12\">\n    <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(activateRoute) {
        this.activateRoute = activateRoute;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid, 'website']\" class=\"navbar-link cl-text-white cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <div class=\"cl-text-white navbar-brand cl-text-bold\">\n                    Pages\n                </div>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\" class=\"cl-text-white cl-icon-padding\">\n                <i class=\"fas fa-plus fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n<div class=\" container-fluid cl-container-padding\">\n    <div >\n        <ul>\n            <li *ngFor=\"let page of pages\">\n                <a [routerLink]=\"['/user', uid, 'website', wid, 'page', page._id, 'widget']\">\n                    page: {{page.title}}\n                </a>\n                <a [routerLink]=\"['/user', uid, 'website', wid, 'page', page._id]\">\n                    <i class=\"fas fa-cog fontawsome_icon float-right\"></i>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"container-fuild col-12\">\n        <a routerLink=\"/profile\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PageListComponent = /** @class */ (function () {
    function PageListComponent(activateRoute) {
        this.activateRoute = activateRoute;
        this.pages = [];
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('page list params:" ');
            console.log(params);
            console.log(params['wid']);
            console.log(params['uid']);
            _this.uid = params.uid;
            _this.wid = params.wid;
        });
        this.pageService = new _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"]();
        this.pages = this.pageService.findPageBywid(this.wid);
        console.log('page list:');
        console.log(this.uid);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-4\">\n      <div class=\"container-fluid\">\n        <a href=\"profile.html\" class=\"cl-text-black navbar-link cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"cl-text-bold cl-text-black\" href=\"#\">\n          Pages\n        </a>\n      </div>\n    </div>\n    <div class=\"float-right\">\n      <a href=\"page-list.html\" class=\"cl-text-black navbar-link float-right\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n\n  </div>\n</nav>\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n<nav class=\"navbar fixed-bottom bg-light\">\n  <div class=\"container-fuild col-12\">\n    <a href=\"profile.html\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(activateRoute) {
        this.activateRoute = activateRoute;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n        {{errorMsg}}\n    </div>\n\n    <h1>Login</h1>\n    <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n        <div class=\"form-group\">\n            <input type=\"text\"\n                   name=\"username\"\n                   placeholder=\"username\"\n                   class=\"form-control\"\n                   ngModel\n                   required\n                   #username=\"ngModel\">\n        </div>\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n        </span>\n\n        <div class=\"form-group\">\n            <input type=\"password\"\n                   name=\"password\"\n                   placeholder=\"password\"\n                   class=\"form-control\"\n                   ngModel\n                   required\n                   #password=\"ngModel\">\n        </div>\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n         </span>\n\n        <div class=\"form-group\">\n            <button [disabled]=\"!f.valid\"\n                    class=\"btn btn-primary btn-block\"\n                    type=\"submit\">Login</button>\n        </div>\n\n        <div class=\"form-group\">\n            <a routerLink=\"/register\"\n               class=\"btn btn-success btn-block\">Register</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
        this.userService = new _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"]();
    }
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        this.user = this.userService.findUserByCredential(this.username, this.password);
        this.uid = this.user._id;
        console.log(this.username);
        console.log(this.uid);
        if (this.password !== 'alice') {
            this.errorFlag = true;
        }
        else {
            this.router.navigate(['/user', this.uid]);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar fixed-top cl-blue-navbar\">\n        <div class=\"row container-fluid\">\n            <div class=\"col-6\">\n                <a class=\"navbar-brand cl-text-white\" href=\"#\">\n                    Profile\n                </a>\n            </div>\n            <div class=\"col-6\">\n                <a routerLink=\"/user/{{userId}}\" class=\"navbar-link float-right cl-text-white cl-icon-padding\">\n                    <i class=\"fas fa-check fontawsome_icon\"></i>\n                </a>\n            </div>\n        </div>\n    </nav>\n\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n        {{errorMsg}}\n    </div>\n    <div class=\"container-fluid cl-container-padding\">\n        <form (ngSubmit)=\"profile()\" #f=\"ngForm\">\n            <label>Username</label>\n            <div class=\"form-group\">\n\n                <input\n                        type=\"text\"\n                        name=\"username\"\n                        placeholder=\"alice\"\n                        class=\"form-group\"\n                        [(ngModel)]=\"username\"\n                        required\n                />\n            </div>\n            <label>Email address</label>\n            <div class=\"form-group\">\n                <input type=\"text\"\n                       name=\"email\"\n                       placeholder=\"jannunzi@gmai.com\"\n                       class=\"form-group\"\n                       required\n                />\n            </div>\n            <label>First Name</label>\n            <div class=\"form-group\">\n                <input type=\"text\"\n                       name=\"first-name\"\n                       placeholder=\"Jose111\"\n                       class=\"form-group\"\n                       required\n                />\n            </div>\n            <label>Last Name</label>\n            <div class=\"form-group\">\n                <input type=\"text\"\n                       name=\"last-name\"\n                       placeholder=\"Annunziato\"\n                       class=\"form-group\"\n                       required\n                />\n            </div>\n            <div class=\"form-group\">\n                <button class=\"btn btn-primary btn-block\" type=\"submit\">Websites</button>\n            </div>\n            <div>\n                <a class=\"btn btn-danger  btn-block\"\n                   routerLink=\"/login\">Logout</a>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
//
// import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
//
// export class User {
//     _id: String;
//     username: String;
//     password: String;
//
//     firstName: String;
//     lastName: String;
//     email: String;
//
//     constructor(_id, username, password, firstName, lastName, email) {
//         this._id = _id;
//         this.username = username;
//         this.password = password;
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//     }
// }
//
// @Component({
//     selector: 'app-profile',
//     templateUrl: './profile.component.html',
//     styleUrls: ['./profile.component.css']
// })
//
// export class ProfileComponent implements OnInit {
//     user: User;
//     constructor(private router: ActivatedRoute) {
//         this.user = new User('111', 'alice', 'alice', 'alice', 'wang', 'alice@alice');
//     }
//
//     UpdateUser() {
//         console.log(this.user.username);
//         console.log(this.user.firstName);
//         console.log(this.user.lastName);
//     }
//
//     // typescript: observable: wait for all the logic before doing this part
//     ngOnInit() {
//         this.router.params.subscribe(params => {
//             this.user._id = params['uid'];
//             console.log('user id: ' + this.user._id);
//         });
//     }
// }





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService) {
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    ProfileComponent.prototype.profile = function () {
        this.userService = new _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]();
        this.username = this.profileForm.value.username;
        console.log(this.username);
        this.user = this.userService.findUserByUsername(this.username);
        // if (this.username !== 'alice') {
        //     this.errorFlag = true;
        // } else {
        this.uid = this.user._id;
        console.log(this.uid);
        this.router.navigate(['/user', this.uid, 'website']);
        // }
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n    <div class=\"form-group\">\n      <input type=\"text\"\n             name=\"username\"\n             placeholder=\"username\"\n             class=\"form-control\"\n             [(ngModel)]=\"username\" required/>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\"\n             name=\"password\"\n             placeholder=\"password\"\n             class=\"form-control\"\n             [(ngModel)]=\"password\" required/>\n    </div>\n    <div class=\"form-group\">\n      <input type=\"text\"\n             name=\"verify_password\"\n             placeholder=\"verify password\"\n             class=\"form-control\"\n             [(ngModel)]=\"verify_password\" required/>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-primary btn-block\"\n         type=\"submit\">Register</button>\n    </div>\n    <div>\n      <a class=\"btn btn-danger  btn-block\"\n         routerLink=\"/login\">Cancel</a>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    RegisterComponent.prototype.register = function () {
        this.userService = new _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]();
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.user = this.userService.findUserByCredential(this.username, this.password);
        // if (this.username !== 'alice') {
        //   this.errorFlag = true;
        // } else {
        this.uid = this.user._id;
        this.router.navigate(['/user', this.uid]);
        // }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid \">\n    <div class=\"col-4 d-none d-md-block\">\n      <div class=\"container-fluid\">\n        <a routerLink=\"user/:uid\" class=\"navbar-link cl-text-white cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n          Websites\n        </a>\n        <a routerLink=\"user/:​​​uid/website\" class=\"navbar-link cl-text-white float-right\">\n          <i class=\"fas fa-plus fontawsome_icon\"></i>\n        </a>\n      </div>\n    </div>\n    <div class=\"col-8 float-right\">\n      <div class=\"container\">\n        <a class=\"cl-text-white navbar-brand cl-text-bold float-left\" href=\"#\">\n          Edit Website\n        </a>\n        <a routerLink=\"user/:​​​uid/website\" class=\"navbar-link cl-text-white float-right\">\n          <i class=\"fas fa-check fontawsome_icon\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid cl-container-padding\">\n  <div class=\"col-4 d-none d-md-block border-right\">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Blogging App</a>\n        <a routerLink=\"user/:​​​uid/website/:wid\">  <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Address Book App</a>\n        <a routerLink=\"user/:​​​uid/website/:wid\">  <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Script Testing App</a>\n        <a routerLink=\"user/:​​​uid/website/:wid\">  <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n      </li>\n      <li class=\"list-group-item cl-list-item-borderless\">\n        <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Blogger</a>\n        <a routerLink=\"user/:​​​uid/website/:wid\">  <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-8 float-right\">\n    <form>\n      <div class=\"form-group\">\n        <label for=\"website-name\">WebsiteName</label>\n        <input type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n      </div>\n      <a class=\"btn btn-danger btn-block\"\n         routerLink=\"user/:​​​uid/website/:wid\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fuild col-12\">\n    <a routerLink=\"user/:​uid\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent() {
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-md-8 col-8\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid]\" class=\"navbar-link cl-text-white cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n                    Websites\n                </a>\n            </div>\n        </div>\n        <div class=\"cl-md-4 col-4\">\n            <a [routerLink]=\"['/user', uid, 'website', 'new']\" class=\"navbar-link cl-text-white float-right\">\n                <i class=\"fas fa-plus fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n    <ul>\n        <li *ngFor=\"let website of websites\">\n            <a [routerLink]=\"['/user', uid, 'website', website._id, 'page']\" >{{website.name}}<i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n        </li>\n\n    </ul>\n</div>\n\n\n<!--<div class=\"row container-fluid\">-->\n<!--<div class=\"col-12\">-->\n<!--<ul class=\"list-group cl-list-group-borderless\">-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a [routerLink]=\"['user/', uid, '/website/new', wid]\">Address Book App</a>-->\n<!--<a routerLink=\"user/{{​​​​​uid}}/website/:wid\"> <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{​​​​​uid}}/website/:wid/page\">Blogger</a>-->\n<!--<a routerLink=\"user/{{​​​​​uid}}/website/:wid\"> <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{​​​​​uid}}/website/:wid/page\">Blogging App</a>-->\n<!--<a routerLink=\"user/{{​​uid}}/website/:wid\"><i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>-->\n<!--</li>-->\n<!--<li class=\"list-group-item cl-list-item-borderless\">-->\n<!--<a routerLink=\"user/{{​​​​​uid}}/website/:wid/page\">Script Testing App</a>-->\n<!--<a routerLink=\"user/{{​​​​​uid}}/website/:wid\"> <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>-->\n<!--</li>-->\n<!--</ul>-->\n<!--</div>-->\n<!--</div>-->\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n<div class=\"container-fuild col-12\">\n<a [routerLink]=\"['/user', uid]\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n<i class=\"fas fa-user fontawsome_icon\"></i>\n</a>\n</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");




var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log('"params:" ');
            console.log(params);
            _this.uid = params['uid'];
            console.log(_this.uid);
        });
        this.websiteService = new _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"]();
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
        console.log(this.websites);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <nav class=\"navbar fixed-top cl-blue-navbar\">\n        <div class=\"container-fluid \">\n\n            <div class=\"col-1 \">\n                <a routerLink=\"user/:​​​uid/website\" class=\"navbar-link cl-text-white cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n            </div>\n            <div class=\"col-3 d-none d-md-block\">\n                <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n                    Websites\n                </a>\n                <a routerLink=\"user/:​​​uid/website/new\" class=\"navbar-link cl-text-white float-right\">\n                    <i class=\"fas fa-plus fontawsome_icon\"></i>\n                </a>\n            </div>\n            <div class=\"col-8\">\n                <a class=\"cl-text-white navbar-brand cl-text-bold float-left\" href=\"#\">\n                    New Websites\n                </a>\n                <a routerLink=\"user/:​​​uid/website\" class=\"navbar-link cl-text-white float-right\">\n                    <i class=\"fas fa-check fontawsome_icon\"></i>\n                </a>\n            </div>\n\n        </div>\n    </nav>\n\n    <div class=\"row container-fluid cl-container-padding\">\n        <div class=\"col-4 d-none d-md-block border-right\">\n            <ul class=\"list-group cl-list-group-borderless\">\n                <li class=\"list-group-item cl-list-item-borderless\">\n                    <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Blogging App</a>\n                    <a routerLink=\"user/:​​​uid/website/:wid\"> <i\n                            class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n                </li>\n                <li class=\"list-group-item cl-list-item-borderless\">\n                    <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Address Book App</a>\n                    <a routerLink=\"user/:​​​uid/website/:wid\"> <i\n                            class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n                </li>\n                <li class=\"list-group-item cl-list-item-borderless\">\n                    <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Script Testing App</a>\n                    <a routerLink=\"user/:​​​uid/website/:wid\"> <i\n                            class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n                </li>\n                <li class=\"list-group-item cl-list-item-borderless\">\n                    <a routerLink=\"user/:​​​​​uid/website/:wid/page\">Blogger</a>\n                    <a routerLink=\"user/:​​​uid/website/:wid\"> <i\n                            class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"col-8 float-right\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"website-name\">Name</label>\n                    <input type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"website-description\">Description</label>\n                    <textarea id=\"website-description\" class=\"form-control\" rows=\"5\"\n                              placeholder=\"Description\"></textarea>\n                </div>\n            </form>\n        </div>\n    </div>\n\n    <nav class=\"navbar fixed-bottom cl-blue-navbar\">\n        <div class=\"container-fuild col-12\">\n            <a routerLink=\"user/:​uid\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n                <i class=\"fas fa-user fontawsome_icon\"></i>\n            </a>\n        </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3Nlci93aWRnZXQtY2hvb3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-4\">\n      <div class=\"container-fluid\">\n        <a href=\"widget-list.html\" class=\"navbar-link cl-text-black cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"navbar-brand cl-text-bold cl-text-black\" href=\"#\">\n          Choose Widget\n        </a>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-heading.html\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-image.html\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"widget-youtube.html\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a href=\"#\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n  <div class=\"container-fuild col-12\">\n    <a href=\"profile.html\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-chooser/widget-chooser.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-chooser/widget-chooser.component.ts ***!
  \*************************************************************************/
/*! exports provided: WidgetChooserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooserComponent", function() { return WidgetChooserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent() {
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.type\">\n    <div *ngSwitchCase='HEADING'>\n        <app-widget-heading></app-widget-heading>\n    </div>\n    <div *ngSwitchCase='IMAGE'>\n        <app-widget-image></app-widget-image>\n    </div>\n    <div *ngSwitchCase='YOUTUBE'>\n        <app-widget-youtube></app-widget-youtube>\n    </div>\n    <div *ngSwitchCase='HTML'>\n        <app-widget-html></app-widget-html>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent() {
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGluZy93aWRnZXQtaGVhZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Title</title>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\"\n        integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"\n          integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\"\n          crossorigin=\"anonymous\"></script>\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\"\n        integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link href=\"../src/css/style.css\" rel=\"stylesheet\"/>\n</head>\n\n<body>\n<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-4\">\n      <div class=\"container-fluid\">\n        <a href=\"widget-list.html\" class=\"navbar-link cl-text-black cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"navbar-brand cl-text-bold cl-text-white\" href=\"#\">\n          Widget Edit\n        </a>\n      </div>\n    </div>\n    <div class=\"float-right\">\n      <a href=\"widget-list.html\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" href=\"widget-list.html\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n  <div class=\"container-fuild col-12\">\n    <a href=\"profile.html\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeadingComponent", function() { return WidgetHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetHeadingComponent = /** @class */ (function () {
    function WidgetHeadingComponent() {
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
    };
    WidgetHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-heading',
            template: __webpack_require__(/*! ./widget-heading.component.html */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html"),
            styles: [__webpack_require__(/*! ./widget-heading.component.css */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css"), __webpack_require__(/*! ../../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetHeadingComponent);
    return WidgetHeadingComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  widget-html works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent() {
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css"), __webpack_require__(/*! ../../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Title</title>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\"\n        integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"\n          integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\"\n          crossorigin=\"anonymous\"></script>\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\"\n        integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link href=\"../src/css/style.css\" rel=\"stylesheet\"/>\n</head>\n<body>\n<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-4\">\n      <div class=\"container-fluid\">\n        <a href=\"widget-list.html\" class=\"navbar-link cl-text-black cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"navbar-brand cl-text-bold cl-text-white\" href=\"#\">\n          Widget Edit\n        </a>\n      </div>\n    </div>\n    <div class=\"float-right\">\n      <a href=\"widget-list.html\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input type=\"file\" class=\"form-control\" id=\"exampleInputFile\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block\" href=\"#\">Upload Image</a>\n  <a class=\"btn btn-danger  btn-block\" href=\"widget-list.html\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n  <div class=\"container-fuild col-12\">\n    <a href=\"profile.html\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent() {
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css"), __webpack_require__(/*! ../../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Title</title>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\"\n        integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n  <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\"\n          integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\"\n          crossorigin=\"anonymous\"></script>\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\"\n        integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no\">\n  <link href=\"../src/css/style.css\" rel=\"stylesheet\"/>\n</head>\n<body>\n\n<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-4\">\n      <div class=\"container-fluid\">\n        <a href=\"widget-list.html\" class=\"navbar-link cl-text-black cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"navbar-brand cl-text-bold cl-text-white\" href=\"#\">\n          Widget Edit\n        </a>\n      </div>\n    </div>\n    <div class=\"float-right\">\n      <a href=\"widget-list.html\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" href=\"widget-list.html\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n  <div class=\"container-fuild col-12\">\n    <a href=\"profile.html\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent() {
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css"), __webpack_require__(/*! ../../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n    <div class=\"container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\" class=\"navbar-link cl-text-black cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"navbar-brand cl-text-bold cl-text-black\" href=\"#\">\n                    Pages\n                </a>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a [routerLink]=\"['/user', uid, 'website', wid, 'page', pid, 'widget', 'new']\" class=\"cl-text-black cl-icon-padding\">\n                <i class=\"fas fa-plus fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\"\n<div class=\" container-fluid cl-container-padding\">\n    <ul>\n        <li *ngFor=\"let widget of widgets\">\n            <a [routerLink]=\"['/user', uid, 'website', wid, 'page', pid, 'widget', widget._id]\" class=\"cl-text-black\">\n                {{widget.widgetType}}\n            </a>\n            <a [routerLink]=\"['/user', uid, 'website', wid, 'page', pid]\">\n                <i class=\"fas fa-cog fontawsome_icon float-right\"></i>\n            </a>\n        </li>\n\n    </ul>\n</div>\n\n\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"float-left navbar-text\">\n        <a href=\"#\" class=\"cl-icon-padding cl-text-black\">\n            <i class=\"fas fa-play\"></i>\n        </a>\n        <a href=\"#\" class=\"cl-icon-padding cl-text-black\">\n            <i class=\"far fa-eye\"></i>\n        </a>\n    </div>\n    <div class=\"float-right\">\n        <a [routerLink]=\"['/user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n\n\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(activateRoute) {
        this.activateRoute = activateRoute;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('widget list params:" ');
            console.log(params);
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            console.log(_this.pid);
            _this.widgetService = new _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]();
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pid);
            console.log(_this.widget.widgetType);
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\ninput.form-control {\n    margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n    margin-bottom: 2em;\n}\na:hover{\n    text-decoration: none;\n}\n.cl-container-padding {\n    padding-top: 5%;\n    padding-bottom: 10%;\n}\n.cl-blue-navbar{\n    background-color: #337ab7;\n}\n.cl-text-white{\n    color: #fff;\n}\n.cl-text-black{\n    color: #000000;\n}\n.cl-text-bold{\n    font-weight: bold;\n}\n.cl-icon-padding {\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.cl-header-padding{\n    padding-left: 5%;\n}\n.cl-full-width{\n    width: 100%;\n}\n.cl-widget-list-item{\n    padding-bottom: 20px;\n}\n.cl-v-divider{\n    border-right: 1px solid #808080;\n    height: 100%;\n}\n.cl-widget-heading{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.cl-height{\n    height: 100%;\n    min-height: 100%;\n}\n.cl-relative-position{\n    position: relative;\n}\n.cl-absolute-position{\n    position: absolute;\n}\n.cl-widget-list-icons{\n    top: 0px;\n    right: 0px;\n    z-index: 10;\n    background-color: white;\n}\n.cl-zero-right-padding{\n    padding-right: 0px;\n}\n.cl-list-item-borderless {\n    border-top: 0 none;\n    border-bottom: 0 none;\n    border-left: 0 none;\n    border-right: 0 none;\n}\n.cl-widget-images{\n    display: inline;\n    width: 85%;\n    z-index: 100;\n    position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jc3Mvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2Nzcy9zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2wtZm9ybS1ib3R0b20tcGFkZGluZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uY2wtYmx1ZS1uYXZiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jbC10ZXh0LWJsYWNre1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2wtaWNvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNsLWhlYWRlci1wYWRkaW5ne1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5jbC1mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY2wtd2lkZ2V0LWxpc3QtaXRlbXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmNsLXYtZGl2aWRlcntcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjODA4MDgwO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1oZWFkaW5ne1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC13aWRnZXQtcGFyYWdyYXBoe1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5jbC1oZWlnaHR7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC1yZWxhdGl2ZS1wb3NpdGlvbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2wtYWJzb2x1dGUtcG9zaXRpb257XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNsLXdpZGdldC1saXN0LWljb25ze1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uY2wtemVyby1yaWdodC1wYWRkaW5ne1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmNsLWxpc3QtaXRlbS1ib3JkZXJsZXNzIHtcbiAgICBib3JkZXItdG9wOiAwIG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMCBub25lO1xuICAgIGJvcmRlci1sZWZ0OiAwIG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiAwIG5vbmU7XG59XG5cbi5jbC13aWRnZXQtaW1hZ2Vze1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB3aWR0aDogODUlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59Il19 */"

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
    production: false
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

module.exports = __webpack_require__(/*! /Users/anqibi/Documents/cs5610/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map