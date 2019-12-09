(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-views-pages-members-members-module~app-views-themes-default-theme-module"],{

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

/***/ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng2-search-filter/ng2-search-filter.es5.js ***!
  \*****************************************************************/
/*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function() { return Ng2SearchPipeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function() { return Ng2SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var Ng2SearchPipe = (function () {
    function Ng2SearchPipe() {
    }
    /**
     * @param {?} items object from array
     * @param {?} term term's search
     * @return {?}
     */
    Ng2SearchPipe.prototype.transform = function (items, term) {
        if (!term || !items)
            return items;
        return Ng2SearchPipe.filter(items, term);
    };
    /**
     *
     * @param {?} items List of items to filter
     * @param {?} term  a string term to compare with every property of the list
     *
     * @return {?}
     */
    Ng2SearchPipe.filter = function (items, term) {
        var /** @type {?} */ toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */
        function checkInside(item, term) {
            for (var /** @type {?} */ property in item) {
                if (item[property] === null || item[property] == undefined) {
                    continue;
                }
                if (typeof item[property] === 'object') {
                    if (checkInside(item[property], term)) {
                        return true;
                    }
                }
                if (item[property].toString().toLowerCase().includes(toCompare)) {
                    return true;
                }
            }
            return false;
        }
        return items.filter(function (item) {
            return checkInside(item, term);
        });
    };
    return Ng2SearchPipe;
}());
Ng2SearchPipe.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"], args: [{
                name: 'filter',
                pure: false
            },] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
];
/**
 * @nocollapse
 */
Ng2SearchPipe.ctorParameters = function () { return []; };
var Ng2SearchPipeModule = (function () {
    function Ng2SearchPipeModule() {
    }
    return Ng2SearchPipeModule;
}());
Ng2SearchPipeModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2SearchPipe],
                exports: [Ng2SearchPipe]
            },] },
];
/**
 * @nocollapse
 */
Ng2SearchPipeModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ng2-search-filter.es5.js.map


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


/***/ }),

/***/ "./src/app/core/auth/_services/workOut.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/auth/_services/workOut.service.ts ***!
  \********************************************************/
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
// Environment
var _public_methods_1 = __webpack_require__(/*! ../../_public/-public-methods */ "./src/app/core/_public/-public-methods.ts");
var _url = _public_methods_1.PublicMethods.createURL;
var WorkOutService = /** @class */ (function () {
    function WorkOutService(http) {
        this.http = http;
    }
    WorkOutService.prototype.getWorkOuts = function (club_key) {
        var parent_keys = (JSON.parse(localStorage.getItem('user')))['lastloginaccount'];
        var public_keys = (JSON.parse(localStorage.getItem('user')))['pub_key'];
        var WORKOUT_URL = _url('workouts', 'getclubworkoutGrouped', '', public_keys, parent_keys, 1, 30);
        return this.http.post(WORKOUT_URL, { club_key: club_key });
    };
    WorkOutService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], WorkOutService);
    return WorkOutService;
}());
exports.WorkOutService = WorkOutService;


/***/ }),

/***/ "./src/app/views/pages/members/member-list/member-list.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/members/member-list/member-list.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"col-xl-12\">\r\n  <div class=\"row row-full-height\" *ngIf=\"data\">\r\n    <div *ngFor=\"let item of data\" class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <div class=\"kt-space-20\"></div>\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n        <kt-portlet [class]=\"'kt-portlet--height-fluid-half kt-portlet--border-bottom-brand'\">\r\n          <kt-portlet-body [class]=\"'kt-portlet__body'\">\r\n            <div class=\"kt-widget5\">\r\n              <ng-container *ngFor=\"let item of data\">\r\n                <ng-container [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{item: item}\"></ng-container>\r\n              </ng-container>\r\n            </div>\r\n            <ng-template #itemTemplate let-item=\"item\">\r\n              <div calss='kt-widget5__item'>\r\n                <div class=\"media\">\r\n                  <img class=\"kt-widget5__img mr-3\" [attr.src]=\"item.pic\" alt=\"\">\r\n                  <div class=\"media-body\">\r\n                    <div class='row'>\r\n                      <div class='col-sm-10 col-md-10 col-lg-10'>\r\n                        <a href=\"javascript:;\" [attr.href]=\"item.email\"\r\n                          class=\"kt-header__topbar-username kt-hidden-mobile\"><span\r\n                            class='h5'>{{item.username}}</span><span class=\"kt-timeline-v2__item-cricle\">\r\n                            <i class=\"flaticon2-correct kt-font-success\"></i>\r\n                          </span></a>\r\n                        <div class='kt-space-10'></div>\r\n                        <p class=\"kt-widget5__desc\"><a href=\"javascript:;\" class=\"btn btn-clean btn-icon btn-sm\">\r\n                            <i class=\"flaticon2-new-email\"></i>\r\n                          </a>{{item.email}}</p>\r\n                        <div [innerHTML]=\"item.info\"></div>\r\n                        <div class='kt-space-20'></div>\r\n                        <div class=\"kt-widget5__item w-4\">\r\n                          <span class='mr-3'>progress </span>\r\n                          <mat-progress-bar mode=\"determinate\" color='warn' value=\"10\"></mat-progress-bar><span\r\n                            class='ml-3'>\r\n                            10%</span>\r\n                        </div>\r\n                      </div>\r\n                      <div class='col-sm-1 col-md-1 col-lg-1'>\r\n                        <button mat-icon-button [routerLink]=\"['member-profile/about-member']\"\r\n                          (click)='routeToprofile(item)'>\r\n                          <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                            settings\r\n                          </mat-icon>\r\n                        </button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <mat-list>\r\n                  <mat-divider></mat-divider>\r\n                </mat-list>\r\n                <div class='kt-space-20'></div>\r\n                <div class=\"row row-full-height\">\r\n                  <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"icon col-sm-3 col-md-3 col-lg-3\">\r\n                        <i class=\"flaticon-piggy-bank\"></i>\r\n                      </div>\r\n                      <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                        Payment\r\n                        <div><span class='h5'>$</span>{{item.payment}}</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"icon col-sm-3 col-md-3 col-lg-3\">\r\n                        <i class=\"flaticon-confetti\"></i>\r\n                      </div>\r\n                      <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                        Membership\r\n                        <div><span class='h5'>$</span><span>{{item.memberships_number}}</span></div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"icon col-sm-3 col-md-3 col-lg-3\">\r\n                        <i class=\"flaticon-pie-chart\"></i>\r\n                      </div>\r\n                      <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                        Earnings\r\n                        <div><span>$</span>249,500</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                    <div class=\"row\">\r\n                      <div class=\"icon col-sm-3 col-md-3 col-lg-3\">\r\n                        <i class=\"flaticon-piggy-bank\"></i>\r\n                      </div>\r\n                      <div class=\"col-sm-3 col-md-3 col-lg-3\">\r\n                        Earnings\r\n                        <div><span>$</span>249,500</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </kt-portlet-body>\r\n        </kt-portlet>\r\n      </div>\r\n      <div class=\"kt-space-20\"></div>\r\n    </div>\r\n    <div *ngIf=\"data.length\" class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [pageSize]=\"5\">\r\n      </mat-paginator>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid\">\r\n  <kt-portlet>\r\n    <kt-portlet-header class=\"d-flex justify-content-start\">\r\n      <ng-container ktPortletTools>\r\n        <!-- start::FILTERS -->\r\n        <div class=\"kt-form__filtration\">\r\n          <div class=\"row align-items-center\">\r\n\r\n            <div class=\"col-md-3 kt-margin-bottom-10-mobile\">\r\n              <mat-form-field class=\"mat-form-field-fluid\">\r\n                <input matInput placeholder=\"Search user\" [(ngModel)]=\"SearchKey\" placeholder=\"Search\"\r\n                  (keyup)=\"applyFilter()\">\r\n                <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\"\r\n                  (click)=\"onSearchClear()\">\r\n                  <mat-icon>close</mat-icon>\r\n                </button>\r\n                <mat-hint align=\"start\">\r\n                  <strong>Search</strong> in all fields\r\n                </mat-hint>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n              <!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <mat-select [(value)]=\"filterStatus\" (selectionChange)=\"applyFilter()\">\r\n                    <mat-option value=\"\">All</mat-option>\r\n                    <mat-option value=\"Active\">Active</mat-option>\r\n                    <mat-option value=\"Deactive\">Deactive</mat-option>\r\n                  </mat-select>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Filter</strong> by Status\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <mat-select [(value)]=\"filterType\" (selectionChange)=\"applyFilter()\">\r\n                    <mat-option value=\"\">All</mat-option>\r\n                    <mat-option *ngFor=\"let value of getalltypes\"  [value]=\"value.value\">\r\n                      {{value.key}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Filter</strong> by membership\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <mat-select [(value)]=\"filterGender\" (selectionChange)=\"applyFilter()\">\r\n                    <mat-option value=\"\">All</mat-option>\r\n                    <mat-option value=\"male\">Male</mat-option>\r\n                    <mat-option value=\"female\">Female</mat-option>\r\n                  </mat-select>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Filter</strong> by Gender\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <mat-select [(value)]=\"filterPayment\" (selectionChange)=\"applyFilter()\">\r\n                    <mat-option value=\"\">All</mat-option>\r\n                    <mat-option *ngFor=\"let value of getallpayment\"  [value]=\"value.value\">\r\n                      {{value.key}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Filter</strong> by Payment\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <mat-select [(value)]=\"orderby\" (selectionChange)=\"applyFilter()\">\r\n                    <mat-option *ngFor=\"let value of oderitems\"  [value]=\"value.value\">\r\n                      {{value.key}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Order By</strong>\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-label>Select an option</mat-label>\r\n                  <mat-select [(value)]=\"order\" (selectionChange)=\"applyFilter()\">\r\n                    <mat-option value=\"-1\" >Descending</mat-option>\r\n                    <mat-option value=\"1\">Ascending</mat-option>\r\n                  </mat-select>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Order Type</strong>\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- end::FILTERS -->\r\n      </ng-container>\r\n    </kt-portlet-header>\r\n  </kt-portlet>\r\n\r\n  <!--begin:: Widgets/Applications/User/Profile3-->\r\n  <div class=\"d-flex justify-content-center  example-section\" *ngIf=\"!data\">\r\n    <mat-spinner [color]=\"color\" [diameter]=\"diameter\" [mode]=\"mode\" [value]=\"value\" *ngIf=\"!data\"></mat-spinner>\r\n  </div>\r\n  <div *ngIf=\"data\">\r\n    <div *ngFor=\"let item of data\" class=\"kt-portlet\">\r\n      <div class=\"kt-portlet__body\">\r\n        <div class=\"kt-widget kt-widget--user-profile-3\">\r\n          <div class=\"kt-widget__top\">\r\n            <div class=\"kt-widget__media kt-hidden-\">\r\n              <a [routerLink]=\"['profile',item.pub_key,'about']\">\r\n                <img *ngIf=\"!item.image_profile\" style=\"min-height: 150px;\"  src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image\" />\r\n\r\n\r\n                <img *ngIf=\"item.image_profile\"  style=\"min-height: 150px;\" src=\"{{item.image_profile}}\" />\r\n              </a>\r\n            </div>\r\n            <div class=\"kt-widget__pic kt-widget__pic--danger kt-font-danger kt-font-boldest kt-font-light kt-hidden\">\r\n              JM\r\n            </div>\r\n            <div class=\"kt-widget__content\">\r\n              <div class=\"kt-widget__head\">\r\n                <a [routerLink]=\"['profile',item.pub_key,'about']\" class=\"kt-widget__username\">\r\n                  {{item.name}}\r\n                  <i class=\"flaticon2-correct kt-font-success\"></i>\r\n                </a>\r\n\r\n                <div class=\"kt-widget__action\">\r\n                  &nbsp; &nbsp; &nbsp;\r\n                  <button mat-icon-button [routerLink]=\"['profile',item.pub_key,'about']\" (click)='routeToprofile(item)'>\r\n                    <mat-icon class=\"mat-icon-rtl-mirror\">\r\n                      settings\r\n                    </mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"kt-widget__subhead\">\r\n                <a><i class=\"flaticon2-new-email\"></i>{{item.email}}</a>\r\n              </div>\r\n\r\n              <div class=\"kt-widget__info\">\r\n                <div class=\"kt-widget__desc\">\r\n                  I distinguish three main text objektive could be merely to inform people.<br>\r\n                  A second could be persuade people.You want people to bay objective\r\n                </div>\r\n                <div class=\"kt-widget__progress\">\r\n                  <span class=\"text-muted ml-2 mr-2 \">Payment Status :\r\n                  </span>\r\n                  <span  matTooltip=\"all payments is complete\" matTooltipShowDelay=\"1000\" *ngIf=\"item.payment_status.number==0\" class=\"btn btn-bold btn-sm btn-font-sm  btn-label-success\">complete</span>\r\n                 <a  [matTooltip]=\"item.payment_status.number\" matTooltipShowDelay=\"1000\" *ngIf=\"item.payment_status.number==1\"   [routerLink]=\"['/default/members/add',item.pub_key,'payment-cart',item.payment_status.membership_id]\" routerLinkActive=\"router-link-active\" > <span class=\"btn btn-bold btn-sm btn-font-sm  btn-label-warning\">pending</span>\t</a>\r\n                 <a  [matTooltip]=\"item.payment_status.number\" matTooltipShowDelay=\"1000\" [routerLink]=\"['profile',item.pub_key,'payment']\"   [queryParams]=\"{ status: 'pending' }\" routerLinkActive=\"router-link-active\"  *ngIf=\"item.payment_status.number>1\"> <span class=\"btn btn-bold btn-sm btn-font-sm  btn-label-warning\">pending</span>\t</a>\r\n                  <span class=\"text-muted ml-2 mr-2\">Schedule Status :\r\n                  </span>\r\n                  <span matTooltip=\"all schedules is complete\" matTooltipShowDelay=\"1000\" *ngIf=\"item.schedual_status.number==0\" class=\"btn btn-bold btn-sm btn-font-sm  btn-label-success\">complete</span>\r\n                  <a [matTooltip]=\"item.schedual_status.number\" matTooltipShowDelay=\"1000\" *ngIf=\"item.schedual_status.number==1\"  [routerLink]=\"['/default/members/add',item.pub_key,'schedule',item.schedual_status.membership_id.membership_id]\" [queryParams]=\"{ se_id: item.schedual_status.membership_id.se_id,iu: item.schedual_status.membership_id.units_key,date: item.schedual_status.membership_id.date }\"  routerLinkActive=\"router-link-active\"> <span class=\"btn btn-bold btn-sm btn-font-sm  btn-label-warning\">pending</span>\t</a>\r\n                  <a [matTooltip]=\"item.schedual_status.number\" matTooltipShowDelay=\"1000\" [routerLink]=\"['profile',item.pub_key,'memership','list']\"  [queryParams]=\"{ status: 'pending' }\"  *ngIf=\"item.schedual_status.number>1\"> <span class=\"btn btn-bold btn-sm btn-font-sm  btn-label-warning\">pending</span>\t</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"kt-widget__bottom\">\r\n            <a [routerLink]=\"['profile',item.pub_key,'payment']\" >\r\n              <div class=\"kt-widget__item\">\r\n                <div class=\"kt-widget__icon\">\r\n                  <i class=\"flaticon-piggy-bank\"></i>\r\n                </div>\r\n\r\n                <div class=\"kt-widget__details\">\r\n                  <span class=\"kt-widget__title\">Payment</span>\r\n                  <span class=\"kt-widget__value\">{{item.payment}}</span>\r\n                </div>\r\n              </div>\r\n            </a>\r\n            <a [routerLink]=\"['profile',item.pub_key,'memership','list']\" >\r\n              <div class=\"kt-widget__item\">\r\n                <div class=\"kt-widget__icon\">\r\n                  <i class=\"flaticon-confetti\"></i>\r\n                </div>\r\n                <div class=\"kt-widget__details\">\r\n                  <span class=\"kt-widget__title\">Memberships</span>\r\n                  <span class=\"kt-widget__value\">{{item.memberships_number}}</span>\r\n                </div>\r\n              </div>\r\n            </a>\r\n            <a [routerLink]=\"['profile',item.pub_key,'reschedule']\" [queryParams]=\"{ status: 'pe' }\" >\r\n            <div class=\"kt-widget__item\">\r\n              <div class=\"kt-widget__icon\">\r\n                <i class=\"flaticon-file-2\"></i>\r\n              </div>\r\n              <div class=\"kt-widget__details\">\r\n                <span class=\"kt-widget__title\">Pending Attendance</span>\r\n                <span class=\"kt-widget__value\">{{item.pendingAttendance}}</span>\r\n              </div>\r\n            </div>\r\n</a> \r\n<a [routerLink]=\"['profile',item.pub_key,'reschedule']\" [queryParams]=\"{ status: 'co' }\">\r\n            <div class=\"kt-widget__item\">\r\n              <div class=\"kt-widget__icon\">\r\n                <i class=\"flaticon-file-2\"></i>\r\n              </div>\r\n              <div class=\"kt-widget__details\">\r\n                <span class=\"kt-widget__title\">Compelete Attendance</span>\r\n                <span class=\"kt-widget__value\">{{item.completeAttendance}}</span>\r\n              </div>\r\n            </div>\r\n</a>\r\n\r\n          </div> \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--end:: Widgets/Applications/User/Profile3-->\r\n\r\n    <!--Begin::Section-->\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-12\">\r\n        <!--begin:: Components/Pagination/Default-->\r\n        <div class=\"kt-portlet\">\r\n          <div class=\"kt-portlet__footer d-flex justify-content-end\">\r\n            <!--begin: Pagination-->\r\n            <ng-container>\r\n              <mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [length]=\"1000\" [pageSize]=\"10\">\r\n              </mat-paginator>\r\n            </ng-container>\r\n            <!--end: Pagination-->\r\n          </div>\r\n        </div>\r\n        <!--end:: Components/Pagination/Default-->\r\n      </div>\r\n    </div>\r\n    <!--End::Section-->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-list/member-list.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/members/member-list/member-list.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  font-size: 30px; }\n\nimg {\n  left: 50%;\n  border-radius: 10%; }\n\n.example-section {\n  vertical-align: middle;\n  top: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItbGlzdC9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG1lbWJlcnNcXG1lbWJlci1saXN0XFxtZW1iZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDRyxTQUFRO0VBQ1Isa0JBQ0gsRUFBQTs7QUFDQTtFQUNJLHNCQUFxQjtFQUNyQixRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tZW1iZXJzL21lbWJlci1saXN0L21lbWJlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmltZ3tcclxuICAgbGVmdDo1MCU7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDEwJVxyXG59XHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-list/member-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/members/member-list/member-list.component.ts ***!
  \**************************************************************************/
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
var members_service_1 = __webpack_require__(/*! ../members.service */ "./src/app/views/pages/members/members.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var MemberListComponent = /** @class */ (function () {
    function MemberListComponent(memberservice, router, changeDetectRef) {
        this.memberservice = memberservice;
        this.router = router;
        this.changeDetectRef = changeDetectRef;
        this.SearchKey = '';
        this.filterStatus = '';
        this.filterType = '';
        this.filterGender = '';
        this.filterPayment = '';
        this.orderby = '';
        this.order = 1;
        this.mode = 'indeterminate';
        this.value = 50;
        this.diameter = 50;
        this.color = 'primary';
        this.displayProgressSpinnerInBlock = true;
        this.getalltypes = [{ key: 'Private', value: 'private' }, { key: 'General', value: 'general' }, { key: 'Activities', value: 'activities' }];
        this.getallpayment = [{ key: 'Made', value: 'complete' }, { key: 'Didn\'t make', value: 'false' }, { key: 'Pending', value: 'pending' }];
        this.oderitems = [{ key: 'Latest', value: 'id' }, { key: 'Name', value: 'name' }, { key: 'Email', value: 'email' }, { key: 'Gender', value: 'gender' }, { key: 'Type', value: 'type' }, { key: 'Status', value: 'status' }];
        this.search = 'search...';
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    MemberListComponent.prototype.ngOnInit = function () {
        this.getMember();
        this.memberservice.changeSelectedMembership(null);
        this.memberservice.changeSubmittedMembership(false);
        this.memberservice.changemembership(null);
        // this.memberservice.changeuser(null)
    };
    MemberListComponent.prototype.onSearchClear = function () {
        this.SearchKey = "";
        this.applyFilter();
    };
    /*
    *
    *
    */
    //method to  search online
    MemberListComponent.prototype.applyFilter = function (orderby) {
        if (orderby === void 0) { orderby = ''; }
        if (this.SearchKey && this.SearchKey.length > 0)
            var search = this.SearchKey.trim().toLowerCase();
        else
            var search = '';
        if (this.filterStatus && this.filterStatus.length > 0)
            var status = this.filterStatus;
        else
            status = '';
        if (this.filterType && this.filterType.length > 0)
            var type = this.filterType;
        else
            type = '';
        if (this.filterGender && this.filterGender.length > 0)
            var gender = this.filterGender;
        else
            gender = '';
        if (this.filterPayment && this.filterPayment.length > 0)
            var payment = this.filterPayment;
        else
            payment = '';
        this.getMember(null, null, search, status, type, gender, payment, this.orderby, this.order);
    };
    MemberListComponent.prototype.getMember = function (pages, prepage, search, status, type, gender, payment, orderby, order) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (prepage === void 0) { prepage = 10; }
        if (search === void 0) { search = null; }
        if (status === void 0) { status = ''; }
        if (type === void 0) { type = ''; }
        if (gender === void 0) { gender = ''; }
        if (payment === void 0) { payment = ''; }
        if (orderby === void 0) { orderby = ''; }
        if (order === void 0) { order = -1; }
        this.memberservice.getAllMembers(pages, prepage, search, status, type, gender, payment, orderby, order).subscribe(function (res) {
            if (res['result']) {
                _this.data = res['users'];
                _this.changeDetectRef.detectChanges();
            }
            else
                _this.data = [];
        });
    };
    MemberListComponent.prototype.nextPage = function (event) {
        console.log(event);
        this.getMember(event.pageIndex + 1, event.pageSize, null);
    };
    // routeToprofile(member) {
    //   this.memberservice.changeuser(member)
    // }
    MemberListComponent.prototype.searchWord = function () {
        var _this = this;
        console.log(this.search);
        this.memberservice.getAllMembers(null, null, this.search).subscribe(function (res) {
            if (res['result'])
                _this.data = res['users'];
            console.log(_this.data);
            _this.changeDetectRef.detectChanges();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MemberListComponent.prototype, "data", void 0);
    MemberListComponent = __decorate([
        core_1.Component({
            selector: 'kt-member-list',
            template: __webpack_require__(/*! ./member-list.component.html */ "./src/app/views/pages/members/member-list/member-list.component.html"),
            styles: [__webpack_require__(/*! ./member-list.component.scss */ "./src/app/views/pages/members/member-list/member-list.component.scss")]
        }),
        __metadata("design:paramtypes", [members_service_1.MembersService,
            router_1.Router,
            core_1.ChangeDetectorRef])
    ], MemberListComponent);
    return MemberListComponent;
}());
exports.MemberListComponent = MemberListComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/about-member/about-member.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/about-member/about-member.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xl-12\">\r\n        <div class=\"kt-portlet\">\r\n            <div class=\"kt-portlet__head\">\r\n                <div class=\"kt-portlet__head-label\">\r\n                    <h3 class=\"kt-portlet__head-title\">Personal Information </h3>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"basicInfoForm&&member\">\r\n            <form [formGroup]=\"basicInfoForm\" class=\"kt-form kt-form--label-right\">\r\n                <div class=\"kt-portlet__body\">\r\n                    <div class=\"kt-section kt-section--first\">\r\n                        <div class=\"kt-section__body\">\r\n                            <div class=\"row\">\r\n                                    <kt-alert *ngIf=\"error\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n                                            Oh snap! Change a few things up and try submitting again.\r\n                                    </kt-alert>\r\n                                <label class=\"col-xl-3\"></label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <h3 class=\"kt-section__title kt-section__title-sm\">Basic Information:</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Avatar</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"kt-avatar kt-avatar--outline kt-avatar--circle\"\r\n                                        id=\"kt_apps_user_add_avatar\">\r\n\r\n\r\n                                        <img *ngIf=\"imageprivew=='' || imageprivew==undefined\" class=\"kt-avatar__holder\"\r\n                                            src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image\" />\r\n\r\n\r\n                                        <img *ngIf=\"imageprivew !='' && imageprivew!=undefined\" class=\"kt-avatar__holder\"\r\n                                            src=\"{{imageprivew}}\" />\r\n\r\n\r\n<!-- \r\n                                        <label class=\"kt-avatar__upload\" data-toggle=\"kt-tooltip\" title=\"\"\r\n                                            data-original-title=\"Change avatar\">\r\n                                            <i class=\"fa fa-pen\"></i>\r\n                                            <input type=\"file\" name=\"photo\" (change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" accept=\".png, .jpg, .jpeg\" />\r\n\r\n                                        </label> -->\r\n<!-- \r\n                                      <button type=\"button\" *ngIf=\"imageprivew != '' && !confirm&&uploader.getNotUploadedItems().length\" class=\"btn btn-success btn-s\"\r\n                                      (click)=\"uploader.uploadAll()\"\r\n                                      [disabled]=\"!uploader.getNotUploadedItems().length\" >\r\n                                          Confirm\r\n                                    </button> -->\r\n\r\n                                        <span class=\"kt-avatar__cancel\" data-toggle=\"kt-tooltip\" title=\"\"\r\n                                            data-original-title=\"Cancel avatar\">\r\n                                            <i class=\"fa fa-times\"></i>\r\n                                        </span> \r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Full Name</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"name\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && valid.name.errors }\">\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Username </label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <input class=\"form-control\" type=\"text\" formControlName=\"username\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && valid.username.errors }\">\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-xl-3 col-lg-3 col-form-label\">Date Of Birth</label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <input  class=\"form-control\" placeholder=\"yyyy-mm-dd\"                                       \r\n                                        name=\"d22\"  formControlName=\"BD\" \r\n                                        (keydown)=\"$event.preventDefault()\"    ngbDatepicker  #d22=\"ngbDatepicker\">\r\n                                        <div class=\"input-group-append\">\r\n                                          <button class=\"btn btn-primary\" (click)=\"d22.toggle()\" type=\"button\">\r\n                                            <i class=\"la la-calendar\"></i>\r\n                                          </button>\r\n                                        </div>\r\n                                      </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-xl-3 col-lg-3 col-form-label\">Gender</label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                <select class=\"form-control\" formControlName=\"gender\" name=\"gender\">\r\n                                  <option value=\"Male\">Male</option>\r\n                                  <option value=\"Female\">Female</option>\r\n                                </select>\r\n                                <!-- <input class=\"form-control\" type=\"text\" formControlName=\"gender\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && valid.addressLine.errors }\"> -->\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-xl-3 col-lg-3 col-form-label\">Tag Number</label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                <input class=\"form-control\" type=\"text\" formControlName=\"tagNumber\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && valid.addressLine.errors }\">\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-xl-3 col-lg-3 col-form-label\">Address</label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                <input class=\"form-control\" type=\"text\" formControlName=\"addressLine\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && valid.addressLine.errors }\">\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-xl-3 col-lg-3 col-form-label\">City</label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                <input class=\"form-control\" type=\"text\" formControlName=\"city\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && valid.addressLine.errors }\">\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-xl-3 col-lg-3 col-form-label\">Zip Code</label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                <input class=\"form-control\" type=\"text\" formControlName=\"zipCode\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && valid.addressLine.errors }\">\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <label class=\"col-xl-3\"></label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                <h3 class=\"kt-section__title kt-section__title-sm\">Contact Information:</h3>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"col-xl-3 col-lg-3 col-form-label\">Contact Phone</label>\r\n                            <div class=\"col-lg-9 col-xl-6\">\r\n                                <div class=\"input-group\">\r\n                                    <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i\r\n                                                class=\"la la-phone\"></i></span></div>\r\n                                    <input type=\"tel\" formControlName=\"phone\" class=\"form-control\"\r\n                                        [ngClass]=\"{ 'is-invalid': submitted && valid.phone.errors }\"\r\n                                        placeholder=\"Phone\" aria-describedby=\"basic-addon1\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Instagram</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i\r\n                                                    class=\"la la-instagram\"></i></span></div>\r\n                                        <input type=\"text\" formControlName=\"instagram\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && valid.instagram.errors }\"\r\n                                            aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Twitter</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i\r\n                                                    class=\"la la-twitter\"></i></span></div>\r\n                                        <input type=\"text\" formControlName=\"twitter\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && valid.twitter.errors }\"\r\n                                            placeholder=\"Twitter\" aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">LinkedIn</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i\r\n                                                    class=\"la la-linkedin\"></i></span></div>\r\n                                        <input type=\"text\" formControlName=\"linkedIn\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && valid.linkedIn.errors }\"\r\n                                            placeholder=\"Linkedin\" aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Email Address</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i\r\n                                                    class=\"la la-at\"></i></span></div>\r\n                                        <input type=\"text\"  formControlName=\"email\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && valid.email.errors }\"\r\n                                            placeholder=\"Email\" aria-describedby=\"basic-addon1\">\r\n                                        <div *ngIf=\"submitted && valid.email.errors\" class=\"invalid-feedback\">\r\n                                            <span class=\"invalid-feedback\" class=\"form-text text-muted\"\r\n                                                *ngIf=\"valid.email.errors.email\">\r\n                                                Email is required\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <label class=\"col-xl-3\"></label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <h3 class=\"kt-section__title kt-section__title-sm\">Medical Information:</h3>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"basicInfoForm\"  formGroupName=\"emergancyContact\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Emergancy contact name</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n                                      \r\n                                        <input type=\"text\" formControlName=\"name\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && valid.emergancyContact.errors }\"\r\n                                            aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Relationship</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n\r\n                                        <input type=\"text\" formControlName=\"relationship\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && valid.emergancyContact.errors }\"\r\n                                            aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Email</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n                                        <div class=\"input-group-prepend\"><span class=\"input-group-text\"><i\r\n                                                    class=\"la la-at\"></i></span></div>\r\n                                        <input type=\"text\"  formControlName=\"email\" class=\"form-control\"  placeholder=\"email\"\r\n                                            aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-xl-3 col-lg-3 col-form-label\">Medical Cases</label>\r\n                                <div class=\"col-lg-9 col-xl-6\">\r\n                                    <div class=\"input-group\">\r\n\r\n                                        <input type=\"text\" formControlName=\"medicalCases\" class=\"form-control\"\r\n                                            [ngClass]=\"{ 'is-invalid': submitted && valid.emergancyContact.errors }\"\r\n                                            aria-describedby=\"basic-addon1\">\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n                </div>\r\n                <div class=\"kt-portlet__foot\">\r\n                    <div class=\"kt-form__actions\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-3 col-xl-3\">\r\n                            </div>\r\n                            <div class=\"col-lg-9 col-xl-9\">\r\n                                <button  class=\"btn btn-success\" (click)='onSubmit()'>submit</button>&nbsp;\r\n                                <button type=\"reset\" class=\"btn btn-secondary\">Cancel</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/about-member/about-member.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/about-member/about-member.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warn-snackbar {\n  background-color: #ff4081; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9hYm91dC1tZW1iZXIvRTpcXEdFTUlOXFxneW1pbi0yLjAtc2Fhcy1mcm9udGVuZC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxtZW1iZXJzXFxtZW1iZXItcHJvZmlsZVxcYWJvdXQtbWVtYmVyXFxhYm91dC1tZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvYWJvdXQtbWVtYmVyL2Fib3V0LW1lbWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53YXJuLXNuYWNrYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/about-member/about-member.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/about-member/about-member.component.ts ***!
  \*******************************************************************************************/
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
//service
var members_service_1 = __webpack_require__(/*! ../../members.service */ "./src/app/views/pages/members/members.service.ts");
var _user_service_1 = __webpack_require__(/*! ../../../../../core/auth/_services/-user.service */ "./src/app/core/auth/_services/-user.service.ts");
//formgroup
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
//
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
//
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AboutMemberComponent = /** @class */ (function () {
    function AboutMemberComponent(memberservice, formBuilder, userservice, changDetectRef, layoutUtilsService, route, snackBar, ser, router) {
        this.memberservice = memberservice;
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.changDetectRef = changDetectRef;
        this.layoutUtilsService = layoutUtilsService;
        this.route = route;
        this.snackBar = snackBar;
        this.ser = ser;
        this.router = router;
        //** */
        this.member = {};
        this.submitted = false;
        this.error = false;
        this.confirm = false;
        this.image = null;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.ser.upload_file(), itemAlias: 'upload' });
    }
    AboutMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageprivew = '';
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var responsePath = JSON.parse(response);
            if (responsePath.result)
                _this.image = responsePath.image;
            _this.confirm = true;
            _this.changDetectRef.detectChanges();
        };
        var id = this.router.parent.snapshot.paramMap.get('id');
        if (this.checkedpermission('getallusers')) {
            this.memberservice.getMemberById(id).subscribe(function (res) {
                if (res['result']) {
                    console.log(res['users'][0]);
                    _this.member = res['users'][0];
                    _this.validData(_this.member);
                    _this.imageprivew = _this.member['image_profile'];
                    _this.changDetectRef.detectChanges();
                }
            });
        }
    };
    AboutMemberComponent.prototype.validData = function (member) {
        var reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
        if (!member.emergancyContact)
            member.emergancyContact = {};
        // this.model=member.dateOfBirth
        this.basicInfoForm = this.formBuilder.group({
            name: [member.name, forms_1.Validators.required],
            username: [member.username, forms_1.Validators.required],
            email: [member.email, [forms_1.Validators.required, forms_1.Validators.email]],
            addressLine: [member.addressLine, forms_1.Validators.required],
            instagram: [member.instagram, forms_1.Validators.pattern(reg)],
            twitter: [member.twitter, forms_1.Validators.pattern(reg)],
            phone: [member.phone, forms_1.Validators.maxLength(10)],
            emergancyContact: this.formBuilder.group({
                name: [member.emergancyContact.name],
                relationship: [member.emergancyContact.relationship],
                email: [member.emergancyContact.email, { validators: forms_1.Validators.email, updateOn: 'blur' }],
                medicalCases: [member.emergancyContact.medicalCases]
            }),
            linkedIn: [member.linkedIn, forms_1.Validators.pattern(reg)],
            BD: [member.birthday],
            gender: [member.gender],
            tagNumber: [member.tagNumber],
            address: [member.addressLine],
            city: [member.city],
            zipCode: [member.zipCode],
        });
    };
    Object.defineProperty(AboutMemberComponent.prototype, "valid", {
        get: function () { if (this.basicInfoForm)
            return this.basicInfoForm.controls; },
        enumerable: true,
        configurable: true
    });
    AboutMemberComponent.prototype.onSubmit = function () {
        var _this = this;
        var controls = this.basicInfoForm.controls;
        console.log(controls['BD'].value);
        /** check form */
        if (this.basicInfoForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                controls[controlName].markAsTouched();
            });
            window.scroll(0, 0);
            this.error = true;
            return;
        }
        if (this.checkedpermission('updateuserdata')) {
            this.userservice.updateUserData({ 'addressLine': controls['addressLine'].value,
                'email': controls['email'].value, 'name': controls['name'].value,
                'username': controls['username'].value, 'twitter': controls['twitter'].value,
                'instagram': controls['instagram'].value, 'gender': controls['gender'].value,
                'phone': controls['phone'].value, 'birthday': controls['BD'].value,
                'tagNumber': controls['tagNumber'].value, 'city': controls['city'].value,
                'zipCode': controls['zipCode'].value, 'emergancyContact': controls['emergancyContact'].value,
                'linkedIn': controls['linkedIn'].value, 'pub_key': this.member['pub_key'], 'image_profile': this.image }).subscribe(function (res) {
                if (res['result']) {
                    _this.layoutUtilsService.showActionNotification('member is edited sucessfully', crud_1.MessageType.Update, 5000, true, true);
                    if (_this.route.url.includes('profiles')) {
                        var url = _this.route.url.replace("profiles", 'profile');
                        _this.route.navigateByUrl(url);
                    }
                    else {
                        var url = _this.route.url.replace("profile", 'profiles');
                        _this.route.navigateByUrl(url);
                    }
                }
                else {
                    window.scroll(0, 0);
                    _this.error = true;
                }
            });
        }
        else {
        }
    };
    AboutMemberComponent.prototype.onAlertClose = function (close) {
        this.error = false;
    };
    AboutMemberComponent.prototype.handleUpload = function (event) {
        var _this = this;
        this.confirm = false;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageprivew = event.target.result;
                _this.changDetectRef.detectChanges();
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    AboutMemberComponent.prototype.changeDate = function (date) {
        console.log(date);
    };
    AboutMemberComponent.prototype.checkedpermission = function (key) {
        var checked = false;
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))) {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user['allPrivilidge']) {
                    var privilidge_1 = user['allPrivilidge'];
                    Object.keys(privilidge_1).forEach(function (role) {
                        Object.keys(privilidge_1[role]).forEach(function (pri) {
                            var per = (privilidge_1[role][pri].toString()).trim();
                            if (key.trim() == per) {
                                checked = true;
                            }
                        });
                    });
                }
            }
        }
        return checked;
    };
    AboutMemberComponent.prototype.open = function () {
        var message = 'Oh Snap ! You dont have permission to get this data';
        var actionButtonLabel = '';
        var action = true;
        var setAutoHide = true;
        var autoHide = 4000;
        var horizontalPosition = 'center';
        var verticalPosition = 'top';
        var addExtraClass = false;
        var config = new material_1.MatSnackBarConfig();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = setAutoHide ? autoHide : 0;
        //  config['extraClasses'] = addExtraClass ? ['warn-snackbar'] : undefined;
        config.panelClass = ['warn-snackbar'];
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    };
    AboutMemberComponent = __decorate([
        core_1.Component({
            selector: 'kt-about-member',
            template: __webpack_require__(/*! ./about-member.component.html */ "./src/app/views/pages/members/member-profile/about-member/about-member.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./about-member.component.scss */ "./src/app/views/pages/members/member-profile/about-member/about-member.component.scss")]
        }),
        __metadata("design:paramtypes", [members_service_1.MembersService,
            forms_1.FormBuilder,
            _user_service_1.UserService,
            core_1.ChangeDetectorRef,
            crud_1.LayoutUtilsService,
            router_1.Router,
            material_1.MatSnackBar,
            _services_1.MembershipService,
            router_1.ActivatedRoute])
    ], AboutMemberComponent);
    return AboutMemberComponent;
}());
exports.AboutMemberComponent = AboutMemberComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <div class=\"kt-portlet\">\r\n        <div class=\"kt-portlet__body\">\r\n          <!-- start::FILTERS -->\r\n          <div class=\"kt-form__filtration\">\r\n            <div class=\"row align-items-center\">\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <input matInput placeholder=\"Search user\" [(ngModel)]=\"SearchKey\" placeholder=\"Search\"\r\n                    (keyup)=\"applyFilter()\">\r\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\"\r\n                    (click)=\"onSearchClear()\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Search</strong> in all fields\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterStatus\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"true\">Active</mat-option>\r\n                      <mat-option value=\"false\">Deactive</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by Status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div> -->\r\n\r\n              <!-- <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterSchedual\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let value of getallschedual\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by schedual status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterPayment\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let value of getallpayment\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by Payment Status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"orderby\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option *ngFor=\"let value of oderitems\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Order By</strong>\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"order\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"-1\">DESC</mat-option>\r\n                      <mat-option value=\"1\">ASC</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Order Type</strong>\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- end::FILTERS -->\r\n            <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\r\n\r\n              </div>\r\n                <mat-table #table [dataSource]=\"dataSource\" class=\"example-table\" >\r\n                  <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n                  <!-- Number Column -->\r\n                  <ng-container  matColumnDef=\"increment\">\r\n                    <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.increment }}</mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <ng-container matColumnDef=\"package_name\">\r\n                    <mat-header-cell *matHeaderCellDef>name</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.package_name}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"price\">\r\n                      <mat-header-cell *matHeaderCellDef>Price</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\">\r\n                        {{ row.fees }}\r\n                      </mat-cell>\r\n                    </ng-container>\r\n                  <ng-container matColumnDef=\"payment_date\">\r\n                    <mat-header-cell *matHeaderCellDef>PaymentDate</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.payment_date|date }}</mat-cell>\r\n                  </ng-container>\r\n                  <ng-container  matColumnDef=\"payment_status\">\r\n                      <mat-header-cell *matHeaderCellDef>PaymentStatus\r\n                      </mat-header-cell>\r\n                      <mat-cell  *matCellDef=\"let row\"><span *ngIf=\"row.payment_status=='pending'\"><a (click)='accessPackageData(row)'[routerLink]=\"['/default/members/add',pub_key,'payment-cart']\" routerLinkActive=\"router-link-active\" ><span class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--warning kt-badge--wide\">{{ row.payment_status}}</span></a></span>\r\n                        <span *ngIf=\"!(row.payment_status=='pending')\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">{{ row.payment_status}}</span>\r\n                      </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"Action\">\r\n                    <mat-header-cell *matHeaderCellDef> &nbsp;&nbsp; Action\r\n                    </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">\r\n                        <button  mat-icon-button color=\"primary\" (click)='downloadPDF(row)'>\r\n                            <i class=\"fas fa-file-download\"></i>\r\n                        </button>\r\n                     \r\n                      <button  mat-icon-button color=\"primary\" (click)=\"viewPDF(row)\">\r\n                        <mat-icon>visibility</mat-icon>\r\n                      </button>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns \"></mat-header-row>\r\n                  <mat-row  *matRowDef=\"let row; columns: displayedColumns ;\"></mat-row>\r\n                </mat-table>\r\n                <mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [length]=\"1000\" [pageSize]=\"10\">\r\n                </mat-paginator>\r\n               </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvYWdyZWVtZW50cy1tZW1iZXIvYWdyZWVtZW50cy1tZW1iZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.ts ***!
  \*****************************************************************************************************/
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
var members_service_1 = __webpack_require__(/*! ../../members.service */ "./src/app/views/pages/members/members.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var AgreementsMemberComponent = /** @class */ (function () {
    function AgreementsMemberComponent(memberservice, changeDetectRef, dialog, router, route) {
        this.memberservice = memberservice;
        this.changeDetectRef = changeDetectRef;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.SearchKey = '';
        this.filterStatus = '';
        this.filterPayment = '';
        this.filterSchedual = '';
        this.orderby = '';
        this.order = -1;
        this.displayedColumns = ['increment', 'package_name', 'price', 'payment_date', 'payment_status', 'Action'];
        this.dataSource = new material_1.MatTableDataSource();
        this.getallpayment = [{ key: 'Compelete', value: 'compelete' }, { key: 'Pending', value: 'pending' }];
        this.oderitems = [{ key: 'Latest', value: 'id' }, { key: 'Name', value: 'name' }, { key: 'Price', value: 'price' }, { key: 'Payment Date', value: 'payment_date' },
            { key: 'Payment method', value: 'payment_method' }, { key: 'Payment status', value: 'payment_status' }];
        this.statusPayment = '';
        this.pub_key = (this.router.url.split('/'))[5];
        console.log(this.pub_key);
        this.statusPayment = this.route.snapshot.queryParamMap.get('status');
    }
    AgreementsMemberComponent.prototype.ngOnInit = function () {
        // this.memberservice.currentmember.subscribe(res => {
        //   this.member = res
        // })
        if (typeof this.statusPayment == 'string')
            this.loadPayment(null, null, '', status, '', this.statusPayment, this.orderby, this.order);
        else
            this.loadPayment(null, null, '', status, '', '', this.orderby, this.order);
    };
    AgreementsMemberComponent.prototype.onSearchClear = function () {
        this.SearchKey = "";
        this.applyFilter();
    };
    /*
    *
    *
    */
    //method to  search online
    AgreementsMemberComponent.prototype.applyFilter = function (orderby) {
        if (orderby === void 0) { orderby = ''; }
        if (this.SearchKey && this.SearchKey.length > 0)
            var search = this.SearchKey.trim().toLowerCase();
        else
            var search = '';
        if (this.filterStatus && this.filterStatus.length > 0)
            var status = this.filterStatus;
        else
            status = '';
        if (this.filterSchedual && this.filterSchedual.length > 0)
            var schedual = this.filterSchedual;
        else
            schedual = '';
        if (this.filterPayment && this.filterPayment.length > 0)
            var payment = this.filterPayment;
        else
            payment = '';
        this.loadPayment(null, null, search, status, schedual, payment, this.orderby, this.order);
    };
    AgreementsMemberComponent.prototype.loadPayment = function (pages, perpage, search, status, schedual, payment, orderby, order) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (perpage === void 0) { perpage = 10; }
        if (search === void 0) { search = null; }
        if (status === void 0) { status = ''; }
        if (schedual === void 0) { schedual = ''; }
        if (payment === void 0) { payment = ''; }
        if (orderby === void 0) { orderby = ''; }
        if (order === void 0) { order = -1; }
        if (this.checkedpermission('getmember_membership')) {
            if (this.pub_key) {
                this.memberservice.getMembership(this.pub_key, pages, perpage, search, status, schedual, payment, '', orderby, order).subscribe(function (res) {
                    console.log(res['data']);
                    if (res['result']) {
                        _this.dataSource.data = res['data'];
                        console.log(res['data']);
                        _this.changeDetectRef.detectChanges();
                    }
                });
            }
        }
    };
    AgreementsMemberComponent.prototype.nextPage = function (event, serviclo) {
        if (serviclo === void 0) { serviclo = ''; }
        console.log(event);
        if (typeof this.statusPayment == 'string')
            this.loadPayment(event.pageIndex + 1, event.pageSize, null, status, '', this.statusPayment, this.orderby, this.order);
        else
            this.loadPayment(event.pageIndex + 1, event.pageSize, null, status, '', '', this.orderby, this.order);
    };
    AgreementsMemberComponent.prototype.viewPDF = function (row) {
        if (row.agreement) {
            var data = row.agreement;
            window.open(data, '_blank,width=320,height=210,scrollbars=no,toolbar=no,screenx=0,screeny=0,location=no,titlebar=no,directories=no,status=no,menubar=no');
        }
    };
    AgreementsMemberComponent.prototype.downloadPDF = function (row) {
        if (row.agreement) {
            //this._FileSaverService.save(row.agreement)
            var linkSource = "data:application/pdf;base64," + row.agreement;
            var downloadLink = document.createElement("a");
            var fileName = "agreement.pdf";
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
        }
    };
    AgreementsMemberComponent.prototype.checkedpermission = function (key) {
        var checked = false;
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))) {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user['allPrivilidge']) {
                    var privilidge_1 = user['allPrivilidge'];
                    Object.keys(privilidge_1).forEach(function (role) {
                        Object.keys(privilidge_1[role]).forEach(function (pri) {
                            var per = (privilidge_1[role][pri].toString()).trim();
                            if (key.trim() == per) {
                                checked = true;
                            }
                        });
                    });
                }
            }
        }
        return checked;
    };
    AgreementsMemberComponent = __decorate([
        core_1.Component({
            selector: 'kt-agreements-member',
            template: __webpack_require__(/*! ./agreements-member.component.html */ "./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.html"),
            styles: [__webpack_require__(/*! ./agreements-member.component.scss */ "./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.scss")]
        }),
        __metadata("design:paramtypes", [members_service_1.MembersService,
            core_1.ChangeDetectorRef,
            material_2.MatDialog,
            router_1.Router,
            router_1.ActivatedRoute])
    ], AgreementsMemberComponent);
    return AgreementsMemberComponent;
}());
exports.AgreementsMemberComponent = AgreementsMemberComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/member-profile.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/member-profile.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ng-container>\r\n\r\n        <div class='row'>\r\n            <div class='col-3'>\r\n        <mat-sidenav #drawer class=\"sidenav\" fixedInViewport='false'\r\n            [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n            [opened]=\"!(isHandset$ | async)\">\r\n\r\n            <mat-nav-list>\r\n                <a mat-list-item [routerLink]=\"['about-member']\" routerLinkActive=\"router-link-active\">Details</a>\r\n                <a mat-list-item href=\"#\">Membership</a>\r\n                <a mat-list-item href=\"#\">Payments</a>\r\n            </mat-nav-list>\r\n        </mat-sidenav>\r\n    </div>\r\n    <div class=\"col-9 sidenav\">\r\n\r\n    </div>\r\n</div> -->\r\n\r\n<!-- <mat-toolbar color='primary' *ngIf=\"isHandset$ | async\" >\r\n                <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\"\r\n                    *ngIf=\"isHandset$ | async\">\r\n                    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n                </button>\r\n                <span></span>\r\n        </mat-toolbar>\r\n\r\n  <div id=\"main\">\r\n        <mat-sidenav #drawer class=\"sidenav\" fixedInViewport='false'\r\n        [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\r\n        [opened]=\"!(isHandset$ | async)\">\r\n\r\n        <mat-nav-list>\r\n            <a mat-list-item [routerLink]=\"['about-member']\" routerLinkActive=\"router-link-active\">Details</a>\r\n            <a mat-list-item href=\"#\">Membership</a>\r\n            <a mat-list-item href=\"#\">Payments</a>\r\n        </mat-nav-list>\r\n    </mat-sidenav>\r\n    <article>\r\n            <router-outlet></router-outlet>\r\n    </article>\r\n  </div> -->\r\n<!--begin::Global Theme Styles(used by all pages) -->\r\n\r\n<!--end::Global Theme Styles -->\r\n\r\n<!--begin::Layout Skins(used by all pages) -->\r\n\r\n\r\n<!--begin::Global Theme Styles(used by all pages) -->\r\n\r\n<!--end::Global Theme Styles -->\r\n\r\n<!--begin::Layout Skins(used by all pages) -->\r\n\r\n\r\n<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor\">\r\n\r\n    <!-- end:: Subheader -->\r\n    <!-- begin:: Content -->\r\n    <div class=\"kt-content  kt-grid__item kt-grid__item--fluid\" id=\"kt_content\">\r\n        <!--Begin::App-->\r\n        <div class=\"kt-grid kt-grid--desktop kt-grid--ver kt-grid--ver-desktop kt-app\">\r\n            <!--Begin:: App Aside Mobile Toggle-->\r\n            <button class=\"kt-app__aside-close\" id=\"kt_user_profile_aside_close\">\r\n                <i class=\"la la-close\"></i>\r\n            </button>\r\n            <!--End:: App Aside Mobile Toggle-->\r\n\r\n            <!--Begin:: App Aside-->\r\n            <div class=\"kt-grid__item kt-app__toggle kt-app__aside\" id=\"kt_user_profile_aside\">\r\n                <!--begin:: Widgets/Applications/User/Profile1-->\r\n                <div class=\"kt-portlet kt-portlet--height-fluid-\">\r\n                    <div class=\"kt-portlet__head  kt-portlet__head--noborder\">\r\n                        <div class=\"kt-portlet__head-label\">\r\n                            <h3 class=\"kt-portlet__head-title\">\r\n                            </h3>\r\n                        </div>\r\n                      \r\n                    </div>\r\n                    <div class=\"kt-portlet__body kt-portlet__body--fit-y\">\r\n                        <!--begin::Widget -->\r\n                        <!--begin::Widget -->\r\n                        <div class=\"kt-widget kt-widget--user-profile-1\">\r\n                            <div class=\"kt-widget__head\">\r\n                                <div class=\"kt-widget__media\" *ngIf=\"member\">\r\n\r\n                                    <img *ngIf=\"!member.image_profile\" style=\"min-height: 150px;\"\r\n                                        src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image\" />\r\n                                    <img *ngIf=\"member.image_profile\" style=\"min-height: 150px;\"\r\n                                        src=\"{{member.image_profile}}\" />\r\n                                </div>\r\n                                <div *ngIf=\"member\" class=\"kt-widget__content\">\r\n                                    <div class=\"kt-widget__section\">\r\n                                        <a   class=\"kt-widget__username\">\r\n                                            {{member.name}}\r\n                                            <i class=\"flaticon2-correct kt-font-success\"></i>\r\n                                        </a>\r\n                                        <span class=\"kt-widget__subtitle\">\r\n                                            {{member.username}}\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"kt-widget__body\">\r\n                                <!-- content data in a sidebar -->\r\n                                <!-- begin -->\r\n                                <div *ngIf=\"member\" class=\"kt-widget__content\">\r\n                                    <div class=\"kt-widget__info\">\r\n                                        <span class=\"kt-widget__label\">Email:</span>\r\n                                        <a class=\"kt-widget__data\">{{member.email}}</a>\r\n                                    </div>\r\n                                    <div class=\"kt-widget__info\">\r\n                                        <span class=\"kt-widget__label\">Phone:</span>\r\n                                        <a class=\"kt-widget__data\">{{member.phone}}</a>\r\n                                    </div>\r\n                                    <div class=\"kt-widget__info\">\r\n                                        <span class=\"kt-widget__label\">Location:</span>\r\n                                        <span class=\"kt-widget__data\">{{member.addressLine}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- end -->\r\n                                <!-- tabs of member data -->\r\n                                <!-- begin -->\r\n                                <div class=\"kt-widget__items\">\r\n                                    <a [routerLink]=\"['about']\" routerLinkActive=\"router-link-active\"\r\n                                        (click)=\"event('about-member')\"\r\n                                        [ngClass]=\"{'kt-widget__item--active':(value=='about-member'),'kt-widget__item':true}\">\r\n                                        <span class=\"kt-widget__section\">\r\n                                            <span class=\"kt-widget__icon\">\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\"\r\n                                                    height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\r\n                                                    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                                        <polygon id=\"Bound\" points=\"0 0 24 0 24 24 0 24\"></polygon>\r\n                                                        <path\r\n                                                            d=\"M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z\"\r\n                                                            id=\"Shape\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\r\n                                                        <path\r\n                                                            d=\"M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z\"\r\n                                                            id=\"Path\" fill=\"#000000\" opacity=\"0.3\"></path>\r\n                                                    </g>\r\n                                                </svg> </span>\r\n                                            <span class=\"kt-widget__desc\">\r\n                                                Profile Overview\r\n                                            </span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <a [routerLink]=\"['memership/list']\" (click)=\"event('membership-list')\"\r\n                                        [ngClass]=\"{'kt-widget__item--active':(value=='membership-list'),'kt-widget__item':true}\">\r\n                                        <span class=\"kt-widget__section\">\r\n                                            <span class=\"kt-widget__icon\">\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\"\r\n                                                    height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\r\n                                                    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                                        <polygon id=\"Shape\" points=\"0 0 24 0 24 24 0 24\"></polygon>\r\n                                                        <path\r\n                                                            d=\"M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z\"\r\n                                                            id=\"Mask\" fill=\"#000000\" fill-rule=\"nonzero\" opacity=\"0.3\">\r\n                                                        </path>\r\n                                                        <path\r\n                                                            d=\"M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z\"\r\n                                                            id=\"Mask-Copy\" fill=\"#000000\" fill-rule=\"nonzero\"></path>\r\n                                                    </g>\r\n                                                </svg> </span>\r\n                                            <span class=\"kt-widget__desc\">\r\n                                                Membership\r\n                                            </span>\r\n                                        </span>\r\n                                    </a>\r\n                                    <a [routerLink]=\"['payment']\" (click)=\"event('payment-member')\"\r\n                                        [ngClass]=\"{'kt-widget__item--active':(value=='payment-member'),'kt-widget__item':true}\">\r\n                                        <span class=\"kt-widget__section\">\r\n                                            <span class=\"kt-widget__icon\">\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\"\r\n                                                    height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\r\n                                                    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                                        <rect id=\"bound\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"></rect>\r\n                                                        <path\r\n                                                            d=\"M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z\"\r\n                                                            id=\"Combined-Shape\" fill=\"#000000\" opacity=\"0.3\"></path>\r\n                                                        <path\r\n                                                            d=\"M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z\"\r\n                                                            id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n                                                    </g>\r\n                                                </svg> </span>\r\n                                            <span class=\"kt-widget__desc\">\r\n                                                Payments\r\n                                            </span>\r\n\r\n                                        </span></a>\r\n                                    <a [routerLink]=\"['agreement']\" (click)=\"event('agreement-member')\"\r\n                                        [ngClass]=\"{'kt-widget__item--active':(value=='agreement-member'),'kt-widget__item':true}\">\r\n                                        <span class=\"kt-widget__section\">\r\n                                            <span class=\"kt-widget__icon\">\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\"\r\n                                                    height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\r\n                                                    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                                        <rect id=\"bound\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"></rect>\r\n                                                        <path\r\n                                                            d=\"M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z\"\r\n                                                            id=\"Path-50\" fill=\"#000000\" opacity=\"0.3\"></path>\r\n                                                        <path\r\n                                                            d=\"M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z\"\r\n                                                            id=\"Mask\" fill=\"#000000\" opacity=\"0.3\"></path>\r\n                                                        <path\r\n                                                            d=\"M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z\"\r\n                                                            id=\"Mask-Copy\" fill=\"#000000\" opacity=\"0.3\"></path>\r\n                                                    </g>\r\n                                                </svg> </span>\r\n                                            <span class=\"kt-widget__desc\">\r\n                                                Agreement\r\n                                            </span>\r\n                                        </span>\r\n              \r\n                                    </a>\r\n                                    <a [routerLink]=\"['reschedule']\" (click)=\"event('reschedule')\"\r\n                                        [ngClass]=\"{'kt-widget__item--active':(value=='reschedul'),'kt-widget__item':true}\">\r\n                                        <span class=\"kt-widget__section\">\r\n                                            <span class=\"kt-widget__icon\">\r\n                                                <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\"\r\n                                                    height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\r\n                                                    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                                        <rect id=\"bound\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"></rect>\r\n                                                        <path\r\n                                                            d=\"M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z\"\r\n                                                            id=\"Combined-Shape\" fill=\"#000000\" opacity=\"0.3\"></path>\r\n                                                        <path\r\n                                                            d=\"M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z\"\r\n                                                            id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n                                                    </g>\r\n                                                </svg> </span>\r\n                                            <span class=\"kt-widget__desc\">\r\n                                                Reschedule\r\n                                            </span>\r\n                                        </span> \r\n                                    </a>\r\n                                    <a [routerLink]=\"['workout']\" (click)=\"event('workout')\"\r\n                                        [ngClass]=\"{'kt-widget__item--active':(value=='workout'),'kt-widget__item':true}\">\r\n                                        <span class=\"kt-widget__section\">\r\n                                            <span class=\"kt-widget__icon\">\r\n                                                    <i class=\"material-icons\">accessibility</i>\r\n                                                <!-- <svg xmlns=\"http://www.w3.org/2000/svg\"\r\n                                                    xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"24px\"\r\n                                                    height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" class=\"kt-svg-icon\">\r\n                                                    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\r\n                                                        <rect id=\"bound\" x=\"0\" y=\"0\" width=\"24\" height=\"24\"></rect>\r\n                                                        <path\r\n                                                            d=\"M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z\"\r\n                                                            id=\"Combined-Shape\" fill=\"#000000\" opacity=\"0.3\"></path>\r\n                                                        <path\r\n                                                            d=\"M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z\"\r\n                                                            id=\"Combined-Shape\" fill=\"#000000\"></path>\r\n                                                    </g>\r\n                                                </svg>  -->\r\n                                            </span>\r\n                                            <span class=\"kt-widget__desc\">\r\n                                                WorkOut\r\n                                            </span>\r\n                                        </span>\r\n                                    </a>\r\n                                </div>\r\n                                <!-- end -->\r\n                            </div>\r\n                        </div>\r\n                        <!--end::Widget -->\r\n                        <!--end::Widget -->\r\n                    </div>\r\n                </div>\r\n                <!--end:: Widgets/Applications/User/Profile1-->\r\n\r\n            </div>\r\n            <!--End:: App Aside-->\r\n\r\n            <!--Begin:: App Content-->\r\n            <div class=\"kt-grid__item kt-grid__item--fluid kt-app__content\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <!--End:: App Content-->\r\n        </div>\r\n        <!--End::App-->\r\n    </div>\r\n    <!-- end:: Content -->\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/member-profile.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/member-profile.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n:host {\n  display: flex;\n  min-height: 100vh;\n  flex-direction: column;\n  margin: 0; }\n\n#main {\n  display: flex;\n  flex: 1; }\n\n#main > article {\n  flex: 1;\n  order: 2; }\n\n#main > nav,\n#main > mat-sidenav {\n  flex: 0 0 20vw; }\n\n#main > mat-sidenav {\n  background: light;\n  order: 1; }\n\nmat-toolbar {\n  height: 5vh; }\n\nmat-toolbar {\n  margin-left: 1em;\n  margin-right: 1em; }\n\nmat-toolbar, mat-sidenav, nav, article {\n  padding: 1em;\n  margin: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG1lbWJlcnNcXG1lbWJlci1wcm9maWxlXFxtZW1iZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLFNBQVMsRUFBQTs7QUFFWDtFQUNFLGFBQWE7RUFDYixPQUFPLEVBQUE7O0FBRVQ7RUFDRSxPQUFPO0VBQ1AsUUFBUSxFQUFBOztBQUVWOztFQUVFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUI7RUFDakIsUUFBUSxFQUFBOztBQUVWO0VBRUUsV0FBVyxFQUFBOztBQUViO0VBRUUsZ0JBQWdCO0VBQ2hCLGlCQUNGLEVBQUE7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgXHJcbn1cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuI21haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxufVxyXG4jbWFpbiA+IGFydGljbGUge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3JkZXI6IDI7XHJcbn1cclxuI21haW4gPiBuYXYsIFxyXG4jbWFpbiA+IG1hdC1zaWRlbmF2e1xyXG4gIGZsZXg6IDAgMCAyMHZ3O1xyXG59XHJcblxyXG4jbWFpbiA+IG1hdC1zaWRlbmF2IHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodDtcclxuICBvcmRlcjogMTtcclxufVxyXG5tYXQtdG9vbGJhcntcclxuIFxyXG4gIGhlaWdodDogNXZoO1xyXG59XHJcbm1hdC10b29sYmFyXHJcbntcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtXHJcbn1cclxubWF0LXRvb2xiYXIsIG1hdC1zaWRlbmF2LCBuYXYsYXJ0aWNsZSB7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIG1hcmdpbjogMWVtXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/member-profile.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/member-profile.component.ts ***!
  \********************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var members_service_1 = __webpack_require__(/*! ./../members.service */ "./src/app/views/pages/members/members.service.ts");
