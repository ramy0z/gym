(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-views-pages-billing-billing-module~app-views-themes-default-theme-module"],{

/***/ "./src/app/views/pages/billing/billing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/pages/billing/billing.module.ts ***!
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var billing_component_1 = __webpack_require__(/*! ./billing/billing.component */ "./src/app/views/pages/billing/billing/billing.component.ts");
var view_billing_component_1 = __webpack_require__(/*! ./view-billing/view-billing.component */ "./src/app/views/pages/billing/view-billing/view-billing.component.ts");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = __decorate([
        core_1.NgModule({
            declarations: [billing_component_1.BillingComponent, view_billing_component_1.ViewBillingComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: billing_component_1.BillingComponent
                    },
                ]),
                partials_module_1.PartialsModule,
                material_1.MatInputModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatSelectModule,
                material_1.MatMenuModule,
                material_1.MatProgressBarModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_1.MatDialogModule,
                material_1.MatTabsModule,
                material_1.MatNativeDateModule,
                material_1.MatCardModule,
                material_1.MatRadioModule,
                material_1.MatIconModule,
                material_1.MatDatepickerModule,
                material_1.MatExpansionModule,
                material_1.MatTreeModule,
                material_1.MatAutocompleteModule,
                material_1.MatSnackBarModule,
                material_1.MatTooltipModule
            ],
            entryComponents: [
                view_billing_component_1.ViewBillingComponent
            ],
            providers: [,
                {
                    provide: material_1.MAT_DIALOG_DEFAULT_OPTIONS,
                    useValue: {
                        hasBackdrop: true,
                        panelClass: 'kt-mat-dialog-container__wrapper',
                        height: 'auto',
                        width: '900px'
                    }
                },
            ]
        })
    ], BillingModule);
    return BillingModule;
}());
exports.BillingModule = BillingModule;


/***/ }),

/***/ "./src/app/views/pages/billing/billing/billing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/billing/billing/billing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n  <!-- See prop => '../../_core/models/data-sources/_base.datasource.ts' (loading$) -->\r\n  <kt-portlet-header [class]=\"'kt-portlet__head--lg'\">\r\n    <!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\r\n    <ng-container ktPortletTitle>\r\n      <h3 class=\"kt-portlet__head-title\">\r\n        <span>Billing list</span>\r\n      </h3>\r\n      <!-- For localisations we use @ngx-translate | See off. documentations => https://github.com/ngx-translate/core -->\r\n      <!-- Localization libraries (en/fr) are here => '../../../.././config/i18n/en.ts|fr.ts' -->\r\n    </ng-container>\r\n  </kt-portlet-header>\r\n  <!-- end::Header -->\r\n\r\n  <kt-portlet-body>\r\n    <!-- start::FILTERS & GROUP ACTIONS -->\r\n    <div class=\"kt-form kt-margin-b-30\">\r\n      <!-- start::FILTERS -->\r\n      <div class=\"kt-form__filtration\">\r\n        <form [formGroup]=\"billingForm\">\r\n          <div class=\"row align-items-center\">\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n              <!-- 'm  margin-bottom-10-mobile' for adaptive make-up  -->\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <input matInput [matDatepicker]=\"picker\" #start formControlName=\"start\"\r\n                    placeholder=\"Choose start date\" id=\"start\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker>\r\n                  <mat-error>Insert\r\n                    <strong>valid date</strong>\r\n                  </mat-error>\r\n                  <mat-hint align=\"start\">Please enter\r\n                    <strong>invoice start-date</strong>\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n              <div class=\"kt-form__control\">\r\n                <mat-form-field class=\"mat-form-field-fluid\">\r\n                  <input matInput [matDatepicker]=\"picker2\" #end placeholder=\"Choose start date\" formControlName=\"end\">\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker2></mat-datepicker>\r\n                  <mat-error>Insert\r\n                    <strong>valid date</strong>\r\n                  </mat-error>\r\n                  <mat-hint align=\"start\">Please enter\r\n                    <strong>invoice end-date</strong>\r\n                  </mat-hint>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-2 kt-margin-bottom-10-mobile\">\r\n\r\n              <div class=\"kt-form__control\">\r\n                <button (click)=\"findBilling(start.value,end.value)\" mat-raised-button matTooltip=\"Find your billing\"\r\n                  color=\"primary\" type=\"button\">\r\n                  <span>Find billing</span>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <!-- end::FILTERS -->\r\n\r\n    <!-- start::GROUP ACTIONS -->\r\n    <!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n    <!-- Group actions are shared for all LISTS | See '../../_shared' folder -->\r\n    <!-- end::GROUP ACTIONS -->\r\n\r\n    <!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n    <!-- MATERIAL TABLE | Binded to datasources -->\r\n    <!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n    <div class=\"mat-table__wrapper\">\r\n      <mat-table class=\"lmat-elevation-z8\" #table [dataSource]=\"dataSource\" matSort #sort1=\"matSort\" matSortActive=\"id\"\r\n        matSortDirection=\"asc\" matSortDisableClear>\r\n        <!-- Checkbox Column -->\r\n\r\n        <!-- Table with selection -->\r\n        <!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\r\n        <ng-container matColumnDef=\"ClubName\">\r\n          <!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Club Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let billing\">{{clubName}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"PackageName\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Package Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let billing\">{{billing.package_title}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"StartDate\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Start Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let billing\">{{billing.start_date | date: 'dd/MM/yyyy'}}</mat-cell>\r\n        </ng-container>\r\n\r\n\r\n\r\n        <ng-container matColumnDef=\"EndDate\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>End Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let billing\">{{billing.end_date | date: 'dd/MM/yyyy'}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"status\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Status</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let billing\">\r\n            <span *ngIf=\"billing.payment_status\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">{{billing.payment_status}}</span> \r\n            <span *ngIf=\"!billing.payment_status\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--danger kt-badge--wide\">Pending</span>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"Discount\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Discount</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let billing\">{{billing.discount}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actions\">\r\n          <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let billing\">\r\n\r\n            <button mat-icon-button color=\"primary\" matTooltip=\"View billing\" (click)=\"viewBilling(billing)\">\r\n              <mat-icon>visibility</mat-icon>\r\n            </button>&nbsp;\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n      </mat-table>\r\n      <!-- Message for empty data  -->\r\n      <div class=\"mat-table__message\" *ngIf=\"!dataSource && !NoDataMessage\">Enter Start_date and End_date to get your\r\n        invoice</div>\r\n      <div class=\"mat-table__message\" style=\"color:red\" *ngIf=\"NoDataMessage\">{{NoDataMessage}}</div>\r\n    </div>\r\n\r\n    <!-- start: BOTTOM -->\r\n    <!-- end: BOTTOM -->\r\n  </kt-portlet-body>\r\n  <!-- end::Body -->\r\n\r\n</kt-portlet>"

