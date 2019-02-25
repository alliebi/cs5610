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
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
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
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_chooser_widget_chooser_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooserComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<router-outlet></router-outlet>\n\n\n\n\n"

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
        // color = 'yellow';
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
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-heading/widget-heading.component */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _services_safepipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/safepipe */ "./src/app/services/safepipe.ts");



























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
                _views_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_22__["WidgetHeadingComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_23__["WidgetImageComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_24__["WidgetYoutubeComponent"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_25__["WidgetHtmlComponent"],
                _services_safepipe__WEBPACK_IMPORTED_MODULE_26__["SafePipe"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_18__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_19__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_20__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_21__["WidgetService"]],
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
    function Page(_id, name, wid, title) {
        this._id = _id;
        this.name = name;
        this.wid = wid;
        this.title = title;
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
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
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
/*! exports provided: WidgetHeading, WidgetImage, WidgetHtml, WidgetYoutube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeading", function() { return WidgetHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImage", function() { return WidgetImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtml", function() { return WidgetHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutube", function() { return WidgetYoutube; });
var WidgetHeading = /** @class */ (function () {
    function WidgetHeading(name, _id, widgetType, pageId, size, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.size = size;
        this.text = text;
    }
    return WidgetHeading;
}());

var WidgetImage = /** @class */ (function () {
    function WidgetImage(name, _id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
    }
    return WidgetImage;
}());

var WidgetHtml = /** @class */ (function () {
    function WidgetHtml(name, _id, widgetType, pageId, text) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.text = text;
    }
    return WidgetHtml;
}());

var WidgetYoutube = /** @class */ (function () {
    function WidgetYoutube(name, _id, widgetType, pageId, width, url) {
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
        this.width = width;
        this.url = url;
    }
    return WidgetYoutube;
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
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('321', 'Post1', '123', 'Lorem3'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('432', 'Post2', '234', 'Lorem4'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('543', 'Post3', '345', 'Lorem5'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('654', 'Post4', '456', 'Lorem6'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('765', 'Post5', '567', 'Lorem7'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('876', 'Post6', '678', 'Lorem8'),
            new _models_page_model_client__WEBPACK_IMPORTED_MODULE_1__["Page"]('987', 'Post7', '789', 'Lorem9'),
        ];
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var newPage = {
            _id: (new Date()).getTime() + '',
            name: page.name,
            wid: websiteId,
            title: page.title
        };
        this.pages.push(newPage);
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

/***/ "./src/app/services/safepipe.ts":
/*!**************************************!*\
  !*** ./src/app/services/safepipe.ts ***!
  \**************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
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
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('123', 'alice', 'alice', 'Alice', 'Wonder', 'alice@gamil.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('234', 'bob', 'bob', 'Bob', 'Marley', 'bob@gamil.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('345', 'charly', 'charly', 'Charly', 'Garcia', 'charly@gamil.com'),
            new _models_user_model_client__WEBPACK_IMPORTED_MODULE_1__["User"]('456', 'jannunzi', 'jannunzi', 'Jose', 'Annunzi', 'jannunzi@gamil.com')
        ];
    }
    // api = {
    //     'createUser': this.createUser,
    //     'findUserById': this.findUserById
    // };
    UserService.prototype.createUser = function (user) {
        user._id = String(Math.floor(Math.random() * 1000) + 1);
        this.users.push(user);
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
    UserService.prototype.updateUser = function (userId, user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]._id === userId) {
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
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('345', 'Gizmodo', '456', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('456', 'Go', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('567', 'Tic Tac Toe', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('678', 'Checkers', '123', 'Lorem'),
            new _models_website_model_client__WEBPACK_IMPORTED_MODULE_1__["Website"]('789', 'Chess', '234', 'Lorem')
        ];
    }
    WebsiteService.prototype.createWebsite = function (uid, website) {
        website._id = String(Math.floor(Math.random() * 1000) + 1);
        website.developerId = uid;
        this.websites.push(website);
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
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgetsChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.widgetChosen = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('DEFAULT');
        this.widgets = [
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["WidgetHeading"]('', '123', 'HEADING', '321', 2, 'GIZMODO'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["WidgetHeading"]('', '234', 'HEADING', '432', 4, 'Lorem ipsum'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["WidgetImage"]('', '345', 'IMAGE', '543', '100%', 'http://lorempixel.com/400/200'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["WidgetImage"]('', '456', 'IMAGE', '654', '100%', 'http://lorempixel.com/400/200'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["WidgetHeading"]('', '567', 'HEADING', '765', 4, 'Lorem ipsum'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["WidgetYoutube"]('', '678', 'YOUTUBE', '876', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM'),
            new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_1__["WidgetYoutube"]('', '789', 'YOUTUBE', '987', '100%', 'https://www.youtube.com/embed/-C_jPcUkVrM')
        ];
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = String(Math.floor(Math.random() * 1000) + 1);
        widget.pageId = pageId;
        this.widgets.push(widget);
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var ans = [];
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget.pageId === pageId) {
                ans.push(widget);
            }
        }
        return ans;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget._id === widgetId) {
                return widget;
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, newWidget) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget._id === widgetId) {
                if (widget.widgetType === 'HEADING') {
                    // @ts-ignore
                    widget.size = newWidget.size;
                    // @ts-ignore
                    widget.text = newWidget.text;
                }
                else if (widget.widgetType === 'IMAGE') {
                    // @ts-ignore
                    widget.width = newWidget.width;
                    // @ts-ignore
                    widget.url = newWidget.url;
                }
                else if (widget.widgetType === 'YOUTUBE') {
                    // @ts-ignore
                    widget.width = newWidget.width;
                    // @ts-ignore
                    widget.url = newWidget.url;
                }
            }
        }
        this.widgetsChanged.next(this.widgets.slice());
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var _this = this;
        this.widgets.forEach(function (widget, index) {
            if (widget._id === widgetId) {
                _this.widgets.splice(index, 1);
            }
        });
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
    ], WidgetService);
    return WidgetService;
}());

// import {Injectable} from '@angular/core';
// import {Widget} from '../models/widget.model.client';
//
// @Injectable()
// export class WidgetService {
//
//     // constructor(_id:String, type:String, pageId:String, size= '1', text = 'text', url = 'url', width = '100%')
//     widgets: Widget[] = [
//         new Widget('123', 'HEADING', '321', '2', 'GIZMODO', null, null),
//         new Widget('234', 'HEADING', '432', '4', 'Lorem ipsum', null, null),
//         new Widget('345', 'IMAGE', '543', null, null, '100%', 'http://lorempixel.com/400/200/'),
//         new Widget('456', 'HTML', '321', null, '<p>Lorem ipsum</p>', null, null),
//         new Widget('567', 'HEADING', '432', '4', 'Lorem ipsum', null, null),
//         new Widget('678', 'YOUTUBE', '543', null, null, '100%', 'https://youtube.com/token'),
//         new Widget('789', 'HTML', '321', '<p>Lorem ipsum</p>', null, null)
//    ];
//
//
//     createWidget(pageId, widget) {
//         this.widgets.push(widget);
//     }
//
//     updateWidget(widgetId, widget) {
//         for (const i in this.widgets) {
//             if (this.widgets[i]._id === widgetId) {
//                 switch (widget.widgetType) {
//                     case 'HEADER':
//                         this.widgets[i].text = widget.text;
//                         this.widgets[i].size = widget.size;
//                         return true;
//
//                     case 'IMAGE':
//                         this.widgets[i].text = widget.text;
//                         this.widgets[i].url = widget.url;
//                         this.widgets[i].width = widget.width;
//                         return true;
//
//                     case 'YOUTUBE':
//                         this.widgets[i].text = widget.text;
//                         this.widgets[i].url = widget.url;
//                         this.widgets[i].width = widget.width;
//                         return true;
//                 }
//
//             }
//         }
//         return false;
//     }
//
//     findWidgetsByPageId(pageId) {
//         const resultSet = [];
//         for ( const i in this.widgets) {
//             if (this.widgets[i].pageId === pageId) {
//                 resultSet.push(this.widgets[i]);
//             }
//         }
//         return resultSet;
//     }
//
//     findWidgetById(widgetId: String) {
//         return this.widgets.find(function (widget) {
//             return widget._id === widgetId;
//         });
//     }
//
//     deleteWidget(widgetId){
//         for (const i in this.widgets) {
//             if (this.widgets[i]._id === widgetId) {
//                 const j = +i;
//                 this.widgets.splice(j, 1);
//             }
//         }
//     }
//
// }


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

module.exports = "<body>\n<nav class=\"navbar fixed-top cl-blue-navbar\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\"\n                   class=\"cl-text-white navbar-link cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <div class=\"cl-text-white navbar-brand cl-text-bold\">\n                    Pages\n                </div>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\" (click)=\"onUpdate()\" class=\"cl-text-white navbar-link cl-icon-padding\">\n                <i class=\"fas fa-check fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"page-name\">Name</label>\n            <input\n                    type=\"text\"\n                    name=\"websiteName\"\n                    class=\"form-control\"\n                    id=\"page-name\"\n                    placeholder=\"Page Name\"\n                    [(ngModel)]=\"page.name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"page-title\">Title</label>\n            <input\n                    type=\"text\"\n                    name=\"websiteName\"\n                    class=\"form-control\"\n                    id=\"page-title\"\n                    placeholder=\"Page Title\"\n                    [(ngModel)]=\"page.title\">\n        </div>\n    </form>\n    <a class=\"btn btn-danger btn-block\" [routerLink]=\"['/user', uid, 'website', wid, 'page']\">Delete</a>\n</div>\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"container-fuild col-12\">\n        <a [routerLink]=\"['/user', uid]\"\n           class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n"

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
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(activateRoute, pageService) {
        this.activateRoute = activateRoute;
        this.pageService = pageService;
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
        this.page = this.pageService.findPageById(this.pid);
        console.log(this.uid);
        console.log(this.pid);
        console.log(this.page.name);
    };
    PageEditComponent.prototype.onUpdate = function () {
        this.pageService.updatePage(this.pid, this.page);
        console.log(this.page);
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
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

module.exports = "<nav class=\"navbar fixed-top bg-light\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid, 'website']\" class=\"navbar-link cl-text-black cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <div class=\"cl-text-black navbar-brand cl-text-bold\">\n                    Pages\n                </div>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a [routerLink]=\"['/user', uid, 'website', wid, 'page', 'new']\" class=\"cl-text-black cl-icon-padding\">\n                <i class=\"fas fa-plus fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n<div class=\" container-fluid cl-container-padding\">\n    <div>\n        <ul>\n            <li *ngFor=\"let page of pages\">\n                <a [routerLink]=\"['/user', uid, 'website', wid, 'page', page._id, 'widget']\">\n                    page: {{page.title}}\n                </a>\n                <a [routerLink]=\"['/user', uid, 'website', wid, 'page', page._id]\">\n                    <i class=\"fas fa-cog fontawsome_icon float-right\"></i>\n                </a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"container-fuild col-12\">\n        <a [routerLink]=\"['/user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n"

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
    function PageListComponent(activateRoute, pageService) {
        this.activateRoute = activateRoute;
        this.pageService = pageService;
        // page: Page;
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
        this.pages = this.pageService.findPageBywid(this.wid);
        console.log('page list:' + this.pages);
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_2__["PageService"]])
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

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['../']\" class=\"cl-text-black navbar-link cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"cl-text-bold cl-text-black\" href=\"#\">\n                    Pages\n                </a>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a [routerLink]=\"['../']\" (click)=\"onSubmit()\" class=\"cl-text-black navbar-link float-right\">\n                <i class=\"fas fa-check fontawsome_icon\"></i>\n            </a>\n        </div>\n\n    </div>\n</nav>\n<div class=\"container-fluid cl-container-padding\">\n    <form #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"page-name\">Name</label>\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"page-name\"\n                   name=\"pageName\"\n                   placeholder=\"Page Name\"\n                   [(ngModel)]=\"newPageName\"\n                   required>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"page-title\">Title</label>\n            <input type=\"text\"\n                   class=\"form-control\"\n                   id=\"page-title\"\n                   name=\"pageTitle\"\n                   placeholder=\"Page Title\"\n                   [(ngModel)]=\"newTitle\"\n                   required>\n        </div>\n    </form>\n</div>\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"container-fuild col-12\">\n        <a [routerLink]=\"['/user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n"

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
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(activateRoute, pageService, router) {
        this.activateRoute = activateRoute;
        this.pageService = pageService;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent.prototype.onSubmit = function () {
        this.newPage = { _id: '', name: this.newPageName, wid: this.wid, title: this.newTitle };
        this.pageService.createPage(this.wid, this.newPage);
        this.router.navigate(['../'], { relativeTo: this.activateRoute });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<div class=\"container-fluid\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n        {{errorMsg}}\n    </div>\n    <h1>Login</h1>\n    <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <input type=\"text\"\n                   name=\"username\"\n                   placeholder=\"username\"\n                   class=\"form-control\"\n                   ngModel\n                   required\n                   #username=\"ngModel\">\n        </div>\n        <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n        </span>\n        <div class=\"form-group\">\n            <input type=\"password\"\n                   name=\"password\"\n                   placeholder=\"password\"\n                   class=\"form-control\"\n                   ngModel\n                   required\n                   #password=\"ngModel\">\n        </div>\n        <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n         </span>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary btn-block\"\n                    type=\"submit\"\n                    [disabled]=\"!f.valid\">Login\n            </button>\n        </div>\n        <div class=\"form-group\">\n            <a routerLink=\"/register\"\n               class=\"btn btn-success btn-block\">Register</a>\n        </div>\n    </form>\n</div>\n"

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
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        var loginUser = this.userService.findUserByCredential(this.username, this.password);
        console.log(loginUser);
        if (loginUser === undefined || this.password !== loginUser.password) {
            this.errorFlag = false;
        }
        else {
            this.router.navigate(['/user', loginUser._id]);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-6\">\n            <div class=\"navbar-brand cl-text-white\">\n                Profile\n            </div>\n        </div>\n        <div class=\"col-6\">\n            <a (click)=\"onUpdateUser()\"\n               class=\"navbar-link float-right cl-icon-padding\">\n                <i class=\"fas fa-check fontawsome_icon cl-text-white\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\n<div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n</div>\n<div class=\"container-main\">\n    <form (ngSubmit)=\"profile()\" #f=\"ngForm\">\n        <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input\n                    type=\"text\"\n                    name=\"username\"\n                    placeholder=\"Username\"\n                    class=\"form-control\"\n                    id=\"username\"\n                    [(ngModel)]=\"user.username\"\n                    required\n                    #username=\"ngModel\"\n            />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\">Email address</label>\n            <input type=\"email\"\n                   pattern=\".+@.+\"\n                   name=\"email\"\n                   id=\"email\"\n                   placeholder=\"Email\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"user.email\"\n                   required\n                   #email=\"ngModel\"\n            />\n            <span class=\"help-block\" *ngIf=\"!email.valid && email.touched\">\n                Please enter correct email address!\n                </span>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"first-name\">First Name</label>\n            <input type=\"text\"\n                   name=\"first-name\"\n                   id=\"first-name\"\n                   placeholder=\"First Name\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"user.firstName\"\n                   required\n                   #firstName=\"ngModel\"\n\n            />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"last-name\">Last Name</label>\n            <input type=\"text\"\n                   name=\"last-name\"\n                   placeholder=\"Last Name\"\n                   class=\"form-control\"\n                   id=\"last-name\"\n                   [(ngModel)]=\"user.lastName\"\n                   required\n                   #lastName=\"ngModel\"\n\n            />\n        </div>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary btn-block\" [routerLink]=\"['/user', this.uid, 'website']\"\n            >Websites\n            </button>\n        </div>\n        <div>\n            <a class=\"btn btn-danger  btn-block\"\n               routerLink=\"/login\">Logout</a>\n        </div>\n    </form>\n</div>\n\n"

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





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService, activateRoute) {
        this.router = router;
        this.userService = userService;
        this.activateRoute = activateRoute;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
        });
        this.user = this.userService.findUserById(this.uid);
        // console.log(this.user);
    };
    ProfileComponent.prototype.onUpdateUser = function () {
        this.userService.updateUser(this.uid, this.user);
        this.router.navigate(['/user', this.uid]);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<div class=\"container\">\n    <h1>Register</h1>\n    <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n        <div class=\"form-group\">\n            <input type=\"text\"\n                   name=\"username\"\n                   placeholder=\"username\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"ng_username\" required\n                   #username=\"ngModel\"/>\n        </div>\n        <span\n                class=\"help-block\"\n                *ngIf=\"!username.valid && username.touched\">\n        Please enter a valid username\n      </span>\n        <div class=\"form-group\">\n            <input type=\"text\"\n                   name=\"password\"\n                   placeholder=\"password\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"ng_password\" required\n                   #password=\"ngModel\"/>\n        </div>\n        <span\n                class=\"help-block\"\n                *ngIf=\"!password.valid && password.touched\">\n        Please enter a valid password\n      </span>\n\n        <div class=\"form-group\">\n            <input type=\"text\"\n                   name=\"verify_password\"\n                   placeholder=\"verify password\"\n                   class=\"form-control\"\n                   [(ngModel)]=\"ng_verify_password\" required\n                   #verify_password=\"ngModel\"/>\n        </div>\n        <span\n                class=\"help-block\"\n                *ngIf=\"(ng_password !== ng_verify_password) && verify_password.touched\">\n        Please enter the same password\n      </span>\n        <div class=\"form-group\">\n            <button class=\"btn btn-primary btn-block\"\n                    type=\"submit\"\n                    [disabled]=\"!f.valid || ng_password !== ng_verify_password\">\n                Register\n            </button>\n        </div>\n        <div>\n            <a class=\"btn btn-danger  btn-block\"\n               routerLink=\"/login\">Cancel</a>\n        </div>\n    </form>\n\n</div>\n"

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
        this.userService = userService;
        this.user = { _id: '', username: '', password: '', firstName: '', lastName: '', email: '' };
    }
    RegisterComponent.prototype.register = function () {
        this.user.username = this.ng_username;
        this.user.password = this.ng_password;
        this.userService.createUser(this.user);
        var loginUser = this.userService.findUserByCredential(this.ng_username, this.ng_password);
        console.log(loginUser);
        console.log(this.userService);
        this.router.navigate(['/user', loginUser._id]);
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

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n    <div class=\"row container-fluid \">\n        <div class=\"col-4 d-none d-md-block\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid]\" class=\"navbar-link cl-text-white cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n                    Websites\n                </a>\n                <a routerLink=\"user/:​​​uid/website\" class=\"navbar-link cl-text-white float-right\">\n                    <i class=\"fas fa-plus fontawsome_icon\"></i>\n                </a>\n            </div>\n        </div>\n        <div class=\"col-8 float-right\">\n            <div class=\"container\">\n                <a class=\"cl-text-white navbar-brand cl-text-bold float-left\" href=\"#\">\n                    Edit Website\n                </a>\n                <a [routerLink]=\"['/user', uid, 'website']\" (click)=\"onUpdateWebsite()\"\n                   class=\"navbar-link cl-text-white float-right\">\n                    <i class=\"fas fa-check fontawsome_icon\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n    <div class=\"row\">\n        <div class=\"col-sm-4 d-none d-sm-block\">\n            <div class=\"form-control\" *ngFor=\"let website of websites\">\n                <a [routerLink]=\"['../', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n                <a [routerLink]=\"['../', website._id]\" (click)=\"onEditWebsite(website._id)\"\n                   class=\"text-blue float-right\">\n                    <i class=\"fas fa-cog\"></i>\n                </a>\n            </div>\n        </div>\n        <div class=\"col-sm-7\">\n            <!--<form #f=\"ngForm\" (ngSubmit)=\"onEditSubmit()\">-->\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"websiteName\">Website Name</label>\n                    <input\n                            type=\"text\"\n                            name=\"websiteName\"\n                            class=\"form-control\"\n                            id=\"websiteName\"\n                            placeholder=\"Website Name\"\n                            [(ngModel)]=\"website.name\">\n\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"websiteDescription\">Website Description</label>\n                    <textarea\n                            id=\"websiteDescription\"\n                            name=\"websiteDescription\"\n                            class=\"form-control\"\n                            rows=\"5\"\n                            [(ngModel)]=\"website.description\"\n                            placeholder=\"Website Description\">{{ website.description }}</textarea>\n                </div>\n                <button class=\"btn btn-danger btn-block\" type=\"button\" (click)=\"onDelete()\">Delete</button>\n            </form>\n        </div>\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fuild col-12\">\n        <a [routerLink]=\"['user', uid]\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteId = params['wid'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
        this.website = this.websiteService.findWebsiteById(this.websiteId);
    };
    WebsiteEditComponent.prototype.onEditWebsite = function (websiteId) {
        var updated = this.websiteService.findWebsiteById(websiteId);
        this.website = updated;
    };
    WebsiteEditComponent.prototype.onUpdateWebsite = function () {
        this.websiteService.updateWebsite(this.websiteId, this.website);
    };
    WebsiteEditComponent.prototype.onDelete = function () {
        this.websiteService.deleteWebsite(this.websiteId);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-md-8 col-8\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid]\" class=\"navbar-link cl-text-white cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n                    Websites\n                </a>\n            </div>\n        </div>\n        <div class=\"cl-md-4 col-4\">\n            <a [routerLink]=\"['/user', uid, 'website', 'new']\" class=\"navbar-link cl-text-white float-right\">\n                <i class=\"fas fa-plus fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\n<div class=\"row container-fluid\">\n    <div  class=\"col-12\">\n        <ul class=\"list-group cl-list-group-borderless\">\n            <li *ngFor=\"let website of websites\" class=\"list-group-item cl-list-item-borderless\">\n                <a [routerLink]=\"['/user', uid, 'website', website._id, 'page']\">{{website.name}}</a>\n                <a [routerLink]=\"['/user', uid, 'website', website._id]\">\n                    <i class=\"fas fa-cog fontawsome_icon float-right\"></i></a>\n            </li>\n\n        </ul>\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n    <div class=\"container-fuild col-12\">\n        <a [routerLink]=\"['/user', uid]\" class=\"navbar-link navbar-text float-right cl-text-white cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n"

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
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.websites = [];
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<div>\n    <nav class=\"navbar fixed-top cl-blue-navbar\">\n        <div class=\"container-fluid \">\n\n            <div class=\"col-1 \">\n                <a [routerLink]=\"['../']\" class=\"navbar-link  cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon cl-text-white\"></i>\n                </a>\n            </div>\n            <div class=\"col-3 d-none d-md-block\">\n                <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n                    Websites\n                </a>\n            </div>\n            <div class=\"col-8\">\n                <a class=\"cl-text-white navbar-brand cl-text-bold float-left\" href=\"#\">\n                    New Websites\n                </a>\n                <a [routerLink]=\"['../']\" (click)=\"onSubmit()\" class=\"navbar-link float-right\">\n                    <i class=\"fas fa-check fontawsome_icon cl-text-white\"></i>\n                </a>\n            </div>\n\n        </div>\n    </nav>\n\n    <div class=\"container-fluid cl-container-padding\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 d-none d-sm-block\">\n                <div class=\"form-control\" *ngFor=\"let website of websites\">\n                    <a [routerLink]=\"['../', website._id, 'page']\" class=\"text-blue\">{{ website.name }}</a>\n                    <a [routerLink]=\"['../', website._id]\" class=\"text-blue float-right\">\n                        <i class=\"fas fa-cog\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-sm-7\">\n                <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <label for=\"websiteName\">Website Name</label>\n                        <input\n                                type=\"text\"\n                                name=\"websiteName\"\n                                class=\"form-control\"\n                                id=\"websiteName\"\n                                [(ngModel)]=\"newWebsiteName\"\n                                required\n                                #name=\"ngModel\">\n                        <span\n                                class=\"help-block\"\n                                *ngIf=\"!name.valid && name.touched\">\n            Please enter a valid website name\n          </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"websiteDescription\">Website Description</label>\n                        <textarea\n                                id=\"websiteDescription\"\n                                name=\"websiteDescription\"\n                                class=\"form-control\"\n                                rows=\"5\"\n                                [(ngModel)]=\"newWebsiteDescription\"></textarea>\n                    </div>\n                    <button\n                            class=\"btn btn-primary btn-block\"\n                            type=\"submit\"\n                            [disabled]=\"!f.valid\">\n                        Submit\n                    </button>\n                </form>\n            </div>\n        </div>\n    </div>\n\n\n    <nav class=\"navbar fixed-bottom cl-blue-navbar\">\n        <div class=\"container-fuild col-12\">\n            <a [routerLink]=\"['user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n                <i class=\"fas fa-user fontawsome_icon cl-text-white\"></i>\n            </a>\n        </div>\n    </nav>\n</div>\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, route, router) {
        this.websiteService = websiteService;
        this.route = route;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
        });
        this.websites = this.websiteService.findWebsitesByUser(this.uid);
    };
    WebsiteNewComponent.prototype.onSubmit = function () {
        this.newWebsite = { _id: '', name: this.newWebsiteName, developerId: this.uid, description: this.newWebsiteDescription };
        this.websiteService.createWebsite(this.uid, this.newWebsite);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a href=\"widget-list.html\" class=\"navbar-link cl-text-black cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"navbar-brand cl-text-bold cl-text-black\" href=\"#\">\n                    Choose Widget\n                </a>\n            </div>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid cl-container-padding\">\n    <ul class=\"list-group cl-list-group-borderless\">\n        <li class=\"list-group-item cl-list-item-borderless cl-text-blue\" >\n            <a [routerLink]=\"['../', widget._id] \" style=\"cursor:pointer;\"\n               (click)=\"onSubmit('HEADING')\">Header</a>\n        </li>\n        <li class=\"list-group-item cl-list-item-borderless cl-text-blue\" >\n            <a [routerLink]=\"['../', widget._id]\" style=\"cursor:pointer;\"\n               (click)=\"onSubmit('IMAGE')\">Image</a>\n        </li>\n        <li class=\"list-group-item cl-list-item-borderless cl-text-blue\">\n            <a [routerLink]=\"['../', widget._id]\" style=\"cursor:pointer;\"\n               (click)=\"onSubmit('YOUTUBE')\">YouTube</a>\n        </li>\n    </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"container-fuild col-12\">\n        <a href=\"profile.html\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n\n"

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
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params
            .subscribe(function (params) {
            _this.pid = params.pid;
        });
        this.widget = { name: '', _id: '', widgetType: '', pageId: this.pid };
        this.widgetService.createWidget(this.pid, this.widget);
        console.log('pid: ' + this.pid);
        console.log('on init widget: ' + this.widget._id);
    };
    WidgetChooserComponent.prototype.onSubmit = function (newWidgetType) {
        this.widget.widgetType = newWidgetType;
        console.log('onSubmit widget: ' + this.widget);
    };
    WidgetChooserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-chooser',
            template: __webpack_require__(/*! ./widget-chooser.component.html */ "./src/app/views/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__(/*! ./widget-chooser.component.css */ "./src/app/views/widget/widget-chooser/widget-chooser.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "\n<div *ngIf=\"widget !== undefined\" [ngSwitch]=\"widget.widgetType\">\n    <div *ngSwitchCase=\"'HEADING'\">\n        <app-widget-heading></app-widget-heading>\n    </div>\n    <div *ngSwitchCase=\"'IMAGE'\">\n        <app-widget-image></app-widget-image>\n    </div>\n    <div *ngSwitchCase=\"'YOUTUBE'\">\n        <app-widget-youtube></app-widget-youtube>\n    </div>\n</div>\n\n"

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
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(activateRoute, widgetService) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.widgets = [];
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('widget edit params:" ');
            console.log(params);
            _this.wgid = params['wgid'];
            _this.widget = _this.widgetService.findWidgetById(_this.wgid);
            console.log(_this.widget);
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetService"]])
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

module.exports = "\n<nav class=\"navbar fixed-top navbar-light bg-light\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-4\">\n      <div class=\"container-fluid\">\n        <a [routerLink]=\"['../', 'new']\" class=\"navbar-link cl-text-black cl-icon-padding\">\n          <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n        </a>\n        <a class=\"navbar-brand cl-text-bold cl-text-black\" href=\"#\">\n          Widget Edit\n        </a>\n      </div>\n    </div>\n    <div class=\"float-right\">\n      <a (click)=\"onUpdateWidget()\" class=\"cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-check fontawsome_icon\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label>Name</label>\n      <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"widgetName\"\n              placeholder=\"Widget Name\"\n              [(ngModel)]=\"newWidgetName\">\n    </div>\n    <div class=\"form-group\">\n      <label>Text</label>\n      <input\n              type=\"text\"\n              class=\"form-control\"\n              name=\"widgetText\"\n              placeholder=\"Widget Text\"\n              [(ngModel)]=\"newWidgetText\">\n    </div>\n    <div class=\"form-group\">\n      <label>Size</label>\n      <input\n              type=\"number\"\n              class=\"form-control\"\n              name=\"widgetSize\"\n              placeholder=\"Widget Size\"\n              [(ngModel)]=\"newWidgetSize\">\n    </div>\n    <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n  <div class=\"container-fuild col-12\">\n    <a [routerLink]=\"['user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n      <i class=\"fas fa-user fontawsome_icon\"></i>\n    </a>\n  </div>\n</nav>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetHeadingComponent = /** @class */ (function () {
    function WidgetHeadingComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
    };
    WidgetHeadingComponent.prototype.onUpdateWidget = function () {
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetHeading"](this.newWidgetName, '', 'HEADING', '', this.newWidgetSize, this.newWidgetText);
        this.widgetService.updateWidget(this.widgetId, this.newWidget);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetHeadingComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-heading',
            template: __webpack_require__(/*! ./widget-heading.component.html */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html"),
            styles: [__webpack_require__(/*! ./widget-heading.component.css */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css"), __webpack_require__(/*! ../../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['../', 'new']\" class=\"navbar-link cl-text-black cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"navbar-brand cl-text-bold cl-text-black\" href=\"#\">\n                    Widget Edit\n                </a>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a (click)=\"onUpdateWidget()\" class=\"cl-text-black cl-icon-padding\">\n                <i class=\"fas fa-check fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"widgetName\"\n                    placeholder=\"Widget Name\"\n                    [(ngModel)]=\"newWidget.name\">\n        </div>\n        <div class=\"form-group\">\n            <label>Text</label>\n            <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"widgetText\"\n                    placeholder=\"Widget Text\"\n                    [(ngModel)]=\"newWidget.widgetType\">\n        </div>\n        <div class=\"form-group\">\n            <label>URL</label>\n            <input\n                    type=\"url\"\n                    class=\"form-control\"\n                    name=\"widgetURL\"\n                    placeholder=\"Widget URL\"\n                    [(ngModel)]=\"newWidget.url\">\n        </div>\n        <div class=\"form-group\">\n            <label>Width</label>\n            <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"widgetWidth\"\n                    placeholder=\"Widget Width\"\n                    [(ngModel)]=\"newWidget.width\">\n        </div>\n        <div class=\"form-group\">\n            <label>Upload</label>\n            <div class=\"file-upload\">\n                <div class=\"file-upload\">\n                    <input type=\"file\"\n                           id=\"avatar\" name=\"avatar\"\n                           accept=\"image/png, image/jpeg\">\n                </div>\n            </div>\n            <button class=\"btn btn-primary btn-block\">Upload Image</button>\n            <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n        </div>\n    </form>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"container-fuild col-12\">\n        <a [routerLink]=\"['user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
    };
    WidgetImageComponent.prototype.onUpdateWidget = function () {
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["WidgetImage"](this.newWidgetName, '', 'IMAGE', '', this.newWidgetWidth, this.newWidgetURL);
        this.widgetService.updateWidget(this.widgetId, this.newWidget);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetImageComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css"), __webpack_require__(/*! ../../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n    <div class=\"row container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['../', 'new']\" class=\"navbar-link cl-text-black cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"navbar-brand cl-text-bold cl-text-black\" href=\"#\">\n                    Widget Edit\n                </a>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a (click)=\"onUpdateWidget()\" class=\"cl-text-black cl-icon-padding\">\n                <i class=\"fas fa-check fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"widgetName\"\n                    placeholder=\"Widget Name\"\n                    [(ngModel)]=\"newWidgetName\">\n        </div>\n        <div class=\"form-group\">\n            <label>Text</label>\n            <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"widgetText\"\n                    placeholder=\"Widget Text\"\n                    [(ngModel)]=\"newWidgetText\">\n        </div>\n        <div class=\"form-group\">\n            <label>URL</label>\n            <input\n                    type=\"url\"\n                    class=\"form-control\"\n                    name=\"widgetURL\"\n                    placeholder=\"Widget URL\"\n                    [(ngModel)]=\"newWidgetURL\">\n        </div>\n        <div class=\"form-group\">\n            <label>Width</label>\n            <input\n                    type=\"text\"\n                    class=\"form-control\"\n                    name=\"widgetWidth\"\n                    placeholder=\"Widget Width\"\n                    [(ngModel)]=\"newWidgetWidth\">\n        </div>\n        <button class=\"btn btn-danger btn-block\" (click)=\"onDelete()\">Delete</button>\n    </form>\n</div>\n\n\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"container-fuild col-12\">\n        <a [routerLink]=\"['user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n"

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
/* harmony import */ var _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/widget.model.client */ "./src/app/models/widget.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(route, widgetService, router) {
        this.route = route;
        this.widgetService = widgetService;
        this.router = router;
        this.newWidgetText = '';
        this.newWidgetWidth = '';
        this.newWidgetURL = '';
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.uid = params['uid'];
            _this.widgetId = params['wgid'];
            _this.pageId = params['pid'];
        });
        if (this.widgetId !== 'undefined') {
            this.widget = this.widgetService.findWidgetById(this.widgetId);
        }
    };
    WidgetYoutubeComponent.prototype.onUpdateWidget = function () {
        this.newWidget = new _models_widget_model_client__WEBPACK_IMPORTED_MODULE_2__["WidgetYoutube"](this.newWidgetName, '', 'YOUTUBE', this.pageId, this.newWidgetWidth, this.newWidgetURL);
        this.widgetService.updateWidget(this.widgetId, this.newWidget);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetYoutubeComponent.prototype.onDelete = function () {
        this.widgetService.deleteWidget(this.widgetId);
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css"), __webpack_require__(/*! ../../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<nav class=\"navbar fixed-top navbar-light bg-light\">\n    <div class=\"container-fluid\">\n        <div class=\"col-4\">\n            <div class=\"container-fluid\">\n                <a [routerLink]=\"['/user', uid, 'website', wid, 'page']\" class=\"navbar-link cl-text-black cl-icon-padding\">\n                    <i class=\"fas fa-chevron-left fontawsome_icon\"></i>\n                </a>\n                <a class=\"navbar-brand cl-text-bold cl-text-black\" href=\"#\">\n                    Pages\n                </a>\n            </div>\n        </div>\n        <div class=\"float-right\">\n            <a [routerLink]=\"['./new']\" class=\"cl-text-black cl-icon-padding\">\n                <i class=\"fas fa-plus fontawsome_icon\"></i>\n            </a>\n        </div>\n    </div>\n</nav>\n\n<div class=\" container-fluid cl-container-padding\">\n    <div *ngFor=\"let widget of widgets\" [ngSwitch]=\"widget.widgetType\">\n        <a routerLink=\"./\" class=\"float-right text-black\">\n            <i class=\"fas fa-bars\"></i>\n        </a>\n        <a [routerLink]=\"['/user', uid, 'website', wid, 'page', pid, 'widget', widget._id]\" class=\"float-right text-blue\">\n            <i class=\"fas fa-cog\"></i>\n        </a>\n        <h3 *ngSwitchCase=\"'HEADING'\">{{ widget.text }}</h3>\n        <img *ngSwitchCase=\"'IMAGE'\" [src]=\"widget.url\" alt=\"\">\n        <iframe *ngSwitchCase=\"'YOUTUBE'\" width=\"640\" height=\"360\" [src]=\"widget.url|safe\" rameborder=\"0\"\n                allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n                allowfullscreen></iframe>\n        <p *ngSwitchDefault><br><br></p>\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom bg-light\">\n    <div class=\"float-left navbar-text\">\n        <a href=\"#\" class=\"cl-icon-padding cl-text-black\">\n            <i class=\"fas fa-play\"></i>\n        </a>\n        <a href=\"#\" class=\"cl-icon-padding cl-text-black\">\n            <i class=\"far fa-eye\"></i>\n        </a>\n    </div>\n    <div class=\"float-right\">\n        <a [routerLink]=\"['/user', uid]\" class=\"navbar-link navbar-text float-right cl-icon-padding\">\n            <i class=\"fas fa-user fontawsome_icon\"></i>\n        </a>\n    </div>\n</nav>\n\n\n"

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
    function WidgetListComponent(activateRoute, widgetService) {
        this.activateRoute = activateRoute;
        this.widgetService = widgetService;
        this.widgets = [];
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRoute.params.subscribe(function (params) {
            console.log('widget list params:" ');
            console.log('params:' + params);
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            console.log('pid:' + _this.pid);
            console.log('wid:' + _this.wid);
            console.log('uid:' + _this.uid);
            _this.widgets = _this.widgetService.findWidgetsByPageId(_this.pid);
        });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css"), __webpack_require__(/*! ../../../../css/style.css */ "./src/css/style.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
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

module.exports = "body {\n    padding-top: 70px;\n    padding-bottom: 70px;\n}\ninput.form-control {\n    margin-bottom: 5px;\n}\n.cl-form-bottom-padding{\n    margin-bottom: 2em;\n}\na:hover{\n    text-decoration: none;\n}\n.cl-container-padding {\n    padding-top: 5%;\n    padding-bottom: 10%;\n}\n.cl-blue-navbar{\n    background-color: #337ab7;\n}\n.cl-text-white{\n    color: #fff;\n}\n.cl-text-black{\n    color: #000000;\n}\n.cl-text-blue {\n    color: #0000ff;\n}\n.cl-text-bold{\n    font-weight: bold;\n}\n.cl-icon-padding {\n    padding-left: 10px;\n    padding-right: 10px;\n}\n.cl-header-padding{\n    padding-left: 5%;\n}\n.cl-full-width{\n    width: 100%;\n}\n.cl-widget-list-item{\n    padding-bottom: 20px;\n}\n.cl-v-divider{\n    border-right: 1px solid #808080;\n    height: 100%;\n}\n.cl-widget-heading{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.cl-widget-paragraph{\n    margin-top: 0px;\n    margin-bottom: 0px;\n}\n.cl-height{\n    height: 100%;\n    min-height: 100%;\n}\n.cl-relative-position{\n    position: relative;\n}\n.cl-absolute-position{\n    position: absolute;\n}\n.cl-widget-list-icons{\n    top: 0px;\n    right: 0px;\n    z-index: 10;\n    background-color: white;\n}\n.cl-zero-right-padding{\n    padding-right: 0px;\n}\n.cl-list-item-borderless {\n    border-top: 0 none;\n    border-bottom: 0 none;\n    border-left: 0 none;\n    border-right: 0 none;\n}\n.cl-widget-images{\n    display: inline;\n    width: 85%;\n    z-index: 100;\n    position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jc3Mvc3R5bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2Nzcy9zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBwYWRkaW5nLXRvcDogNzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cbmlucHV0LmZvcm0tY29udHJvbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2wtZm9ybS1ib3R0b20tcGFkZGluZ3tcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbmE6aG92ZXJ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2wtY29udGFpbmVyLXBhZGRpbmcge1xuICAgIHBhZGRpbmctdG9wOiA1JTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xufVxuXG4uY2wtYmx1ZS1uYXZiYXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcbn1cblxuLmNsLXRleHQtd2hpdGV7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5jbC10ZXh0LWJsYWNre1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uY2wtdGV4dC1ibHVlIHtcbiAgICBjb2xvcjogIzAwMDBmZjtcbn1cblxuLmNsLXRleHQtYm9sZHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsLWljb24tcGFkZGluZyB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jbC1oZWFkZXItcGFkZGluZ3tcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uY2wtZnVsbC13aWR0aHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNsLXdpZGdldC1saXN0LWl0ZW17XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jbC12LWRpdmlkZXJ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzgwODA4MDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jbC13aWRnZXQtaGVhZGluZ3tcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtd2lkZ2V0LXBhcmFncmFwaHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uY2wtaGVpZ2h0e1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG4uY2wtcmVsYXRpdmUtcG9zaXRpb257XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNsLWFic29sdXRlLXBvc2l0aW9ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jbC13aWRnZXQtbGlzdC1pY29uc3tcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmNsLXplcm8tcmlnaHQtcGFkZGluZ3tcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5jbC1saXN0LWl0ZW0tYm9yZGVybGVzcyB7XG4gICAgYm9yZGVyLXRvcDogMCBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDAgbm9uZTtcbiAgICBib3JkZXItbGVmdDogMCBub25lO1xuICAgIGJvcmRlci1yaWdodDogMCBub25lO1xufVxuXG4uY2wtd2lkZ2V0LWltYWdlc3tcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgd2lkdGg6IDg1JTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuIl19 */"

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