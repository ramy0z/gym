(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-user-management-user-management-module"],{

/***/ "./src/app/views/pages/user-management/club_tree/_sub/_DataShow/club_tree_data.html":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/club_tree/_sub/_DataShow/club_tree_data.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\"\r\n    [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n    <div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{ data['header'] }}</h3>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"data&&data.edit\">\r\n        <div class=\"kt-form\">\r\n            <div class=\"kt-portlet__body\">\r\n                <div *ngIf=\"treeItemForm\">\r\n                    <form *ngIf=\"data\" [formGroup]=\"treeItemForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n                        <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n                            (close)=\"onAlertClose($event)\">\r\n                            Oh snap! Change a few things up and try submitting again.\r\n                        </kt-alert>\r\n                        <div class=\"kt-form__section kt-form__section--first\">\r\n                            <div *ngIf=\"!resource\" class=\"form-group kt-form__group row\">\r\n                                <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput formControlName=\"name\" placeholder=\"name\" />\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['name'].touched&&treeItemForm.controls['name'].errors?.required\"> Name is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['name'].touched&&treeItemForm.controls['name'].invalid&&treeItemForm.controls['name'].errors?.pattern\"> Please enter\r\n                                            <strong>valid name</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>name</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput formControlName=\"username\" placeholder=\"username\" />\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['username'].touched&&treeItemForm.controls['username'].errors?.required\"> Name is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['username'].touched&&treeItemForm.controls['username'].invalid&&treeItemForm.controls['username'].errors?.pattern\"> Please enter\r\n                                            <strong>valid name</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>username</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput formControlName=\"email\" placeholder=\"email\" />\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['email'].touched&&treeItemForm.controls['email'].errors?.required\"> Name is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['email'].touched&&treeItemForm.controls['email'].invalid&&treeItemForm.controls['email'].errors?.email\"> Please enter\r\n                                            <strong>valid email</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>Email</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput placeholder=\"country\" formControlName='Country' />\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['Country'].touched&&treeItemForm.controls['Country'].errors?.required\"> Country is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['Country'].touched&&treeItemForm.controls['Country'].invalid&&treeItemForm.controls['Country'].errors?.pattern\"> Please enter\r\n                                            <strong>valid country</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>Country</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput placeholder=\"city\" formControlName='City' />\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['City'].touched&&treeItemForm.controls['City'].errors?.required\"> Name is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['City'].touched&&treeItemForm.controls['City'].touched&&treeItemForm.controls['City'].invalid&&treeItemForm.controls['City'].errors?.pattern\"> Please enter\r\n                                            <strong>valid City</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>City</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput formControlName=\"brief\" placeholder=\"brief\" />\r\n                                        <mat-error>brief is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>brief</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div *ngIf=\"!data._id&&!data.id\" class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput formControlName=\"password\" placeholder=\"password\" />\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['password'].touched&&treeItemForm.controls['password'].errors?.required\"> Name is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-error *ngIf=\"treeItemForm.controls['password'].touched&&treeItemForm.controls['password'].invalid&&treeItemForm.controls['password'].errors?.min\"> Please enter\r\n                                            <strong>at least 8 chars</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>password</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput formControlName=\"lat\" placeholder=\"lat\" />\r\n                                        <mat-error>lat is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>lat</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                    <mat-form-field class=\"mat-form-field-fluid\">\r\n                                        <input matInput formControlName=\"lang\" placeholder=\"lang\" />\r\n                                        <mat-error>lang is\r\n                                            <strong>required</strong>\r\n                                        </mat-error>\r\n                                        <mat-hint align=\"start\">\r\n                                            <strong>lang</strong>\r\n                                        </mat-hint>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div *ngIf=\"resource\" class=\"form-group kt-form__group row\">\r\n                                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput formControlName=\"title\" placeholder=\"title\" />\r\n                                            <mat-error>title is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-hint align=\"start\">\r\n                                                <strong>title</strong>\r\n                                            </mat-hint>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div  *ngIf=\"!data._id&&!data.id\" class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput formControlName=\"confirmPassword\"  placeholder=\"confirm password\" />\r\n                                            <div *ngIf=\"valid.confirmPassword.errors.mustMatch\">Passwords must match</div>\r\n                                            <mat-hint align=\"start\">\r\n                                                <strong>password</strong>\r\n                                            </mat-hint>\r\n                                        </mat-form-field>\r\n                                    </div> -->\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n                <!--end::Form-->\r\n                <div *ngIf=\"data.edit\" class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                    <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                        <div class=\"row text-right\">\r\n                            <div class=\"col-lg-12\">\r\n                                <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data\" cdkFocusInitial\r\n                                    matTooltip=\"Cancel changes\">\r\n                                    Cancel\r\n                                </button>&nbsp;\r\n                                <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"save()\"\r\n                                    [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n                                    Save\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!data.edit&&!resource\">\r\n        <div class=\"kt-portlet__body\">\r\n            <div class=\"kt-form__section kt-form__section--first\">\r\n                <div class=\"form-group kt-form__group row\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>name</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.name}}</p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>username</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.username}}</p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>email</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.email}}</p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>Address</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.Adress}}</p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>brief</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.brief}}</p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>lat</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.lat}}</p>\r\n                    </div>\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>lang</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.lang}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"!data.edit&&resource\">\r\n        <div class=\"kt-portlet__body\">\r\n            <div class=\"kt-form__section kt-form__section--first\">\r\n                <div class=\"form-group kt-form__group row\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-hint align=\"start\">\r\n                            <strong>title</strong>\r\n                        </mat-hint>\r\n                        <p>{{data.title}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/user-management/club_tree/_sub/_DataShow/club_tree_data.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/club_tree/_sub/_DataShow/club_tree_data.ts ***!
  \****************************************************************************************/
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
var club_tree_service_1 = __webpack_require__(/*! ../../../../../../core/auth/_services/club-tree.service */ "./src/app/core/auth/_services/club-tree.service.ts");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var ng2_validation_1 = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
var ClubTreeDataComponent = /** @class */ (function () {
    function ClubTreeDataComponent(dialogRef, itemFB, router, clubTreeService, data, layoutUtilsService) {
        this.dialogRef = dialogRef;
        this.itemFB = itemFB;
        this.router = router;
        this.clubTreeService = clubTreeService;
        this.data = data;
        this.layoutUtilsService = layoutUtilsService;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
        this.resource = false;
        this.regx = /^[^+!@^#$%),(&.`=_]*$/;
        this.nameRegx = /^([^0-9]*)$/;
        this.data = data['node'];
        //console.log(this.data)
        if (this.data['type'] == 'resources')
            this.resource = true;
        else
            this.resource = false;
        //console.log(this.resource)
        if (this.data['_id'])
            this.prepareDataToShow();
        else
            this.createForm();
    }
    ClubTreeDataComponent.prototype.ngOnInit = function () {
        //console.log(this.data)
        if (this.data['_id'] || this.data['id'])
            this.prepareDataToShow();
        else
            this.createForm();
    };
    ClubTreeDataComponent.prototype.createForm = function () {
        console.log('bgbng', this.data);
        this.treeItemForm = this.itemFB.group({
            name: [this.data['name'], [forms_1.Validators.required, forms_1.Validators.pattern(this.regx), forms_1.Validators.pattern(this.nameRegx)]],
            City: [this.data['city'], [forms_1.Validators.required, forms_1.Validators.pattern(this.regx)]],
            Country: [this.data['country'], [forms_1.Validators.required, forms_1.Validators.pattern(this.regx)]],
            email: [this.data['email'], [ng2_validation_1.CustomValidators.email]],
            brief: [this.data['brief'], forms_1.Validators.required],
            title: [this.data['title'], forms_1.Validators.required],
            lat: [this.data['lat'], forms_1.Validators.required],
            lang: [this.data['lang'], forms_1.Validators.required],
            username: [this.data['username'], [forms_1.Validators.required, forms_1.Validators.pattern(this.regx), forms_1.Validators.pattern(this.nameRegx)]],
            password: [this.data['password'], [forms_1.Validators.required, forms_1.Validators.min(8)]]
        });
        // confirmPassword: ['', Validators.required})
        // }, {
        //     validator: MustMatch('password', 'confirmPassword')
        // })
        //console.log(this.treeItemForm)
    };
    //method to access data from server
    ClubTreeDataComponent.prototype.prepareDataToShow = function () {
        var _this = this;
        this.resource = false;
        var edit = this.data['edit'];
        var type = this.data['type'];
        if (this.data['type'] == 'branch') {
            this.clubTreeService.getBranchData(this.data['pub_key']).subscribe(function (res) {
                if (res && res['result']) {
                    _this.data = res['user'];
                    _this.data['edit'] = edit;
                    _this.data['type'] = type;
                    _this.data['header'] = _this.data['name'] + "  informaton";
                    _this.createForm();
                }
            });
        }
        else if (this.data['type'] == 'units') {
            this.clubTreeService.getUnitData(this.data['pub_key']).subscribe(function (res) {
                if (res && res['result']) {
                    _this.data = res['user'];
                    _this.data['edit'] = edit;
                    _this.data['type'] = type;
                    _this.data['header'] = _this.data['name'] + "  informaton";
                    //console.log(res['user'])
                    _this.createForm();
                }
            });
        }
        else if (this.data['type'] == 'resources') {
            this.clubTreeService.getResourceData(this.data['_id']).subscribe(function (res) {
                //console.log(res,)
                if (res && res['result']) {
                    _this.data = res['data'][0];
                    _this.data['edit'] = edit;
                    _this.data['type'] = type;
                    _this.data['header'] = _this.data['title'] + "  informaton";
                    //console.log(this.data)
                    _this.resource = true;
                    _this.createForm();
                }
            });
        }
    };
    ClubTreeDataComponent.prototype.addItem = function () {
        var _this = this;
        //console.log()
        this.resource = false;
        var user, club_key;
        if (localStorage.getItem('user')) {
            user = JSON.parse(localStorage.getItem('user'))['username'];
            club_key = JSON.parse(localStorage.getItem('user'))['pub_key'];
        }
        this.checkedForm();
        this.resource = false;
        var controls = this.treeItemForm.controls;
        if (this.data['type'] == 'units') {
            this.clubTreeService.addUnits({ 'branch_key': this.data['branch_key'], 'units_key': this.data['units_key'],
                'username': controls['username'].value, 'name': controls['name'].value,
                'email': controls['email'].value, 'city': controls['City'].value,
                'country': controls['Country'].value, 'brief': controls['brief'].value, 'lat': controls['lat'].value, 'lang': controls['lang'].value, 'password': controls['password'].value }).subscribe(function (res) {
                //console.log(res)
                if (res['result']) {
                    _this.afterupdate();
                }
                else {
                    _this.errormessage = res['error'];
                }
            });
        }
        else if (this.data['type'] == 'resources') {
            this.resource = true;
            this.clubTreeService.addResources({ 'branch_key': this.data['branch_key'], 'units_key': this.data['units_key'], 'club_key': club_key,
                'title': controls['title'].value,
            }).subscribe(function (res) {
                //console.log(res)
                if (res['result']) {
                    _this.afterupdate();
                }
                else {
                    _this.errormessage = res['error'];
                }
            });
        }
        else if (this.data['type'] == 'branch') {
            this.clubTreeService.addBranch({
                'username': controls['username'].value, 'name': controls['name'].value,
                'email': controls['email'].value, 'country': controls['Country'].value,
                'city': controls['City'].value, 'brief': controls['brief'].value, 'lat': controls['lat'].value, 'lang': controls['lang'].value, 'password': controls['password'].value
            }).subscribe(function (res) {
                if (res['result']) {
                    _this.afterupdate();
                }
                else {
                    _this.hasFormErrors = true;
                    _this.errormessage = res['error'];
                }
            });
        }
    };
    ClubTreeDataComponent.prototype.onSubmit = function () {
        var _this = this;
        this.resource = false;
        var controls = this.treeItemForm.controls;
        this.checkedForm();
        if (this.data['type'] == 'branch') {
            this.clubTreeService.updateBranchData({
                'pub_key': this.data['pub_key'],
                'name': controls['name'].value,
                'username': controls['username'].value,
                'country': controls['Country'].value,
                'city': controls['City'].value,
                'email': controls['email'].value,
                'brief': controls['brief'].value,
                'lat': controls['lat'].value,
                'lang': controls['lang'].value,
                'password': controls['password'].value
            }).subscribe(function (res) {
                //console.log(res, this.data)
                if (res['result']) {
                    _this.afterupdate();
                }
                else {
                    _this.errormessage = res['error'];
                }
            });
        }
        else if (this.data['type'] == 'units') {
            this.clubTreeService.updateUnitData({
                'pub_key': this.data['pub_key'],
                'username': controls['username'].value,
                'name': controls['name'].value,
                'country': controls['Country'].value,
                'city': controls['City'].value,
                'email': controls['email'].value,
                'brief': controls['brief'].value,
                'lat': controls['lat'].value,
                'lang': controls['lang'].value,
                'password': controls['password'].value
            }).subscribe(function (res) {
                //console.log(res)
                if (res['result']) {
                    _this.afterupdate();
                }
                else {
                    _this.errormessage = res['error'];
                }
            });
        }
        else if (this.data['type'] == 'resources') {
            this.resource = true;
            //console.log(this.data)
            this.clubTreeService.updateResourceData({ 'title': controls['title'], '_id': this.data['_id'] }).subscribe(function (res) {
                //console.log(res)
                if (res['result']) {
                    _this.afterupdate();
                }
                else {
                    _this.errormessage = res['error'];
                }
            });
        }
    };
    ClubTreeDataComponent.prototype.afterupdate = function () {
        var _this = this;
        this.dialogRef.close({});
        //console.log(this.router.url)
        if (this.router.url == '/default/user-management/clubtree')
            this.router.navigate(['/default/user-management/clubtrees']);
        else
            this.router.navigate(['/default/user-management/clubtree']);
        setTimeout(function () {
            _this.layoutUtilsService.showActionNotification("successfuly update " + _this.data['type'], crud_1.MessageType.Update);
        }, 1000);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ClubTreeDataComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    ClubTreeDataComponent.prototype.checkedForm = function () {
        this.hasFormErrors = false;
        var controls = this.treeItemForm.controls;
        //console.log(this.treeItemForm)
        if (this.treeItemForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                controls[controlName].markAsTouched();
            });
            //console.log('invalid')
            this.hasFormErrors = true;
            return;
        }
    };
    ClubTreeDataComponent.prototype.save = function () {
        //console.log(this.data)
        if (this.data['_id'] || this.data['id']) {
            this.onSubmit();
        }
        else {
            this.addItem();
        }
    };
    Object.defineProperty(ClubTreeDataComponent.prototype, "valid", {
        get: function () { return this.treeItemForm.controls; },
        enumerable: true,
        configurable: true
    });
    ClubTreeDataComponent = __decorate([
        core_1.Injectable(),
        core_1.Component({
            selector: 'club_tree_data',
            template: __webpack_require__(/*! ./club_tree_data.html */ "./src/app/views/pages/user-management/club_tree/_sub/_DataShow/club_tree_data.html"),
        }),
        __param(4, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef,
            forms_1.FormBuilder,
            router_1.Router,
            club_tree_service_1.ClubTreeService, Object, crud_1.LayoutUtilsService])
    ], ClubTreeDataComponent);
    return ClubTreeDataComponent;
}());
exports.ClubTreeDataComponent = ClubTreeDataComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/club_tree/club_tree.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/user-management/club_tree/club_tree.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drop-above {\r\n  border-top: 10px solid #dddddd;\r\n  margin-top: -10px;\r\n}\r\n\r\n.drop-below {\r\n  border-bottom: 10px solid #dddddd;\r\n  margin-bottom: -10px;\r\n}\r\n\r\n.drop-center {\r\n  background-color: #dddddd;\r\n}\r\n\r\n.warn-snackbar{\r\n  background-color: #ff4081;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L2NsdWJfdHJlZS9jbHViX3RyZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L2NsdWJfdHJlZS9jbHViX3RyZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wLWFib3ZlIHtcclxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5kcm9wLWJlbG93IHtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbn1cclxuXHJcbi5kcm9wLWNlbnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZGRkZDtcclxufVxyXG4ud2Fybi1zbmFja2JhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/user-management/club_tree/club_tree.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/user-management/club_tree/club_tree.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n  <!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n  <!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n  <kt-portlet-header [title]=\"'Club Tree'\" [class]=\"'kt-portlet__head--lg'\">\r\n    <ng-container ktPortletTools>\r\n      <button (click)=\" Show_EditData({type:'branch'},true)\" mat-raised-button color=\"primary\"\r\n        matTooltip=\"add branch\">Add Branch\r\n      </button>\r\n      <!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n      <!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n    </ng-container>\r\n  </kt-portlet-header>\r\n  <mat-tree *ngIf=\"dataSource\" [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\r\n      <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\">\r\n        <mat-icon class=\"mat-icon-rtl-mirror\">\r\n          {{node['child'] ? 'expand_more' : ''}}\r\n        </mat-icon>\r\n      </button>\r\n      <button *ngIf=\"!node._id\" mat-icon-button color=\"accent\">\r\n        <mat-icon>folder_open</mat-icon>\r\n      </button>\r\n      <span [ngClass]=\"{'drop-above': dragNodeExpandOverArea === 'above' && dragNodeExpandOverNode === node,\r\n    'drop-below': dragNodeExpandOverArea === 'below' && dragNodeExpandOverNode === node,\r\n    'drop-center': dragNodeExpandOverArea === 'center' && dragNodeExpandOverNode === node}\" draggable=\"true\"\r\n        (dragstart)=\"handleDragStart($event, node);\" (dragover)=\"handleDragOver($event, node);\"\r\n        (drop)=\"handleDrop($event, node);\" (dragend)=\"handleDragEnd($event);\">{{node.item}}</span>\r\n      <button *ngIf=\"node._id\" mat-icon-button color=\"accent\" (click)=\" Show_EditData(node,false)\">\r\n        <mat-icon>visibility</mat-icon>\r\n      </button>\r\n      <button *ngIf=\"node._id&&node.access\" mat-icon-button color=\"accent\" (click)=\" Show_EditData(node,true)\">\r\n        <mat-icon>edit</mat-icon>\r\n      </button>\r\n      <button *ngIf=\"node._id&&node.access\" mat-icon-button color=\"accent\" (click)=\"deleteItem(node)\">\r\n        <mat-icon>delete</mat-icon>\r\n      </button>\r\n    </mat-tree-node>\r\n\r\n    <!-- <mat-tree-node *matTreeNodeDef=\"let node; when: hasNoContent\" matTreeNodePadding>\r\n     <button mat-icon-button disabled></button>\r\n     <mat-form-field>\r\n       <input matInput #itemValue placeholder=\"New item...\">\r\n     </mat-form-field>\r\n     <button mat-button (click)=\"saveNode(node, itemValue.value)\">Save</button>\r\n  </mat-tree-node> -->\r\n\r\n    <mat-tree-node *matTreeNodeDef=\"let node; when: hasChild\" matTreeNodePadding>\r\n      <button mat-icon-button matTreeNodeToggle [attr.aria-label]=\"'toggle ' + node.filename\">\r\n        <mat-icon class=\"mat-icon-rtl-mirror\">\r\n          {{node['child'] ? 'expand_more' : 'empty'}}\r\n        </mat-icon>\r\n      </button>\r\n      <button *ngIf=\"!node._id&&node.type=='resources'\" mat-icon-button color=\"accent\">\r\n        <mat-icon>spa</mat-icon>\r\n      </button>\r\n      <button *ngIf=\"!node._id&&node.type=='units'\" mat-icon-button color=\"accent\">\r\n      <img  _ngcontent-c24=\"\" alt=\"\" src=\"./assets/media/icons/Fitness Building.png\">\r\n      </button>\r\n      <!-- <span _ngcontent-c24=\"\" class=\"kt-widget4__icon ng-star-inserted\"><i _ngcontent-c24=\"\" class=\"flaticon2-line-chart kt-font-danger\" ng-reflect-ng-class=\"flaticon2-line-chart kt-font-d\"></i></span> -->\r\n      <span [ngClass]=\"{'drop-above': dragNodeExpandOverArea === 'above' && dragNodeExpandOverNode === node,\r\n    'drop-below': dragNodeExpandOverArea === 'below' && dragNodeExpandOverNode === node,\r\n    'drop-center': dragNodeExpandOverArea === 'center' && dragNodeExpandOverNode === node}\" draggable=\"true\"\r\n        (dragstart)=\"handleDragStart($event, node);\" (dragover)=\"handleDragOver($event, node);\"\r\n        (drop)=\"handleDrop($event, node);\" (dragend)=\"handleDragEnd($event);\">{{node.item}}</span>\r\n      <button *ngIf=\"node._id\" mat-icon-button color=\"accent\" (click)=\" Show_EditData(node,false)\">\r\n        <mat-icon>visibility</mat-icon>\r\n      </button>\r\n      <button *ngIf=\"node._id&&node.access\" mat-icon-button color=\"accent\" (click)=\" Show_EditData(node,true)\">\r\n        <mat-icon>edit</mat-icon>\r\n      </button>\r\n      <button *ngIf=\"node._id&&node.access\" mat-icon-button color=\"accent\" (click)=\"deleteItem(node)\">\r\n        <mat-icon>delete</mat-icon>\r\n      </button>\r\n      <button *ngIf=\"!node._id&&node.access\" mat-icon-button color=\"accent\" (click)='Show_EditData(node,true)'>\r\n        <mat-icon>add</mat-icon>\r\n      </button>\r\n    </mat-tree-node>\r\n  </mat-tree>\r\n  <span #emptyItem></span>\r\n\r\n\r\n</kt-portlet>"

/***/ }),