var router_2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var MemberProfileComponent = /** @class */ (function () {
    function MemberProfileComponent(changeDetectRef, memberService, route, router) {
        this.changeDetectRef = changeDetectRef;
        this.memberService = memberService;
        this.route = route;
        this.router = router;
        if (this.router.url.includes('memership')) {
            this.value = 'membership-list';
        }
        else if (this.router.url.includes('payment')) {
            this.value = 'payment-member';
        }
        else if (this.router.url.includes('agreement')) {
            this.value = 'agreement-member';
        }
        else if (this.router.url.includes('reschedule')) {
            this.value = 'reschedule';
        }
        else {
            this.value = 'about-member';
        }
    }
    MemberProfileComponent.prototype.ngOnInit = function () {
        // this.memberService.currentmember.subscribe(res=>{
        //  this.member=res
        // })
        //let id= this.route.params['id']
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        if (this.checkedpermission('getallusers')) {
            this.memberService.getMemberById(id).subscribe(function (res) {
                if (res['result']) {
                    _this.member = res['users'][0];
                    _this.nameImage = _this.member['name'][0];
                    _this.changeDetectRef.detectChanges();
                }
            });
        }
    };
    MemberProfileComponent.prototype.event = function (value) {
        this.value = value;
    };
    MemberProfileComponent.prototype.checkedpermission = function (key) {
        var checked = false;
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))) {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user['allPrivilidge']) {
                    var privilidge_1 = user['allPrivilidge'];
                    Object.keys(privilidge_1).forEach(function (role) {
                        Object.keys(privilidge_1[role]).forEach(function (pri) {
                            var per = (privilidge_1[role][pri].toString()).trim();
                            if (key.trim() == per) {
                                checked = true;
                            }
                        });
                    });
                }
            }
        }
        return checked;
    };
    MemberProfileComponent = __decorate([
        core_1.Component({
            selector: 'kt-member-profile',
            template: __webpack_require__(/*! ./member-profile.component.html */ "./src/app/views/pages/members/member-profile/member-profile.component.html"),
            styles: [__webpack_require__(/*! ./member-profile.component.scss */ "./src/app/views/pages/members/member-profile/member-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            members_service_1.MembersService,
            router_1.ActivatedRoute,
            router_2.Router])
    ], MemberProfileComponent);
    return MemberProfileComponent;
}());
exports.MemberProfileComponent = MemberProfileComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-content  kt-grid__item kt-grid__item--fluid\" id=\"kt_content\">\r\n    <div class=\"kt-portlet\">\r\n        <div class=\"kt-portlet__body kt-portlet__body--fit\">\r\n            <div class=\"kt-grid  kt-wizard-v1 kt-wizard-v1--white\" id=\"kt_wizard_v1\" data-ktwizard-state=\"step-first\">\r\n                <div class=\"kt-grid__item\">\r\n\r\n                    <div class=\"kt-wizard-v1__nav\">\r\n                        <div class=\"kt-wizard-v1__nav-items \">\r\n                            <a *ngIf=\"active=='select-membership'\" aria-disabled=\"false\"(click)=\"changeRoute('select-membership')\" [ngClass]=\"{'isDisabled':disabledPage}\" class=\" kt-wizard-v1__nav-item\" [routerLink]=\"['select']\"\r\n                                routerLinkActive=\"router-link-active\" data-ktwizard-type=\"step\"\r\n                                data-ktwizard-state=\"current\">\r\n                                <div class=\"kt-wizard-v1__nav-body\">\r\n                                    <div class=\"kt-wizard-v1__nav-icon\">\r\n                                        <i class=\"flaticon-bus-stop\"></i>\r\n                                    </div>\r\n                                    <div class=\"kt-wizard-v1__nav-label\">\r\n                                        1) Select Membership\r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <a *ngIf=\"!(active=='select-membership')\" (click)=\"changeRoute('select-membership')\" [ngClass]=\"{'isDisabled':disabledPage}\" class=\"kt-wizard-v1__nav-item\" [routerLink]=\"['select']\"\r\n                            routerLinkActive=\"router-link-active\" data-ktwizard-type=\"step\"\r\n                           >\r\n                            <div class=\"kt-wizard-v1__nav-body\">\r\n                                <div class=\"kt-wizard-v1__nav-icon\">\r\n                                    <i class=\"flaticon-bus-stop\"></i>\r\n                                </div>\r\n                                <div class=\"kt-wizard-v1__nav-label\">\r\n                                    1) Select Membership\r\n                                </div>\r\n                            </div>\r\n                        </a>\r\n                            <a *ngIf=\"active=='setUp-schedule'\" (click)=\"changeRoute('setUp-schedule')\" [ngClass]=\"{'isDisabled':disabledPage}\" class=\"kt-wizard-v1__nav-item\"  [routerLink]=\"['schedule']\" data-ktwizard-type=\"step\"\r\n                            data-ktwizard-state=\"current\">\r\n                                <div class=\"kt-wizard-v1__nav-body\">\r\n                                    <div class=\"kt-wizard-v1__nav-icon\">\r\n                                        <i class=\"flaticon-list\"></i>\r\n                                    </div>\r\n                                    <div class=\"kt-wizard-v1__nav-label\">\r\n                                        2) Set up Schedule \r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <a *ngIf=\"!(active=='setUp-schedule')\" (click)=\"changeRoute('setUp-schedule')\"  [ngClass]=\"{'isDisabled':disabledPage}\" class=\"kt-wizard-v1__nav-item\"  [routerLink]=\"['schedule']\" data-ktwizard-type=\"step\">\r\n                                    <div class=\"kt-wizard-v1__nav-body\">\r\n                                        <div class=\"kt-wizard-v1__nav-icon\">\r\n                                            <i class=\"flaticon-list\"></i>\r\n                                        </div>\r\n                                        <div class=\"kt-wizard-v1__nav-label\">\r\n                                            2) Set up Schedule \r\n                                        </div>\r\n                                    </div> \r\n                                </a>\r\n                            <a *ngIf=\"active=='payment-cart'\" (click)=\"changeRoute('payment-cart')\" [ngClass]=\"{'isDisabled':disabledPage}\" class=\"kt-wizard-v1__nav-item\"  [routerLink]=\"['payment-cart']\" data-ktwizard-type=\"step\"\r\n                            data-ktwizard-state=\"current\">\r\n                                <div class=\"kt-wizard-v1__nav-body\">     \r\n                                    <div class=\"kt-wizard-v1__nav-icon\">\r\n                                        <i class=\"flaticon-responsive\"></i>\r\n                                    </div>\r\n                                    <div class=\"kt-wizard-v1__nav-label\">\r\n                                        3) Select a Payment \r\n                                    </div>\r\n                                </div>\r\n                            </a>\r\n                            <a *ngIf=\"!(active=='payment-cart')\" (click)=\"changeRoute('payment-cart')\" [ngClass]=\"{'isDisabled': disabledPage}\" class=\"kt-wizard-v1__nav-item\" [routerLink]=\"['payment-cart']\" data-ktwizard-type=\"step\">\r\n                                    <div class=\"kt-wizard-v1__nav-body\">\r\n                                        <div class=\"kt-wizard-v1__nav-icon\">\r\n                                            <i class=\"flaticon-responsive\"></i>\r\n                                        </div>\r\n                                        <div class=\"kt-wizard-v1__nav-label\">\r\n                                            3) Select a Payment\r\n                                        </div>\r\n                                    </div>\r\n                                </a>\r\n\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--end: Form Wizard Nav -->\r\n                </div>\r\n                <div>\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".isDisabled {\n  cursor: not-allowed;\n  pointer-events: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXJzaGlwLW1lbWJlci9hZGQtbWVtYmVyc2hpcC9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG1lbWJlcnNcXG1lbWJlci1wcm9maWxlXFxtZW1iZXJzaGlwLW1lbWJlclxcYWRkLW1lbWJlcnNoaXBcXGFkZC1tZW1iZXJzaGlwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXJzaGlwLW1lbWJlci9hZGQtbWVtYmVyc2hpcC9hZGQtbWVtYmVyc2hpcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pc0Rpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.ts ***!
  \*****************************************************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var members_service_1 = __webpack_require__(/*! ../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var AddMembershipComponent = /** @class */ (function () {
    function AddMembershipComponent(route, Memberservice, router, changeDetectref) {
        this.route = route;
        this.Memberservice = Memberservice;
        this.router = router;
        this.changeDetectref = changeDetectref;
        this.disabledPage = true;
        this.id_member = this.router.snapshot.paramMap.get('id');
    }
    AddMembershipComponent.prototype.ngOnInit = function () {
        var url = this.route.url.split("/");
        this.Memberservice.changeUrl(url[url.length - 1]);
        this.active = this.Memberservice.ActivePage();
        var callback = function (result) { this.disabledPage = result; };
        this.Memberservice.isSelectedPackage(callback.bind(this));
    };
    AddMembershipComponent.prototype.changeRoute = function (page) { this.active = page; };
    AddMembershipComponent = __decorate([
        core_1.Component({
            selector: 'kt-add-membership',
            template: __webpack_require__(/*! ./add-membership.component.html */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.html"),
            styles: [__webpack_require__(/*! ./add-membership.component.scss */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            members_service_1.MembersService,
            router_1.ActivatedRoute,
            core_1.ChangeDetectorRef])
    ], AddMembershipComponent);
    return AddMembershipComponent;
}());
exports.AddMembershipComponent = AddMembershipComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"kt-portlet\">\r\n      <div class=\"kt-portlet__body kt-portlet__body--fit\">\r\n        <div class=\"kt-invoice-1\">\r\n          <div class=\"kt-invoice__wrapper\">\r\n\r\n            <div class=\"kt-invoice__body kt-invoice__body--centered\">\r\n              <div class=\"table-responsive\">\r\n                <!-- <table class=\"table\">\r\n                  <thead>\r\n                  <tr>\r\n                    <th>IMAGE</th>\r\n                    <th>TITLE</th>\r\n                    <th>DESCRIPTION</th>\r\n\r\n                  </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                  <tr>\r\n                    <td><img src={{SelectedMembership.image}}/></td>\r\n\r\n                    <td>{{SelectedMembership.title}}</td>\r\n                    <td>{{SelectedMembership.discriptions}}</td>\r\n                  </tr>\r\n                  </tbody>\r\n                </table> -->\r\n                <div class=\"media\">\r\n                  <img *ngIf=\"SelectedMembership\" class=\"mr-3\" style=\"width: 50px;height:50px\" src={{SelectedMembership.image}} >\r\n                  <div class=\"media-body\">\r\n                    <h5 class=\"mt-0\">{{SelectedMembership.title}}</h5>\r\n                   {{SelectedMembership.discriptions}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"kt-invoice__footer\">\r\n              <div class=\"kt-invoice__container kt-invoice__container--centered\">\r\n                <div class=\"kt-invoice__content\">\r\n\r\n                  <span><span>Total:</span><span>{{SelectedMembership.price}}</span></span>\r\n                  <span><span>Taxs:</span><span>{{SelectedMembership.taxs}}</span></span>\r\n                  <span><span>Discount:</span><span>{{SelectedMembership.discount}}</span></span>\r\n\r\n                </div>\r\n                <div class=\"kt-invoice__content\">\r\n                  <span>TOTAL AMOUNT</span>\r\n                  <span class=\"kt-invoice__price\">{{SelectedMembership.fees}}</span>\r\n                  <span>Taxes Included</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"kt-invoice__body kt-invoice__body--centered\">\r\n                <div class=\"table-responsive\">\r\n                  <!-- <table class=\"table\">\r\n                    <thead>\r\n                    <tr>\r\n                      <th>IMAGE</th>\r\n                      <th>TITLE</th>\r\n                      <th>DESCRIPTION</th>\r\n\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                      <td><img src={{SelectedMembership.image}}/></td>\r\n\r\n                      <td>{{SelectedMembership.title}}</td>\r\n                      <td>{{SelectedMembership.discriptions}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table> -->\r\n                  <div class=\"form-group\">\r\n                      <label>Payment Method:</label>\r\n                      <select  class=\"form-control\">\r\n\r\n                        <option value=\"1\">cash</option>\r\n\r\n                      </select>\r\n                    </div>\r\n\r\n                        <div class=\"kt-form__actions\">\r\n\r\n                          <ng-container ktPortletTools>\r\n\r\n                              <button  (click)='ConfirmPayment()' mat-raised-button color=\"primary\" >\r\n                               Confirm</button>\r\n                              <!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n                              <!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n                            </ng-container>\r\n                        </div>\r\n\r\n                </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kt-invoice-1 .kt-invoice__wrapper {\n  overflow: hidden; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head {\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container {\n  padding-left: 5rem;\n  padding-right: 5rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container.kt-invoice__container--centered {\n  width: 70%;\n  margin: 0 auto;\n  padding: 0; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a {\n  text-decoration: none; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a > h1 {\n  font-weight: 700;\n  font-size: 2.7rem;\n  color: #fff; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a:last-child {\n  text-align: right; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a:first-child {\n  vertical-align: top; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__desc {\n  text-align: right;\n  display: block;\n  padding: 1rem 0 4rem 0;\n  color: #d2daff; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__desc > span {\n  display: block; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items {\n  display: flex;\n  width: 100%;\n  padding: 5rem 0 6rem 0;\n  border-top: 1px solid #778dff; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item {\n  flex: 1;\n  overflow: hidden;\n  color: #fff; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item .kt-invoice__subtitle {\n  font-weight: 500;\n  padding-bottom: 0.5rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item .kt-invoice__text {\n  color: #d2daff; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item > span {\n  display: block; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body {\n  padding: 6rem 5rem 0 5rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body.kt-invoice__body--centered {\n  width: 70%;\n  margin: 0 auto;\n  padding: 6rem 0 0 0; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table thead tr th {\n  padding: 1rem 0 0.5rem 0;\n  border-top: none;\n  color: #a7abc3; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table thead tr th:not(:first-child) {\n  text-align: right; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table tbody tr td {\n  padding: 1rem 0 1rem 0;\n  border-top: none;\n  font-weight: 700;\n  font-size: 1.1rem;\n  color: #6c7293; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table tbody tr td:not(:first-child) {\n  text-align: right; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table tbody tr td:last-child {\n  color: #FE21BE;\n  font-size: 1.2rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table tbody tr:first-child td {\n  padding-top: 1.8rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer {\n  margin-top: 7rem;\n  background-color: #f7f8fa; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container {\n  display: flex;\n  justify-content: space-between;\n  padding: 5rem 0 6rem 0; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container.kt-invoice__container--centered {\n  width: 70%;\n  margin: 0 auto; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content {\n  font-weight: 400;\n  font-size: 1.1rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content .kt-invoice__price {\n  font-size: 1.9rem;\n  font-weight: 700; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content > span {\n  display: block;\n  display: flex;\n  width: 100%;\n  color: #6c7293;\n  padding-bottom: 1rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content > span > span {\n  flex: 1;\n  font-weight: 400; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content > span > span:first-child {\n  color: #6c7293;\n  font-weight: 500; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content > span > span:last-child {\n  text-align: right;\n  font-size: 1rem; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content > span:first-child {\n  color: #a7abc3; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content > span > span:last-child {\n  color: #a7abc3;\n  font-weight: 500; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content:first-child {\n  width: 35%; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content .kt-invoice__price {\n  color: #FE21BE !important;\n  font-weight: 700 !important; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content:last-child span {\n  text-align: right;\n  display: block; }\n\n.kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content:not(:first-child) > span {\n  color: #6c7293;\n  font-weight: 500; }\n\n@media (max-width: 768px) {\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container {\n    width: 100% !important;\n    padding: 0 2rem 0 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container.kt-invoice__container--centered {\n    padding: 0 2rem 0 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo {\n    display: flex;\n    flex-direction: column;\n    padding-top: 4rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a {\n    width: 100%;\n    display: block; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a:last-child {\n    padding-top: 1rem;\n    text-align: left; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__desc {\n    text-align: left;\n    padding-bottom: 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items {\n    padding: 2rem 0 2rem 0;\n    display: flex;\n    flex-direction: column; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item {\n    width: 100%;\n    display: block;\n    padding-bottom: 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item:not(:first-child) {\n    padding-left: 0; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body {\n    width: 100% !important;\n    padding: 3rem 2rem 0 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body.kt-invoice__body--centered {\n    padding: 3rem 2rem 0 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table thead tr th:not(:first-child) {\n    padding-right: 0.7rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table thead tr th:last-child {\n    padding-right: 0; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table tbody tr td:not(:first-child) {\n    padding-right: 0.7rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__body table tbody tr td:last-child {\n    padding-right: 0; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer {\n    margin-top: 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container {\n    width: 100%;\n    padding: 4rem 2rem 4rem 2rem; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container.kt-invoice__container--centered {\n    width: 100%; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content {\n    width: 100%;\n    display: block; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content:first-child {\n    width: 100%; }\n  .kt-invoice-1 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__container .kt-invoice__content:last-child {\n    padding-top: 2rem;\n    text-align: left; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXJzaGlwLW1lbWJlci9hZGQtbWVtYmVyc2hpcC9wYXltZW50L0U6XFxHRU1JTlxcZ3ltaW4tMi4wLXNhYXMtZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbWVtYmVyc1xcbWVtYmVyLXByb2ZpbGVcXG1lbWJlcnNoaXAtbWVtYmVyXFxhZGQtbWVtYmVyc2hpcFxccGF5bWVudFxccGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFtQyxnQkFBZSxFQUFBOztBQUFDO0VBQXFELHNCQUFxQjtFQUFDLDRCQUEyQixFQUFBOztBQUFDO0VBQTRFLGtCQUFpQjtFQUFDLG1CQUFrQixFQUFBOztBQUFDO0VBQTRHLFVBQVM7RUFBQyxjQUFhO0VBQUMsVUFBUyxFQUFBOztBQUFDO0VBQXNJLGFBQVk7RUFBZ0QsOEJBQTZCO0VBQUMsa0JBQWlCLEVBQUE7O0FBQUM7RUFBZ0cscUJBQW9CLEVBQUE7O0FBQUM7RUFBbUcsZ0JBQWU7RUFBQyxpQkFBZ0I7RUFBQyxXQUFVLEVBQUE7O0FBQUM7RUFBMkcsaUJBQWdCLEVBQUE7O0FBQUM7RUFBNEcsbUJBQWtCLEVBQUE7O0FBQUM7RUFBOEYsaUJBQWdCO0VBQUMsY0FBYTtFQUFDLHNCQUFxQjtFQUFDLGNBQWEsRUFBQTs7QUFBQztFQUFtRyxjQUFhLEVBQUE7O0FBQUM7RUFBdUksYUFBWTtFQUFDLFdBQVU7RUFBQyxzQkFBcUI7RUFBQyw2QkFBNEIsRUFBQTs7QUFBQztFQUErSSxPQUFNO0VBQUMsZ0JBQWU7RUFBQyxXQUFVLEVBQUE7O0FBQUM7RUFBdUksZ0JBQWU7RUFBQyxzQkFBcUIsRUFBQTs7QUFBQztFQUFtSSxjQUFhLEVBQUE7O0FBQUM7RUFBc0gsY0FBYSxFQUFBOztBQUFDO0VBQXFELHlCQUF3QixFQUFBOztBQUFDO0VBQWdGLFVBQVM7RUFBQyxjQUFhO0VBQUMsbUJBQWtCLEVBQUE7O0FBQUM7RUFBdUUsd0JBQXVCO0VBQUMsZ0JBQWU7RUFBQyxjQUFhLEVBQUE7O0FBQUM7RUFBeUYsaUJBQWdCLEVBQUE7O0FBQUM7RUFBdUUsc0JBQXFCO0VBQUMsZ0JBQWU7RUFBQyxnQkFBZTtFQUFDLGlCQUFnQjtFQUFDLGNBQWEsRUFBQTs7QUFBQztFQUF5RixpQkFBZ0IsRUFBQTs7QUFBQztFQUFrRixjQUFhO0VBQUMsaUJBQWdCLEVBQUE7O0FBQUM7RUFBbUYsbUJBQWtCLEVBQUE7O0FBQUM7RUFBdUQsZ0JBQWU7RUFBQyx5QkFBd0IsRUFBQTs7QUFBQztFQUFzSCxhQUFZO0VBQWdELDhCQUE2QjtFQUFDLHNCQUFxQixFQUFBOztBQUFDO0VBQThHLFVBQVM7RUFBQyxjQUFhLEVBQUE7O0FBQUM7RUFBbUcsZ0JBQWU7RUFBQyxpQkFBZ0IsRUFBQTs7QUFBQztFQUFzSCxpQkFBZ0I7RUFBQyxnQkFBZSxFQUFBOztBQUFDO0VBQXdHLGNBQWE7RUFBeUMsYUFBWTtFQUFDLFdBQVU7RUFBQyxjQUFhO0VBQUMsb0JBQW1CLEVBQUE7O0FBQUM7RUFBMkksT0FBTTtFQUFDLGdCQUFlLEVBQUE7O0FBQUM7RUFBeUgsY0FBYTtFQUFDLGdCQUFlLEVBQUE7O0FBQUM7RUFBd0gsaUJBQWdCO0VBQUMsZUFBYyxFQUFBOztBQUFDO0VBQW9ILGNBQWEsRUFBQTs7QUFBQztFQUF3SCxjQUFhO0VBQUMsZ0JBQWUsRUFBQTs7QUFBQztFQUErRyxVQUFTLEVBQUE7O0FBQUM7RUFBc0gseUJBQXdCO0VBQUMsMkJBQTBCLEVBQUE7O0FBQUM7RUFBbUgsaUJBQWdCO0VBQUMsY0FBYSxFQUFBOztBQUFDO0VBQTBILGNBQWE7RUFBQyxnQkFBZSxFQUFBOztBQUFDO0VBQTBCO0lBQTRFLHNCQUFxQjtJQUFDLHNCQUFxQixFQUFBO0VBQUM7SUFBNEcsc0JBQXFCLEVBQUE7RUFBQztJQUFzSSxhQUFZO0lBQW9GLHNCQUFxQjtJQUFDLGlCQUFnQixFQUFBO0VBQUM7SUFBZ0csV0FBVTtJQUFDLGNBQWEsRUFBQTtFQUFDO0lBQTJHLGlCQUFnQjtJQUFDLGdCQUFlLEVBQUE7RUFBQztJQUE4RixnQkFBZTtJQUFDLG9CQUFtQixFQUFBO0VBQUM7SUFBK0Ysc0JBQXFCO0lBQXlDLGFBQVk7SUFBb0Ysc0JBQXFCLEVBQUE7RUFBQztJQUFpSCxXQUFVO0lBQUMsY0FBYTtJQUFDLG9CQUFtQixFQUFBO0VBQUM7SUFBbUksZUFBYyxFQUFBO0VBQUM7SUFBcUQsc0JBQXFCO0lBQUMseUJBQXdCLEVBQUE7RUFBQztJQUFnRix5QkFBd0IsRUFBQTtFQUFDO0lBQXlGLHFCQUFvQixFQUFBO0VBQUM7SUFBa0YsZ0JBQWUsRUFBQTtFQUFDO0lBQXlGLHFCQUFvQixFQUFBO0VBQUM7SUFBa0YsZ0JBQWUsRUFBQTtFQUFDO0lBQXVELGdCQUFlLEVBQUE7RUFBQztJQUE4RSxXQUFVO0lBQUMsNEJBQTJCLEVBQUE7RUFBQztJQUE4RyxXQUFVLEVBQUE7RUFBQztJQUFtRyxXQUFVO0lBQUMsY0FBYSxFQUFBO0VBQUM7SUFBK0csV0FBVSxFQUFBO0VBQUM7SUFBOEcsaUJBQWdCO0lBQUMsZ0JBQWUsRUFBQSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXJzaGlwLW1lbWJlci9hZGQtbWVtYmVyc2hpcC9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVye292ZXJmbG93OmhpZGRlbn0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFke2JhY2tncm91bmQtc2l6ZTpjb3ZlcjtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVye3BhZGRpbmctbGVmdDo1cmVtO3BhZGRpbmctcmlnaHQ6NXJlbX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIua3QtaW52b2ljZV9fY29udGFpbmVyLS1jZW50ZXJlZHt3aWR0aDo3MCU7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjB9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19sb2dve2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nLXRvcDoxMHJlbX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ28+YXt0ZXh0LWRlY29yYXRpb246bm9uZX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ28+YT5oMXtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjIuN3JlbTtjb2xvcjojZmZmfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fbG9nbz5hOmxhc3QtY2hpbGR7dGV4dC1hbGlnbjpyaWdodH0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ28+YTpmaXJzdC1jaGlsZHt2ZXJ0aWNhbC1hbGlnbjp0b3B9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19kZXNje3RleHQtYWxpZ246cmlnaHQ7ZGlzcGxheTpibG9jaztwYWRkaW5nOjFyZW0gMCA0cmVtIDA7Y29sb3I6I2QyZGFmZn0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2Rlc2M+c3BhbntkaXNwbGF5OmJsb2NrfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXN7ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDt3aWR0aDoxMDAlO3BhZGRpbmc6NXJlbSAwIDZyZW0gMDtib3JkZXItdG9wOjFweCBzb2xpZCAjNzc4ZGZmfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXMgLmt0LWludm9pY2VfX2l0ZW17LXdlYmtpdC1ib3gtZmxleDoxOy1tcy1mbGV4OjE7ZmxleDoxO292ZXJmbG93OmhpZGRlbjtjb2xvcjojZmZmfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXMgLmt0LWludm9pY2VfX2l0ZW0gLmt0LWludm9pY2VfX3N1YnRpdGxle2ZvbnQtd2VpZ2h0OjUwMDtwYWRkaW5nLWJvdHRvbTowLjVyZW19Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19pdGVtcyAua3QtaW52b2ljZV9faXRlbSAua3QtaW52b2ljZV9fdGV4dHtjb2xvcjojZDJkYWZmfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXMgLmt0LWludm9pY2VfX2l0ZW0+c3BhbntkaXNwbGF5OmJsb2NrfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHl7cGFkZGluZzo2cmVtIDVyZW0gMCA1cmVtfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkua3QtaW52b2ljZV9fYm9keS0tY2VudGVyZWR7d2lkdGg6NzAlO21hcmdpbjowIGF1dG87cGFkZGluZzo2cmVtIDAgMCAwfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGhlYWQgdHIgdGh7cGFkZGluZzoxcmVtIDAgMC41cmVtIDA7Ym9yZGVyLXRvcDpub25lO2NvbG9yOiNhN2FiYzN9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keSB0YWJsZSB0aGVhZCB0ciB0aDpub3QoOmZpcnN0LWNoaWxkKXt0ZXh0LWFsaWduOnJpZ2h0fS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGJvZHkgdHIgdGR7cGFkZGluZzoxcmVtIDAgMXJlbSAwO2JvcmRlci10b3A6bm9uZTtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEuMXJlbTtjb2xvcjojNmM3MjkzfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGJvZHkgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCl7dGV4dC1hbGlnbjpyaWdodH0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5IHRhYmxlIHRib2R5IHRyIHRkOmxhc3QtY2hpbGR7Y29sb3I6I0ZFMjFCRTtmb250LXNpemU6MS4ycmVtfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGR7cGFkZGluZy10b3A6MS44cmVtfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlcnttYXJnaW4tdG9wOjdyZW07YmFja2dyb3VuZC1jb2xvcjojZjdmOGZhfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fY29udGFpbmVye2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LXdlYmtpdC1ib3gtcGFjazpqdXN0aWZ5Oy1tcy1mbGV4LXBhY2s6anVzdGlmeTtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjVyZW0gMCA2cmVtIDB9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX19jb250YWluZXIua3QtaW52b2ljZV9fY29udGFpbmVyLS1jZW50ZXJlZHt3aWR0aDo3MCU7bWFyZ2luOjAgYXV0b30ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fY29udGVudHtmb250LXdlaWdodDo0MDA7Zm9udC1zaXplOjEuMXJlbX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fY29udGVudCAua3QtaW52b2ljZV9fcHJpY2V7Zm9udC1zaXplOjEuOXJlbTtmb250LXdlaWdodDo3MDB9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2NvbnRlbnQ+c3BhbntkaXNwbGF5OmJsb2NrO2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7d2lkdGg6MTAwJTtjb2xvcjojNmM3MjkzO3BhZGRpbmctYm90dG9tOjFyZW19Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2NvbnRlbnQ+c3Bhbj5zcGFuey13ZWJraXQtYm94LWZsZXg6MTstbXMtZmxleDoxO2ZsZXg6MTtmb250LXdlaWdodDo0MDB9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2NvbnRlbnQ+c3Bhbj5zcGFuOmZpcnN0LWNoaWxke2NvbG9yOiM2YzcyOTM7Zm9udC13ZWlnaHQ6NTAwfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19jb250ZW50PnNwYW4+c3BhbjpsYXN0LWNoaWxke3RleHQtYWxpZ246cmlnaHQ7Zm9udC1zaXplOjFyZW19Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2NvbnRlbnQ+c3BhbjpmaXJzdC1jaGlsZHtjb2xvcjojYTdhYmMzfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19jb250ZW50PnNwYW4+c3BhbjpsYXN0LWNoaWxke2NvbG9yOiNhN2FiYzM7Zm9udC13ZWlnaHQ6NTAwfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19jb250ZW50OmZpcnN0LWNoaWxke3dpZHRoOjM1JX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fY29udGVudCAua3QtaW52b2ljZV9fcHJpY2V7Y29sb3I6I0ZFMjFCRSAhaW1wb3J0YW50O2ZvbnQtd2VpZ2h0OjcwMCAhaW1wb3J0YW50fS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19jb250ZW50Omxhc3QtY2hpbGQgc3Bhbnt0ZXh0LWFsaWduOnJpZ2h0O2Rpc3BsYXk6YmxvY2t9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2NvbnRlbnQ6bm90KDpmaXJzdC1jaGlsZCk+c3Bhbntjb2xvcjojNmM3MjkzO2ZvbnQtd2VpZ2h0OjUwMH1AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpey5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lcnt3aWR0aDoxMDAlICFpbXBvcnRhbnQ7cGFkZGluZzowIDJyZW0gMCAycmVtfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lci5rdC1pbnZvaWNlX19jb250YWluZXItLWNlbnRlcmVke3BhZGRpbmc6MCAycmVtIDAgMnJlbX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ297ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1vcmllbnQ6dmVydGljYWw7LXdlYmtpdC1ib3gtZGlyZWN0aW9uOm5vcm1hbDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtwYWRkaW5nLXRvcDo0cmVtfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fbG9nbz5he3dpZHRoOjEwMCU7ZGlzcGxheTpibG9ja30ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ28+YTpsYXN0LWNoaWxke3BhZGRpbmctdG9wOjFyZW07dGV4dC1hbGlnbjpsZWZ0fS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fZGVzY3t0ZXh0LWFsaWduOmxlZnQ7cGFkZGluZy1ib3R0b206MnJlbX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2l0ZW1ze3BhZGRpbmc6MnJlbSAwIDJyZW0gMDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXMgLmt0LWludm9pY2VfX2l0ZW17d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO3BhZGRpbmctYm90dG9tOjJyZW19Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19pdGVtcyAua3QtaW52b2ljZV9faXRlbTpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLWxlZnQ6MH0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5e3dpZHRoOjEwMCUgIWltcG9ydGFudDtwYWRkaW5nOjNyZW0gMnJlbSAwIDJyZW19Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keS5rdC1pbnZvaWNlX19ib2R5LS1jZW50ZXJlZHtwYWRkaW5nOjNyZW0gMnJlbSAwIDJyZW19Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keSB0YWJsZSB0aGVhZCB0ciB0aDpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLXJpZ2h0OjAuN3JlbX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5IHRhYmxlIHRoZWFkIHRyIHRoOmxhc3QtY2hpbGR7cGFkZGluZy1yaWdodDowfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGJvZHkgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCl7cGFkZGluZy1yaWdodDowLjdyZW19Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keSB0YWJsZSB0Ym9keSB0ciB0ZDpsYXN0LWNoaWxke3BhZGRpbmctcmlnaHQ6MH0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXJ7bWFyZ2luLXRvcDoycmVtfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fY29udGFpbmVye3dpZHRoOjEwMCU7cGFkZGluZzo0cmVtIDJyZW0gNHJlbSAycmVtfS5rdC1pbnZvaWNlLTEgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fY29udGFpbmVyLmt0LWludm9pY2VfX2NvbnRhaW5lci0tY2VudGVyZWR7d2lkdGg6MTAwJX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fY29udGVudHt3aWR0aDoxMDAlO2Rpc3BsYXk6YmxvY2t9Lmt0LWludm9pY2UtMSAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2NvbnRlbnQ6Zmlyc3QtY2hpbGR7d2lkdGg6MTAwJX0ua3QtaW52b2ljZS0xIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fY29udGVudDpsYXN0LWNoaWxke3BhZGRpbmctdG9wOjJyZW07dGV4dC1hbGlnbjpsZWZ0fX1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.ts ***!
  \******************************************************************************************************************/
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
var members_service_1 = __webpack_require__(/*! ../../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var crud_1 = __webpack_require__(/*! ../../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(memberService, router, route, layoutUtilsService) {
        var _this = this;
        this.memberService = memberService;
        this.router = router;
        this.route = route;
        this.layoutUtilsService = layoutUtilsService;
        this.memberService._membershipRenew.subscribe(function (res) {
            _this.renewMembership = res;
        });
        this.memberService.currentSelectedMembership.subscribe(function (res) {
            console.log(res);
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
        // // let url=this.route.url.split('/')
        // // console.log(url[url.length-1])
        // // this.memberService.changeUrl(url[url.length-1])
        // let url=this.router.snapshot.paramMap.get('id')
        // console.log(url)
        // if(url)
        // {
        //   this.membership={}
        //   this.memberService.getPackageBYId(url).subscribe(res => {
        //     if (res['result']) {
        //       this.SelectedMembership = res['data'][0]
        //       console.log('data',this.SelectedMembership)
        //     }
        //   })
        // }
        // if(this.renewMembership)
        // {
        //   this.membership=this.renewMembership
        //   this.type_membership='package'
        //   console.log(this.membership)
        //
        // }
        // else{
        //   this.memberService.currentDataofSelectedPackage.subscribe(res=>{this.SelectedMembership=res,console.log(res)})
        //   this.memberService.currentSelectedMembership.subscribe(res => {
        //     this.type_membership = res
        //     console.log('data',res)
        //   })
        //   this.memberService.currentMembership.subscribe(res => {
        //     this.membership = res
        //   })
        //
        // }
        //
        // if (this.type_membership && this.membership) {
        //   if (this.membership['membership_id']) {
        //     if (this.type_membership.includes('package')) {
        //       this.memberService.getPackageBYId(this.membership['membership_id']).subscribe(res => {
        //         if (res['result']) {
        //           this.SelectedMembership = res['data'][0]
        //           console.log('data',this.SelectedMembership)
        //         }
        //       })
        //     }
        //     else {
        //       this.memberService.getActivityById(this.membership['membership_id']).subscribe(res => {
        //         if (res['result']) {
        //           this.SelectedMembership = res['data']
        //           console.log(this.SelectedMembership)
        //         }
        //       })
        //     }
        //   }
        // }
        var _this = this;
        //let selectedPackagesId =this.router.snapshot.queryParamMap.get('se_id');
        var selectedPackagesId = this.router.snapshot.paramMap.get('id');
        this.memberService.getSelectedPackageById(selectedPackagesId).subscribe(function (res) {
            if (res['result']) {
                _this.SelectedMembership = res['data'][0];
                console.log(res);
            }
        });
    };
    PaymentComponent.prototype.nextstep = function () {
    };
    PaymentComponent.prototype.ConfirmPayment = function () {
        var _this = this;
        var selectedPackagesId = this.router.snapshot.paramMap.get('id');
        var user_key = this.router.parent.snapshot.paramMap.get('id');
        if (this.SelectedMembership['payment_action'] && this.SelectedMembership['payment_action'] != '') {
            var data = { 'payment_status': 'complete', 'payment_method': 'cash', 'payment_date': Date.now() };
            if (this.SelectedMembership['payment_action'] == 'upgrade')
                data['upgrade'] = 'true';
            else if (this.SelectedMembership['payment_action'] == 'downgrade')
                data['downgrade'] = 'true';
            data['privious_membership_id'] = this.SelectedMembership['privious_membership_id'];
        }
        else
            var data = { 'payment_status': 'complete', 'payment_method': 'cash', 'payment_date': Date.now() };
        this.memberService.updateSpacificMemberMemebership(selectedPackagesId, data).subscribe(function (res) {
            if (res['result']) {
                _this.layoutUtilsService.showActionNotification("Membership has successfully updated", crud_1.MessageType.Create);
                _this.route.navigate(['default/members/list/profile/' + user_key + '/memership/list/']);
            }
            else {
                _this.layoutUtilsService.showActionNotification("Sorry,Membership has not updated try again", crud_1.MessageType.Create);
            }
        });
    };
    PaymentComponent = __decorate([
        core_1.Component({
            selector: 'kt-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.scss */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.scss")]
        }),
        __metadata("design:paramtypes", [members_service_1.MembersService,
            router_1.ActivatedRoute,
            router_1.Router, crud_1.LayoutUtilsService])
    ], PaymentComponent);
    return PaymentComponent;
}());
exports.PaymentComponent = PaymentComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-my-page></kt-my-page>"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvbWVtYmVyc2hpcC1tZW1iZXIvYWRkLW1lbWJlcnNoaXAvc2NoZWR1bGUvc2NoZWR1bGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.ts ***!
  \********************************************************************************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var members_service_1 = __webpack_require__(/*! ../../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent(route, Membershipservice) {
        this.route = route;
        this.Membershipservice = Membershipservice;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var url = this.route.url.split('/');
        console.log(url[url.length - 1]);
        this.Membershipservice.changeUrl(url[url.length - 1]);
    };
    ScheduleComponent = __decorate([
        core_1.Component({
            selector: 'kt-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router, members_service_1.MembersService])
    ], ScheduleComponent);
    return ScheduleComponent;
}());
exports.ScheduleComponent = ScheduleComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.html ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-grid__item kt-grid__item--fluid kt-wizard-v1__wrapper\">\r\n\r\n    <!--begin: Form Wizard Form-->\r\n    <form  class=\"kt-form\" id=\"kt_form\">\r\n      <div class=\"kt-portlet__body\">\r\n\r\n\r\n          <kt-alert  id=\"alert\" *ngIf=\"incorrectDate\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n             perhaps you forget to select data! try again\r\n          </kt-alert>\r\n        <div class=\"kt-heading kt-heading--md\">Select a membership</div>\r\n        <div class=\"kt-form__section kt-form__section--first\">\r\n          <div class=\"kt-wizard-v1__form\">\r\n            <div class=\"form-group\">\r\n              <label>Branch:</label>\r\n               <select *ngIf=\"branch&&branch.length\" [disabled]=\"packageStatus\" (ngModelChange)='selectUnit($event)' [(ngModel)]=\"selectedValue\"\r\n                name=\"selectedValue\" class=\"form-control\" >\r\n  \r\n                <option  *ngFor=\"let item of branch\" [ngValue]=\"item\">{{item.name}}</option>\r\n  \r\n              </select>\r\n              <span class=\"form-text text-muted\">Please select branch</span>\r\n            </div>\r\n            <div *ngIf=\"!(branch&&branch.length)\" class=\"form-control\">\r\n              <span class=\"form-text text-muted\">No branch</span>\r\n            </div>\r\n            <div>\r\n              <div *ngIf=\"selected\" class=\"form-group\">\r\n                <label>unit:</label>\r\n                <select [(ngModel)]=\"selectedunit\" [disabled]=\"packageStatus\" name=\"selectedunit\" class=\"form-control\" (change)=\"selected_unit()\">\r\n  \r\n                  <option *ngFor=\"let item of units\" [ngValue]=\"item\">{{item.name}}</option>\r\n\r\n                </select>\r\n                <div *ngIf=\"!(units&&units.length)\" class=\"form-control\">\r\n                  <span class=\"form-text text-muted\">No Units</span>\r\n                </div>\r\n                <span class=\"form-text text-muted\">Please select unit</span>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-xl-6\">\r\n                  <mat-radio-group *ngIf=\"packageStatus!='renew'&&selected\" (change)=\"selected_membership()\" name=\"selectedMembership\"\r\n                    [(ngModel)]=\"selectedMembership\">\r\n                    <mat-radio-button class=\"example-radio-button\" value=\"Private package\">\r\n                      Private Packages\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"example-radio-button\" value=\"General package\">\r\n                      General Packages\r\n                    </mat-radio-button>\r\n                    <mat-radio-button *ngIf=\"packageStatus!='downgrade'&&packageStatus!='upgrade'\"value=\"activity\">\r\n                      Activities\r\n                    </mat-radio-button>\r\n                  </mat-radio-group>\r\n\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"packages&&packages.length\" class=\"form-group\">\r\n                <label>Membership:</label>\r\n                <select  [(ngModel)]=\"selectedpckage\" [disabled]=\"packageStatus=='renew'\" name=\"selectedpckage\" class=\"form-control\"(change)=\"changeDiscount(item)\">\r\n  \r\n                  <option aria-selected=\"true\" *ngFor=\"let item of packages\" [ngValue]=\"item\">{{item.title}}</option>\r\n                  \r\n                </select>\r\n                <span class=\"form-text text-muted\">Please select </span>\r\n              </div>\r\n              <div *ngIf=\"selectedMembership\">\r\n              <div *ngIf=\"!(packages&&packages.length)\" class=\"form-group\">\r\n                <label>No Packages</label>\r\n              </div>\r\n              </div>\r\n              <div *ngIf=\"selectedpckage||packageStatus\" class=\"form-group\">\r\n                <div *ngIf=\"selectedpckage\" class=\"form-group row\">\r\n                  <div class=\"col-xs-3\">\r\n                    <label class=\"ml-3 mr-2\">Discount:</label>\r\n                  </div>\r\n                  <div class=\"col-xs-3\">\r\n                    <input  class=\"form-control\" style=\"height:2px\" name=\"discount\" [(ngModel)]=\"discount\" id=\"ex1\"\r\n                      type=\"number\" min=\"1\" >\r\n                  </div>\r\n                  <div class=\"col-xs-3\">\r\n                    <label class=\" ml-5 mr-2\">Price :</label>\r\n                  </div>\r\n      \r\n                  <div  *ngIf=\"selectedpckage\" class=\"col-xs-3\">\r\n                 <label class=\"text-danger\">{{selectedpckage.fees}}</label>\r\n                  </div>\r\n                </div>\r\n                <div *ngIf=\"packageStatus=='renew'\" class=\"form-group row\">\r\n                    <label>Start Date:</label>\r\n                    <div class=\"col-xl-12\">\r\n                      <mat-radio-group  (change)=\"RenewDate()\" name=\"renewdate\"\r\n                        [(ngModel)]=\"renewdate\">\r\n                        <mat-radio-button class=\"example-radio-button d-block\" value=\"default\">\r\n                         Renew starting at the end of selected membership\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-radio-button d-block\" value=\"renewDate\">\r\n                          Renew date\r\n                        </mat-radio-button>\r\n                      </mat-radio-group>\r\n\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"packageStatus=='downgrade'||packageStatus=='upgrade'\" class=\"form-group row\">\r\n                    <label>Attendance options:</label>\r\n                    <div class=\"col-xl-12\">\r\n                      <mat-radio-group  name=\"oldAttedanceStatus\"\r\n                        [(ngModel)]=\"oldAttedanceStatus\">\r\n                        <mat-radio-button class=\"example-radio-button d-block\" value=\"cancel\">\r\n                          cancel old package with refund\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-radio-button d-block\" value=\"nocancel\">\r\n                          Dont cancel old package\r\n                        </mat-radio-button>\r\n                      </mat-radio-group>\r\n\r\n                    </div>\r\n                  </div>\r\n                <div class=\"kt-space-20\"></div>\r\n                <div *ngIf=\"(selectedpckage&&!end_date)||renewdate=='renewDate'\" class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <input  class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"d22\" #c2=\"ngModel\" [(ngModel)]=\"model\"\r\n                    (keydown)=\"$event.preventDefault()\"    ngbDatepicker  #d22=\"ngbDatepicker\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-primary\" (click)=\"d22.toggle()\" type=\"button\">\r\n                        <i class=\"la la-calendar\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"kt-portlet__foot\">\r\n              <div class=\"kt-form__actions\">\r\n\r\n                <ng-container ktPortletTools>\r\n                  <button (click)='onSubmit()' mat-raised-button color=\"success\">Submit</button>\r\n                  <button [disabled]=nextstep (click)='nextStep()' mat-raised-button color=\"primary\">\r\n                    Next step</button>\r\n                  <!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n                  <!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvbWVtYmVyc2hpcC1tZW1iZXIvYWRkLW1lbWJlcnNoaXAvc2VsZWN0LW1lbWJlcnNoaXAvc2VsZWN0LW1lbWJlcnNoaXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.ts":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.ts ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var club_tree_service_1 = __webpack_require__(/*! ../../../../../../../core/auth/_services/club-tree.service */ "./src/app/core/auth/_services/club-tree.service.ts");
var members_service_1 = __webpack_require__(/*! ../../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var crud_1 = __webpack_require__(/*! ../../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var NgbDateNativeAdapter = /** @class */ (function (_super) {
    __extends(NgbDateNativeAdapter, _super);
    function NgbDateNativeAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateNativeAdapter.prototype.fromModel = function (date) {
        return (date && date.getFullYear) ? { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
    };
    NgbDateNativeAdapter.prototype.toModel = function (date) {
        return date ? new Date(date.year, date.month - 1, date.day) : null;
    };
    NgbDateNativeAdapter = __decorate([
        core_1.Injectable()
    ], NgbDateNativeAdapter);
    return NgbDateNativeAdapter;
}(ng_bootstrap_1.NgbDateAdapter));
exports.NgbDateNativeAdapter = NgbDateNativeAdapter;
var SelectMembershipComponent = /** @class */ (function () {
    function SelectMembershipComponent(clubitemsService, memberssevice, layoutUtilsService, route, config, router, Changedetectorref, fb) {
        this.clubitemsService = clubitemsService;
        this.memberssevice = memberssevice;
        this.layoutUtilsService = layoutUtilsService;
        this.route = route;
        this.router = router;
        this.Changedetectorref = Changedetectorref;
        this.fb = fb;
        this.membershipandpayment_id = null;
        this.nextstep = false;
        this.submited = false;
        this.selected = false;
        this.selectedValue = '';
        this.selectedmem = false;
        this.date = new Date();
        this.incorrectDate = false;
        this.onlyRequest = true;
        var day = parseFloat(new Date().toISOString().split('T')[0].split('-')[2]);
        console.log(day);
        var year = new Date().getFullYear();
        var month = (new Date().getMonth()) + 1;
        config.minDate = { "year": year, "month": month, "day": day };
        this.member = this.router.parent.snapshot.paramMap.get('id');
        this.packageStatus = this.router.parent.snapshot.queryParamMap.get('status');
        this.membershipandpayment_id = this.router.parent.snapshot.queryParamMap.get('pe');
        this.uk_renewPackage = this.router.snapshot.queryParamMap.get('uk');
        this.end_date = this.router.snapshot.queryParamMap.get('ed');
        this.membership_id = this.router.parent.snapshot.queryParamMap.get('mb');
        this.discount = this.router.snapshot.queryParamMap.get('md');
        this.selectedMembership = this.router.snapshot.queryParamMap.get('type');
    }
    SelectMembershipComponent.prototype.ngOnInit = function () {
        //validator date
        var _this = this;
        this.clubitemsService.getUnitsData().subscribe(function (res) {
            if (res['result'])
                _this.branch = res['data'];
            //this.selectedValue = res['data'][0]
            if (_this.uk_renewPackage) {
                Object.values(_this.branch).forEach(function (value) {
                    Object.values(value['units']).forEach(function (unit) {
                        if (unit['pub_key'] == this.uk_renewPackage) {
                            this.selectedValue = value;
                            this.selected = true;
                            this.selectedunit = unit;
                            this.selectedMembership = this.selectedMembership + " package";
                            this.units = value['units'];
                            this.selectedmem = true;
                            this.selected_membership();
                        }
                    }.bind(this));
                }.bind(_this));
                _this.selected_membership(true);
            }
            _this.Changedetectorref.detectChanges();
        });
    };
    SelectMembershipComponent.prototype.selected_unit = function () {
        this.selectedMembership = null;
        this.selectedpckage = null;
        this.packages = null;
    };
    SelectMembershipComponent.prototype.selectUnit = function (item) {
        this.selectedMembership = null;
        this.selectedpckage = null;
        this.packages = null;
        this.onlyRequest = true;
        this.selectedbranch = item;
        console.log(item);
        if (item['units']) {
            this.selected = true;
            this.units = item['units'];
            this.selectedunit = item['units'][0];
            console.log(this.units);
        }
        else {
            this.selected = false;
        }
    };
    SelectMembershipComponent.prototype.selected_membership = function (value) {
        var _this = this;
        if (value === void 0) { value = true; }
        this.packages = null;
        if (value) {
            var downgrade = false;
            var upgrade = false;
            var membership_id = null;
            this.selectedmem = true;
            this.discount = null;
            console.log(this.selectedMembership);
            if (this.selectedunit && this.selectedMembership.includes('package')) {
                console.log(this.selectedMembership);
                if (this.selectedMembership.includes('package')) {
                    if (this.packageStatus == 'downgrade')
                        downgrade = true;
                    if (this.packageStatus == 'upgrade')
                        upgrade = true;
                    if (this.membership_id && (upgrade || downgrade))
                        membership_id = this.membership_id;
                    var units = this.selectedunit['pub_key'];
                    var branch = this.selectedValue['pub_key'];
                    var type = ((this.selectedMembership.split(' '))[0]).toLocaleLowerCase();
                    this.memberssevice.selectedPackages(this.selectedunit['pub_key'], type, downgrade, upgrade, membership_id, units, branch).subscribe(function (res) {
                        value = false;
                        if (res['result']) {
                            _this.packages = res['data'];
                            console.log(_this.packages);
                            _this.selectedpckage = res['data'][0];
                            console.log(_this.uk_renewPackage);
                            _this.packages.forEach(function (membership) {
                                console.log(membership['_id'], _this.membership_id, membership);
                                if (membership['_id'] == _this.membership_id) {
                                    _this.selectedpckage = membership;
                                }
                            });
                            _this.Changedetectorref.detectChanges();
                        }
                        else
                            _this.packages = null;
                    });
                }
            }
            else if (this.selectedMembership.includes('activity')) {
                this.memberssevice.getAllActivity().subscribe(function (res) {
                    if (res['result']) {
                        console.log(_this.selectedMembership);
                        _this.packages = res['data'];
                        _this.Changedetectorref.detectChanges();
                        _this.Changedetectorref.detectChanges();
                        _this.memberssevice.changeType('activitiy');
                    }
                    else
                        _this.packages = null;
                });
            }
            else {
                this.packages = null;
            }
        }
    };
    SelectMembershipComponent.prototype.RenewDate = function () {
        if (this.renewdate == 'default') {
            this.model = this.end_date;
        }
    };
    SelectMembershipComponent.prototype.changeDiscount = function () {
        console.log(this.selectedpckage);
        this.discount = this.selectedpckage.discount;
        console.log(this.discount);
        this.Changedetectorref.detectChanges();
    };
    SelectMembershipComponent.prototype.nextStep = function () {
        this.onlyRequest = true;
        if (this.membershipandpayment_id && this.packageStatus == 'renew') {
            this.RenewPackage();
        }
        else if (this.packageStatus == 'upgrade') {
            this.upgradeanddowngradePackage('upgrade');
        }
        else if (this.packageStatus == 'downgrade') {
            this.upgradeanddowngradePackage('downgrade');
        }
        else {
            this.AddMembership();
        }
    };
    SelectMembershipComponent.prototype.AddMembership = function () {
        var _this = this;
        console.log(this.date, this.model);
        if (this.selectedunit && this.selectedbranch && this.selectedpckage && this.model && this.member) {
            var membership_1;
            this.memberssevice.DataOfPackage(this.selectedpckage);
            this.memberssevice.changeSelectedMembership({
                'selectedbranch': this.selectedbranch, 'selectedunit': this.selectedunit, 'selectedpckage': this.selectedpckage,
                'units_key': this.selectedunit['pub_key'], 'membership_id': this.selectedpckage['_id'], 'start_date': this.model
            });
            this.memberssevice.currentMembership.subscribe(function (res) {
                membership_1 = res;
                console.log(res);
            });
            if (membership_1) {
                membership_1['pub_key'] = this.member;
                membership_1['membership_id'] = this.selectedpckage['_id'];
                membership_1['discount'] = this.discount,
                    membership_1['start_date'] = this.model;
            }
            else {
                membership_1 = {
                    'pub_key': this.member,
                    'membership_id': this.selectedpckage['_id'],
                    'payment_status': 'pending',
                    'discount': this.discount,
                    'start_date': this.model,
                    'schedual_status': 'pending'
                };
                if (this.selectedMembership.includes('activity')) {
                    membership_1['schedual_status'] = 'activity';
                }
            }
            this.memberssevice.changemembership(membership_1);
            this.memberssevice.changeSelectedMembership({ 'selectedbranch': this.selectedbranch, 'selectedunit': this.selectedunit, 'selectedpckage': this.selectedpckage, 'units_key': this.selectedunit['pub_key'], 'membership_id': this.selectedpckage['_id'], 'start_date': this.model });
            this.memberssevice.addPackage(membership_1).subscribe(function (res) {
                _this.onlyRequest = false;
                if (res['result']) {
                    _this.memberssevice.changeSubmittedMembership(true);
                    _this.layoutUtilsService.showActionNotification("Membership has successfully added", crud_1.MessageType.Create);
                    _this.selectedpckage['se_id'] = res['data']._id;
                    if (_this.selectedMembership.includes('activity'))
                        _this.route.navigate(['/default/members/add', _this.member, 'schedule', _this.selectedpckage['_id']], { queryParams: { iu: _this.selectedunit['pub_key'], 'se_id': res['data']._id, 'date': new Date(_this.model).getTime(), type: 'activity' } });
                    else
                        _this.route.navigate(['/default/members/add', _this.member, 'schedule', _this.selectedpckage['_id']], { queryParams: { iu: _this.selectedunit['pub_key'], 'se_id': res['data']._id, 'date': new Date(_this.model).getTime() } });
                    _this.memberssevice.changeSubmittedMembership(true);
                }
                else {
                    _this.layoutUtilsService.showActionNotification("Sorry,Membership has not added try again", crud_1.MessageType.Create);
                }
            });
            //update
        }
        else {
            this.incorrectDate = true;
            window.scroll(0, 0);
        }
    };
    SelectMembershipComponent.prototype.onSubmit = function () {
        this.onlyRequest = true;
        if (this.membershipandpayment_id && this.packageStatus == 'renew') {
            this.RenewPackage();
        }
        else if (this.packageStatus == 'upgrade') {
            this.upgradeanddowngradePackage('upgrade');
        }
        else if (this.packageStatus == 'downgrade') {
            this.upgradeanddowngradePackage('downgrade');
        }
        else {
            this.AddMembership();
        }
    };
    SelectMembershipComponent.prototype.onAlertClose = function ($event) {
        this.incorrectDate = false;
    };
    SelectMembershipComponent.prototype.RenewPackage = function () {
        var _this = this;
        if (this.renewdate == 'renewDate') {
            this.end_date = new Date(this.model).getTime();
            console.log(this.end_date);
        }
        if (this.model >= this.end_date) {
            console.log(this.membershipandpayment_id, this.member, this.end_date);
            if (this.membershipandpayment_id && this.member, this.end_date)
                this.memberssevice.renewMebership(this.member, { 'id': this.membershipandpayment_id, 'start_date': this.end_date }).subscribe(function (res) {
                    if (res['result']) {
                        _this.layoutUtilsService.showActionNotification("Membership successfully is renewed", crud_1.MessageType.Create);
                        _this.route.navigate(['/default/members/add', _this.member, 'schedule', _this.selectedpckage['_id']], { queryParams: { iu: _this.uk_renewPackage, 'se_id': res['data']._id, 'date': _this.end_date } });
                    }
                    else {
                        _this.layoutUtilsService.showActionNotification("Sorry,Membership has not added try again", crud_1.MessageType.Create);
                    }
                });
        }
        else {
            this.incorrectDate = true;
            window.scroll(0, 0);
        }
    };
    /** Upgrade Packages **/
    SelectMembershipComponent.prototype.upgradeanddowngradePackage = function (action) {
        var _this = this;
        this.oldAttedanceStatus = 'cancel';
        if (this.model && this.selectedpckage) {
            var membership = {
                'pub_key': this.member,
                'membership_id': this.selectedpckage['_id'],
                'payment_status': 'pending',
                'discount': this.discount,
                'start_date': this.model,
                'privious_membership_id': this.membershipandpayment_id,
                'oldAttedanceStatus': this.oldAttedanceStatus,
                'schedual_status': 'pending'
            };
            if (action == 'upgrade') {
                console.log(this.model, this.selectedpckage, action);
                this.memberssevice.upgradePackage(membership).subscribe(function (res) {
                    _this.redirectFunction(res, action);
                });
            }
            else if (action == 'downgrade') {
                console.log(this.model, this.selectedpckage, action);
                this.memberssevice.downgradePackage(membership).subscribe(function (res) {
                    _this.redirectFunction(res, action);
                });
            }
        }
        else {
            this.incorrectDate = true;
        }
    };
    SelectMembershipComponent.prototype.redirectFunction = function (res, action) {
        if (res['result']) {
            this.membershipandpayment_id = res['data']._id;
            this.layoutUtilsService.showActionNotification("Membership successfully is " + action + "ed", crud_1.MessageType.Create);
            this.route.navigate(['/default/members/add', this.member, 'schedule', this.selectedpckage['_id']], { queryParams: { iu: this.uk_renewPackage, 'se_id': this.membershipandpayment_id, 'date': new Date(this.model).getTime() } });
        }
        else {
            this.layoutUtilsService.showActionNotification("Sorry,Membership has not " + action + "ed try again", crud_1.MessageType.Create);
        }
    };
    SelectMembershipComponent = __decorate([
        core_1.Component({
            selector: 'kt-select-membership',
            template: __webpack_require__(/*! ./select-membership.component.html */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.html"),
            providers: [{ provide: ng_bootstrap_1.NgbDateAdapter, useClass: NgbDateNativeAdapter }],
            styles: [__webpack_require__(/*! ./select-membership.component.scss */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.scss")]
        }),
        __metadata("design:paramtypes", [club_tree_service_1.ClubTreeService,
            members_service_1.MembersService,
            crud_1.LayoutUtilsService,
            router_1.Router,
            ng_bootstrap_1.NgbDatepickerConfig,
            router_1.ActivatedRoute,
            core_1.ChangeDetectorRef,
            forms_1.FormBuilder])
    ], SelectMembershipComponent);
    return SelectMembershipComponent;
}());
exports.SelectMembershipComponent = SelectMembershipComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <div class=\"kt-portlet\">\r\n        <kt-portlet-header [title]=\"'Membership List'\" [class]=\"'kt-portlet__head--lg'\">\r\n            <ng-container ktPortletTools>\r\n              <button (click)=\"add()\"mat-raised-button color=\"primary\" matTooltip=\"Add Membership\">Add\r\n                Membership</button>\r\n              <!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n              <!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n            </ng-container>\r\n          </kt-portlet-header>\r\n       \r\n        <div class=\"kt-portlet__body\">\r\n           \r\n          <!-- start::FILTERS -->\r\n          <div class=\"kt-form__filtration\">\r\n            <div class=\"row align-items-center\">\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <input matInput placeholder=\"Search user\" [(ngModel)]=\"SearchKey\" placeholder=\"Search\"\r\n                    (keyup)=\"applyFilter()\">\r\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\"\r\n                    (click)=\"onSearchClear()\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Search</strong> in all fields\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterStatus\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"true\">Active</mat-option>\r\n                      <mat-option value=\"false\">Deactive</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by Status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterSchedual\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let value of getallschedual\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by schedual status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterPayment\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let value of getallpayment\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by Payment Status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"orderby\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option *ngFor=\"let value of oderitems\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Order By</strong>\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                      <mat-label>Select an option</mat-label>\r\n                    <mat-select [(value)]=\"order\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"-1\">Descending</mat-option>\r\n                      <mat-option value=\"1\">Ascending</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Order Type</strong>\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- end::FILTERS -->\r\n\r\n       <div class=\"kt-space-30\"></div>\r\n\r\n                <div \r\n                  *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n                   \r\n                  <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n                  this no data\r\n                  </div>\r\n                </div>\r\n                <mat-table #table [dataSource]=\"dataSource\" class=\"example-table\"\r\n                matSort matSortActive=\"increment\" matSortDisableClear matSortDirection=\"asc\"  >\r\n                  <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n                  <!-- Number Column -->\r\n                  <ng-container  matColumnDef=\"increment\">\r\n                    <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.increment }}</mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <ng-container matColumnDef=\"package_name\">\r\n                    <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\"><div style=\"margin: 0 auto;\"class=\"kt-section ml-0\">\r\n                   \r\n                        <div class=\"kt-section__content\">\r\n                        <a class=\"nounderline\" ngbPopover=\"Discount :{{row.discount}}\" triggers=\"mouseenter:mouseleave\"\r\n                            popoverTitle=\"Membership details \">\r\n                           {{row.package_name}}\r\n                        </a>\r\n                        </div>\r\n                      </div>\r\n                      \r\n                     </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"actions\" >\r\n                    <mat-header-cell *matHeaderCellDef >Actions</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">\r\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\"\r\n                        #menuTrigger=\"matMenuTrigger\" (click)=\"menuTrigger.openMenu()\">\r\n                        <mat-icon>more_vert </mat-icon>\r\n                        </button>\r\n                        <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\">\r\n                            <span (mouseleave)=\"menuTrigger.closeMenu()\">\r\n                              <button mat-menu-item>\r\n                              <mat-slide-toggle\r\n                                [checked]=\"row.status === 'true' ? true : false\"\r\n                                (change)=\"changeLablesPositions(row._id,$event)\">\r\n                              </mat-slide-toggle>\r\n                             </button>\r\n                              <button *ngIf=\"(row.package_type =='package' && row.payment_status=='complete' && row.schedual_status=='complete')\" [routerLink]=\"['/default/members/add',this.pub_key,'select']\"[queryParams]=\"{status:'renew',pe:row._id,uk:row.units_key,ed:row.end_date,mb:row.membership_id,md:row.discount,type:row.type}\" routerLinkActive=\"router-link-active\"  mat-menu-item >\r\n                                <span>Renew</span>\r\n                             </button>\r\n                             <button *ngIf=\"(row.package_type =='package' && row.payment_status=='complete' && row.schedual_status=='complete')\" [routerLink]=\"['/default/members/add',this.pub_key,'select']\"[queryParams]=\"{pe:row._id,uk:row.units_key,status:'upgrade',mb:row.membership_id,md:row.discount}\" routerLinkActive=\"router-link-active\"  mat-menu-item >\r\n                                <span>Upgrade</span>\r\n                             </button>\r\n                             <button *ngIf=\"(row.package_type =='package' && row.payment_status=='complete' && row.schedual_status=='complete')\" [routerLink]=\"['/default/members/add',this.pub_key,'select']\"[queryParams]=\"{pe:row._id,uk:row.units_key,status:'downgrade',mb:row.membership_id,md:row.discount,type:row.type}\" routerLinkActive=\"router-link-active\"  mat-menu-item >\r\n                                <span>Downgrade</span>\r\n                             </button>\r\n                            </span>\r\n                        </mat-menu>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <!-- <ng-container matColumnDef=\"status\">\r\n                      <mat-header-cell *matHeaderCellDef>status</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\">\r\n                          <mat-slide-toggle\r\n                          [checked]=\"row.status === 'true' ? true : false\"\r\n                          (change)=\"changeLablesPositions(row._id,$event)\">\r\n                      </mat-slide-toggle>\r\n                      </mat-cell>\r\n                    </ng-container> -->\r\n                  <ng-container  matColumnDef=\"schedual_status\">\r\n                      <mat-header-cell *matHeaderCellDef>Schedual\r\n                      </mat-header-cell>\r\n                      <mat-cell  *matCellDef=\"let row\">\r\n                        <span *ngIf=\"row.schedual_status=='pending'\">\r\n                          <!-- se_id mean selected package id -->\r\n                          <a (click)='accessPackageData(row)'[routerLink]=\"['/default/members/add',pub_key,'schedule',row.membership_id]\" [queryParams]=\"{'iu':row.units_key,'se_id':row._id,'date': row.start_date}\" routerLinkActive=\"router-link-active\" ><span class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--warning kt-badge--wide\">{{ row.schedual_status}}</span></a>\r\n                        </span>\r\n                        <span *ngIf=\"!(row.schedual_status=='pending' && row.schedual_status=='activity')\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">{{ row.schedual_status}}\r\n                        </span>\r\n                      </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"price\">\r\n                    <mat-header-cell *matHeaderCellDef>Price</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.fees }}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"start_date\">\r\n                    \r\n                    <mat-header-cell *matHeaderCellDef>Start Date\r\n                    </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.start_date | date }}</mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"end_date\">\r\n                    <mat-header-cell *matHeaderCellDef>End Date\r\n                    </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.end_date | date }}</mat-cell>\r\n                  </ng-container>\r\n                  <ng-container  matColumnDef=\"payment_status\">\r\n                      <mat-header-cell *matHeaderCellDef>Payment\r\n                      </mat-header-cell>\r\n                      <mat-cell  *matCellDef=\"let row\"><span *ngIf=\"row.payment_status=='pending'\"><a (click)='accessPackageData(row)'[routerLink]=\"['/default/members/add',pub_key,'payment-cart',row._id]\"  routerLinkActive=\"router-link-active\" ><span class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--warning kt-badge--wide\">{{ row.payment_status}}</span></a></span>\r\n                        <span *ngIf=\"!(row.payment_status=='pending')\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">{{ row.payment_status}}</span>\r\n                      </mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"visits\">\r\n                    <mat-header-cell *matHeaderCellDef>Visits\r\n                    </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.visits }}</mat-cell>\r\n                  </ng-container>\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumnMembership\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumnMembership;\"></mat-row>\r\n                </mat-table>\r\n                <mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [length]=\"1000\" [pageSize]=\"10\">\r\n                </mat-paginator>\r\n               </div>\r\n\r\n    </div>\r\n    <div class=\"kt-portlet\">\r\n        <kt-portlet-header [title]=\"'Benfits List'\" [class]=\"'kt-portlet__head--lg'\">\r\n         \r\n          </kt-portlet-header>\r\n        <div class=\"kt-portlet__body\">\r\n\r\n                <div class=\"example-header\">\r\n                    <mat-form-field>\r\n                      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                <div \r\n                  *ngIf=\"isLoadingResults || isRateLimitReached\">\r\n                   \r\n                  <div class=\"example-rate-limit-reached\" *ngIf=\"isRateLimitReached\">\r\n                  this no data\r\n                  </div>\r\n                </div>\r\n                <mat-table #table [dataSource]=\"dataSource\" class=\"example-table\"\r\n                matSort matSortActive=\"increment\" matSortDisableClear matSortDirection=\"asc\"    >\r\n                  <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n                  <!-- Number Column -->\r\n                  <ng-container matColumnDef=\"increment\">\r\n                    <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.increment }}</mat-cell>\r\n                  </ng-container>\r\n                  <!-- Column -->\r\n                  additional_service\r\n                  <ng-container matColumnDef=\"additional_invitation\">\r\n                    <mat-header-cell *matHeaderCellDef>Additional Invitation</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.additional_invitation}}</mat-cell>\r\n                  </ng-container>\r\n                  <!-- State Column -->\r\n                  <ng-container matColumnDef=\"additional_service\">\r\n                      <mat-header-cell *matHeaderCellDef>Additional Service</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\">{{ row.additional_service}}</mat-cell>\r\n                    </ng-container>\r\n                  <!-- Created Column -->\r\n                  <ng-container matColumnDef=\"additional_visits\">\r\n                    <mat-header-cell *matHeaderCellDef>Additional Visits\r\n                    </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.additional_visits }}</mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n\r\n\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumnBenfits\"></mat-header-row>\r\n                  <mat-row *matRowDef=\"let row; columns: displayedColumnBenfits;\"></mat-row>\r\n                </mat-table>\r\n                <mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [pageSize]=\"10\">\r\n                </mat-paginator>\r\n               </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".warn-snackbar {\n  background-color: #ff4081; }\n\n.example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n\n/* Column Widths */\n\n.mat-column {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-increment, .mat-column-package_name, .mat-column-status, .mat-column-price, .mat-column-visits, .mat-column-payment_status,\n.mat-column-actions, .mat-column-schedual_status {\n  flex: 16% 0 0 !important;\n  width: 16% !important; }\n\n.mat-column-start_date, .mat-column-end_date {\n  flex: 16% 0 0 !important;\n  width: 16% !important; }\n\n.nounderline {\n  text-decoration: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXJzaGlwLW1lbWJlci9tZW1iZXJzaGlwLWxpc3QvRTpcXEdFTUlOXFxneW1pbi0yLjAtc2Fhcy1mcm9udGVuZC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxtZW1iZXJzXFxtZW1iZXItcHJvZmlsZVxcbWVtYmVyc2hpcC1tZW1iZXJcXG1lbWJlcnNoaXAtbGlzdFxcbWVtYmVyc2hpcC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCLEVBQUE7O0FBSXpCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixRQUFRO0VBQ1IsK0JBQStCO0VBQy9CLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXBCLGtCQUFBOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUU3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBRXJCLHNCQUFzQjtFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWEsRUFBQTs7QUFHZjs7RUFHRSx3QkFBd0I7RUFDeEIscUJBQXFCLEVBQUE7O0FBRXZCO0VBRUUsd0JBQXdCO0VBQ3hCLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGdDQUNGLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tZW1iZXJzL21lbWJlci1wcm9maWxlL21lbWJlcnNoaXAtbWVtYmVyL21lbWJlcnNoaXAtbGlzdC9tZW1iZXJzaGlwLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Fybi1zbmFja2JhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xyXG59XHJcblxyXG5cclxuICAuZXhhbXBsZS10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICAuZXhhbXBsZS1sb2FkaW5nLXNoYWRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDU2cHg7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLmV4YW1wbGUtcmF0ZS1saW1pdC1yZWFjaGVkIHtcclxuICAgIGNvbG9yOiAjOTgwMDAwO1xyXG4gICAgbWF4LXdpZHRoOiAzNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLyogQ29sdW1uIFdpZHRocyAqL1xyXG4gIC5tYXQtY29sdW1uIHtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgXHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgLW1zLWh5cGhlbnM6IGF1dG87XHJcbiAgICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgICBoeXBoZW5zOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubWF0LWNvbHVtbi1pbmNyZW1lbnQsLm1hdC1jb2x1bW4tcGFja2FnZV9uYW1lLC5tYXQtY29sdW1uLXN0YXR1cywubWF0LWNvbHVtbi1wcmljZSwubWF0LWNvbHVtbi12aXNpdHMsLm1hdC1jb2x1bW4tcGF5bWVudF9zdGF0dXMsXHJcbiAgLm1hdC1jb2x1bW4tYWN0aW9ucywubWF0LWNvbHVtbi1zY2hlZHVhbF9zdGF0dXNcclxuICB7XHJcbiAgICBmbGV4OiAxNiUgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTYlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYXQtY29sdW1uLXN0YXJ0X2RhdGUsLm1hdC1jb2x1bW4tZW5kX2RhdGVcclxuICB7XHJcbiAgICBmbGV4OiAxNiUgMCAwICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTYlICFpbXBvcnRhbnQ7IFxyXG4gIH1cclxuICAubm91bmRlcmxpbmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnRcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.ts ***!
  \*******************************************************************************************************************/
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var rxjs_2 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var operators_2 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var operators_3 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var operators_4 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
//service
var members_service_1 = __webpack_require__(/*! ../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var MembershipListComponent = /** @class */ (function () {
    function MembershipListComponent(http, member, layoutUtilsService, changeDetectorRefs, config, snackBar, route, router) {
        var _this = this;
        this.http = http;
        this.member = member;
        this.layoutUtilsService = layoutUtilsService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.snackBar = snackBar;
        this.route = route;
        this.router = router;
        this.displayedColumnMembership = ['actions', 'increment', 'package_name', 'price', 'start_date', 'end_date', 'payment_status', 'visits', 'schedual_status'];
        this.displayedColumnBenfits = ['increment', 'additional_invitation', 'additional_visits', 'additional_service'];
        this.dataSource = new material_1.MatTableDataSource();
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
        this.pub_key = '';
        this.SearchKey = '';
        this.filterStatus = '';
        this.filterPayment = '';
        this.filterSchedual = '';
        this.orderby = '';
        this.order = -1;
        this.filterids = '';
        this.getallpayment = [{ key: 'Compelete', value: 'complete' }, { key: 'Pending', value: 'pending' }];
        this.getallschedual = [{ key: 'Compelete', value: 'complete' }, { key: 'Pending', value: 'pending' }];
        this.oderitems = [{ key: 'Latest', value: 'id' }, { key: 'Name', value: 'name' }, { key: 'Price', value: 'price' }, { key: 'Start date', value: 'start_date' }, { key: 'End date', value: 'end_date' }, { key: 'Type', value: 'type' }, { key: 'Status', value: 'status' },
            { key: 'Visits', value: 'visits' }, { key: 'Payment status', value: 'payment_status' }, { key: 'Schedual status', value: 'schedual_status' }];
        this.pagesize = 10;
        this.ScheduleStatus = '';
        //search
        this.search = function (text$) {
            return text$.pipe(operators_4.debounceTime(200), operators_4.distinctUntilChanged(), operators_4.map(function (term) { console.log(_this.model); }));
        };
        config.placement = 'top-right';
        config.autoClose = false;
        this.pub_key = (this.router.url.split('/'))[5];
        this.ScheduleStatus = this.route.snapshot.queryParamMap.get('status');
        this.filterids = this.route.snapshot.queryParamMap.get('ids');
        if (this.filterids == null)
            this.filterids = '';
    }
    MembershipListComponent.prototype.ngOnInit = function () {
        if (typeof this.ScheduleStatus == 'string' && this.ScheduleStatus == 'pending') {
            this.LoadMembership(1, this.pagesize, null, '', this.ScheduleStatus);
        }
        else {
            this.LoadMembership(1, this.pagesize, null);
        }
        //current member
        // this.member.currentmember.subscribe(res => this.currentMember = res)
        // If the user changes the sort order, reset back to the first page.
        //this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
        // if(this.ScheduleStatus!='null')
        // this.LoadMembership(1,this.pagesize,null,'',this.ScheduleStatus)
        // else
        this.LoadMembership(1, this.pagesize, null, '', '', '', this.filterids);
    };
    MembershipListComponent.prototype.changeLablesPositions = function (id, event) {
        var _this = this;
        if (this.checkedpermission('editmember_membership')) {
            var _title = 'User Delete';
            var _description = 'Are you sure to permanently delete this user?';
            var _waitDesciption = 'member is updating...';
            var _updateMessage_1 = "member status has been updated";
            var _failedToUpdate_1 = "sorry there is problem to update this member try again";
            var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    return;
                }
                if (event['checked']) {
                    _this.member.updateMembership(id, { 'status': true }).subscribe(function (res) {
                        if (res['result']) {
                            _this.layoutUtilsService.showActionNotification(_updateMessage_1, crud_1.MessageType.Update);
                        }
                        else {
                            _this.layoutUtilsService.showActionNotification(_failedToUpdate_1, crud_1.MessageType.Update);
                        }
                    });
                }
                else {
                    _this.member.updateMembership(id, { 'status': false }).subscribe(function (res) {
                        if (res['result']) {
                            _this.layoutUtilsService.showActionNotification(_updateMessage_1, crud_1.MessageType.Update);
                        }
                        else {
                            _this.layoutUtilsService.showActionNotification(_failedToUpdate_1, crud_1.MessageType.Update);
                        }
                    });
                }
            });
        }
        else {
            this.open();
        }
    };
    MembershipListComponent.prototype.onSearchClear = function () {
        this.SearchKey = "";
        this.applyFilter();
    };
    /*
    *
    *
    */
    //method to  search online
    MembershipListComponent.prototype.applyFilter = function (orderby) {
        if (orderby === void 0) { orderby = ''; }
        if (this.SearchKey && this.SearchKey.length > 0)
            var search = this.SearchKey.trim().toLowerCase();
        else
            var search = '';
        if (this.filterStatus && this.filterStatus.length > 0)
            var status = this.filterStatus;
        else
            status = '';
        if (this.filterSchedual && this.filterSchedual.length > 0)
            var schedual = this.filterSchedual;
        else
            schedual = '';
        if (this.filterPayment && this.filterPayment.length > 0)
            var payment = this.filterPayment;
        else
            payment = '';
        this.LoadMembership(null, null, search, status, schedual, payment, this.filterids, this.orderby, this.order);
    };
    MembershipListComponent.prototype.LoadMembership = function (page, perpage, search, status, schedual, payment, ids, orderby, order) {
        var _this = this;
        if (search === void 0) { search = ''; }
        if (status === void 0) { status = ''; }
        if (schedual === void 0) { schedual = ''; }
        if (payment === void 0) { payment = ''; }
        if (ids === void 0) { ids = ''; }
        if (orderby === void 0) { orderby = ''; }
        if (order === void 0) { order = -1; }
        if (this.checkedpermission('getmember_membership')) {
            if (this.sort && this.paginator) {
                rxjs_1.merge(this.sort.sortChange, this.paginator.page)
                    .pipe(operators_2.startWith({}), operators_3.switchMap(function () {
                    _this.isLoadingResults = true;
                    if (_this.pub_key)
                        return _this.member.getMembership(_this.pub_key, page, perpage, search, status, schedual, payment, ids, orderby, order);
                }), operators_4.map(function (res) {
                    console.log(res);
                    // Flip flag to show that loading has finished.
                    _this.isLoadingResults = false;
                    _this.isRateLimitReached = false;
                    _this.resultsLength = res['data'].length;
                    return res;
                }), operators_1.catchError(function () {
                    _this.isLoadingResults = false;
                    _this.isRateLimitReached = true;
                    return rxjs_2.of([]);
                })).subscribe(function (data) {
                    if (data['result'])
                        _this.dataSource.data = data['data'];
                    if (data['data'] && data['data'].length > 0)
                        _this.length = data['data'].length;
                    _this.changeDetectorRefs.detectChanges();
                    console.log(data, _this.length);
                });
            }
        }
        else {
            this.isLoadingResults = false;
            this.isRateLimitReached = true;
            return rxjs_2.of([]);
        }
    };
    //access data of Membership
    MembershipListComponent.prototype.accessPackageData = function (membership) {
        var _this = this;
        if (this.checkedpermission('getmembership')) {
            this.member.getPackageBYId(membership['membership_id']).subscribe(function (res) {
                if (res['result'])
                    _this.member.DataOfPackage(res['data'][0]);
            });
        }
    };
    MembershipListComponent.prototype.confirmRenew = function (row) {
        this.router.navigate(['/default/members/add', this.pub_key, 'select'], { queryParams: { status: 'renew', rp: row._id } });
    };
    MembershipListComponent.prototype.nextPage = function (event) {
        console.log(event);
        if (typeof this.ScheduleStatus == 'string' && this.ScheduleStatus == 'pending') {
            this.LoadMembership(event.pageIndex + 1, event.pageSize, null, '', this.ScheduleStatus);
        }
        else {
            this.LoadMembership(event.pageIndex + 1, event.pageSize, null);
        }
    };
    //permissions
    MembershipListComponent.prototype.checkedpermission = function (key) {
        var checked = false;
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))) {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user['allPrivilidge']) {
                    var privilidge_1 = user['allPrivilidge'];
                    Object.keys(privilidge_1).forEach(function (role) {
                        Object.keys(privilidge_1[role]).forEach(function (pri) {
                            var per = (privilidge_1[role][pri].toString()).trim();
                            if (key.trim() == per) {
                                checked = true;
                            }
                        });
                    });
                }
            }
        }
        return checked;
    };
    //alert
    MembershipListComponent.prototype.open = function () {
        var message = 'Oh Snap ! You dont have permission to get this data';
        var actionButtonLabel = '';
        var action = true;
        var setAutoHide = true;
        var autoHide = 4000;
        var horizontalPosition = 'center';
        var verticalPosition = 'top';
        var addExtraClass = false;
        var config = new material_2.MatSnackBarConfig();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = setAutoHide ? autoHide : 0;
        //  config['extraClasses'] = addExtraClass ? ['warn-snackbar'] : undefined;
        config.panelClass = ['warn-snackbar'];
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    };
    MembershipListComponent.prototype.add = function () {
        if (this.checkedpermission('addmember_membership')) {
            this.router.navigate(['/default/members/add', this.pub_key, 'select']);
        }
        else {
            this.open();
        }
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], MembershipListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], MembershipListComponent.prototype, "sort", void 0);
    MembershipListComponent = __decorate([
        core_1.Component({
            selector: 'kt-membership-list',
            template: __webpack_require__(/*! ./membership-list.component.html */ "./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./membership-list.component.scss */ "./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, members_service_1.MembersService,
            crud_1.LayoutUtilsService,
            core_1.ChangeDetectorRef,
            ng_bootstrap_1.NgbDropdownConfig,
            material_2.MatSnackBar,
            router_1.ActivatedRoute,
            router_1.Router])
    ], MembershipListComponent);
    return MembershipListComponent;
}());
exports.MembershipListComponent = MembershipListComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/membership-member.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/membership-member.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/membership-member.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/membership-member.component.scss ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  position: relative; }\n\n.example-header {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.example-rate-limit-reached {\n  color: #980000;\n  max-width: 360px;\n  text-align: center; }\n\n/* Column Widths */\n\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px; }\n\n.mat-column-start_date, .mat-column-end_date {\n  max-width: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXJzaGlwLW1lbWJlci9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG1lbWJlcnNcXG1lbWJlci1wcm9maWxlXFxtZW1iZXJzaGlwLW1lbWJlclxcbWVtYmVyc2hpcC1tZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFcEIsa0JBQUE7O0FBQ0E7O0VBRUUsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9tZW1iZXJzaGlwLW1lbWJlci9tZW1iZXJzaGlwLW1lbWJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmV4YW1wbGUtaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtdGFibGUge1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtbG9hZGluZy1zaGFkZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiA1NnB4O1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5leGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZCB7XHJcbiAgICBjb2xvcjogIzk4MDAwMDtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC8qIENvbHVtbiBXaWR0aHMgKi9cclxuICAubWF0LWNvbHVtbi1udW1iZXIsXHJcbiAgLm1hdC1jb2x1bW4tc3RhdGUge1xyXG4gICAgbWF4LXdpZHRoOiA2NHB4O1xyXG4gIH1cclxuICAubWF0LWNvbHVtbi1zdGFydF9kYXRlLC5tYXQtY29sdW1uLWVuZF9kYXRlIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/membership-member/membership-member.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/membership-member/membership-member.component.ts ***!
  \*****************************************************************************************************/
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
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
//service
var members_service_1 = __webpack_require__(/*! ../../members.service */ "./src/app/views/pages/members/members.service.ts");
var MembershipMemberComponent = /** @class */ (function () {
    function MembershipMemberComponent(http, member, layoutUtilsService, changeDetectorRefs) {
        this.http = http;
        this.member = member;
        this.layoutUtilsService = layoutUtilsService;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = ['increment', 'package_name', 'price', 'start_date', 'end_date', 'visits', 'status'];
        this.dataSource = new material_1.MatTableDataSource();
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    MembershipMemberComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], MembershipMemberComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild(material_1.MatSort),
        __metadata("design:type", material_1.MatSort)
    ], MembershipMemberComponent.prototype, "sort", void 0);
    MembershipMemberComponent = __decorate([
        core_1.Component({
            selector: 'kt-membership-member',
            template: __webpack_require__(/*! ./membership-member.component.html */ "./src/app/views/pages/members/member-profile/membership-member/membership-member.component.html"),
            styles: [__webpack_require__(/*! ./membership-member.component.scss */ "./src/app/views/pages/members/member-profile/membership-member/membership-member.component.scss")]
        }),
        __metadata("design:paramtypes", [http_1.HttpClient, members_service_1.MembersService,
            crud_1.LayoutUtilsService,
            core_1.ChangeDetectorRef])
    ], MembershipMemberComponent);
    return MembershipMemberComponent;
}());
exports.MembershipMemberComponent = MembershipMemberComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/payments-member/payments-member.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/payments-member/payments-member.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-xl-12\">\r\n    <div class=\"kt-portlet\">\r\n        <div class=\"kt-portlet__body\">\r\n          <!-- start::FILTERS -->\r\n          <div class=\"kt-form__filtration\">\r\n            <div class=\"row align-items-center\">\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <input matInput placeholder=\"Search user\" [(ngModel)]=\"SearchKey\" placeholder=\"Search\"\r\n                    (keyup)=\"applyFilter()\">\r\n                  <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\"\r\n                    (click)=\"onSearchClear()\">\r\n                    <mat-icon>close</mat-icon>\r\n                  </button>\r\n                  <mat-hint align=\"start\">\r\n                    <strong>Search</strong> in all fields\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <!-- <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterStatus\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"true\">Active</mat-option>\r\n                      <mat-option value=\"false\">Deactive</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by Status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div> -->\r\n\r\n              <!-- <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterSchedual\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let value of getallschedual\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by schedual status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div> -->\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"filterPayment\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let value of getallpayment\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Filter</strong> by Payment Status\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"orderby\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option *ngFor=\"let value of oderitems\"  [value]=\"value.value\">\r\n                        {{value.key}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Order By</strong>\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n                <div class=\"kt-form__control\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                    <mat-select [(value)]=\"order\" (selectionChange)=\"applyFilter()\">\r\n                      <mat-option value=\"-1\">DESC</mat-option>\r\n                      <mat-option value=\"1\">ASC</mat-option>\r\n                    </mat-select>\r\n                    <mat-hint align=\"start\">\r\n                      <strong>Order Type</strong>\r\n                    </mat-hint>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n          <!-- end::FILTERS -->\r\n            <div class=\"col-md-3 kt-margin-bottom-20-mobile\">\r\n\r\n              </div>\r\n                <mat-table #table [dataSource]=\"dataSource\" class=\"example-table\" >\r\n                  <!--- Note that these columns can be defined in any order.\r\n                  The actual rendered columns are set as a property on the row definition\" -->\r\n                  <!-- Number Column -->\r\n                  <ng-container  matColumnDef=\"increment\">\r\n                    <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.increment }}</mat-cell>\r\n                  </ng-container>\r\n\r\n\r\n                  <ng-container matColumnDef=\"package_name\">\r\n                    <mat-header-cell *matHeaderCellDef>name</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.package_name}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"price\">\r\n                      <mat-header-cell *matHeaderCellDef>Price</mat-header-cell>\r\n                      <mat-cell *matCellDef=\"let row\">\r\n                        {{ row.fees }}\r\n                      </mat-cell>\r\n                    </ng-container>\r\n                  <ng-container matColumnDef=\"payment_date\">\r\n                    <mat-header-cell *matHeaderCellDef>PaymentDate</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.payment_date | date}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"payment_method\">\r\n                    <mat-header-cell *matHeaderCellDef>PaymentMethod\r\n                    </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">{{ row.payment_method}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container  matColumnDef=\"payment_status\">\r\n                      <mat-header-cell *matHeaderCellDef>Payment\r\n                      </mat-header-cell>\r\n                      <mat-cell  *matCellDef=\"let row\"><span *ngIf=\"row.payment_status=='pending'\"><a  [routerLink]=\"['/default/members/add',pub_key,'payment-cart',row._id]\"  routerLinkActive=\"router-link-active\" ><span class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--warning kt-badge--wide\">{{ row.payment_status}}</span></a></span>\r\n                        <span *ngIf=\"!(row.payment_status=='pending')\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">{{ row.payment_status}}</span>\r\n                      </mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"Action\">\r\n                    <mat-header-cell *matHeaderCellDef> &nbsp;&nbsp; Action\r\n                    </mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let row\">\r\n                        <button  mat-icon-button color=\"primary\" (click)=\"previewInvoice(row)\">\r\n                            <i class=\"fas fa-file-download\"></i>\r\n                        </button>\r\n                      <button  mat-icon-button color=\"primary\" (click)=\"previewInvoice(row)\">\r\n                        <mat-icon>visibility</mat-icon>\r\n                      </button>\r\n                    </mat-cell>\r\n                  </ng-container>\r\n                  <mat-header-row *matHeaderRowDef=\"displayedColumns \"></mat-header-row>\r\n                  <mat-row  *matRowDef=\"let row; columns: displayedColumns ;\"></mat-row>\r\n                </mat-table>\r\n                <mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [length]=\"1000\" [pageSize]=\"10\">\r\n                </mat-paginator>\r\n               </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/payments-member/payments-member.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/payments-member/payments-member.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-table {\n  overflow: auto;\n  min-height: 300px; }\n\n.warn-snackbar {\n  background-color: #ff4081; }\n\n/* Column Widths */\n\n.mat-column {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-payment_date, .mat-column-payment_method, .mat-column-payment_status, .mat-column-Action, .mat-column-payment_date {\n  flex: 18% 0 0 !important;\n  width: 18% !important; }\n\n.mat-column-increment,\n.mat-column-package_name,\n.mat-column-price {\n  flex: 10% 0 0 !important;\n  width: 10% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9wYXltZW50cy1tZW1iZXIvRTpcXEdFTUlOXFxneW1pbi0yLjAtc2Fhcy1mcm9udGVuZC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxtZW1iZXJzXFxtZW1iZXItcHJvZmlsZVxccGF5bWVudHMtbWVtYmVyXFxwYXltZW50cy1tZW1iZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCLEVBQUE7O0FBR3pCLGtCQUFBOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUU3Qix5QkFBeUI7RUFDekIscUJBQXFCO0VBRXJCLHNCQUFzQjtFQUV0QixpQkFBaUI7RUFFakIscUJBQXFCO0VBQ3JCLGFBQWEsRUFBQTs7QUFFakI7RUFFSSx3QkFBd0I7RUFDeEIscUJBQXFCLEVBQUE7O0FBRXZCOzs7RUFLRSx3QkFBd0I7RUFDeEIscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tZW1iZXJzL21lbWJlci1wcm9maWxlL3BheW1lbnRzLW1lbWJlci9wYXltZW50cy1tZW1iZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10YWJsZSB7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxuICBcclxuLndhcm4tc25hY2tiYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxufVxyXG4gIFxyXG4gIC8qIENvbHVtbiBXaWR0aHMgKi9cclxuICAubWF0LWNvbHVtbiB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIFxyXG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBcclxuICAgIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLW1vei1oeXBoZW5zOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gICAgaHlwaGVuczogYXV0bztcclxuICB9XHJcbi5tYXQtY29sdW1uLXBheW1lbnRfZGF0ZSwubWF0LWNvbHVtbi1wYXltZW50X21ldGhvZCwubWF0LWNvbHVtbi1wYXltZW50X3N0YXR1cywubWF0LWNvbHVtbi1BY3Rpb24sLm1hdC1jb2x1bW4tcGF5bWVudF9kYXRlXHJcbiAge1xyXG4gICAgZmxleDogMTglIDAgMCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE4JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LWNvbHVtbi1pbmNyZW1lbnQsXHJcbiAgLm1hdC1jb2x1bW4tcGFja2FnZV9uYW1lLFxyXG4gIC5tYXQtY29sdW1uLXByaWNlXHJcblxyXG4gIHtcclxuICAgIGZsZXg6IDEwJSAwIDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMCUgIWltcG9ydGFudDsgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/payments-member/payments-member.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/payments-member/payments-member.component.ts ***!
  \*************************************************************************************************/
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
var members_service_1 = __webpack_require__(/*! ../../members.service */ "./src/app/views/pages/members/members.service.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var receipt_dialog_component_1 = __webpack_require__(/*! ./receipt-dialog/receipt-dialog.component */ "./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var material_3 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var PaymentsMemberComponent = /** @class */ (function () {
    function PaymentsMemberComponent(memberservice, changeDetectRef, dialog, snackBar, router, route) {
        this.memberservice = memberservice;
        this.changeDetectRef = changeDetectRef;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.route = route;
        this.SearchKey = '';
        this.filterStatus = '';
        this.filterPayment = '';
        this.filterSchedual = '';
        this.orderby = '';
        this.order = -1;
        this.displayedColumns = ['increment', 'package_name', 'price', 'payment_date', 'payment_method', 'payment_status', 'Action'];
        this.dataSource = new material_1.MatTableDataSource();
        this.getallpayment = [{ key: 'Compelete', value: 'complete' }, { key: 'Pending', value: 'pending' }];
        this.oderitems = [{ key: 'Latest', value: 'id' }, { key: 'Name', value: 'name' }, { key: 'Price', value: 'price' }, { key: 'Payment Date', value: 'payment_date' },
            { key: 'Payment method', value: 'payment_method' }, { key: 'Payment status', value: 'payment_status' }];
        this.statusPayment = '';
        this.pub_key = (this.router.url.split('/'))[5];
        console.log(this.pub_key);
        this.statusPayment = this.route.snapshot.queryParamMap.get('status');
    }
    PaymentsMemberComponent.prototype.ngOnInit = function () {
        // this.memberservice.currentmember.subscribe(res => {
        //   this.member = res
        // })
        if (typeof this.statusPayment == 'string')
            this.loadPayment(null, null, '', status, '', this.statusPayment, this.orderby, this.order);
        else
            this.loadPayment(null, null, '', status, '', '', this.orderby, this.order);
    };
    PaymentsMemberComponent.prototype.previewInvoice = function (membership) {
        var dialogRef = this.dialog.open(receipt_dialog_component_1.ReceiptDialogComponent, {
            data: { membership: membership }, autoFocus: false,
            panelClass: 'trend-dialog',
            height: window.innerHeight + 'px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    PaymentsMemberComponent.prototype.onSearchClear = function () {
        this.SearchKey = "";
        this.applyFilter();
    };
    /*
    *
    *
    */
    //method to  search online
    PaymentsMemberComponent.prototype.applyFilter = function (orderby) {
        if (orderby === void 0) { orderby = ''; }
        if (this.SearchKey && this.SearchKey.length > 0)
            var search = this.SearchKey.trim().toLowerCase();
        else
            var search = '';
        if (this.filterStatus && this.filterStatus.length > 0)
            var status = this.filterStatus;
        else
            status = '';
        if (this.filterSchedual && this.filterSchedual.length > 0)
            var schedual = this.filterSchedual;
        else
            schedual = '';
        if (this.filterPayment && this.filterPayment.length > 0)
            var payment = this.filterPayment;
        else
            payment = '';
        this.loadPayment(null, null, search, status, schedual, payment, this.orderby, this.order);
    };
    PaymentsMemberComponent.prototype.loadPayment = function (pages, perpage, search, status, schedual, payment, orderby, order) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (perpage === void 0) { perpage = 10; }
        if (search === void 0) { search = null; }
        if (status === void 0) { status = ''; }
        if (schedual === void 0) { schedual = ''; }
        if (payment === void 0) { payment = ''; }
        if (orderby === void 0) { orderby = ''; }
        if (order === void 0) { order = -1; }
        if (this.checkedpermission('getmember_membership')) {
            if (this.pub_key) {
                this.memberservice.getMembership(this.pub_key, pages, perpage, search, status, schedual, payment, '', orderby, order).subscribe(function (res) {
                    console.log(res['data']);
                    if (res['result']) {
                        _this.dataSource.data = res['data'];
                        console.log(res['data']);
                        _this.changeDetectRef.detectChanges();
                    }
                });
            }
        }
    };
    PaymentsMemberComponent.prototype.nextPage = function (event, serviclo) {
        if (serviclo === void 0) { serviclo = ''; }
        console.log(event);
        if (typeof this.statusPayment == 'string')
            this.loadPayment(event.pageIndex + 1, event.pageSize, null, status, '', this.statusPayment, this.orderby, this.order);
        else
            this.loadPayment(event.pageIndex + 1, event.pageSize, null, status, '', '', this.orderby, this.order);
    };
    //permission
    PaymentsMemberComponent.prototype.checkedpermission = function (key) {
        var checked = false;
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))) {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user['allPrivilidge']) {
                    var privilidge_1 = user['allPrivilidge'];
                    Object.keys(privilidge_1).forEach(function (role) {
                        Object.keys(privilidge_1[role]).forEach(function (pri) {
                            var per = (privilidge_1[role][pri].toString()).trim();
                            if (key.trim() == per) {
                                checked = true;
                            }
                        });
                    });
                }
            }
        }
        return checked;
    };
    PaymentsMemberComponent = __decorate([
        core_1.Component({
            selector: 'kt-payments-member',
            template: __webpack_require__(/*! ./payments-member.component.html */ "./src/app/views/pages/members/member-profile/payments-member/payments-member.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./payments-member.component.scss */ "./src/app/views/pages/members/member-profile/payments-member/payments-member.component.scss")]
        }),
        __metadata("design:paramtypes", [members_service_1.MembersService,
            core_1.ChangeDetectorRef,
            material_2.MatDialog,
            material_3.MatSnackBar,
            router_1.Router,
            router_1.ActivatedRoute])
    ], PaymentsMemberComponent);
    return PaymentsMemberComponent;
}());
exports.PaymentsMemberComponent = PaymentsMemberComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\r\n    <div class=\"kt-portlet__body kt-portlet__body--fit\">\r\n        <div class=\"kt-invoice-2\">\r\n            <div class=\"kt-invoice__wrapper\">\r\n                <div class=\"kt-invoice__head\">\r\n                    <div class=\"kt-invoice__container kt-invoice__container--centered\">\r\n                        <div class=\"kt-invoice__logo\">\r\n                            <a href=\"#\">\r\n                                <h1>INVOICE</h1>\r\n                            </a>\r\n                            <a href=\"#\">\r\n                                <img src=\"../assets/media/company-logos/logo_client_color.png\">\r\n                            </a>\r\n                        </div>\r\n                        <span class=\"kt-invoice__desc\">\r\n                            <span>Cecilia Chapman, 711-2880 Nulla St, Mankato</span>\r\n                            <span>Mississippi 96522</span>\r\n                        </span>\r\n                        <div class=\"kt-invoice__items\">\r\n                            <div class=\"kt-invoice__item\">\r\n                                <span class=\"kt-invoice__subtitle\">DATA</span>\r\n                                <span class=\"kt-invoice__text\">{{date}}</span>\r\n                            </div>\r\n                            <div class=\"kt-invoice__item\">\r\n                                <span class=\"kt-invoice__subtitle\">INVOICE NO.</span>\r\n                                <span class=\"kt-invoice__text\">GS 000014</span>\r\n                            </div>\r\n                            <div class=\"kt-invoice__item\">\r\n                                <span class=\"kt-invoice__subtitle\">INVOICE TO.</span>\r\n                                <span class=\"kt-invoice__text\" *ngIf=\"member\">{{member.name}}\r\n                                    {{member.email}}<br>{{member.addressLine}}</span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"kt-invoice__body kt-invoice__body--centered\">\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>DESCRIPTION</th>\r\n                                    <th>TAXS</th>\r\n                                    <th>DISCOUNT</th>\r\n                                    <th>PRICE</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>{{data.discriptions}}</td>\r\n                                    <td>{{data.discount}}</td>\r\n                                    <td>{{data.discount}}</td>\r\n                                    <td class=\"kt-font-danger\">{{data.price}}</td>\r\n                                </tr>\r\n\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"kt-invoice__footer\">\r\n                    <div class=\"kt-invoice__table  kt-invoice__table--centered table-responsive\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>PAYMENT METHOD</th>\r\n                                    <th>PAYMENT STRATEGY</th>\r\n                                    <th>DUE DATE</th>\r\n                                    <th>TOTAL AMOUNT</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>{{data.payment_method}}</td>\r\n                                    <td>{{data.payment_startegy}}</td>\r\n                                    <td>{{data.payment_date}}</td>\r\n                                    <td class=\"kt-font-danger\">{{data.fees}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.scss ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container {\n  padding: 0; }\n\n.kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container.kt-invoice__container--centered {\n  width: 100%; }\n\n.kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__body {\n  padding: 2rem 0 0 0; }\n\n.kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__body.kt-invoice__body--centered {\n  width: 100%; }\n\n.kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table {\n  padding: 0; }\n\n.kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table.kt-invoice__table--centered {\n  width: 100%; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container {\n  padding: 0 5rem 0 5rem; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container.kt-invoice__container--centered {\n  width: 70%;\n  margin: 0 auto;\n  padding: 0; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 10rem; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a {\n  text-decoration: none; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a > h1 {\n  font-weight: 700;\n  font-size: 2.7rem;\n  color: #6c7293; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a:last-child {\n  text-align: right; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__desc {\n  text-align: right;\n  display: block;\n  padding: 1rem 0 4rem 0;\n  font-weight: 400;\n  color: #6c7293;\n  font-size: 1.1rem; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__desc > span {\n  display: block; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items {\n  display: flex;\n  padding: 6rem 0 3rem 0;\n  border-top: 1px solid #ebedf2; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item {\n  flex: 1;\n  overflow: hidden; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item .kt-invoice__subtitle {\n  font-weight: 600;\n  padding-bottom: 0.5rem;\n  color: #6c7293; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item .kt-invoice__text {\n  color: #a7abc3;\n  font-weight: 400; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item > span {\n  display: block; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body {\n  padding: 2rem 5rem 0 5rem; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body.kt-invoice__body--centered {\n  width: 70%;\n  margin: 0 auto;\n  padding: 2rem 0 0 0; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table thead tr th {\n  padding: 1rem 0 0.5rem 0;\n  border-top: none;\n  color: #a7abc3;\n  font-weight: 500; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table thead tr th:not(:first-child) {\n  text-align: right; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table tbody tr td {\n  padding: 1rem 0 1rem 0;\n  vertical-align: middle;\n  border-top: none;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #6c7293; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table tbody tr td:not(:first-child) {\n  text-align: right; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table tbody tr:first-child td {\n  padding-top: 1.8rem; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer {\n  margin-top: 9rem;\n  padding: 5rem 0 7rem 0;\n  background-color: #f7f8fa; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table {\n  padding: 0 5rem 0 5rem; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table.kt-invoice__table--centered {\n  width: 70%;\n  margin: 0 auto;\n  padding: 0; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table table thead tr th {\n  padding: 1rem 0 0.5rem 0;\n  border-top: none;\n  color: #a7abc3;\n  border-bottom: 1px solid #ebedf2;\n  font-weight: 600; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table table thead tr th:last-child {\n  text-align: right; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table table tbody tr td {\n  padding: 1.8rem 0 0 0;\n  vertical-align: middle;\n  border-top: none;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #6c7293; }\n\n.kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table table tbody tr td:last-child {\n  text-align: right;\n  font-size: 1.8rem;\n  padding-top: 1rem; }\n\n@media (max-width: 768px) {\n  .kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container {\n    padding: 0; }\n  .kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container.kt-invoice__container--centered {\n    width: 100%;\n    padding: 0; }\n  .kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__body {\n    padding: 2rem 0 0 0; }\n  .kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__body.kt-invoice__body--centered {\n    width: 100%;\n    padding: 0; }\n  .kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__footer {\n    padding: 3rem 0 4rem 0; }\n  .kt-invoice-2.kt-invoice-2--fit .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table.kt-invoice__table--centered {\n    width: 100%; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container {\n    width: 100% !important;\n    padding: 0 2rem 0 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container.kt-invoice__container--centered {\n    padding: 0 2rem 0 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo {\n    padding-top: 4rem;\n    display: flex;\n    flex-direction: column; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a {\n    width: 100%;\n    display: block; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__logo > a:last-child {\n    padding-top: 1rem;\n    text-align: left; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__desc {\n    text-align: left;\n    padding-bottom: 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items {\n    padding: 2rem 0 2rem 0;\n    display: flex;\n    flex-direction: column; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item {\n    width: 100%;\n    display: block;\n    padding-bottom: 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__head .kt-invoice__container .kt-invoice__items .kt-invoice__item:not(:first-child) {\n    padding-left: 0; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body {\n    width: 100% !important;\n    padding: 0 2rem 0 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body.kt-invoice__body--centered {\n    padding: 0 2rem 0 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table thead tr th:not(:first-child) {\n    padding-right: 1.5rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table thead tr th:last-child {\n    padding-right: 0; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table tbody tr td:not(:first-child) {\n    padding-right: 1.5rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__body table tbody tr td:last-child {\n    padding-right: 0; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer {\n    margin-top: 4rem;\n    padding: 3rem 2rem 4rem 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table.kt-invoice__table--centered {\n    width: 100%; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table table thead tr th:not(:first-child) {\n    padding-left: 2rem; }\n  .kt-invoice-2 .kt-invoice__wrapper .kt-invoice__footer .kt-invoice__table table tbody tr td:not(:first-child) {\n    padding-left: 2rem; } }\n\n.trend-dialog .mat-dialog-container {\n  overflow-y: hidden !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9wYXltZW50cy1tZW1iZXIvcmVjZWlwdC1kaWFsb2cvRTpcXEdFTUlOXFxneW1pbi0yLjAtc2Fhcy1mcm9udGVuZC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxtZW1iZXJzXFxtZW1iZXItcHJvZmlsZVxccGF5bWVudHMtbWVtYmVyXFxyZWNlaXB0LWRpYWxvZ1xccmVjZWlwdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBOEYsVUFBUyxFQUFBOztBQUFDO0VBQThILFdBQVUsRUFBQTs7QUFBQztFQUF1RSxtQkFBa0IsRUFBQTs7QUFBQztFQUFrRyxXQUFVLEVBQUE7O0FBQUM7RUFBNEYsVUFBUyxFQUFBOztBQUFDO0VBQXdILFdBQVUsRUFBQTs7QUFBQztFQUE0RSxzQkFBcUIsRUFBQTs7QUFBQztFQUE0RyxVQUFTO0VBQUMsY0FBYTtFQUFDLFVBQVMsRUFBQTs7QUFBQztFQUFzSSxhQUFZO0VBQWdELDhCQUE2QjtFQUFDLGtCQUFpQixFQUFBOztBQUFDO0VBQWdHLHFCQUFvQixFQUFBOztBQUFDO0VBQW1HLGdCQUFlO0VBQUMsaUJBQWdCO0VBQUMsY0FBYSxFQUFBOztBQUFDO0VBQTJHLGlCQUFnQixFQUFBOztBQUFDO0VBQThGLGlCQUFnQjtFQUFDLGNBQWE7RUFBQyxzQkFBcUI7RUFBQyxnQkFBZTtFQUFDLGNBQWE7RUFBQyxpQkFBZ0IsRUFBQTs7QUFBQztFQUFtRyxjQUFhLEVBQUE7O0FBQUM7RUFBdUksYUFBWTtFQUFDLHNCQUFxQjtFQUFDLDZCQUE0QixFQUFBOztBQUFDO0VBQStJLE9BQU07RUFBQyxnQkFBZSxFQUFBOztBQUFDO0VBQXVJLGdCQUFlO0VBQUMsc0JBQXFCO0VBQUMsY0FBYSxFQUFBOztBQUFDO0VBQW1JLGNBQWE7RUFBQyxnQkFBZSxFQUFBOztBQUFDO0VBQXNILGNBQWEsRUFBQTs7QUFBQztFQUFxRCx5QkFBd0IsRUFBQTs7QUFBQztFQUFnRixVQUFTO0VBQUMsY0FBYTtFQUFDLG1CQUFrQixFQUFBOztBQUFDO0VBQXVFLHdCQUF1QjtFQUFDLGdCQUFlO0VBQUMsY0FBYTtFQUFDLGdCQUFlLEVBQUE7O0FBQUM7RUFBeUYsaUJBQWdCLEVBQUE7O0FBQUM7RUFBdUUsc0JBQXFCO0VBQUMsc0JBQXFCO0VBQUMsZ0JBQWU7RUFBQyxnQkFBZTtFQUFDLGlCQUFnQjtFQUFDLGNBQWEsRUFBQTs7QUFBQztFQUF5RixpQkFBZ0IsRUFBQTs7QUFBQztFQUFtRixtQkFBa0IsRUFBQTs7QUFBQztFQUF1RCxnQkFBZTtFQUFDLHNCQUFxQjtFQUFDLHlCQUF3QixFQUFBOztBQUFDO0VBQTBFLHNCQUFxQixFQUFBOztBQUFDO0VBQXNHLFVBQVM7RUFBQyxjQUFhO0VBQUMsVUFBUyxFQUFBOztBQUFDO0VBQTRGLHdCQUF1QjtFQUFDLGdCQUFlO0VBQUMsY0FBYTtFQUFDLGdDQUErQjtFQUFDLGdCQUFlLEVBQUE7O0FBQUM7RUFBdUcsaUJBQWdCLEVBQUE7O0FBQUM7RUFBNEYscUJBQW9CO0VBQUMsc0JBQXFCO0VBQUMsZ0JBQWU7RUFBQyxnQkFBZTtFQUFDLGlCQUFnQjtFQUFDLGNBQWEsRUFBQTs7QUFBQztFQUF1RyxpQkFBZ0I7RUFBQyxpQkFBZ0I7RUFBQyxpQkFBZ0IsRUFBQTs7QUFBQztFQUEwQjtJQUE4RixVQUFTLEVBQUE7RUFBQztJQUE4SCxXQUFVO0lBQUMsVUFBUyxFQUFBO0VBQUM7SUFBdUUsbUJBQWtCLEVBQUE7RUFBQztJQUFrRyxXQUFVO0lBQUMsVUFBUyxFQUFBO0VBQUM7SUFBeUUsc0JBQXFCLEVBQUE7RUFBQztJQUF3SCxXQUFVLEVBQUE7RUFBQztJQUE0RSxzQkFBcUI7SUFBQyxzQkFBcUIsRUFBQTtFQUFDO0lBQTRHLHNCQUFxQixFQUFBO0VBQUM7SUFBOEYsaUJBQWdCO0lBQXlDLGFBQVk7SUFBb0Ysc0JBQXFCLEVBQUE7RUFBQztJQUFnRyxXQUFVO0lBQUMsY0FBYSxFQUFBO0VBQUM7SUFBMkcsaUJBQWdCO0lBQUMsZ0JBQWUsRUFBQTtFQUFDO0lBQThGLGdCQUFlO0lBQUMsb0JBQW1CLEVBQUE7RUFBQztJQUErRixzQkFBcUI7SUFBeUMsYUFBWTtJQUFvRixzQkFBcUIsRUFBQTtFQUFDO0lBQWlILFdBQVU7SUFBQyxjQUFhO0lBQUMsb0JBQW1CLEVBQUE7RUFBQztJQUFtSSxlQUFjLEVBQUE7RUFBQztJQUFxRCxzQkFBcUI7SUFBQyxzQkFBcUIsRUFBQTtFQUFDO0lBQWdGLHNCQUFxQixFQUFBO0VBQUM7SUFBeUYscUJBQW9CLEVBQUE7RUFBQztJQUFrRixnQkFBZSxFQUFBO0VBQUM7SUFBeUYscUJBQW9CLEVBQUE7RUFBQztJQUFrRixnQkFBZSxFQUFBO0VBQUM7SUFBdUQsZ0JBQWU7SUFBQyw0QkFBMkIsRUFBQTtFQUFDO0lBQXNHLFdBQVUsRUFBQTtFQUFDO0lBQThHLGtCQUFpQixFQUFBO0VBQUM7SUFBOEcsa0JBQWlCLEVBQUEsRUFBRTs7QUFDcnBQO0VBQ0ksNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tZW1iZXJzL21lbWJlci1wcm9maWxlL3BheW1lbnRzLW1lbWJlci9yZWNlaXB0LWRpYWxvZy9yZWNlaXB0LWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5rdC1pbnZvaWNlLTIua3QtaW52b2ljZS0yLS1maXQgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lcntwYWRkaW5nOjB9Lmt0LWludm9pY2UtMi5rdC1pbnZvaWNlLTItLWZpdCAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyLmt0LWludm9pY2VfX2NvbnRhaW5lci0tY2VudGVyZWR7d2lkdGg6MTAwJX0ua3QtaW52b2ljZS0yLmt0LWludm9pY2UtMi0tZml0IC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5e3BhZGRpbmc6MnJlbSAwIDAgMH0ua3QtaW52b2ljZS0yLmt0LWludm9pY2UtMi0tZml0IC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5Lmt0LWludm9pY2VfX2JvZHktLWNlbnRlcmVke3dpZHRoOjEwMCV9Lmt0LWludm9pY2UtMi5rdC1pbnZvaWNlLTItLWZpdCAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX190YWJsZXtwYWRkaW5nOjB9Lmt0LWludm9pY2UtMi5rdC1pbnZvaWNlLTItLWZpdCAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX190YWJsZS5rdC1pbnZvaWNlX190YWJsZS0tY2VudGVyZWR7d2lkdGg6MTAwJX0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXJ7cGFkZGluZzowIDVyZW0gMCA1cmVtfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lci5rdC1pbnZvaWNlX19jb250YWluZXItLWNlbnRlcmVke3dpZHRoOjcwJTttYXJnaW46MCBhdXRvO3BhZGRpbmc6MH0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ297ZGlzcGxheTotd2Via2l0LWJveDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstd2Via2l0LWJveC1wYWNrOmp1c3RpZnk7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmctdG9wOjEwcmVtfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fbG9nbz5he3RleHQtZGVjb3JhdGlvbjpub25lfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fbG9nbz5hPmgxe2ZvbnQtd2VpZ2h0OjcwMDtmb250LXNpemU6Mi43cmVtO2NvbG9yOiM2YzcyOTN9Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19sb2dvPmE6bGFzdC1jaGlsZHt0ZXh0LWFsaWduOnJpZ2h0fS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fZGVzY3t0ZXh0LWFsaWduOnJpZ2h0O2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxcmVtIDAgNHJlbSAwO2ZvbnQtd2VpZ2h0OjQwMDtjb2xvcjojNmM3MjkzO2ZvbnQtc2l6ZToxLjFyZW19Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19kZXNjPnNwYW57ZGlzcGxheTpibG9ja30ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2l0ZW1ze2Rpc3BsYXk6LXdlYmtpdC1ib3g7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7cGFkZGluZzo2cmVtIDAgM3JlbSAwO2JvcmRlci10b3A6MXB4IHNvbGlkICNlYmVkZjJ9Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19pdGVtcyAua3QtaW52b2ljZV9faXRlbXstd2Via2l0LWJveC1mbGV4OjE7LW1zLWZsZXg6MTtmbGV4OjE7b3ZlcmZsb3c6aGlkZGVufS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXMgLmt0LWludm9pY2VfX2l0ZW0gLmt0LWludm9pY2VfX3N1YnRpdGxle2ZvbnQtd2VpZ2h0OjYwMDtwYWRkaW5nLWJvdHRvbTowLjVyZW07Y29sb3I6IzZjNzI5M30ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2l0ZW1zIC5rdC1pbnZvaWNlX19pdGVtIC5rdC1pbnZvaWNlX190ZXh0e2NvbG9yOiNhN2FiYzM7Zm9udC13ZWlnaHQ6NDAwfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXMgLmt0LWludm9pY2VfX2l0ZW0+c3BhbntkaXNwbGF5OmJsb2NrfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHl7cGFkZGluZzoycmVtIDVyZW0gMCA1cmVtfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkua3QtaW52b2ljZV9fYm9keS0tY2VudGVyZWR7d2lkdGg6NzAlO21hcmdpbjowIGF1dG87cGFkZGluZzoycmVtIDAgMCAwfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGhlYWQgdHIgdGh7cGFkZGluZzoxcmVtIDAgMC41cmVtIDA7Ym9yZGVyLXRvcDpub25lO2NvbG9yOiNhN2FiYzM7Zm9udC13ZWlnaHQ6NTAwfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGhlYWQgdHIgdGg6bm90KDpmaXJzdC1jaGlsZCl7dGV4dC1hbGlnbjpyaWdodH0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5IHRhYmxlIHRib2R5IHRyIHRke3BhZGRpbmc6MXJlbSAwIDFyZW0gMDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7Ym9yZGVyLXRvcDpub25lO2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MS4xcmVtO2NvbG9yOiM2YzcyOTN9Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keSB0YWJsZSB0Ym9keSB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKXt0ZXh0LWFsaWduOnJpZ2h0fS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGJvZHkgdHI6Zmlyc3QtY2hpbGQgdGR7cGFkZGluZy10b3A6MS44cmVtfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlcnttYXJnaW4tdG9wOjlyZW07cGFkZGluZzo1cmVtIDAgN3JlbSAwO2JhY2tncm91bmQtY29sb3I6I2Y3ZjhmYX0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX3RhYmxle3BhZGRpbmc6MCA1cmVtIDAgNXJlbX0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX3RhYmxlLmt0LWludm9pY2VfX3RhYmxlLS1jZW50ZXJlZHt3aWR0aDo3MCU7bWFyZ2luOjAgYXV0bztwYWRkaW5nOjB9Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX190YWJsZSB0YWJsZSB0aGVhZCB0ciB0aHtwYWRkaW5nOjFyZW0gMCAwLjVyZW0gMDtib3JkZXItdG9wOm5vbmU7Y29sb3I6I2E3YWJjMztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWJlZGYyO2ZvbnQtd2VpZ2h0OjYwMH0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX3RhYmxlIHRhYmxlIHRoZWFkIHRyIHRoOmxhc3QtY2hpbGR7dGV4dC1hbGlnbjpyaWdodH0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRke3BhZGRpbmc6MS44cmVtIDAgMCAwO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXItdG9wOm5vbmU7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxLjFyZW07Y29sb3I6IzZjNzI5M30ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX3RhYmxlIHRhYmxlIHRib2R5IHRyIHRkOmxhc3QtY2hpbGR7dGV4dC1hbGlnbjpyaWdodDtmb250LXNpemU6MS44cmVtO3BhZGRpbmctdG9wOjFyZW19QG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXsua3QtaW52b2ljZS0yLmt0LWludm9pY2UtMi0tZml0IC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXJ7cGFkZGluZzowfS5rdC1pbnZvaWNlLTIua3QtaW52b2ljZS0yLS1maXQgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lci5rdC1pbnZvaWNlX19jb250YWluZXItLWNlbnRlcmVke3dpZHRoOjEwMCU7cGFkZGluZzowfS5rdC1pbnZvaWNlLTIua3QtaW52b2ljZS0yLS1maXQgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHl7cGFkZGluZzoycmVtIDAgMCAwfS5rdC1pbnZvaWNlLTIua3QtaW52b2ljZS0yLS1maXQgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkua3QtaW52b2ljZV9fYm9keS0tY2VudGVyZWR7d2lkdGg6MTAwJTtwYWRkaW5nOjB9Lmt0LWludm9pY2UtMi5rdC1pbnZvaWNlLTItLWZpdCAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVye3BhZGRpbmc6M3JlbSAwIDRyZW0gMH0ua3QtaW52b2ljZS0yLmt0LWludm9pY2UtMi0tZml0IC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX3RhYmxlLmt0LWludm9pY2VfX3RhYmxlLS1jZW50ZXJlZHt3aWR0aDoxMDAlfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lcnt3aWR0aDoxMDAlICFpbXBvcnRhbnQ7cGFkZGluZzowIDJyZW0gMCAycmVtfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lci5rdC1pbnZvaWNlX19jb250YWluZXItLWNlbnRlcmVke3BhZGRpbmc6MCAycmVtIDAgMnJlbX0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ297cGFkZGluZy10b3A6NHJlbTtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fbG9nbz5he3dpZHRoOjEwMCU7ZGlzcGxheTpibG9ja30ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2xvZ28+YTpsYXN0LWNoaWxke3BhZGRpbmctdG9wOjFyZW07dGV4dC1hbGlnbjpsZWZ0fS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9fZGVzY3t0ZXh0LWFsaWduOmxlZnQ7cGFkZGluZy1ib3R0b206MnJlbX0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19oZWFkIC5rdC1pbnZvaWNlX19jb250YWluZXIgLmt0LWludm9pY2VfX2l0ZW1ze3BhZGRpbmc6MnJlbSAwIDJyZW0gMDtkaXNwbGF5Oi13ZWJraXQtYm94O2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy13ZWJraXQtYm94LW9yaWVudDp2ZXJ0aWNhbDstd2Via2l0LWJveC1kaXJlY3Rpb246bm9ybWFsOy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2hlYWQgLmt0LWludm9pY2VfX2NvbnRhaW5lciAua3QtaW52b2ljZV9faXRlbXMgLmt0LWludm9pY2VfX2l0ZW17d2lkdGg6MTAwJTtkaXNwbGF5OmJsb2NrO3BhZGRpbmctYm90dG9tOjJyZW19Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9faGVhZCAua3QtaW52b2ljZV9fY29udGFpbmVyIC5rdC1pbnZvaWNlX19pdGVtcyAua3QtaW52b2ljZV9faXRlbTpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLWxlZnQ6MH0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5e3dpZHRoOjEwMCUgIWltcG9ydGFudDtwYWRkaW5nOjAgMnJlbSAwIDJyZW19Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keS5rdC1pbnZvaWNlX19ib2R5LS1jZW50ZXJlZHtwYWRkaW5nOjAgMnJlbSAwIDJyZW19Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keSB0YWJsZSB0aGVhZCB0ciB0aDpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLXJpZ2h0OjEuNXJlbX0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19ib2R5IHRhYmxlIHRoZWFkIHRyIHRoOmxhc3QtY2hpbGR7cGFkZGluZy1yaWdodDowfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2JvZHkgdGFibGUgdGJvZHkgdHIgdGQ6bm90KDpmaXJzdC1jaGlsZCl7cGFkZGluZy1yaWdodDoxLjVyZW19Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fYm9keSB0YWJsZSB0Ym9keSB0ciB0ZDpsYXN0LWNoaWxke3BhZGRpbmctcmlnaHQ6MH0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXJ7bWFyZ2luLXRvcDo0cmVtO3BhZGRpbmc6M3JlbSAycmVtIDRyZW0gMnJlbX0ua3QtaW52b2ljZS0yIC5rdC1pbnZvaWNlX193cmFwcGVyIC5rdC1pbnZvaWNlX19mb290ZXIgLmt0LWludm9pY2VfX3RhYmxlLmt0LWludm9pY2VfX3RhYmxlLS1jZW50ZXJlZHt3aWR0aDoxMDAlfS5rdC1pbnZvaWNlLTIgLmt0LWludm9pY2VfX3dyYXBwZXIgLmt0LWludm9pY2VfX2Zvb3RlciAua3QtaW52b2ljZV9fdGFibGUgdGFibGUgdGhlYWQgdHIgdGg6bm90KDpmaXJzdC1jaGlsZCl7cGFkZGluZy1sZWZ0OjJyZW19Lmt0LWludm9pY2UtMiAua3QtaW52b2ljZV9fd3JhcHBlciAua3QtaW52b2ljZV9fZm9vdGVyIC5rdC1pbnZvaWNlX190YWJsZSB0YWJsZSB0Ym9keSB0ciB0ZDpub3QoOmZpcnN0LWNoaWxkKXtwYWRkaW5nLWxlZnQ6MnJlbX19XHJcbi50cmVuZC1kaWFsb2cgLm1hdC1kaWFsb2ctY29udGFpbmVye1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.ts ***!
  \***************************************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
