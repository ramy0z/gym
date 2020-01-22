(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-membership-membership-module"],{

/***/ "./src/app/views/pages/membership/activities/activities-edit/activities-edit.dialog.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/pages/membership/activities/activities-edit/activities-edit.dialog.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\"\r\n    [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : viewLoading }\">\r\n    <div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{ getTitle() }}</h3>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"kt-form\">\r\n            <mat-tab-group [(selectedIndex)]=\"selectedTab\">\r\n                <mat-tab>\r\n                    <ng-template mat-tab-label>\r\n                        <i class=\"mat-tab-label-icon fa fa-address-book\"></i>\r\n                        General Data\r\n                    </ng-template>\r\n                    <ng-template matTabContent>\r\n\r\n                        <div class=\"kt-portlet__body\">\r\n                            <div class=\"kt-portlet__body-progress\" *ngIf=\"viewLoading\">\r\n                                <mat-spinner [diameter]=\"40\"></mat-spinner>\r\n                            </div>\r\n                            <div #alert id=\"alert\">\r\n                                <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\"\r\n                                    (close)=\"onAlertClose($event)\">\r\n                                    {{errormessage}}\r\n                                </kt-alert>\r\n                            </div>\r\n\r\n                            <div class=\"form-group kt-form__group GroupFormCls\">\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                                    <div>Branch Information</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div *ngIf=\"allbranch.length >0\" class=\"col-sm-6 col-md-6 col-lg-6 box\">\r\n                                        <mat-form-field>\r\n                                            <mat-label> All Branchs :</mat-label>\r\n                                            <mat-select [(ngModel)]=\"activity.branch_key\"\r\n                                                class=\"btn-group bootstrap-select bs-select\">\r\n                                                <mat-option *ngFor=\"let value of allbranch\"\r\n                                                    (click)=\"branchOnchange(value.pub_key)\" [value]=\"value.pub_key\">\r\n                                                    {{value.name}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div *ngIf=\"allunits.length >0\" class=\"col-sm-6 col-md-6 col-lg-6 box\">\r\n                                        <mat-form-field>\r\n                                            <mat-label> All Unite :</mat-label>\r\n                                            <mat-select [(ngModel)]=\"activity.units_key\"\r\n                                                class=\"btn-group bootstrap-select bs-select\">\r\n                                                <mat-option *ngFor=\"let value of allunits\" [value]=\"value.pub_key\">\r\n                                                    {{value.name}}\r\n                                                </mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group kt-form__group GroupFormCls\">\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                                    <div>Activity Basic Information</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput placeholder=\"title\" [(ngModel)]=\"activity.title\"\r\n                                                #title=\"ngModel\" placeholder=\"title\" name=\"title\" required\r\n                                                pattern=\"[^+!@^#$%),(&.`=_]*\" />\r\n                                            <mat-error *ngIf=\"title.touched&&!title.valid&&title.errors?.required\">title is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error *ngIf=\"title.touched&&!title.valid&&title.errors?.pattern\">Please\r\n                                                enter\r\n                                                <strong>valid title</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>title</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                                        <mat-form-field style=\"width: 100%;\">\r\n                                            <mat-label> Type * </mat-label>\r\n                                            <mat-select [(ngModel)]=\"activity.type\" #type=\"ngModel\" name=\"type\"\r\n                                                requiredclass=\"btn-group bootstrap-select bs-select\">\r\n                                                <mat-option ng-reflect-value=\"general\" value=\"general\">General</mat-option>\r\n                                                <mat-option ng-reflect-value=\"private\" value=\"private\">Private</mat-option>\r\n                                            </mat-select>\r\n                                            <mat-error *ngIf=\"type.touched&&!type.valid&&type.errors?.required\">Please enter\r\n                                                <strong>type</strong>\r\n                                            </mat-error>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-2 col-md-2 col-lg-2 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput type=\"number\" placeholder=\"Session time\"\r\n                                                [(ngModel)]=\"activity.session_time\" #session_time=\"ngModel\"\r\n                                                name=\"session_time\" required [min]=\"1\" />\r\n                                            <!-- <mat-icon matSuffix>Min</mat-icon> -->\r\n                                            <mat-error\r\n                                                *ngIf=\"session_time.touched&&!session_time.valid&&session_time.errors?.required\">\r\n                                                Session_time is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error\r\n                                                *ngIf=\"session_time.touched&&!session_time.valid&&session_time.errors?.min\">\r\n                                                Please enter\r\n                                                <strong>valid session_time</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Session time</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput type=\"text\" placeholder=\"discriptions\"\r\n                                                [(ngModel)]=\"activity.discriptions\" #discriptions=\"ngModel\"\r\n                                                name=\"discriptions\" required pattern=\"[^+!@^#$%),(&.`=_]*\" />\r\n                                            <mat-error\r\n                                                *ngIf=\"discriptions.touched&&!discriptions.valid&&discriptions.errors?.required\">\r\n                                                Discriptions is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error\r\n                                                *ngIf=\"discriptions.touched&&!discriptions.valid&&discriptions.errors?.pattern\">\r\n                                                Please enter\r\n                                                <strong>valid discriptions</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>discriptions</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group kt-form__group GroupFormCls\">\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                                    <div>Activity Payment</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput type=\"number\" placeholder=\"Fees\" [(ngModel)]=\"activity.fees\"\r\n                                                #fees=\"ngModel\" name=\"fees\" required min=\"1\" />\r\n                                            <mat-error *ngIf=\"fees.touched&&!fees.valid&&fees.errors?.required\">Fees is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error *ngIf=\"fees.touched&&!fees.valid&&fees.errors?.min\">Please enter\r\n                                                <strong>valid fees</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Fees</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput type=\"number\" min=\"1\" placeholder=\"Taxs\"\r\n                                                [(ngModel)]=\"activity.taxs\" #taxs=\"ngModel\" name=\"taxs\" required [min]=\"0\"\r\n                                                [max]=\"100\" />\r\n                                            <mat-icon matSuffix>%</mat-icon>\r\n                                            <mat-error *ngIf=\"taxs.touched&&!taxs.valid&&taxs.errors?.required\">Taxs is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error\r\n                                                *ngIf=\"taxs.touched&&!taxs.valid&&(taxs.errors?.min||taxs.errors?.max)\">\r\n                                                Please enter\r\n                                                <strong>valid taxs</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Taxs</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput placeholder=\"Payment Startegy\"\r\n                                                [(ngModel)]=\"activity.payment_startegy\" #payment_strategy=\"ngModel\"\r\n                                                name=\"payment_strategy\" required pattern=\"[^+!@^#$%),(&.`=_]*\" />\r\n                                            <mat-error\r\n                                                *ngIf=\"payment_strategy.touched&&!payment_strategy.valid&&payment_strategy.errors?.required\">\r\n                                                Payment stratergy is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error\r\n                                                *ngIf=\"payment_strategy.touched&&!payment_strategy.valid&&payment_strategy.errors?.pattern\">\r\n                                                Please enter\r\n                                                <strong>valid Payment strategy</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Payment Startegy</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    \r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"form-group kt-form__group GroupFormCls\">\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                                    <div>Activity Number Info</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput type=\"number\" pattern=\"[0-9]*\" min=\"1\"\r\n                                                placeholder=\"User Count\" #users_count=\"ngModel\" [(ngModel)]=\"activity.users_count\" required />\r\n                                            <mat-error *ngIf=\"users_count.touched&&!users_count.valid&&users_count.errors?.required\">User Count is <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error *ngIf=\"users_count.touched&&!users_count.valid&&users_count.errors?.pattern\">Please enter <strong>valid Number</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>User Count</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput type=\"number\" pattern=\"[0-9]*\" min=\"1\"\r\n                                                placeholder=\"Session Count\" #session_count=\"ngModel\" [(ngModel)]=\"activity.session_count\" required />\r\n                                                <mat-error *ngIf=\"session_count.touched&&!session_count.valid&&session_count.errors?.required\">Session Count is <strong>required</strong>\r\n                                                </mat-error>\r\n                                                <mat-error *ngIf=\"session_count.touched&&!session_count.valid&&session_count.errors?.pattern\">Please enter <strong>valid Number</strong>\r\n                                                </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Session Count</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                            <input matInput  (focus)=\"picker2.open()\" [matDatepicker]=\"picker2\"\r\n                                                [(ngModel)]=\"activity.start_date\" date #start_date=\"ngModel\" matInput [min]=\"startmindate\" [max]=\"activity.end_date\"\r\n                                                name=\"start_date\" placeholder=\"Start date\" required>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker2\">\r\n                                                <!-- <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon> -->\r\n                                            </mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker2></mat-datepicker>\r\n                                            <mat-error *ngIf=\"start_date.touched&&!start_date.valid&&start_date.errors?.required\">Start Date is <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-error>Please enter<strong>valid date</strong>\r\n                                            </mat-error> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                            <input matInput (focus)=\"pickerTo.open()\" [matDatepicker]=\"pickerTo\" [(ngModel)]=\"activity.end_date\" date\r\n                                                placeholder=\"End date\" #end_date=\"ngModel\" matInput [min]=\"activity.start_date\" required>  \r\n                                            <mat-datepicker-toggle matSuffix [for]=\"pickerTo\" name=\"end_date\">\r\n                                                <!-- <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon> -->\r\n                                            </mat-datepicker-toggle>\r\n                                            <mat-datepicker #pickerTo></mat-datepicker>\r\n                                            <mat-error *ngIf=\"end_date.touched&&!end_date.valid&&end_date.errors?.required\">End Date is <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-error>Please enter <strong>valid date</strong></mat-error> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group kt-form__group GroupFormCls\">\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                                    <div>Activity Discount Info</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput type=\"number\" min=\"1\" placeholder=\"Discount\"\r\n                                                [(ngModel)]=\"activity.discount\" #discount=\"ngModel\" name=\"discount\" required\r\n                                                [min]=\"0\" [max]=\"100\" />\r\n                                            <mat-icon matSuffix>%</mat-icon>\r\n                                            <mat-error *ngIf=\"discount.touched&&!discount.valid&&discount.errors?.required\">\r\n                                                Discount is\r\n                                                <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error\r\n                                                *ngIf=\"discount.touched&&!discount.valid&&(discount.errors?.min||discount.errors?.max)\">\r\n                                                Please enter\r\n                                                <strong>valid discount</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Discount</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"example-full-width\">\r\n                                            <input matInput (focus)=\"picker.open()\"  date [(ngModel)]=\"activity.start_discount\"\r\n                                                [matDatepicker]=\"picker\" placeholder=\"End Discount\" matInput [min]=\"discmindate\" [max]=\"activity.end_discount\"\r\n                                                #start_discount=\"ngModel\" name=\"start_discount\" required>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker></mat-datepicker>\r\n                                            <mat-error *ngIf=\"start_discount.touched&&!start_discount.valid&&start_discount.errors?.required\">\r\n                                                Start_discount is <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-error *ngIf=\"start_discount.touched&&!start_discount.valid && start_discount.errors?.min\">\r\n                                                Please enter <strong>valid date</strong>\r\n                                            </mat-error> -->\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Start Discount</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput (focus)=\"picker1.open()\" [min]=\"activity.start_discount\" date\r\n                                                [(ngModel)]=\"activity.end_discount\" [matDatepicker]=\"picker1\"\r\n                                                placeholder=\"End Discount\" #end_discount=\"ngModel\"\r\n                                                name=\"end_discount\" required>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker disabled=\"false\" #picker1></mat-datepicker>\r\n                                            <mat-error *ngIf=\"end_discount.touched&&!end_discount.valid&&end_discount.errors?.required\">\r\n                                                End_discount <strong>required</strong>\r\n                                            </mat-error>\r\n                                            <mat-error *ngIf=\"end_discount.touched&&!end_discount.valid && end_discount.errors?.min\">\r\n                                                Please enter <strong>valid date</strong>\r\n                                            </mat-error>\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>End Discount</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group kt-form__group GroupFormCls\">\r\n                                <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                                    <div>Activity Additional Info</div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput placeholder=\"Additional Service\"\r\n                                                [(ngModel)]=\"activity.additional_service\" />\r\n                                            <!-- <mat-error>Additional Service is\r\n                                                <strong>required</strong>\r\n                                            </mat-error> -->\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Additional Service</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput placeholder=\"Additional Invitations\"\r\n                                                [(ngModel)]=\"activity.additional_invitation\" />\r\n                                            <!-- <mat-error>Additional Invitations is\r\n                                                <strong>required</strong>\r\n                                            </mat-error> -->\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Additional Invitations</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                                            <input matInput placeholder=\"Additional Visits\"\r\n                                                [(ngModel)]=\"activity.additional_visits\" />\r\n                                            <!-- <mat-error>Additional Visits is\r\n                                                <strong>required</strong>\r\n                                            </mat-error> -->\r\n                                            <!-- <mat-hint align=\"start\">Please enter\r\n                                                <strong>Additional Visits</strong>\r\n                                            </mat-hint> -->\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- <div class=\"form-group kt-form__group row\">\r\n                                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\r\n\r\n                                    <div class=\"fileinput-new thumbnail\" style=\"max-width: 300px; max-height: 300px;\">\r\n                                        <img *ngIf=\"imageprivew==''\" style=\"max-width: 300px; max-height: 300px;\" src=\"http://www.placehold.it/200x150/EFEFEF/AAAAAA&amp;text=no+image\" alt=\"\">\r\n                                        <img *ngIf=\"imageprivew !=''\" style=\"max-width: 300px; max-height: 300px;\" src=\"{{imageprivew}}\" alt=\"\"> </div>\r\n                                    <div class=\"fileinput-preview fileinput-exists thumbnail\" style=\"max-width: 200px; max-height: 150px;\"> </div>\r\n                                    <div>\r\n                                        <span class=\"btn default btn-file\">\r\n                                            <span *ngIf=\"imageprivew == ''\" class=\"fileinput-new btn btn-success btn-s\"> Select image </span>\r\n                                            <span *ngIf=\"imageprivew != ''\" class=\"fileinput-new btn btn-success btn-s\"> Change </span>\r\n                                            <input type=\"file\" name=\"photo\" (change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" /> </span>\r\n                                        <button type=\"button\" *ngIf=\"imageprivew != '' && !confirm\" class=\"btn btn-success btn-s\"\r\n                                            (click)=\"uploader.uploadAll()\"\r\n                                            [disabled]=\"!uploader.getNotUploadedItems().length\" >\r\n                                                Confirm\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n\r\n                        </div>\r\n                        <div class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                            <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                                <div class=\"row text-right\">\r\n                                    <div class=\"col-lg-12\">\r\n                                        <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\"\r\n                                            cdkFocusInitial matTooltip=\"Cancel changes\">\r\n                                            Cancel\r\n                                        </button>&nbsp;\r\n                                        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"nexttab(1)\"\r\n                                            matTooltip=\"Next Tab\">\r\n                                            Next\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </mat-tab>\r\n                <mat-tab *ngIf =\"checkValidationRquireData()\">\r\n                    <ng-template mat-tab-label>\r\n                        <i class=\"mat-tab-label-icon fa fa-address-book\"></i>\r\n                        Schedual\r\n                    </ng-template>\r\n                    <ng-template matTabContent>\r\n                        <div class=\"kt-portlet__body\">\r\n                            <div class=\"form-group kt-form__group row d-block\">\r\n                                <div class=\"col-lg-12 kt-margin-bottom-20-mobile\">\r\n\r\n                                    <link rel=\"stylesheet\"\r\n                                        href=\"https://unpkg.com/angular-calendar@0.27.8/css/angular-calendar.css\">\r\n                                    <!-- <ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\r\n                        <div class=\"cal-cell-top\">\r\n                          <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\r\n                          <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\r\n                        </div>\r\n                        <div class=\"cell-totals\">\r\n                          <span\r\n                          *ngFor=\"let group of day.eventGroups\"\r\n                            class=\"badge badge-{{ group[0] }}\">\r\n\r\n                          </span>\r\n                        </div>\r\n                      </ng-template> -->\r\n\r\n                                    <div class=\"row text-center\">\r\n                                        <div class=\"col-md-4\">\r\n                                            <div class=\"btn-group\">\r\n                                                <div class=\"btn btn-primary\" mwlCalendarPreviousView [view]=\"view\"\r\n                                                    [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n                                                    Previous\r\n                                                </div>\r\n                                                <div class=\"btn btn-outline-secondary\" mwlCalendarToday\r\n                                                    [(viewDate)]=\"viewDate\">\r\n                                                    Today\r\n                                                </div>\r\n                                                <div class=\"btn btn-primary\" mwlCalendarNextView [view]=\"view\"\r\n                                                    [(viewDate)]=\"viewDate\" (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n                                                    Next\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-4\">\r\n                                            <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br />\r\n                                    <div [ngSwitch]=\"view\">\r\n\r\n                                        <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\"\r\n                                            [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\r\n                                            (dayClicked)=\"dayClicked($event.day)\" [weekStartsOn]=\"startDay\"\r\n                                            (eventClicked)=\"handleEvent('Clicked', $event.event,$event)\">\r\n                                        </mwl-calendar-month-view>\r\n\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"kt-separator kt-separator--dashed\"></div>\r\n                        </div>\r\n                        <div class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                            <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                                <div class=\"row text-right\">\r\n                                    <div class=\"col-lg-12\">\r\n                                        <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\"\r\n                                            cdkFocusInitial matTooltip=\"Cancel changes\">\r\n                                            Cancel\r\n                                        </button>&nbsp;\r\n                                        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"nexttab(0)\"\r\n                                            matTooltip=\"Next Tab\">\r\n                                            Back\r\n                                        </button>&nbsp;\r\n                                        <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onSubmit()\"\r\n                                            [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n                                            Save\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </mat-tab>\r\n\r\n            </mat-tab-group>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #modalContent let-close=\"close\">\r\n    <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">Activity Schedual Calender</h5>\r\n        <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div> \r\n            <h4>\r\n                Day : {{ modalData?.action }}\r\n            </h4> \r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"modal-body row\">\r\n        <div class=\"col-sm-2 col-md-2 col-lg-2\">Start Time:</div>\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                <input style=\"font-size: 20px;color: #5d78ff;\" matInput type=\"time\" placeholder=\"Start Time\"\r\n                [(ngModel)]=\" modalData?.event.from_time\" />\r\n        </div>\r\n        <div class=\"col-sm-2 col-md-2 col-lg-2\">End Time:</div>\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                <input style=\"font-size: 20px;color: #5d78ff;\" matInput type=\"time\" placeholder=\"End Time\"\r\n                [(ngModel)]=\" modalData?.event.to_time\" />\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"close(saveEvent(modalData?.event))\">\r\n            Save\r\n        </button>\r\n        <button  *ngIf=\"hideDelBtn\" type=\"button\" class=\"btn btn-danger\" (click)=\"close(deleteEvent(modalData?.event))\">\r\n            Delete\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n            Close\r\n        </button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/views/pages/membership/activities/activities-edit/activities-edit.dialog.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/pages/membership/activities/activities-edit/activities-edit.dialog.component.ts ***!
  \*******************************************************************************************************/
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
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var activities_model_1 = __webpack_require__(/*! ./activities.model */ "./src/app/views/pages/membership/activities/activities-edit/activities.model.ts");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
var ActivityEditDialogComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param dialogRef: MatDialogRef<ActivityEditDialogComponent>
     * @param data: any
     * @param store: Store<AppState>
     */
    function ActivityEditDialogComponent(modal, snackBar, dialogRef, data, store, ser, userservice, router, layoutUtilsService) {
        this.modal = modal;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.data = data;
        this.store = store;
        this.ser = ser;
        this.userservice = userservice;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.view = angular_calendar_1.CalendarView.Month;
        this.CalendarView = angular_calendar_1.CalendarView;
        this.viewDate = new Date();
        this.startDay = 1;
        this.activeDayIsOpen = true;
        this.options = '';
        this.start_date = new Date();
        this.selectedTab = 0;
        this.startmindate = new Date();
        this.discmindate = new Date();
        this.hasFormErrors = false;
        this.errormessage = '';
        this.viewLoading = false;
        this.confirm = false;
        this.hideDelBtn = true;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.ser.upload_file(), itemAlias: 'upload' });
    }
    ;
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ActivityEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events = [];
        this.allbranch = [];
        this.allunits = [];
        var newInviation = new activities_model_1.Activity();
        this.activity$ = rxjs_1.of(newInviation);
        this.activity$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.activity = res;
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            var responsePath = JSON.parse(response);
            if (responsePath.result)
                _this.activity.image = responsePath.image;
            _this.confirm = true;
        };
        this.getbranceandunits();
        if (this.data.id != undefined)
            this.getActivitiesById(this.data.id);
    };
    ActivityEditDialogComponent.prototype.branchOnchange = function (key) {
        var allunits = [];
        if (this.allbrancandunits) {
            Object.values(this.allbrancandunits).forEach(function (units) {
                if (units['type'] == 'units' && units['branch_key'] == key)
                    allunits.push(units);
            });
            console.table(key);
            console.table(allunits);
            this.allunits = allunits;
        }
    };
    /**
     * On destroy
     */
    ActivityEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Save data
     */
    ActivityEditDialogComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.activity.title && this.activity.session_time && this.activity.type) {
            this.viewLoading = true;
            console.table(this.activity);
            if (this.data.id != undefined) {
                if (this.checkedpermission('editactivities')) {
                    this.ser.updateactivities(this.data.id, this.activity).subscribe(function (res) {
                        _this.redirctFunction(res['result'], "Activity Add Successfully");
                    });
                }
                else {
                    this.open();
                }
            }
            else {
                if (this.checkedpermission('addactivities')) {
                    this.ser.addactivities(this.activity).subscribe(function (res) {
                        _this.redirctFunction(res['result'], 'Activity Doesn\'t Added');
                    });
                }
            }
        }
        else {
            this.hasFormErrors = true;
            document.querySelector('#alert').scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.errormessage = "Please Enter all Required Fileds";
        }
    };
    ActivityEditDialogComponent.prototype.redirctFunction = function (done, msg) {
        var _this = this;
        if (msg === void 0) { msg = ''; }
        if (done) {
            this.dialogRef.close({});
            if (this.router.url == '/default/membership/activities')
                this.router.navigateByUrl("/default/membership/activitie");
            else
                this.router.navigateByUrl("/default/membership/activities");
            setTimeout(function () {
                _this.layoutUtilsService.showActionNotification(msg, crud_1.MessageType.Update);
            }, 1000);
        }
        else {
            this.viewLoading = false;
            this.hasFormErrors = true;
            document.querySelector('#alert').scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.errormessage = msg;
        }
    };
    //get branch and units
    ActivityEditDialogComponent.prototype.getbranceandunits = function () {
        var _this = this;
        this.viewLoading = true;
        if (this.checkedpermission('getallusers')) {
            this.userservice.getAllBrachsAndUnits(1, 10000).subscribe(function (res) {
                if (res['result'] && res['data'].length > 0) {
                    _this.allbrancandunits = res['data'];
                    var branches = [];
                    Object.keys(res['data']).forEach(function (key) {
                        if (res['data'][key].type == 'branch')
                            branches.push(res['data'][key]);
                    });
                    console.table(branches);
                    _this.allbranch = branches;
                    //console.table(branches);
                }
                _this.viewLoading = false;
            });
        }
    };
    ActivityEditDialogComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    //get activities data
    ActivityEditDialogComponent.prototype.getActivitiesById = function (id) {
        var _this = this;
        this.viewLoading = true;
        if (this.checkedpermission('getactivities')) {
            this.ser.getactivitiesById(id).subscribe(function (res) {
                if (res['result'] && res['data'].length > 0) {
                    _this.activity.branch_key = res['data'][0].branch_key;
                    _this.activity.units_key = res['data'][0].units_key;
                    _this.activity.title = res['data'][0].title;
                    _this.activity.fees = res['data'][0].fees;
                    _this.activity.taxs = res['data'][0].taxs;
                    _this.activity.payment_startegy = res['data'][0].payment_startegy;
                    _this.activity.type = res['data'][0].type;
                    _this.activity.discount = res['data'][0].discount;
                    _this.activity.start_discount = res['data'][0].start_discount;
                    _this.activity.end_discount = res['data'][0].end_discount;
                    _this.activity.image = res['data'][0].image;
                    _this.activity.discriptions = res['data'][0].discriptions;
                    _this.activity.session_time = res['data'][0].session_time;
                    _this.activity.users_count = res['data'][0].users_count;
                    _this.activity.session_count = res['data'][0].session_count;
                    _this.activity.start_date = res['data'][0].start_date;
                    _this.activity.end_date = res['data'][0].end_date;
                    _this.activity.schedual_time = res['data'][0].schedual_time;
                    _this.activity.additional_visits = res['data'][0].additional_visits;
                    _this.activity.additional_service = res['data'][0].additional_service;
                    _this.activity.additional_invitation = res['data'][0].additional_invitation;
                    _this.imageprivew = res['data'][0].image;
                    _this.confirm = true;
                    _this.branchOnchange(_this.activity.branch_key);
                    _this.setDataToCalender(_this.activity.schedual_time);
                    if (res['data'][0].start_date)
                        _this.startmindate = res['data'][0].start_date;
                    if (res['data'][0].start_discount)
                        _this.discmindate = res['data'][0].start_discount;
                }
                _this.viewLoading = false;
            });
        }
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ActivityEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    ActivityEditDialogComponent.prototype.handleUpload = function (event) {
        var _this = this;
        this.confirm = false;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imageprivew = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    /** UI */
    /**
     * Returns component title
     */
    ActivityEditDialogComponent.prototype.getTitle = function () {
        return 'New Activity';
    };
    ActivityEditDialogComponent.prototype.isTitleValid = function () {
        return true;
    };
    ActivityEditDialogComponent.prototype.setDataToCalender = function (data) {
        //data = JSON.parse(data);
        Object.values(data).forEach(function (item) {
            var start_date = new Date(item.start);
            var end_date = new Date(item.end);
            var title = this.gethoursandminutes(start_date) + " to " + this.gethoursandminutes(end_date);
            var color = colors.blue;
            console.log(start_date, end_date);
            this.events.push({ start: start_date, end: end_date, title: title, color: color });
        }.bind(this));
        console.log(this.events);
    };
    ActivityEditDialogComponent.prototype.dayClicked = function (event) {
        //check if day in range
        var date = new Date(event.date);
        var start_date = new Date(this.activity.start_date).getTime();
        var end_date = new Date(this.activity.end_date).getTime();
        if (date.getTime() >= start_date && date.getTime() <= end_date) {
            if (event.events.length) {
                var d = new Date(event.events[0].start);
                event.from_time = this.gethoursandminutes(d, false);
                var d = new Date(event.events[0].end);
                event.to_time = this.gethoursandminutes(d, false);
            }
            var action = date.getDate() + " - " + (date.getMonth() + 1) + " - " + date.getFullYear();
            this.modalData = { event: event, action: action };
            console.log(this.modalData.event['from_time']);
            if (typeof this.modalData.event['from_time'] == 'string') {
                this.hideDelBtn = true;
            }
            else {
                this.hideDelBtn = false;
            }
            this.modal.open(this.modalContent, { size: 'lg' });
        }
        else
            alert('This Day Not In Range Of Activity');
    };
    ActivityEditDialogComponent.prototype.deleteEvent = function (event) {
        var from_time = event.date.toString().replace('00:00:00', event.from_time + ':00');
        var to_time = event.date.toString().replace('00:00:00', event.to_time + ':00');
        var data = this.activity.schedual_time;
        Object.keys(data).forEach(function (key) {
            event.events[0].start = new Date(from_time);
            event.events[0].end = new Date(to_time);
            if (new Date(data[key].start).toString().substring(0, 10) == event.events[0].start.toString().substring(0, 10)) {
                this.activity.schedual_time.splice(key, 1);
            }
        }.bind(this));
        event.events = [];
    };
    ActivityEditDialogComponent.prototype.saveEvent = function (event) {
        var from_time = event.date.toString().replace('00:00:00', event.from_time + ':00');
        var to_time = event.date.toString().replace('00:00:00', event.to_time + ':00');
        from_time = new Date(from_time);
        to_time = new Date(to_time);
        console.log(event, this.activity.schedual_time);
        if (from_time == 'Invalid Date' || to_time == 'Invalid Date') {
            alert('Please, select Valid Time, and Try Again');
        }
        else {
            if (!this.activity.schedual_time)
                this.activity.schedual_time = [];
            if (event.events.length) {
                var data = this.activity.schedual_time;
                Object.keys(data).forEach(function (key) {
                    console.log('fff');
                    //this.events=[];
                    event.events[0].start = from_time;
                    event.events[0].end = to_time;
                    if (new Date(data[key].start).toString().substring(0, 10) == event.events[0].start.toString().substring(0, 10)) {
                        console.log(data[key].start);
                        this.activity.schedual_time[key].start = new Date(from_time).getTime();
                        this.activity.schedual_time[key].end = new Date(to_time).getTime();
                    }
                    this.events.push({ start: new Date(from_time), end: new Date(to_time) });
                }.bind(this));
            }
            else {
                if (this.activity.schedual_time.length < this.activity.session_count) {
                    this.activity.schedual_time.push({ start: new Date(from_time).getTime(), end: new Date(to_time).getTime() });
                    event.events.push({ start: new Date(from_time).getTime(), end: new Date(to_time).getTime() });
                }
                else
                    alert('you have select ' + this.activity.schedual_time.length + ' Times');
            }
        }
    };
    ActivityEditDialogComponent.prototype.gethoursandminutes = function (date, getampm) {
        if (getampm === void 0) { getampm = true; }
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        hours = hours < 10 ? '0' + hours : hours;
        if (!getampm)
            var strTime = hours + ':' + minutes;
        else
            var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    };
    ActivityEditDialogComponent.prototype.nexttab = function (index) {
        if (index == 1) {
            if (!this.checkValidationRquireData()) {
                this.errormessage = "Please Enter all Required Fileds";
                this.hasFormErrors = true;
                document.querySelector('#alert').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            else {
                this.selectedTab = index;
            }
        }
        else {
            this.selectedTab = index;
        }
    };
    ActivityEditDialogComponent.prototype.checkValidationRquireData = function () {
        if (this.activity.title && this.activity.fees &&
            this.activity.payment_startegy &&
            this.activity.type &&
            this.activity.session_time &&
            this.activity.users_count &&
            this.activity.session_count &&
            this.activity.start_date &&
            this.activity.end_date) {
            return true;
        }
        else {
            return false;
        }
        // this.activity.branch_key =  res['data'][0].branch_key;
        // this.activity.units_key =  res['data'][0].units_key;
        // this.activity.discount =  res['data'][0].discount;
        // this.activity.start_discount =  res['data'][0].start_discount;
        // this.activity.end_discount =  res['data'][0].end_discount;
        // this.activity.image =  res['data'][0].image;
        // this.activity.discriptions =  res['data'][0].discriptions;
    };
    ActivityEditDialogComponent.prototype.checkedpermission = function (key) {
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
    ActivityEditDialogComponent.prototype.open = function () {
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
    __decorate([
        core_1.ViewChild('modalContent'),
        __metadata("design:type", core_1.TemplateRef)
    ], ActivityEditDialogComponent.prototype, "modalContent", void 0);
    ActivityEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-activities-edit-dialog',
            template: __webpack_require__(/*! ./activities-edit.dialog.component.html */ "./src/app/views/pages/membership/activities/activities-edit/activities-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.Default,
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ../../membership.component.css */ "./src/app/views/pages/membership/membership.component.css")]
        }),
        __param(3, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [ng_bootstrap_1.NgbModal,
            material_2.MatSnackBar, material_1.MatDialogRef, Object, store_1.Store, _services_1.MembershipService, _services_1.UserService, router_1.Router,
            crud_1.LayoutUtilsService])
    ], ActivityEditDialogComponent);
    return ActivityEditDialogComponent;
}());
exports.ActivityEditDialogComponent = ActivityEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/membership/activities/activities-edit/activities.model.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/membership/activities/activities-edit/activities.model.ts ***!
  \***************************************************************************************/
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
var Activity = /** @class */ (function (_super) {
    __extends(Activity, _super);
    function Activity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Activity.prototype.clear = function () {
        this.club_key = '';
        this.branch_key = '';
        this.units_key = '';
        this.title = '';
        //this.month_count = '';
        //this.month_system = '';
        this.fees = '';
        this.taxs = '';
        this.payment_startegy = '';
        this.type = '';
        this.discount = '';
        this.start_discount = '';
        this.end_discount = '';
        this.image = '';
        this.discriptions = '';
        this.session_time = '';
        //this.day_per_week = '';
        this.users_count = '';
        this.session_count = '';
        this.start_date = '';
        this.end_date = '';
        this.schedual_time = [];
        this.additional_visits = '';
        this.additional_service = '';
        this.additional_invitation = '';
        this.status = '';
    };
    return Activity;
}(crud_1.BaseModel));
exports.Activity = Activity;