/***/ }),

/***/ "./src/app/views/pages/billing/billing/billing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/billing/billing/billing.component.ts ***!
  \******************************************************************/
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
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var view_billing_component_1 = __webpack_require__(/*! ../view-billing/view-billing.component */ "./src/app/views/pages/billing/view-billing/view-billing.component.ts");
var billing_service_1 = __webpack_require__(/*! ../../../../core/auth/_services/billing.service */ "./src/app/core/auth/_services/billing.service.ts");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var BillingComponent = /** @class */ (function () {
    function BillingComponent(billingService, dialog, changeDetectorRefs, fb) {
        this.billingService = billingService;
        this.dialog = dialog;
        this.changeDetectorRefs = changeDetectorRefs;
        this.fb = fb;
        this.filterStatus = '';
        this.displayedColumns = ['ClubName', 'PackageName', 'StartDate', 'EndDate', 'Discount', 'status', 'actions'];
        this.hasFormErrors = false;
        this.viewLoading = false;
    }
    BillingComponent.prototype.ngOnInit = function () {
        var now = new Date();
        var monthAgo = new Date();
        monthAgo.setMonth(now.getMonth() - 1);
        this.billingForm = this.fb.group({
            start: [monthAgo, [forms_1.Validators.required]],
            end: [now, [forms_1.Validators.required]],
        });
    };
    BillingComponent.prototype.findBilling = function (start_date, end_date) {
        var _this = this;
        var controls = this.billingForm.controls;
        if (this.billingForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            return;
        }
        var d = new Date(start_date);
        start_date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        var d2 = new Date(end_date);
        end_date = d2.getFullYear() + "-" + (d2.getMonth() + 1) + "-" + d2.getDate();
        this.club_id = JSON.parse(localStorage.getItem('user'))['pub_key'];
        this.billingService.getBilling(start_date, end_date, this.club_id).subscribe(function (res) {
            var result = res['result'];
            var data = res['data'][0];
            if (result == true && typeof data != "undefined") {
                _this.NoDataMessage = " ";
                _this.clubName = JSON.parse(localStorage.getItem('user'))['name'];
                _this.billing = res['data'][0];
                _this.dataSource = [_this.billing];
                console.log(_this.dataSource);
                console.log(result);
                console.log('data');
                _this.changeDetectorRefs.detectChanges();
            }
            else if (result == true && typeof data == "undefined") {
                _this.clubName = '';
                _this.dataSource = '';
                _this.NoDataMessage = "There is no invoice for this date";
                _this.changeDetectorRefs.detectChanges();
                console.log('no data', _this.NoDataMessage);
            }
            else if (result == false) {
                _this.clubName = '';
                _this.dataSource = '';
                _this.NoDataMessage = "Insert valid date to show the invoice";
                _this.changeDetectorRefs.detectChanges();
                console.log('no data', _this.NoDataMessage);
            }
            console.log(res);
        });
    };
    BillingComponent.prototype.viewBilling = function (billing) {
        var dialogRef = this.dialog.open(view_billing_component_1.ViewBillingComponent, {
            width: '80%',
            height: '80%',
            data: { 'billing': billing, 'clubName': this.clubName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    BillingComponent = __decorate([
        core_1.Component({
            selector: 'kt-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/views/pages/billing/billing/billing.component.html"),
        }),
        __metadata("design:paramtypes", [billing_service_1.BillingService, dialog_1.MatDialog, core_1.ChangeDetectorRef, forms_1.FormBuilder])
    ], BillingComponent);
    return BillingComponent;
}());
exports.BillingComponent = BillingComponent;


/***/ }),

/***/ "./src/app/views/pages/billing/view-billing/view-billing.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/billing/view-billing/view-billing.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <button class=\"btn btn-success\" (click)=\"print()\">Print invoice</button>\r\n</div>\r\n<div class=\"container\" id=\"billingFile\" #billingFile>\r\n    <div class=\"row\">\r\n        <div class=\"col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body p-0\">\r\n                    <div class=\"row p-5\" style=\"margin:15px;height: 75px;\">\r\n                        <div class=\"col-md-6\" >\r\n                            <img src=\"./assets/media/logos/logo.png\" width=\"120px\" height=\"50px\">\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <p class=\"font-weight-bold mb-1\">{{clubName}} invoice</p>\r\n                            <p class=\"text-muted\"> Date :\r\n                                {{billing.createdat| date: 'dd/MM/yyyy'}}</p>\r\n                        </div>\r\n                        <p class=\"alert alert-danger\" style=\"margin:10px;\" *ngIf=\"!billing.payment_status\">Your balance is now past due , please pay now <b>{{payment}} EGP</b></p>\r\n                    </div>\r\n                    \r\n\r\n                    <hr class=\"my-5\">\r\n                    \r\n        \r\n                    <!-- <div class=\"row pb-5 p-5\">\r\n                        <div class=\"col-md-6\">\r\n                            <p class=\"font-weight-bold mb-4\">Client Information</p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">CLUB: </span>{{clubName}}</p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">Package Title : </span>{{billing.package_title}}\r\n                            </p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">Package Description:\r\n                                </span>{{billing.package_description}}</p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">Pay Percentage : </span>{{billing.pay_percentage}}\r\n                            </p>\r\n                        </div>\r\n\r\n                        <div class=\"col-md-6 text-right\">\r\n                            <p class=\"font-weight-bold mb-4\">Payment Details</p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">FROM: </span>\r\n                                {{billing.start_date | date: 'dd/MM/yyyy'}}</p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">TO: </span>\r\n                                {{billing.start_date | date: 'dd/MM/yyyy'}}</p>\r\n                            <p class=\"mb-1\" *ngIf=\"paymentStatus\"><span class=\"text-muted\">Payment_Status : </span>\r\n                                <b>Pending</b></p>\r\n                            <p class=\"mb-1\" *ngIf=\"!paymentStatus\"><span class=\"text-muted\">Payment_Status : </span>\r\n                                Paid</p>\r\n                            <p class=\"mb-1\" *ngIf=\"!paymentStatus\"><span class=\"text-muted\">Billing Method : </span>\r\n                                {{billing.billing_method}}</p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">Trans_Max_Num : </span>{{billing.trans_max_num}}\r\n                            </p>\r\n                            <p class=\"mb-1\"><span class=\"text-muted\">Trans_Amount : </span>{{billing.trans_amount}}</p>\r\n                        </div>\r\n                    </div> -->\r\n                   \r\n                    <div class=\"row p-5\">\r\n                        <div class=\"col-md-12\">\r\n                            <table class=\"table\" style=\"border:none\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"border-0  small font-weight-bold\">Package Information\r\n                                        </th>\r\n                                        <th class=\"border-0 small font-weight-bold\">Transaction\r\n                                            Information</th>\r\n                                        <th class=\"border-0  small font-weight-bold\">Payment Details</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <p class=\"mb-1\"><span class=\"text-muted\">CLUB-NAME: </span>{{clubName}}</p>\r\n                                        </td>\r\n                                        <td>\r\n                                            <p class=\"mb-1\"><span class=\"text-muted\">Transaction_Max_Num :\r\n                                                </span>{{billing.trans_max_num}}\r\n                                            </p>\r\n                                        </td>\r\n                                        <td>\r\n                                            <p class=\"mb-1\"><span class=\"text-muted\">FROM: </span>\r\n                                                {{billing.start_date | date: 'dd/MM/yyyy'}}</p>\r\n                                        </td>\r\n                                    </tr>\r\n\r\n                                    <tr>\r\n                                        <td>\r\n                                            <p class=\"mb-1\"><span class=\"text-muted\">Package Title :\r\n                                                </span>{{billing.package_title}}\r\n                                            </p>\r\n                                        </td>\r\n                                        <td>\r\n                                            <p class=\"mb-1\"><span class=\"text-muted\">Transaction_Amount :\r\n                                                </span>{{billing.trans_amount}}</p>\r\n                                        </td>\r\n                                        <td>\r\n                                            <p class=\"mb-1\"><span class=\"text-muted\">TO: </span>\r\n                                                {{billing.start_date | date: 'dd/MM/yyyy'}}</p>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>\r\n                                            <p class=\"mb-1\"><span class=\"text-muted\">Package Description:\r\n                                                </span>{{billing.package_description}}</p>\r\n                                        </td>\r\n                                        <td><p class=\"mb-1\"><span class=\"text-muted\">Pay Percentage : </span>{{billing.pay_percentage}}%\r\n                                        </p></td>\r\n                                        <td>\r\n                                            <p class=\"mb-1\" *ngIf=\"!billing.payment_status\"><span\r\n                                                    class=\"text-muted\">Payment_Status : </span>\r\n                                                <b>Pending</b></p>\r\n                                            <p class=\"mb-1\" *ngIf=\"billing.payment_status\"><span\r\n                                                    class=\"text-muted\">Payment_Status : </span>\r\n                                                    <b>{{billing.payment_status}}</b></p>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row p-5\">\r\n                        <div class=\"col-md-12\">\r\n                            <table class=\"table\">\r\n                                <thead>\r\n                                    <tr>\r\n                                        <th class=\"border-0 text-uppercase small font-weight-bold\">TRANSACTION</th>\r\n                                        <th class=\"border-0 text-uppercase small font-weight-bold\">CLUBNAME</th>\r\n                                        <th class=\"border-0 text-uppercase small font-weight-bold\">BRANCHNAME</th>\r\n                                        <th class=\"border-0 text-uppercase small font-weight-bold\">WEIGHT</th>\r\n                                        <th class=\"border-0 text-uppercase small font-weight-bold\">TRANSaction-Number</th>\r\n                                        <th class=\"border-0 text-uppercase small font-weight-bold\">REVENEU</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody *ngFor=\"let billingDetail of billingDetails\">\r\n                                    <tr>\r\n                                        <td>{{billingDetail.transaction}}</td>\r\n                                        <td>{{clubName}}</td>\r\n                                        <td>{{branchName}}</td>\r\n                                        <td>{{billingDetail.weight}}</td>\r\n                                        <td>{{billingDetail.tTrans}}</td>\r\n                                        <td>{{billingDetail.tRevneu}}</td>\r\n                                    </tr>\r\n                                </tbody>\r\n                                <tr>\r\n                                    <td colspan=\"4\"><b>Total:</b></td>\r\n                                    <td><b>{{totalTransaction}}</b></td>\r\n                                    <td style=\"font-size:16px\"><b>{{TotalRevneu}} EGP</b></td>\r\n                                </tr>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"d-flex flex-row-reverse text-white p-4\" style=\"background-color:#979797\">\r\n                        <div class=\"py-3 px-5 text-right\">\r\n                            <div class=\"mb-2\">Grand Total</div>\r\n                            <div style=\"font-size:16px\">{{payment}} EGP</div>\r\n                        </div>\r\n\r\n                        <div class=\"py-3 px-5 text-right\">\r\n                            <div class=\"mb-2\">Discount</div>\r\n                            <div style=\"font-size:16px\">{{billing.discount}}%</div>\r\n                        </div>\r\n\r\n                        <div class=\"py-3 px-5 text-right\">\r\n                            <div class=\"mb-2\">Sub - Total amount</div>\r\n                            <div style=\"font-size:16px\">{{billing.sub_total}} EGP</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/billing/view-billing/view-billing.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/billing/view-billing/view-billing.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  background: grey;\n  margin-top: 120px;\n  margin-bottom: 120px; }\n\nbutton {\n  margin: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvYmlsbGluZy92aWV3LWJpbGxpbmcvRTpcXEdFTUlOXFxneW1pbi0yLjAtc2Fhcy1mcm9udGVuZC9zcmNcXGFwcFxcdmlld3NcXHBhZ2VzXFxiaWxsaW5nXFx2aWV3LWJpbGxpbmdcXHZpZXctYmlsbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBRXhCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYmlsbGluZy92aWV3LWJpbGxpbmcvdmlldy1iaWxsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/billing/view-billing/view-billing.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/billing/view-billing/view-billing.component.ts ***!
  \****************************************************************************/
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
var billing_service_1 = __webpack_require__(/*! ../../../../core/auth/_services/billing.service */ "./src/app/core/auth/_services/billing.service.ts");
var _user_service_1 = __webpack_require__(/*! ../../../../core/auth/_services/-user.service */ "./src/app/core/auth/_services/-user.service.ts");
var ViewBillingComponent = /** @class */ (function () {
    function ViewBillingComponent(dialogRef, data, billingService, userService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.billingService = billingService;
        this.userService = userService;
        this.TotalRevneu = 0;
        this.club_id = JSON.parse(localStorage.getItem('user'))['pub_key'];
        this.totalTransaction = 0;
    }
    ViewBillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billing = this.data.billing;
        this.clubName = this.data.clubName;
        var start_date = this.billing.start_date;
        var end_date = this.billing.end_date;
        var d = new Date(start_date);
        start_date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
        var d2 = new Date(end_date);
        end_date = d2.getFullYear() + "-" + (d2.getMonth() + 1) + "-" + d2.getDate();
        this.billingService.getBillingDetails(start_date, end_date, this.club_id)
            .subscribe(function (res) {
            _this.billingDetails = res;
            for (var i = 0; i < _this.billingDetails.length; i++) {
                if (_this.billingDetails[i].calc == 0) {
                    _this.billingDetails[i].tRevneu = 0;
                    _this.billingDetails[i].tTrans = 0;
                }
                _this.TotalRevneu = _this.TotalRevneu + _this.billingDetails[i].tRevneu;
                _this.totalTransaction = _this.totalTransaction + _this.billingDetails[i].tTrans;
                // this.userService.getUserbyId(this.billingDetails[i].branch).subscribe(res=>{
                //      this.branch=res[i];
                //      this.branchName=this.branch.username
                // })
            }
            _this.payment = Math.round((_this.billing.sub_total - (_this.billing.sub_total * _this.billing.discount / 100)));
        });
    };
    ViewBillingComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('billingFile').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Gymin Invoice</title>\n          <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n          <style>\n          body {\n            background: grey;\n            margin-top: 30px;\n            margin-bottom: 30px;\n        }\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    __decorate([
        core_1.ViewChild('billingFile'),
        __metadata("design:type", core_1.ElementRef)
    ], ViewBillingComponent.prototype, "billingFile", void 0);
    ViewBillingComponent = __decorate([
        core_1.Component({
            selector: 'kt-view-billing',
            template: __webpack_require__(/*! ./view-billing.component.html */ "./src/app/views/pages/billing/view-billing/view-billing.component.html"),
            styles: [__webpack_require__(/*! ./view-billing.component.scss */ "./src/app/views/pages/billing/view-billing/view-billing.component.scss")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, billing_service_1.BillingService,
            _user_service_1.UserService])
    ], ViewBillingComponent);
    return ViewBillingComponent;
}());
exports.ViewBillingComponent = ViewBillingComponent;


/***/ })

}]);
//# sourceMappingURL=default~app-views-pages-billing-billing-module~app-views-themes-default-theme-module.js.map