/***/ "./src/app/views/pages/user-management/club_tree/club_tree.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/user-management/club_tree/club_tree.component.ts ***!
  \******************************************************************************/
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
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var tree_1 = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var tree_2 = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var club_tree_service_1 = __webpack_require__(/*! ../../../../core/auth/_services/club-tree.service */ "./src/app/core/auth/_services/club-tree.service.ts");
var crud_1 = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
//Dialog 
var club_tree_data_1 = __webpack_require__(/*! ./_sub/_DataShow/club_tree_data */ "./src/app/views/pages/user-management/club_tree/_sub/_DataShow/club_tree_data.ts");
var layout_1 = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var TodoItemNode = /** @class */ (function () {
    function TodoItemNode() {
    }
    return TodoItemNode;
}());
exports.TodoItemNode = TodoItemNode;
/** Flat to-do item node with expandable and level information */
var TodoItemFlatNode = /** @class */ (function () {
    function TodoItemFlatNode() {
    }
    return TodoItemFlatNode;
}());
exports.TodoItemFlatNode = TodoItemFlatNode;
/**
* The Json object for to-do list data.
*/
/**
* Checklist database, it can build a tree structured Json object.
* Each node in Json object represents a to-do item or a category.
* If a node is a category, it has children items and new items can be added under the category.
*/
var ChecklistDatabase = /** @class */ (function () {
    function ChecklistDatabase(clubTreeSevice, changeDetectorRefs, layoutConfigService) {
        this.clubTreeSevice = clubTreeSevice;
        this.changeDetectorRefs = changeDetectorRefs;
        this.layoutConfigService = layoutConfigService;
        this.dataChange = new rxjs_1.BehaviorSubject([]);
        this.initialize();
    }
    Object.defineProperty(ChecklistDatabase.prototype, "data", {
        get: function () {
            if (this.dataChange)
                return this.dataChange.value;
        },
        enumerable: true,
        configurable: true
    });
    ChecklistDatabase.prototype.initialize = function () {
        var _this = this;
        // Build the tree nodes from Json object. The result is a list of `TodoItemNode` with nested
        //     file node as children.
        this.clubTreeSevice.getUnitsData().subscribe(function (res) {
            if (res && res['result']) {
                res['data'].forEach(function (elem) {
                    elem['type'] = 'branch';
                    elem['branch_key'] = elem['pub_key'];
                });
                var data = _this.buildFileTree(res['data'], 0);
                console.log(data);
                _this.dataChange.next(data);
                _this.changeDetectorRefs.detectChanges();
            }
        }, function (error) { console.log(error); });
    };
    /**
    * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
    * The return value is the list of `TodoItemNode`.
    */
    // buildFileTree(obj: object, level: number): TodoItemNode[] {
    //   console.log(obj)
    //   return Object.keys(obj).reduce<TodoItemNode[]>((accumulator, key) => {
    //     const value = obj[key];
    //     const node = new TodoItemNode();
    //     console.log(value)
    //     node.item=value['name']
    //     Object.values(value).forEach(value=>{
    //      if(typeof value =='object')
    //      {
    //        console.log(typeof value)
    //        node.children= this.buildFileTree(value,level+1)
    //      }
    //     })
    //     return accumulator.concat(node);
    //   }, []);
    //   }
    ChecklistDatabase.prototype.buildFileTree = function (obj, level) {
        var _this = this;
        return Object.keys(obj).reduce(function (accumulator, key, currentindex) {
            var node = new TodoItemNode();
            node['pub_key'] = obj[key]['pub_key'];
            node['parent'] = obj[key]['parent'];
            node['_id'] = obj[key]['_id'];
            node['type'] = obj[key]['type'];
            node['access'] = obj[key]['access'];
            if (obj[key]['type'] == 'branch') {
                node['branch_key'] = obj[key]['pub_key'];
            }
            if (obj['type'] == 'units') {
                node['units_key'] = obj['pub_key'];
            }
            if (obj['branch_key']) {
                node['branch_key'] = obj['branch_key'];
            }
            if (obj['units_key']) {
                node['units_key'] = obj[key]['units_key'];
            }
            if (key == 'units') {
                node['access'] = obj['access'];
                if (obj['branch_key']) {
                    node['branch_key'] = obj['branch_key'];
                }
                if (obj['units_key']) {
                    node['units_key'] = obj['units_key'];
                }
                node['pub_key'] = obj['pub_key'];
                node['type'] = 'units';
            }
            if (key == 'resources') {
                node['access'] = obj['access'];
                node['pub_key'] = obj['pub_key'];
                node['type'] = 'resources';
            }
            if (key == '0' || parseInt(key)) {
                node.item = obj[key]['name'];
            }
            else {
                node.item = key;
            }
            var notImportantitem = ['_id', 'access', 'pub_key', 'parent', 'name', 'type', 'branch_key'];
            var value = obj[key];
            if (value != null) {
                if (typeof value === 'object') {
                    if (!(key == '0' || parseInt(key))) {
                        if (value && value.length > 0) {
                            value['pub_key'] = obj['pub_key'];
                            value.forEach(function (elem) {
                                elem['type'] = key;
                                elem['branch_key'] = obj['branch_key'];
                            });
                        }
                    }
                    node.children = _this.buildFileTree(value, level + 1);
                }
                else {
                    node.item = value;
                }
                if (!notImportantitem.includes(key)) {
                    return accumulator.concat(node);
                }
                else
                    return accumulator.concat();
            }
        }, []);
    };
    /** Add an item to to-do list */
    ChecklistDatabase.prototype.insertItem = function (parent, node) {
        //  console.log(parent)
        if (!parent.children) {
            parent.children = [];
        }
        var newItem = node;
        console.log(newItem);
        parent.children.push(newItem);
        this.dataChange.next(this.data);
        return newItem;
    };
    ChecklistDatabase.prototype.getParentFromNodes = function (node) {
        for (var i = 0; i < this.data.length; ++i) {
            var currentRoot = this.data[i];
            var parent_1 = this.getParent(currentRoot, node);
            if (parent_1 != null) {
                return parent_1;
            }
        }
        return null;
    };
    ChecklistDatabase.prototype.getParent = function (currentRoot, node) {
        if (currentRoot.children && currentRoot.children.length > 0) {
            for (var i = 0; i < currentRoot.children.length; ++i) {
                var child = currentRoot.children[i];
                if (child === node) {
                    return currentRoot;
                }
                else if (child.children && child.children.length > 0) {
                    var parent_2 = this.getParent(child, node);
                    if (parent_2 != null) {
                        return parent_2;
                    }
                }
            }
        }
        return null;
    };
    ChecklistDatabase.prototype.insertItemAbove = function (node, nodechild) {
        var parentNode = this.getParentFromNodes(node);
        //  console.log(parentNode)
        var newItem = nodechild;
        if (parentNode != null) {
            parentNode.children.splice(parentNode.children.indexOf(node), 0, newItem);
        }
        else {
            this.data.splice(this.data.indexOf(node), 0, newItem);
        }
        this.dataChange.next(this.data);
        console.log(this.data);
        return newItem;
    };
    ChecklistDatabase.prototype.insertItemBelow = function (node, nodechild) {
        var parentNode = this.getParentFromNodes(node);
        var newItem = nodechild;
        if (parentNode != null) {
            parentNode.children.splice(parentNode.children.indexOf(node) + 1, 0, newItem);
        }
        else {
            this.data.splice(this.data.indexOf(node) + 1, 0, newItem);
        }
        this.dataChange.next(this.data);
        return newItem;
    };
    ChecklistDatabase.prototype.updateItem = function (node, nodechild) {
        node = nodechild;
        this.dataChange.next(this.data);
    };
    ChecklistDatabase.prototype.deleteItem = function (node) {
        this.deleteNode(this.data, node);
        this.dataChange.next(this.data);
    };
    ChecklistDatabase.prototype.copyPasteItem = function (from, to) {
        var _this = this;
        console.log(from, to);
        var newItem = this.insertItem(to, { 'item': from['item'], 'pub_key': from['pub_key'], 'type': from['type'], '_id': from['_id'], 'parent': from['parent'] });
        if (from.children) {
            from.children.forEach(function (child) {
                _this.copyPasteItem(child, newItem);
            });
        }
        return newItem;
    };
    ChecklistDatabase.prototype.copyPasteItemAbove = function (from, to) {
        var _this = this;
        var newItem = this.insertItemAbove(to, { 'item': from['item'], 'pub_key': from['pub_key'], 'type': from['type'], '_id': from['_id'], 'parent': from['parent'] });
        if (from.children) {
            from.children.forEach(function (child) {
                _this.copyPasteItem(child, newItem);
            });
        }
        return newItem;
    };
    ChecklistDatabase.prototype.copyPasteItemBelow = function (from, to) {
        var _this = this;
        var newItem = this.insertItemBelow(to, { 'item': from['item'], 'pub_key': from['pub_key'], 'type': from['type'], '_id': from['_id'], 'parent': from['parent'] });
        if (from.children) {
            from.children.forEach(function (child) {
                _this.copyPasteItem(child, newItem);
            });
        }
        return newItem;
    };
    ChecklistDatabase.prototype.deleteNode = function (nodes, nodeToDelete) {
        var _this = this;
        var index = nodes.indexOf(nodeToDelete, 0);
        if (index > -1) {
            nodes.splice(index, 1);
        }
        else {
            nodes.forEach(function (node) {
                if (node.children && node.children.length > 0) {
                    _this.deleteNode(node.children, nodeToDelete);
                }
            });
        }
    };
    ChecklistDatabase = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [club_tree_service_1.ClubTreeService,
            core_1.ChangeDetectorRef,
            layout_1.LayoutConfigService])
    ], ChecklistDatabase);
    return ChecklistDatabase;
}());
exports.ChecklistDatabase = ChecklistDatabase;
/**
* @title Tree with checkboxes
*/
var ClubTreeComponent = /** @class */ (function () {
    function ClubTreeComponent(database, treeClubService, dialog, layoutUtilsService, treeclubservice, snackBar, changeDetectorRefs) {
        var _this = this;
        this.database = database;
        this.treeClubService = treeClubService;
        this.dialog = dialog;
        this.layoutUtilsService = layoutUtilsService;
        this.treeclubservice = treeclubservice;
        this.snackBar = snackBar;
        this.changeDetectorRefs = changeDetectorRefs;
        /** Map from flat node to nested node. This helps us finding the nested node to be modified */
        this.flatNodeMap = new Map();
        /** Map from nested node to flattened node. This helps us to keep the same object for selection */
        this.nestedNodeMap = new Map();
        /** A selected parent node to be inserted */
        this.selectedParent = null;
        /** The new item's name */
        this.newItemName = '';
        this.dragNodeExpandOverWaitTimeMs = 300;
        /** The selection for checklist */
        this.checklistSelection = new collections_1.SelectionModel(true /* multiple */);
        //config data of dialog of show data and edit
        this.getLevel = function (node) { return node.level; };
        this.isExpandable = function (node) { return node.expandable; };
        this.getChildren = function (node) { return node.children; };
        this.hasChild = function (_, _nodeData) { return _nodeData.expandable; };
        this.hasNoContent = function (_, _nodeData) { return _nodeData.item === ''; };
        /**
        * Transformer to convert nested node to flat node. Record the nodes in maps for later use.
        */
        this.transformer = function (node, level) {
            var existingNode = _this.nestedNodeMap.get(node);
            var flatNode = existingNode && existingNode.item === node.item
                ? existingNode
                : new TodoItemFlatNode();
            flatNode.item = node.item;
            flatNode.level = level;
            flatNode['pub_key'] = node['pub_key'];
            if (node['branch_key'])
                flatNode['branch_key'] = node['branch_key'];
            if (node['units_key'])
                flatNode['units_key'] = node['units_key'];
            flatNode['_id'] = node['_id'];
            flatNode['access'] = node['access'];
            if (node['_id'] == undefined && node['pub_key'] == undefined && node['parent'] == undefined) {
                //console.log( this.database.getParentFromNodes(node)['pub_key'])
                console.log(node);
                flatNode['access'] = _this.database.getParentFromNodes(node)['access'];
                flatNode['pub_key'] = _this.database.getParentFromNodes(node)['pub_key'];
                //this.database.updateItem(node,flatNode)
                //console.log(flatNode)
            }
            if (node.children)
                flatNode['child'] = node['children'].length;
            flatNode['type'] = node['type'];
            flatNode.expandable = !!node.children;
            _this.flatNodeMap.set(flatNode, node);
            _this.nestedNodeMap.set(node, flatNode);
            return flatNode;
        };
        this.treeFlattener = new tree_2.MatTreeFlattener(this.transformer, this.getLevel, this.isExpandable, this.getChildren);
        this.treeControl = new tree_1.FlatTreeControl(this.getLevel, this.isExpandable);
        this.dataSource = new tree_2.MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        // this.changeDetectorRefs.detectChanges()
        database.dataChange.subscribe(function (data) {
            _this.dataSource.data = data;
        });
    }
    /** Whether all the descendants of the node are selected */
    ClubTreeComponent.prototype.descendantsAllSelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        return descendants.every(function (child) { return _this.checklistSelection.isSelected(child); });
    };
    /** Whether part of the descendants are selected */
    ClubTreeComponent.prototype.descendantsPartiallySelected = function (node) {
        var _this = this;
        var descendants = this.treeControl.getDescendants(node);
        var result = descendants.some(function (child) { return _this.checklistSelection.isSelected(child); });
        return result && !this.descendantsAllSelected(node);
    };
    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    ClubTreeComponent.prototype.todoItemSelectionToggle = function (node) {
        var _a, _b;
        this.checklistSelection.toggle(node);
        var descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node) ? (_a = this.checklistSelection).select.apply(_a, descendants) : (_b = this.checklistSelection).deselect.apply(_b, descendants);
    };
    /** Select the category so we can insert the new item. */
    ClubTreeComponent.prototype.addNewItem = function (node) {
        var parentNode = this.flatNodeMap.get(node);
        this.database.insertItem(parentNode, {});
        this.treeControl.expand(node);
    };
    /** Save the node to database */
    ClubTreeComponent.prototype.saveNode = function (node, itemValue) {
        var nestedNode = this.flatNodeMap.get(node);
        this.database.updateItem(nestedNode, itemValue);
    };
    ClubTreeComponent.prototype.Show_EditData = function (node, editable) {
        if (!editable) {
            if (this.checkedpermission('getallusers')) {
                node['edit'] = editable;
                var data = { node: node };
                this.dialog.open(club_tree_data_1.ClubTreeDataComponent, { data: data });
            }
            else {
                this.open();
                //alert('You dont have permission to get this data')
            }
        }
        else if (editable) {
            if (node._id) {
                if (this.checkedpermission('updateuserdata')) {
                    node['edit'] = editable;
                    var data = { node: node };
                    this.dialog.open(club_tree_data_1.ClubTreeDataComponent, { data: data });
                }
                else {
                    this.open();
                    // alert('You dont have permission to get this data')
                }
            }
            else if (!node._id) {
                if (this.checkedpermission('createuser')) {
                    node['edit'] = editable;
                    var data = { node: node };
                    this.dialog.open(club_tree_data_1.ClubTreeDataComponent, { data: data });
                }
                else {
                    this.open();
                    //    alert('You dont have permission to get this data')
                }
            }
        }
    };
    ClubTreeComponent.prototype.open = function () {
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
    //checked the permission of user to do any action 
    ClubTreeComponent.prototype.checkedpermission = function (key) {
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
    ClubTreeComponent.prototype.deleteItem = function (node) {
        var _this = this;
        if (this.checkedpermission('deleteuserdata')) {
            var _title = node['type'];
            var _description = "Are you sure to permanently delete this " + node['type'] + "?";
            var _waitDesciption = node['type'] + " is deleting...";
            var _deleteMessage_1 = node['type'] + " has been deleted";
            if (node['type'] == 'branch') {
                var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        return;
                    }
                    _this.treeClubService.DeleteBranch(node['pub_key']).subscribe(function (res) {
                        console.log(res);
                        if (res['result']) {
                            _this.database.deleteItem(_this.flatNodeMap.get(node));
                            _this.layoutUtilsService.showActionNotification(_deleteMessage_1, crud_1.MessageType.Delete);
                        }
                    });
                });
            }
            if (node['type'] == 'units') {
                var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        return;
                    }
                    _this.treeClubService.DeleteUnit(node['pub_key']).subscribe(function (res) {
                        if (res['result']) {
                            _this.database.deleteItem(_this.flatNodeMap.get(node));
                            _this.layoutUtilsService.showActionNotification(_deleteMessage_1, crud_1.MessageType.Delete);
                            console.log(res);
                        }
                    });
                });
            }
            if (node['type'] == 'resources') {
                var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        return;
                    }
                    _this.treeClubService.DeleteResource(node['_id']).subscribe(function (res) {
                        if (res['result']) {
                            _this.database.deleteItem(_this.flatNodeMap.get(node));
                            _this.layoutUtilsService.showActionNotification(_deleteMessage_1, crud_1.MessageType.Delete);
                        }
                    });
                });
            }
        }
        else {
            this.open();
            //alert('You dont have permission to delete ')
        }
    };
    ClubTreeComponent.prototype.handleDragStart = function (event, node) {
        // Required by Firefox (https://stackoverflow.com/questions/19055264/why-doesnt-html5-drag-and-drop-work-in-firefox)
        event.dataTransfer.setData('foo', 'bar');
        event.dataTransfer.setDragImage(this.emptyItem.nativeElement, 0, 0);
        this.dragNode = node;
        console.log('dragNode', this.dragNode);
        this.treeControl.collapse(node);
    };
    ClubTreeComponent.prototype.handleDragOver = function (event, node) {
        event.preventDefault();
        // Handle node expand
        if (node === this.dragNodeExpandOverNode) {
            if (this.dragNode !== node && !this.treeControl.isExpanded(node)) {
                if ((new Date().getTime() - this.dragNodeExpandOverTime) > this.dragNodeExpandOverWaitTimeMs) {
                    this.treeControl.expand(node);
                }
            }
        }
        else {
            this.dragNodeExpandOverNode = node;
            this.dragNodeExpandOverTime = new Date().getTime();
        }
        // Handle drag area
        var percentageX = event.offsetX / event.target.clientWidth;
        var percentageY = event.offsetY / event.target.clientHeight;
        if (percentageY < 0.25) {
            this.dragNodeExpandOverArea = 'above';
        }
        else if (percentageY > 0.75) {
            this.dragNodeExpandOverArea = 'below';
        }
        else {
            this.dragNodeExpandOverArea = 'center';
        }
    };
    ClubTreeComponent.prototype.handleDrop = function (event, node) {
        var _this = this;
        event.preventDefault();
        var DragNode = this.flatNodeMap.get(this.dragNode);
        var DropArea = this.flatNodeMap.get(node);
        var _title = node['type'];
        var _description = "Are you sure to permanently drag " + DragNode['type'] + " to " + DropArea['type'] + "?";
        var _waitDesciption = DragNode['type'] + " is draging...";
        var _unadraggableMessage = "may be there is problem to drag this element ,try again and choose correctly area to drop ";
        console.log(this.dragNode);
        console.log(this.dragNode, node, this.flatNodeMap.get(this.dragNode), this.flatNodeMap.get(node));
        if (node !== this.dragNode && this.dragNode['type'] != 'branch' && this.dragNode['type'] == node['type']) {
            var dialogRef = this.layoutUtilsService.dragElement(_title, _description, _waitDesciption);
            dialogRef.afterClosed().subscribe(function (res) {
                console.log(res);
                if (!res) {
                    return;
                }
                console.log(_this.dragNode);
                if (!DragNode['_id']) {
                    if (DragNode.children && DragNode.children.length > 0) {
                        DragNode.children.forEach(function (dragElem) {
                            _this.handelDragElem(_this.flatNodeMap.get(node), dragElem);
                            dragElem['parent'] = DropArea['pub_key'];
                            if (DragNode.item == 'resources') {
                                _this.updateResource(dragElem['parent'], dragElem['_id'], node['type']);
                            }
                            if (DragNode.item == 'units') {
                                console.log('units');
                                _this.updateUnit(dragElem['pub_key'], DropArea['pub_key'], node['type']);
                            }
                        });
                        _this.database.deleteItem(_this.flatNodeMap.get(_this.dragNode));
                    }
                }
                else if (node['_id']) {
                    if (DropArea['children']) {
                        DropArea['children'].forEach(function (elem) {
                            console.log('type of drop area', elem['type'], 'drag area', DragNode['type']);
                            if (elem['type'] == DragNode['type']) {
                                console.log(elem);
                                _this.handelDragElem(elem, DragNode);
                            }
                        });
                    }
                }
                else {
                    console.log(node, DragNode);
                    _this.handelDragElem(DropArea, DragNode);
                    DragNode['parent'] == DropArea['pub_key'];
                    if (DragNode['type'] == 'resources') {
                        _this.updateResource(DropArea['pub_key'], DragNode['_id'], node['type']);
                    }
                    if (DragNode['type'] == 'units') {
                        _this.updateUnit(DragNode['pub_key'], DropArea['pub_key'], node['type']);
                    }
                }
            });
        }
        else {
            this.layoutUtilsService.showActionNotification(_unadraggableMessage, crud_1.MessageType.Read);
        }
        this.dragNode = null;
        this.dragNodeExpandOverNode = null;
        this.dragNodeExpandOverTime = 0;
        console.log(this.dataSource.data);
    };
    ClubTreeComponent.prototype.handleDragEnd = function (event) {
        this.dragNode = null;
        this.dragNodeExpandOverNode = null;
        this.dragNodeExpandOverTime = 0;
    };
    ClubTreeComponent.prototype.updateUnit = function (pub_key, parent, updateArea) {
        if (updateArea == 'branch')
            this.treeclubservice.updateUnitData({ 'pub_key': pub_key, 'branch_key': parent }).subscribe(function (res) {
            });
        if (updateArea == 'units')
            this.treeclubservice.updateUnitData({ 'pub_key': pub_key, 'units_key': parent }).subscribe(function (res) {
            });
    };
    ClubTreeComponent.prototype.updateResource = function (parent, _id, updatearea) {
        if (updatearea == 'units')
            this.treeclubservice.updateResourceData({ 'units_key': parent, '_id': _id }).subscribe(function (res) { console.log(res); });
        if (updatearea == 'branch')
            this.treeclubservice.updateResourceData({ 'branch_key': parent, '_id': _id }).subscribe(function (res) { console.log(res); });
    };
    ClubTreeComponent.prototype.handelDragElem = function (node, dragElem) {
        var newItem;
        if (this.dragNodeExpandOverArea === 'above') {
            newItem = this.database.copyPasteItemAbove(dragElem, node);
        }
        else if (this.dragNodeExpandOverArea === 'below') {
            newItem = this.database.copyPasteItemBelow(dragElem, node);
        }
        else {
            newItem = this.database.copyPasteItem(dragElem, node);
        }
        this.database.deleteItem(dragElem);
        //  console.log(newItem)
        this.treeControl.expandDescendants(this.nestedNodeMap.get(newItem));
    };
    __decorate([
        core_1.ViewChild('emptyItem'),
        __metadata("design:type", core_1.ElementRef)
    ], ClubTreeComponent.prototype, "emptyItem", void 0);
    ClubTreeComponent = __decorate([
        core_1.Component({
            selector: 'club_tree.component',
            template: __webpack_require__(/*! ./club_tree.component.html */ "./src/app/views/pages/user-management/club_tree/club_tree.component.html"),
            providers: [ChecklistDatabase],
            entryComponents: [],
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ./club_tree.component.css */ "./src/app/views/pages/user-management/club_tree/club_tree.component.css")]
        }),
        __metadata("design:paramtypes", [ChecklistDatabase, club_tree_service_1.ClubTreeService, material_1.MatDialog,
            crud_1.LayoutUtilsService,
            club_tree_service_1.ClubTreeService,
            material_2.MatSnackBar,
            core_1.ChangeDetectorRef])
    ], ClubTreeComponent);
    return ClubTreeComponent;
}());
exports.ClubTreeComponent = ClubTreeComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/invitations/invitations-edit/invitations-edit.dialog.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/invitations/invitations-edit/invitations-edit.dialog.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\"\r\n    [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n    <div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{ getTitle() }}</h3>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"kt-form\">\r\n            <div class=\"kt-portlet__body\">\r\n\r\n                <div class=\"kt-portlet__body-progress\">\r\n                    <mat-spinner [diameter]=\"20\"></mat-spinner>\r\n                </div>\r\n\r\n                <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\"\r\n                    (close)=\"onAlertClose($event)\">\r\n                    {{errormessage}}\r\n                </kt-alert>\r\n                <kt-alert *ngIf=\"checked\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\"\r\n                    (close)=\"onAlertClose($event)\">\r\n                    Sorry , May be You don not all invitation permissions\r\n                </kt-alert>\r\n                <div class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"text\" placeholder=\"Enter Email\" [(ngModel)]=\"invitation.email\"\r\n                                #email=\"ngModel\" name=\"email\" required email />\r\n                            <mat-error *ngIf=\"email.touched&&!email.valid&&email.errors?.required\">Email is\r\n                                <strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error *ngIf=\"email.touched&&!email.valid&&email.errors?.email\">Please enter\r\n                                <strong>valid email</strong>\r\n                            </mat-error>\r\n                            <mat-hint align=\"start\">Please enter\r\n                                <strong>Email</strong>\r\n                            </mat-hint>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\r\n                        <mat-form-field>\r\n                            <mat-label> User Type:</mat-label>\r\n                            <mat-select required [(ngModel)]=\"invitation.user_type\"\r\n                                class=\"btn-group bootstrap-select bs-select\">\r\n                                <mat-option selected ng-reflect-value=\"staff\" value=\"staff\">Staff</mat-option>\r\n                                <mat-option ng-reflect-value=\"member\" value=\"member\">Member</mat-option>\r\n                            </mat-select>\r\n                            <mat-error>Please select\r\n                                <strong>user type</strong>\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-form-field>\r\n                            <mat-label> All Branchs and Units :</mat-label>\r\n                            <mat-select [(ngModel)]=\"invitation.brancandunits\"\r\n                                class=\"btn-group bootstrap-select bs-select\">\r\n                                <!-- <mat-option *ngFor=\"let value of basicChoose\">\r\n                                    <mat-checkbox (change)=\"value.checked=!value.checked;onChange(value);\">\r\n                                        {{value.name}}\r\n                                    </mat-checkbox>\r\n                                </mat-option> -->\r\n                                <ng-container *ngFor=\"let value of allbrancandunits\">\r\n                                    <mat-option>\r\n                                        <mat-checkbox [checked]='value.checked'\r\n                                            (change)=\"value.checked=!value.checked;onChange(value)\">{{value.name}}\r\n                                        </mat-checkbox>\r\n                                    </mat-option>\r\n                                    <mat-list style=\"margin-left:30px;\">\r\n                                        <div *ngFor=\"let unit of value.unit\">\r\n                                            <mat-list-item style=\"font-size: small;\">\r\n                                                <mat-checkbox [checked]='unit.checked'\r\n                                                    (change)=\"unit.checked=!unit.checked;onChange(unit)\">{{unit.name}}\r\n                                                </mat-checkbox>\r\n                                            </mat-list-item>\r\n                                        </div>\r\n                                    </mat-list>\r\n\r\n                                </ng-container>\r\n                            </mat-select>\r\n                            <mat-error>Please select\r\n                                <strong>branch and units</strong>\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"kt-separator kt-separator--dashed\"></div>\r\n            </div>\r\n            <div class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                    <div class=\"row text-right\">\r\n                        <div class=\"col-lg-12\">\r\n                            <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial\r\n                                matTooltip=\"Cancel changes\">\r\n                                Cancel\r\n                            </button>&nbsp;\r\n                            <button type=\"button\" [disabled]='checked' mat-raised-button color=\"primary\"\r\n                                (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/invitations/invitations-edit/invitations-edit.dialog.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/invitations/invitations-edit/invitations-edit.dialog.component.ts ***!
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
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// Lodash
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var invitations_model_1 = __webpack_require__(/*! ./invitations.model */ "./src/app/views/pages/user-management/invitations/invitations-edit/invitations.model.ts");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var InvitationsEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<InvitationsEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function InvitationsEditDialogComponent(dialogRef, data, ChangeDetectorRef, store, ser, router, layoutUtilsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.store = store;
        this.ser = ser;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.hasFormErrors = false;
        this.errormessage = '';
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
        this.allbrancandunits = [];
        this.checked = false;
        this.current_club_login = (JSON.parse(localStorage.getItem('user')))['current_club_login'];
        this.allbrancandunits.push({ name: 'mainclub', 'pub_key': this.current_club_login, 'checked': false, 'unit': [] });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    //getallusers
    /**
     * On init
     */
    InvitationsEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        var newInviation = new invitations_model_1.Invitation();
        this.invitation$ = rxjs_1.of(newInviation);
        this.invitation$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.invitation = res;
        });
        if (this.checkedpermission('getallusers')) {
            this.ser.getAllBrachsAndUnits(1, 10000).subscribe(function (res) {
                if (res['result']) {
                    var branchs_1 = [];
                    res['data'].forEach(function (element) {
                        if (element.type == 'branch') {
                            branchs_1.push(element);
                            var units_1 = [];
                            res['data'].forEach(function (elem, index) {
                                if (elem.branch_key == element.pub_key) {
                                    units_1.push(elem);
                                    delete res['data'][index];
                                }
                            });
                            element['unit'] = units_1;
                            _this.allbrancandunits.push(element);
                        }
                        element['checked'] = false;
                    });
                    //this.allbrancandunits = res['data'];
                    console.log(_this.allbrancandunits);
                }
            });
        }
        else {
            this.checked = true;
        }
    };
    /**
     * On destroy
     */
    InvitationsEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Save data
     */
    InvitationsEditDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        var invitationKey = [];
        this.allbrancandunits.forEach(function (element) {
            if (element.checked == true) {
                invitationKey.push(element.pub_key);
            }
            element.unit.forEach(function (elem) {
                if (elem.checked == true)
                    invitationKey.push(elem.pub_key);
            });
        });
        console.log(invitationKey);
        if (this.checkedpermission('sendinvitations')) {
            this.ser.sendInvitations({ email: this.invitation.email, user_type: this.invitation.user_type, invitation_key: invitationKey, club_key: this.current_club_login }).subscribe(function (res) {
                console.log(res);
                if (res['result']) {
                    _this.dialogRef.close({});
                    if (_this.router.url == '/default/user-management/invitations')
                        _this.router.navigateByUrl("/default/user-management/invitation");
                    else
                        _this.router.navigateByUrl("/default/user-management/invitations");
                    setTimeout(function () {
                        _this.layoutUtilsService.showActionNotification(res['data'], crud_1.MessageType.Update);
                    }, 1000);
                }
                else {
                    _this.loadingAfterSubmit = false;
                    _this.viewLoading = false;
                    _this.hasFormErrors = true;
                    _this.errormessage = res['data'];
                }
            });
        }
        else {
            this.checked = true;
        }
    };
    //to check assign club,branch,unit to invitation 
    InvitationsEditDialogComponent.prototype.onChange = function (place) {
        console.log(place);
        if (place.name == 'mainclub' && place.checked == true) {
            //	console.log(place)
            for (var index = 0; index < this.allbrancandunits.length; index++) {
                this.allbrancandunits[index]['checked'] = true;
                for (var i = 0; i < this.allbrancandunits[index].unit.length; i++) {
                    this.allbrancandunits[index].unit[i]['checked'] = true;
                }
                this.ChangeDetectorRef.detectChanges();
            }
        }
        if (place.name == 'mainclub' && place.checked == false) {
            console.log(place);
            for (var index = 0; index < this.allbrancandunits.length; index++) {
                this.allbrancandunits[index]['checked'] = false;
                for (var i = 0; i < this.allbrancandunits[index].unit.length; i++) {
                    this.allbrancandunits[index].unit[i]['checked'] = false;
                }
                this.ChangeDetectorRef.detectChanges();
            }
        }
        if (place.type == 'branch' && place.checked == true) {
            console.log(place);
            for (var index = 0; index < place.unit.length; index++) {
                place.unit[index]['checked'] = true;
                this.ChangeDetectorRef.detectChanges();
            }
        }
        if (place.type == 'branch' && place.checked == false) {
            console.log(place);
            for (var index = 0; index < place.unit.length; index++) {
                place.unit[index]['checked'] = false;
                this.ChangeDetectorRef.detectChanges();
            }
        }
    };
    InvitationsEditDialogComponent.prototype.checkedpermission = function (key) {
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
    /**
     * Close alert
     *
     * @param $event: Event
     */
    InvitationsEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    /** UI */
    /**
     * Returns component title
     */
    InvitationsEditDialogComponent.prototype.getTitle = function () {
        return 'New Invitation';
    };
    InvitationsEditDialogComponent.prototype.isTitleValid = function () {
        return true;
    };
    InvitationsEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-invitations-edit-dialog',
            template: __webpack_require__(/*! ./invitations-edit.dialog.component.html */ "./src/app/views/pages/user-management/invitations/invitations-edit/invitations-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            styles: [__webpack_require__(/*! ../../usser.management.scss */ "./src/app/views/pages/user-management/usser.management.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, core_1.ChangeDetectorRef,
            store_1.Store, _services_1.UserService, router_1.Router,
            crud_1.LayoutUtilsService])
    ], InvitationsEditDialogComponent);
    return InvitationsEditDialogComponent;
}());
exports.InvitationsEditDialogComponent = InvitationsEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/invitations/invitations-edit/invitations.model.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/invitations/invitations-edit/invitations.model.ts ***!
  \***********************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var Invitation = /** @class */ (function (_super) {
    __extends(Invitation, _super);
    function Invitation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Invitation.prototype.clear = function () {
        this.id = undefined;
        this.email = '';
        this.user_type = '';
        this.brancandunits = [];
    };
    return Invitation;
}(crud_1.BaseModel));
exports.Invitation = Invitation;