/***/ }),

/***/ "./src/app/views/pages/membership/activities/activities.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/views/pages/membership/activities/activities.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"''\" [class]=\"'kt-portlet__head--lg'\" >\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addNewactivitiy()\" mat-raised-button color=\"primary\" matTooltip=\"Create new User\">New Activity</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<!-- start::Body (attribute: ktPortletBody) -->\r\n\t<div *ngIf=\"isLoading\" class=\"center\" style=\"padding: 150px;\">\r\n\t\t<mat-progress-spinner style=\"margin:0 auto;\" mode=\"indeterminate\" diameter=\"40\">\r\n\t\t</mat-progress-spinner>\r\n\t</div>\r\n\t<kt-portlet-body *ngIf=\"!isLoading\">\r\n\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search Activitiy\" [(ngModel)]=\"SearchKey\" #searchInput placeholder=\"Search then Press Enter\" (keyup.enter)=\"applyFilter()\">\r\n\t\t\t\t\t\t   <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\" (click)=\"onSearchClear()\">\r\n\t\t\t\t\t\t\t   <mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t   </button>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\r\n\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\r\n\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\"><!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }}\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (users-list.component.ts file) -->\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<button (click)=\"fetchUsers()\" mat-raised-button matTooltip=\"Fetch selected users\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\"\r\n\t\t\t\t#table\r\n\t\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\t\tmatSort\r\n\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t<!-- Checkbox Column -->\r\n\r\n\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>#</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let activity\">{{activity.increment}}</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"title\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header >Title</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let activity\" >{{activity.title}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"discriptions\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header  >Discriptions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let activity\"  >{{activity.discriptions}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header >Type</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let activity\" >{{activity.type}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header >Status</mat-header-cell>\r\n\t\t\t\t\t<mat-cell  *matCellDef=\"let invitation\" >\r\n\t\t\t\t\t\t<span *ngIf=\"invitation.status=='true'\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">Active</span>\r\n\t\t\t\t\t\t<span *ngIf=\"invitation.status=='false'\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--danger kt-badge--wide\">Deactive</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\" >\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef style=\"max-width:100px\">Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let activity;let rowIndex = index\" style=\"max-width:100px\">\r\n\t\t\t\t\t\t<button (click)=\"editactivities(activity._id)\" mat-icon-button color=\"primary\"  matTooltip=\"Edit Packages\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\t\t\t\t\t\t<mat-progress-spinner *ngIf=\"rowIndex == currentRowIndex\" style=\"margin:0 auto;\"mode=\"indeterminate\" diameter=\"30\">\r\n\t\t\t\t\t\t</mat-progress-spinner>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button *ngIf=\"activity.status=='true' && rowIndex != currentRowIndex\" mat-icon-button color=\"warn\" matTooltip=\"Deactive Packages\" type=\"button\"  (click)=\"deactiveactivities(activity._id,false ,rowIndex)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button *ngIf=\"activity.status=='false' && rowIndex != currentRowIndex\" mat-icon-button color=\"primary\" matTooltip=\"Active Packages\" type=\"button\"  (click)=\"deactiveactivities(activity._id,true ,rowIndex)\">\r\n\t\t\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n                <ng-container matColumnDef=\"loading\">\r\n                 <mat-footer-cell *matFooterCellDef colspan=\"6\">\r\n                   Loading...\r\n\t\t\t\t </mat-footer-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t<mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':checkedinvitations()}\"></mat-footer-row>\r\n\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[5,10,25,100]\" [pageSize]=\"10\"></mat-paginator>\r\n        </div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/membership/activities/activities.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/pages/membership/activities/activities.component.ts ***!
  \***************************************************************************/
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
var activities_edit_dialog_component_1 = __webpack_require__(/*! ./activities-edit/activities-edit.dialog.component */ "./src/app/views/pages/membership/activities/activities-edit/activities-edit.dialog.component.ts");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var ActivityComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     */
    function ActivityComponent(activatedRoute, store, router, layoutUtilsService, dialog, snackBar, ser, changeDetectorRefs) {
        this.activatedRoute = activatedRoute;
        this.store = store;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.ser = ser;
        this.changeDetectorRefs = changeDetectorRefs;
        this.selection = new collections_1.SelectionModel(true, []);
        this.displayedColumns = ['id', 'title', 'discriptions', 'type', 'status', 'actions'];
        this.hasMessages = false;
        this.checkdata = false;
        this.isLoading = false;
        // Subscriptions
        this.subscriptions = [];
        this.currentRowIndex = -1;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ActivityComponent.prototype.ngOnInit = function () {
        //this.dataSource=[];
        this.getallactivities();
    };
    // ngAfterViewInit()
    // {
    // 	this.getallactivities()
    // }
    /**
     * On Destroy
     */
    ActivityComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    ActivityComponent.prototype.addNewactivitiy = function () {
        if (this.checkedpermission('addactivities')) {
            var dialogRef = this.dialog.open(activities_edit_dialog_component_1.ActivityEditDialogComponent, { data: {} });
        }
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    ActivityComponent.prototype.onAlertClose = function ($event) {
        this.hasMessages = false;
    };
    ActivityComponent.prototype.getallactivities = function (pages, prepage, search) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (prepage === void 0) { prepage = 30; }
        if (search === void 0) { search = null; }
        this.isLoading = true;
        if (this.checkedpermission('getactivities')) {
            this.ser.getallactivities(pages, prepage, search).subscribe(function (res) {
                console.log(res['result']);
                if (res['result']) {
                    _this.dataSource = new material_1.MatTableDataSource(res['data']);
                    _this.changeDetectorRefs.detectChanges();
                }
                _this.isLoading = false;
                _this.changeDetectorRefs.detectChanges();
            });
        }
    };
    ActivityComponent.prototype.editactivities = function (id) {
        if (this.checkedpermission('editactivities')) {
            var dialogRef = this.dialog.open(activities_edit_dialog_component_1.ActivityEditDialogComponent, { data: { id: id } });
        }
        else {
            this.open();
        }
    };
    // deactiveactivities(id, status) {
    // 	if (this.checkedpermission('editactivities')) {
    // 		this.ser.updateactivities(id, { status }).subscribe(
    // 			res => {
    // 				if (this.router.url == '/default/membership/activities')
    // 					this.router.navigateByUrl("/default/membership/activitie");
    // 				else this.router.navigateByUrl("/default/membership/activities");
    // 			}
    // 		)
    // 	}
    // 	else {
    // 		this.open()
    // 	}
    // }
    ActivityComponent.prototype.deactiveactivities = function (id, status, rowIndex) {
        var _this = this;
        if (this.checkedpermission('editactivities')) {
            this.currentRowIndex = rowIndex;
            if (!status) {
                var _title = 'Deactive Activitiy';
                var _description = 'Are you sure to Deactive this Activitiy?';
                var _waitDesciption = 'Processing...';
                var dialogRef = this.layoutUtilsService.RenwElement(_title, _description, _waitDesciption);
                dialogRef.afterClosed().subscribe(function (res) {
                    if (!res) {
                        _this.currentRowIndex = -1;
                        _this.changeDetectorRefs.detectChanges();
                        return;
                    }
                    else {
                        _this.activeDeactiveDB(id, status, rowIndex);
                    }
                });
            }
            else {
                this.activeDeactiveDB(id, status, rowIndex);
            }
        }
        else {
            this.open();
        }
    };
    ActivityComponent.prototype.activeDeactiveDB = function (id, status, rowIndex) {
        var _this = this;
        var stateTxt = (status) ? 'Active' : 'Deactive';
        this.ser.updateactivities(id, { status: status }).subscribe(function (res) {
            if (res['result']) {
                // if (this.router.url == '/default/membership/packages')
                // 	this.router.navigateByUrl("/default/membership/package");
                // else this.router.navigateByUrl("/default/membership/packages");
                setTimeout(function () {
                    _this.layoutUtilsService.showActionNotification('Activity Has Been ' + stateTxt + 'd Successfully', crud_1.MessageType.Update);
                }, 1000);
                _this.dataSource["data"][rowIndex]["status"] = status.toString();
                _this.changeDetectorRefs.detectChanges();
            }
            else {
                setTimeout(function () {
                    _this.layoutUtilsService.showActionNotification('Error While ' + stateTxt + ' Activity', crud_1.MessageType.Update);
                }, 1000);
            }
            _this.currentRowIndex = -1;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    ActivityComponent.prototype.applyFilter = function () {
        //this.listData.filter=this.SearchKey.trim().toLowerCase()
        console.log(this.searchInput.nativeElement.value);
        this.getallactivities(null, null, this.searchInput.nativeElement.value);
    };
    ActivityComponent.prototype.onSearchClear = function () {
        this.SearchKey = '';
        this.searchInput.nativeElement.value = '';
        this.applyFilter();
    };
    ActivityComponent.prototype.nextPage = function (event) {
        this.getallactivities(event.pageIndex + 1, event.pageSize, null);
    };
    //checked if there is inivitations or not
    ActivityComponent.prototype.checkedinvitations = function () {
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
    ActivityComponent.prototype.checkedpermission = function (key) {
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
    ActivityComponent.prototype.open = function () {
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
    ActivityComponent.prototype.fetchUsers = function () {
    };
    __decorate([
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], ActivityComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], ActivityComponent.prototype, "searchInput", void 0);
    ActivityComponent = __decorate([
        core_1.Component({
            selector: 'kt-activities',
            template: __webpack_require__(/*! ./activities.component.html */ "./src/app/views/pages/membership/activities/activities.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ../membership.scss */ "./src/app/views/pages/membership/membership.scss")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            store_1.Store,
            router_1.Router,
            crud_1.LayoutUtilsService,
            material_1.MatDialog,
            material_1.MatSnackBar,
            _services_1.MembershipService,
            core_1.ChangeDetectorRef])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;


/***/ }),

/***/ "./src/app/views/pages/membership/membership.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/membership/membership.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import url(\"http://keenthemes.com/preview/metronic/theme/assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css\");\n/* @import url(\"http://keenthemes.com/preview/metronic/theme/assets/global/plugins/bootstrap/css/bootstrap.min.css\"); */\n.warn-snackbar{\r\n    background-color: #ff4081;\r\n  }\n::ng-deep .mat-select-content{\r\n    width:2000px;\r\n    background-color: red;\r\n    font-size: 10px;   \r\n}\n.mat-column-discriptions {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 25% !important;\r\n  width: 25% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  -ms-hyphens: auto;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\n.mat-column-title,.mat-column-type , .mat-column-status ,.mat-column-image {\r\n  word-wrap: break-word !important;\r\n  white-space: unset !important;\r\n  flex: 0 0 15% !important;\r\n  width: 15% !important;\r\n  overflow-wrap: break-word;\r\n  word-wrap: break-word;\r\n  word-break: break-word;\r\n  -ms-hyphens: auto;\r\n  -webkit-hyphens: auto;\r\n  hyphens: auto;\r\n}\n.mat-column-id {\r\n  flex: 0 0 5% !important;\r\n  width: 5% !important;\r\n}\n.imagMaxWH {\r\n  max-width: 80px;\r\n  max-height: 60px;\r\n  border-radius: 6px;\r\n  width: 60px;\r\n  height: 40px;\r\n}\n.GroupFormCls{\r\n  margin-bottom: 2px !important;\r\n  border: 1px solid #eee !important;\r\n  padding: 15px;\r\n}\n.GroupFormHeaderCls{\r\n  /* text-align: center; */\r\n  margin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVyc2hpcC9tZW1iZXJzaGlwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDZIQUE2SDtBQUQ3SCx1SEFBdUg7QUFFdkg7SUFDSSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUVqQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBRWpCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsYUFBYTtBQUNmO0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVyc2hpcC9tZW1iZXJzaGlwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IHVybChcImh0dHA6Ly9rZWVudGhlbWVzLmNvbS9wcmV2aWV3L21ldHJvbmljL3RoZW1lL2Fzc2V0cy9nbG9iYWwvcGx1Z2lucy9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpOyAqL1xyXG5AaW1wb3J0IHVybChcImh0dHA6Ly9rZWVudGhlbWVzLmNvbS9wcmV2aWV3L21ldHJvbmljL3RoZW1lL2Fzc2V0cy9nbG9iYWwvcGx1Z2lucy9ib290c3RyYXAtZmlsZWlucHV0L2Jvb3RzdHJhcC1maWxlaW5wdXQuY3NzXCIpO1xyXG4ud2Fybi1zbmFja2JhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LXNlbGVjdC1jb250ZW50e1xyXG4gICAgd2lkdGg6MjAwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMHB4OyAgIFxyXG59XHJcbi5tYXQtY29sdW1uLWRpc2NyaXB0aW9ucyB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDI1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG4ubWF0LWNvbHVtbi10aXRsZSwubWF0LWNvbHVtbi10eXBlICwgLm1hdC1jb2x1bW4tc3RhdHVzICwubWF0LWNvbHVtbi1pbWFnZSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xyXG4gIC1tb3otaHlwaGVuczogYXV0bztcclxuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcbiAgaHlwaGVuczogYXV0bztcclxufVxyXG4ubWF0LWNvbHVtbi1pZCB7XHJcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltYWdNYXhXSCB7XHJcbiAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLkdyb3VwRm9ybUNsc3tcclxuICBtYXJnaW4tYm90dG9tOiAycHggIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLkdyb3VwRm9ybUhlYWRlckNsc3tcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/membership/membership.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/membership/membership.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"hasUserAccess$ | async\">\r\n    <router-outlet></router-outlet>\r\n</div> -->\r\n<div>\r\n    <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/membership/membership.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/membership/membership.component.ts ***!
  \****************************************************************/
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
var MembershipComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    function MembershipComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    MembershipComponent.prototype.ngOnInit = function () {
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
    MembershipComponent = __decorate([
        core_1.Component({
            selector: 'kt-membership',
            template: __webpack_require__(/*! ./membership.component.html */ "./src/app/views/pages/membership/membership.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            styles: [__webpack_require__(/*! ./membership.component.css */ "./src/app/views/pages/membership/membership.component.css")]
        }),
        __metadata("design:paramtypes", [store_1.Store, router_1.Router])
    ], MembershipComponent);
    return MembershipComponent;
}());
exports.MembershipComponent = MembershipComponent;


/***/ }),

/***/ "./src/app/views/pages/membership/membership.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/membership/membership.module.ts ***!
  \*************************************************************/
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
var code_preview_module_1 = __webpack_require__(/*! ../../partials/content/general/code-preview/code-preview.module */ "./src/app/views/partials/content/general/code-preview/code-preview.module.ts");
var material_preview_module_1 = __webpack_require__(/*! ../../partials/content/general/material-preview/material-preview.module */ "./src/app/views/partials/content/general/material-preview/material-preview.module.ts");
// Components
var membership_component_1 = __webpack_require__(/*! ./membership.component */ "./src/app/views/pages/membership/membership.component.ts");
var packages_component_1 = __webpack_require__(/*! ./packages/packages.component */ "./src/app/views/pages/membership/packages/packages.component.ts");
var activities_component_1 = __webpack_require__(/*! ./activities/activities.component */ "./src/app/views/pages/membership/activities/activities.component.ts");
var packages_edit_dialog_component_1 = __webpack_require__(/*! ./packages/packages-edit/packages-edit.dialog.component */ "./src/app/views/pages/membership/packages/packages-edit/packages-edit.dialog.component.ts");
var activities_edit_dialog_component_1 = __webpack_require__(/*! ./activities/activities-edit/activities-edit.dialog.component */ "./src/app/views/pages/membership/activities/activities-edit/activities-edit.dialog.component.ts");
// import { FileSelectDirective } from 'ng2-file-upload';
var ng2_validation_1 = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
//guard
var permission_guard_1 = __webpack_require__(/*! ../../../core/auth/_guards/permission.guard */ "./src/app/core/auth/_guards/permission.guard.ts");
var angularx_flatpickr_1 = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var date_fns_1 = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
//import { FileUploadModule } from '../../../../../node_modules/ng2-file-upload/file-upload/file-upload.module.d';
var sharing_module_1 = __webpack_require__(/*! ../sharing.module */ "./src/app/views/pages/sharing.module.ts");
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var auth_1 = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
var ng2_img_max_1 = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var routes = [
    {
        path: '',
        component: membership_component_1.MembershipComponent,
        children: [
            {
                path: '',
                redirectTo: 'packages',
                pathMatch: 'full',
                data: { title: 'packages' },
            },
            {
                path: 'Memberships',
                component: packages_component_1.PackagesComponent,
                data: { title: 'packages' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'Membership',
                component: packages_component_1.PackagesComponent,
                data: { title: 'packages' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'activities',
                component: activities_component_1.ActivityComponent,
                data: { title: 'activities' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
            {
                path: 'activitie',
                component: activities_component_1.ActivityComponent,
                data: { title: 'activities' },
                canActivate: [permission_guard_1.PermissionGuard]
            },
        ]
    }
];
var MembershipModule = /** @class */ (function () {
    function MembershipModule() {
    }
    MembershipModule = __decorate([
        core_1.NgModule({
            imports: [
                ng2_validation_1.CustomFormsModule,
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
                ng_bootstrap_1.NgbModalModule,
                angularx_flatpickr_1.FlatpickrModule.forRoot(),
                angular_calendar_1.CalendarModule.forRoot({
                    provide: angular_calendar_1.DateAdapter,
                    useFactory: date_fns_1.adapterFactory
                }),
                ng2_file_upload_1.FileUploadModule,
                ng2_img_max_1.Ng2ImgMaxModule
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
                packages_edit_dialog_component_1.PackagesEditDialogComponent,
                activities_edit_dialog_component_1.ActivityEditDialogComponent
            ],
            declarations: [
                membership_component_1.MembershipComponent,
                packages_component_1.PackagesComponent,
                packages_edit_dialog_component_1.PackagesEditDialogComponent,
                activities_component_1.ActivityComponent,
                activities_edit_dialog_component_1.ActivityEditDialogComponent,
            ]
        })
    ], MembershipModule);
    return MembershipModule;
}());
exports.MembershipModule = MembershipModule;


/***/ }),

/***/ "./src/app/views/pages/membership/membership.scss":
/*!********************************************************!*\
  !*** ./src/app/views/pages/membership/membership.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide {\n  display: none; }\n\nmat-footer-row mat-footer-cell {\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVyc2hpcC9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXG1lbWJlcnNoaXBcXG1lbWJlcnNoaXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQ0osRUFBQTs7QUFDQTtFQUNBLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvbWVtYmVyc2hpcC9tZW1iZXJzaGlwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG5tYXQtZm9vdGVyLXJvdyAgbWF0LWZvb3Rlci1jZWxse1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/membership/packages/packages-edit/packages-edit.dialog.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/views/pages/membership/packages/packages-edit/packages-edit.dialog.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\"\r\n    [ngClass]=\"{ 'kt-portlet--body-progress' : viewLoading, 'kt-portlet--body-progress-overlay' : loadingAfterSubmit }\">\r\n    <div class=\"kt-portlet__head kt-portlet__head__custom\">\r\n        <div class=\"kt-portlet__head-label\">\r\n            <h3 class=\"kt-portlet__head-title\">{{ getTitle() }}</h3>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div *ngIf=\"isLoading\" class=\"center\" style=\"padding: 150px;\">\r\n            <mat-progress-spinner style=\"margin:0 auto;\" mode=\"indeterminate\" diameter=\"40\">\r\n            </mat-progress-spinner>\r\n        </div>\r\n\r\n        <div class=\"kt-form\" *ngIf=\"!isLoading\">\r\n            <div class=\"kt-portlet__body\">\r\n\r\n                <div class=\"kt-portlet__body-progress\">\r\n                    <mat-spinner [diameter]=\"40\"></mat-spinner>\r\n                </div>\r\n                <div id=\"alert\" #alert>\r\n                    <kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [duration]=\"30000\" [showCloseButton]=\"true\"\r\n                        (close)=\"onAlertClose($event)\">\r\n                        {{errormessage}}\r\n                    </kt-alert>\r\n                </div>\r\n                <div class=\"form-group kt-form__group GroupFormCls\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                        <div>Branch Information</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                \r\n                        <div class=\"col-sm-6 col-md-6 col-lg-6 box\" *ngIf=\"allbranch.length >0\">\r\n                            <mat-form-field>\r\n                                <mat-label> All Branchs :</mat-label>\r\n                                <mat-select [(ngModel)]=\"package.branch_key\" class=\"btn-group bootstrap-select bs-select\">\r\n                                    <mat-option *ngFor=\"let value of allbranch\" (click)=\"branchOnchange(value.pub_key)\"\r\n                                        [value]=\"value.pub_key\">\r\n                                        {{value.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-sm-6 col-md-6 col-lg-6 box\" *ngIf=\"allunits.length >0\">\r\n                            <mat-form-field>\r\n                                <mat-label> Unite : </mat-label>\r\n                                <mat-select [(ngModel)]=\"package.units_key\" class=\"btn-group bootstrap-select bs-select\">\r\n                                    <mat-option *ngFor=\"let value of allunits\" [value]=\"value.pub_key\">\r\n                                        {{value.name}}\r\n                                    </mat-option>\r\n                                </mat-select>\r\n                            </mat-form-field>\r\n                        </div>\r\n                    </div>\r\n                \r\n                </div>\r\n\r\n                <div class=\"form-group kt-form__group GroupFormCls\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                        <div>Membership Basic Information</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput [(ngModel)]=\"package.title\" #title=\"ngModel\" placeholder=\"title\"\r\n                                name=\"title\" required pattern=\"[^+!@^#$%),(&.`=_]*\" />\r\n                            <mat-error *ngIf=\"title.touched&&!title.valid&&title.errors?.required\">title is<strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error *ngIf=\"title.touched&&!title.valid&&title.errors?.pattern\">Please Enter<strong>valid title</strong>\r\n                            </mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please Enter<strong>Membership Title</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                        <mat-form-field style=\"width: 100%;\">\r\n                            <mat-label> Type </mat-label>\r\n                            <mat-select  [(ngModel)]=\"package.type\" #type=\"ngModel\" name=\"type\" required\r\n                                class=\"btn-group bootstrap-select bs-select\">\r\n                                <mat-option ng-reflect-value=\"general\" value=\"general\">General</mat-option>\r\n                                <mat-option ng-reflect-value=\"private\" value=\"private\">Private</mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"type.touched&&!type.valid&&type.errors?.required\">Please enter\r\n                                <strong>type</strong>\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"text\" placeholder=\"description\" #discriptions=\"ngModel\"\r\n                                name=\"discriptions\" required pattern=\"[^+!@^#$%),(&.`=_]*\"\r\n                                [(ngModel)]=\"package.discriptions\" />\r\n                            <mat-error *ngIf=\"discriptions.touched&&!discriptions.valid&&discriptions.errors?.required\">\r\n                                Description is<strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error *ngIf=\"discriptions.touched&&!discriptions.valid&&discriptions.errors?.pattern\">\r\n                                Please enter<strong>valid description </strong>\r\n                            </mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>discriptions</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div  class=\"form-group kt-form__group GroupFormCls\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                        <div>Membership Duration</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div *ngIf=\"package.type=='private'\" class=\"col-sm-3 col-md-3 col-lg-3 box\"> <!-- //Month System -->\r\n                        <mat-form-field style=\"width: 100%;\">\r\n                            <mat-label> Month System :</mat-label>\r\n                            <mat-select [(ngModel)]=\"package.month_system\" #month_system=\"ngModel\" name=\"month_system\"\r\n                                class=\"btn-group bootstrap-select bs-select\">\r\n                                <mat-option ng-reflect-value=\"28\" value=\"28\">28 Day</mat-option>\r\n                                <mat-option ng-reflect-value=\"\" value=\"\">Full Month</mat-option>\r\n                            </mat-select>\r\n                            <mat-error *ngIf=\"month_system.touched&&!month_system.valid&&month_system.errors?.required\">Month_system is <strong>required</strong></mat-error>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div  class=\"col-sm-3 col-md-3 col-lg-3 box\"> <!-- //Month Number -->\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" placeholder=\"Month Number\"\r\n                                [(ngModel)]=\"package.month_count\" #month_count=\"ngModel\" name=\"month_count\" required\r\n                                [min]=\"1\" [max]=\"12\" min=\"1\" max=\"12\" pattern=\"[0-9]*\" />\r\n                            <mat-error *ngIf=\"month_count.touched&&!month_count.valid&&month_count.errors?.required\">Month_Number is <strong>required</strong></mat-error>\r\n                            <mat-error *ngIf=\"month_count.touched&&!month_count.valid&&(month_count.errors?.min||month_count.errors?.max||month_count.errors?.pattern)\">Please enter <strong>valid number</strong></mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Month Number</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div  class=\"col-sm-3 col-md-3 col-lg-3 box\"> <!-- //Day Per Week -->\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" placeholder=\"Day Per Week\" #day_per_week=\"ngModel\"\r\n                                name=\"day_per_week\" required [min]=\"1\" [max]=\"7\" min=\"1\" max=\"7\" [(ngModel)]=\"package.day_per_week\"\r\n                                pattern=\"[1-7]*\" />\r\n                            <mat-error *ngIf=\"day_per_week.touched&&!day_per_week.valid&&day_per_week.errors?.required\">Day_per_week is <strong>required</strong></mat-error>\r\n                            <mat-error *ngIf=\"day_per_week.touched&&!day_per_week.valid&&(day_per_week.errors?.min||day_per_week.errors?.max||day_per_week.errors?.pattern)\">Please enter <strong>valid day</strong></mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Day Per Week</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div *ngIf=\"package.type=='private'\" class=\"col-sm-3 col-md-3 col-lg-3 box\"><!-- //session time -->\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" placeholder=\"Session Time  in minutes\"\r\n                                #session_time=\"ngModel\" name=\"session_time\" required [min]=\"1\" min=\"1\"\r\n                                [(ngModel)]=\"package.session_time\" />\r\n                            <!-- <mat-icon matSuffix>Min</mat-icon> -->\r\n                            <mat-error *ngIf=\"session_time.touched&&!session_time.valid&&session_time.errors?.required\"> Session_time is <strong>required</strong></mat-error>\r\n                            <mat-error *ngIf=\"session_time.touched&&!session_time.valid&&session_time.errors?.min\">Please enter <strong>valid session_time</strong></mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Session time in minutes</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group kt-form__group GroupFormCls\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                        <div>Membership Payment</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" #inputBox (change)='validateFees(fees)' placeholder=\"Fees\"\r\n                                [(ngModel)]=\"package.fees\" #fees=\"ngModel\" name=\"fees\" required min=\"1\" />\r\n                            <mat-error *ngIf=\"fees.touched&&!fees.valid&&fees.errors?.required\">Fees is <strong>required</strong></mat-error>\r\n                            <mat-error *ngIf=\"fees.touched&&!fees.valid&&fees.errors?.min\">Please enter <strong>valid fees</strong></mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Fees</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" placeholder=\"Taxs\" [(ngModel)]=\"package.taxs\"\r\n                                #taxs=\"ngModel\" name=\"taxs\" required [min]=\"0\" min=\"0\" [max]=\"100\" />\r\n                            <mat-icon matSuffix>%</mat-icon>\r\n                            <mat-error *ngIf=\"taxs.touched&&!taxs.valid&&taxs.errors?.required\">Taxs is\r\n                                <strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error *ngIf=\"taxs.touched&&!taxs.valid&&(taxs.errors?.min||taxs.errors?.max)\">Please\r\n                                enter\r\n                                <strong>valid taxs</strong>\r\n                            </mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Taxs</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"text\" placeholder=\"Payment strategy\" [(ngModel)]=\"package.payment_startegy\"\r\n                                #payment_strategy=\"ngModel\" name=\"payment_strategy\" required pattern=\"[^+!@^#$%),(&.`=_]*\" />\r\n                            <mat-error\r\n                                *ngIf=\"payment_strategy.touched&&!payment_strategy.valid&&payment_strategy.errors?.required\">\r\n                                Payment strategy is<strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error\r\n                                *ngIf=\"payment_strategy.touched&&!payment_strategy.valid&&payment_strategy.errors?.pattern\">\r\n                                Please enter\r\n                                <strong>valid Payment strategy</strong>\r\n                            </mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Payment strategy</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                   </div>\r\n                </div>\r\n\r\n                <div class=\"form-group kt-form__group GroupFormCls\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                        <div>Membership Discount Info</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" placeholder=\"Discount\" [(ngModel)]=\"package.discount\"\r\n                                #discount=\"ngModel\" name=\"discount\" required [min]=\"0\" [max]=\"100\" />\r\n                            <mat-icon matSuffix>%</mat-icon>\r\n                            <mat-error *ngIf=\"discount.touched&&!discount.valid&&discount.errors?.required\">Discount is\r\n                                <strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error\r\n                                *ngIf=\"discount.touched&&!discount.valid&&(discount.errors?.min||discount.errors?.max)\">\r\n                                Please enter <strong>valid discount</strong>\r\n                            </mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Discount</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input (focus)=\"picker1.open()\" matInput [min]=\"mindate\" [max]=\"package.end_discount\" [(ngModel)]=\"package.start_discount\"\r\n                                #start_discount=\"ngModel\" name=\"start_discount\" required [matDatepicker]=\"picker1\"\r\n                                placeholder=\"Start Discount\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                            <mat-datepicker disabled=\"false\" #picker1></mat-datepicker>\r\n                            <mat-error *ngIf=\"start_discount.touched&&!start_discount.valid&&start_discount.errors?.required\">\r\n                                Start_discount is <strong>required</strong>\r\n                            </mat-error>\r\n                            <!-- <mat-error *ngIf=\"start_discount.touched&&!start_discount.valid&&start_discount.errors?.min\">\r\n                                Please enter <strong>valid date</strong>\r\n                            </mat-error> -->\r\n\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Start Discount</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"example-full-width\">\r\n                            <input (focus)=\"picker.open()\" [min]=\"package.start_discount\" matInput [(ngModel)]=\"package.end_discount\"\r\n                                #end_discount=\"ngModel\" name=\"end_discount\" required [matDatepicker]=\"picker\"\r\n                                placeholder=\"End Discount\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker disabled=\"false\" #picker></mat-datepicker>\r\n\r\n                            <mat-error *ngIf=\"end_discount.touched&&!end_discount.valid&&end_discount.errors?.required\">End_discount is <strong>required</strong></mat-error>\r\n                            <mat-error *ngIf=\"end_discount.touched&&!end_discount.valid&&end_discount.errors?.min\">Please enter <strong>valid date</strong></mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>End Discount</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group kt-form__group GroupFormCls\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                        <div>Membership Renew Info</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" (change)='validateFees(renew_fees)'\r\n                                placeholder=\"Renew Fees\" [(ngModel)]=\"package.renew_fees\" #renew_fees=\"ngModel\"\r\n                                name=\"renew_fees\" required min=\"0\" />\r\n                            <mat-error *ngIf=\"renew_fees.touched&&!renew_fees.valid&&renew_fees.errors?.required\">Min Renew_fees is <strong>0</strong></mat-error>\r\n                            <mat-error *ngIf=\"renew_fees.touched&&!renew_fees.valid&&title.errors?.min\">Please enter <strong>valid renew_fees</strong></mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Renew Fees</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" placeholder=\"Renew Taxs\"\r\n                                [(ngModel)]=\"package.renew_taxs\" #renew_taxs=\"ngModel\" name=\"renew_taxs\" required\r\n                                min=\"0\" [max]=\"100\" />\r\n                            <mat-icon matSuffix>%</mat-icon>\r\n                            <mat-error *ngIf=\"renew_taxs.touched&&!renew_taxs.valid&&renew_taxs.errors?.required\">\r\n                                Renew_taxs is\r\n                                <strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error\r\n                                *ngIf=\"renew_taxs.touched&&!renew_taxs.valid&&(renew_taxs.errors?.min||renew_taxs.errors?.max)\">\r\n                                Please enter\r\n                                <strong>valid renew_taxs</strong>\r\n                            </mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Renew Taxs</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4 box\">\r\n                        <mat-form-field class=\"mat-form-field-fluid\">\r\n                            <input matInput type=\"number\" placeholder=\"Renew Discount\"\r\n                                [(ngModel)]=\"package.renew_discount\" #renew_discount=\"ngModel\" name=\"renew_discount\"\r\n                                required [min]='0' [max]=\"100\" min='0' max=\"100\" />\r\n                            <mat-icon matSuffix>%</mat-icon>\r\n                            <mat-error\r\n                                *ngIf=\"renew_discount.touched&&!renew_discount.valid&&renew_discount.errors?.required\">\r\n                                Renew_discount is\r\n                                <strong>required</strong>\r\n                            </mat-error>\r\n                            <mat-error\r\n                                *ngIf=\"renew_discount.touched&&!title.valid&&(renew_discount.errors?.min||renew_discount.errors?.max)\">\r\n                                Please enter\r\n                                <strong>valid renew_discount</strong>\r\n                            </mat-error>\r\n                            <!-- <mat-hint align=\"start\">Please enter\r\n                                <strong>Renew Discount</strong>\r\n                            </mat-hint> -->\r\n                        </mat-form-field>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- end renew -->\r\n                <div class=\"form-group kt-form__group GroupFormCls\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 center\" class=\"GroupFormHeaderCls\">\r\n                        <div>Membership Additional Info</div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-9 col-md-9 col-lg-9 box\">\r\n                        <div class=\"col-sm-12 col-md-12 col-lg-12 box\">\r\n                            <mat-form-field class=\"mat-form-field-fluid\">\r\n                                <input matInput placeholder=\"Additional Service\"\r\n                                    [(ngModel)]=\"package.additional_service\" #additional_service=\"ngModel\"\r\n                                    name=\"additional_service\"  />\r\n                                <!-- <mat-error>Additional Service is\r\n                                    <strong>required</strong>\r\n                                </mat-error> -->\r\n                                <!-- <mat-hint align=\"start\">Please enter\r\n                                    <strong>Additional Service</strong>\r\n                                </mat-hint> -->\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-12 col-lg-12 box\">\r\n                            <mat-form-field class=\"mat-form-field-fluid\">\r\n                                <input matInput placeholder=\"Additional Invitations\"\r\n                                    [(ngModel)]=\"package.additional_invitation\" #additional_invitation=\"ngModel\"\r\n                                    name=\"additional_invitation\" />\r\n\r\n                                <!-- <mat-error\r\n                                    *ngIf=\"additional_invitation.touched&&!additional_invitation.valid&&additional_invitation.errors?.required\">\r\n                                    Additional_invitation is\r\n                                    <strong>required</strong>\r\n                                </mat-error> -->\r\n\r\n                                <!-- <mat-hint align=\"start\">Please enter\r\n                                    <strong>Additional Invitations</strong>\r\n                                </mat-hint> -->\r\n                            </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-sm-12 col-md-12 col-lg-12 box\">\r\n                            <mat-form-field class=\"mat-form-field-fluid\">\r\n                                <input matInput placeholder=\"Additional Visits\"\r\n                                    [(ngModel)]=\"package.additional_visits\" #additional_visits=\"ngModel\"\r\n                                    name=\"additional_visits\"  />\r\n                                <!-- <mat-error>Additional Visits is\r\n                                    <strong>required</strong>\r\n                                </mat-error> -->\r\n\r\n                                <!-- <mat-hint align=\"start\">Please enter\r\n                                    <strong>Additional Visits</strong>\r\n                                </mat-hint> -->\r\n                            </mat-form-field>\r\n                        </div>\r\n                        </div>\r\n                        <div class=\"col-sm-3 col-md-3 col-lg-3 box\">\r\n                            <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\r\n\r\n                                <div class=\"fileinput-new thumbnail\" style=\"max-width: 150px; max-height: 150px; width: 150px; height: 150px;\">\r\n                                    <img *ngIf=\"imageprivew ==''\" style=\"max-width: 150px; max-height: 150px;\" src=\"http://www.placehold.it/300x300/EFEFEF/AAAAAA&amp;text=no+image\" alt=\"\">\r\n                                    <img *ngIf=\"imageprivew !=''\" style=\"max-width: 150px; max-height: 150px;\" src=\"{{imageprivew}}\" alt=\"\">\r\n                                </div>\r\n                                <div>\r\n                                    <label for=\"file-upload\"  style=\"width: 100%;\" class=\"custom-file-upload fileinput-new btn btn-success btn-s\">\r\n                                        <i class=\"fa fa-cloud-upload\"></i> Upload Image</label>\r\n                                    <input id=\"file-upload\" style=\"display: none;\" type=\"file\" name=\"file\" #input_image\r\n                                        (change)=\"handleUpload($event)\" ng2FileSelect [uploader]=\"uploader\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"kt-portlet__foot kt-portlet__foot--fit kt-portlet__no-border\">\r\n                <div class=\"kt-form__actions kt-form__actions--solid\">\r\n                    <div class=\"row text-right\">\r\n                        <div class=\"col-lg-12\">\r\n                            <button type=\"button\" mat-raised-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial\r\n                                matTooltip=\"Cancel changes\">\r\n                                Cancel\r\n                            </button>&nbsp;\r\n                            <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onSubmit(input_image.value)\"\r\n                                [disabled]=\"viewLoading\" matTooltip=\"Save changes\">\r\n                                Save\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/pages/membership/packages/packages-edit/packages-edit.dialog.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/pages/membership/packages/packages-edit/packages-edit.dialog.component.ts ***!
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
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var packages_model_1 = __webpack_require__(/*! ./packages.model */ "./src/app/views/pages/membership/packages/packages-edit/packages.model.ts");
var ng2_file_upload_1 = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
var _services_1 = __webpack_require__(/*! ../../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var ng2_img_max_1 = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");
var PackagesEditDialogComponent = /** @class */ (function () {
    function PackagesEditDialogComponent(dialogRef, data, snackBar, changeDetectref, store, ser, userservice, router, layoutUtilsService, _ng2ImgMax) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.changeDetectref = changeDetectref;
        this.store = store;
        this.ser = ser;
        this.userservice = userservice;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this._ng2ImgMax = _ng2ImgMax;
        this.mindate = new Date();
        this.hasFormErrors = false;
        this.errormessage = '';
        this.viewLoading = false;
        this.response = {};
        this.checkedFees = false;
        this.isLoading = false;
        this.token = JSON.parse(localStorage.getItem('user'))['token'];
        this.uploader = new ng2_file_upload_1.FileUploader({ url: this.ser.upload_file(), authToken: this.token, itemAlias: 'upload' });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PackagesEditDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('user')) {
            try {
                var user = JSON.parse(localStorage.getItem('user'));
                this.Url = (user['baseurl']).trim();
            }
            catch (error) { }
        }
        //console.log(this.mindate);
        this.dialogRef.disableClose = true;
        this.allbranch = [];
        this.allunits = [];
        this.imageprivew = '';
        var newPackage = new packages_model_1.Packages();
        this.package$ = rxjs_1.of(newPackage);
        this.package$.subscribe(function (res) {
            if (!res) {
                return;
            }
            _this.package = res;
        });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.getbranceandunits();
        if (this.data.id != undefined) {
            this.getPackagesById(this.data.id);
        }
        else {
            //this.package.start_discount = new Date().toISOString();
            this.package.taxs = "0";
            console.log(this.package);
        }
    };
    PackagesEditDialogComponent.prototype.branchOnchange = function (key) {
        this.isLoading = true;
        var allunits = [];
        if (this.allbrancandunits) {
            Object.values(this.allbrancandunits).forEach(function (units) {
                if (units['type'] == 'units' && units['branch_key'] == key)
                    allunits.push(units);
            });
            console.table(key);
            console.table(allunits);
            this.allunits = allunits;
            this.isLoading = false;
        }
    };
    /**
     * On destroy
     */
    PackagesEditDialogComponent.prototype.ngOnDestroy = function () {
        if (this.componentSubscriptions) {
            this.componentSubscriptions.unsubscribe();
        }
    };
    /**
     * Save data
     */
    PackagesEditDialogComponent.prototype.onSubmit = function (input_image) {
        var _this = this;
        var validationRet = this.checkValidation();
        if (validationRet == true) {
            this.viewLoading = true;
            if (this.data.id != undefined) {
                var _title = 'Edit Membership';
                var _description = 'Are you sure to Edit this Membership?';
                var _waitDesciption = 'Processing...';
                var dialogRef = this.layoutUtilsService.RenwElement(_title, _description, _waitDesciption);
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result) {
                        if (_this.checkedpermission('editmembership')) {
                            if (input_image != '') {
                                _this.uploader.uploadAll();
                                _this.uploader.onCompleteItem = function (item, response, status, headers) {
                                    var responsePath = JSON.parse(response);
                                    if (responsePath.result) {
                                        _this.package['image'] = responsePath.data;
                                        _this.ser.updatepackages(_this.data.id, _this.package).subscribe(function (res) { _this.redirctFunction(res['result']); });
                                    }
                                    else {
                                        _this.errormessage = "Error While Upload Image";
                                    }
                                };
                            }
                            else {
                                _this.ser.updatepackages(_this.data.id, _this.package).subscribe(function (res) { _this.redirctFunction(res['result']); });
                            }
                        }
                        else {
                            _this.openAlert();
                        }
                    }
                });
            }
            else {
                if (this.checkedpermission('addmembership')) {
                    if (this.imageprivew != '') {
                        this.uploader.uploadAll();
                        this.uploader.onCompleteItem = function (item, response, status, headers) {
                            var responsePath = JSON.parse(response);
                            if (responsePath.result) {
                                _this.package['image'] = responsePath.data;
                                _this.ser.addpackages(_this.package).subscribe(function (res) { _this.redirctFunction(res['result']); });
                            }
                            else {
                                document.querySelector('#alert').scrollIntoView({ behavior: 'smooth', block: 'center' });
                                _this.errormessage = "Error While Upload Image";
                            }
                        };
                    }
                    else {
                        this.ser.addpackages(this.package).subscribe(function (res) { _this.redirctFunction(res['result']); });
                    }
                }
            }
        }
        else {
            this.hasFormErrors = true;
            document.querySelector('#alert').scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.errormessage = "Please Enter all Required Fileds \n \n " + validationRet;
        }
    };
    PackagesEditDialogComponent.prototype.redirctFunction = function (done) {
        var _this = this;
        if (done) {
            this.viewLoading = false;
            this.dialogRef.close({});
            if (this.router.url == '/default/membership/Memberships')
                this.router.navigateByUrl('/default/membership/Membership', { skipLocationChange: true });
            else
                this.router.navigateByUrl('/default/membership/Memberships', { skipLocationChange: true });
            setTimeout(function () {
                _this.layoutUtilsService.showActionNotification("Membership Has Been Added Successfully", crud_1.MessageType.Update);
            }, 1000);
        }
        else {
            this.viewLoading = false;
            this.hasFormErrors = true;
            document.querySelector('#alert').scrollIntoView({ behavior: 'smooth', block: 'center' });
            this.errormessage = 'Error While Add This Membership';
        }
    };
    PackagesEditDialogComponent.prototype.checkValidation = function () {
        var message = [];
        if (!this.package.type || this.package.type == '')
            message.push(" Title ");
        if (this.package.type == 'private') {
            if (!this.package.session_time || this.package.session_time == '')
                message.push(" Session Time ");
            if (!this.package.month_system || this.package.month_system == '')
                message.push(" Month System ");
        }
        if (!this.package.day_per_week || this.package.day_per_week == '')
            message.push(" Day Per Week ");
        if (!this.package.month_count || this.package.month_count == '')
            message.push(" Month Number ");
        if (this.package.fees == 'NaN' || parseInt(this.package.fees) == 0 || this.package.fees == '')
            message.push(" Fees ");
        if (!this.package.taxs || this.package.taxs == '')
            message.push(" Taxs ");
        if (!this.package.payment_startegy || this.package.payment_startegy == '')
            message.push(" Payment Startegy ");
        if (message.length > 0)
            return "Invalid Membership : " + message.join();
        return true;
    };
    // private markFormGroupTouched(formGroup: FormGroup) {
    // 	(<any>Object).values(formGroup.controls).forEach(control => {
    // 	control.markAsTouched();
    // 	if (control.controls) {
    // 		this.markFormGroupTouched(control);
    // 	}
    // 	});
    // }
    //get branch and units
    PackagesEditDialogComponent.prototype.getbranceandunits = function () {
        var _this = this;
        if (this.checkedpermission('getallusers')) {
            this.isLoading = true;
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
                _this.isLoading = false;
                _this.changeDetectref.detectChanges();
            });
        }
    };
    //get packages data
    PackagesEditDialogComponent.prototype.getPackagesById = function (id) {
        var _this = this;
        if (this.checkedpermission('getmembership')) {
            this.ser.getpackagesById(id).subscribe(function (res) {
                console.log(res);
                if (res['result'] && res['data'].length > 0) {
                    //	this.Url=res['data']['Url'].trim();
                    if (typeof _this.package.start_discount != 'undefined') {
                        _this.mindate = new Date(_this.package.start_discount);
                    }
                    _this.package.branch_key = res['data'][0].branch_key;
                    _this.package.units_key = res['data'][0].units_key;
                    _this.package.title = res['data'][0].title;
                    _this.package.month_count = res['data'][0].month_count;
                    _this.package.month_system = res['data'][0].month_system;
                    _this.package.fees = res['data'][0].fees;
                    _this.package.taxs = res['data'][0].taxs;
                    _this.package.payment_startegy = res['data'][0].payment_startegy;
                    _this.package.type = res['data'][0].type;
                    _this.package.discount = res['data'][0].discount;
                    _this.package.start_discount = res['data'][0].start_discount;
                    _this.package.end_discount = res['data'][0].end_discount;
                    _this.package.renew_fees = res['data'][0].renew_fees;
                    _this.package.renew_taxs = res['data'][0].renew_taxs;
                    _this.package.renew_discount = res['data'][0].renew_discount;
                    _this.package.image = res['data'][0].image;
                    _this.package.discriptions = res['data'][0].discriptions;
                    _this.package.session_time = res['data'][0].session_time;
                    _this.package.day_per_week = res['data'][0].day_per_week;
                    _this.package.additional_visits = res['data'][0].additional_visits;
                    _this.package.additional_service = res['data'][0].additional_service;
                    _this.package.additional_invitation = res['data'][0].additional_invitation;
                    _this.imageprivew = (res['data'][0].image) ? _this.Url + res['data'][0].image : '';
                    _this.branchOnchange(_this.package.branch_key);
                    _this.changeDetectref.detectChanges();
                }
            });
        }
    };
    PackagesEditDialogComponent.prototype.openAlert = function () {
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
    PackagesEditDialogComponent.prototype.checkedpermission = function (key) {
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
    PackagesEditDialogComponent.prototype.test = function (event) {
        console.log(event);
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    PackagesEditDialogComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    PackagesEditDialogComponent.prototype.handleUpload = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            this.viewLoading = true;
            var reader = new FileReader();
            reader.onload = function (event) { _this.imageprivew = event.target.result; };
            reader.readAsDataURL(event.target.files[0]);
            this._ng2ImgMax.resizeImage(event.target.files[0], 600, 600).subscribe(function (result) {
                var newImage = new File([result], result.name);
                _this.uploader.clearQueue();
                _this.uploader.addToQueue([newImage]);
                //this.uploader.uploadAll();
                //console.log(result);
                reader.onload = function (event) { _this.imageprivew = event.target.result; _this.changeDetectref.detectChanges(); };
                reader.readAsDataURL(event.target.files[0]);
                _this.viewLoading = false;
            }, function (error) { return console.log(error); });
        }
    };
    /** UI */
    /**
     * Returns component title
     */
    PackagesEditDialogComponent.prototype.getTitle = function () { return (this.data.id != undefined) ? 'Edit Membership' : 'New Membership'; };
    PackagesEditDialogComponent.prototype.isTitleValid = function () {
        return true;
    };
    PackagesEditDialogComponent.prototype.validateFees = function (fees) {
        if (!parseFloat(fees))
            this.checkedFees = true;
    };
    __decorate([
        core_1.ViewChild('inputBox'),
        __metadata("design:type", core_1.ElementRef)
    ], PackagesEditDialogComponent.prototype, "inputBox", void 0);
    PackagesEditDialogComponent = __decorate([
        core_1.Component({
            selector: 'kt-packages-edit-dialog',
            template: __webpack_require__(/*! ./packages-edit.dialog.component.html */ "./src/app/views/pages/membership/packages/packages-edit/packages-edit.dialog.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ../../membership.component.css */ "./src/app/views/pages/membership/membership.component.css")]
        }),
        __param(1, core_1.Inject(material_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [material_1.MatDialogRef, Object, material_2.MatSnackBar,
            core_1.ChangeDetectorRef,
            store_1.Store, _services_1.MembershipService, _services_1.UserService, router_1.Router,
            crud_1.LayoutUtilsService,
            ng2_img_max_1.Ng2ImgMaxService])
    ], PackagesEditDialogComponent);
    return PackagesEditDialogComponent;
}());
exports.PackagesEditDialogComponent = PackagesEditDialogComponent;


/***/ }),

/***/ "./src/app/views/pages/membership/packages/packages-edit/packages.model.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/membership/packages/packages-edit/packages.model.ts ***!
  \*********************************************************************************/
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
var Packages = /** @class */ (function (_super) {
    __extends(Packages, _super);
    function Packages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Packages.prototype.clear = function () {
        this.club_key = '';
        this.branch_key = '';
        this.units_key = '';
        this.title = '';
        this.month_count = '';
        this.month_system = '';
        this.fees = '';
        this.taxs = '';
        this.payment_startegy = '';
        this.type = '';
        this.discount = '';
        this.start_discount = '';
        this.end_discount = '';
        this.image = '';
        this.discriptions = '';
        this.session_time = '';
        this.day_per_week = '';
        this.additional_visits = '';
        this.additional_service = '';
        this.additional_invitation = '';
        this.status = '';
    };
    return Packages;
}(crud_1.BaseModel));
exports.Packages = Packages;


/***/ }),

