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


/***/ })

}]);
//# sourceMappingURL=app-views-pages-user-settings-user-settings-module.js.map