(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-user-management-user-management-module"],{

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

/***/ "./src/app/core/auth/_services/club-tree.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/auth/_services/club-tree.service.ts ***!
  \**********************************************************/
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var _public_methods_1 = __webpack_require__(/*! ../../_public/-public-methods */ "./src/app/core/_public/-public-methods.ts");
var _services_1 = __webpack_require__(/*! ../../auth/_services */ "./src/app/core/auth/_services/index.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var public_service_1 = __webpack_require__(/*! ../../auth/_services/public.service */ "./src/app/core/auth/_services/public.service.ts");
var ClubTreeService = /** @class */ (function () {
    function ClubTreeService(http, user, publicservice) {
        this.http = http;
        this.user = user;
        this.publicservice = publicservice;
        this._url = _public_methods_1.PublicMethods.createURL;
    }
    ClubTreeService.prototype.getUnitsData = function () {
        console.log(this.publicservice);
        return this.http.get(this._url('customers', 'getClubTree', ''));
    };
    //method to get data of a branch 
    ClubTreeService.prototype.getBranchData = function (pub_key) {
        return this.http.get(this._url('customers', 'getBranchData', pub_key));
    };
    //method to get data of a unit
    ClubTreeService.prototype.getUnitData = function (pub_key) {
        return this.http.get(this._url('customers', 'getUnitsData', pub_key));
    };
    //method to get data of a resource
    ClubTreeService.prototype.getResourceData = function (id) {
        return this.http.get(this._url('unitresources', 'getResourceById', id));
    };
    //update
    //edit data of branch
    ClubTreeService.prototype.updateBranchData = function (branch) {
        return this.http.patch(this._url('customers', 'updateBranchData', branch['pub_key']), branch);
    };
    //edit data of unit
    ClubTreeService.prototype.updateUnitData = function (unit) {
        console.log(unit);
        return this.http.patch(this._url('customers', 'updateBranchData', unit['pub_key']), unit);
    };
    // edit data of 
    ClubTreeService.prototype.updateResourceData = function (resource) {
        console.log(resource);
        return this.http.patch(this._url('unitresources', 'updateResource', resource['_id']), resource);
    };
    //delete
    ClubTreeService.prototype.DeleteBranch = function (pub_key) {
        return this.http.delete(this._url('customers', 'deleteBranch', pub_key));
    };
    ClubTreeService.prototype.DeleteUnit = function (pub_key) {
        return this.http.delete(this._url('customers', 'deleteUnits', pub_key));
    };
    ClubTreeService.prototype.DeleteResource = function (id) {
        return this.http.delete(this._url('unitresources', 'deleteResource', id));
    };
    ClubTreeService.prototype.addBranch = function (branch) {
        console.log(branch);
        return this.http.post(this._url('customers', 'addBranch', ''), branch);
    };
    ClubTreeService.prototype.addUnits = function (unit) {
        return this.http.post(this._url('customers', 'addUnits', ''), unit);
    };
    ClubTreeService.prototype.addResources = function (resource) {
        return this.http.post(this._url('unitresources', 'addResource', ''), resource);
    };
    ClubTreeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, _services_1.UserService, public_service_1.publicService])
    ], ClubTreeService);
    return ClubTreeService;
}());
exports.ClubTreeService = ClubTreeService;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-user-management-user-management-module.js.map