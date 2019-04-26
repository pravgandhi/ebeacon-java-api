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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
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



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!--<app-message-home></app-message-home>-->\n<mat-toolbar color=\"primary\">eBeacon</mat-toolbar>\n<app-ebeacon-home></app-ebeacon-home>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'ebeacon-ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _messaging_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messaging/messages/messages.component */ "./src/app/messaging/messages/messages.component.ts");
/* harmony import */ var _messaging_new_messages_new_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messaging/new-messages/new-messages.component */ "./src/app/messaging/new-messages/new-messages.component.ts");
/* harmony import */ var _messaging_message_home_message_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messaging/message-home/message-home.component */ "./src/app/messaging/message-home/message-home.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/ebeacon-service.service */ "./src/app/service/ebeacon-service.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _subscription_subscription_home_subscription_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subscription/subscription-home/subscription-home.component */ "./src/app/subscription/subscription-home/subscription-home.component.ts");
/* harmony import */ var _home_ebeacon_home_ebeacon_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/ebeacon-home/ebeacon-home.component */ "./src/app/home/ebeacon-home/ebeacon-home.component.ts");
/* harmony import */ var _home_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/sidenav/sidenav.component */ "./src/app/home/sidenav/sidenav.component.ts");
/* harmony import */ var _mat_snack_bar_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./mat-snack-bar/mat-snack-bar/mat-snack-bar.component */ "./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _messaging_messages_messages_component__WEBPACK_IMPORTED_MODULE_5__["MessagesComponent"],
                _messaging_new_messages_new_messages_component__WEBPACK_IMPORTED_MODULE_6__["NewMessagesComponent"],
                _messaging_message_home_message_home_component__WEBPACK_IMPORTED_MODULE_7__["MessageHomeComponent"],
                _subscription_subscription_home_subscription_home_component__WEBPACK_IMPORTED_MODULE_16__["SubscriptionHomeComponent"],
                _home_ebeacon_home_ebeacon_home_component__WEBPACK_IMPORTED_MODULE_17__["EbeaconHomeComponent"],
                _home_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SidenavComponent"],
                _mat_snack_bar_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"]
            ],
            providers: [
                _service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_12__["EbeaconServiceService"],
                _mat_snack_bar_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/ebeacon-home/ebeacon-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/ebeacon-home/ebeacon-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <mat-tab-group>\n    <mat-tab label=\"Subscription\">\n      <app-subscription-home></app-subscription-home>\n    </mat-tab>\n    <mat-tab label=\"Message\">\n      <app-message-home></app-message-home>\n    </mat-tab>\n  </mat-tab-group>\n</p>\n"

/***/ }),

/***/ "./src/app/home/ebeacon-home/ebeacon-home.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/ebeacon-home/ebeacon-home.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZWJlYWNvbi1ob21lL2ViZWFjb24taG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/ebeacon-home/ebeacon-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/ebeacon-home/ebeacon-home.component.ts ***!
  \*************************************************************/
/*! exports provided: EbeaconHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbeaconHomeComponent", function() { return EbeaconHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EbeaconHomeComponent = /** @class */ (function () {
    function EbeaconHomeComponent() {
    }
    EbeaconHomeComponent.prototype.ngOnInit = function () {
    };
    EbeaconHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ebeacon-home',
            template: __webpack_require__(/*! ./ebeacon-home.component.html */ "./src/app/home/ebeacon-home/ebeacon-home.component.html"),
            styles: [__webpack_require__(/*! ./ebeacon-home.component.scss */ "./src/app/home/ebeacon-home/ebeacon-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EbeaconHomeComponent);
    return EbeaconHomeComponent;
}());



/***/ }),