/***/ }),

/***/ "./src/app/views/pages/user-management/invitations/invitations.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/invitations/invitations.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"'Invitations'\" [class]=\"'kt-portlet__head--lg'\" >\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addInvitations()\" mat-raised-button color=\"primary\" matTooltip=\"Invite new Staff\">Send Invitation </button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<!-- start::Body (attribute: ktPortletBody) -->\r\n\t<div *ngIf=\"isLoading\" class=\"center\" style=\"padding: 150px;\">\r\n\t\t<mat-progress-spinner style=\"margin:0 auto;\" mode=\"indeterminate\" diameter=\"40\">\r\n\t\t</mat-progress-spinner>\r\n\t</div>\r\n\t<kt-portlet-body  *ngIf=\"!isLoading\">\r\n\t\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t\t<div class=\"kt-form\"  >\r\n\t\t\t\t<!-- start::FILTERS -->\r\n\t\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterStatus\" (selectionChange)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"\">All</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"pending\">Pending</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"approved\">Approved</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"revoked\">Revoked</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\t<strong>Filter</strong> by Status\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\t\t\t\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterPlace\" (selectionChange)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"\">All</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let value of Places\"  [value]=\"value.pub_key\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{value.name}}\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\t<strong>Filter</strong> by Branchs and Units\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterInvitedBy\" (selectionChange)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"\">All</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let value of getallinviteby\"  [value]=\"value.pub_key\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{value.name}}\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\t<strong>Filter</strong> by Admin\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Search user\" [(ngModel)]=\"SearchKey\" placeholder=\"Search then Press Enter\"\r\n\t\t\t\t\t\t\t\t\t(keyup.enter)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"onSearchClear()\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::FILTERS -->\r\n\r\n\t\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\"><!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }}\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (users-list.component.ts file) -->\r\n\t\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t\t<button (click)=\"fetchUsers()\" mat-raised-button matTooltip=\"Fetch selected users\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\r\n\t\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t\t<mat-table class=\"lmat-elevation-z8\"\r\n\t\t\t\t\t#table\r\n\t\t\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\t\t\tmatSort\r\n\t\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t\t<!-- Checkbox Column -->\r\n\r\n\t\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t\t<!-- <ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell (click)=\"applyFilter('id')\" style=\"max-width:100px\" *matHeaderCellDef mat-sort-header>#</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let invitation; let i = index\">{{i+1}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"username\">\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef (click)=\"applyFilter('email')\" mat-sort-header >Email</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let invitation\" >{{invitation.to}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<ng-container matColumnDef=\"admin\">\r\n\t\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef >Invited By</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let invitation\" >{{invitation.author.username}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"createdat\">\r\n\t\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef >Invitation Date</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let invitation\" >{{invitation.createdat | date :'M-d-yy h:mm a'}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t\t<mat-header-cell (click)=\"applyFilter('status')\" *matHeaderCellDef mat-sort-header >Status</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell  *matCellDef=\"let invitation\" >\r\n\t\t\t\t\t\t\t<span *ngIf=\"invitation.status=='approved'\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">Approved</span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"invitation.status=='pending'\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--metal kt-badge--wide\">Pending</span>\r\n\t\t\t\t\t\t\t<span *ngIf=\"invitation.status=='revoked'\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--danger kt-badge--wide\">Revoked</span>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"joindat\">\r\n\t\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef >Join Date</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let invitation\" >{{invitation.joindat | date :'M-d-yy h:mm a'}}</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container matColumnDef=\"actions\" >\r\n\t\t\t\t\t\t<mat-header-cell *matHeaderCellDef style=\"max-width:100px\">Actions</mat-header-cell>\r\n\t\t\t\t\t\t<mat-cell *matCellDef=\"let invitation; let rowIndex = index\" style=\"max-width:100px\">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<button (click)=\"resendinvitation(invitation._id , rowIndex)\" mat-icon-button color=\"primary\" *ngIf=\"invitation.status!='approved' && checkedpermission('sendinvitations')\" matTooltip=\"Resend invitation\">\r\n\t\t\t\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t\t<button mat-icon-button color=\"warn\" matTooltip=\"Revoke Invitation\" type=\"button\" *ngIf=\"invitation.status=='pending' && checkedpermission('sendinvitations')\" (click)=\"revokeinvitation(invitation._id)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>pan_tool</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</mat-cell>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container matColumnDef=\"loading\">\r\n\t\t\t\t\t<mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n\t\t\t\t\tLoading...\r\n\t\t\t\t\t</mat-footer-cell>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t\t<mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':checkedinvitations()}\"></mat-footer-row>\r\n\r\n\t\t\t\t</mat-table>\r\n\t\t\t\t<mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [pageSize]=\"10\"></mat-paginator>\r\n\t\t\t</div>\r\n\t\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/invitations/invitations.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/pages/user-management/invitations/invitations.component.ts ***!
  \**********************************************************************************/
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
// Material
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services
var crud_1 = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_1 = __webpack_require__(/*! ../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var invitations_edit_dialog_component_1 = __webpack_require__(/*! ./invitations-edit/invitations-edit.dialog.component */ "./src/app/views/pages/user-management/invitations/invitations-edit/invitations-edit.dialog.component.ts");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var InvitationComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     * @param subheaderService: SubheaderService
     */
    function InvitationComponent(activatedRoute, store, router, layoutUtilsService, dialog, ser, changeDetectorRefs) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.dialog = dialog;
        this.ser = ser;
        this.changeDetectorRefs = changeDetectorRefs;
        this.selection = new collections_1.SelectionModel(true, []);
        this.displayedColumns = ['id', 'username', 'admin', 'createdat', 'status', 'joindat', 'actions'];
        this.hasMessages = false;
        this.checkdata = false;
        this.filterStatus = '';
        this.Places = [];
        this.filterInvitedBy = '';
        this.order = -1;
        this.getinvitationFirstTime = true;
        // Subscriptions
        this.subscriptions = [];
        this.isLoading = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    InvitationComponent.prototype.ngOnInit = function () {
        this.getallinviteby = [];
        //this.getInvitaions();
        //	this.getUsresWhichSendEmails();
    };
    InvitationComponent.prototype.ngAfterViewInit = function () {
        this.getInvitaions();
    };
    /**
     * On Destroy
     */
    InvitationComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    InvitationComponent.prototype.addInvitations = function () {
        if (this.checkedpermission('sendinvitations')) {
            var dialogRef = this.dialog.open(invitations_edit_dialog_component_1.InvitationsEditDialogComponent, { data: {} });
        }
        else {
            alert('Sorry, you do not have permission to send invitation');
        }
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    InvitationComponent.prototype.onAlertClose = function ($event) {
        this.hasMessages = false;
    };
    InvitationComponent.prototype.getInvitaions = function (pages, prepage, search, status, author_key, placeInvitation, orderby, order) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (prepage === void 0) { prepage = 30; }
        if (search === void 0) { search = ''; }
        if (status === void 0) { status = ''; }
        if (author_key === void 0) { author_key = ''; }
        if (placeInvitation === void 0) { placeInvitation = ''; }
        if (orderby === void 0) { orderby = ''; }
        if (order === void 0) { order = -1; }
        this.isLoading = true;
        this.ser.getAllInvitations(pages, prepage, search, status, author_key, placeInvitation, orderby, order).subscribe(function (res) {
            //to do save unique author of invitations in array 
            if (res['result']) {
                if (_this.getinvitationFirstTime) {
                    if (res['result']['invitations']) {
                        res['result']['invitations'].forEach(function (element) {
                            if (element.author)
                                _this.getallinviteby.push({ name: element.author.username, 'pub_key': element.author.pub_key });
                        });
                        var result = [];
                        var map_1 = new Map();
                        for (var _i = 0, _a = _this.getallinviteby; _i < _a.length; _i++) {
                            var item = _a[_i];
                            if (!map_1.has(item.pub_key)) {
                                map_1.set(item.pub_key, true); // set any value to Map
                                result.push({
                                    pub_key: item.pub_key,
                                    name: item.name
                                });
                            }
                        }
                        _this.getallinviteby = result;
                        console.log(_this.getallinviteby);
                        _this.getinvitationFirstTime = false;
                    }
                }
                if (res['result']['invitations'])
                    _this.dataSource = new material_1.MatTableDataSource(res['result']['invitations']);
                _this.Places = res['result']['Places'];
                _this.changeDetectorRefs.detectChanges();
                //this.listData.sort=this.sort
                //this.listData.paginator=this.paginator
            }
            _this.isLoading = false;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    // getUsresWhichSendEmails(){
    // 	this.ser.getUsresWhichSendEmails().subscribe(
    // 		res=>{
    // 			this.getallinviteby = res['result'];
    // 		}
    // 	)
    // }
    InvitationComponent.prototype.revokeinvitation = function (id) {
        var _this = this;
        this.ser.reVokeInvitations(id).subscribe(function (res) {
            if (_this.router.url == '/default/user-management/invitations')
                _this.router.navigateByUrl("/default/user-management/invitation");
            else
                _this.router.navigateByUrl("/default/user-management/invitations");
            setTimeout(function () {
                _this.layoutUtilsService.showActionNotification(res['message'], crud_1.MessageType.Update);
            }, 1000);
        });
    };
    InvitationComponent.prototype.resendinvitation = function (id, rowIndex) {
        var _this = this;
        this.isLoading = true;
        this.ser.reSendInvitations(id).subscribe(function (res) {
            console.log('res', res);
            if (res['result']) {
                // if (this.router.url == '/default/user-management/invitations')
                // 	this.router.navigateByUrl("/default/user-management/invitation");
                // else this.router.navigateByUrl("/default/user-management/invitations");
                setTimeout(function () {
                    _this.layoutUtilsService.showActionNotification(res['data'], crud_1.MessageType.Update);
                }, 1000);
                _this.dataSource["data"][rowIndex]["status"] = 'pending';
                _this.changeDetectorRefs.detectChanges();
            }
            else {
                setTimeout(function () {
                    _this.layoutUtilsService.showActionNotification(res['data'], crud_1.MessageType.Update);
                }, 1000);
            }
            _this.isLoading = false;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    InvitationComponent.prototype.applyFilter = function (orderby) {
        if (orderby === void 0) { orderby = ''; }
        if (this.SearchKey && this.SearchKey.length > 0)
            var search = this.SearchKey.trim().toLowerCase();
        else
            var search = '';
        if (this.filterStatus && this.filterStatus.length > 0)
            var status = this.filterStatus;
        else
            status = '';
        if (this.filterInvitedBy && this.filterInvitedBy.length > 0)
            var author_key = this.filterInvitedBy;
        else
            author_key = '';
        if (orderby != '') {
            if (this.order == -1)
                this.order = 1;
            else if (this.order == 1)
                this.order = -1;
        }
        if (this.filterPlace && this.filterPlace.length > 0)
            var placeInvitation = this.filterPlace;
        else
            placeInvitation = '';
        this.getInvitaions(null, null, search, status, author_key, placeInvitation, orderby, this.order);
    };
    InvitationComponent.prototype.onSearchClear = function () {
        this.SearchKey = "";
        //this.searchInput.nativeElement.value = ''
        this.applyFilter();
    };
    InvitationComponent.prototype.nextPage = function (event) {
        this.getInvitaions(event.pageIndex + 1, event.pageSize, null);
    };
    //checked if there is inivitations or not
    InvitationComponent.prototype.checkedinvitations = function () {
        if (this.dataSource) {
            if (this.dataSource.data) {
                return true;
            }
            else
                return false;
        }
        else
            false;
    };
    InvitationComponent.prototype.checkedpermission = function (key) {
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
    InvitationComponent.prototype.fetchUsers = function () {
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], InvitationComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], InvitationComponent.prototype, "searchInput", void 0);
    InvitationComponent = __decorate([
        core_1.Component({
            selector: 'kt-invitations',
            template: __webpack_require__(/*! ./invitations.component.html */ "./src/app/views/pages/user-management/invitations/invitations.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: [__webpack_require__(/*! ../usser.management.scss */ "./src/app/views/pages/user-management/usser.management.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_1.Store,
            router_1.Router,
            crud_1.LayoutUtilsService,
            material_1.MatDialog,
            _services_1.UserService,
            core_1.ChangeDetectorRef])
    ], InvitationComponent);
    return InvitationComponent;
}());
exports.InvitationComponent = InvitationComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n    <div class=\"kt-portlet__head kt-portlet__head__custom\" *ngIf=\"role\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{getTitle()}}</h3>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"role\">\r\n        <div class=\"kt-form\">\r\n            <div class=\"kt-portlet__body\">\r\n\r\n                <div class=\"kt-portlet__body-progress\">\r\n                    <mat-spinner [diameter]=\"20\"></mat-spinner>\r\n                </div>\r\n\r\n                <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\" (close)=\"onAlertClose($event)\">\r\n                    Oh snap! Change a few things up and try submitting again.\r\n                </kt-alert>\r\n\r\n                <div class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput\r\n\r\n                                placeholder=\"Enter Title\"\r\n                                [(ngModel)]=\"role.type\" />\r\n                            <mat-error>Title is\r\n                                <strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-hint align=\"start\">Please enter\r\n                                <strong>Title</strong>\r\n                            </mat-hint>\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\r\n                        <mat-checkbox [(ngModel)] = \"role.default\">\r\n                         <label> Defalut </label>\r\n                       </mat-checkbox>\r\n                     </div>\r\n                 </div>\r\n\r\n                <div class=\"kt-separator kt-separator--dashed\"></div>\r\n                <h6 class=\"kt-section__heading\">\r\n                    Permissions:\r\n                </h6>\r\n                <div class=\"form-group kt-form__group row\">\r\n                    <div class=\"col-lg-12 kt-margin-bottom-20-mobile\">\r\n                        <div class=\"kt-timeline-3 mb-5\">\r\n                            <div class=\"kt-timeline-3__items kt-timeline-3__items--rolePermissions\">\r\n                                <div *ngFor=\"let _rootRole of permissionsOfloggedUser\" class=\"kt-timeline-3__inner\">\r\n\r\n                                    <!-- {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}} -->\r\n                                    <!-- <button mat-icon-button>\r\n                                        <mat-icon class=\"mat-icon-rtl-mirror\">expand_more</mat-icon>\r\n                                    </button> -->\r\n                                    <div class=\"kt-timeline-3__item kt-border-bottom-grey kt-py-15 kt-bg-grey\">\r\n                                        <span class=\"kt-timeline-3__item-time\">\r\n                                            <mat-checkbox [(ngModel)]=\"_rootRole.isSelected\"\r\n                                                (change)=\"isSelectedChanged($event, _rootRole)\"\r\n                                            >{{_rootRole.title }}</mat-checkbox>\r\n                                        </span>\r\n                                    </div>\r\n                                    <div class=\"d-flex align-items-center kt-border-bottom-grey kt-py-15 kt-bg-grey\"style=\"flex-wrap:wrap;\">\r\n                                        <div class=\"kt-timeline-3__item kt-timeline-3__item-child\"\r\n                                            *ngFor=\"let _childRole of _rootRole._children\">\r\n                                            <span class=\"kt-timeline-3__item-time\">\r\n                                                <mat-checkbox [(ngModel)]=\"_childRole.isSelected\"\r\n                                                    (change)=\"isSelectedChanged($event, _childRole)\"\r\n                                                    [disabled]=\"role.isCoreRole\">{{ _childRole.key }}</mat-checkbox>\r\n                                            </span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                    <div class=\"row text-right\">\r\n                        <div class=\"col-lg-12\">\r\n                            <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial matTooltip=\"Cancel changes\">\r\n                                Cancel\r\n                            </button>&nbsp;\r\n                            <button type=\"button\"  mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// Lodash
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services and Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
//services
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var RoleEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<RoleEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function RoleEditDialogComponent(dialogRef, data, store, permission) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.permission = permission;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
        this.rolePermissions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    RoleEditDialogComponent.prototype.ngOnInit = function () {
        this.role = this.data.role;
        console.log(this.data);
        if (!this.data.role._id) {
        }
        //all Permissions of logged user
        this.permissionsOfloggedUser = this.permission.preparePrivilidges();
        this.selectedPermissions();
    };
    /**
     * On destroy
     */
    RoleEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Load permissions
     */
    RoleEditDialogComponent.prototype.loadPermissions = function () {
        var _this = this;
        this.allPermissions$.subscribe(function (_allPermissions) {
            if (!_allPermissions) {
                return;
            }
            var mainPermissions = _allPermissions.filter(function (el) { return !el.parentId; });
            mainPermissions.forEach(function (element) {
                var hasUserPermission = _this.role.permissions.some(function (t) { return t === element.id; });
                var rootPermission = new auth_1.Permission();
                rootPermission.clear();
                rootPermission.isSelected = hasUserPermission;
                rootPermission._children = [];
                rootPermission.id = element.id;
                rootPermission.level = element.level;
                rootPermission.parentId = element.parentId;
                rootPermission.title = element.title;
                var children = _allPermissions.filter(function (el) { return el.parentId && el.parentId === element.id; });
                children.forEach(function (child) {
                    var hasUserChildPermission = _this.role.permissions.some(function (t) { return t === child.id; });
                    var childPermission = new auth_1.Permission();
                    childPermission.clear();
                    childPermission.isSelected = hasUserChildPermission;
                    childPermission._children = [];
                    childPermission.id = child.id;
                    childPermission.level = child.level;
                    childPermission.parentId = child.parentId;
                    childPermission.title = child.title;
                    rootPermission._children.push(childPermission);
                });
                _this.rolePermissions.push(rootPermission);
            });
        });
    };
    /** ACTIONS */
    /**
     * Returns permissions ids
     */
    RoleEditDialogComponent.prototype.preparePermissionIds = function () {
        var result = [];
        lodash_1.each(this.rolePermissions, function (_root) {
            if (_root.isSelected) {
                result.push(_root.id);
                lodash_1.each(_root._children, function (_child) {
                    if (_child.isSelected) {
                        result.push(_child.id);
                    }
                });
            }
        });
        return result;
    };
    /**
     * Returns role for save
     */
    /**
     * Save data
     */
    RoleEditDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        this.hasFormErrors = false;
        this.loadingAfterSubmit = false;
        /** check form */
        if (this.data.role.id) {
            this.permission.editPrivilagesType(this.data.role.id, this.combinepermisson(), this.data.role.type, this.data.role.default).subscribe(function (res) {
                if (res['result']) {
                    _this.dialogRef.close({
                        isEdit: true
                    });
                }
            });
        }
        else {
            if (this.role['type']) {
                this.permission.addPriviliages(this.combinepermisson(), this.data.role.type, this.data.role.default).subscribe(function (res) {
                    if (res['result']) {
                        _this.dialogRef.close({
                            isEdit: false
                        });
                    }
                });
            }
        }
        // const editedRole = this.prepareRole();
        // if (editedRole.id > 0) {
        // 	this.updateRole(editedRole);
        // } else {
        // 	this.createRole(editedRole);
        // }
    };
    /**
     * Update role
     *
     * @param _role: Role
     */
    RoleEditDialogComponent.prototype.updateRole = function (_role) {
        var _this = this;
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        /* Server loading imitation. Remove this on real code */
        var updateRole = {
            id: this.role.id,
            changes: _role
        };
        this.store.dispatch(new auth_1.RoleUpdated({
            partialrole: updateRole,
            role: _role
        }));
        rxjs_1.of(undefined).pipe(operators_1.delay(1000)).subscribe(function () {
            _this.viewLoading = false;
            _this.dialogRef.close({
                _role: _role,
                isEdit: true
            });
        }); // Remove this line
    };
    /**
     * Create role
     *
     * @param _role: Role
     */
    RoleEditDialogComponent.prototype.createRole = function (_role) {
        var _this = this;
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        this.store.dispatch(new auth_1.RoleOnServerCreated({ role: _role }));
        this.componentSubscriptions = this.store.pipe(operators_1.delay(1000), // Remove this line
        store_1.select(auth_1.selectLastCreatedRoleId)).subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.viewLoading = false;
            _this.dialogRef.close({
                _role: _role,
                isEdit: false
            });
        });
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    RoleEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    /**
     * Check is selected changes
     *
     * @param $event: Event
     * @param permission: Permission
     */
    RoleEditDialogComponent.prototype.isSelectedChanged = function ($event, permission) {
        if (permission._children.length === 0 && permission.isSelected) {
            var _root = lodash_1.find(this.rolePermissions, function (item) { return item.id === permission.parentId; });
            if (_root && !_root.isSelected) {
                _root.isSelected = true;
            }
            return;
        }
        if (permission._children.length === 0 && !permission.isSelected) {
            var _root = lodash_1.find(this.rolePermissions, function (item) { return item.id === permission.parentId; });
            if (_root && _root.isSelected) {
                if (!lodash_1.some(_root._children, function (item) { return item.isSelected === true; })) {
                    _root.isSelected = false;
                }
            }
            return;
        }
        if (permission._children.length > 0 && permission.isSelected) {
            lodash_1.each(permission._children, function (item) { return item.isSelected = true; });
            return;
        }
        if (permission._children.length > 0 && !permission.isSelected) {
            lodash_1.each(permission._children, function (item) {
                item.isSelected = false;
            });
            return;
        }
    };
    /** UI */
    /**
     * Returns component title
     */
    RoleEditDialogComponent.prototype.getTitle = function () {
        if (this.role && this.role.id) {
            // tslint:disable-next-line:no-string-throw
            return "Edit role '" + this.data.role.type + "'";
        }
        // tslint:disable-next-line:no-string-throw
        return 'New role';
    };
    /**
     * Returns is title valid
     */
    RoleEditDialogComponent.prototype.isTitleValid = function () {
        return (this.role && this.role.title && this.role.title.length > 0);
    };
    //selected pemission of type privilages from all permissions of logged user
    RoleEditDialogComponent.prototype.selectedPermissions = function () {
        var _this = this;
        console.log(this.permissionsOfloggedUser);
        this.permissionsOfloggedUser.forEach(function (item) {
            item['_children'].forEach(function (child) {
                _this.data.role['_childern'].forEach(function (element) {
                    if (child.value == element.title) {
                        child['isSelected'] = true;
                    }
                });
            });
        });
        console.log(this.permissionsOfloggedUser);
    };
    //combine data of permission to send to server
    RoleEditDialogComponent.prototype.combinepermisson = function () {
        var permissionString = '';
        this.permissionsOfloggedUser.forEach(function (item) {
            item['_children'].forEach(function (child) {
                if (child['isSelected']) {
                    permissionString += child['value'] + ',';
                }
            });
        });
        return permissionString;
    };
    RoleEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-role-edit-dialog',
            template: __webpack_require__(/*! ./role-edit.dialog.component.html */ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.Default,
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, store_1.Store,
            _services_1.PermissionsService])
    ], RoleEditDialogComponent);
    return RoleEditDialogComponent;
}());
exports.RoleEditDialogComponent = RoleEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/roles-list/roles-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"'Roles list'\" [class]=\"'kt-portlet__head--lg'\">\r\n\r\n\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<kt-portlet-body>\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-3 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search role\" #searchInput [(ngModel)]=\"SearchKey\"\r\n\t\t\t\t\t\t\t\tplaceholder=\"Search then Press Enter\" (keyup.enter)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\"\r\n\t\t\t\t\t\t\t\t(click)=\"onSearchClear()\">\r\n\t\t\t\t\t\t\t\t<mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-7 kt-margin-bottom-20-mobile\">\r\n\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class='col-md-2 kt-margin-bottom-20-mobile row text-right'>\r\n\r\n\t\t\t\t\t<button *ngIf=\"checkedpermission('add')\" mat-raised-button color=\"primary\"\r\n\t\t\t\t\t\tmatTooltip=\"Create new role\" type=\"button\" (click)=\"addRole()\">\r\n\t\t\t\t\t\t<span>New Role</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t<!-- end::FILTERS -->\r\n\r\n\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\">\r\n\t\t\t<!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span>\r\n\t\t\t\t\t\t\t{{ selection.selected.length }}\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (users-list.component.ts file) -->\r\n\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t<button (click)=\"fetchUsers()\" mat-raised-button matTooltip=\"Fetch selected users\"\r\n\t\t\t\t\t\t\tclass=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t</div>\r\n\r\n\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"id\" matSortDirection=\"asc\" matSortDisableClear>\r\n\t\t\t\t<!-- Checkbox Column -->\r\n\r\n\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\"\r\n\t\t\t\t\t\t\t(change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Role Name</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let role\" >{{role.type}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"default\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>Defalut</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let role\">\r\n\t\t\t\t\t\t<span *ngIf=\"role.default\"\r\n\t\t\t\t\t\t\tclass=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--metal kt-badge--wide\">Defalut</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let role\">\r\n\t\t\t\t\t\t<button *ngIf=\"checkedpermission(update)\" mat-icon-button color=\"primary\"\r\n\t\t\t\t\t\t\tmatTooltip=\"{{ role.isCoreRole ? 'View' : 'Edit'}} role\" (click)=\"editRole(role)\">\r\n\t\t\t\t\t\t\t<mat-icon>\r\n\t\t\t\t\t\t\t\t{{ role.isCoreRole ? 'visibility' : 'create' }}\r\n\t\t\t\t\t\t\t</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<button *ngIf=\"checkedpermission(del)\" mat-icon-button color=\"warn\" matTooltip=\"Delete role\"\r\n\t\t\t\t\t\t\ttype=\"button\" [disabled]=\"role.isCoreRole\" (click)=\"deleteRole(role)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container matColumnDef=\"loading\">\r\n\t\t\t\t\t<mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n\t\t\t\t\t\tLoading...\r\n\t\t\t\t\t</mat-footer-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t<mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':checkedDataSource()}\">\r\n\t\t\t\t</mat-footer-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [pageSize]=\"5\"></mat-paginator>\r\n\r\n\t\t</div>\r\n\r\n\t\t<!-- start: BOTTOM -->\r\n\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/roles/roles-list/roles-list.component.ts ***!
  \**************************************************************************************/
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
// Material
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
// Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
// Components
var role_edit_dialog_component_1 = __webpack_require__(/*! ../role-edit/role-edit.dialog.component */ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var RolesListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param dialog: MatDialog
     * @param snackBar: MatSnackBar
     * @param layoutUtilsService: LayoutUtilsService
     */
    function RolesListComponent(store, dialog, snackBar, layoutUtilsService, permission, changeDetectorRefs) {
        this.store = store;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.layoutUtilsService = layoutUtilsService;
        this.permission = permission;
        this.changeDetectorRefs = changeDetectorRefs;
        this.displayedColumns = ['select', 'type', 'default', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.rolesResult = [];
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    RolesListComponent.prototype.ngOnInit = function () {
        // If the user changes the sort order, reset back to the first page.
        //const sortSubscription = this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        //this.subscriptions.push(sortSubscription);
        /* Data load will be triggered in two cases:
        - when a pagination event occurs => this.paginator.page
        - when a sort event occurs => this.sort.sortChange
        **/
        this.LoadPriviliages();
        // const paginatorSubscriptions = merge(this.sort.sortChange, this.paginator.page).pipe(
        // 	tap(() => {
        // 		this.loadRolesList();
        // 	})
        // )
        // 	.subscribe();
        // this.subscriptions.push(paginatorSubscriptions);
        // Filtration, bind to searchInput
        var searchSubscription = rxjs_1.fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
        // tslint:disable-next-line:max-line-length
        // debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        // distinctUntilChanged(), // This operator will eliminate duplicate values
        // tap(() => {
        // 	this.paginator.pageIndex = 0;
        // 	this.loadRolesList();
        // })
        )
            .subscribe();
        this.subscriptions.push(searchSubscription);
        // Init DataSource
        //
        // const entitiesSubscription = this.dataSource.entitySubject.pipe(
        // 	skip(1),
        // 	distinctUntilChanged()
        // ).subscribe(res => {
        // 	rolesResult = res;
        // });
        // this.subscriptions.push(entitiesSubscription);
        // First load
        // of(undefined).pipe(take(1), delay(1000)).subscribe(() => { // Remove this line, just loading imitation
        // 	this.loadRolesList();
        // });
    };
    /**
     * On Destroy
     */
    RolesListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /**
     * Load Roles List
     */
    // loadRolesList() {
    // 	this.selection.clear();
    // 	const queryParams = new QueryParamsModel(
    // 		this.filterConfiguration(),
    // 		this.sort.direction,
    // 		this.sort.active,
    // 		this.paginator.pageIndex,
    // 		this.paginator.pageSize
    // 	);
    // 	// Call request from server
    // 	this.store.dispatch(new RolesPageRequested({ page: queryParams }));
    // 	this.selection.clear();
    // }
    /**
     * Returns object for filter
     */
    RolesListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.title = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete role
     *
     * @param _item: Role
     */
    RolesListComponent.prototype.deleteRole = function (_item) {
        var _this = this;
        var _title = 'User Role';
        var _description = 'Are you sure to permanently delete this role?';
        var _waitDesciption = 'Role is deleting...';
        var _deleteMessage = "Role has been deleted";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.permission.deletePriviliages(_item.id).subscribe(function (res) {
                if (res['result']) {
                    _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
                    _this.LoadPriviliages();
                }
                else {
                    _deleteMessage = 'Sorry, the role has not beeb deleted ,try again';
                    _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
                }
            });
        });
        this.store.dispatch(new auth_1.RoleDeleted({ id: _item.id }));
    };
    /** Fetch */
    /**
     * Fetch selected rows
     */
    RolesListComponent.prototype.fetchRoles = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: "" + elem.title,
                id: elem.id.toString(),
            });
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    /**
     * Add role
     */
    RolesListComponent.prototype.addRole = function () {
        var role = { id: null, title: null, _childern: [], isSelected: false };
        this.editRole(role);
    };
    /**
     * Edit role
     *
     * @param role: Role
     */
    RolesListComponent.prototype.editRole = function (role) {
        var _this = this;
        var _saveMessage = "Role successfully has been saved.";
        var _messageType = role.id ? crud_1.MessageType.Update : crud_1.MessageType.Create;
        var dialogRef = this.dialog.open(role_edit_dialog_component_1.RoleEditDialogComponent, { data: { role: role } });
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.layoutUtilsService.showActionNotification(_saveMessage, _messageType, 10000, true, true);
            //this.loadRolesList();
            _this.LoadPriviliages();
        });
    };
    /**
     * Check all rows are selected
     */
    RolesListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.rolesResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle selection
     */
    RolesListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.rolesResult.length) {
            this.selection.clear();
        }
        else {
            this.rolesResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    //	this.dataSource=new MatTableDataSource(roles)
    RolesListComponent.prototype.splitPriviliage = function (priviliageString) {
        var priviliadgeList = [];
        if (priviliageString) {
            var priviliadge = priviliageString.split(',');
            priviliadge.forEach(function (item) {
                priviliadgeList.push({ title: item, isSelected: false });
            });
        }
        return priviliadgeList;
    };
    RolesListComponent.prototype.LoadPriviliages = function (pages, prepages, searchkey) {
        var _this = this;
        if (pages === void 0) { pages = null; }
        if (prepages === void 0) { prepages = null; }
        if (searchkey === void 0) { searchkey = null; }
        var roles = [];
        this.permission.getPriviliedgesType(pages, prepages, searchkey).subscribe(function (res) {
            console.log(res);
            res['result'].forEach(function (item) {
                roles.push({ id: item._id, type: item.type, default: item.default, _childern: _this.splitPriviliage(item['privilidge']), isSelected: false });
            });
            _this.dataSource = new material_1.MatTableDataSource(roles);
            _this.changeDetectorRefs.detectChanges();
        });
    };
    RolesListComponent.prototype.applyFilter = function () {
        console.log(this.SearchKey);
        //this.listData.filter=this.SearchKey.trim().toLowerCase()
        this.LoadPriviliages(null, null, this.searchInput.nativeElement.value);
    };
    RolesListComponent.prototype.onSearchClear = function () {
        this.searchInput.nativeElement.value = '';
        this.applyFilter();
    };
    RolesListComponent.prototype.nextPage = function (event) {
        console.log(event);
        this.LoadPriviliages(event.pageIndex + 1, event.pageSize, null);
    };
    //check if dataSource has datasource
    RolesListComponent.prototype.checkedDataSource = function () {
        if (this.dataSource) {
            if (this.dataSource.data) {
                return true;
            }
            else
                return false;
        }
        else
            return false;
    };
    RolesListComponent.prototype.checkedpermission = function (key) {
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']) {
                if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Roles']) {
                    console.log('user');
                    if (key == 'del') {
                        console.log('del');
                        if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Roles']['Edit Roles'])
                            return true;
                    }
                    else if (key == 'update') {
                        console.log('up');
                        if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Roles']['Delete Roles'])
                            return true;
                    }
                    else if (key = 'add') {
                        console.log('add');
                        // if( JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Roles']['Add Roles'])
                        return true;
                    }
                }
            }
        }
        return false;
    };
    RolesListComponent.prototype.fetchUsers = function () {
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], RolesListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], RolesListComponent.prototype, "searchInput", void 0);
    RolesListComponent = __decorate([
        core_1.Component({
            selector: 'kt-roles-list',
            template: __webpack_require__(/*! ./roles-list.component.html */ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: [__webpack_require__(/*! ../../usser.management.scss */ "./src/app/views/pages/user-management/usser.management.scss")]
        }),
        __metadata("design:paramtypes", [store_1.Store,
            material_1.MatDialog,
            material_1.MatSnackBar,
            crud_1.LayoutUtilsService,
            _services_1.PermissionsService,
            core_1.ChangeDetectorRef])
    ], RolesListComponent);
    return RolesListComponent;
}());
exports.RolesListComponent = RolesListComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <div *ngIf=\"hasUserAccess$ | async\">\r\n    <router-outlet></router-outlet>\r\n</div> -->\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.component.ts ***!
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
// Angular
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var userManagementPermissionId = 2;
var UserManagementComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    function UserManagementComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserManagementComponent.prototype.ngOnInit = function () {
        // this.currentUserPermission$ = this.store.pipe(select(currentUserPermissions));
        // this.currentUserPermission$.subscribe(permissions => {
        // 	if (permissions && permissions.length > 0) {
        // 		this.hasUserAccess$ =
        // 			this.store.pipe(select(checkHasUserPermission(userManagementPermissionId)));
        // 		this.hasUserAccess$.subscribe(res => {
        // 			if (!res) {
        // 				this.router.navigateByUrl('/error/403');
        // 			}
        // 		});
        // 	}
        // });
    };
    UserManagementComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/views/pages/user-management/user-management.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [store_1.Store, router_1.Router])
    ], UserManagementComponent);
    return UserManagementComponent;
}());
exports.UserManagementComponent = UserManagementComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.module.ts ***!
  \***********************************************************************/
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
var ng2_validation_1 = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var ng2_img_max_1 = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
// Core Module
//import { FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
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
var code_preview_module_1 = __webpack_require__(/*! ../../partials/content/general/code-preview/code-preview.module */ "./src/app/views/partials/content/general/code-preview/code-preview.module.ts");
var material_preview_module_1 = __webpack_require__(/*! ../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
// Components
var user_management_component_1 = __webpack_require__(/*! ./user-management.component */ "./src/app/views/pages/user-management/user-management.component.ts");
var users_list_component_1 = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/views/pages/user-management/users/users-list/users-list.component.ts");
var user_edit_component_1 = __webpack_require__(/*! ./users/user-edit/user-edit.component */ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts");
var roles_list_component_1 = __webpack_require__(/*! ./roles/roles-list/roles-list.component */ "./src/app/views/pages/user-management/roles/roles-list/roles-list.component.ts");
var invitations_component_1 = __webpack_require__(/*! ./invitations/invitations.component */ "./src/app/views/pages/user-management/invitations/invitations.component.ts");
var shifts_component_1 = __webpack_require__(/*! ./users/_subs/shifts/shifts.component */ "./src/app/views/pages/user-management/users/_subs/shifts/shifts.component.ts");
var role_edit_dialog_component_1 = __webpack_require__(/*! ./roles/role-edit/role-edit.dialog.component */ "./src/app/views/pages/user-management/roles/role-edit/role-edit.dialog.component.ts");
var invitations_edit_dialog_component_1 = __webpack_require__(/*! ./invitations/invitations-edit/invitations-edit.dialog.component */ "./src/app/views/pages/user-management/invitations/invitations-edit/invitations-edit.dialog.component.ts");
var shifts_edit_dialog_component_1 = __webpack_require__(/*! ./users/_subs/shifts/shifts-edit/shifts-edit.dialog.component */ "./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts-edit.dialog.component.ts");
var club_tree_component_1 = __webpack_require__(/*! ./club_tree/club_tree.component */ "./src/app/views/pages/user-management/club_tree/club_tree.component.ts");
var user_roles_list_component_1 = __webpack_require__(/*! ./users/_subs/user-roles/user-roles-list.component */ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.ts");
var change_password_component_1 = __webpack_require__(/*! ./users/_subs/change-password/change-password.component */ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.ts");
var address_component_1 = __webpack_require__(/*! ./users/_subs/address/address.component */ "./src/app/views/pages/user-management/users/_subs/address/address.component.ts");
var accessRight_component_1 = __webpack_require__(/*! ./users/_subs/accessRight/accessRight.component */ "./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.ts");
var social_networks_component_1 = __webpack_require__(/*! ./users/_subs/social-networks/social-networks.component */ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.ts");
var club_tree_data_1 = __webpack_require__(/*! ./club_tree/_sub/_DataShow/club_tree_data */ "./src/app/views/pages/user-management/club_tree/_sub/_DataShow/club_tree_data.ts");
//guard
var permission_guard_1 = __webpack_require__(/*! ../../../core/auth/_guards/permission.guard */ "./src/app/core/auth/_guards/permission.guard.ts");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_1 = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
var update_message_component_1 = __webpack_require__(/*! ./users/update-message/update-message.component */ "./src/app/views/pages/user-management/users/update-message/update-message.component.ts");
var routes = [
    {
        path: '',
        component: user_management_component_1.UserManagementComponent,
        children: [
            {
                path: '',
                redirectTo: 'roles',
                pathMatch: 'full',
                data: { title: 'roles' },
            },
            {
                path: 'roles',
                component: roles_list_component_1.RolesListComponent,
                data: { title: 'roles' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'invitations',
                component: invitations_component_1.InvitationComponent,
                data: { title: 'invitations' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'invitation',
                component: invitations_component_1.InvitationComponent,
                data: { title: 'invitations' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'shifts',
                component: shifts_component_1.ShiftsComponent,
                data: { title: 'shifts' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'clubtree',
                component: club_tree_component_1.ClubTreeComponent,
                data: { title: 'clubtree' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'clubtrees',
                component: club_tree_component_1.ClubTreeComponent,
                data: { title: 'clubtree' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users',
                component: users_list_component_1.UsersListComponent,
                data: { title: 'users' },
                canActivate: [permission_guard_1.PermissionGuard]
            }, {
                path: 'user',
                component: users_list_component_1.UsersListComponent,
                data: { title: 'users' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users/:id',
                component: users_list_component_1.UsersListComponent,
                data: { title: 'users' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users/add',
                component: user_edit_component_1.UserEditComponent,
                data: { title: 'clubtree' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users/add:id',
                component: user_edit_component_1.UserEditComponent,
                data: { title: 'addUser' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users/edit',
                component: user_edit_component_1.UserEditComponent,
                data: { title: 'editUser' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users/edit/:id',
                component: user_edit_component_1.UserEditComponent,
                data: { title: 'editUser' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users/:id/edit/:id',
                component: user_edit_component_1.UserEditComponent,
                data: { title: 'editUser' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'users/:id/edits/:id',
                component: user_edit_component_1.UserEditComponent,
                data: { title: 'editUser' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
        ]
    }
];
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_img_max_1.Ng2ImgMaxModule,
                ng2_file_upload_1.FileUploadModule,
                common_1.CommonModule,
                ng2_validation_1.CustomFormsModule,
                http_1.HttpClientModule,
                partials_module_1.PartialsModule,
                router_1.RouterModule.forChild(routes),
                store_1.StoreModule.forFeature('users', auth_1.usersReducer),
                effects_1.EffectsModule.forFeature([auth_1.UserEffects]),
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                core_2.TranslateModule.forChild(),
                material_1.MatListModule,
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
                material_1.MatDialogModule,
                code_preview_module_1.CodePreviewModule,
                material_preview_module_1.MaterialPreviewModule,
                material_1.MatTreeModule,
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
                role_edit_dialog_component_1.RoleEditDialogComponent,
                invitations_edit_dialog_component_1.InvitationsEditDialogComponent,
                shifts_edit_dialog_component_1.ShiftEditDialogComponent,
                club_tree_component_1.ClubTreeComponent,
                club_tree_data_1.ClubTreeDataComponent,
                update_message_component_1.UpdateMessageComponent
            ],
            declarations: [
                user_management_component_1.UserManagementComponent,
                accessRight_component_1.AccessRightComponent,
                users_list_component_1.UsersListComponent,
                user_edit_component_1.UserEditComponent,
                roles_list_component_1.RolesListComponent,
                invitations_component_1.InvitationComponent,
                club_tree_component_1.ClubTreeComponent,
                role_edit_dialog_component_1.RoleEditDialogComponent,
                user_roles_list_component_1.UserRolesListComponent,
                change_password_component_1.ChangePasswordComponent,
                address_component_1.AddressComponent,
                social_networks_component_1.SocialNetworksComponent,
                invitations_edit_dialog_component_1.InvitationsEditDialogComponent,
                shifts_edit_dialog_component_1.ShiftEditDialogComponent,
                shifts_component_1.ShiftsComponent,
                club_tree_component_1.ClubTreeComponent,
                club_tree_data_1.ClubTreeDataComponent,
                update_message_component_1.UpdateMessageComponent,
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());
exports.UserManagementModule = UserManagementModule;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\r\n    <div class=\"kt-portlet__body\">\r\n        <div *ngIf=\"allbrancandunits[0]['unit'].length==0\" class=\"center\">\r\n            <mat-progress-spinner style=\"margin:0 auto;\" mode=\"indeterminate\" diameter=\"40\">\r\n            </mat-progress-spinner>\r\n        </div>\r\n        <div *ngIf=\"allbrancandunits[0]['unit'].length>0\" class=\"form-group kt-form__group row d-block\">\r\n            <div class=\"col-lg-8 kt-margin-bottom-20-mobile\">\r\n                <mat-list>\r\n\r\n                    <div *ngFor=\"let value of allbrancandunits\">\r\n                        <mat-expansion-panel class=\"no-shadow\" [hideToggle]=\"value.unit.length==0\">\r\n                            <mat-expansion-panel-header >\r\n                                <mat-checkbox *ngIf=\"currentLoggedUser!=_currentUser.pub_key\" [checked]='value.checked'\r\n                                     (click)=\"$event.stopPropagation();\"\r\n                                    (change)=\"value.checked=!value.checked;onChange(value)\">\r\n                                    <span style=\"color: black;font-size: 14px;\"\r\n                                        [ngClass]=\"{'text':(value.name== 'All Branchs')}\">\r\n                                        {{value.name}}</span>\r\n                                </mat-checkbox>\r\n                                <span *ngIf=\"currentLoggedUser==_currentUser.pub_key\"\r\n                                    [ngClass]=\"{'text':(value.name== 'All Branchs')} \"\r\n                                    style=\"color: black;\"> <i class=\"fas fa-circle fa-xs mr-2\"></i>\r\n                                    {{value.name}}</span>\r\n                            </mat-expansion-panel-header>\r\n                            <mat-list style=\"margin-left:30px;\" >\r\n                                <div  *ngFor=\"let branch of value.unit\">\r\n                                    <mat-expansion-panel class=\"no-shadow\" [hideToggle]=\"branch.unit.length==0\">\r\n                                        <mat-expansion-panel-header >\r\n                                        <mat-checkbox *ngIf=\"currentLoggedUser!=_currentUser.pub_key\"\r\n                                            [checked]='branch.checked'\r\n                                            (click)=\"$event.stopPropagation();\"\r\n                                            (change)=\"branch.checked=!branch.checked;onChange(branch)\">{{branch.name}}\r\n                                        </mat-checkbox>\r\n                                        <span *ngIf=\"currentLoggedUser==_currentUser.pub_key\"\r\n                                            [ngClass]=\"{'text':(value.name== 'All Branchs')}\"><i\r\n                                                class=\"fas fa-circle fa-xs mr-2\"></i> {{branch.name}}</span>\r\n                                            </mat-expansion-panel-header>\r\n                                            <div  *ngFor=\"let unit of branch.unit\">\r\n                                            <mat-list class=\"list-horizontal\">\r\n                                                <mat-checkbox *ngIf=\"currentLoggedUser!=_currentUser.pub_key\"\r\n                                                [checked]='unit.checked'\r\n                                                (click)=\"$event.stopPropagation();\"\r\n                                                (change)=\"unit.checked=!unit.checked;onChange(unit)\">{{unit.name}}\r\n                                            </mat-checkbox>\r\n                                            <span *ngIf=\"currentLoggedUser==_currentUser.pub_key\"\r\n                                    [ngClass]=\"{'text':(value.name== 'All Branchs')} \"\r\n                                    style=\"color: black;\"> <i class=\"fas fa-circle fa-xs mr-2\"></i>\r\n                                    {{unit.name}}</span>\r\n                                            </mat-list>\r\n                                            </div>\r\n                                </mat-expansion-panel>\r\n                                </div>\r\n                            </mat-list>\r\n                        </mat-expansion-panel>\r\n                    </div>\r\n                </mat-list>\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"kt-separator kt-separator--dashed\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 15px;\n  color: black; }\n\n.postion {\n  margin-left: 30px; }\n\nmat-list.list-horizontal {\n  padding: 0;\n  margin-left: 30px; }\n\nmat-list.list-horizontal .mat-list-item {\n    display: inline-block;\n    height: auto;\n    width: auto; }\n\n.mat-expansion-panel:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px -2px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-expansion-panel:not([class*='mat-content']) {\n  flex: 0.5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXJzL19zdWJzL2FjY2Vzc1JpZ2h0L0U6XFxHRU1JTlxcZ3ltaW4tMi4wLXNhYXMtZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcdXNlci1tYW5hZ2VtZW50XFx1c2Vyc1xcX3N1YnNcXGFjY2Vzc1JpZ2h0XFxhY2Nlc3NSaWdodC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWU7RUFDZixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksaUJBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksVUFBVTtFQUNWLGlCQUFpQixFQUFBOztBQUZyQjtJQUlNLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVyxFQUFBOztBQUdmO0VBQ0UseUhBQXlILEVBQUE7O0FBRTNIO0VBQ0UsU0FBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXJzL19zdWJzL2FjY2Vzc1JpZ2h0L2FjY2Vzc1JpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucG9zdGlvbntcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHg7XHJcbn1cclxubWF0LWxpc3QubGlzdC1ob3Jpem9udGFsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IFxyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWNvbnRlbnQnXSkge1xyXG4gICAgZmxleDowLjU7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.ts ***!
  \**********************************************************************************************/
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
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_1 = __webpack_require__(/*! ../../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var AccessRightComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<InvitationsEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function AccessRightComponent(
    //@Inject(MAT_DIALOG_DATA) public data: any,
    ChangeDetectorRef, activatedRoute, store, ser, router, layoutUtilsService) {
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.ser = ser;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.hasFormErrors = false;
        this.errormessage = '';
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
        this.allbrancandunits = [];
        this.checked = false;
        this.current_club_login = (JSON.parse(localStorage.getItem('user')))['current_club_login'];
        this.currentLoggedUser = (JSON.parse(localStorage.getItem('user')))['pub_key'];
        this.allbrancandunits.push({ name: 'All Branchs', 'pub_key': this.current_club_login, 'checked': false, 'unit': [] });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    //getallusers
    /**
     * On init
     */
    AccessRightComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ser.currentUser.subscribe(function (currentUser) {
            _this._currentUser = currentUser;
            if (_this.checkedpermission('getallusers')) {
                _this.ser.getAllBrachsAndUnits(1, 10000).subscribe(function (res) {
                    if (res['result']) {
                        var checkedNumber_1 = 0;
                        if (currentUser['pub_key'] != _this.currentLoggedUser) {
                            _this.ser.getAccessRightofUser(currentUser['pub_key']).subscribe(function (accessRight) {
                                _this.prepareData(res, accessRight, checkedNumber_1);
                            });
                        }
                        else {
                            var accessRight = {};
                            accessRight['data'] = [];
                            _this.prepareData(res, accessRight, checkedNumber_1);
                        }
                        console.log('dddd', _this.allbrancandunits);
                    }
                });
            }
            else {
                _this.checked = true;
            }
        }).unsubscribe();
    };
    /**
     * On destroy
     */
    AccessRightComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Save data
     */
    AccessRightComponent.prototype.onSubmit = function () {
        var invitationKeyupdate = '';
        var invitationKeyDel = '';
        this.allbrancandunits.forEach(function (element) {
            if (element.checked == true) {
                invitationKeyupdate += (element.pub_key) + ',';
            }
            else {
                invitationKeyDel += (element.pub_key) + ',';
            }
            element.unit.forEach(function (branch) {
                if (branch.checked == true)
                    invitationKeyupdate += (branch.pub_key) + ',';
                else {
                    invitationKeyDel += (branch.pub_key) + ',';
                }
                branch.unit.forEach(function (unit) {
                    if (unit.checked == true)
                        invitationKeyupdate += (unit.pub_key) + ',';
                    else {
                        invitationKeyDel += (unit.pub_key) + ',';
                    }
                });
            });
        });
        console.log('array', invitationKeyupdate);
        this.ser.updateAccessRightOfcurrentUser(invitationKeyupdate, invitationKeyDel);
    };
    //to check assign club,branch,unit to invitation 
    AccessRightComponent.prototype.onChange = function (place) {
        console.log(place);
        if (place.name == 'All Branchs' && place.checked == true) {
            this.allbrancandunits.forEach(function (AllBranchs) {
                AllBranchs['checked'] = true;
                if (AllBranchs['unit'] && AllBranchs['unit'].length > 0) {
                    AllBranchs['unit'].forEach(function (branch) {
                        branch['checked'] = true;
                        if (branch['unit']) {
                            branch['unit'].forEach(function (unit) {
                                unit['checked'] = true;
                            });
                        }
                    });
                }
            });
            this.ChangeDetectorRef.detectChanges();
        }
        if (place.name == 'All Branchs' && place.checked == false) {
            this.allbrancandunits.forEach(function (AllBranchs) {
                AllBranchs['checked'] = false;
                if (AllBranchs['unit'] && AllBranchs['unit'].length > 0) {
                    AllBranchs['unit'].forEach(function (branch) {
                        branch['checked'] = false;
                        if (branch['unit']) {
                            branch['unit'].forEach(function (unit) {
                                unit['checked'] = false;
                            });
                        }
                    });
                }
            });
            this.ChangeDetectorRef.detectChanges();
        }
        if (place.type == 'branch' && place.checked == true) {
            console.log(place);
            for (var index = 0; index < place.unit.length; index++) {
                place.unit[index]['checked'] = true;
                this.ChangeDetectorRef.detectChanges();
            }
        }
        if (place.type == 'branch' && place.checked == false) {
            console.log(place);
            for (var index = 0; index < place.unit.length; index++) {
                place.unit[index]['checked'] = false;
                this.ChangeDetectorRef.detectChanges();
            }
        }
        if (place.name == 'Other Units' && place.checked == true) {
            console.log(place);
            for (var index = 0; index < place.unit.length; index++) {
                place.unit[index]['checked'] = true;
                this.ChangeDetectorRef.detectChanges();
            }
        }
        if (place.name == 'Other Units' && place.checked == false) {
            console.log(place);
            for (var index = 0; index < place.unit.length; index++) {
                place.unit[index]['checked'] = false;
                this.ChangeDetectorRef.detectChanges();
            }
        }
        this.onSubmit();
    };
    AccessRightComponent.prototype.checkedpermission = function (key) {
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
    /**
     * Close alert
     *
     * @param $event: Event
     */
    AccessRightComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    /** UI */
    /**
     * Returns component title
     */
    AccessRightComponent.prototype.getTitle = function () {
        return 'Edit User Access Right';
    };
    AccessRightComponent.prototype.isTitleValid = function () {
        return true;
    };
    AccessRightComponent.prototype.prepareData = function (res, accessRight, checkedNumber) {
        var _this = this;
        //console.log('acc', accessRight)
        var branchs = [];
        res['data'].forEach(function (element) {
            if (element.type == 'branch') {
                branchs.push(element);
                var units_1 = [];
                res['data'].forEach(function (elem, index) {
                    if (elem.branch_key == element.pub_key) {
                        units_1.push(elem);
                        delete res['data'][index];
                    }
                });
                element['unit'] = units_1;
                _this.allbrancandunits[0]['unit'].push(element);
            }
            if (accessRight['data']['length'] > 0) {
                var accessRightArr = accessRight['data'];
                if (accessRightArr.indexOf(element.pub_key) != -1) {
                    element['checked'] = true;
                    checkedNumber += 1;
                }
                else
                    element['checked'] = false;
            }
            else
                element['checked'] = false;
        });
        if (checkedNumber == res['data'].length) {
            this.allbrancandunits[0]['checked'] = true;
        }
        var anotherUnit = [];
        var checkedUnit = 0;
        var checkedUnitBoolean = false;
        res['data'].forEach(function (element) {
            if (element['type'] == 'units') {
                if (element.checked) {
                    checkedUnit += 1;
                }
                element.unit = [];
                anotherUnit.push(element);
                console.log(anotherUnit);
            }
        });
        if (anotherUnit.length > 0 && anotherUnit.length == checkedUnit) {
            checkedUnitBoolean = true;
        }
        if (anotherUnit.length > 0) {
            this.allbrancandunits.push({ name: 'Other Units', 'pub_key': '', 'checked': checkedUnitBoolean, 'unit': anotherUnit });
        }
        console.log('all branchs', this.allbrancandunits);
        this.ChangeDetectorRef.detectChanges();
    };
    AccessRightComponent = __decorate([
        core_1.Component({
            selector: 'kt-accessRight',
            template: __webpack_require__(/*! ./accessRight.component.html */ "./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            styles: [__webpack_require__(/*! ./accessRight.component.scss */ "./src/app/views/pages/user-management/users/_subs/accessRight/accessRight.component.scss")]
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.ActivatedRoute,
            store_1.Store, _services_1.UserService, router_1.Router,
            crud_1.LayoutUtilsService])
    ], AccessRightComponent);
    return AccessRightComponent;
}());
exports.AccessRightComponent = AccessRightComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/address/address.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/address/address.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Form-->\r\n<form [formGroup]=\"addressForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\r\n\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\tOh snap! Check the form fields please\r\n\t</kt-alert>\r\n\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter Address Line\" formControlName=\"addressLine\" />\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['addressLine'].errors?.required\">Address Line is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['addressLine'].errors?.pattern\">Please enter\r\n\t\t\t\t\t\t<strong>valid addressLine</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['addressLine'].errors?.minlength\">Please enter\r\n\t\t\t\t\t\t\t<strong>at least 3 characters</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Address Line</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"City\" formControlName=\"city\" />\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['city'].invalid&&addressForm.controls['city'].errors?.required\">City is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['city'].invalid&&addressForm.controls['city'].errors.pattern\">Please enter\r\n\t\t\t\t\t\t<strong>valid city</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['city'].errors?.minlength\">Please enter\r\n\t\t\t\t\t\t\t<strong>at least 3 characters</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>City</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter State Line\" formControlName=\"state\" />\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['state'].errors?.required\">State is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['state'].errors?.pattern\">Please enter\r\n\t\t\t\t\t\t<strong>valid state</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['state'].errors?.minlength\">Please enter\r\n\t\t\t\t\t\t\t<strong>at least 3 characters</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>State</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t<input matInput placeholder=\"Enter Postode\" formControlName=\"postCode\" />\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['postCode'].errors?.required\">PostCode is\r\n\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-error *ngIf=\"addressForm.controls['postCode'].errors?.pattern||addressForm.controls['postCode'].errors?.minlength||addressForm.controls['postCode'].errors?.maxlenght\">Please enter\r\n\t\t\t\t\t\t<strong>valid postCode</strong>\r\n\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t<strong>Postcode</strong>\r\n\t\t\t\t\t</mat-hint>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</form>\r\n<!--end::Form-->\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/address/address.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/address/address.component.ts ***!
  \**************************************************************************************/
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth */ "./src/app/core/auth/index.ts");
var auth_service_1 = __webpack_require__(/*! ../../../../../../core/auth/_services/auth.service */ "./src/app/core/auth/_services/auth.service.ts");
// Layout
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
//userService
var _user_service_1 = __webpack_require__(/*! ../../../../../../core/auth/_services/-user.service */ "./src/app/core/auth/_services/-user.service.ts");
var AddressComponent = /** @class */ (function () {
    /**
     * Component Costructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function AddressComponent(fb, auth, store, layoutUtilsService, userservice) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.userservice = userservice;
        this.hasFormErrors = false;
        this.address = {};
        this.regx = /^[^+!@^#$%),(&.`=_]*$/;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userservice.currentUser.subscribe(function (res) {
            if (res) {
                _this.address['addressline'] = res['addressline'];
                _this.address['city'] = res['city'];
                _this.address['state'] = res['state'];
                _this.address['postCode'] = res['postCode'];
            }
            else {
                _this.address['addressline'] = '';
                _this.address['city'] = '';
                _this.address['state'] = '';
                _this.address['postCode'] = '';
            }
        });
        this.createForm();
        console.log(this.addressForm);
        this.addressForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.updateAddress();
        }))
            .subscribe();
    };
    /**
     * Init form
     */
    AddressComponent.prototype.createForm = function () {
        var _this = this;
        this.userservice.currentUser.subscribe(function (res) {
            _this.addressForm = _this.fb.group({
                addressLine: [res['addressLine'], [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern(_this.regx)]],
                city: [res['city'], [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern(_this.regx)]],
                state: [res['state'], [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern(_this.regx)]],
                postCode: [res['postCode'], [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.pattern(/^[0-9]*$/), forms_1.Validators.maxLength(5), forms_1.Validators.minLength(5)]]
            });
        });
    };
    /**
     * Update address
     */
    AddressComponent.prototype.updateAddress = function () {
        this.hasFormErrors = false;
        var controls = this.addressForm.controls;
        console.log(controls);
        console.log();
        /** check form */
        if (this.addressForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.errormessage = 'Oh snap! Check your data please.';
            this.AdressErrorMessage.next(this.errormessage);
            this.hasFormErrors = true;
            return;
        }
        this.errormessage = '';
        this.AdressErrorMessage.next(this.errormessage);
        var newAddress = new auth_1.Address();
        newAddress.addressLine = '';
        newAddress.city = '';
        newAddress.postCode = '';
        newAddress.state = '';
        newAddress['addressLine'] = controls['addressLine'].value;
        newAddress['city'] = controls['city'].value;
        newAddress['postCode'] = controls['postCode'].value;
        newAddress['state'] = controls['state'].value;
        //	this.userservice.updateAdrressOfcurrentUser(newAddress)
        this.addressSubject.next(newAddress);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    AddressComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], AddressComponent.prototype, "addressSubject", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], AddressComponent.prototype, "AdressErrorMessage", void 0);
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'kt-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/views/pages/user-management/users/_subs/address/address.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            store_1.Store,
            crud_1.LayoutUtilsService,
            _user_service_1.UserService])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Form-->\r\n\t<form *ngIf=\"user\" [formGroup]=\"changePasswordForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\r\n\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\t\tOh snap! Password not match.\r\n\t\t</kt-alert>\r\n\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t<div class=\"form-group kt-form__group row mb-0\">\r\n\t\t\t\t<div class=\"col-lg-8 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"password\" id=\"password\" autocomplete=\"off\" placeholder=\"Enter Password\" formControlName=\"password\" />\r\n\t\t\t\t\t\t<mat-error>Password is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Password</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-8 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput type=\"password\" id=\"confirmPassword\" autocomplete=\"off\" placeholder=\"Confirm password\" formControlName=\"confirmPassword\" />\r\n\t\t\t\t\t\t<mat-error>Confirm password is\r\n\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please conirm\r\n\t\t\t\t\t\t\t<strong>Password</strong>\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\r\n\t\t\t<button type=\"button\" [disabled]=\"changePasswordForm.invalid\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n\t\t\t\tChange password\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</form>\r\n<!--end::Form-->\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.ts ***!
  \******************************************************************************************************/
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth/ */ "./src/app/core/auth/index.ts");
// Layout
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var PasswordValidation = /** @class */ (function () {
    function PasswordValidation() {
    }
    /**
     * MatchPassword
     *
     * @param AC: AbstractControl
     */
    PasswordValidation.MatchPassword = function (AC) {
        var password = AC.get('password').value; // to get value in input tag
        var confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
        if (password !== confirmPassword) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true });
        }
        else {
            return null;
        }
    };
    return PasswordValidation;
}());
exports.PasswordValidation = PasswordValidation;
var ChangePasswordComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param fb: FormBuilder
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function ChangePasswordComponent(fb, auth, store, 
    // tslint:disable-next-line:align
    layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ChangePasswordComponent.prototype.ngOnInit = function () {
        //this.loadData();
    };
    /**
     * Load data
    //  */
    // loadData() {
    // 	this.auth.getUserById(this.userId).subscribe(res => {
    // 		this.user = res;
    // 		this.createForm();
    // 	});
    //}
    /**
     * Init form
     */
    ChangePasswordComponent.prototype.createForm = function () {
        this.changePasswordForm = this.fb.group({
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.required]
        });
    };
    /**
     * Reset
     */
    ChangePasswordComponent.prototype.reset = function () {
        this.hasFormErrors = false;
        this.loadingSubject.next(false);
        this.changePasswordForm.markAsPristine();
        this.changePasswordForm.markAsUntouched();
        this.changePasswordForm.updateValueAndValidity();
    };
    /**
     * Save data
     */
    ChangePasswordComponent.prototype.onSubmit = function () {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        var controls = this.changePasswordForm.controls;
        /** check form */
        if (this.changePasswordForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        this.user.password = controls['password'].value;
        var updatedUser = {
            id: this.user._userId,
            changes: this.user
        };
        this.store.dispatch(new auth_1.UserUpdated({
            partialUser: updatedUser,
            user: this.user
        }));
        //	this.loadData();
        this.loadingSubject.next(false);
        var message = "User password successfully has been changed.";
        this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 5000, true, false);
        this.reset();
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ChangePasswordComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ChangePasswordComponent.prototype, "userId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChangePasswordComponent.prototype, "loadingSubject", void 0);
    ChangePasswordComponent = __decorate([
        core_1.Component({
            selector: 'kt-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/views/pages/user-management/users/_subs/change-password/change-password.component.html"),
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, auth_1.AuthService, store_1.Store,
            crud_1.LayoutUtilsService])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());
exports.ChangePasswordComponent = ChangePasswordComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts-edit.dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts-edit.dialog.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\" [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n    <div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{ getTitle() }}</h3>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"kt-form\">\r\n            <div class=\"kt-portlet__body\">\r\n\r\n                <div class=\"kt-portlet__body-progress\">\r\n                    <mat-spinner [diameter]=\"20\"></mat-spinner>\r\n                </div>\r\n\r\n                <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\" (close)=\"onAlertClose($event)\">\r\n                    {{errormessage}}\r\n                </kt-alert>\r\n                <div *ngIf=\"allbranch.length >0\" class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-6 kt-margin-bottom-20-mobile\">\r\n\r\n      \t\t\t\t\t\t\t<mat-form-field>\r\n      \t\t\t\t\t\t\t  <mat-label> All Branchs :</mat-label>\r\n      \t\t\t\t\t\t\t  <mat-select [(ngModel)]=\"shift.branch_key\"   class=\"btn-group bootstrap-select bs-select\">\r\n                        <mat-option *ngFor=\"let value of allbranch\" (click)=\"branchOnchange(value.pub_key)\" [value]=\"value.pub_key\">\r\n      \t\t\t\t\t\t\t      {{value.name}}\r\n      \t\t\t\t\t\t\t    </mat-option>\r\n      \t\t\t\t\t\t\t  </mat-select>\r\n      \t\t\t\t\t\t\t</mat-form-field>\r\n                    </div>\r\n    \t\t\t\t\t\t</div>\r\n\r\n                <div *ngIf=\"allunits.length >0\" class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-6 kt-margin-bottom-20-mobile\">\r\n\r\n      \t\t\t\t\t\t\t<mat-form-field>\r\n      \t\t\t\t\t\t\t  <mat-label> All Unite :</mat-label>\r\n      \t\t\t\t\t\t\t  <mat-select [(ngModel)]=\"shift.units_key\" class=\"btn-group bootstrap-select bs-select\">\r\n                        <mat-option *ngFor=\"let value of allunits\" [value]=\"value.pub_key\">\r\n      \t\t\t\t\t\t\t      {{value.name}}\r\n      \t\t\t\t\t\t\t    </mat-option>\r\n      \t\t\t\t\t\t\t  </mat-select>\r\n      \t\t\t\t\t\t\t</mat-form-field>\r\n                    </div>\r\n    \t\t\t\t\t\t</div>\r\n\r\n                <div class=\"form-group kt-form__group row d-block\">\r\n                    <div class=\"col-lg-6 kt-margin-bottom-20-mobile\">\r\n      \t\t\t\t\t\t\t<mat-form-field>\r\n      \t\t\t\t\t\t\t  <mat-label> Shift Type * </mat-label>\r\n      \t\t\t\t\t\t\t  <mat-select [(ngModel)]=\"shift.shift_type\" class=\"btn-group bootstrap-select bs-select\">\r\n                        <mat-option  ng-reflect-value=\"gen\" value=\"pub\">General</mat-option>\r\n              \t\t\t\t\t<mat-option  ng-reflect-value=\"pri\" value=\"pri\">Private</mat-option>\r\n      \t\t\t\t\t\t\t  </mat-select>\r\n      \t\t\t\t\t\t\t</mat-form-field>\r\n                    </div>\r\n    \t\t\t\t\t\t</div>\r\n\r\n            <div class=\"form-group kt-form__group row d-block\">\r\n                <div class=\"col-lg-6 kt-margin-bottom-20-mobile\">\r\n  \t\t\t\t\t\t\t<mat-form-field>\r\n  \t\t\t\t\t\t\t  <mat-label> Day </mat-label>\r\n  \t\t\t\t\t\t\t  <mat-select [(ngModel)]=\"shift.day_per_week\" class=\"btn-group bootstrap-select bs-select\">\r\n                    <mat-option  ng-reflect-value=\"saturday\" value=\"saturday\">Saturday</mat-option>\r\n          \t\t\t\t\t<mat-option  ng-reflect-value=\"sunday\" value=\"sunday\">sunday</mat-option>\r\n                    <mat-option  ng-reflect-value=\"monday\" value=\"monday\">monday</mat-option>\r\n                    <mat-option  ng-reflect-value=\"tuesday\" value=\"tuesday\">tuesday</mat-option>\r\n                    <mat-option  ng-reflect-value=\"wednesday\" value=\"wednesday\">wednesday</mat-option>\r\n                    <mat-option  ng-reflect-value=\"thursday\" value=\"thursday\">thursday</mat-option>\r\n                    <mat-option  ng-reflect-value=\"friday\" value=\"friday\">friday</mat-option>\r\n  \t\t\t\t\t\t\t  </mat-select>\r\n  \t\t\t\t\t\t\t</mat-form-field>\r\n                </div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n          <div class=\"form-group kt-form__group row d-block\">\r\n              <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                      <input type=\"time\" matInput\r\n                          placeholder=\"Enter Start Time\"\r\n                          [(ngModel)]=\"shift.from_time\" />\r\n                      <mat-error>Start Time\r\n                          <strong>required</strong>\r\n                      </mat-error>\r\n                      <mat-hint align=\"start\">Please enter\r\n                          <strong>Start Time</strong>\r\n                      </mat-hint>\r\n                  </mat-form-field>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"form-group kt-form__group row d-block\">\r\n              <div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n                  <mat-form-field class=\"mat-form-field-fluid\">\r\n                      <input type=\"time\" matInput\r\n                          placeholder=\"Enter End Time\"\r\n                          [(ngModel)]=\"shift.to_time\" />\r\n                      <mat-error>End Time\r\n                          <strong>required</strong>\r\n                      </mat-error>\r\n                      <mat-hint align=\"start\">Please enter\r\n                          <strong>End Time</strong>\r\n                      </mat-hint>\r\n                  </mat-form-field>\r\n              </div>\r\n          </div>\r\n\r\n        <div class=\"form-group kt-form__group row d-block\">\r\n           <div class=\"col-lg-6 kt-margin-bottom-20-mobile\">\r\n             <mat-form-field class=\"example-full-width\">\r\n               <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"shift.from_day\" placeholder=\"from day\">\r\n               <mat-datepicker-toggle matSuffix [for]=\"picker\">\r\n                 <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n               </mat-datepicker-toggle>\r\n               <mat-datepicker #picker></mat-datepicker>\r\n             </mat-form-field>\r\n           </div>\r\n       </div>\r\n\r\n\r\n     <div class=\"form-group kt-form__group row d-block\">\r\n         <div class=\"col-lg-6 kt-margin-bottom-20-mobile\">\r\n           <mat-form-field class=\"example-full-width\">\r\n             <input matInput [matDatepicker]=\"pickerTo\" [(ngModel)]=\"shift.to_day\" placeholder=\"to day\">\r\n             <mat-datepicker-toggle matSuffix [for]=\"pickerTo\">\r\n               <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\r\n             </mat-datepicker-toggle>\r\n             <mat-datepicker #pickerTo></mat-datepicker>\r\n           </mat-form-field>\r\n         </div>\r\n     </div>\r\n\r\n\r\n                <div class=\"kt-separator kt-separator--dashed\"></div>\r\n\r\n            </div>\r\n            <div class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                    <div class=\"row text-right\">\r\n                        <div class=\"col-lg-12\">\r\n                            <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial matTooltip=\"Cancel changes\">\r\n                                Cancel\r\n                            </button>&nbsp;\r\n                            <button type=\"button\"  mat-raised-button color=\"primary\" (click)=\"onSubmit()\" [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts-edit.dialog.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts-edit.dialog.component.ts ***!
  \************************************************************************************************************/
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
// Lodash
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
var crud_1 = __webpack_require__(/*! ../../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var shifts_model_1 = __webpack_require__(/*! ./shifts.model */ "./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts.model.ts");
var _services_1 = __webpack_require__(/*! ../../../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var ShiftEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<ShiftEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function ShiftEditDialogComponent(dialogRef, data, store, ser, userservice, router, activatedRoute, layoutUtilsService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.ser = ser;
        this.userservice = userservice;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.layoutUtilsService = layoutUtilsService;
        this.hasFormErrors = false;
        this.errormessage = '';
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ShiftEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allbranch = [];
        this.allunits = [];
        var newInviation = new shifts_model_1.Shift();
        this.shift$ = rxjs_1.of(newInviation);
        this.shift$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.shift = res;
        });
        this.getbranceandunits();
        if (this.data._id != undefined)
            this.getActivitiesById(this.data);
    };
    ShiftEditDialogComponent.prototype.branchOnchange = function (key) {
        var allunits = [];
        Object.values(this.allbrancandunits).forEach(function (units) {
            if (units['type'] == 'units' && units['branch_key'] == key)
                allunits.push(units);
        });
        console.table(key);
        console.table(allunits);
        this.allunits = allunits;
    };
    /**
     * On destroy
     */
    ShiftEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Save data
     */
    ShiftEditDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.shift.from_time && this.shift.to_time && this.shift.shift_type) {
            this.loadingAfterSubmit = true;
            this.viewLoading = true;
            console.table(this.shift);
            if (this.data._id != undefined) {
                this.ser.updateshifts(this.data._id, this.shift).subscribe(function (res) {
                    _this.redirctFunction(res['result']);
                });
            }
            else {
                this.shift.user_key = this.data.user_key;
                this.ser.addshifts(this.shift).subscribe(function (res) {
                    _this.redirctFunction(res['result']);
                });
            }
        }
        else {
            this.hasFormErrors = true;
            this.errormessage = "Please Enter all Required Fileds";
        }
    };
    ShiftEditDialogComponent.prototype.redirctFunction = function (done) {
        var _this = this;
        if (done) {
            this.dialogRef.close({});
            if (this.router.url.includes('edits')) {
                var url = this.router.url.replace("edits", 'edit');
                if (!this.router.url.includes('?shift=true'))
                    url = url + '?shift=true';
                this.router.navigateByUrl(url);
            }
            else {
                var url = this.router.url.replace("edit", 'edits');
                if (!this.router.url.includes('?shift=true'))
                    url = url + '?shift=true';
                this.router.navigateByUrl(url);
            }
            setTimeout(function () {
                _this.layoutUtilsService.showActionNotification("Shift Add Successfully", crud_1.MessageType.Update);
            }, 1000);
        }
        else {
            this.loadingAfterSubmit = false;
            this.viewLoading = false;
            this.hasFormErrors = true;
            this.errormessage = 'Shift Doesn\'t Added';
        }
    };
    //get branch and units
    ShiftEditDialogComponent.prototype.getbranceandunits = function () {
        var _this = this;
        this.userservice.getAllBrachsAndUnits(1, 10000).subscribe(function (res) {
            if (res['result'] && res['data'].length > 0) {
                _this.allbrancandunits = res['data'];
                var branches = [];
                Object.keys(res['data']).forEach(function (key) {
                    if (res['data'][key].type == 'branch')
                        branches.push(res['data'][key]);
                });
                _this.allbranch = branches;
                //console.table(branches);
            }
        });
    };
    //get shifts data
    ShiftEditDialogComponent.prototype.getActivitiesById = function (data) {
        this.shift.branch_key = data.branch_key;
        this.shift.units_key = data.units_key;
        this.shift.resource_id = data.resource_id;
        this.shift.user_key = data.user_key;
        this.shift.shift_type = data.shift_type;
        this.shift.day_per_week = data.day_per_week;
        this.shift.from_time = data.from_time;
        this.shift.to_time = data.to_time;
        this.shift.from_day = data.from_day;
        this.shift.to_day = data.to_day;
        this.branchOnchange(this.shift.branch_key);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ShiftEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    /** UI */
    /**
     * Returns component title
     */
    ShiftEditDialogComponent.prototype.getTitle = function () {
        return 'New Shift';
    };
    ShiftEditDialogComponent.prototype.isTitleValid = function () {
        return true;
    };
    ShiftEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-shifts-edit-dialog',
            template: __webpack_require__(/*! ./shifts-edit.dialog.component.html */ "./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.Default,
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, store_1.Store, _services_1.Shifts, _services_1.UserService, router_1.Router, router_1.ActivatedRoute,
            crud_1.LayoutUtilsService])
    ], ShiftEditDialogComponent);
    return ShiftEditDialogComponent;
}());
exports.ShiftEditDialogComponent = ShiftEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts.model.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts.model.ts ***!
  \********************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var crud_1 = __webpack_require__(/*! ../../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var Shift = /** @class */ (function (_super) {
    __extends(Shift, _super);
    function Shift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shift.prototype.clear = function () {
        this.club_key = '';
        this.branch_key = '';
        this.units_key = '';
        this.resource_id = '';
        this.day_per_week = '';
        this.user_key = '';
        this.shift_type = '';
        this.from_time = '';
        this.to_time = '';
        this.from_day = '';
        this.to_day = '';
        this.status = '';
    };
    return Shift;
}(crud_1.BaseModel));
exports.Shift = Shift;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/shifts/shifts.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/shifts/shifts.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<div class=\"form-group kt-form__group row\">\r\n\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t<div class=\"kt-form\">\r\n\t\t\t\t<!-- start::FILTERS -->\r\n\t\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t\t<div class=\"col-md-12 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Search then Press Enter\" [(ngModel)]=\"SearchKey\" #searchInput placeholder=\"Search\" (keyup.enter)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\" (click)=\"onSearchClear()\">\r\n\t\t\t\t\t\t\t\t\t <mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t\t\t </button>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::FILTERS -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t<button type=\"button\" mat-raised-button matTooltip=\"Add Shifts\" (click)=\"addShifts()\" color=\"accent\">\r\n\t\t\t\tAdd Shifts\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"kt-separator kt-separator--dashed\"></div>\r\n\t<h6 class=\"kt-section__heading\" *ngIf=\"assignedRoles.length > 0\">\r\n\t\tAssigned Shifts :\r\n\t</h6>\r\n\t<div class=\"form-group kt-form__group row\" *ngIf=\"assignedRoles.length > 0\">\r\n\t\t<div class=\"col-lg-8 kt-margin-bottom-20-mobile\">\r\n\t\t\t<div class=\"kt-list-timeline kt-list-timeline--user-role\">\r\n\t\t\t\t<div class=\"kt-list-timeline__items\">\r\n\t\t\t\t\t<div class=\"kt-list-timeline__item m-0 p-0\" *ngFor=\"let _role of assignedRoles\">\r\n\t\t\t\t\t\t<span class=\"kt-list-timeline__badge kt-list-timeline__badge--primary\"></span>\r\n\t\t\t\t\t\t<span class=\"kt-list-timeline__text\">{{ _role.day_per_week }}</span>\r\n\t\t\t\t\t\t<span *ngIf=\"_role.shift_type=='pri'\" class=\"kt-list-timeline__text\">Private</span>\r\n\t\t\t\t\t\t<span *ngIf=\"_role.shift_type=='pub'\" class=\"kt-list-timeline__text\">Public</span>\r\n\t\t\t\t\t\t<span *ngIf=\"_role.status=='true'\" class=\"kt-list-timeline__text\">Active</span>\r\n\t\t\t\t\t\t<span *ngIf=\"_role.status=='false'\" class=\"kt-list-timeline__text\">Deactive</span>\r\n\t\t\t\t\t\t<span class=\"kt-list-timeline__text\">\r\n\t\t\t\t\t\t\t<button (click)=\"editshifts(_role)\" mat-icon-button color=\"primary\" *ngIf=\"checkedpermission()\" matTooltip=\"Edit Shift\">\r\n\t\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t\t<button *ngIf=\"_role.status=='true' && checkedpermission()\" mat-icon-button color=\"warn\" matTooltip=\"Deactive Shift\" type=\"button\"  (click)=\"deactiveshifts(_role._id,'false',_role.user_key)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button *ngIf=\"_role.status=='false' && checkedpermission()\" mat-icon-button color=\"warn\" matTooltip=\"Active Shift\" type=\"button\"  (click)=\"deactiveshifts(_role._id,'true',_role.user_key)\">\r\n\t\t\t\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/shifts/shifts.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/shifts/shifts.component.ts ***!
  \************************************************************************************/
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
// Material
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_1 = __webpack_require__(/*! ../../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var shifts_edit_dialog_component_1 = __webpack_require__(/*! ./shifts-edit/shifts-edit.dialog.component */ "./src/app/views/pages/user-management/users/_subs/shifts/shifts-edit/shifts-edit.dialog.component.ts");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var ShiftsComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     * @param subheaderService: SubheaderService
     */
    function ShiftsComponent(activatedRoute, store, router, layoutUtilsService, dialog, ser, userservice, changeDetectorRefs) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.dialog = dialog;
        this.ser = ser;
        this.userservice = userservice;
        this.changeDetectorRefs = changeDetectorRefs;
        this.selection = new collections_1.SelectionModel(true, []);
        this.displayedColumns = ['id', 'title', 'discriptions', 'type', 'status', 'actions'];
        this.hasMessages = false;
        this.checkdata = false;
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ShiftsComponent.prototype.ngOnInit = function () {
        this.assignedRoles = [];
        this.getallshifts();
    };
    ShiftsComponent.prototype.ngAfterViewInit = function () {
        this.getallshifts();
    };
    /**
     * On Destroy
     */
    ShiftsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    ShiftsComponent.prototype.addShifts = function () {
        var user_key = this.activatedRoute.snapshot.paramMap.get("id");
        var dialogRef = this.dialog.open(shifts_edit_dialog_component_1.ShiftEditDialogComponent, { data: { user_key: user_key } });
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ShiftsComponent.prototype.onAlertClose = function ($event) {
        this.hasMessages = false;
    };
    ShiftsComponent.prototype.getallshifts = function (pages, prepage, search) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (prepage === void 0) { prepage = 30; }
        if (search === void 0) { search = null; }
        var user_key = this.activatedRoute.snapshot.paramMap.get("id");
        this.ser.getallshifts(user_key, pages, prepage, search).subscribe(function (res) {
            if (res['result']) {
                console.log('dataaa', res['data']);
                _this.assignedRoles = res['data'];
            }
        });
    };
    ShiftsComponent.prototype.editshifts = function (data) {
        var dialogRef = this.dialog.open(shifts_edit_dialog_component_1.ShiftEditDialogComponent, { data: data });
    };
    ShiftsComponent.prototype.deactiveshifts = function (id, status, user_key) {
        var _this = this;
        this.ser.updateshifts(id, { status: status }).subscribe(function (res) {
            if (_this.router.url == '/default/user-management/users/edit/' + user_key + '?shift=true')
                _this.router.navigateByUrl("/default/user-management/users/edits/" + user_key + '?shift=true');
            else
                _this.router.navigateByUrl("/default/user-management/users/edit/" + user_key + '?shift=true');
        });
    };
    ShiftsComponent.prototype.applyFilter = function () {
        this.getallshifts(null, null, this.searchInput.nativeElement.value);
    };
    ShiftsComponent.prototype.onSearchClear = function () {
        this.searchInput.nativeElement.value = '';
        this.applyFilter();
    };
    ShiftsComponent.prototype.nextPage = function (event) {
        this.getallshifts(event.pageIndex + 1, event.pageSize, null);
    };
    //checked if there is inivitations or not
    ShiftsComponent.prototype.checkedinvitations = function () {
        if (this.dataSource) {
            if (this.dataSource.data) {
                return true;
            }
            else
                return false;
        }
        else
            false;
    };
    ShiftsComponent.prototype.checkedpermission = function () {
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']) {
                if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Users Mangement']) {
                    if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Users Mangement']['Invitation'])
                        return true;
                }
            }
        }
        return false;
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], ShiftsComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], ShiftsComponent.prototype, "searchInput", void 0);
    ShiftsComponent = __decorate([
        core_1.Component({
            selector: 'kt-shifts',
            template: __webpack_require__(/*! ./shifts.component.html */ "./src/app/views/pages/user-management/users/_subs/shifts/shifts.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_1.Store,
            router_1.Router,
            crud_1.LayoutUtilsService,
            material_1.MatDialog,
            _services_1.Shifts, _services_1.UserService,
            core_1.ChangeDetectorRef])
    ], ShiftsComponent);
    return ShiftsComponent;
}());
exports.ShiftsComponent = ShiftsComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Form-->\r\n<div *ngIf=\"socialNetworksForm\">\r\n\t<form [formGroup]=\"socialNetworksForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\t\r\n\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\" (close)=\"onAlertClose($event)\">\r\n\t\t\tOh snap! Change a few things up and try submitting again.\r\n\t\t</kt-alert>\r\n\t\t<div class=\"kt-form__section kt-form__section--first\">\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter LinkedIn address\" formControlName=\"linkedIn\" />\r\n\t\t\t\t\t\t<mat-error>Please enter\r\n\t\t\t\t\t\t\t\t<strong>valid URL</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Linked In</strong> address\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Facebook address\" formControlName=\"facebook\" />\r\n\t\t\t\t\t\t<mat-error>Please enter\r\n\t\t\t\t\t\t\t\t<strong>valid URL</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Facebook</strong> address\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Twitter address\" formControlName=\"twitter\" />\r\n\t\t\t\t\t\t<mat-error>Please enter\r\n\t\t\t\t\t\t\t\t<strong>valid URL</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Twitter</strong> address\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t<input matInput placeholder=\"Enter Instagram address\" formControlName=\"instagram\" />\r\n\t\t\t\t\t\t<mat-error>Please enter\r\n\t\t\t\t\t\t\t\t<strong>valid URL</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t<strong>Instagram</strong> address\r\n\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</form>\r\n\t</div>\r\n\t<!--end::Form-->\r\n\t\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.ts ***!
  \******************************************************************************************************/
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
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
// Auth
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth */ "./src/app/core/auth/index.ts");
var auth_service_1 = __webpack_require__(/*! ../../../../../../core/auth/_services/auth.service */ "./src/app/core/auth/_services/auth.service.ts");
// CRUD
var crud_1 = __webpack_require__(/*! ../../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var ng2_validation_1 = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
var SocialNetworksComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     *
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-ho
    /**
     * Component constructor
     *
     * @param fb: FormBuilser
     * @param auth: AuthService
     * @param store: Store<AppState>
     * @param layoutUtilsService: LayoutUtilsService
     */
    function SocialNetworksComponent(fb, auth, store, layoutUtilsService) {
        this.fb = fb;
        this.auth = auth;
        this.store = store;
        this.layoutUtilsService = layoutUtilsService;
        // Public properties
        // Incoming data
        this.loadingSubject = new rxjs_1.BehaviorSubject(false);
        this.hasFormErrors = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SocialNetworksComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.socialNetworksSubject.value) {
            var newSocialNetworks = new auth_1.SocialNetworks();
            newSocialNetworks.facebook = '';
            newSocialNetworks.instagram = '';
            newSocialNetworks.linkedIn = '';
            newSocialNetworks.twitter = '';
            this.socialNetworksSubject.next(newSocialNetworks);
        }
        this.createForm();
        this.socialNetworksForm.valueChanges
            .pipe(
        // tslint:disable-next-line:max-line-length
        operators_1.debounceTime(150), // The user can type quite quickly in the input box, and that could trigger a lot of server requests. With this operator, we are limiting the amount of server requests emitted to a maximum of one every 150ms
        operators_1.distinctUntilChanged(), // This operator will eliminate duplicate values
        operators_1.tap(function () {
            _this.updateSocialNetworks();
        }))
            .subscribe();
    };
    // Create form
    SocialNetworksComponent.prototype.createForm = function () {
        this.socialNetworksForm = this.fb.group({
            linkedIn: [this.socialNetworksSubject.value.linkedIn, ng2_validation_1.CustomValidators.url],
            facebook: [this.socialNetworksSubject.value.facebook, ng2_validation_1.CustomValidators.url],
            twitter: [this.socialNetworksSubject.value.twitter, ng2_validation_1.CustomValidators.url],
            instagram: [this.socialNetworksSubject.value.instagram, ng2_validation_1.CustomValidators.url]
        });
    };
    /**
     * Update social networks
     */
    SocialNetworksComponent.prototype.updateSocialNetworks = function () {
        this.loadingSubject.next(true);
        this.hasFormErrors = false;
        var controls = this.socialNetworksForm.controls;
        /** check form */
        if (this.socialNetworksForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.errormessage = 'Oh snap! Check your data please.';
            this.SocialErrorMesaage.next(this.errormessage);
            this.hasFormErrors = true;
            this.loadingSubject.next(false);
            return;
        }
        this.errormessage = '';
        this.SocialErrorMesaage.next(this.errormessage);
        var newSocialNetworks = new auth_1.SocialNetworks();
        newSocialNetworks.facebook = '';
        newSocialNetworks.instagram = '';
        newSocialNetworks.linkedIn = '';
        newSocialNetworks.twitter = '';
        newSocialNetworks.linkedIn = controls['linkedIn'].value;
        newSocialNetworks.facebook = controls['facebook'].value;
        newSocialNetworks.twitter = controls['twitter'].value;
        newSocialNetworks.instagram = controls['instagram'].value;
        this.socialNetworksSubject.next(newSocialNetworks);
        this.loadingSubject.next(false);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    SocialNetworksComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SocialNetworksComponent.prototype, "loadingSubject", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], SocialNetworksComponent.prototype, "socialNetworksSubject", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", rxjs_1.BehaviorSubject)
    ], SocialNetworksComponent.prototype, "SocialErrorMesaage", void 0);
    SocialNetworksComponent = __decorate([
        core_1.Component({
            selector: 'kt-social-networks',
            template: __webpack_require__(/*! ./social-networks.component.html */ "./src/app/views/pages/user-management/users/_subs/social-networks/social-networks.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            auth_service_1.AuthService,
            store_1.Store,
            crud_1.LayoutUtilsService])
    ], SocialNetworksComponent);
    return SocialNetworksComponent;
}());
exports.SocialNetworksComponent = SocialNetworksComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\r\n    <div  *ngIf=\"!allPermissions$\">\r\n        <mat-progress-spinner style=\"margin:0 auto;\"\r\n\t\tmode=\"indeterminate\" diameter=\"40\">\r\n\t</mat-progress-spinner> \r\n    </div>\r\n    <div  *ngIf=\"allPermissions$\">\r\n        <div class=\"kt-form\">\r\n            <div >\r\n \r\n                <mat-form-field *ngIf=\"allPermissions&&currentUser.pub_key!=currentLoggedUser\">\r\n                        <mat-label>Priviliedges</mat-label>\r\n                  <mat-select class=\"example-select\"  [(ngModel)]=\"selected\" (ngModelChange)=\"selectedPriviledgeType($event)\" >\r\n                    <mat-option  *ngFor=\"let role of  allPermissions$\" [value]=\"role.type\" >\r\n                        {{role.type}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n                  \r\n<!-- \r\n\r\n                <mat-form-field>\r\n                   \r\n                    <mat-select [(ngModel)]=\"selected\" (ngModelChange)=\"selectedPriviledgeType($event)\" *ngIf=\"allPermissions$\" >\r\n                        <mat-option  *ngFor=\"let role of  allPermissions$.result\" [value]=\"role.type\" >\r\n                            {{role.type}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field> -->\r\n  \r\n                <div class=\"kt-portlet__body\">\r\n\r\n                    <div class=\"kt-separator kt-separator--dashed\"></div>\r\n                    <div class=\"form-group kt-form__group row\">\r\n                        <div class=\"col-lg-12 kt-margin-bottom-20-mobile\">\r\n                            <div class=\"kt-timeline-3 mb-5\">\r\n                                <div class=\"kt-timeline-3__items kt-timeline-3__items--rolePermissions\">\r\n                                    <div *ngFor=\"let _rootRole of rolePermissions\" class=\"kt-timeline-3__inner\">\r\n\r\n                                        <!-- {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}} -->\r\n                                        <!-- <button mat-icon-button>\r\n                                        <mat-icon class=\"mat-icon-rtl-mirror\">expand_more</mat-icon>\r\n                                    </button> -->\r\n                                        <div class=\"kt-timeline-3__item kt-border-bottom-grey kt-py-15 kt-bg-grey\">\r\n                                            <span class=\"kt-timeline-3__item-time\">\r\n                                                <mat-checkbox *ngIf=\"currentUser.pub_key!=currentLoggedUser\" [checked]=\"_rootRole.isSelected\"\r\n                                                    (change)=\"isSelectedChanged($event, _rootRole)\">\r\n                                                    {{ _rootRole.title }}</mat-checkbox>\r\n                                                    <span *ngIf=\"currentUser.pub_key==currentLoggedUser\"\r\n                                                  \r\n                                                    style=\"color: black;\"> <i class=\"fas fa-circle fa-xs mr-2\"></i>\r\n                                                    {{ _rootRole.title }}</span>\r\n                                            </span>\r\n                                        </div>\r\n                                        <div\r\n                                            class=\"d-flex align-items-center kt-border-bottom-grey kt-py-15 kt-bg-grey\" style=\"flex-wrap:wrap;\">\r\n                                            <div class=\"kt-timeline-3__item kt-timeline-3__item-child\"\r\n                                                *ngFor=\"let _childRole of _rootRole._children\">\r\n                                                <span class=\"kt-timeline-3__item-time\">\r\n                                                    <mat-checkbox *ngIf=\"currentUser.pub_key!=currentLoggedUser\" [checked]=\"_childRole.isSelected\"\r\n                                                        (change)=\"isSelectedChanged($event, _childRole)\">\r\n                                                        {{ _childRole.key }}</mat-checkbox>\r\n                                                        <span *ngIf=\"currentUser.pub_key==currentLoggedUser\"\r\n                                                      \r\n                                                        style=\"color: black;\"> <i class=\"fas fa-circle fa-xs mr-2\"></i>\r\n                                                        {{ _childRole.key }}</span>\r\n                                                </span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.ts ***!
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
// Lodash
var lodash_1 = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services and Models
var auth_1 = __webpack_require__(/*! ../../../../../../core/auth */ "./src/app/core/auth/index.ts");
var _services_1 = __webpack_require__(/*! ../../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var UserRolesListComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<RoleEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function UserRolesListComponent(store, permission, User, route, changeDetectorRefs) {
        this.store = store;
        this.permission = permission;
        this.User = User;
        this.route = route;
        this.changeDetectorRefs = changeDetectorRefs;
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.loadingAfterSubmit = false;
        this.currentLoggedUser = (JSON.parse(localStorage.getItem('user')))['pub_key'];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserRolesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_id = this.route.url.split('/')[4];
        this.User.getUserbyId(this.user_id).subscribe(function (res) {
            _this.currentUser = res['users'][0];
            _this.User.changeuser(res['users'][0]);
            _this.rolePermissions = _this.permission.preparePrivilidges();
            console.log('mai', _this.rolePermissions);
            _this.checkedPermissions();
            _this.currentUser.role;
            _this.permission.getPriviliedgesType().subscribe(function (res) {
                _this.allPermissions$ = res['result'];
                //	console.log(this.allPermissions$);
                if (_this.currentUser['privilidge']) {
                    var type_1 = _this.currentUser['privilidge']['type_id'];
                    _this.allPermissions$.forEach(function (elem) {
                        if (elem['_id'] == type_1) {
                            _this.selected = elem['type'];
                        }
                    });
                }
                _this.changeDetectorRefs.detectChanges();
            });
            _this.changeDetectorRefs.detectChanges();
        });
    };
    /**
     * On destroy
     */
    UserRolesListComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Load permissions
     */
    UserRolesListComponent.prototype.loadPermissions = function () {
        var _this = this;
        this.allPermissions$.subscribe(function (_allPermissions) {
            if (!_allPermissions) {
                return;
            }
            var mainPermissions = _allPermissions.filter(function (el) { return !el.parentId; });
            mainPermissions.forEach(function (element) {
                var hasUserPermission = _this.role.permissions.some(function (t) { return t === element.id; });
                var rootPermission = new auth_1.Permission();
                rootPermission.clear();
                rootPermission.isSelected = hasUserPermission;
                rootPermission._children = [];
                rootPermission.id = element.id;
                rootPermission.level = element.level;
                rootPermission.parentId = element.parentId;
                rootPermission.title = element.title;
                var children = _allPermissions.filter(function (el) { return el.parentId && el.parentId === element.id; });
                children.forEach(function (child) {
                    var hasUserChildPermission = _this.role.permissions.some(function (t) { return t === child.id; });
                    var childPermission = new auth_1.Permission();
                    childPermission.clear();
                    childPermission.isSelected = hasUserChildPermission;
                    childPermission._children = [];
                    childPermission.id = child.id;
                    childPermission.level = child.level;
                    childPermission.parentId = child.parentId;
                    childPermission.title = child.title;
                    rootPermission._children.push(childPermission);
                });
                _this.rolePermissions.push(rootPermission);
            });
        });
    };
    /** ACTIONS */
    /**
     * Returns permissions ids
     */
    UserRolesListComponent.prototype.preparePermissionIds = function () {
        var result = [];
        lodash_1.each(this.rolePermissions, function (_root) {
            if (_root.isSelected) {
                result.push(_root.id);
                lodash_1.each(_root._children, function (_child) {
                    if (_child.isSelected) {
                        result.push(_child.id);
                    }
                });
            }
        });
        return result;
    };
    /**
     * Returns role for save
     */
    UserRolesListComponent.prototype.prepareRole = function () {
        var _role = new auth_1.Role();
        _role.id = this.role.id;
        _role.permissions = this.preparePermissionIds();
        // each(this.assignedRoles, (_role: Role) => _user.roles.push(_role.id));
        _role.title = this.role.title;
        _role.isCoreRole = this.role.isCoreRole;
        return _role;
    };
    /**
     * Save data
     */
    UserRolesListComponent.prototype.onSubmit = function () {
        this.hasFormErrors = false;
        this.loadingAfterSubmit = false;
        /** check form */
        if (!this.isTitleValid()) {
            this.hasFormErrors = true;
            return;
        }
        var editedRole = this.prepareRole();
        if (editedRole.id > 0) {
            this.updateRole(editedRole);
        }
        else {
            this.createRole(editedRole);
        }
    };
    /**
     * Update role
     *
     * @param _role: Role
     */
    UserRolesListComponent.prototype.updateRole = function (_role) {
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        /* Server loading imitation. Remove this on real code */
        var updateRole = {
            id: this.role.id,
            changes: _role
        };
        this.store.dispatch(new auth_1.RoleUpdated({
            partialrole: updateRole,
            role: _role
        }));
    };
    /**
     * Create role
     *
     * @param _role: Role
     */
    UserRolesListComponent.prototype.createRole = function (_role) {
        var _this = this;
        this.loadingAfterSubmit = true;
        this.viewLoading = true;
        this.store.dispatch(new auth_1.RoleOnServerCreated({ role: _role }));
        this.componentSubscriptions = this.store.pipe(operators_1.delay(1000), // Remove this line
        store_1.select(auth_1.selectLastCreatedRoleId)).subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.viewLoading = false;
        });
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    UserRolesListComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    /**
     * Check is selected changes
     *
     * @param $event: Event
     * @param permission: Permission
     */
    UserRolesListComponent.prototype.isSelectedChanged = function ($event, permission) {
        console.log('permission', permission);
        if (permission._children) {
            permission._children.forEach(function (elem) {
                elem['isSelected'] = $event['checked'];
            });
        }
        else if (permission.key) {
            permission['isSelected'] = $event['checked'];
        }
        // if (this.checkedSelectedChildern(permission._children)) {
        // 	permission['isSelected'] = true
        //}
        this.assignRole();
    };
    /** UI */
    /**
     * Returns component title
     */
    UserRolesListComponent.prototype.getTitle = function () {
        // tslint:disable-next-line:no-string-throw
        return "Edit role ''";
        // tslint:disable-next-line:no-string-thro
    };
    /**
     * Returns is title valid
     */
    UserRolesListComponent.prototype.isTitleValid = function () {
        return (this.role && this.role.title && this.role.title.length > 0);
    };
    //this method to checked permissions of user by the all pemissions 
    UserRolesListComponent.prototype.checkedPermissions = function () {
        var _this = this;
        console.log('checked permission', this.currentUser);
        var permissions = [];
        if (this.currentUser['privilidge']) {
            if (this.currentUser['privilidge']['privilidge']) {
                var privilidge_1 = JSON.parse(this.currentUser['privilidge']['privilidge']);
                Object.keys(privilidge_1).forEach(function (role) {
                    Object.keys(privilidge_1[role]).forEach(function (pri) {
                        permissions.push(privilidge_1[role][pri]);
                    });
                });
                permissions.forEach(function (item) {
                    _this.childernPermission(item);
                });
            }
        }
    };
    UserRolesListComponent.prototype.childernunPermission = function (item) {
        console.log('vgrgr', this.rolePermissions);
        var allpermission = [];
        this.rolePermissions.forEach(function (elem) {
            if (elem['_children']) {
                elem['_children'].forEach(function (permission) {
                    if (item == permission['value']) {
                        permission['isSelected'] = false;
                    }
                });
            }
        });
        return allpermission;
    };
    //this method to combine all permissions
    UserRolesListComponent.prototype.childernPermission = function (item) {
        console.log('vgrgr', this.rolePermissions);
        var allpermission = [];
        this.rolePermissions.forEach(function (elem) {
            if (elem['_children']) {
                elem['_children'].forEach(function (permission) {
                    if (item == permission['value']) {
                        permission['isSelected'] = true;
                    }
                });
            }
        });
        return allpermission;
    };
    UserRolesListComponent.prototype.checkedSelectedChildern = function (elem) {
        var checked = 1;
        if (elem['_children']) {
            elem['_children'].forEach(function (permission) {
                checked &= permission['isSelected'];
            });
        }
        console.log(checked);
        return checked;
    };
    UserRolesListComponent.prototype.selectedPermission = function () {
        var allpermission = '';
        this.rolePermissions.forEach(function (elem) {
            elem['_children'].forEach(function (permission) {
                if (permission['isSelected']) {
                    allpermission += permission['value'] + ',';
                }
            });
        });
        return allpermission;
    };
    UserRolesListComponent.prototype.assignRole = function () {
        var privilidge = this.selectedPermission();
        console.log(privilidge);
        var type = this.type;
        console.log('chosse privilidge', type);
        this.User.updateRolesOfcurrentUser(privilidge, type);
    };
    UserRolesListComponent.prototype.selectedPriviledgeType = function (event) {
        var _this = this;
        this.allPermissions$.forEach(function (item) {
            if (_this.type == item._id) {
                //access id of role
                console.log(_this.type, item['privilidge']);
                if (item['privilidge']) {
                    var permissions = item['privilidge'].split(',');
                    permissions.forEach(function (per) {
                        _this.childernunPermission(per);
                    });
                }
            }
        });
        this.allPermissions$.forEach(function (item) {
            if (_this.selected == item.type) {
                //access id of role
                _this.type = item['_id'];
                console.log(_this.type, item['privilidge']);
                if (item['privilidge']) {
                    var permissions = item['privilidge'].split(',');
                    permissions.forEach(function (per) {
                        _this.childernPermission(per);
                    });
                }
            }
        });
        this.assignRole();
        console.log('mmm', this.rolePermissions);
    };
    UserRolesListComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-roles-list',
            template: __webpack_require__(/*! ./user-roles-list.component.html */ "./src/app/views/pages/user-management/users/_subs/user-roles/user-roles-list.component.html"),
        }),
        __metadata("design:paramtypes", [store_1.Store,
            _services_1.PermissionsService,
            _services_1.UserService,
            router_1.Router,
            core_1.ChangeDetectorRef])
    ], UserRolesListComponent);
    return UserRolesListComponent;
}());
exports.UserRolesListComponent = UserRolesListComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/update-message/update-message.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/update-message/update-message.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\r\n  <div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n      <div class=\"kt-portlet__head-progress\">\r\n          <!-- here can place a progress bar-->\r\n          <mat-progress-bar mode=\"indeterminate\" *ngIf=\"viewLoading\"></mat-progress-bar>\r\n      </div>\r\n      <div class=\"kt-portlet__head-label\">\r\n          <h3 class=\"kt-portlet__head-title\">{{title}}</h3>\r\n          <span class=\"kt-portlet__head-icon kt-hide\">\r\n              <i class=\"la la-gear\"></i>\r\n          </span>\r\n      </div>\r\n  </div>\r\n  <div class=\"kt-form\">\r\n      <div class=\"kt-portlet__body\">\r\n          <div class=\"form-group kt-form__group row\">\r\n              <div class=\"col-lg-12\">\r\n                  {{message}}\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"kt-portlet__foot kt-portlet__no-border kt-portlet__foot--fit text-right\">\r\n          <div class=\"kt-form__actions kt-form__actions--sm\">\r\n              <button mat-button (click)=\"onNoClick()\">Cancel</button>&nbsp;\r\n              <button mat-button (click)=\"onYesClick()\" color=\"primary\" cdkFocusInitial [disabled]=\"viewLoading\">Ok</button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/update-message/update-message.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/update-message/update-message.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2Vycy91cGRhdGUtbWVzc2FnZS91cGRhdGUtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/update-message/update-message.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/update-message/update-message.component.ts ***!
  \**********************************************************************************************/
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
var UpdateMessageComponent = /** @class */ (function () {
    function UpdateMessageComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.viewLoading = false;
    }
    UpdateMessageComponent.prototype.ngOnInit = function () {
        this.dialogRef.disableClose = true;
        this.title = this.data.title;
        this.message = this.data.message;
    };
    UpdateMessageComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    /**
     * Close dialog with true result
     */
    UpdateMessageComponent.prototype.onYesClick = function () {
        var _this = this;
        /* Server loading imitation. Remove this */
        this.viewLoading = true;
        setTimeout(function () {
            _this.dialogRef.close(true); // Keep only this row
        }, 2500);
    };
    UpdateMessageComponent = __decorate([
        core_1.Component({
            selector: 'kt-update-message',
            template: __webpack_require__(/*! ./update-message.component.html */ "./src/app/views/pages/user-management/users/update-message/update-message.component.html"),
            styles: [__webpack_require__(/*! ./update-message.component.scss */ "./src/app/views/pages/user-management/users/update-message/update-message.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object])
    ], UpdateMessageComponent);
    return UpdateMessageComponent;
}());
exports.UpdateMessageComponent = UpdateMessageComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/user-edit/user-edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<div *ngIf=\"!user\"class=\"center\">\r\n        <mat-progress-spinner style=\"margin:0 auto;\"\r\n        mode=\"indeterminate\" diameter=\"40\">\r\n    </mat-progress-spinner>\r\n    </div>\r\n    <div  *ngIf=\"user\">\r\n\t<kt-portlet-header [title]=\"getComponentTitle()\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<a routerLink='/default/user-management/users' class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\r\n\t\t\t\tmatTooltip=\"Back to the users list\">\r\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-secondary kt-margin-r-10\" (click)=\"reset()\"\r\n\t\t\t\t[disabled]=\"selectedTab !== 0\" mat-raised-button matTooltip=\"Reset changes\">\r\n\t\t\t\t<i class=\"la la-cog\"></i>\r\n\t\t\t\t<span class=\"kt-hidden-mobile\">Reset</span>\r\n\t\t\t</a>\r\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\"\r\n\t\t\t\t(click)=\"onSumbit(false,true)\" [disabled]=\"DisablesSave()\" mat-raised-button\r\n\t\t\t\tmatTooltip=\"Save & Continue\">\r\n\t\t\t\t<span>Save</span>\r\n\t\t\t</a>\r\n\r\n\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\r\n\t<kt-portlet-body>\r\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\r\n\t\t\t<mat-tab [disabled]=\"!checkedpermission('getallusers')\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\r\n\t\t\t\t\tBasic info\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<!--begin::Form-->\r\n\t\t\t\t\t<div *ngIf=\"user\">\r\n\t\t\t\t\t\t<div id=\"spinner\" #spinner>\r\n\r\n\r\n\t\t\t\t\t\t\t<div class=\"kt-portlet__body-progress\" *ngIf=\"viewLoading\">\r\n\t\t\t\t\t\t\t\t<mat-spinner [diameter]=\"40\"></mat-spinner>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form [formGroup]=\"userForm\" class=\"kt-form kt-form--group-seperator-dashed\">\r\n\t\t\t\t\t\t\t<div id=\"alert\" #alert>\r\n\r\n\t\t\t\t\t\t\t\t<kt-alert *ngIf=\"errormessage\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n\t\t\t\t\t\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t\t\t\t{{errormessage}}\r\n\t\t\t\t\t\t\t\t</kt-alert>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n\t\t\t\t\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t\t\tOh snap! Change a few things up and try submitting again.\r\n\t\t\t\t\t\t\t</kt-alert>\r\n\t\t\t\t\t\t\t <div class=\"contain\"> \r\n\t\t\t\t\t\t\t\t<!-- <div class=\"kt-form__section kt-form__section--first\"> -->\r\n\t\t\t\t\t\t\t\t<div class=\"child\">\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"username\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"userForm.controls['username'].errors?.required\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tFullName\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tis\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"userForm.controls['username'].invalid&&userForm.controls['username'].errors?.pattern\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPlease enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>characters only</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Username</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input matInput formControlName=\"name\" />\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"userForm.controls['name'].errors?.required\"> Name is\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"userForm.controls['name'].errors?.pattern\"> Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>characters only</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Full Name</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" matInput formControlName=\"email\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"userForm.controls['email'].errors?.required\">Email is\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"userForm.controls['email'].errors?.email\"> Please\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tenter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>valid email</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Email</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Phone\" formControlName=\"phone\" />\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-error\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngIf=\"userForm.controls['phone'].errors?.pattern||userForm.controls['phone'].errors?.minlength||userForm.controls['phone'].errors?.maxlength\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tPlease enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>valid phone number</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<strong>Phone</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- </div> -->\r\n\t\t\t\t\t\t\t\t <div  style=\"margin:15px\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fileinput-new thumbnail\" style=\"width: 100px; height: 100px;\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"imageprivew ==''\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tsrc=\"http://www.placehold.it/100x100/EFEFEF/AAAAAA&amp;text=no+image\"\r\n\t\t\t\t\t\t\t\t\t\t\t\talt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"imageprivew !=''\" src=\"{{imageprivew}}\" alt=\"membership image\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width: 100px; height: 100px;\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"file-upload\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"custom-file-upload fileinput-new btn btn-success btn-s\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-cloud-upload\"></i> Upload Image</label>\r\n\t\t\t\t\t\t\t\t\t\t\t<input id=\"file-upload\" type=\"file\" name=\"file\" #input_image\r\n\t\t\t\t\t\t\t\t\t\t\t\t(change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" />\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t </div> \r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!--end::Form-->\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab [disabled]=\"!checkedpermission('getallusers')\" >\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-address-book\"></i>\r\n\t\t\t\t\tUser address\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-alert *ngIf=\"errormessage&&!ErrorAdress\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n\t\t\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t{{errormessage}}\r\n\t\t\t\t\t</kt-alert>\r\n\t\t\t\t\t<kt-alert *ngIf=\"ErrorAdress\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n\t\t\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t{{ErrorAdress}}\r\n\t\t\t\t\t</kt-alert>\r\n\t\t\t\t\t<kt-address [(addressSubject)]=\"addressSubject\" [(AdressErrorMessage)]=\"AdressErrorMessage\">\r\n\t\t\t\t\t</kt-address>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab [disabled]=\"!checkedpermission('getallusers')\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fab fa-facebook\"></i>\r\n\t\t\t\t\tSocial Nerworks\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-alert *ngIf=\"errormessage&&!SocialError\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n\t\t\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t{{errormessage}}\r\n\t\t\t\t\t</kt-alert>\r\n\t\t\t\t\t<kt-alert *ngIf=\"SocialError\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\r\n\t\t\t\t\t\t(close)=\"onAlertClose($event)\">\r\n\t\t\t\t\t\t{{SocialError}}\r\n\t\t\t\t\t</kt-alert>\r\n\t\t\t\t\t<kt-social-networks [(SocialErrorMesaage)]=\"SocialErrorMesaage\"\r\n\t\t\t\t\t\t[(socialNetworksSubject)]=\"socialNetworksSubject\"></kt-social-networks>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t<mat-tab [disabled]=\"!checkedpermission('getprivilidges')\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-unlock\"></i>\r\n\t\t\t\t\tUser roles\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-user-roles-list></kt-user-roles-list>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\t\t\t\r\n\t\t\t<mat-tab *ngIf=\"chechedRoleAndShiftsTab\" [disabled]=\"!checkedpermission('getprivilidges')\" >\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon flaticon2-protection\"></i>\r\n\t\t\t\t\tAccess Right\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-accessRight></kt-accessRight>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\r\n\t\t\t<mat-tab [disabled]=\"!checkedpermission('getshifts')\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\r\n\t\t\t\t\tShifts\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-shifts></kt-shifts>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab>\r\n\r\n\t\t\t<!-- <mat-tab *ngIf=\"user\" [disabled]=\"!user || !user.id\">\r\n\t\t\t\t<ng-template mat-tab-label>\r\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-exchange-alt\"></i>\r\n\t\t\t\t\tChange password\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template matTabContent>\r\n\t\t\t\t\t<kt-change-password [userId]=\"user.id\"></kt-change-password>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</mat-tab> -->\r\n\t\t</mat-tab-group>\r\n\t</kt-portlet-body>\r\n\t</div>\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/user-edit/user-edit.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  position: absolute;\n  top: 50%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%); }\n\ninput[type=\"file\"] {\n  display: none; }\n\n.custom-file-upload {\n  border: 1px solid #ccc;\n  display: inline-block;\n  padding: 6px 12px;\n  cursor: pointer;\n  margin-top: 15px; }\n\n.contain {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.child {\n  width: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXJzL3VzZXItZWRpdC9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXHVzZXItbWFuYWdlbWVudFxcdXNlcnNcXHVzZXItZWRpdFxcdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUVULG9EQUFvRDtFQUNwRCw0Q0FBNEMsRUFBQTs7QUFJaEQ7RUFDSSxhQUFhLEVBQUE7O0FBRWpCO0VBQ0ksc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGFBQWE7RUFDYixlQUFpQjtFQUNqQiw4QkFBNkIsRUFBQTs7QUFHakM7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7IFxyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5jb250YWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogIHdyYXAgO1xyXG4gICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jaGlsZHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts ***!
  \************************************************************************************/
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
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var update_message_component_1 = __webpack_require__(/*! ../update-message/update-message.component */ "./src/app/views/pages/user-management/users/update-message/update-message.component.ts");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
// RxJS
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Layout
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_2 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var ng2_validation_1 = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
// Services and Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
var ng2_img_max_1 = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var UserEditComponent = /** @class */ (function () {
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
    function UserEditComponent(activatedRoute, dialog, router, userFB, subheaderService, layoutUtilsService, store, layoutConfigService, userService, changeDetectorRefs, _ng2ImgMax, MembershipService) {
        this.activatedRoute = activatedRoute;
        this.dialog = dialog;
        this.router = router;
        this.userFB = userFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.store = store;
        this.layoutConfigService = layoutConfigService;
        this.userService = userService;
        this.changeDetectorRefs = changeDetectorRefs;
        this._ng2ImgMax = _ng2ImgMax;
        this.MembershipService = MembershipService;
        this.isDisabled = false;
        this.chechedRoleAndShiftsTab = true;
        this.selectedTab = 0;
        this.addressSubject = new rxjs_1.BehaviorSubject(new auth_1.Address());
        this.socialNetworksSubject = new rxjs_1.BehaviorSubject(new auth_1.SocialNetworks());
        this.hasFormErrors = false;
        // Private properties
        this.subscriptions = [];
        this.AdressErrorMessage = new rxjs_1.BehaviorSubject('');
        this.SocialErrorMesaage = new rxjs_1.BehaviorSubject('');
        this.regx = /^[^+!@^#$%),(&.`=_]*$/;
        this.nameRegx = /^([^0-9]*)$/;
        this.token = JSON.parse(localStorage.getItem('user'))['token'];
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.MembershipService.upload_file(), authToken: this.token, itemAlias: 'upload' });
        this.viewLoading = false;
        this.submited = false;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.user_id = this.activatedRoute.snapshot.paramMap.get('id')
        if (localStorage.getItem('user')) {
            try {
                var user = JSON.parse(localStorage.getItem('user'));
                this.baseURL = (user['baseurl']).trim();
            }
            catch (error) {
            }
        }
        this.user_id = this.activatedRoute.snapshot.paramMap.get('id');
        //this.user_id=this.router.url.split('/')[4]
        console.log(this.user_id);
        if (this.activatedRoute.snapshot.queryParamMap.get("shift"))
            this.selectedTab = 4;
        // this.loading$ = this.store.pipe(select(selectUsersActionLoading));
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.selectedTab = 0;
            _this.user_id = params['id'];
            console.log('id=', id);
            if (id && _this.user_id) {
                _this.userService.getUserbyId(id).subscribe(function (res) {
                    if (res) {
                        if (_this.activatedRoute.snapshot.queryParamMap.get('info')) {
                            _this.chechedRoleAndShiftsTab = false;
                            if (!_this.checkedpermission('editclubinfo'))
                                _this.isDisabled = true;
                        }
                        else {
                            _this.chechedRoleAndShiftsTab = true;
                        }
                        console.log('userrrrr', res);
                        _this.user = res['users'][0];
                        _this.userService.changeuser(_this.user);
                        _this.addressSubject.next(_this.preparAddressToShow());
                        _this.socialNetworksSubject.next(_this.preparSocialNetworkToShow());
                        _this.oldUser = Object.assign({}, _this.user);
                        _this.initUser();
                        _this.preparAddressToShow();
                        _this.preparSocialNetworkToShow();
                        //this.soicialNetworksSubject.next(this.preparSocialNetworkToShow())
                        _this.userService.changeuser(_this.user);
                        if (_this.oldUser.image_profile != '') {
                            //this.baseUrl +
                            _this.imageprivew = _this.baseURL + _this.oldUser.image_profile;
                        }
                        else {
                            _this.imageprivew = '';
                        }
                        _this.changeDetectorRefs.detectChanges();
                    }
                });
            }
        });
        this.subscriptions.push(routeSubscription);
        //this.baseUrl +
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
        };
    };
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    /**
     * Init user
     */
    UserEditComponent.prototype.initUser = function () {
        this.createForm();
        console.log(this.user);
        if (!this.user) { //id
            this.subheaderService.setTitle('Create user');
            this.subheaderService.setBreadcrumbs([
                { title: 'User Management', page: "user-management" },
                { title: 'Users', page: "user-management/users" },
                { title: 'Create user', page: "user-management/users/add" },
                { title: 'View and Edit user', page: "user-management/users/add" }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit user');
        this.subheaderService.setBreadcrumbs([
            { title: 'User Management', page: "user-management" },
            { title: 'Users', page: "user-management/users" },
            { title: 'View and Edit user', page: "user-management/users/edit", }
        ]);
    };
    /**
     * Create form
     */
    UserEditComponent.prototype.createForm = function () {
        this.userForm = this.userFB.group({
            username: [this.user.username, [forms_1.Validators.required, forms_1.Validators.pattern(this.regx), forms_1.Validators.pattern(this.nameRegx)]],
            name: [this.user.name, [forms_1.Validators.required, forms_1.Validators.pattern(this.regx), forms_1.Validators.pattern(this.nameRegx)]],
            email: [this.user.email, [forms_1.Validators.required, ng2_validation_1.CustomValidators.email]],
            phone: [this.user.phone, [forms_1.Validators.pattern("^[0-9+]*$"), forms_1.Validators.maxLength(11), forms_1.Validators.minLength(11)]],
        });
    };
    /**
     * Redirect to list
     *
     */
    UserEditComponent.prototype.goBackWithId = function () {
        var url = this.layoutConfigService.getCurrentMainRoute() + "/user-management/users";
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (!this.activatedRoute.snapshot.queryParamMap.get('info') || !this.user_id == currentUser['_id'])
            this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    UserEditComponent.prototype.DisablesSave = function () {
        if (this.viewLoading || this.submited)
            return true;
        else
            false;
    };
    /**
     * Refresh user
     *
     * @param isNew: boolean
     * @param id: number
     */
    UserEditComponent.prototype.refreshUser = function (isNew, id) {
        if (isNew === void 0) { isNew = false; }
        if (id === void 0) { id = 0; }
        var url = this.router.url;
        if (!isNew) {
            this.router.navigate([url], { relativeTo: this.activatedRoute });
            return;
        }
        url = this.layoutConfigService.getCurrentMainRoute() + "/user-management/users/edit";
        this.router.navigateByUrl(url, { relativeTo: this.activatedRoute });
    };
    /**
     * Reset
     */
    UserEditComponent.prototype.reset = function () {
        this.user = Object.assign({}, this.oldUser);
        this.createForm();
        this.hasFormErrors = false;
        this.userForm.markAsPristine();
        this.userForm.markAsUntouched();
        this.userForm.updateValueAndValidity();
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    UserEditComponent.prototype.onSumbit = function (withBack, role) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        if (role === void 0) { role = false; }
        this.submited = true;
        console.log('this.selectedTab', this.selectedTab);
        if (this.selectedTab == 0) {
            this.hasFormErrors = false;
            var controls_1 = this.userForm.controls;
            if (this.userForm.invalid) {
                Object.keys(controls_1).forEach(function (controlName) {
                    controls_1[controlName].markAsTouched();
                });
                this.hasFormErrors = true;
                this.selectedTab = 0;
                return;
            }
            var editedUser_1 = this.prepareUser();
            delete editedUser_1['_isEditMode'];
            delete editedUser_1['_userId'];
            var basicInfo_1 = {
                name: editedUser_1.name,
                username: editedUser_1.username,
                email: editedUser_1.email,
                phone: editedUser_1.phone,
            };
            // basicInfo  انا هنا بس بجيب الحاجات اللي اتعدلت
            Object.keys(basicInfo_1).forEach(function (key, index) {
                if (basicInfo_1[key] == _this.oldUser[key]) {
                    delete basicInfo_1[key];
                    //	console.log(basicInfo,'basicInfo')
                }
            });
            // لو مفيش تعديلات حصلت ومفيش صوره اترفعت
            if (Object.keys(basicInfo_1).length == 0 && this.input_image.nativeElement.value == '') {
                var dialogRef = this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                    width: '80%',
                    data: { 'title': 'Basic Information', 'message': 'You do not change any data ,Are you sure you want to exit?' },
                });
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        _this.submited = false;
                        _this.changeDetectorRefs.detectChanges();
                        return;
                    }
                    else {
                        _this.layoutUtilsService.showActionNotification('no changes');
                        _this.router.navigateByUrl("/user-management/users");
                    }
                });
            }
            else if (this.input_image.nativeElement.value != '') {
                console.log(this.input_image.nativeElement.value);
                console.log('heeeeeeeeeeeeere');
                var dialogRef = this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                    width: '80%',
                    data: { 'title': 'Basic Information', 'message': 'Are you sure you want to update user data?' },
                });
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        _this.submited = false;
                        _this.changeDetectorRefs.detectChanges();
                        return;
                    }
                    else {
                        _this.uploader.onBuildItemForm = function (fileItem, form) {
                            form.append('old_image', _this.oldUser.image_profile);
                        };
                        _this.uploader.uploadAll();
                        _this.uploader.onCompleteItem = function (item, response, status, headers) {
                            var responsePath = JSON.parse(response);
                            if (responsePath.result) {
                                // this.workout.image_url = responsePath.image;
                                basicInfo_1['image_profile'] = responsePath.data;
                                console.log(basicInfo_1['image_profile'], 'heeeeeeeeeeeeere');
                                _this.userService.updateUserData(_this.user.pub_key, basicInfo_1).subscribe(function (res) {
                                    if (res['result'] == true) {
                                        _this.updateUser(editedUser_1, withBack, "User successfully has been saved.");
                                        _this.router.navigateByUrl("/default/user-management/users");
                                    }
                                    if (res['result'] == false) {
                                        _this.errormessage = res['error'];
                                        _this.changeDetectorRefs.detectChanges();
                                    }
                                });
                            }
                        };
                    }
                });
            }
            else {
                console.log('heeeeeeere', 'jjjjjjjjjjjjj');
                var dialogRef = this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                    width: '80%',
                    data: { 'title': 'Basic Information', 'message': 'Are you sure you want to update user data?' },
                });
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        _this.submited = false;
                        return;
                    }
                    else {
                        _this.userService.updateUserData(_this.user.pub_key, basicInfo_1).subscribe(function (res) {
                            if (res['result'] == true) {
                                _this.updateUser(editedUser_1, withBack, "User successfully has been saved.");
                                _this.router.navigateByUrl("/default/user-management/users");
                            }
                            if (res['result'] == false) {
                                _this.errormessage = res['error'];
                                _this.changeDetectorRefs.detectChanges();
                            }
                        });
                    }
                });
            }
        }
        else if (this.selectedTab == 1) {
            if (this.checkedpermission('updateuserdata')) {
                var editedUser_2 = this.addressSubject.value;
                if (this.AdressErrorMessage.value != '') {
                    this.ErrorAdress = this.AdressErrorMessage.value;
                    console.log(this.AdressErrorMessage.value);
                    return;
                }
                else if (editedUser_2.addressLine == this.user.address.addressLine &&
                    editedUser_2.city == this.user.address.city &&
                    editedUser_2.state == this.user.address.state &&
                    editedUser_2.postCode == this.user.address.postCode) {
                    var dialogRef = this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                        width: '80%',
                        data: { 'title': 'Address', 'message': 'You do not change any data ,Are you sure you want to exit?' },
                    });
                    dialogRef.afterClosed().subscribe(function (res) {
                        if (!res) {
                            _this.submited = false;
                            _this.changeDetectorRefs.detectChanges();
                            return;
                        }
                        else {
                            _this.layoutUtilsService.showActionNotification('no changes');
                            _this.router.navigateByUrl("/default/user-management/users");
                        }
                    });
                }
                else {
                    var dialogRef = this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                        width: '80%',
                        data: { 'title': 'Address', 'message': 'Are you sure you want to update user data?' },
                    });
                    dialogRef.afterClosed().subscribe(function (res) {
                        if (!res) {
                            _this.submited = false;
                            _this.changeDetectorRefs.detectChanges();
                            return;
                        }
                        else {
                            _this.userService.updateUserData(_this.user.pub_key, editedUser_2).subscribe(function (res) {
                                if (res['result'] == true) {
                                    _this.updateUser(editedUser_2, true, "User successfully has been saved.");
                                    _this.router.navigateByUrl("/user-management/users");
                                }
                                if (res['result'] == false) {
                                    _this.errormessage = res['error'];
                                    _this.changeDetectorRefs.detectChanges();
                                }
                            });
                        }
                    });
                }
            }
            else {
                alert('Sorry,You do not have permission to update user');
            }
        }
        else if (this.selectedTab == 2) {
            if (this.checkedpermission('updateuserdata')) {
                var editedUser_3 = this.socialNetworksSubject.value;
                if (this.SocialErrorMesaage.value != '') {
                    this.ErrorAdress = this.SocialErrorMesaage.value;
                    return;
                }
                else if (editedUser_3.linkedIn == this.user.socialNetworks.linkedIn &&
                    editedUser_3.facebook == this.user.socialNetworks.facebook &&
                    editedUser_3.twitter == this.user.socialNetworks.twitter &&
                    editedUser_3.instagram == this.user.socialNetworks.instagram) {
                    var dialogRef = this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                        width: '80%',
                        data: { 'title': 'socialNetworks', 'message': 'You do not change any data ,Are you sure you want to exit?' },
                    });
                    dialogRef.afterClosed().subscribe(function (res) {
                        if (!res) {
                            _this.submited = false;
                            _this.changeDetectorRefs.detectChanges();
                            return;
                        }
                        else {
                            _this.layoutUtilsService.showActionNotification('no changes');
                            _this.router.navigateByUrl("/default/user-management/users");
                        }
                    });
                }
                else {
                    var dialogRef = this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                        width: '80%',
                        data: { 'title': 'socialNetworks', 'message': 'Are you sure you want to update user data?' },
                    });
                    dialogRef.afterClosed().subscribe(function (res) {
                        if (!res) {
                            _this.submited = false;
                            _this.changeDetectorRefs.detectChanges();
                            return;
                        }
                        else {
                            _this.userService.updateUserData(_this.user.pub_key, editedUser_3).subscribe(function (res) {
                                if (res['result'] == true) {
                                    _this.updateUser(editedUser_3, true, "User successfully has been saved.");
                                    _this.router.navigateByUrl("/default/user-management/users");
                                }
                                if (res['result'] == false) {
                                    _this.errormessage = res['error'];
                                    _this.changeDetectorRefs.detectChanges();
                                }
                            });
                        }
                    });
                }
            }
            else {
                alert('Sorry,You do not have permission to update user');
            }
        }
        else if (this.selectedTab === 3) {
            if (role) {
                var editedUser_4 = this.prepareUser();
                this.userService.currentUser.subscribe(function (res) {
                    if (res) {
                        if (_this.user['privilidge']) {
                            if (_this.checkedpermission('editprivilidges')) {
                                if (!res['role'].typeOfRole) {
                                    res['role']['typeOfRole'] = _this.user['privilidge']['type_id'];
                                }
                                _this.userService.updateUserPrvilidge(_this.user['privilidge']['id'], { privilidge: res['role'].privilidge, type: res['role'].typeOfRole }).subscribe(function (res) {
                                    if (res['result']) {
                                        _this.updateUser(editedUser_4, true, "User successfully has been saved.");
                                        //this.showToast('secondary ','User successfully has been saved')
                                    }
                                    else {
                                        _this.updateUser(editedUser_4, false, "Sorry user hasnt been saved ,try again.");
                                        //this.showToast('secondary ','Sorry user hasnt been saved ,try again')
                                    }
                                    _this.selectedTab = 0;
                                    //	this.userService.changeuser(null)
                                });
                            }
                            else {
                                alert('Sorry,You dont have permission to update privilidge');
                            }
                        }
                        else {
                            if (_this.checkedpermission('addprivilidges')) {
                                if (!res['role']) {
                                    alert('You must choose privilige before saving');
                                }
                                else {
                                    if (!res['role'].privilidge || !res['role'].typeOfRole || !_this.user['pub_key']) {
                                        alert('Sorry,incorrect data try again');
                                    }
                                    else {
                                        _this.userService.AddUserPrivilidge(res['role'].privilidge, res['role'].typeOfRole, _this.user['pub_key']).subscribe(function (res) {
                                            if (res['result']) {
                                                console.log('userrr', _this.user);
                                                _this.updateUser(editedUser_4, true, "User successfully has been saved.");
                                                //this.showToast('secondary ','User successfully has been saved')
                                            }
                                            else {
                                                _this.updateUser(editedUser_4, false, "Sorry user hasnt been saved ,try again.");
                                                //this.showToast('secondary ','Sorry user hasnt been saved ,try again')
                                            }
                                            _this.selectedTab = 0;
                                            return;
                                            //	this.userService.changeuser(null)
                                        });
                                    }
                                }
                            }
                            else {
                                alert('Sorry,You dont have permission to add privilidge');
                            }
                        }
                    }
                }).unsubscribe();
            }
        }
        else if (this.selectedTab === 4) {
            var editedUser_5 = this.prepareUser();
            this.userService.currentUser.subscribe(function (currentuser) {
                var data;
                if (currentuser['accessright']) {
                    if (currentuser['accessright'].update.length == 0) {
                        _this.submited = false;
                        var message = "You must choose at least one branch or unit";
                        _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Create, 5000, true, true);
                    }
                    else {
                        data = { 'title': 'Address', 'message': 'Do you want  to update access right?' };
                        var dialogRef = _this.dialog.open(update_message_component_1.UpdateMessageComponent, {
                            width: '80%',
                            data: data,
                        });
                        dialogRef.afterClosed().subscribe(function (res) {
                            if (!res) {
                                _this.submited = false;
                                return;
                            }
                            else {
                                _this.userService.updateUserAccessRight({ 'staff_key': _this.user['pub_key'], 'branchsAndunitsKeysUpdate': currentuser['accessright'].update, 'branchsAndunitsKeysDelete': currentuser['accessright'].delete }).subscribe(function (updateResult) {
                                    console.log("update", updateResult['data']);
                                    _this.updateUser(editedUser_5, true, updateResult['data']);
                                });
                            }
                        });
                    }
                }
                else {
                    var message = "No Change to Update";
                    _this.submited = false;
                    _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Create, 5000, true, true);
                }
            }).unsubscribe();
        }
    };
    /**
     * Returns prepared data for save
     */
    UserEditComponent.prototype.prepareUser = function () {
        var controls = this.userForm.controls;
        console.log('edit user', this.user);
        if (this.user) {
            this.user.username = controls['username'].value;
            this.user.email = controls['email'].value;
            this.user.name = controls['name'].value;
            this.user.phone = controls['phone'].value;
            return {
                email: this.user.email, username: this.user.username, name: this.user.name, phone: this.user.phone, pub_key: this.user['pub_key'],
            };
        }
    };
    ;
    /**
     * Add User
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.addUser = function (_user, withBack) {
        if (withBack === void 0) { withBack = false; }
        // this.store.dispatch(new UserOnServerCreated({ user: _user }));
        // const addSubscription = this.store.pipe(select(selectLastCreatedUserId)).subscribe(newId => {
        var message = "New user successfully has been added.";
        this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Create, 5000, true, true);
        if (withBack) {
            this.goBackWithId();
        }
        else {
            this.refreshUser(true);
        }
        // });
        // this.subscriptions.push(addSubscription);
    };
    /**
     * Update user
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.updateUser = function (_user, withBack, message) {
        // Update User
        // tslint:disable-next-line:prefer-const
        if (withBack === void 0) { withBack = false; }
        // const updatedUser: Update<User> = {
        // 	id: _user._userId,
        // 	changes: _user
        // };
        // this.store.dispatch(new UserUpdated( { partialUser: updatedUser, user: _user }));
        this.submited = false;
        this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update, 5000, true, true);
        if (withBack) {
            this.goBackWithId();
        }
        else {
            this.refreshUser(true);
        }
    };
    /**
     * Returns component title
     */
    UserEditComponent.prototype.getComponentTitle = function () {
        var result = "Edit user - " + this.user.name;
        var currentUser = JSON.parse(localStorage.getItem('user'));
        if (this.user_id == currentUser['_id']) {
            result = "My Profile ";
        }
        else if (this.activatedRoute.snapshot.queryParamMap.get('info')) {
            result = 'Club Information';
        }
        return result;
    };
    /**
     * Close Alert
     *
     * @param $event: Event
     */
    UserEditComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
        this.viewLoading = false;
        this.errormessage = '';
        this.errormessageUserRoles = '';
        this.ErrorAdress = '';
        this.SocialError = '';
    };
    UserEditComponent.prototype.preparSocialNetworkToShow = function () {
        if (this.user) {
            var SocialNetworks_1 = {
                linkedIn: this.user.linkedIn,
                facebook: this.user.facebook,
                twitter: this.user.twitter,
                instagram: this.user.instagram
            };
            this.user.socialNetworks = SocialNetworks_1;
            return SocialNetworks_1;
        }
        else
            return { linkedIn: '', twitter: '', instagram: '', facebook: '' };
    };
    UserEditComponent.prototype.preparAddressToShow = function () {
        if (this.user) {
            var Address_1 = {
                'addressLine': this.user.addressLine,
                'city': this.user.city,
                'state': this.user.state,
                'postCode': this.user.postCode
            };
            this.user.address = Address_1;
            return Address_1;
        }
        else
            return { 'addressLine': '', 'city': '', 'state': '', 'postCode': '' };
    };
    UserEditComponent.prototype.showToast = function (type, text) {
        // this.toaster.open({
        //   text: text,
        //   caption:'Edit user role',
        //   type: type,
        // });
    };
    UserEditComponent.prototype.checkedpermission = function (key) {
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
    UserEditComponent.prototype.updateBasicInfo = function (editedUser) {
        var _this = this;
        this.hasFormErrors = false;
        var controls = this.userForm.controls;
        /** check form */
        if (this.userForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        console.log(editedUser);
        this.userService.updateUserData(this.user._id, editedUser).subscribe(function (res) {
            if (res['result']) {
                console.log('userrr', _this.user);
                _this.updateUser(editedUser, true, "User successfully has been saved.");
                //this.showToast('secondary ','User successfully has been saved')
            }
            else {
                _this.updateUser(editedUser, false, "Sorry user hasnt been saved ,try again.");
                //this.showToast('secondary ','Sorry user hasnt been saved ,try again')
            }
            _this.selectedTab = 0;
            //this.userService.changeuser(null)
        });
    };
    UserEditComponent.prototype.handleUpload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.viewLoading = true;
            document.querySelector('#spinner').scrollIntoView({ behavior: 'smooth', block: 'center' });
            var reader = new FileReader();
            // reader.onload = (event: ProgressEvent) => {this.imageprivew = (<FileReader>event.target).result;}
            // reader.readAsDataURL(event.target.files[0]);
            this._ng2ImgMax.resizeImage(event.target.files[0], 100, 100).subscribe(function (result) {
                var newImage = new File([result], result.name);
                _this.uploader.clearQueue();
                _this.uploader.addToQueue([newImage]);
                //this.uploader.uploadAll();
                //console.log(result);
                reader.onload = function (event) {
                    _this.imageprivew = event.target.result;
                    _this.changeDetectorRefs.detectChanges();
                };
                reader.readAsDataURL(event.target.files[0]);
                _this.viewLoading = false;
            }, function (error) {
                _this.errormessage = error.reason;
                _this.changeDetectorRefs.detectChanges();
                console.log(error);
                document.querySelector('#alert').scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
        }
    };
    __decorate([
        core_1.ViewChild('input_image'),
        __metadata("design:type", core_1.ElementRef)
    ], UserEditComponent.prototype, "input_image", void 0);
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'kt-user-edit',
            template: __webpack_require__(/*! ./user-edit.component.html */ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            material_1.MatDialog,
            router_1.Router,
            forms_1.FormBuilder,
            layout_1.SubheaderService,
            crud_1.LayoutUtilsService,
            store_1.Store,
            layout_1.LayoutConfigService,
            _services_2.UserService,
            core_1.ChangeDetectorRef,
            ng2_img_max_1.Ng2ImgMaxService,
            _services_1.MembershipService])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/users/users-list/users-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/users-list/users-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"'Users list'\" [class]=\"'kt-portlet__head--lg'\">\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button [routerLink]=\"['/default/user-management/invitations']\" mat-raised-button color=\"primary\" matTooltip=\"send new invitation\">Invite\r\n\t\t\t\tuser</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\t<kt-portlet-body>\r\n\t\t\t<div class=\"kt-form\">\r\n\t\t\t\t<!-- start::FILTERS -->\r\n\t\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t\t<div class=\"row align-items-center\">\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterStatus\" (selectionChange)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"\">All</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Active\">Active</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Deactive\">Deactive</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\t<strong>Filter</strong> by Status\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterRole\" (selectionChange)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-option value=\"\">All</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let value of getallroles\"  [value]=\"value.type\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{value.type}}\r\n\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\t<strong>Filter</strong> by Type\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\r\n\t\t\t\t\t\t\t<div class=\"kt-form__control\">\r\n\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t\t<mat-select [(value)]=\"filterPrivilidge\" (selectionChange)=\"applyFilter()\" multiple>\r\n\t\t\t\t\t\t\t\t\t\t<mat-optgroup *ngFor=\"let group of allPrivilidge\" [label]=\"group.key\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let item of group.value\"  [value]=\"item.value\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t{{item.key}}\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-optgroup>\r\n\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t\t<strong>Filter</strong> by Permission\r\n\t\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t\t<input matInput placeholder=\"Search then Press Enter\" [(ngModel)]=\"SearchKey\" placeholder=\"Search\"\r\n\t\t\t\t\t\t\t\t\t(keyup.enter)=\"applyFilter()\">\r\n\t\t\t\t\t\t\t\t<button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\"\r\n\t\t\t\t\t\t\t\t\t(click)=\"onSearchClear()\">\r\n\t\t\t\t\t\t\t\t\t<mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end::FILTERS -->\r\n\r\n\r\n\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\">\r\n\t\t\t\t<!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }} -->\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (users-list.component.ts file) -->\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<!-- <button (click)=\"fetchUsers()\" mat-raised-button matTooltip=\"Fetch selected users\"\r\n\t\t\t\t\t\t\t\tclass=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t\t</button> -->\r\n\r\n\t\t\t\t\t\t\t<button (click)=\"activeallusers('Deactive')\" mat-raised-button matTooltip=\"Fetch selected users\"\r\n\t\t\t\t\t\t\t\tclass=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t\t\tDeactive\r\n\t\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t\t\t<button (click)=\"activeallusers('Active')\" mat-raised-button matTooltip=\"Fetch selected users\"\r\n\t\t\t\t\t\t\t\tclass=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t\t\t\t\tActive\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"listData\"\r\n\t\t\t\tmatSort\r\n\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t<!-- Checkbox Column -->\r\n\r\n\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t<ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\r\n\t\t\t\t\t\t\t[checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell (click)=\"applyFilter('id')\" *matHeaderCellDef mat-sort-header>#</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.increment}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"username\">\r\n\t\t\t\t\t<mat-header-cell (click)=\"applyFilter('username')\" *matHeaderCellDef mat-sort-header>Username</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.username}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"email\">\r\n\t\t\t\t\t<mat-header-cell (click)=\"applyFilter('email')\" *matHeaderCellDef mat-sort-header class=\"email-cell\">Email</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\" class=\"email-cell\">\r\n\t\t\t\t\t\t<a  class=\"kt-link\">{{user.email}}</a>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"fullname\">\r\n\t\t\t\t\t<mat-header-cell (click)=\"applyFilter('name')\" *matHeaderCellDef mat-sort-header >Full name</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"_roles\">\r\n\t\t\t\t\t<mat-header-cell (click)=\"applyFilter('role')\" *matHeaderCellDef mat-sort-header >Roles</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">\r\n\t\t\t\t\t\t<span>{{user.role}}</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let user\">\r\n\t\t\t\t\t\t<button *ngIf=\"checkedpermission('update')\" (click)=\"editUser(user)\" mat-icon-button color=\"primary\" matTooltip=\"Edit user\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button *ngIf=\"checkedpermission('del') && user.status=='Deactive'\" (click)=\"activateuser(user.pub_key,'Active')\" mat-icon-button color=\"primary\"  matTooltip=\"Activate User\">\r\n\t\t\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button *ngIf=\"checkedpermission('del') && user.status=='Active'\" mat-icon-button color=\"warn\" matTooltip=\"Deactive user\" type=\"button\" (click)=\"activateuser(user.pub_key,'Deactive')\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container matColumnDef=\"loading\">\r\n\t\t\t\t\t<mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n\t\t\t\t\t\tLoading...\r\n\t\t\t\t\t</mat-footer-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container matColumnDef=\"NoData\">\r\n\t\t\t\t\t<mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n\t\t\t\t\t\tNo Data\r\n\t\t\t\t\t</mat-footer-cell>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t<mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':listData!=null}\"></mat-footer-row>\r\n\t\t\t\t<mat-footer-row *matFooterRowDef=\"['NoData']\"  [ngClass]=\"{hide:checkedListData()}\">\r\n\t\t\t\t</mat-footer-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[2,10,25,100]\" [pageSize]=\"5\"></mat-paginator>\r\n\t\t</div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/users-list/users-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/users-list/users-list.component.ts ***!
  \**************************************************************************************/
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
// Material
var collections_1 = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// NGRX
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
// Services
var crud_1 = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
// Models
var auth_1 = __webpack_require__(/*! ../../../../../core/auth */ "./src/app/core/auth/index.ts");
var layout_1 = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var UsersListComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     * @param subheaderService: SubheaderService
     */
    function UsersListComponent(activatedRoute, store, router, layoutUtilsService, subheaderService, cdr, ser) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.ser = ser;
        this.displayedColumns = ['select', 'id', 'username', 'email', 'fullname', '_roles', 'actions'];
        // Selection
        this.selection = new collections_1.SelectionModel(true, []);
        this.usersResult = [];
        this.allRoles = [];
        this.SearchKey = '';
        this.filterStatus = '';
        this.filterRole = '';
        this.filterPrivilidge = '';
        this.order = -1;
        // Subscriptions
        this.subscriptions = [];
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UsersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getuser();
        this.getallroles = [];
        if (this.checkedpermissions('getprivilidgestype')) {
            this.getallrole();
        }
        // load roles list
        var rolesSubscription = this.store.pipe(store_1.select(auth_1.selectAllRoles)).subscribe(function (res) { return _this.allRoles = res; });
        this.subscriptions.push(rolesSubscription);
        // Set title to page breadCrumbs
        this.subheaderService.setTitle('User management');
    };
    UsersListComponent.prototype.checkedpermissions = function (key) {
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
    /**
     * On Destroy
     */
    UsersListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    /** FILTRATION */
    UsersListComponent.prototype.filterConfiguration = function () {
        var filter = {};
        var searchText = this.searchInput.nativeElement.value;
        filter.lastName = searchText;
        filter.username = searchText;
        filter.email = searchText;
        filter.fillname = searchText;
        return filter;
    };
    /** ACTIONS */
    /**
     * Delete user
     *
     * @param _item: User
     */
    UsersListComponent.prototype.deleteUser = function (_item) {
        var _this = this;
        var _title = 'User Delete';
        var _description = 'Are you sure to permanently delete this user?';
        var _waitDesciption = 'User is deleting...';
        var _deleteMessage = "User has been deleted";
        var _failedToDelete = "sorry there is problem to delete this user try again";
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.ser.deleteUser(_item['pub_key']).subscribe(function (res) {
                if (res['result']) {
                    _this.listData.data.slice(_this.listData.data.indexOf(_item), 1);
                    _this.getuser();
                    _this.store.dispatch(new auth_1.UserDeleted({ id: _item['_id'] }));
                    _this.layoutUtilsService.showActionNotification(_deleteMessage, crud_1.MessageType.Delete);
                }
                else {
                    _this.layoutUtilsService.showActionNotification(_failedToDelete, crud_1.MessageType.Delete);
                }
            });
        });
    };
    UsersListComponent.prototype.activateuser = function (id, status) {
        var _this = this;
        var _title = 'User Delete';
        var _description = 'Are you sure to permanently delete this user?';
        var _waitDesciption = 'User is deleting...';
        var dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        dialogRef.afterClosed().subscribe(function (res) {
            if (!res) {
                return;
            }
            if (status == 'Active')
                var message = 'User Activated Successfully';
            else
                var message = 'User DeActivated Successfully';
            var ids = new Array();
            ids.push(id);
            _this.ser.activateuser(ids, status).subscribe(function (result) {
                if (_this.router.url == '/default/user-management/users')
                    _this.router.navigateByUrl("/default/user-management/user");
                else
                    _this.router.navigateByUrl("/default/user-management/users");
                setTimeout(function () {
                    _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update);
                }, 1000);
            });
        });
    };
    /**
     * Fetch selected rows
     */
    UsersListComponent.prototype.fetchUsers = function () {
        var messages = [];
        this.selection.selected.forEach(function (elem) {
            messages.push({
                text: elem.name + ", " + elem.email,
                type: "" + elem['type'].toString(),
                status: elem.username
            });
            //this.ser.getUserPriviliges().forEach(item=>{console.log(item,elem['havePrivilidge'])})
        });
        this.layoutUtilsService.fetchElements(messages);
    };
    UsersListComponent.prototype.activeallusers = function (status) {
        var _this = this;
        var ids = [];
        this.selection.selected.forEach(function (elem) {
            ids.push(elem['pub_key']);
        });
        console.log(ids);
        if (status == 'Active')
            var message = 'User Activated Successfully';
        else
            var message = 'User DeActivated Successfully';
        this.ser.activateuser(ids, status).subscribe(function (res) {
            if (_this.router.url == '/default/user-management/users')
                _this.router.navigateByUrl("/default/user-management/user");
            else
                _this.router.navigateByUrl("/default/user-management/users");
            setTimeout(function () {
                _this.layoutUtilsService.showActionNotification(message, crud_1.MessageType.Update);
            }, 1000);
        });
    };
    /**
     * Check all rows are selected
     */
    UsersListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.usersResult.length;
        return numSelected === numRows;
    };
    /**
     * Toggle selection
     */
    UsersListComponent.prototype.masterToggle = function () {
        var _this = this;
        if (this.selection.selected.length === this.usersResult.length) {
            this.selection.clear();
        }
        else {
            this.usersResult.forEach(function (row) { return _this.selection.select(row); });
        }
    };
    /* UI */
    /**
     * Returns user roles string
     *
     * @param user: User
     */
    UsersListComponent.prototype.getUserRolesStr = function (user) {
        var titles = [];
        if (user['havePrivilidge']) {
            //this.ser.getUserPriviliges().forEach(item=>{console.log(item),user['havePrivilidge']})
            return;
        }
    };
    UsersListComponent.prototype.editUser = function (_item) {
        this.ser.changeuser(_item);
        this.router.navigate(['/default/user-management/users', _item._id, 'edit', _item._id]);
    };
    UsersListComponent.prototype.onSearchClear = function () {
        this.SearchKey = "";
        this.applyFilter();
    };
    /*
    *
    *
    */
    //method to  search online
    UsersListComponent.prototype.applyFilter = function (orderby) {
        if (orderby === void 0) { orderby = ''; }
        if (this.SearchKey && this.SearchKey.length > 0)
            var search = this.SearchKey.trim().toLowerCase();
        else
            var search = '';
        if (this.filterStatus && this.filterStatus.length > 0)
            var status = this.filterStatus;
        else
            status = '';
        if (this.filterRole && this.filterRole.length > 0)
            var role = this.filterRole;
        else
            role = '';
        if (this.filterPrivilidge && this.filterPrivilidge.length > 0)
            var privilidge = this.filterPrivilidge;
        else
            privilidge = '';
        if (orderby != '') {
            if (this.order == -1)
                this.order = 1;
            else if (this.order == 1)
                this.order = -1;
        }
        this.getuser(null, null, search, status, role, privilidge, orderby, this.order);
    };
    /*
    *
    *
    */
    UsersListComponent.prototype.nextPage = function (event) {
        //console.log(event)
        this.getuser(event.pageIndex + 1, event.pageSize, null);
    };
    /*
    *
    *
    */
    UsersListComponent.prototype.getuser = function (pages, prepage, search, status, role, privilidge, orderby, order) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (prepage === void 0) { prepage = 30; }
        if (search === void 0) { search = null; }
        if (status === void 0) { status = ''; }
        if (role === void 0) { role = ''; }
        if (privilidge === void 0) { privilidge = ''; }
        if (orderby === void 0) { orderby = ''; }
        if (order === void 0) { order = -1; }
        if (this.checkedpermissions('getallusers')) {
            this.ser.getallusers(pages, prepage, search, status, role, privilidge, orderby, order).subscribe(function (res) {
                //console.log(res)
                _this.listData = new material_1.MatTableDataSource(res['users']);
                //this.listData.sort=this.sort
                _this.listData.paginator = _this.paginator;
                _this.cdr.detectChanges();
            });
        }
    };
    /*
    *
    *
    */
    UsersListComponent.prototype.getallrole = function () {
        var _this = this;
        this.ser.getallrole().subscribe(function (res) {
            //console.log(res)
            _this.getallroles = res['result'];
        });
        var privilidge = JSON.parse(localStorage.getItem('user'))['allPrivilidge'];
        var result = [];
        Object.keys(privilidge).forEach(function (key) {
            var items = new Array();
            Object.keys(privilidge[key]).forEach(function (item) {
                items.push({ key: item, value: privilidge[key][item] });
            });
            result.push({ key: key, value: items });
        });
        console.log(result);
        this.allPrivilidge = result;
    };
    //check if listdata has data to show
    UsersListComponent.prototype.checkedListData = function () {
        if (this.listData) {
            if (this.listData.data) {
                return true;
            }
            else
                false;
        }
        else
            false;
    };
    UsersListComponent.prototype.checkedpermission = function (key) {
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']) {
                if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Users Mangement']) {
                    if (key == 'del') {
                        if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Users Mangement']['Delete user'])
                            return true;
                    }
                    else if (key == 'update') {
                        if (JSON.parse(localStorage.getItem('user'))['allPrivilidge']['Users Mangement']['Update User'])
                            return true;
                    }
                }
            }
        }
        return false;
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], UsersListComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], UsersListComponent.prototype, "searchInput", void 0);
    UsersListComponent = __decorate([
        core_1.Component({
            selector: 'kt-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/views/pages/user-management/users/users-list/users-list.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: [__webpack_require__(/*! ../../usser.management.scss */ "./src/app/views/pages/user-management/usser.management.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_1.Store,
            router_1.Router,
            crud_1.LayoutUtilsService,
            layout_1.SubheaderService,
            core_1.ChangeDetectorRef,
            _services_1.UserService])
    ], UsersListComponent);
    return UsersListComponent;
}());
exports.UsersListComponent = UsersListComponent;


