(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/ng2-file-upload/ng2-file-upload.js":
/*!*********************************************************!*\
  !*** ./node_modules/ng2-file-upload/ng2-file-upload.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(/*! ./index */ "./node_modules/ng2-file-upload/index.js"));


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
//# sourceMappingURL=common.js.map