/***/ "./src/app/home/sidenav/sidenav.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/sidenav/sidenav.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\r\n  <mat-sidenav #sidenav  mode=\"side\" class=\"example-sidenav\" [ngStyle]=\"{ 'width.em': sidenavWidth }\" opened=\"true\" (mouseenter)=\"increase()\"\r\n    (mouseleave)=\"decrease()\">\r\n    <div class=\"logomain\">Logo Part</div>\r\n    <mat-nav-list>\r\n      <mat-list-item routerLink=\"1\" routerLinkActive=\"active\" >\r\n        <mat-icon mat-list-icon>person</mat-icon>\r\n        <div fxFlex=\"10\"></div>\r\n        <div *ngIf=\"sidenavWidth > 6\" class=\"sidenav-item\">\r\n          <h5 class=\"lead\">About</h5>\r\n        </div>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item routerLink=\"2\" routerLinkActive=\"active\">\r\n        <mat-icon mat-list-icon>settings</mat-icon>\r\n        <div fxFlex=\"10\"></div>\r\n        <div *ngIf=\"sidenavWidth > 6\" class=\"sidenav-item\">\r\n          <h5 class=\"lead\">Services</h5>\r\n        </div>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item routerLink=\"3\" routerLinkActive=\"active\">\r\n        <mat-icon mat-list-icon>local_phone</mat-icon>\r\n        <div fxFlex=\"10\"></div>\r\n        <div *ngIf=\"sidenavWidth > 6\" class=\"sidenav-item\">\r\n          <h5 class=\"lead\">Contact</h5>\r\n        </div>\r\n      </mat-list-item>\r\n\r\n\r\n\r\n    </mat-nav-list>\r\n\r\n  </mat-sidenav>\r\n\r\n  <div class=\"example-sidenav-content\">\r\n    <!-- <router-outlet></router-outlet> -->\r\n    <mat-icon (click)=\"sidenav.toggle()\" class=\"sidenav-menu\">menu</mat-icon>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/home/sidenav/sidenav.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/sidenav/sidenav.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/sidenav/sidenav.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/sidenav/sidenav.component.ts ***!
  \***************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.sidenavWidth = 4;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.increase = function () {
        this.sidenavWidth = 15;
        console.log('increase sidenav width');
    };
    SidenavComponent.prototype.decrease = function () {
        this.sidenavWidth = 4;
        console.log('decrease sidenav width');
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/home/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/home/sidenav/sidenav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mat-snack-bar works!\n</p>\n"

/***/ }),

/***/ "./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdC1zbmFjay1iYXIvbWF0LXNuYWNrLWJhci9tYXQtc25hY2stYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.ts ***!
  \************************************************************************/
/*! exports provided: MatSnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarComponent", function() { return MatSnackBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MatSnackBarComponent = /** @class */ (function () {
    function MatSnackBarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    MatSnackBarComponent.prototype.ngOnInit = function () {
    };
    MatSnackBarComponent.prototype.openSnackBar = function (message, action, className) {
        this.snackBar.open(message, action, {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
            panelClass: [className],
        });
    };
    MatSnackBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-snack-bar',
            template: __webpack_require__(/*! ./mat-snack-bar.component.html */ "./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.html"),
            styles: [__webpack_require__(/*! ./mat-snack-bar.component.scss */ "./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], MatSnackBarComponent);
    return MatSnackBarComponent;
}());



/***/ }),

/***/ "./src/app/messaging/message-home/message-home.component.html":
/*!********************************************************************!*\
  !*** ./src/app/messaging/message-home/message-home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-form-field>\n  <mat-label>Select a Discussion</mat-label>\n  <mat-select [(value)]=\"selected\" [formControl]=\"mySelectControl\">\n    <mat-option value=\"none\"></mat-option>\n    <mat-option value=\"new\">Start a new discussion</mat-option>\n    <mat-option *ngFor=\"let discussion of discussionList\" [value]=\"discussion.id\">\n      {{discussion.name}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n\n<div *ngIf=\"showNewMessage\">\n  <mat-form-field class=\"topic-width\">\n    <textarea matInput placeholder=\"Enter your message\" [(ngModel)]=\"inputMessage.text\"></textarea>\n  </mat-form-field>\n  <button mat-raised-button color=\"primary\" (click)=\"publishMessage()\">Send Message</button>\n</div>\n<div *ngIf=\"showDiscussion\">\n  <div *ngFor=\"let message of messages\">\n      <mat-card color = \"primary\" class =\"example-card\">\n          <mat-card-header>\n            <mat-card-title>{{message.owner}}</mat-card-title>\n            <mat-card-subtitle>{{message.text}}</mat-card-subtitle>\n          </mat-card-header>\n      </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/messaging/message-home/message-home.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/messaging/message-home/message-home.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.example-card {\n  max-width: 300px;\n  margin: 4px; }\n\n.example-header-image {\n  /*background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');*/\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnaW5nL21lc3NhZ2UtaG9tZS9DOlxcVXNlcnNcXHByYXZnYW5kaGlcXERlc2t0b3BcXFRoaXNhblxcRGVsb2l0dGVcXEN1bXVsdXMgQ2hhbGxlbmdlXFxjb2RlXFxlYmVhY29uLXVpL3NyY1xcYXBwXFxtZXNzYWdpbmdcXG1lc3NhZ2UtaG9tZVxcbWVzc2FnZS1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBSWI7RUFDRSxnQkFBZ0I7RUFDaEIsV0FDRixFQUFBOztBQUVBO0VBQ0UsdUZBQUE7RUFDQSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdlLWhvbWUvbWVzc2FnZS1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiA0cHhcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAvKmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpOyovXHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/messaging/message-home/message-home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/messaging/message-home/message-home.component.ts ***!
  \******************************************************************/
