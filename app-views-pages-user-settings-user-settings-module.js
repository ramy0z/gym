(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-user-settings-user-settings-module"],{

/***/ "./src/app/core/auth/_guards/permission.guard.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/auth/_guards/permission.guard.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var permissions_service_1 = __webpack_require__(/*! ../../../core/auth/_services/permissions.service */ "./src/app/core/auth/_services/permissions.service.ts");
var _user_service_1 = __webpack_require__(/*! ../../../core/auth/_services/-user.service */ "./src/app/core/auth/_services/-user.service.ts");
var PermissionGuard = /** @class */ (function () {
    function PermissionGuard(store, router, permission, user) {
        this.store = store;
        this.router = router;
        this.permission = permission;
        this.user = user;
    }
    PermissionGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var moduleName = route.data['title'];
        var permissions = JSON.parse(localStorage.getItem('user'))['allPrivilidge'];
        console.log(moduleName, permissions, this.permission['Roles']);
        if (!this.checked()) {
            this.router.navigateByUrl('/error/403');
        }
        else {
            if (moduleName == 'roles') {
                if (!this.checkedPermission(permissions['Roles']))
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Roles']['Get Roles'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'workouts') {
                if (!permissions['Attendance'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Attendance']['Get Workouts'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'billing') {
                if (!permissions['Billing'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Billing']['Get Billing'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'users') {
                if (!this.checkedPermission(['Users Mangement']))
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Users Mangement']['Get All Users'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'invitations') {
                if (!permissions['Users Mangement'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Users Mangement']['Invitation'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'editUser') {
                this.user.currentUser.subscribe(function (res) {
                    if (!res) {
                        _this.router.navigateByUrl('user-management/users');
                    }
                });
                if (!permissions['Users Mangement'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Users Mangement']['Update User'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'setting') {
                if (!permissions['Users Mangement'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Users Mangement']['Setting'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'addUser') {
                if (!permissions['Users Mangement'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Users Mangement']['Create User'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'clubtree') {
                if (!permissions['Users Mangement'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Users Mangement']['Get All Users'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'activities') {
                if (!permissions['Activities'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Activities']['Get Activities'])
                    this.router.navigateByUrl('/error/403');
            }
            else if (moduleName == 'packages') {
                if (!permissions['Membership'])
                    this.router.navigateByUrl('/error/403');
                if (!permissions['Membership']['Get Membership'])
                    this.router.navigateByUrl('/error/403');
            }
        }
        return true;
    };
    PermissionGuard.prototype.checked = function () {
        var length = 0;
        if (localStorage.getItem('user')) {
            Object.values(JSON.parse(localStorage.getItem('user'))['allPrivilidge']).forEach(function (elem) {
                length += Object.values(elem).length;
                console.log(Object.values(elem).length);
            });
        }
        return length;
    };
    PermissionGuard.prototype.checkedPermission = function (object) {
        var length = 0;
        if (object) {
            Object.values(object).forEach(function (elem) {
                length += Object.values(elem).length;
                console.log(Object.values(elem).length);
            });
        }
        return length;
    };
    PermissionGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [store_1.Store, router_1.Router, permissions_service_1.PermissionsService, _user_service_1.UserService])
    ], PermissionGuard);
    return PermissionGuard;
}());
exports.PermissionGuard = PermissionGuard;


/***/ }),

/***/ "./src/app/views/pages/user-settings/settingModel.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/user-settings/settingModel.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SettingModel = /** @class */ (function () {
    function SettingModel() {
    }
    SettingModel.prototype.clear = function () {
        this.approveAfterSubscribe = false;
        this.subscribeByUser = false;
        this.newSubscriptionNotification = false;
        this.newSubscriptionSendStaff = false;
        this.newSubscriptionSendEmail = false;
        this.newSubscriptionRoles = '';
        this.membershipNotification = false;
        this.membershipSendStaff = false;
        this.membershipSendEmail = false;
        this.membershipRoles = '';
        this.month_startegy = '';
        this.discount_startegy = '';
        this.checkExpirationDays = '';
        this.checkExpirationColum = '';
        this.checkSchedualColum = '';
        this.checkSchedualDays = '';
        this.checkPaymentColum = '';
        this.checkPaymentDays = '';
    };
    return SettingModel;
}());
exports.SettingModel = SettingModel;


/***/ }),

/***/ "./src/app/views/pages/user-settings/user-settings.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/user-settings/user-settings.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<kt-portlet-header [title]=\"getComponentTitle()\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<!-- <a [routerLink]=\"['../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button matTooltip=\"Back to the users list\">\r\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-secondary kt-margin-r-10\" (click)=\"reset()\" [disabled]=\"selectedTab !== 0\" mat-raised-button matTooltip=\"Reset changes\">\r\n\t\t\t\t<i class=\"la la-cog\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Reset</span>\r\n\t\t\t</a> -->\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSumbit(false)\" mat-raised-button matTooltip=\"Save & Continue\">\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\r\n\t\t\t</a>\r\n\t\t\t<button mat-icon-button [matMenuTriggerFor]=\"menu\" color=\"primary\">\r\n\t\t\t\t<mat-icon>more_vert</mat-icon>\r\n\t\t\t</button>\r\n\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t<button mat-menu-item color=\"primary\" (click)=\"onSumbit(true)\">Save & Exit</button>\r\n\t\t\t\t<button mat-menu-item color=\"primary\">Save & Duplicate</button>\r\n\t\t\t\t<button mat-menu-item color=\"primary\" (click)=\"onSumbit(false)\">Save & Continue</button>\r\n\t\t\t</mat-menu>\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\r\n\t<kt-portlet-body>\r\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\r\n\r\n\t\t\t<mat-tab>\r\n\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\r\n\t\t\t\t\tUser Management\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\r\n\t\t\t\t\t<form [formGroup]=\"userForm\" >\r\n\t\t        <div class=\"form-group row\">\r\n              <label class=\"col-lg-3 col-form-label\">\r\n              Approve After Subscribe:</label><div class=\"col-lg-9 col-xl-4\"><span _ngcontent-c48=\"\" class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\r\n\t\t\t\t\t\t\t<input   formControlName=\"approveAfterSubscribe\" type=\"checkbox\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\">\r\n              <!-- <input *ngIf=\"! listData.approveAfterSubscribe\"  formControlName=\"approveAfterSubscribe\" type=\"checkbox\"  value=\"false\" class=\"ng-untouched ng-pristine ng-valid\"> -->\r\n              <span _ngcontent-c48=\"\"></span></label></span></div>\r\n            </div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group row\">\r\n              <label class=\"col-lg-3 col-form-label\">\r\n              subscribe By User:</label><div class=\"col-lg-9 col-xl-4\"><span _ngcontent-c48=\"\" class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n              <input   formControlName=\"subscribeByUser\" type=\"checkbox\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\">\r\n              <!-- <input *ngIf=\"! listData.subscribeByUser\"  formControlName=\"subscribeByUser\" type=\"checkbox\" value=\"false\" class=\"ng-untouched ng-pristine ng-valid\"> -->\r\n              <span _ngcontent-c48=\"\"></span></label></span></div>\r\n            </div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t\tMonth Startegy:</label><div class=\"col-lg-9 col-xl-4\"><span _ngcontent-c48=\"\"  class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-label>Month Startegy</mat-label>\r\n\t\t\t\t\t\t\t  <mat-select formControlName=\"month_startegy\" class=\"btn-group bootstrap-select bs-select\">\r\n\t\t\t\t\t\t\t    <mat-option *ngFor=\"let month of monthstartegy\" [value]=\"month.value\">\r\n\t\t\t\t\t\t\t      {{month.key}}\r\n\t\t\t\t\t\t\t    </mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t\tDiscount Startegy:</label><div class=\"col-lg-9 col-xl-4\"><span _ngcontent-c48=\"\"  class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-label>Discount Startegy</mat-label>\r\n\t\t\t\t\t\t\t  <mat-select formControlName=\"discount_startegy\" class=\"btn-group bootstrap-select bs-select\">\r\n\t\t\t\t\t\t\t    <mat-option *ngFor=\"let discount of discountstartegy\" [value]=\"discount.value\">\r\n\t\t\t\t\t\t\t      {{discount.key}}\r\n\t\t\t\t\t\t\t    </mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab >\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-address-book\"></i>\r\n\t\t\t\t\tMembership Management\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<form [formGroup]=\"userForm\" >\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab >\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fab fa-cc-visa\"></i>\r\n\t\t\t\t\tPayment methods\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<form [formGroup]=\"userForm\" >\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\r\n\t\t\t<mat-tab >\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fab fa-cc-visa\"></i>\r\n\t\t\t\t\tNotifications\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<form [formGroup]=\"userForm\" >\r\n\t\t\t\t\t\t<!-- Start Notification Loop -->\r\n\t\t\t\t\t\t<div *ngFor=\"let notification of NotificationActions\" >\r\n\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<div><label class=\"col-lg-12 col-form-label\">\r\n\t\t\t\t\t\t\t\t{{notification.name}} : </label> </div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div style=\"margin-left:50px;\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\tActivate / Deactivate </label><div class=\"col-lg-9 col-xl-4\"><span _ngcontent-c48=\"\" class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t\t\t<input  formControlName=\"{{notification.key}}\" (click)=\"closeChild(notification.id)\" type=\"checkbox\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\">\r\n\t\t\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"! userForm.value[notification.key]\" style=\"margin-left:50px;\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\" col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\tDeliver With : </label>\r\n\t\t\t\t\t\t\t\t\t\t<label class=\" col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\tEmails : </label><div class=\"col-lg-2 col-xl-3\"><span _ngcontent-c48=\"\" class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<input  formControlName=\"{{notification.is_sendemail}}\" type=\"checkbox\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\">\r\n\t\t\t\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<label  class=\"col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\tNotification : </label><div class=\"col-lg-2 col-xl-3\"><span _ngcontent-c48=\"\" class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t\t\t<input  formControlName=\"{{notification.is_sendstaff}}\"  type=\"checkbox\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\">\r\n\t\t\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div [hidden]=\"! userForm.value[notification.is_sendstaff]\" class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t\t<label class=\" col-lg-2 col-form-label\">\r\n\t\t\t\t\t\t\t\t\t\t\tDelivered to : </label>\r\n\t\t\t\t\t\t\t\t\t\t<div style=\"\" class=\"col-lg-3\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field >\r\n\t\t\t\t\t\t\t\t\t\t\t  <mat-label>Select Staff By Roles</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t\t  <mat-select formControlName=\"{{notification.roles}}\" multiple>\r\n\t\t\t\t\t\t\t\t\t\t\t    <mat-option *ngFor=\"let role of roles\" [value]=\"role._id\">{{role.type}}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- Start Notification Loop -->\r\n\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t\tMembership Expiration : </label><div class=\"col-lg-4 col-xl-4\"><span _ngcontent-c48=\"\"  class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-label>Check Option</mat-label>\r\n\t\t\t\t\t\t\t  <mat-select formControlName=\"checkExpirationColum\" class=\"btn-group bootstrap-select bs-select\">\r\n\t\t\t\t\t\t\t    <mat-option *ngFor=\"let expire of ExpirationArray\" [value]=\"expire.value\">\r\n\t\t\t\t\t\t\t      {{expire.key}}\r\n\t\t\t\t\t\t\t    </mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-xl-4\">\r\n              \t<input   formControlName=\"checkExpirationDays\" type=\"text\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\" placeholder=\"Numbers oF days\">\r\n              </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t\tMembership Haven't Schedual : </label><div class=\"col-lg-4 col-xl-4\"><span _ngcontent-c48=\"\"  class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-label>Check Option</mat-label>\r\n\t\t\t\t\t\t\t  <mat-select formControlName=\"checkSchedualColum\" class=\"btn-group bootstrap-select bs-select\">\r\n\t\t\t\t\t\t\t    <mat-option *ngFor=\"let schedual of SchedualArray\" [value]=\"schedual.value\">\r\n\t\t\t\t\t\t\t      {{schedual.key}}\r\n\t\t\t\t\t\t\t    </mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-xl-4\">\r\n              \t<input   formControlName=\"checkSchedualDays\" type=\"text\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\" placeholder=\"Numbers oF days\">\r\n              </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t<label class=\"col-lg-3 col-form-label\">\r\n\t\t\t\t\t\t\tMembership Haven't  Payment : </label><div class=\"col-lg-4 col-xl-4\"><span _ngcontent-c48=\"\"  class=\"kt-switch kt-switch--icon-check\"><label _ngcontent-c48=\"\">\r\n\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t  <mat-label>Check Option</mat-label>\r\n\t\t\t\t\t\t\t  <mat-select formControlName=\"checkPaymentColum\" class=\"btn-group bootstrap-select bs-select\">\r\n\t\t\t\t\t\t\t    <mat-option *ngFor=\"let payment of PaymentArray\" [value]=\"payment.value\">\r\n\t\t\t\t\t\t\t      {{payment.key}}\r\n\t\t\t\t\t\t\t    </mat-option>\r\n\t\t\t\t\t\t\t  </mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t<span _ngcontent-c48=\"\"></span></label></span></div>\r\n\t\t\t\t\t\t\t<div class=\"col-lg-4 col-xl-4\">\r\n              \t<input   formControlName=\"checkPaymentDays\" type=\"text\" value=\"true\" class=\"ng-untouched ng-pristine ng-valid\" placeholder=\"Numbers oF days\">\r\n              </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\r\n\t\t</mat-tab-group>\r\n\t</kt-portlet-body>\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-settings/user-settings.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/user-settings/user-settings.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var crud_1 = __webpack_require__(/*! ../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_1 = __webpack_require__(/*! ../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var settingModel_1 = __webpack_require__(/*! ./settingModel */ "./src/app/views/pages/user-settings/settingModel.ts");
var UserSettings = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param userFB: FormBuilder
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param store: Store<AppState>
     * @param layoutConfigService: LayoutConfigService
     */
    function UserSettings(activatedRoute, router, userFB, subheaderService, layoutUtilsService, store, layoutConfigService, ser, generalservice) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userFB = userFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.layoutConfigService = layoutConfigService;
        this.ser = ser;
        this.generalservice = generalservice;
        // Public properties
        this.selectedTab = 0;
        this.hasFormErrors = false;
        this.show = false;
        this.subscriptions = [];
        this.monthstartegy = [{ key: '28 Day', value: '28' }, { key: 'All Days', value: 'alldays' }];
        this.discountstartegy = [{ key: 'Present (%)', value: 'present' }, { key: 'money', value: 'money' }];
        this.NotificationActions = [{
                id: 0, name: 'New Subscription Notification', key: 'newSubscriptionNotification', is_sendstaff: 'newSubscriptionSendStaff', is_sendemail: 'newSubscriptionSendEmail', roles: 'newSubscriptionRoles'
            }, {
                id: 1, name: 'Membership Notification', key: 'membershipNotification', is_sendstaff: 'membershipSendStaff', is_sendemail: 'membershipSendEmail', roles: 'membershipRoles'
            }];
        this.ExpirationArray = [{ key: 'End Date', value: 'end_date' }];
        this.SchedualArray = [{ key: 'Start Date', value: 'start_date' }];
        this.PaymentArray = [{ key: 'Start Date', value: 'start_date' }];
    }
    ;
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserSettings.prototype.ngOnInit = function () {
        var _this = this;
        var SettingModelObject = new settingModel_1.SettingModel();
        SettingModelObject.clear();
        console.log(SettingModelObject);
        this.userForm = this.userFB.group(SettingModelObject);
        this.ser.getAllSettings(1, 10000).subscribe(function (res) {
            if (res['result']) {
                Object.keys(res['result']).forEach(function (key) {
                    if (typeof res['result'][key] == 'object')
                        res['result'][key] = [res['result'][key]];
                    SettingModelObject[key] = res['result'][key];
                });
                _this.userForm = _this.userFB.group(SettingModelObject);
            }
        });
        this.ser.getallrole().subscribe(function (res) {
            if (res['result']) {
                _this.roles = res['result'];
            }
        });
    };
    UserSettings.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * Redirect to list
     *
     */
    UserSettings.prototype.goBackWithId = function () {
        var url = this.layoutConfigService.getCurrentMainRoute() + "/user-management/users";
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    UserSettings.prototype.onSumbit = function (bool) {
        if (bool === void 0) { bool = false; }
        this.ser.updateSettings(this.userForm.value).subscribe(function (res) {
            if (res) {
                console.log(res);
            }
        });
        //alert(JSON.stringify(this.userForm.value))
    };
    UserSettings.prototype.closeChild = function (value) {
        var action = this.NotificationActions[value];
        var ischecked = (this.userForm.value[action['key']]);
        if (ischecked) {
            this.userForm.controls[action['is_sendstaff']].setValue(false);
            this.userForm.controls[action['is_sendemail']].setValue(false);
        }
    };
    /**
     * Returns component title
     */
    UserSettings.prototype.getComponentTitle = function () {
        return "Advanced Settings";
    };
    /**
     * Close Alert
     *
     * @param $event: Event
     */
    UserSettings.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    UserSettings = __decorate([
        core_1.Component({
            selector: 'kt-user-settings',
            template: __webpack_require__(/*! ./user-settings.component.html */ "./src/app/views/pages/user-settings/user-settings.component.html"),
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            store_1.Store,
            layout_1.LayoutConfigService,
            _services_1.UserService,
            _services_1.GeneralService])
    ], UserSettings);
    return UserSettings;
}());
exports.UserSettings = UserSettings;


/***/ }),

/***/ "./src/app/views/pages/user-settings/user-settings.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/user-settings/user-settings.module.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var effects_1 = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
// Translate
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
// Services
var crud_1 = __webpack_require__(/*! ../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
// Shared
var crud_2 = __webpack_require__(/*! ../../partials/content/crud */ "./src/app/views/partials/content/crud/index.ts");
// Components
var user_settings_component_1 = __webpack_require__(/*! ./user-settings.component */ "./src/app/views/pages/user-settings/user-settings.component.ts");
//
var permission_guard_1 = __webpack_require__(/*! ../../../core/auth/_guards/permission.guard */ "./src/app/core/auth/_guards/permission.guard.ts");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_1 = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
var routes = [
    {
        path: '',
        component: user_settings_component_1.UserSettings,
        canActivate: [permission_guard_1.PermissionGuard]
    }
];
var UserSettingsModule = /** @class */ (function () {
    function UserSettingsModule() {
    }
    UserSettingsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                partials_module_1.PartialsModule,
                router_1.RouterModule.forChild(routes),
                store_1.StoreModule.forFeature('users', auth_1.usersReducer),
                effects_1.EffectsModule.forFeature([auth_1.UserEffects]),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule.forChild(),
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatSelectModule,
                material_1.MatInputModule,
                material_1.MatTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatRadioModule,
                material_1.MatIconModule,
                material_1.MatNativeDateModule,
                material_1.MatProgressBarModule,
                material_1.MatDatepickerModule,
                material_1.MatCardModule,
                material_1.MatPaginatorModule,
                material_1.MatSortModule,
                material_1.MatCheckboxModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatSnackBarModule,
                material_1.MatExpansionModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule
            ],
            providers: [
                crud_1.InterceptService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: crud_1.InterceptService,
                    multi: true
                },
                {
                    provide: material_1.MAT_DIALOG_DEFAULT_OPTIONS,
                    useValue: {
                        hasBackdrop: true,
                        panelClass: 'kt-mat-dialog-container__wrapper',
                        height: 'auto',
                        width: '900px'
                    }
                },
                crud_1.HttpUtilsService,
                crud_1.TypesUtilsService,
                crud_1.LayoutUtilsService,
                permission_guard_1.PermissionGuard
            ],
            entryComponents: [
                crud_2.ActionNotificationComponent,
            ],
            declarations: [
                user_settings_component_1.UserSettings,
            ]
        })
    ], UserSettingsModule);
    return UserSettingsModule;
}());
exports.UserSettingsModule = UserSettingsModule;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-user-settings-user-settings-module.js.map