/***/ "./src/app/views/pages/membership/packages/packages.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/pages/membership/packages/packages.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\r\n\t<!-- PORTLET LOADING | Binded to TABLE Datasource -->\r\n\t<!-- See prop => '~/core/_crud/models/data-sources/_base.datasource.ts' (loading$) -->\r\n\t<kt-portlet-header [title]=\"''\" [class]=\"'kt-portlet__head--lg'\" >\r\n\t\t<ng-container ktPortletTools>\r\n\t\t\t<button (click)=\"addMembership()\" mat-raised-button color=\"primary\" matTooltip=\"Create New Membership\">New Membership</button>\r\n\t\t\t<!-- Buttons (Material Angular) | See off.documenations 'https://material.angular.io/components/button/overview' -->\r\n\t\t\t<!-- mat-raised-button | Rectangular contained button w/ elevation  -->\r\n\t\t</ng-container>\r\n\t</kt-portlet-header>\r\n\t<!-- end::Header -->\r\n\r\n\t<!-- start::Body (attribute: ktPortletBody) -->\r\n\t<div *ngIf=\"isLoading\" class=\"center\" style=\"padding: 150px;\">\r\n\t\t<mat-progress-spinner style=\"margin:0 auto;\" mode=\"indeterminate\" diameter=\"40\">\r\n\t\t</mat-progress-spinner>\r\n\t</div>\r\n\t<kt-portlet-body  *ngIf=\"!isLoading\">\r\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\r\n\t\t<div class=\"kt-form\">\r\n\t\t\t<!-- start::FILTERS -->\r\n\t\t\t<div class=\"kt-form__filtration\">\r\n\t\t\t\t<div class=\"row align-items-center\">\r\n\t\t\t\t\t<div class=\"col-md-4 kt-margin-bottom-10-mobile\">\r\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\r\n\t\t\t\t\t\t\t<input matInput placeholder=\"Search user\" [(ngModel)]=\"SearchKey\" #searchInput placeholder=\"Search then Press Enter\" (keyup.enter)=\"applyFilter()\">\r\n\t\t\t\t\t\t   <button mat-button matSuffix mat-icon-button aria-label=\"Clear\" *ngIf=\"SearchKey\" (click)=\"onSearchClear()\">\r\n\t\t\t\t\t\t\t   <mat-icon>close</mat-icon>\r\n\t\t\t\t\t\t   </button>\r\n\t\t\t\t\t\t\t<mat-hint align=\"start\"><strong>Search</strong> in all fields\r\n\t\t\t\t\t\t\t</mat-hint>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::FILTERS -->\r\n\r\n\t\t\t<!-- start::GROUP ACTIONS -->\r\n\t\t\t<!-- Group actions list: 'Delete selected' | 'Fetch selected' | 'Update status for selected' -->\r\n\t\t\t<!-- Group actions are shared for all LISTS -->\r\n\t\t\t<div class=\"row align-items-center collapse kt-form__group-actions kt-margin-top-20 kt-margin-bottom-20\"\r\n\t\t\t\t[ngClass]=\"{'show' : selection.selected.length > 0}\"><!-- We show 'Group Actions' div if smth are selected -->\r\n\t\t\t\t<div class=\"col-xl-12\">\r\n\t\t\t\t\t<div class=\"kt-form__group kt-form__group--inline\">\r\n\t\t\t\t\t\t<div class=\"kt-form__label kt-form__label-no-wrap\">\r\n\t\t\t\t\t\t\t<label class=\"kt--font-bold kt-font-danger-\">\r\n\t\t\t\t\t\t\t\t<span translate=\"ECOMMERCE.COMMON.SELECTED_RECORDS_COUNT\"></span> {{ selection.selected.length }}\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => function from codeBehind (users-list.component.ts file) -->\r\n\t\t\t\t\t\t\t<!-- selectedCountsTitle => just returns title of selected items count -->\r\n\t\t\t\t\t\t\t<!-- for example: Selected records count: 4 -->\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-form__control kt-form__group--inline\">\r\n\t\t\t\t\t\t\t<button (click)=\"fetchUsers()\" mat-raised-button matTooltip=\"Fetch selected users\"  class=\"mat-button-mt-4\">\r\n\t\t\t\t\t\t\t\t<mat-icon>clear_all</mat-icon>\r\n\t\t\t\t\t\t\t\tFetch Selected\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<!-- end::GROUP ACTIONS -->\r\n\t\t</div>\r\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\r\n\r\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\r\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\r\n\r\n\t\t<div class=\"mat-table__wrapper\">\r\n\t\t\t<mat-table class=\"lmat-elevation-z8\"\r\n\t\t\t\t#table\r\n\t\t\t\t[dataSource]=\"dataSource\"\r\n\t\t\t\tmatSort\r\n\t\t\t\t#sort1=\"matSort\"\r\n\t\t\t\tmatSortActive=\"id\"\r\n\t\t\t\tmatSortDirection=\"asc\"\r\n\t\t\t\tmatSortDisableClear>\r\n\t\t\t\t<!-- Checkbox Column -->\r\n\r\n\t\t\t\t<!-- Table with selection -->\r\n\t\t\t\t<!-- https://run.stackblitz.com/api/angular/v1?file=app%2Ftable-selection-example.ts -->\r\n\t\t\t\t<!-- <ng-container matColumnDef=\"select\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n\t\t\t\t\t\t\t[checked]=\"selection.hasValue() && isAllSelected()\"\r\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" class=\"mat-column-checkbox\">\r\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n\t\t\t\t\t\t</mat-checkbox>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container> -->\r\n\r\n\t\t\t<ng-container matColumnDef=\"id\">\r\n\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header>#</mat-header-cell>\r\n\t\t\t\t<mat-cell *matCellDef=\"let package\">{{package.increment}}</mat-cell>\r\n\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"title\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header >Title</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let package\" >{{package.title}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"discriptions\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header  >Discriptions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let package\"  >{{package.discriptions}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"type\">\r\n\t\t\t\t\t<!-- ATTRIBUTE mat-sort-header  for sorting | https://material.angular.io/components/sort/overview -->\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header >Type</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let package\" >{{package.type}}</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"status\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header >Status</mat-header-cell>\r\n\t\t\t\t\t<mat-cell  *matCellDef=\"let package\" >\r\n\t\t\t\t\t\t<span *ngIf=\"package.status=='true'\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--success kt-badge--wide\">Active</span>\r\n\t\t\t\t\t\t<span *ngIf=\"package.status=='false'\" class=\"kt-badge kt-badge--inline kt-badge--pill kt-badge--danger kt-badge--wide\">Deactive</span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<!-- image_url Column -->\r\n\t\t\t\t<ng-container matColumnDef=\"image\">\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Image </mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let package\">\r\n\t\t\t\t\t   <span *ngIf=\"package.image\">\r\n\t\t\t\t\t\t<img class=\"imagMaxWH\" src= \"{{Url}}/sm{{package.image.trim()}}\" alt=\"\">\r\n\t\t\t\t\t   </span>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t  </ng-container>\r\n\r\n\t\t\t\t<ng-container matColumnDef=\"actions\" >\r\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef style=\"max-width:100px\">Actions</mat-header-cell>\r\n\t\t\t\t\t<mat-cell *matCellDef=\"let package ;let rowIndex = index\" style=\"max-width:100px\">\r\n\t\t\t\t\t\t<button (click)=\"editpackages(package._id)\" mat-icon-button color=\"primary\"  matTooltip=\"Edit Packages\">\r\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\r\n\t\t\t\t\t\t</button>&nbsp;\r\n\r\n\t\t\t\t\t\t<mat-progress-spinner *ngIf=\"rowIndex == currentRowIndex\" style=\"margin:0 auto;\"mode=\"indeterminate\" diameter=\"30\">\r\n\t\t\t\t\t\t</mat-progress-spinner>\r\n\t\t\t\t\t\t<button *ngIf=\"package.status=='true' && rowIndex != currentRowIndex && checkedpermission('editmembership')\" mat-icon-button color=\"warn\" matTooltip=\"Deactive Packages\" type=\"button\"  (click)=\"deactivepackages(package._id,false ,rowIndex)\">\r\n\t\t\t\t\t\t\t<mat-icon>delete</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t<button *ngIf=\"package.status=='false' && rowIndex != currentRowIndex && checkedpermission('editmembership')\" mat-icon-button color=\"primary\" matTooltip=\"Active Packages\" type=\"button\"  (click)=\"deactivepackages(package._id,true ,rowIndex)\">\r\n\t\t\t\t\t\t\t<mat-icon>cached</mat-icon>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</mat-cell>\r\n\t\t\t\t</ng-container>\r\n                <ng-container matColumnDef=\"loading\">\r\n\t\t\t\t\t<mat-footer-cell *matFooterCellDef colspan=\"7\">\r\n\t\t\t\t\t</mat-footer-cell>\r\n\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n\r\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n\t\t\t\t<mat-footer-row *matFooterRowDef=\"['loading']\" [ngClass]=\"{'hide':checkedDataSource()}\">\r\n\t\t\t\t</mat-footer-row>\r\n\t\t\t</mat-table>\r\n\t\t\t<mat-paginator (page)=\"nextPage($event)\" [pageSizeOptions]=\"[5,10,25,100]\" [pageSize]=\"10\"></mat-paginator>\r\n        </div>\r\n\t\t<!-- end: BOTTOM -->\r\n\t</kt-portlet-body>\r\n\t<!-- end::Body -->\r\n</kt-portlet>\r\n"