/*! exports provided: MessageHomeComponent, Discussion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageHomeComponent", function() { return MessageHomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discussion", function() { return Discussion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/ebeacon-service.service */ "./src/app/service/ebeacon-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_mat_snack_bar_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component */ "./src/app/mat-snack-bar/mat-snack-bar/mat-snack-bar.component.ts");





var MessageHomeComponent = /** @class */ (function () {
    function MessageHomeComponent(eBeaconService, snackBar) {
        var _this = this;
        this.eBeaconService = eBeaconService;
        this.snackBar = snackBar;
        this.inputMessage = { text: "" };
        this.mySelectControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.showDiscussion = false;
        this.showNewMessage = false;
        this.discussionList = [
            { "id": 1, "name": "Discussion 1" },
            { "id": 2, "name": "Discussion 2" },
            { "id": 3, "name": "Discussion 3" }
        ];
        this.getUserDiscussions = function () {
            _this.eBeaconService.getUserDiscussion().subscribe(function (res) {
                alert("The returned message is " + res);
            }, function (err) {
                alert("Something went error " + err);
            });
        };
        this.getMessages = function (discussionId) {
            _this.eBeaconService.getMessages(discussionId).subscribe(function (res) {
                alert("The returned message is " + res);
            }, function (err) {
                if (discussionId == '1') {
                    _this.messages = [{
                            owner: "firstname.lastname",
                            text: "Discussion1 - Message1"
                        },
                        {
                            owner: "Subcriber1",
                            text: "Discussion1 - Response1"
                        }];
                }
                else if (discussionId == '2') {
                    _this.messages = [{
                            owner: "firstname.lastname",
                            text: "Discussion2 - Message1"
                        },
                        {
                            owner: "Subcriber2",
                            text: "Discussion2 - Response1"
                        }];
                }
                else if (discussionId == '3') {
                    _this.messages = [{
                            owner: "firstname.lastname",
                            text: "Discussion3 - Message1"
                        }];
                }
                alert("Something went error " + err);
            });
        };
        this.publishMessage = function () {
            //this.eBeaconService.messages.unshift(this.inputMessage);
            _this.eBeaconService.publishMessage(_this.inputMessage.text, _this.selectedDiscussion).subscribe(function (res) {
                _this.snackBar.openSnackBar("Input saved successfully", 'Close', "green-snackbar");
            }, function (err) {
                _this.snackBar.openSnackBar("Error fetching task details. Please try again later", 'Close', "red-snackbar");
            });
        };
    }
    MessageHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUserDiscussions();
        this.mySelectControl.valueChanges.subscribe(function (value) {
            _this.showHideMessages(value);
        });
    };
    MessageHomeComponent.prototype.showHideMessages = function (value) {
        this.selectedDiscussion = value;
        if (value == "none") {
            this.showNewMessage = false;
            this.showDiscussion = false;
        }
        else if (value == "new") {
            this.showNewMessage = true;
            this.showDiscussion = false;
        }
        else {
            this.showNewMessage = true;
            this.showDiscussion = true;
            this.getMessages(value);
        }
    };
    MessageHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message-home',
            template: __webpack_require__(/*! ./message-home.component.html */ "./src/app/messaging/message-home/message-home.component.html"),
            styles: [__webpack_require__(/*! ./message-home.component.scss */ "./src/app/messaging/message-home/message-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_2__["EbeaconServiceService"], src_app_mat_snack_bar_mat_snack_bar_mat_snack_bar_component__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarComponent"]])
    ], MessageHomeComponent);
    return MessageHomeComponent;
}());