//route
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
//service 
var members_service_1 = __webpack_require__(/*! ../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var ReceiptDialogComponent = /** @class */ (function () {
    function ReceiptDialogComponent(memberservice, router, dialogRef, data) {
        this.memberservice = memberservice;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.date = new Date().toDateString();
    }
    ReceiptDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = this.data['membership'];
        var Id = this.router.url.split('/')[5];
        this.memberservice.getMemberById(Id).subscribe(function (res) {
            if (res['result']) {
                _this.member = res['users'][0];
            }
        });
        console.log('data', this.data);
    };
    __decorate([
        core_1.ViewChild('reportContent'),
        __metadata("design:type", core_1.ElementRef)
    ], ReceiptDialogComponent.prototype, "reportContent", void 0);
    ReceiptDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-receipt-dialog',
            template: __webpack_require__(/*! ./receipt-dialog.component.html */ "./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.html"),
            styles: [__webpack_require__(/*! ./receipt-dialog.component.scss */ "./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.scss")]
        }),
        __param(3, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [members_service_1.MembersService,
            router_1.Router,
            material_1.MatDialogRef, Object])
    ], ReceiptDialogComponent);
    return ReceiptDialogComponent;
}());
exports.ReceiptDialogComponent = ReceiptDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\"\r\n  [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n  <!-- <div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{ getTitle() }}</h3>\r\n        </div>\r\n        <ng-container ktPortletTools>\r\n        \r\n         \r\n          <div class=\"col\">\r\n            <ol class=\"breadcrumb\">\r\n              <li class=\"breadcrumb-item\" \r\n                *ngFor=\"let item of breadcrumbList; let i = index\"\r\n                [class.active]=\"i===breadcrumbList.length-1\">\r\n                <a [routerLink]=\"item.path\" *ngIf=\"i!==breadcrumbList.length-1\">\r\n                  {{ item.name }}\r\n                </a>\r\n                <span *ngIf=\"i===breadcrumbList.length-1\">{{ item.name }}</span>\r\n              </li>\r\n            </ol>\r\n          </div> \r\n        \r\n      </ng-container>-->\r\n  <div class=\"kt-portlet__head\">\r\n    <div class=\"kt-portlet__head-label\">\r\n      <h3 class=\"kt-portlet__head-title\">\r\n        Operations\r\n      </h3>\r\n    </div>\r\n    <div class=\"kt-portlet__head-toolbar\">\r\n      <ul class=\"nav nav-pills nav-pills-sm nav-pills-label nav-pills-bold\" role=\"tablist\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#kt_widget11_tab1_content\" role=\"tab\">\r\n            Last Month\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" data-toggle=\"tab\" href=\"#kt_widget11_tab2_content\" role=\"tab\">\r\n            All Time\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <div style=\"padding:20px;\">\r\n    <div class=\"kt-form\">\r\n\r\n      <mat-tab-group [(selectedIndex)]=\"selectedTab\">\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n\r\n            <span> <img style=\"width:20px;height:20px\" _ngcontent-c24=\"\" alt=\"\"\r\n                src=\"./assets/media/icons/icons8-rescheduling-a-one-time-1.png\"> </span>\r\n            <span class=\"ml-1\"> Reschedual</span>\r\n          </ng-template>\r\n\r\n\r\n\r\n          <!--begin::Widget -->\r\n          <!--begin::Widget -->\r\n          <div class=\"kt-widget kt-widget--user-profile-1\">\r\n\r\n            <div class=\"kt-widget__body\">\r\n              <!-- content data in a sidebar -->\r\n              <!-- begin -->\r\n\r\n              <!-- end -->\r\n              <!-- tabs of member data -->\r\n              <!-- begin -->\r\n              <div class=\"kt-widget__items\">\r\n                <a (click)=\"reschedual('all')\"\r\n                  [ngClass]=\"{'kt-widget__item--active':(value=='all'),'kt-widget__item':true}\">\r\n                  <span class=\"kt-widget__section\"  style=\"width:80%\" >\r\n                    <span class=\"kt-widget__icon\">\r\n                      <img style=\"width:20px;height:20px\" _ngcontent-c24=\"\" alt=\"\"\r\n                        src=\"./assets/media/icons/schedule-full-time.png\">\r\n\r\n                    </span>\r\n                    <span class=\"kt-widget__desc text-dark\">\r\n                      All Time\r\n                    </span>\r\n                    <span class=\"form-text text-muted ml-5\">\r\n                      reschedule The remaining dates are on the same day\r\n                    </span>\r\n                  </span></a>\r\n                <a  (click)=\"reschedual('period')\" [ngClass]=\"{'kt-widget__item--active':(value=='period'),'kt-widget__item':true}\">\r\n                  <span class=\"kt-widget__section\" >\r\n\r\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\"\r\n                      aria-controls=\"collapseExample\">\r\n                      <span class=\"kt-widget__icon text-dark\">\r\n                        <img style=\"width:20px;height:20px\" _ngcontent-c24=\"\" alt=\"\" src=\"./assets/media/icons/schedule-perod-time.png\">\r\n                      </span>\r\n                      <span class=\"kt-widget__desc text-dark\">\r\n                        Period Time\r\n                      </span>\r\n                      <span class=\"form-text text-muted ml-5\">\r\n                        reschedule the membership date in specific time\r\n                      </span>\r\n                    </a>\r\n\r\n\r\n               \r\n\r\n\r\n                    <div  class=\"collapse\" id=\"collapseExample\">\r\n                      <div class=\"card card-body ml-5 \">\r\n                        <span> <mat-form-field >\r\n                              <input matInput [(ngModel)]=\"data['day']\" [min]=\"data['day']\" [max]=\"data['day']\" [matDatepicker]=\"dp1\" placeholder=\"Start Period\" disabled>\r\n                              <mat-datepicker-toggle matSuffix [for]=\"dp1\" disabled></mat-datepicker-toggle>\r\n                              <mat-datepicker #dp1 disabled=\"false\"></mat-datepicker>\r\n                            </mat-form-field>\r\n                           <mat-form-field class=\"ml-5\">\r\n                              <span class=\"form-text text-danger mb-5\" *ngIf=\"submitted&&!enddate\"  >End Period is\r\n                                  <strong>required</strong>*\r\n                              </span>\r\n                              <input matInput [(ngModel)]=\"enddate\" \r\n                              [min]=\"data['day']\"\r\n                               [matDatepicker]=\"dp2\"\r\n                                placeholder=\"End Period \"\r\n                                \r\n                                required \r\n                                disabled>\r\n\r\n                              <mat-datepicker-toggle matSuffix [for]=\"dp2\"></mat-datepicker-toggle>\r\n                              <mat-datepicker #dp2 disabled=\"false\"></mat-datepicker>\r\n                            </mat-form-field></span>\r\n                            </div>\r\n                    </div>\r\n                  </span>\r\n\r\n                </a>\r\n                <a (click)=\"reschedual('one')\"\r\n                  [ngClass]=\"{'kt-widget__item--active':(value=='one'),'kt-widget__item':true}\">\r\n                  <span class=\"kt-widget__section\">\r\n                    <span class=\"kt-widget__icon\">\r\n                      <img style=\"width:20px;height:20px\" _ngcontent-c24=\"\" alt=\"\"\r\n                        src=\"./assets/media/icons/icons8-rescheduling-a-one-time.png\">\r\n                    </span>\r\n                    <span class=\"kt-widget__desc text-dark\">\r\n                      One Time\r\n                    </span>\r\n                    <span class=\"form-text text-muted ml-5\">\r\n                      reschedule only one time you specify only\r\n                    </span>\r\n                  </span>\r\n                </a>\r\n              </div>\r\n              <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                  <div class=\"row text-right\">\r\n                      <div class=\"col-lg-12\">\r\n                          <button type=\"button\" mat-raised-button (click)=\"cancel()\"  cdkFocusInitial matTooltip=\"Cancel \">\r\n                          Cancel\r\n                          </button>&nbsp;\r\n                          <button type=\"button\"  mat-raised-button color=\"primary\" (click)=\"reschedualshow()\"  matTooltip=\"Save changes\">\r\n                           OK\r\n                          </button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n             \r\n         \r\n              <!-- end -->\r\n            </div>\r\n          </div>\r\n          <!--end::Widget -->\r\n          <!--end::Widget -->\r\n\r\n\r\n        </mat-tab>\r\n        <mat-tab>\r\n          <ng-template mat-tab-label>\r\n            <span> <img style=\"width:20px;height:20px\" _ngcontent-c24=\"\" alt=\"\"\r\n                src=\"./assets/media/icons/calendar-with-date-svgrepo-com.svg\"></span>\r\n            <span class='ml-1'>Cancel</span>\r\n          </ng-template>\r\n          <ng-template matTabContent>\r\n            <div class=\"kt-widget kt-widget--user-profile-1\">\r\n\r\n              <div class=\"kt-widget__body\">\r\n                <!-- content data in a sidebar -->\r\n                <!-- begin -->\r\n\r\n                <!-- end -->\r\n                <!-- tabs of member data -->\r\n                <!-- begin -->\r\n                <div class=\"kt-widget__items\">\r\n                  <a (click)=\"cancelAttendance('cancel-only')\"\r\n                    [ngClass]=\"{'kt-widget__item--active':(value=='payment-member'),'kt-widget__item':true}\">\r\n                    <span class=\"kt-widget__section\">\r\n                      <span class=\"kt-widget__icon\">\r\n                        <img style=\"width:20px;height:20px\" _ngcontent-c24=\"\" alt=\"\"\r\n                          src=\"./assets/media/icons/calendar-with-date-svgrepo-com.svg\">\r\n                      </span>\r\n                      <span class=\"kt-widget__desc text-dark\">\r\n                        Cancel\r\n                      </span>\r\n                    </span></a>\r\n                  <a (click)=\"cancelAttendance('cancel-compensation')\"\r\n                    [ngClass]=\"{'kt-widget__item--active':(value=='agreement-member'),'kt-widget__item':true}\">\r\n                    <span class=\"kt-widget__section\">\r\n                      <span class=\"kt-widget__icon\">\r\n                        <img style=\"width:20px;height:20px\" _ngcontent-c24=\"\" alt=\"\"\r\n                          src=\"./assets/media/icons/icons8-rescheduling-a-task-50 (1).png\">\r\n\r\n                      </span>\r\n                      <span class=\"kt-widget__desc text-dark\">\r\n                        Cancel with compensation\r\n                      </span>\r\n\r\n                    </span>\r\n\r\n                  </a>\r\n                </div>\r\n                <!-- end -->\r\n              </div>\r\n            </div>\r\n          </ng-template>\r\n        </mat-tab>\r\n\r\n      </mat-tab-group>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.ts ***!
  \*****************************************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var show_reschdual_time_component_1 = __webpack_require__(/*! ./show-reschdual-time/show-reschdual-time.component */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.ts");
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// Lodash
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// Lodash
//import { each, find, some } from 'lodash';
// NGRX
//import { Update } from '@ngrx/entity';
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
//import { delay } from 'rxjs/operators';
//import { Reschedual } from './rechedual.model';
//service
var members_service_1 = __webpack_require__(/*! ../../../members.service */ "./src/app/views/pages/members/members.service.ts");
//import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
var ReschedualEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<ReschedualEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function ReschedualEditDialogComponent(dialogRef, layoutUtilsService, data, dialog, store, router, Memberservice) {
        this.dialogRef = dialogRef;
        this.layoutUtilsService = layoutUtilsService;
        this.data = data;
        this.dialog = dialog;
        this.store = store;
        this.router = router;
        this.Memberservice = Memberservice;
        this.viewLoading = true;
        this.loadingAfterSubmit = true;
        this.selectedTab = 0;
        this.submitted = false;
        this.dateNow = new Date();
        this.disabled = true;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ReschedualEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('data', this.data);
        this.data = JSON.parse("" + this.data);
        console.log('data', this.data);
        this.Memberservice.getSelectedPackageById(this.data['membership_id']).subscribe(function (res) {
            if (res['result']) {
                _this.membershipandpaymentData = res['data'][0];
                console.log(_this.membershipandpaymentData);
            }
        });
    };
    /**
     * On destroy
     */
    ReschedualEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    ReschedualEditDialogComponent.prototype.cancelAttendance = function (value) {
        var _this = this;
        var data = {};
        if (this.data['from'])
            data['from'] = (new Date(this.data['from'])).getHours() + ":" + (new Date(this.data['from'])).getMinutes();
        if (this.data['to'])
            data['to'] = (new Date(this.data['to'])).getHours() + ":" + (new Date(this.data['to'])).getMinutes();
        data['id'] = this.data['_idAttendance'];
        var _title = 'Cancel Attendance';
        var _description = 'Are you sure to cancel this attendance?';
        var _waitDesciption = 'Attendance is canceling...';
        var _deleteMessage = "Attendance has been canceled";
        var _failedToDelete = "sorry there is problem to  cancel try again";
        if (this.data['_idAttendance']) {
            var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    return;
                }
                _this.Memberservice.cancelAttendance(data).subscribe(function (res) {
                    if (res['result']) {
                        _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
                        _this.dialogRef.close();
                        var member_id = _this.router.url.split('/')[5];
                        if (_this.router.url.split('/')[7] == 'reschedules') {
                            _this.router.navigate(['/default/members/list/profile', member_id, "reschedule"]);
                        }
                        else {
                            _this.router.navigate(['/default/members/list/profile', member_id, "reschedules"]);
                        }
                    }
                    else {
                        _this.layoutUtilsService.showActionNotification(_failedToDelete, crud_1.MessageType.Delete);
                    }
                });
            });
        }
    };
    /**
     * Save data
     */
    /**
     * Close alert
     *
     * @param $event: Event
     */
    /** UI */
    /**
     * Returns component title
     */
    ReschedualEditDialogComponent.prototype.getTitle = function () {
        return 'New Reschedual';
    };
    ReschedualEditDialogComponent.prototype.isTitleValid = function () {
        return true;
    };
    ReschedualEditDialogComponent.prototype.reschedualshow = function () {
        var _this = this;
        this.data['status'] = 'active';
        var reschedual_package;
        if (this.value && this.disabled) {
            if (this.value == 'all') {
                this.Memberservice._savedReschdualPackage.subscribe(function (res) {
                    reschedual_package = res;
                    reschedual_package = JSON.parse(reschedual_package);
                    reschedual_package['endoldday'] = new Date(_this.membershipandpaymentData['end_date']).toISOString().split('T')[0];
                    console.log(reschedual_package['endoldday']);
                    reschedual_package = JSON.stringify(reschedual_package);
                });
                this.Memberservice.saveReschdualPackage(reschedual_package);
                this.data['day_from'] = this.data['day'];
                delete this.data['_idAttendance'];
                this.Memberservice.viewAttendance(this.data).subscribe(function (res) {
                    if (res['result']) {
                        _this.disabled = false;
                        _this.dialogRef.close();
                        _this.dialog.open(show_reschdual_time_component_1.ShowReschdualTimeComponent, { data: res['data'] });
                    }
                });
            }
            else if (this.value == 'period') {
                if (this.enddate) {
                    this.Memberservice._savedReschdualPackage.subscribe(function (res) {
                        reschedual_package = res;
                        reschedual_package = JSON.parse(reschedual_package);
                        reschedual_package['endoldday'] = new Date((new Date(_this.enddate).getTime()) + (60 * 60 * 24 * 1000)).toISOString().split('T')[0];
                        console.log(reschedual_package['endoldday']);
                        reschedual_package = JSON.stringify(reschedual_package);
                    });
                    this.Memberservice.saveReschdualPackage(reschedual_package);
                    this.submitted = false;
                    console.log(this.enddate, this.data['day']);
                    this.data['day_from'] = this.data['day'];
                    this.data['day_to'] = new Date((new Date(this.enddate).getTime()) + (60 * 60 * 24 * 1000)).toISOString().split('T')[0];
                    console.log(this.data['day_to'], this.data['day_from']);
                    delete this.data['_idAttendance'];
                    this.Memberservice.viewAttendance(this.data).subscribe(function (res) {
                        if (res['result']) {
                            _this.disabled = false;
                            _this.dialogRef.close();
                            _this.dialog.open(show_reschdual_time_component_1.ShowReschdualTimeComponent, { data: res['data'] });
                            console.log(res);
                        }
                    });
                }
                else {
                    this.submitted = true;
                }
            }
            else if (this.value == 'one') {
                console.log(this.data);
                this.data['id'] = this.data['_idAttendance'];
                this.data['day_from'] = this.data['day'];
                this.data['day_to'] = this.data['day'];
                this.Memberservice._savedReschdualPackage.subscribe(function (res) {
                    reschedual_package = res;
                    reschedual_package = JSON.parse(reschedual_package);
                    reschedual_package['endoldday'] = _this.data['day'];
                    reschedual_package['_idAttendance'] = _this.data['_idAttendance'];
                    reschedual_package = JSON.stringify(reschedual_package);
                });
                this.Memberservice.saveReschdualPackage(reschedual_package);
                this.Memberservice.viewAttendance(this.data).subscribe(function (res) {
                    if (res['result']) {
                        _this.disabled = false;
                        _this.dialogRef.close();
                        res['data']['_idAttendance'] = _this.data['_idAttendance'];
                        _this.dialog.open(show_reschdual_time_component_1.ShowReschdualTimeComponent, { data: res['data'] });
                        console.log(res);
                    }
                });
            }
        }
    };
    ReschedualEditDialogComponent.prototype.reschedual = function (activeClass) {
        this.value = activeClass;
    };
    ReschedualEditDialogComponent.prototype.cancel = function () {
    };
    ReschedualEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-rechedual-edit-dialog',
            template: __webpack_require__(/*! ./rechedual-edit.dialog.component.html */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            styles: [__webpack_require__(/*! ../reschedule.component.scss */ "./src/app/views/pages/members/member-profile/reschedule/reschedule.component.scss")]
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            crud_1.LayoutUtilsService, Object, material_2.MatDialog,
            store_1.Store, router_1.Router, members_service_1.MembersService])
    ], ReschedualEditDialogComponent);
    return ReschedualEditDialogComponent;
}());
exports.ReschedualEditDialogComponent = ReschedualEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet kt-portlet--tabs kt-portlet--height-fluid\">\r\n\t<div class=\"kt-portlet__head\">\r\n\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n      Reschedual Times\r\n      </h3>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"kt-portlet__body\">\r\n\t\t<div class=\"tab-content\">\r\n\t\t\t<div class=\"tab-pane active\" id=\"kt_widget2_tab1_content\">\r\n\t\t\t\t<div class=\"kt-widget2\">\r\n\t\t\t\t\t<div  *ngFor=\"let item of data\"  [class]=\"item['color']\" >\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"kt-widget2__info ml-5\">\r\n\t\t\t\t\t\t\t<span  class=\"kt-widget2__title\">\r\n\t\t\t\t\t\t\t\t{{item.membership_id}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\" text-secondary ml-2\">Day:\r\n\t\t\t\t\t\t\t\t\t<span class=\"text-muted ml-2\">{{item.day}}</span></span>\t \r\n\t\t\t\t\t\t\t <span class=\" text-secondary ml-2\">from:\r\n\t\t\t\t\t\t\t <span class=\"text-muted ml-2\">{{item.from}}\t \r\n\t\t\t\t\t\t\t </span><span class=\" text-secondary ml-2\">\t\r\n\t\t\t\t\t\t\t to: <span class=\"text-muted ml-2\">{{item.to}}</span>\t</span>\t</span>\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t</div>\t\t\t\t\t\r\n\t\t\t\t\t</div>   \r\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\r\n\t\t\t\t\t\t<div class=\"row text-right\">\r\n\t\t\t\t\t\t\t<div class=\"col-lg-12\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" mat-raised-button  cdkFocusInitial (click)=\"reschedualcancel()\" matTooltip=\"Cancel \">\r\n\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t\t\t<button type=\"button\"  mat-raised-button color=\"primary\" (click)=\"reschedualshow()\"  matTooltip=\"Save changes\">\r\n\t\t\t\t\t\t\t\t OK\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>            \r\n\t\t\t</div>\t\t\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvcmVzY2hlZHVsZS9yZWNoZWR1YWwtZWRpdC9zaG93LXJlc2NoZHVhbC10aW1lL3Nob3ctcmVzY2hkdWFsLXRpbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.ts ***!
  \***********************************************************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