/***/ }),

/***/ "./src/app/views/pages/user-management/usser.management.scss":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/user-management/usser.management.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none; }\n\nmat-footer-row mat-footer-cell {\n  justify-content: center; }\n\n.mat-dialog-actions[align='end'] {\n  justify-content: flex-end; }\n\n.mat-dialog-actions[align='center'] {\n  justify-content: center; }\n\n.mat-list-content {\n  font-size: 10px; }\n\n.mat-column-username {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 25% !important;\n  width: 25% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-createdat, .mat-column-joindat, .mat-column-status, .mat-column-admin {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 13% !important;\n  width: 13% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-id {\n  flex: 0 0 5% !important;\n  width: 5% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L0U6XFxHRU1JTlxcZ3ltaW4tMi4wLXNhYXMtZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcdXNlci1tYW5hZ2VtZW50XFx1c3Nlci5tYW5hZ2VtZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUNKLEVBQUE7O0FBQ0E7RUFDQSx1QkFBdUIsRUFBQTs7QUFHdkI7RUFHTSx5QkFBeUIsRUFBQTs7QUFIL0I7RUFPTSx1QkFBdUIsRUFBQTs7QUFJM0I7RUFFRSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUVmO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9CQUFvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3Vzc2VyLm1hbmFnZW1lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcbm1hdC1mb290ZXItcm93ICBtYXQtZm9vdGVyLWNlbGx7XHJcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICBcclxuICAgICZbYWxpZ249J2VuZCddIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICBcclxuICAgICZbYWxpZ249J2NlbnRlciddIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LWxpc3QtY29udGVudHtcclxuICAgXHJcbiAgICBmb250LXNpemU6IDEwcHg7ICAgXHJcbn1cclxuXHJcblxyXG4ubWF0LWNvbHVtbi11c2VybmFtZSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDI1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG4ubWF0LWNvbHVtbi1jcmVhdGVkYXQsLm1hdC1jb2x1bW4tam9pbmRhdCAsIC5tYXQtY29sdW1uLXN0YXR1cyAsLm1hdC1jb2x1bW4tYWRtaW4ge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxMyUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTMlICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAtbXMtaHlwaGVuczogYXV0bztcclxuICAtbW96LWh5cGhlbnM6IGF1dG87XHJcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG4gIGh5cGhlbnM6IGF1dG87XHJcbn1cclxuLm1hdC1jb2x1bW4taWQge1xyXG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ })

}]);
//# sourceMappingURL=app-views-pages-user-management-user-management-module.js.map