var Discussion = /** @class */ (function () {
    function Discussion() {
    }
    return Discussion;
}());



/***/ }),

/***/ "./src/app/messaging/messages/messages.component.html":
/*!************************************************************!*\
  !*** ./src/app/messaging/messages/messages.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div *ngFor=\"let message of messages\">\n      <mat-card color = \"primary\" class =\"example-card\">\n          <mat-card-header>\n            <mat-card-title>{{message.owner}}</mat-card-title>\n            <mat-card-subtitle>{{message.text}}</mat-card-subtitle>\n          </mat-card-header>\n      </mat-card>\n  </div>\n"

/***/ }),

/***/ "./src/app/messaging/messages/messages.component.scss":
/*!************************************************************!*\
  !*** ./src/app/messaging/messages/messages.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2luZy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/messaging/messages/messages.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/messaging/messages/messages.component.ts ***!
  \**********************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/ebeacon-service.service */ "./src/app/service/ebeacon-service.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(ebeaconService) {
        var _this = this;
        this.ebeaconService = ebeaconService;
        this.getMessages = function (discussionId) {
            alert("Getting messages for " + discussionId);
            _this.ebeaconService.getMessages(discussionId).subscribe(function (res) {
                alert("The returned message is " + res);
            }, function (err) {
                _this.messages = [{
                        owner: "Praveen",
                        text: "This is Praveen's message"
                    },
                    {
                        owner: "Unni",
                        text: "This is Unni's message"
                    },
                    {
                        owner: "Sandiya",
                        text: "This is Sandiya's message"
                    },
                    {
                        owner: "Ram",
                        text: "This is Ram's message"
                    }];
                alert("Something went error " + err);
            });
        };
    }
    Object.defineProperty(MessagesComponent.prototype, "discussionId", {
        //@Input() discussionId: string;
        get: function () {
            return this._discussionId;
        },
        set: function (discussionId) {
            console.log('prev value: ', this._discussionId);
            console.log('got name: ', discussionId);
            this._discussionId = discussionId;
        },
        enumerable: true,
        configurable: true
    });
    MessagesComponent.prototype.ngOnInit = function () {
        this.getMessages(this.discussionId);
    };
    MessagesComponent.prototype.ngOnChanges = function (changes) {
        var discussionId = changes.discussionId;
        console.log('prev value: ', discussionId.previousValue);
        console.log('got name: ', discussionId.currentValue);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], MessagesComponent.prototype, "discussionId", null);
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messaging/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messaging/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_2__["EbeaconServiceService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/messaging/new-messages/new-messages.component.html":
/*!********************************************************************!*\
  !*** ./src/app/messaging/new-messages/new-messages.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"topic-width\">\n  <textarea matInput placeholder=\"Enter your message\" [(ngModel)]=\"inputMessage.text\"></textarea>\n</mat-form-field>\n<button mat-raised-button color=\"primary\" (click)=\"publishMessage()\">Send Message</button>\n"

/***/ }),

/***/ "./src/app/messaging/new-messages/new-messages.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/messaging/new-messages/new-messages.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topic-width {\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnaW5nL25ldy1tZXNzYWdlcy9DOlxcVXNlcnNcXHByYXZnYW5kaGlcXERlc2t0b3BcXFRoaXNhblxcRGVsb2l0dGVcXEN1bXVsdXMgQ2hhbGxlbmdlXFxjb2RlXFxlYmVhY29uLXVpL3NyY1xcYXBwXFxtZXNzYWdpbmdcXG5ldy1tZXNzYWdlc1xcbmV3LW1lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnaW5nL25ldy1tZXNzYWdlcy9uZXctbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9waWMtd2lkdGgge1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/messaging/new-messages/new-messages.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/messaging/new-messages/new-messages.component.ts ***!
  \******************************************************************/
/*! exports provided: NewMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessagesComponent", function() { return NewMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/ebeacon-service.service */ "./src/app/service/ebeacon-service.service.ts");