//
var rechedual_edit_dialog_component_1 = __webpack_require__(/*! ../rechedual-edit.dialog.component */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.ts");
//
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
//
var members_service_1 = __webpack_require__(/*! ../../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var ShowReschdualTimeComponent = /** @class */ (function () {
    function ShowReschdualTimeComponent(dialogRef, data, dialog, router, route, memberservice, changeDetectRef) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialog = dialog;
        this.router = router;
        this.route = route;
        this.memberservice = memberservice;
        this.changeDetectRef = changeDetectRef;
        this.color = ["kt-widget2__item kt-widget2__item--warning",
            'kt-widget2__item kt-widget2__item--danger',
            'kt-widget2__item kt-widget2__item--info',
            'kt-widget2__item kt-widget2__item--success'
        ];
        this.viewLoading = true;
        this.dialogRef.disableClose = true;
        this.Reschedual_items = this.data;
    }
    ShowReschdualTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.memberservice._savedReschdualPackage.subscribe(function (res) {
            _this.ReschdualPackage = res;
        });
        this.data.forEach(function (element, index) {
            if (element['from']) {
                _this.units_key = element.units_key;
                console.log(element);
                _this.membership_id = element.membershipandpayment_id;
                _this.packageId = element.membership_id;
                element['from'] = (new Date(element['from'])).getHours() + ":" + (new Date(element['from'])).getMinutes();
            }
            if (element['to']) {
                element['to'] = (new Date(element['to'])).getHours() + ":" + (new Date(element['to'])).getMinutes();
            }
            element['color'] = _this.color[index % 4];
            console.log(_this.color[index % 4]);
        });
    };
    ShowReschdualTimeComponent.prototype.reschedualcancel = function () {
        this.dialogRef.close();
        this.dialog.open(rechedual_edit_dialog_component_1.ReschedualEditDialogComponent, { data: this.ReschdualPackage });
        this.changeDetectRef.detectChanges();
    };
    ShowReschdualTimeComponent.prototype.reschedualshow = function () {
        var _this = this;
        //this.route.parent.snapshot.paramMap.get('id');
        var reschedual_package;
        this.memberservice._savedReschdualPackage.subscribe(function (res) {
            reschedual_package = res;
            reschedual_package = JSON.parse(reschedual_package);
            reschedual_package['number'] = _this.data.length;
            reschedual_package = JSON.stringify(reschedual_package);
        });
        this.memberservice.saveReschdualPackage(reschedual_package);
        var split = this.router.url.split('/');
        var user_key = split[5];
        console.log(user_key, this.membership_id, this.units_key, this.Reschedual_items);
        this.memberservice.changeSelectedMembership(this.Reschedual_items);
        if (user_key && this.membership_id && this.units_key)
            this.router.navigate(['/default/members/list/profile', user_key, 'ReschduelAndcancel', this.membership_id], { queryParams: { 'uk': this.units_key, 'piD': this.packageId } });
        this.dialogRef.close();
    };
    ShowReschdualTimeComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    ShowReschdualTimeComponent = __decorate([
        core_1.Component({
            selector: 'kt-show-reschdual-time',
            template: __webpack_require__(/*! ./show-reschdual-time.component.html */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.html"),
            styles: [__webpack_require__(/*! ./show-reschdual-time.component.scss */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, material_2.MatDialog,
            router_1.Router,
            router_1.ActivatedRoute,
            members_service_1.MembersService,
            core_1.ChangeDetectorRef])
    ], ShowReschdualTimeComponent);
    return ShowReschdualTimeComponent;
}());
exports.ShowReschdualTimeComponent = ShowReschdualTimeComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/angular-calendar@0.27.8/css/angular-calendar.css\">\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div> -->\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div> -->\r\n\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"SaveAttendance()\"\r\n        [class.active]=\"true\"\r\n      >\r\n        Save\r\n      </div>\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [weekStartsOn]=\"startDay\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <!-- <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view> -->\r\n</div>\r\n\r\n\r\n<!-- <ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Event action occurred</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      Action:\r\n      <pre>{{ modalData?.action }}</pre>\r\n    </div>\r\n    <div>\r\n      Event:\r\n      <pre>{{ modalData?.event | json }}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      OK\r\n    </button>\r\n  </div>\r\n</ng-template> -->\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\n.warn-snackbar {\n  background-color: #ff4081; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9yZXNjaGVkdWxlL3Jlc2NoZHVhbC1hbmRjYW5jZWwvRTpcXEdFTUlOXFxneW1pbi0yLjAtc2Fhcy1mcm9udGVuZC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxtZW1iZXJzXFxtZW1iZXItcHJvZmlsZVxccmVzY2hlZHVsZVxccmVzY2hkdWFsLWFuZGNhbmNlbFxccmVzY2hkdWFsLWFuZGNhbmNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHlCQUF5QjtFQUN6QixhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvcmVzY2hlZHVsZS9yZXNjaGR1YWwtYW5kY2FuY2VsL3Jlc2NoZHVhbC1hbmRjYW5jZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gIH1cclxuICBcclxuICBwcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53YXJuLXNuYWNrYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.ts ***!
  \********************************************************************************************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var _services_1 = __webpack_require__(/*! ../../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var members_service_1 = __webpack_require__(/*! ../../../members.service */ "./src/app/views/pages/members/members.service.ts");
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
//route
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var colors = {
    red: {
        primary: '#bb2124',
        secondary: '#bb2124'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var ReschdualAndcancelComponent = /** @class */ (function () {
    function ReschdualAndcancelComponent(modal, snackBar, router, service, Membershipservice, layoutUtilsService, route) {
        var _this = this;
        this.modal = modal;
        this.snackBar = snackBar;
        this.router = router;
        this.service = service;
        this.Membershipservice = Membershipservice;
        this.layoutUtilsService = layoutUtilsService;
        this.route = route;
        this.view = angular_calendar_1.CalendarView.Week;
        this.CalendarView = angular_calendar_1.CalendarView;
        this.viewDate = new Date();
        this.startDay = 1;
        this.refresh = new rxjs_1.Subject();
        this.activeDayIsOpen = true;
        this.user_id = this.router.parent.snapshot.paramMap.get('id');
        this.membership_id = this.router.snapshot.paramMap.get('id');
        this.units_key = this.router.snapshot.queryParamMap.get('uk');
        this.Membershipservice._savedReschdualPackage.subscribe(function (res) {
            _this.ReschdualPackage = res;
            _this.ReschdualPackage = JSON.parse(_this.ReschdualPackage);
            console.log(_this.ReschdualPackage);
            if (!(_this.ReschdualPackage.day) && !_this.ReschdualPackage.day)
                _this.route.navigate(['/default/members/list/profile', _this.user_id, 'reschedule']);
        });
        //reschedual package
        this.Membershipservice.currentSelectedMembership.subscribe(function (res) {
            _this.rescedualPackages = res;
        });
        this.events = [];
        this.selectedTimes = {};
        this.user_id = this.router.parent.snapshot.paramMap.get('id');
        this.membership_id = this.router.snapshot.paramMap.get('id');
        this.units_key = this.router.snapshot.queryParamMap.get('uk');
        console.log(this.units_key, this.membership_id);
        if (this.units_key && this.membership_id)
            this.getSchedual(this.units_key, this.membership_id, new Date());
        //membership piD
        if (this.router.snapshot.queryParamMap.get('piD'))
            if (this.checkedpermission('getmembership')) {
                this.Membershipservice.getPackageBYId(this.router.snapshot.queryParamMap.get('piD')).subscribe(function (res) {
                    if (res['result'])
                        _this.ReschedualMembershipData = res['data'][0];
                });
            }
    }
    ReschdualAndcancelComponent.prototype.ngOnInit = function () {
        var url = this.route.url.split('/');
        this.Membershipservice.changeUrl(url[url.length - 1]);
    };
    ReschdualAndcancelComponent.prototype.handleEvent = function (action, event) {
        var day = new Date(event.start).getDay();
        var from = new Date(event.start).getTime();
        var to = new Date(event.end).getTime();
        var selectcount = this.objectSize(this.selectedTimes);
        console.log('selected', day, from, to, selectcount, this.selectedTimes);
        if (event.color.primary == '#e3bc08') {
            delete this.selectedTimes[day];
            event.color = colors.blue;
        }
        else {
            if (this.selectedTimes[day] != undefined) {
                alert('You Select Time On this day Please unselect and select Again');
            }
            else {
                this.selectedTimes[day] = { from: from, to: to };
                event.color = { primary: '#e3bc08', secondary: '#CCC' };
            }
        }
    };
    /*
      /*
        get all schedual time
      */
    ReschdualAndcancelComponent.prototype.getSchedual = function (units_key, _package, startday) {
        var _this = this;
        console.log(units_key, _package, startday);
        this.startDay = startday.getDay();
        this.viewDate = startday;
        var start_date = startday.getTime();
        if (this.checkedpermission('getschedual')) {
            this.service.getSchedual({ units_key: units_key, package: _package, start_date: start_date }).subscribe(function (res) {
                console.log('resut', res);
                if (res['result']) {
                    _this.drawOnCalender(res.data);
                    // console.log(this.rescedualPackages)
                    // this.drawOnCalender(this.rescedualPackages)
                }
            });
        }
    };
    /*
      get Activity By Id
    */
    ReschdualAndcancelComponent.prototype.getActivity = function (_package) {
        var _this = this;
        if (this.checkedpermission('getactivities')) {
            this.service.getActivity(_package).subscribe(function (res) {
                console.log('resut', res);
                if (res['result']) {
                    _this.drawOnCalender(res.data.schedual_time);
                }
            });
        }
    };
    ReschdualAndcancelComponent.prototype.checkedpermission = function (key) {
        var checked = false;
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))) {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user['allPrivilidge']) {
                    var privilidge_1 = user['allPrivilidge'];
                    Object.keys(privilidge_1).forEach(function (role) {
                        Object.keys(privilidge_1[role]).forEach(function (pri) {
                            var per = (privilidge_1[role][pri].toString()).trim();
                            if (key.trim() == per) {
                                checked = true;
                            }
                        });
                    });
                }
            }
        }
        return checked;
    };
    ReschdualAndcancelComponent.prototype.SaveAttendance = function () {
        var _this = this;
        var times = new Array();
        Object.values(this.selectedTimes).forEach(function (item) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    times.push(item);
                    return [2 /*return*/];
                });
            });
        });
        //range of reservation
        var reservationRange = this.ReschdualPackage.number;
        if (reservationRange > this.ReschedualMembershipData['day_per_week'])
            reservationRange = this.ReschedualMembershipData['day_per_week'];
        console.log(reservationRange, this.ReschedualMembershipData['day_per_week']);
        if (times.length != reservationRange) {
            alert('You should select ' + reservationRange + 'times');
        }
        else {
            var data;
            console.log(this.ReschdualPackage.endoldday);
            if (this.rescedualPackages['_idAttendance'])
                data = { status: 'active', units_key: this.units_key, membership_id: this.membership_id, reservation: times, user_key: this.user_id, startoldday: this.ReschdualPackage.day, endoldday: this.ReschdualPackage.endoldday, _idAttendance: this.rescedualPackages['_idAttendance'] };
            else
                data = { status: 'active', units_key: this.units_key, membership_id: this.membership_id, reservation: times, user_key: this.user_id, startoldday: this.ReschdualPackage.day, endoldday: this.ReschdualPackage.endoldday };
            if (this.checkedpermission('reschedualattendance')) {
                this.Membershipservice.reschedualAttendance(data).subscribe(function (res) {
                    if (res['result']) {
                        _this.layoutUtilsService.showActionNotification("reservation has sucessfully added", crud_1.MessageType.Create, 5000, true, true);
                        var member_id = _this.route.url.split('/')[5];
                        _this.route.navigate(['/default/members/list/profile', member_id, 'reschedule']);
                    }
                    else
                        alert(res['error']);
                });
            }
            else {
                this.open();
            }
        }
    };
    ReschdualAndcancelComponent.prototype.drawOnCalender = function (data, activity) {
        if (activity === void 0) { activity = false; }
        this.refresh.next();
        this.events = [];
        for (var i = 0; i < data.length; i++) {
            if (activity) {
                var start = new Date(data[i].start);
                var end = new Date(data[i].end);
            }
            else {
                var start = new Date(data[i].from);
                var end = new Date(data[i].to);
            }
            var title = this.gethoursandminutes(start) + " to " + this.gethoursandminutes(end);
            var color = colors.blue;
            //if(i%2) var color = colors.blue;else var color = colors.yellow;
            this.events.push({ start: start, end: end, title: title, color: color });
        }
    };
    ReschdualAndcancelComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    ReschdualAndcancelComponent.prototype.setView = function (view) {
        this.view = view;
    };
    ReschdualAndcancelComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    ReschdualAndcancelComponent.prototype.gethoursandminutes = function (date) {
        return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    };
    ReschdualAndcancelComponent.prototype.objectSize = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };
    ;
    ReschdualAndcancelComponent.prototype.open = function () {
        var message = 'Oh Snap ! You dont have permission to get this data';
        var actionButtonLabel = '';
        var action = true;
        var setAutoHide = true;
        var autoHide = 4000;
        var horizontalPosition = 'center';
        var verticalPosition = 'top';
        var addExtraClass = false;
        var config = new material_1.MatSnackBarConfig();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = setAutoHide ? autoHide : 0;
        //  config['extraClasses'] = addExtraClass ? ['warn-snackbar'] : undefined;
        config.panelClass = ['warn-snackbar'];
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    };
    __decorate([
        core_1.ViewChild('modalContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], ReschdualAndcancelComponent.prototype, "modalContent", void 0);
    ReschdualAndcancelComponent = __decorate([
        core_1.Component({
            selector: 'kt-reschdual-andcancel',
            template: __webpack_require__(/*! ./reschdual-andcancel.component.html */ "./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./reschdual-andcancel.component.scss */ "./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            material_1.MatSnackBar,
            router_1.ActivatedRoute,
            _services_1.SchedualService, members_service_1.MembersService, crud_1.LayoutUtilsService, router_1.Router])
    ], ReschdualAndcancelComponent);
    return ReschdualAndcancelComponent;
}());
exports.ReschdualAndcancelComponent = ReschdualAndcancelComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/reschedule.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/reschedule.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/angular-calendar@0.27.8/css/angular-calendar.css\">\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div> -->\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div> -->\r\n\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"SaveAttendance()\"\r\n        [class.active]=\"true\"\r\n      >\r\n        Save\r\n      </div>\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div [ngSwitch]=\"view\">\r\n  <!-- <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view> -->\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [weekStartsOn]=\"startDay\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event,$event)\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <!-- <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/reschedule.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/reschedule.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\n.warn-snackbar {\n  background-color: #ff4081; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS9yZXNjaGVkdWxlL0U6XFxHRU1JTlxcZ3ltaW4tMi4wLXNhYXMtZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcbWVtYmVyc1xcbWVtYmVyLXByb2ZpbGVcXHJlc2NoZWR1bGVcXHJlc2NoZWR1bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYSxFQUFBOztBQUdmO0VBQ0UseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy9tZW1iZXJzL21lbWJlci1wcm9maWxlL3Jlc2NoZWR1bGUvcmVzY2hlZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcclxuICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHByZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcblxyXG4gIC53YXJuLXNuYWNrYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/reschedule/reschedule.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/reschedule/reschedule.component.ts ***!
  \***************************************************************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var members_service_1 = __webpack_require__(/*! ../../members.service */ "./src/app/views/pages/members/members.service.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var rechedual_edit_dialog_component_1 = __webpack_require__(/*! ./rechedual-edit/rechedual-edit.dialog.component */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.ts");
//router
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var colors = {
    red: {
        primary: '#CD5C5C',
        secondary: '#CD5C5C'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    },
    green: {
        primary: '#D0F0C0',
        secondary: '#D0F0C0'
    }
};
var ReschedualComponent = /** @class */ (function () {
    function ReschedualComponent(dialog, snackBar, modal, service, memberService, router, route) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.modal = modal;
        this.service = service;
        this.memberService = memberService;
        this.router = router;
        this.route = route;
        this.view = angular_calendar_1.CalendarView.Week;
        this.CalendarView = angular_calendar_1.CalendarView;
        this.viewDate = new Date();
        this.startDay = 1;
        this.refresh = new rxjs_1.Subject();
        this.activeDayIsOpen = true;
        this.options = '';
        this.membership_id = '';
        this.units_key = '';
        this.start_date = new Date();
        this.user_key = '';
        this.trainer_key = '';
        this.events = [];
        this.selectedTimes = {};
        this.user_key = (this.router.url.split('/'))[5];
        // this.memberService.currentmember.subscribe(res => {
        //   console.log(res); if (res) this.user_key = res['pub_key']
        //   console.log(this.user_key)
        var status = this.route.snapshot.queryParamMap.get('status');
        if (status == 'pe') {
            status = 'active';
        }
        if (status == 'co') {
            status = 'complete';
        }
        if (this.user_key) {
            console.log(this.user_key);
            this.viewAttendance(this.user_key, this.trainer_key, '', '', status);
        }
        // })
    }
    ReschedualComponent.prototype.handleEvent = function (action, event, eventCell) {
        // this.modalData = { event,() action };
        // this.modal.open(this.modalContent, { size: 'lg' });
        var status;
        status = (JSON.parse(event['id'].toString()))['status'];
        console.log(status);
        if (status.includes("active") || status.includes("pending-payment")) {
            console.log(status);
            this.memberService.saveReschdualPackage(event['id']);
            var dialogRef = this.dialog.open(rechedual_edit_dialog_component_1.ReschedualEditDialogComponent, { data: event['id'], });
        }
        else {
        }
    };
    /*
      get all schedual time
    */
    ReschedualComponent.prototype.viewAttendance = function (user_key, trainer_key, _package, startday, status) {
        var _this = this;
        if (this.checkedpermission('viewattendance')) {
            this.service.viewAttendance({ user_key: user_key, trainer_key: trainer_key, package: _package, startday: startday, status: status }).subscribe(function (res) {
                console.log('all times', res);
                if (res['result']) {
                    _this.refresh.next();
                    _this.events = [];
                    console.log(res.data);
                    for (var i = 0; i < res.data.length; i++) {
                        console.log(res.data[i].from);
                        var start = _this.get_UTC_timestamp(res.data[i].from);
                        var end = _this.get_UTC_timestamp(res.data[i].to);
                        var title = "name: " + "\n time:" + _this.gethoursandminutes(start) + " to " + _this.gethoursandminutes(end);
                        var color = colors.blue;
                        var id = "{\"day\":\"" + res.data[i].day + "\",\"status\":\"" + res.data[i].status + "\",\"branch_key\":\"" + res.data[i].branch_key + "\",\"club_key\":\"" + res.data[i].club_key + "\",\"package_id\":\"" + res.data[i].membership_id + "\",\"membership_id\":\"" + res.data[i].membershipandpayment_id + "\",\"trainer_key\":\"" + res.data[i].trainer_key + "\",\"user_key\":\"" + user_key + "\",\"units_key\":\"" + res.data[i].units_key + "\",\"from\":\"" + res.data[i].from + "\",\"to\":\"" + res.data[i].to + "\",\"_idAttendance\":\"" + res.data[i]._id + "\"}";
                        if (res.data[i].status == 'active')
                            color = colors.green;
                        if (res.data[i].status == "reschedual")
                            color = colors.yellow;
                        if (res.data[i].status == "cancel")
                            color = colors.red;
                        //if(i%2) var color = colors.blue;else var color = colors.yellow;
                        _this.events.push({ start: start, end: end, title: title, color: color, id: id });
                    }
                }
            });
        }
    };
    ReschedualComponent.prototype.SaveAttendance = function () {
        var times = new Array();
        Object.values(this.selectedTimes).forEach(function (item) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    times.push(item);
                    return [2 /*return*/];
                });
            });
        });
        var data = { units_key: this.units_key, package: this.membership_id, start_date: this.start_date, recervation: times };
        if (this.checkedpermission('addattendance')) {
            this.service.addAttendance(data).subscribe(function (res) {
                if (res['result']) {
                    // action after recervation
                }
            });
        }
        else {
            this.open();
        }
    };
    ReschedualComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    ReschedualComponent.prototype.setView = function (view) {
        this.view = view;
    };
    ReschedualComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    ReschedualComponent.prototype.changeOptions = function (option) {
        this.options = option;
        console.log(this.options, option);
    };
    ReschedualComponent.prototype.gethoursandminutes = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ReschedualComponent.prototype.open = function () {
        var message = 'Oh Snap ! You dont have permission to get this data';
        var actionButtonLabel = '';
        var action = true;
        var setAutoHide = true;
        var autoHide = 4000;
        var horizontalPosition = 'center';
        var verticalPosition = 'top';
        var addExtraClass = false;
        var config = new material_2.MatSnackBarConfig();
        config.verticalPosition = verticalPosition;
        config.horizontalPosition = horizontalPosition;
        config.duration = setAutoHide ? autoHide : 0;
        //  config['extraClasses'] = addExtraClass ? ['warn-snackbar'] : undefined;
        config.panelClass = ['warn-snackbar'];
        this.snackBar.open(message, action ? actionButtonLabel : undefined, config);
    };
    ReschedualComponent.prototype.get_UTC_timestamp = function (date) {
        var d1 = new Date(date);
        var d2 = Date.UTC(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
        var utc_timestamp = new Date(d2);
        return utc_timestamp;
    };
    ReschedualComponent.prototype.objectSize = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };
    ;
    ReschedualComponent.prototype.checkedpermission = function (key) {
        var checked = false;
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))) {
                var user = JSON.parse(localStorage.getItem('user'));
                if (user['allPrivilidge']) {
                    var privilidge_1 = user['allPrivilidge'];
                    Object.keys(privilidge_1).forEach(function (role) {
                        Object.keys(privilidge_1[role]).forEach(function (pri) {
                            var per = (privilidge_1[role][pri].toString()).trim();
                            if (key.trim() == per) {
                                checked = true;
                            }
                        });
                    });
                }
            }
        }
        return checked;
    };
    __decorate([
        core_1.ViewChild('modalContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], ReschedualComponent.prototype, "modalContent", void 0);
    ReschedualComponent = __decorate([
        core_1.Component({
            selector: 'kt-reschedual',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: __webpack_require__(/*! ./reschedule.component.html */ "./src/app/views/pages/members/member-profile/reschedule/reschedule.component.html"),
            // viewProviders: [MatExpansionPanel]
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./reschedule.component.scss */ "./src/app/views/pages/members/member-profile/reschedule/reschedule.component.scss")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            material_2.MatSnackBar,
            ng_bootstrap_1.NgbModal,
            _services_1.SchedualService,
            members_service_1.MembersService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ReschedualComponent);
    return ReschedualComponent;
}());
exports.ReschedualComponent = ReschedualComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/workout/categories/categories.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/workout/categories/categories.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet style=\"height:100%\">\r\n  <!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n  <kt-portlet-header>\r\n    <!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n    <ng-container ktPortletTitle>\r\n      <h3 class=\"kt-portlet__head-title\">\r\n        <span>Categories list</span>\r\n      </h3>\r\n      <!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n      <!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n    </ng-container>\r\n  </kt-portlet-header>\r\n  <!-- end::Header -->\r\n\r\n  <kt-portlet-body>\r\n    <!-- start::FILTERS & GROUP ACTIONS -->\r\n    <div class=\"kt-form kt-margin-b-30\">\r\n      <!-- start::FILTERS -->\r\n      <div class=\"kt-form__filtration\">\r\n        <div class=\"row align-items-center\">\r\n\r\n\r\n\r\n          <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n            <mat-form-field class=\"mat-form-field-fluid\">\r\n              <input matInput placeholder=\"Search Category\"[(ngModel)]=\"searchInput\"  placeholder=\"Search\">\r\n              <mat-hint align=\"start\">\r\n                <strong>Search</strong> in all fields\r\n              </mat-hint>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    \r\n  \r\n    <mat-accordion *ngFor=\"let workOut of workOuts | filter:searchInput \">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            {{workOut.key}}\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Open here to show categories\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <section class=\"example-section\">\r\n           <div class=\"container1\" *ngFor=\"let category of workOut.value\">\r\n              <div style=\"margin:5px\">\r\n                  <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                  (change)=\"$event ? selection.toggle(category) : null\"\r\n                   [checked]=\"selection.isSelected(category)\" \r\n                  [color]=\"'primary'\">\r\n                </mat-checkbox>\r\n              </div>\r\n             <div>\r\n                <img *ngIf=\"category.image_url\" src=\"{{URL}}{{category.image_url}}\" width=\"90px\" height=\"90px\" alt=\"category image\" style=\"border-radius:5px\">\r\n                <img *ngIf=\"!category.image_url\"  src=\"https://image.freepik.com/free-vector/flat-computer-engineering-concept_23-2148154728.jpg\" width=\"90px\" height=\"90px\" alt=\"category image\" style=\"border-radius:5px\">\r\n             </div>\r\n             <div  style=\"margin:5px\">\r\n                <p style=\"margin-top:9px\"><b>{{category.name}}</b></p>\r\n                <p >{{category.description.length > 80 ? category.description.substring(0,80)+\"...\" : category.description}}</p>\r\n              <p *ngIf=\"category.video_url\"><a  href=\"javascript:;\">video</a></p>\r\n                  \r\n                   \r\n             </div>\r\n           </div>\r\n           </section>\r\n      \r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n    <div class=\"kt-separator kt-separator--dashed\"></div>\r\n    <div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit\">\r\n      <div class=\"kt-form__actions kt-form__actions--solid\">\r\n        <div class=\"row text-right\">\r\n          <div class=\"col-lg-12\">\r\n            <div mat-dialog-actions>\r\n              <button mat-button (click)=\"close()\">Cancel</button>\r\n              <button mat-button (click)=\"save()\" cdkFocusInitial>Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </kt-portlet-body>\r\n\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/workout/categories/categories.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/workout/categories/categories.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1 {\n  display: flex;\n  justify-content: flex-start;\n  padding: 5px;\n  margin: 5px; }\n\n.container1 div p {\n  line-height: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVycy9tZW1iZXItcHJvZmlsZS93b3Jrb3V0L2NhdGVnb3JpZXMvRTpcXEdFTUlOXFxneW1pbi0yLjAtc2Fhcy1mcm9udGVuZC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxtZW1iZXJzXFxtZW1iZXItcHJvZmlsZVxcd29ya291dFxcY2F0ZWdvcmllc1xcY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBRTtFQUNHLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFJaEI7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvd29ya291dC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIC5jb250YWluZXIxe1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgICBtYXJnaW46IDVweDtcclxuICAgIFxyXG59XHJcblxyXG4uY29udGFpbmVyMSBkaXYgcHtcclxuICBsaW5lLWhlaWdodDogOHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/workout/categories/categories.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/workout/categories/categories.component.ts ***!
  \***********************************************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var workOut_service_1 = __webpack_require__(/*! ../../../../../../core/auth/_services/workOut.service */ "./src/app/core/auth/_services/workOut.service.ts");
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(WorkOutService, dialogRef, data) {
        this.WorkOutService = WorkOutService;
        this.dialogRef = dialogRef;
        this.workOuts = [];
        // @ViewChild('searchInput') searchInput: ElementRef;
        this.selection = new collections_1.SelectionModel(true, []);
        this.subscriptions = [];
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.getWorkOuts();
    };
    CategoriesComponent.prototype.getWorkOuts = function () {
        var _this = this;
        var club_key = JSON.parse(localStorage.getItem('user'))['pub_key'];
        this.WorkOutService.getWorkOuts(club_key).subscribe(function (result) {
            var categories = result['data']['workout'];
            _this.URL = result['data']['url'];
            Object.keys(categories).forEach(function (elem) {
                var obj = { key: elem, value: categories[elem] };
                _this.workOuts.push(obj);
                console.log(result['data']['workout']);
            });
            console.log(_this.workOuts);
        });
    };
    CategoriesComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    CategoriesComponent.prototype.save = function () {
        console.log(this.selection.selected);
    };
    CategoriesComponent = __decorate([
        core_1.Component({
            selector: 'kt-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/views/pages/members/member-profile/workout/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/views/pages/members/member-profile/workout/categories/categories.component.scss")]
        }),
        __param(2, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [workOut_service_1.WorkOutService,
            material_1.MatDialogRef, Object])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;


/***/ }),

/***/ "./src/app/views/pages/members/member-profile/workout/workout.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/workout/workout.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/angular-calendar@0.27.8/css/angular-calendar.css\">\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div> -->\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div> -->\r\n\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"SaveAttendance()\"\r\n        [class.active]=\"true\"\r\n      >\r\n        Save\r\n      </div>\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div [ngSwitch]=\"view\">\r\n  <!-- <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view> -->\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [weekStartsOn]=\"startDay\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event,$event)\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <!-- <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/workout/workout.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/workout/workout.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVyLXByb2ZpbGUvd29ya291dC93b3Jrb3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/pages/members/member-profile/workout/workout.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/members/member-profile/workout/workout.component.ts ***!
  \*********************************************************************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var members_service_1 = __webpack_require__(/*! ../../members.service */ "./src/app/views/pages/members/members.service.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var categories_component_1 = __webpack_require__(/*! ./categories/categories.component */ "./src/app/views/pages/members/member-profile/workout/categories/categories.component.ts");
var colors = {
    red: {
        primary: '#CD5C5C',
        secondary: '#CD5C5C'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    },
    green: {
        primary: '#D0F0C0',
        secondary: '#D0F0C0'
    }
};
var WorkoutComponent = /** @class */ (function () {
    function WorkoutComponent(dialog, modal, service, memberService, router, route) {
        this.dialog = dialog;
        this.modal = modal;
        this.service = service;
        this.memberService = memberService;
        this.router = router;
        this.route = route;
        this.view = angular_calendar_1.CalendarView.Week;
        this.CalendarView = angular_calendar_1.CalendarView;
        this.viewDate = new Date();
        this.startDay = 1;
        this.refresh = new rxjs_1.Subject();
        this.activeDayIsOpen = true;
        this.options = '';
        this.membership_id = '';
        this.units_key = '';
        this.start_date = new Date();
        this.user_key = '';
        //ليه??
        this.trainer_key = '';
        this.events = [];
        this.selectedTimes = {};
        this.user_key = (this.router.url.split('/'))[5];
        // this.memberService.currentmember.subscribe(res => {
        //   console.log(res); if (res) this.user_key = res['pub_key']
        //   console.log(this.user_key)
        var status = this.route.snapshot.queryParamMap.get('status');
        if (status == 'pe') {
            status = 'active';
        }
        if (status == 'co') {
            status = 'complete';
        }
        if (this.user_key) {
            console.log(this.user_key);
            this.viewAttendance(this.user_key, this.trainer_key, '', '', status);
        }
        // })
    }
    WorkoutComponent.prototype.handleEvent = function (action, event, eventCell) {
        var _this = this;
        // this.modalData = { event,() action };
        // this.modal.open(this.modalContent, { size: 'lg' });
        var status;
        status = (JSON.parse(event['id'].toString()))['status'];
        console.log(status);
        if (status.includes("active") || status.includes("pending-payment")) {
            console.log(status);
            this.memberService.saveReschdualPackage(event['id']);
            var dialogRef = this.dialog.open(categories_component_1.CategoriesComponent, {
                data: event['id'],
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
                _this.data = result;
            });
        }
        else {
        }
    };
    /*
      get all schedual time
    */
    WorkoutComponent.prototype.viewAttendance = function (user_key, trainer_key, _package, startday, status) {
        var _this = this;
        this.service.viewAttendance({ user_key: user_key, trainer_key: trainer_key, package: _package, startday: startday, status: status }).subscribe(function (res) {
            console.log('all times', res);
            if (res['result']) {
                _this.refresh.next();
                _this.events = [];
                console.log(res.data);
                for (var i = 0; i < res.data.length; i++) {
                    var start = _this.get_UTC_timestamp(res.data[i].from);
                    var end = _this.get_UTC_timestamp(res.data[i].to);
                    var title = "name: " + "\n time:" + _this.gethoursandminutes(start) + " to " + _this.gethoursandminutes(end) + " " + 'workout-number : 0';
                    var color = colors.blue;
                    var id = "{\"day\":\"" + res.data[i].day + "\",\"status\":\"" + res.data[i].status + "\",\"branch_key\":\"" + res.data[i].branch_key + "\",\"club_key\":\"" + res.data[i].club_key + "\",\"package_id\":\"" + res.data[i].membership_id + "\",\"membership_id\":\"" + res.data[i].membershipandpayment_id + "\",\"trainer_key\":\"" + res.data[i].trainer_key + "\",\"user_key\":\"" + user_key + "\",\"units_key\":\"" + res.data[i].units_key + "\",\"from\":\"" + res.data[i].from + "\",\"to\":\"" + res.data[i].to + "\",\"_idAttendance\":\"" + res.data[i]._id + "\"}";
                    if (res.data[i].status == 'active')
                        color = colors.green;
                    if (res.data[i].status == "reschedual")
                        color = colors.yellow;
                    if (res.data[i].status == "cancel")
                        color = colors.red;
                    //if(i%2) var color = colors.blue;else var color = colors.yellow;
                    _this.events.push({ start: start, end: end, title: title, color: color, id: id });
                }
            }
        });
    };
    WorkoutComponent.prototype.SaveAttendance = function () {
        var times = new Array();
        Object.values(this.selectedTimes).forEach(function (item) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    times.push(item);
                    return [2 /*return*/];
                });
            });
        });
        var data = { units_key: this.units_key, package: this.membership_id, start_date: this.start_date, recervation: times };
        this.service.addAttendance(data).subscribe(function (res) {
            if (res['result']) {
                // action after recervation
            }
        });
    };
    WorkoutComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    WorkoutComponent.prototype.setView = function (view) {
        this.view = view;
    };
    WorkoutComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    WorkoutComponent.prototype.changeOptions = function (option) {
        this.options = option;
        console.log(this.options, option);
    };
    WorkoutComponent.prototype.gethoursandminutes = function (date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    WorkoutComponent.prototype.get_UTC_timestamp = function (date) {
        var d1 = new Date(date);
        var d2 = Date.UTC(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
        var utc_timestamp = new Date(d2);
        return utc_timestamp;
    };
    WorkoutComponent.prototype.objectSize = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };
    ;
    __decorate([
        core_1.ViewChild('modalContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], WorkoutComponent.prototype, "modalContent", void 0);
    WorkoutComponent = __decorate([
        core_1.Component({
            selector: 'kt-workout',
            template: __webpack_require__(/*! ./workout.component.html */ "./src/app/views/pages/members/member-profile/workout/workout.component.html"),
            styles: [__webpack_require__(/*! ./workout.component.scss */ "./src/app/views/pages/members/member-profile/workout/workout.component.scss")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog,
            ng_bootstrap_1.NgbModal,
            _services_1.SchedualService,
            members_service_1.MembersService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], WorkoutComponent);
    return WorkoutComponent;
}());
exports.WorkoutComponent = WorkoutComponent;


/***/ }),

/***/ "./src/app/views/pages/members/members.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/pages/members/members.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/views/pages/members/members.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/pages/members/members.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/members/members.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/members/members.component.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var MembersComponent = /** @class */ (function () {
    function MembersComponent(route) {
        this.route = route;
    }
    MembersComponent.prototype.ngOnInit = function () {
        console.log(this.route.url);
    };
    MembersComponent = __decorate([
        core_1.Component({
            selector: 'kt-members',
            template: __webpack_require__(/*! ./members.component.html */ "./src/app/views/pages/members/members.component.html"),
            styles: [__webpack_require__(/*! ./members.component.scss */ "./src/app/views/pages/members/members.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], MembersComponent);
    return MembersComponent;
}());
exports.MembersComponent = MembersComponent;


/***/ }),

/***/ "./src/app/views/pages/members/members.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/pages/members/members.module.ts ***!
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
var members_component_1 = __webpack_require__(/*! ./members.component */ "./src/app/views/pages/members/members.component.ts");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
//
var permission_guard_1 = __webpack_require__(/*! ../../../core/auth/_guards/permission.guard */ "./src/app/core/auth/_guards/permission.guard.ts");
//import { FileUploadModule } from '../../../../../node_modules/ng2-file-upload/file-upload/file-upload.module.d';
var sharing_module_1 = __webpack_require__(/*! ../sharing.module */ "./src/app/views/pages/sharing.module.ts");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_1 = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
var expansion_1 = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
//calender
var angularx_flatpickr_1 = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var date_fns_1 = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
var rechedual_edit_dialog_component_1 = __webpack_require__(/*! ./member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component.ts");
//childern component
var member_profile_component_1 = __webpack_require__(/*! ./member-profile/member-profile.component */ "./src/app/views/pages/members/member-profile/member-profile.component.ts");
var member_list_component_1 = __webpack_require__(/*! ./member-list/member-list.component */ "./src/app/views/pages/members/member-list/member-list.component.ts");
var about_member_component_1 = __webpack_require__(/*! ./member-profile/about-member/about-member.component */ "./src/app/views/pages/members/member-profile/about-member/about-member.component.ts");
var membership_member_component_1 = __webpack_require__(/*! ./member-profile/membership-member/membership-member.component */ "./src/app/views/pages/members/member-profile/membership-member/membership-member.component.ts");
var payments_member_component_1 = __webpack_require__(/*! ./member-profile/payments-member/payments-member.component */ "./src/app/views/pages/members/member-profile/payments-member/payments-member.component.ts");
var agreements_member_component_1 = __webpack_require__(/*! ./member-profile/agreements-member/agreements-member.component */ "./src/app/views/pages/members/member-profile/agreements-member/agreements-member.component.ts");
var reschedule_component_1 = __webpack_require__(/*! ./member-profile/reschedule/reschedule.component */ "./src/app/views/pages/members/member-profile/reschedule/reschedule.component.ts");
var add_membership_component_1 = __webpack_require__(/*! ./member-profile/membership-member/add-membership/add-membership.component */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/add-membership.component.ts");
var membership_list_component_1 = __webpack_require__(/*! ./member-profile/membership-member/membership-list/membership-list.component */ "./src/app/views/pages/members/member-profile/membership-member/membership-list/membership-list.component.ts");
var select_membership_component_1 = __webpack_require__(/*! ./member-profile/membership-member/add-membership/select-membership/select-membership.component */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/select-membership/select-membership.component.ts");
var schedule_component_1 = __webpack_require__(/*! ./member-profile/membership-member/add-membership/schedule/schedule.component */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/schedule/schedule.component.ts");
var payment_component_1 = __webpack_require__(/*! ./member-profile/membership-member/add-membership/payment/payment.component */ "./src/app/views/pages/members/member-profile/membership-member/add-membership/payment/payment.component.ts");
var my_page_module_1 = __webpack_require__(/*! ../my-page/my-page.module */ "./src/app/views/pages/my-page/my-page.module.ts");
var receipt_dialog_component_1 = __webpack_require__(/*! ./member-profile/payments-member/receipt-dialog/receipt-dialog.component */ "./src/app/views/pages/members/member-profile/payments-member/receipt-dialog/receipt-dialog.component.ts");
var show_reschdual_time_component_1 = __webpack_require__(/*! ./member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component */ "./src/app/views/pages/members/member-profile/reschedule/rechedual-edit/show-reschdual-time/show-reschdual-time.component.ts");
var reschdual_andcancel_component_1 = __webpack_require__(/*! ./member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component */ "./src/app/views/pages/members/member-profile/reschedule/reschdual-andcancel/reschdual-andcancel.component.ts");
var workout_component_1 = __webpack_require__(/*! ./member-profile/workout/workout.component */ "./src/app/views/pages/members/member-profile/workout/workout.component.ts");
var categories_component_1 = __webpack_require__(/*! ./member-profile/workout/categories/categories.component */ "./src/app/views/pages/members/member-profile/workout/categories/categories.component.ts");
var ng2_search_filter_1 = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var routes = [
    {
        path: '',
        component: members_component_1.MembersComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full',
            },
            {
                path: 'list/profile/:id',
                component: member_profile_component_1.MemberProfileComponent,
                data: { title: 'memberprofile' }, children: [{ path: 'about',
                        component: about_member_component_1.AboutMemberComponent,
                        data: { title: 'aboutprofile' } },
                    {
                        path: 'memership',
                        component: membership_member_component_1.MembershipMemberComponent,
                        data: { title: 'memership' },
                        children: [{ path: 'list/:pub_key', component: membership_list_component_1.MembershipListComponent }, { path: 'list', component: membership_list_component_1.MembershipListComponent }]
                    },
                    {
                        path: 'payment/:pub_key',
                        component: payments_member_component_1.PaymentsMemberComponent,
                        data: { title: 'memership' }
                    },
                    {
                        path: 'payment',
                        component: payments_member_component_1.PaymentsMemberComponent,
                        data: { title: 'memership' }
                    },
                    {
                        path: 'agreement',
                        component: agreements_member_component_1.AgreementsMemberComponent,
                        data: { title: 'memership-member' }
                    },
                    {
                        path: 'workout',
                        component: workout_component_1.WorkoutComponent,
                        data: { title: 'memership-member' },
                        children: []
                    },
                    {
                        path: 'reschedule/:pub_key',
                        component: reschedule_component_1.ReschedualComponent,
                        data: { title: 'memership-member' },
                        children: []
                    },
                    {
                        path: 'reschedules',
                        component: reschedule_component_1.ReschedualComponent,
                        data: { title: 'memership-member' },
                        children: []
                    },
                    {
                        path: 'reschedule',
                        component: reschedule_component_1.ReschedualComponent,
                        data: { title: 'memership-member' },
                        children: []
                    },
                    { path: 'ReschduelAndcancel/:id',
                        component: reschdual_andcancel_component_1.ReschdualAndcancelComponent }
                ]
            },
            {
                path: 'list/profiles/:id',
                component: member_profile_component_1.MemberProfileComponent,
                data: { title: 'memberprofile' }, children: [{ path: 'about',
                        component: about_member_component_1.AboutMemberComponent,
                        data: { title: 'aboutprofile' } },
                    {
                        path: 'memership',
                        component: membership_member_component_1.MembershipMemberComponent,
                        data: { title: 'memership' },
                        children: [{ path: 'list/:pub_key', component: membership_list_component_1.MembershipListComponent }, { path: 'list', component: membership_list_component_1.MembershipListComponent }]
                    },
                    {
                        path: 'payment/:pub_key',
                        component: payments_member_component_1.PaymentsMemberComponent,
                        data: { title: 'memership' }
                    },
                    {
                        path: 'payment',
                        component: payments_member_component_1.PaymentsMemberComponent,
                        data: { title: 'memership' }
                    },
                    {
                        path: 'agreement',
                        component: agreements_member_component_1.AgreementsMemberComponent,
                        data: { title: 'memership-member' }
                    },
                    {
                        path: 'reschedule/:pub_key',
                        component: reschedule_component_1.ReschedualComponent,
                        data: { title: 'memership-member' },
                        children: []
                    },
                    {
                        path: 'reschedule',
                        component: reschedule_component_1.ReschedualComponent,
                        data: { title: 'memership-member' },
                        children: []
                    },
                    { path: 'ReschduelAndcancel/:id',
                        component: reschdual_andcancel_component_1.ReschdualAndcancelComponent }
                ]
            },
            {
                path: 'list',
                component: member_list_component_1.MemberListComponent,
                data: { title: 'memberlist' }
            },
            { path: 'add/:id', component: add_membership_component_1.AddMembershipComponent, children: [
                    { path: 'select', component: select_membership_component_1.SelectMembershipComponent },
                    { path: 'select/:id', component: select_membership_component_1.SelectMembershipComponent },
                    { path: 'schedule', component: schedule_component_1.ScheduleComponent },
                    { path: 'schedule/:id', component: schedule_component_1.ScheduleComponent },
                    { path: 'payment-cart', component: payment_component_1.PaymentComponent },
                    { path: 'payment-cart/:id', component: payment_component_1.PaymentComponent },
                ] },
            {}
        ]
    }
];
var MembersModule = /** @class */ (function () {
    function MembersModule() {
    }
    MembersModule = __decorate([
        core_1.NgModule({
            imports: [
                ng_bootstrap_1.NgbModule,
                material_1.MatGridListModule, material_1.MatDividerModule, material_1.MatListModule, material_1.MatSidenavModule, material_1.MatToolbarModule, material_1.MatSlideToggleModule,
                common_1.CommonModule,
                http_1.HttpClientModule,
                sharing_module_1.SharedModule,
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
                expansion_1.MatExpansionModule,
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
                expansion_1.MatExpansionModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule,
                my_page_module_1.MyPageModule,
                angularx_flatpickr_1.FlatpickrModule.forRoot(),
                angular_calendar_1.CalendarModule.forRoot({
                    provide: angular_calendar_1.DateAdapter,
                    useFactory: date_fns_1.adapterFactory
                }),
                ng2_search_filter_1.Ng2SearchPipeModule
                // FileUploadModule
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
                receipt_dialog_component_1.ReceiptDialogComponent,
                crud_2.ActionNotificationComponent,
                rechedual_edit_dialog_component_1.ReschedualEditDialogComponent,
                show_reschdual_time_component_1.ShowReschdualTimeComponent,
                categories_component_1.CategoriesComponent
            ],
            declarations: [
                rechedual_edit_dialog_component_1.ReschedualEditDialogComponent,
                members_component_1.MembersComponent,
                member_profile_component_1.MemberProfileComponent,
                member_list_component_1.MemberListComponent,
                about_member_component_1.AboutMemberComponent,
                membership_member_component_1.MembershipMemberComponent,
                payments_member_component_1.PaymentsMemberComponent,
                agreements_member_component_1.AgreementsMemberComponent,
                reschedule_component_1.ReschedualComponent,
                add_membership_component_1.AddMembershipComponent,
                membership_list_component_1.MembershipListComponent,
                select_membership_component_1.SelectMembershipComponent,
                schedule_component_1.ScheduleComponent,
                payment_component_1.PaymentComponent,
                receipt_dialog_component_1.ReceiptDialogComponent,
                rechedual_edit_dialog_component_1.ReschedualEditDialogComponent,
                show_reschdual_time_component_1.ShowReschdualTimeComponent,
                reschdual_andcancel_component_1.ReschdualAndcancelComponent,
                workout_component_1.WorkoutComponent,
                categories_component_1.CategoriesComponent
            ]
        })
    ], MembersModule);
    return MembersModule;
}());
exports.MembersModule = MembersModule;


/***/ }),

/***/ "./src/app/views/pages/members/members.service.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/members/members.service.ts ***!
  \********************************************************/
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
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var _public_methods_1 = __webpack_require__(/*! ../../../core/_public/-public-methods */ "./src/app/core/_public/-public-methods.ts");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var _url = _public_methods_1.PublicMethods.createURL;
var MembersService = /** @class */ (function () {
    function MembersService(http) {
        this.http = http;
        this.membershipRenew = new rxjs_1.BehaviorSubject(null);
        this._saveReschdualPackage = new rxjs_1.BehaviorSubject(null);
        this.Url = new rxjs_1.BehaviorSubject("");
        this.member = new rxjs_1.BehaviorSubject("");
        this.membership = new rxjs_1.BehaviorSubject(null);
        this.submittedMembership = new rxjs_1.BehaviorSubject(false);
        this.selectedMembership = new rxjs_1.BehaviorSubject(null);
        this.dataOfSelectedPackage = new rxjs_1.BehaviorSubject(null);
        this.MembershipType = new rxjs_1.BehaviorSubject('');
        this._savedReschdualPackage = this._saveReschdualPackage.asObservable();
        this._membershipRenew = this.membershipRenew.asObservable();
        this.submittedValue = this.submittedMembership.asObservable();
        this.currentmember = this.member.asObservable();
        this.currentMembershipType = this.MembershipType.asObservable();
        this.currentDataofSelectedPackage = this.dataOfSelectedPackage.asObservable();
        this.currentMembership = this.membership.asObservable();
        this.currentSelectedMembership = this.selectedMembership.asObservable();
        this.currentUrl = this.Url.asObservable();
    }
    MembersService.prototype.saveReschdualPackage = function (saveReschdualPackage) {
        this._saveReschdualPackage.next(saveReschdualPackage);
    };
    MembersService.prototype.changeuser = function (member) {
        this.member.next(member);
    };
    MembersService.prototype.changemembership = function (membership) {
        this.membership.next(membership);
    };
    MembersService.prototype.changeSubmittedMembership = function (value) {
        this.submittedMembership.next(value);
    };
    MembersService.prototype.DataOfPackage = function (membership) {
        this.dataOfSelectedPackage.next(membership);
    };
    MembersService.prototype.changeSelectedMembership = function (selectedMembership) {
        this.selectedMembership.next(selectedMembership);
    };
    MembersService.prototype.changeType = function (type) {
        this.MembershipType.next(type);
    };
    MembersService.prototype.changeUrl = function (url) {
        this.Url.next(url);
    };
    MembersService.prototype.renewmembership = function (status) {
        this.membershipRenew.next(status);
    };
    MembersService.prototype.getAllMembers = function (pages, prepage, search, status, type, gender, payment, orderby, order) {
        if (status === void 0) { status = ''; }
        if (type === void 0) { type = ''; }
        if (gender === void 0) { gender = ''; }
        if (payment === void 0) { payment = ''; }
        if (orderby === void 0) { orderby = ''; }
        if (order === void 0) { order = -1; }
        var API_getAllUsers_URL = _url('customers', 'getallmembers', '', '', '', pages, prepage, search);
        if (status != '')
            API_getAllUsers_URL += '&status=' + status;
        if (type != '')
            API_getAllUsers_URL += '&type=' + type;
        if (gender != '')
            API_getAllUsers_URL += '&gender=' + gender;
        if (payment != '')
            API_getAllUsers_URL += '&payment=' + payment;
        if (orderby != '')
            API_getAllUsers_URL += '&orderby=' + orderby + '&order=' + order;
        return this.http.get(API_getAllUsers_URL);
    };
    MembersService.prototype.getMembership = function (pub_key, pages, prepage, search, status, schedual, payment, ids, orderby, order) {
        var API_getAllUsers_URL = _url('membership', 'getSelectedpackage', pub_key, '', '', pages, prepage, search);
        if (status != '')
            API_getAllUsers_URL += '&status=' + status;
        if (schedual != '')
            API_getAllUsers_URL += '&schedual=' + schedual;
        if (payment != '')
            API_getAllUsers_URL += '&payment=' + payment;
        if (ids != '')
            API_getAllUsers_URL += '&ids=' + ids;
        if (orderby != '')
            API_getAllUsers_URL += '&orderby=' + orderby + '&order=' + order;
        return this.http.get(API_getAllUsers_URL);
    };
    MembersService.prototype.updateMembership = function (id, editData) {
        return this.http.patch(_url('membership', 'updateSelectedpackage', id), editData);
    };
    MembersService.prototype.selectedPackages = function (pub_key, type, downgrade, upgrade, membership_id, units, branch) {
        var url = _url('membership', 'getPackages', '', '', '', null, null, null, pub_key, null, type, membership_id, downgrade, upgrade);
        if (units)
            url = url + '&units_key=' + units;
        if (branch)
            url = url + '&branch_key=' + branch;
        return this.http.get(url);
    };
    MembersService.prototype.addPackage = function (packag) {
        return this.http.post(_url('membership', 'selectePackage', ''), packag);
    };
    MembersService.prototype.upgradePackage = function (packag) {
        return this.http.post(_url('membership', 'upgradePackage', ''), packag);
    };
    MembersService.prototype.downgradePackage = function (packag) {
        return this.http.post(_url('membership', 'downgradePackage', ''), packag);
    };
    MembersService.prototype.getAllActivity = function () {
        return this.http.get(_url('activities', 'getActivity', ''));
    };
    MembersService.prototype.getPackageBYId = function (id) {
        return this.http.get(_url('membership', 'getPackagesById', id));
    };
    MembersService.prototype.getSelectedPackageById = function (id) {
        return this.http.get(_url('membership', 'getSelectedPackageById', id));
    };
    MembersService.prototype.getActivityById = function (id) {
        return this.http.get(_url('activities', 'getActivityById', id));
    };
    MembersService.prototype.updateSpacificMemberMemebership = function (membership_id, updatedData) {
        return this.http.patch(_url('membership', 'paymentPackage', membership_id), updatedData);
    };
    //bind active class of wizard
    MembersService.prototype.ActivePage = function () {
        var _this = this;
        this.currentUrl.subscribe(function (res) {
            _this.url = res;
            console.log(_this.url);
        });
        return this.url;
    };
    MembersService.prototype.isSelectedPackage = function (callback) {
        this.currentSelectedMembership.subscribe(function (res) {
            if (res == null) {
                callback(true);
            }
            else {
                callback(false);
            }
        });
    };
    MembersService.prototype.viewAttendance = function (data) {
        var API_getschedual_URL = _url('attendance', 'viewAttendance', '', '', '', 1, 10000000, '');
        return this.http.post(API_getschedual_URL, data);
    };
    MembersService.prototype.reschedualAttendance = function (data) {
        return this.http.post(_url('attendance', 'reschedualAttendance', '', '', ''), data);
    };
    MembersService.prototype.renewMebership = function (pub_key, data) {
        return this.http.post(_url('membership', 'renewmembership', pub_key, '', ''), data);
    };
    MembersService.prototype.getMemberById = function (id) {
        return this.http.get(_url('customers', 'getmember', id));
    };
    MembersService.prototype.cancelAttendance = function (id) {
        return this.http.post(_url('attendance', 'cancelAttendance', ''), id);
    };
    MembersService.prototype.upload_file = function () {
        return _url('media', 'uploadimage', '', '', '');
    };
    MembersService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MembersService);
    return MembersService;
}());
exports.MembersService = MembersService;


/***/ }),

/***/ "./src/app/views/pages/my-page/my-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/pages/my-page/my-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/angular-calendar@0.27.8/css/angular-calendar.css\">\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div> -->\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div> -->\r\n\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"SaveAttendance()\"\r\n        [class.active]=\"true\"\r\n      >\r\n        Save\r\n      </div>\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [weekStartsOn]=\"startDay\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <!-- <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view> -->\r\n</div>\r\n\r\n\r\n<!-- <ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Event action occurred</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      Action:\r\n      <pre>{{ modalData?.action }}</pre>\r\n    </div>\r\n    <div>\r\n      Event:\r\n      <pre>{{ modalData?.event | json }}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      OK\r\n    </button>\r\n  </div>\r\n</ng-template> -->\r\n"

/***/ }),