/***/ }),

/***/ "./src/app/views/pages/membership/packages/packages.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/membership/packages/packages.component.ts ***!
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
// Services
var crud_1 = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
var _services_1 = __webpack_require__(/*! ../../../../core/auth/_services */ "./src/app/core/auth/_services/index.ts");
var packages_edit_dialog_component_1 = __webpack_require__(/*! ./packages-edit/packages-edit.dialog.component */ "./src/app/views/pages/membership/packages/packages-edit/packages-edit.dialog.component.ts");
var material_2 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var PackagesComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param store: Store<AppState>
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     */
    function PackagesComponent(activatedRoute, 
    // private store: Store<AppState>,
    router, layoutUtilsService, dialog, ser, snackBar, changeDetectorRefs) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.dialog = dialog;
        this.ser = ser;
        this.snackBar = snackBar;
        this.changeDetectorRefs = changeDetectorRefs;
        this.selection = new collections_1.SelectionModel(true, []);
        this.displayedColumns = ['id', 'title', 'discriptions', 'type', 'status', 'image', 'actions'];
        this.hasMessages = false;
        this.checkdata = false;
        // Subscriptions
        this.subscriptions = [];
        this.isLoading = false;
        this.currentRowIndex = -1;
    }
    ;
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    PackagesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('user')) {
            try {
                var user = JSON.parse(localStorage.getItem('user'));
                this.Url = (user['baseurl']).trim();
            }
            catch (error) {
            }
        }
        //this.dataSource=[];
        this.getallpackages();
    };
    // ngAfterViewInit() {
    // 	//this.getallpackages()
    // }
    /**
     * On Destroy
     */
    PackagesComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (el) { return el.unsubscribe(); });
    };
    PackagesComponent.prototype.addMembership = function () {
        if (this.checkedpermission('addmembership')) {
            var dialogRef = this.dialog.open(packages_edit_dialog_component_1.PackagesEditDialogComponent, { data: {} });
        }
        else {
            this.openAlert();
        }
    };
    /**
     * Close alert
     *
     * @param $event: Event
     */
    PackagesComponent.prototype.onAlertClose = function ($event) {
        this.hasMessages = false;
    };
    PackagesComponent.prototype.getallpackages = function (pages, prepage, search) {
        var _this = this;
        if (pages === void 0) { pages = 1; }
        if (prepage === void 0) { prepage = 30; }
        if (search === void 0) { search = null; }
        if (this.checkedpermission('getmembership')) {
            this.isLoading = true;
            this.ser.getallpackages(pages, prepage, search).subscribe(function (res) {
                console.log(res);
                if (res['result']) {
                    _this.dataSource = new material_1.MatTableDataSource(res['data']);
                    _this.dataLength = res['data'].length;
                    // Assign the paginator *after* dataSource is set
                    // this.dataSource.paginator = this.paginator;
                    _this.changeDetectorRefs.detectChanges();
                }
                _this.isLoading = false;
                _this.changeDetectorRefs.detectChanges();
            });
        }
        else {
            this.openAlert();
        }
    };
    PackagesComponent.prototype.editpackages = function (id) {
        if (this.checkedpermission('editmembership')) {
            var dialogRef = this.dialog.open(packages_edit_dialog_component_1.PackagesEditDialogComponent, { data: { id: id } });
        }
        else {
            this.openAlert();
        }
    };
    PackagesComponent.prototype.openAlert = function () {
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
    PackagesComponent.prototype.deactivepackages = function (id, status, rowIndex) {
        var _this = this;
        if (!status) {
            this.currentRowIndex = rowIndex;
            var _title = 'Deactive Membership';
            var _description = 'Are you sure to Deactive this Membership?';
            var _waitDesciption = 'Processing...';
            var dialogRef = this.layoutUtilsService.RenwElement(_title, _description, _waitDesciption);
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    _this.currentRowIndex = -1;
                    _this.changeDetectorRefs.detectChanges();
                    return;
                }
                else {
                    _this.activeDeactiveDB(id, status, rowIndex);
                }
            });
        }
        else {
            this.activeDeactiveDB(id, status, rowIndex);
        }
    };
    PackagesComponent.prototype.activeDeactiveDB = function (id, status, rowIndex) {
        var _this = this;
        var stateTxt = (status) ? 'Active' : 'Deactive';
        this.ser.updatepackages(id, { status: status }).subscribe(function (res) {
            if (res['result']) {
                // if (this.router.url == '/default/membership/packages')
                // 	this.router.navigateByUrl("/default/membership/package");
                // else this.router.navigateByUrl("/default/membership/packages");
                setTimeout(function () {
                    _this.layoutUtilsService.showActionNotification('Membership Has Been ' + stateTxt + 'd Successfully', crud_1.MessageType.Update);
                }, 1000);
                _this.dataSource["data"][rowIndex]["status"] = status.toString();
                _this.changeDetectorRefs.detectChanges();
            }
            else {
                setTimeout(function () {
                    _this.layoutUtilsService.showActionNotification('Error While ' + stateTxt + ' Membership', crud_1.MessageType.Update);
                }, 1000);
            }
            _this.currentRowIndex = -1;
            _this.changeDetectorRefs.detectChanges();
        });
    };
    PackagesComponent.prototype.refreshTable = function () {
        this.paginator._changePageSize(this.paginator.pageSize);
    };
    PackagesComponent.prototype.applyFilter = function () {
        //this.listData.filter=this.SearchKey.trim().toLowerCase()
        //console.log(this.searchInput.nativeElement.value)
        this.getallpackages(null, null, this.searchInput.nativeElement.value);
    };
    PackagesComponent.prototype.onSearchClear = function () {
        this.SearchKey = '';
        this.searchInput.nativeElement.value = '';
        this.applyFilter();
    };
    PackagesComponent.prototype.nextPage = function (event) {
        this.getallpackages(event.pageIndex + 1, event.pageSize, null);
    };
    //checked if there is inivitations or not
    PackagesComponent.prototype.checkedDataSource = function () {
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
    PackagesComponent.prototype.checkedpermission = function (key) {
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
        core_1.ViewChild(material_1.MatPaginator),
        __metadata("design:type", material_1.MatPaginator)
    ], PackagesComponent.prototype, "paginator", void 0);
    __decorate([
        core_1.ViewChild('searchInput'),
        __metadata("design:type", core_1.ElementRef)
    ], PackagesComponent.prototype, "searchInput", void 0);
    PackagesComponent = __decorate([
        core_1.Component({
            selector: 'kt-packages',
            template: __webpack_require__(/*! ./packages.component.html */ "./src/app/views/pages/membership/packages/packages.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [__webpack_require__(/*! ../membership.component.css */ "./src/app/views/pages/membership/membership.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router,
            crud_1.LayoutUtilsService,
            material_1.MatDialog,
            _services_1.MembershipService,
            material_2.MatSnackBar,
            core_1.ChangeDetectorRef])
    ], PackagesComponent);
    return PackagesComponent;
}());
exports.PackagesComponent = PackagesComponent;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-membership-membership-module.js.map