var NewMessagesComponent = /** @class */ (function () {
    function NewMessagesComponent(eBeaconService) {
        this.eBeaconService = eBeaconService;
        this.inputMessage = { text: "" };
        this.publishMessage = function () {
            //this.eBeaconService.messages.unshift(this.inputMessage);
            /*this.eBeaconService.publishMessage().subscribe(
              res => {
                alert(`The returned message is ${res}`)
              },
              err => {
                alert('something went wrong');
              }
            ); */
        };
    }
    NewMessagesComponent.prototype.ngOnInit = function () {
    };
    NewMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-messages',
            template: __webpack_require__(/*! ./new-messages.component.html */ "./src/app/messaging/new-messages/new-messages.component.html"),
            styles: [__webpack_require__(/*! ./new-messages.component.scss */ "./src/app/messaging/new-messages/new-messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_ebeacon_service_service__WEBPACK_IMPORTED_MODULE_2__["EbeaconServiceService"]])
    ], NewMessagesComponent);
    return NewMessagesComponent;
}());



/***/ }),

/***/ "./src/app/service/ebeacon-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/ebeacon-service.service.ts ***!
  \****************************************************/
/*! exports provided: EbeaconServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbeaconServiceService", function() { return EbeaconServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EbeaconServiceService = /** @class */ (function () {
    function EbeaconServiceService(http) {
        var _this = this;
        this.http = http;
        this.messages = [{
                owner: "Praveen",
                text: "This is Praveen's message"
            },
            {
                owner: "Unni",
                text: "This is Unni's message"
            },
            {
                owner: "Sandiya",
                text: "This is Sandiya's message"
            },
            {
                owner: "Ram",
                text: "This is Ram's message"
            }];
        this.PUBLISH_MESSAGE_URL = "https://us-central1-us-con-gcp-sbx-0000118-022619.cloudfunctions.net/publishMessage";
        this.GET_USER_DISCUSSION_URL = "https://us-central1-us-con-gcp-sbx-0000118-022619.cloudfunctions.net/publishMessage?userId='firstname.lastname'";
        this.GET_MESSAGES_URL = "https://us-central1-us-con-gcp-sbx-0000118-022619.cloudfunctions.net/publishMessage";
        this.publishMessage = function (message, discussionId) {
            return _this.http.post(_this.PUBLISH_MESSAGE_URL, { message: message, options: { discussionId: discussionId } });
        };
        this.loadMessages = function () {
            return _this.messages;
        };
        this.getUserDiscussion = function () {
            return _this.http.get(_this.GET_USER_DISCUSSION_URL);
        };
        this.getMessages = function (discussionId) {
            return _this.http.get(_this.GET_MESSAGES_URL + "?discussionId=" + discussionId);
        };
    }
    EbeaconServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EbeaconServiceService);
    return EbeaconServiceService;
}());



/***/ }),