/***/ "./src/app/views/pages/my-page/my-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/pages/my-page/my-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbXktcGFnZS9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG15LXBhZ2VcXG15LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbXktcGFnZS9teS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/my-page/my-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/my-page/my-page.component.ts ***!
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var _services_1 = __webpack_require__(/*! ../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var members_service_1 = __webpack_require__(/*! ../members/members.service */ "./src/app/views/pages/members/members.service.ts");
var crud_1 = __webpack_require__(/*! ../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var _public_methods_1 = __webpack_require__(/*! ../../../core/_public/-public-methods */ "./src/app/core/_public/-public-methods.ts");
//route
var router_2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var MyPageComponent = /** @class */ (function () {
    function MyPageComponent(modal, router, service, Membershipservice, layoutUtilsService, route) {
        var _this = this;
        this.modal = modal;
        this.router = router;
        this.service = service;
        this.Membershipservice = Membershipservice;
        this.layoutUtilsService = layoutUtilsService;
        this.route = route;
        this.view = angular_calendar_1.CalendarView.Week;
        this.CalendarView = angular_calendar_1.CalendarView;
        this.viewDate = new Date();
        this.startDay = 1;
        this.refresh = new rxjs_1.Subject();
        this.activeDayIsOpen = true;
        this.user_key = this.router.parent.snapshot.paramMap.get('id');
        this.membership_id = this.router.snapshot.paramMap.get('id');
        this.units_key = this.router.snapshot.queryParamMap.get('iu');
        this.start_day = this.router.snapshot.queryParamMap.get('date');
        this.type = this.router.snapshot.queryParamMap.get('type');
        this.se_id = this.router.snapshot.queryParamMap.get('se_id');
        this.status = this.router.snapshot.queryParamMap.get('status');
        //console.log('fffffffffff',type,membership_id,units_key,this.user_key);
        if (this.membership_id && this.units_key && this.user_key) {
            if (this.type == 'activity')
                this.getActivity(this.membership_id);
            else
                this.getSchedual(this.units_key, this.membership_id, this.start_day);
        }
        else {
            this.Membershipservice.currentSelectedMembership.subscribe(function (res) {
                console.log(res);
                if (res) {
                    _this.selectedMembership = res;
                }
            });
            this.events = [];
            this.selectedTimes = {};
            if (this.selectedMembership) {
                //console.log(this.selectedMembership,this.selectedMembership['selectedpckage'].schedual_time);
                if (this.selectedMembership['selectedpckage'].schedual_time != undefined) {
                    this.view = angular_calendar_1.CalendarView.Month;
                    this.drawOnCalender(this.selectedMembership['selectedpckage'].schedual_time, true);
                }
                else
                    this.getSchedual(this.selectedMembership['units_key'], this.selectedMembership['membership_id'], this.selectedMembership['start_date']);
            }
        }
    }
    MyPageComponent.prototype.ngOnInit = function () {
        this.selectedTimes = [];
        var url = this.route.url.split('/');
        this.Membershipservice.changeUrl(url[url.length - 1]);
    };
    MyPageComponent.prototype.handleEvent = function (action, event) {
        var day = new Date(event.start).getDay();
        var from = new Date(event.start).getTime();
        var to = new Date(event.end).getTime();
        var selectcount = this.objectSize(this.selectedTimes);
        console.log(this.selectedTimes);
        if (event.color.primary == '#e3bc08') {
            delete this.selectedTimes[day];
            event.color = colors.blue;
        }
        else {
            if (this.selectedTimes[day] != undefined) {
                alert('You Select Time On this day Please unselect and select Again');
            }
            else {
                this.selectedTimes[day] = { from: from, to: to };
                event.color = { primary: '#e3bc08', secondary: '#CCC' };
            }
        }
    };
    /*
      get all schedual time
    */
    MyPageComponent.prototype.getSchedual = function (units_key, _package, startday) {
        var _this = this;
        startday = parseInt(startday) + 21600000;
        this.startDay = new Date(startday).getDay();
        this.viewDate = new Date(startday);
        console.log(startday, this.viewDate, this.startDay);
        var start_date = startday;
        this.service.getSchedual({ units_key: units_key, package: _package, start_date: start_date }).subscribe(function (res) {
            console.log('resut', res);
            if (res['result']) {
                _this.drawOnCalender(res.data);
            }
        });
    };
    /*
      get Activity By Id
    */
    MyPageComponent.prototype.getActivity = function (_package) {
        var _this = this;
        this.service.getActivity(_package).subscribe(function (res) {
            console.log('resut', res);
            if (res['result']) {
                _this.view = angular_calendar_1.CalendarView.Month;
                console.log('resut', res['data'][0].schedual_time);
                _this.drawOnCalender(res['data'][0].schedual_time, true);
            }
        });
    };
    MyPageComponent.prototype.SaveAttendance = function () {
        var _this = this;
        var convertTime = _public_methods_1.PublicMethods.convertLocalTimeToUTC;
        if (this.type == 'activity')
            this.route.navigate(['default/members/add', this.user_key, 'payment-cart']);
        else {
            var times = new Array();
            Object.values(this.selectedTimes).forEach(function (item) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        item = { from: convertTime(item['from']), to: convertTime(item['to']) };
                        times.push(item);
                        return [2 /*return*/];
                    });
                });
            });
            var data;
            if (this.status == 'co')
                data = { units_key: this.units_key, package: this.membership_id, start_date: this.start_day, reservation: times, user_key: this.user_key, selectePackage_id: this.se_id, status: 'active' };
            else if (this.membership_id && this.units_key && this.user_key)
                data = { units_key: this.units_key, package: this.membership_id, start_date: this.start_day, reservation: times, user_key: this.user_key, selectePackage_id: this.se_id };
            else
                data = { units_key: this.selectedMembership['units_key'], package: this.selectedMembership['membership_id'], start_date: this.selectedMembership['start_date'], selectePackage_id: this.selectedMembership['se_id'], reservation: times, user_key: this.user_key };
            this.service.addAttendance(data).subscribe(function (res) {
                if (res['result']) {
                    _this.layoutUtilsService.showActionNotification("reservation has sucessfully added", crud_1.MessageType.Create, 5000, true, true);
                    _this.route.navigate(['default/members/add', _this.user_key, 'payment-cart', _this.se_id]);
                }
                else
                    alert(res['error']);
            });
        }
    };
    MyPageComponent.prototype.drawOnCalender = function (data, activity) {
        if (activity === void 0) { activity = false; }
        this.refresh.next();
        var convertTime = _public_methods_1.PublicMethods.convertUTCToLocalTime;
        this.events = [];
        for (var i = 0; i < data.length; i++) {
            if (activity) {
                var start = new Date(convertTime(data[i].start, 2));
                var end = new Date(convertTime(data[i].end, 2));
            }
            else {
                var start = new Date(convertTime(data[i].from, 2));
                var end = new Date(convertTime(data[i].to, 2));
            }
            var id = this.gethoursandminutes(start) + " to " + this.gethoursandminutes(end);
            var title = this.gethoursandminutes(start) + " to " + this.gethoursandminutes(end);
            var color = colors.blue;
            //if(i%2) var color = colors.blue;else var color = colors.yellow;
            this.events.push({ id: id, start: start, end: end, title: title, color: color });
        }
    };
    MyPageComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    MyPageComponent.prototype.setView = function (view) {
        this.view = view;
    };
    MyPageComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    MyPageComponent.prototype.get_UTC_timestamp = function (date) {
        var d1 = new Date(date);
        var d2 = Date.UTC(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
        var utc_timestamp = new Date(d2);
        return utc_timestamp;
    };
    MyPageComponent.prototype.gethoursandminutes = function (date) {
        return ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    };
    MyPageComponent.prototype.objectSize = function (obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key))
                size++;
        }
        return size;
    };
    ;
    __decorate([
        core_1.ViewChild('modalContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], MyPageComponent.prototype, "modalContent", void 0);
    MyPageComponent = __decorate([
        core_1.Component({
            selector: 'kt-my-page',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: __webpack_require__(/*! ./my-page.component.html */ "./src/app/views/pages/my-page/my-page.component.html"),
            styles: [__webpack_require__(/*! ./my-page.component.scss */ "./src/app/views/pages/my-page/my-page.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            router_1.ActivatedRoute,
            _services_1.SchedualService, members_service_1.MembersService, crud_1.LayoutUtilsService, router_2.Router])
    ], MyPageComponent);
    return MyPageComponent;
}());
exports.MyPageComponent = MyPageComponent;


/***/ }),

/***/ "./src/app/views/pages/my-page/my-page.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/pages/my-page/my-page.module.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var angularx_flatpickr_1 = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var date_fns_1 = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var my_page_component_1 = __webpack_require__(/*! ./my-page.component */ "./src/app/views/pages/my-page/my-page.component.ts");
var MyPageModule = /** @class */ (function () {
    function MyPageModule() {
    }
    MyPageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModalModule,
                angularx_flatpickr_1.FlatpickrModule.forRoot(),
                angular_calendar_1.CalendarModule.forRoot({
                    provide: angular_calendar_1.DateAdapter,
                    useFactory: date_fns_1.adapterFactory
                })
            ],
            declarations: [my_page_component_1.MyPageComponent],
            exports: [my_page_component_1.MyPageComponent]
        })
    ], MyPageModule);
    return MyPageModule;
}());
exports.MyPageModule = MyPageModule;


/***/ })

}]);
//# sourceMappingURL=default~app-views-pages-members-members-module~app-views-themes-default-theme-module.js.map