/***/ "./src/app/subscription/subscription-home/subscription-home.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/subscription/subscription-home/subscription-home.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n  <mat-tab label=\"Existing Subscriptions\">\r\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n      <!-- Tags Column -->\r\n      <ng-container matColumnDef=\"tags\">\r\n        <th mat-header-cell *matHeaderCellDef> Tags </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <div *ngFor=\"let item of element.tags\">\r\n              {{item}}\r\n          </div>\r\n         </td>\r\n      </ng-container>\r\n\r\n      <!-- Topics Column -->\r\n      <ng-container matColumnDef=\"topics\">\r\n        <th mat-header-cell *matHeaderCellDef> Topics </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <div *ngFor=\"let item of element.topics\">\r\n              {{item}}\r\n          </div>\r\n         </td>\r\n      </ng-container>\r\n\r\n      <!-- Interest Column -->\r\n      <ng-container matColumnDef=\"interestLevel\">\r\n        <th mat-header-cell *matHeaderCellDef> Interest Level </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <div *ngFor=\"let item of element.interestLevel\">\r\n              {{item.description}}\r\n          </div>\r\n         </td>\r\n      </ng-container>\r\n\r\n      <!-- Active Column -->\r\n      <ng-container matColumnDef=\"active\">\r\n        <th mat-header-cell *matHeaderCellDef> Active </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <mat-slide-toggle [checked]=\"element.active\" color = \"primary\"></mat-slide-toggle>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </mat-tab>\r\n  <mat-tab label=\"New Subscription\">\r\n    <mat-form-field class=\"topic-width\">\r\n      <textarea matInput placeholder=\"Topic Description\" [(ngModel)]=\"topic\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <div>\r\n    <label id=\"radio-group-label\">Choose your interest level</label>\r\n    <mat-radio-group\r\n      aria-labelledby=\"radio-group-label\"\r\n      class=\"radio-group\"\r\n      [(ngModel)]=\"selectedInterest\">\r\n      <mat-radio-button color = \"primary\" class=\"radio-button\" *ngFor=\"let interest of interestLevel\" [value]=\"interest\">\r\n        {{interest}}\r\n      </mat-radio-button>\r\n    </mat-radio-group>\r\n    </div>\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Communication Channels\">\r\n      <mat-list>\r\n    <mat-list-item *ngFor=\"let channel of channels\">\r\n      <mat-slide-toggle [checked]=\"channel.opted\" color = \"primary\">{{channel.name}}</mat-slide-toggle>\r\n    <!--  <mat-icon matListIcon>{{channel.iconName}}</mat-icon> -->\r\n    </mat-list-item>\r\n  </mat-list>\r\n  </mat-tab>\r\n\r\n\r\n\r\n\r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/subscription/subscription-home/subscription-home.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/subscription/subscription-home/subscription-home.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topic-width {\n  width: 50%; }\n\n.radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0; }\n\n.radio-button {\n  margin: 5px; }\n\ntable {\n  width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi1ob21lL0M6XFxVc2Vyc1xccHJhdmdhbmRoaVxcRGVza3RvcFxcVGhpc2FuXFxEZWxvaXR0ZVxcQ3VtdWx1cyBDaGFsbGVuZ2VcXGNvZGVcXGViZWFjb24tdWkvc3JjXFxhcHBcXHN1YnNjcmlwdGlvblxcc3Vic2NyaXB0aW9uLWhvbWVcXHN1YnNjcmlwdGlvbi1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVSxFQUFBOztBQUdaO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi1ob21lL3N1YnNjcmlwdGlvbi1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGljLXdpZHRoIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ucmFkaW8tZ3JvdXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE1cHggMDtcclxufVxyXG5cclxuLnJhZGlvLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogODAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/subscription/subscription-home/subscription-home.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/subscription/subscription-home/subscription-home.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SubscriptionHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionHomeComponent", function() { return SubscriptionHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ELEMENT_DATA = [
    { tags: ["#java"],
        topics: ["I need a Java developer for my project", "I am looking for a Java project"],
        interestLevel: [{ id: 1, description: "I want to contribute" },
            { id: 2, description: "I want to learn" },
            { id: 3, description: "I want to be informed" }
        ],
        active: true
    },
    { tags: ["#hackathon"],
        topics: ["I would like to conduct a Hackathon"],
        interestLevel: [{ id: 1, description: "I want to contribute" }],
        active: false
    },
    { tags: ["#eBeacon"],
        topics: ["What is ebeacon?"],
        interestLevel: [{ id: 1, description: "I want to learn" }],
        active: true
    }
];
var SubscriptionHomeComponent = /** @class */ (function () {
    function SubscriptionHomeComponent() {
        this.topic = "test topic";
        this.checked = true;
        this.selectedInterest = "I want to contribute";
        this.interestLevel = ['I want to contribute', 'I want to learn', 'I want to be notified'];
        this.displayedColumns = ['tags', 'topics', 'interestLevel', 'active'];
        this.dataSource = ELEMENT_DATA;
        this.channels = [{ name: "Yammer", iconName: "forum", opted: true },
            { name: "SMS", iconName: "chat", opted: true },
            { name: "Email", iconName: "email", opted: false },
            { name: "Microsoft Teams  ", iconName: "forum", opted: false }];
    }
    SubscriptionHomeComponent.prototype.ngOnInit = function () {
    };
    SubscriptionHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subscription-home',
            template: __webpack_require__(/*! ./subscription-home.component.html */ "./src/app/subscription/subscription-home/subscription-home.component.html"),
            styles: [__webpack_require__(/*! ./subscription-home.component.scss */ "./src/app/subscription/subscription-home/subscription-home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubscriptionHomeComponent);
    return SubscriptionHomeComponent;
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

module.exports = __webpack_require__(/*! C:\Users\pravgandhi\Desktop\Thisan\Deloitte\Cumulus Challenge\code\ebeacon-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map