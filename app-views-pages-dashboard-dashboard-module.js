(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-dashboard-dashboard-module"],{

/***/ "./src/app/views/pages/dashboard/dashboard.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-3\">\r\n\t\t<kt-portlet [class]=\"' kt-portlet--border-bottom-brand'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t<kt-widget26 *ngIf=\"allDataFromReports\" [value]=\"allDataFromReports.Revenus\" [desc]=\"'Total Revenue'\" [options]=\"chartOptions1\"></kt-widget26>\r\n\t\t\t</kt-portlet-body>\r\n\t\t\t<kt-portlet-footer>\r\n\t\t\t\t<mat-form-field class=\"ml-3\">\r\n\t\t\t\t\t<mat-select [(value)]=\"model1\" [(ngModel)]=\"model1\" (ngModelChange)=\"filterrevenu($event)\" >\r\n\t\t\t\t\t\t<mat-option *ngIf=\"model1\" value=\"option1\">{{model1}}</mat-option>\r\n\r\n\t\t\t\t\t\t<mat-option aria-selected=\"true\" value=\"7\">Last 7 days</mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"30\" >Last 30 days </mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"90\" > Last 90 days</mat-option>\r\n\t\t\t\t\t\t<!-- <mat-divider></mat-divider>\r\n                        <sat-datepicker aria-disabled=\"true\" #picker1 [rangeMode]=\"true\"></sat-datepicker>\r\n\t\t\t\t\t\t<input  type=\"hidden\"  [satDatepicker]=\"picker1\"  (dateInput)=\"dateChange($event)\" >\r\n\t\t\t\t\t\t<mat-option value=\"picker1\" (click)=\"picker1.open()\">Custom </mat-option> -->\r\n\t\t\t\t\t</mat-select>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</kt-portlet-footer>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-3\">\r\n\t\t<kt-portlet [class]=\"' kt-portlet--border-bottom-brand'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t<kt-widget26 *ngIf=\"allDataFromReports\" [value]=\"allDataFromReports.membershipsolid\" [desc]=\"'Total Solid Membership'\" [options]=\"chartOptions3\"></kt-widget26>\r\n\t\t\t</kt-portlet-body>\r\n\t\t\t<kt-portlet-footer>\r\n\t\t\t\t<mat-form-field class=\"ml-3\">\r\n\t\t\t\t\t<mat-select [(value)]=\"model2\" [(ngModel)]=\"model2\" (ngModelChange)=\"filterSoldmembership($event)\">\r\n\t\t\t\t\t\t<mat-option *ngIf=\"model2\" value=\"option1\">{{model2}}</mat-option>\r\n\t\t\t\t\t\t<mat-option aria-selected=\"true\" value=\"7\">Last 7 days</mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"30\" >Last 30 days </mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"90\" > Last 90 days</mat-option>\r\n\t\t\t\t\t\t<!-- <mat-divider></mat-divider>\r\n                        <sat-datepicker aria-disabled=\"true\" #picker2 [rangeMode]=\"true\"></sat-datepicker>\r\n\t\t\t\t\t\t<input  type=\"hidden\"  [satDatepicker]=\"picker2\"  (dateInput)=\"dateChange($event)\" >\r\n\t\t\t\t\t\t<mat-option value=\"picker2\" (click)=\"picker2.open()\">Custom </mat-option> -->\r\n\t\t\t\t\t</mat-select>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</kt-portlet-footer>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-3\">\r\n\r\n\t\t<kt-portlet [class]=\"' kt-portlet--border-bottom-brand'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t<kt-widget26 *ngIf=\"allDataFromReports\" [value]=\"allDataFromReports.Revenus\" [desc]=\"'Total Profit'\" [options]=\"chartOptions3\"></kt-widget26>\r\n\t\t\t</kt-portlet-body>\r\n\t\t\t<kt-portlet-footer>\r\n\t\t\t\t<mat-form-field class=\"ml-3\">\r\n\t\t\t\t\t<mat-select [(value)]=\"model3\" [(ngModel)]=\"model3\" (ngModelChange)=\"filterrevenu($event)\" >\r\n\t\t\t\t\t\t<mat-option *ngIf=\"model\" value=\"option1\">{{model3}}</mat-option>\r\n\t\t\t\t\t\t<mat-option aria-selected=\"true\" value=\"7\">Last 7 days</mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"30\" >Last 30 days </mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"90\" > Last 90 days</mat-option>\r\n\t\t\t\t\t\t<!-- <mat-divider></mat-divider>\r\n                        <sat-datepicker aria-disabled=\"true\" #picker3 [rangeMode]=\"true\"></sat-datepicker>\r\n\t\t\t\t\t\t<input  type=\"hidden\"  [satDatepicker]=\"picker3\"  (dateInput)=\"dateChange($event)\" >\r\n\t\t\t\t\t\t<mat-option value=\"picker3\" (click)=\"picker3.open()\">Custom </mat-option> -->\r\n\t\t\t\t\t</mat-select>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</kt-portlet-footer>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-3\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--border-bottom-brand'\">\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t<kt-widget26 *ngIf=\"allDataFromReports\" [value]=\"allDataFromReports.Activity\" [desc]=\"'Activity'\" [options]=\"chartOptions2\">\r\n\t\t\t\t</kt-widget26>\r\n\t\t\t</kt-portlet-body>\r\n\t\t\t<kt-portlet-footer>\r\n\t\t\t\t<mat-form-field class=\"ml-3\">\r\n\t\t\t\t\t<mat-select [(value)]=\"model4\" [(ngModel)]=\"model4\" (ngModelChange)=\"filterActivity($event)\">\r\n\t\t\t\t\t\t<mat-option *ngIf=\"model4\" value=\"option1\">{{model4}}</mat-option>\r\n\t\t\t\t\t\t<mat-option aria-selected=\"true\" value=\"7\">Last 7 days</mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"30\" >Last 30 days </mat-option>\r\n\t\t\t\t\t\t<mat-option value=\"90\" > Last 90 days</mat-option>\r\n\t\t\t\t\t\t<!-- <mat-divider></mat-divider>\r\n                        <sat-datepicker aria-disabled=\"true\" #picker4 [rangeMode]=\"true\"></sat-datepicker>\r\n\t\t\t\t\t\t<input  type=\"hidden\"  [satDatepicker]=\"picker4\"  (dateInput)=\"dateChange($event)\" >\r\n\t\t\t\t\t\t<mat-option value=\"picker4\" (click)=\"picker4.open()\">Custom </mat-option> -->\r\n\t\t\t\t\t</mat-select>\r\n\t\t\t\t</mat-form-field>\r\n\t\t\t</kt-portlet-footer>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-8\">\r\n\r\n\t\t<kt-widget14></kt-widget14>\r\n\r\n\t</div>\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-4 \">\r\n\t\t<kt-widget12></kt-widget12>\r\n\t</div>\r\n\r\n</div>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-3\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-portlet [class]=\"' kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t<kt-widget26 *ngIf=\"allDataFromReports\" [value]=\"allDataFromReports.users\" [desc]=\"'Total users'\" [options]=\"chartOptions1\"></kt-widget26>\r\n\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t\t<kt-portlet-footer>\r\n\t\t\t\t\t\t<mat-form-field class=\"ml-3\">\r\n\t\t\t\t\t\t\t<mat-select [(value)]=\"model6\" [(ngModel)]=\"model6\" (ngModelChange)=\"filterUsers($event)\" >\r\n\t\t\t\t\t\t\t\t<mat-option *ngIf=\"model6\" value=\"option1\">{{model5}}</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option aria-selected=\"true\" value=\"7\">Last 7 days</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"30\" >Last 30 days </mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"90\" > Last 90 days</mat-option>\r\n\t\t\t\t\t\t\t\t<!-- <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t<sat-datepicker aria-disabled=\"true\" #picker6 [rangeMode]=\"true\"></sat-datepicker>                       \r\n\t\t\t\t\t\t\t\t<input  type=\"hidden\"  [satDatepicker]=\"picker6\"  (dateInput)=\"dateChange($event)\" >\r\n\t\t\t\t\t\t\t\t<mat-option value=\"picker6\" (click)=\"picker6.open()\">Custom </mat-option> -->\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</kt-portlet-footer>\r\n\t\t\t\t</kt-portlet>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t<kt-portlet [class]=\"' kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t<kt-widget26 *ngIf=\"allDataFromReports\" [value]=\"allDataFromReports.staff\" [desc]=\"'Staff'\" [options]=\"chartOptions1\"></kt-widget26>\r\n\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t\t<kt-portlet-footer>\r\n\t\t\t\t\t\t<mat-form-field class=\"ml-3\">\r\n\t\t\t\t\t\t\t<mat-select [(value)]=\"model7\" [(ngModel)]=\"model7\" (ngModelChange)=\"filterstaff($event)\" >\r\n\t\t\t\t\t\t\t\t<mat-option *ngIf=\"model7\" value=\"option1\">{{model5}}</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option aria-selected=\"true\" value=\"7\">Last 7 days</mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"30\" >Last 30 days </mat-option>\r\n\t\t\t\t\t\t\t\t<mat-option value=\"90\" > Last 90 days</mat-option>\r\n\t\t\t\t\t\t\t\t<!-- <mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t<sat-datepicker aria-disabled=\"true\" #picker7 [rangeMode]=\"true\"></sat-datepicker>\r\n\t\t\t\t\t\t\t\t<input  type=\"hidden\"  [satDatepicker]=\"picker7\"  (dateInput)=\"dateChange($event)\" >\r\n\t\t\t\t\t\t\t\t<mat-option value=\"picker5\" (click)=\"picker7.open()\">Custom </mat-option> -->\r\n\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t</kt-portlet-footer>\r\n\t\t\t\t</kt-portlet>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t\t<kt-portlet [class]=\"' kt-portlet--border-bottom-brand'\">\r\n\t\t\t\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fluid'\">\r\n\t\t\t\t\t\t\t<kt-widget26 *ngIf=\"allDataFromReports\" [value]=\"allDataFromReports.subscribedMembers\" [desc]=\"'Members'\" [options]=\"chartOptions1\"></kt-widget26>\r\n\t\t\t\t\t\t</kt-portlet-body>\r\n\t\t\t\t\t\t<kt-portlet-footer>\r\n\t\t\t\t\t\t\t<mat-form-field class=\"ml-3\">\r\n\t\t\t\t\t\t\t\t<mat-select [(value)]=\"model5\" [(ngModel)]=\"model5\" (ngModelChange)=\"filterSubscriber($event)\" >\r\n\t\t\t\t\t\t\t\t\t<mat-option *ngIf=\"model5\" value=\"option1\">{{model5}}</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option aria-selected=\"true\" value=\"7\">Last 7 days</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"30\" >Last 30 days </mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"90\" > Last 90 days</mat-option>\r\n\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\r\n\t\t\t\t\t\t\t\t\t<!-- <sat-datepicker aria-disabled=\"true\" #picker5 [rangeMode]=\"true\"></sat-datepicker>\r\n\t\t\t\t\t\t\t\t\t<input  type=\"hidden\"  [satDatepicker]=\"picker5\"  (dateInput)=\"dateChange($event)\" >\r\n\t\t\t\t\t\t\t\t\t<mat-option value=\"picker5\" (click)=\"picker5.open()\">Custom </mat-option> -->\r\n\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t</kt-portlet-footer>\r\n\t\t\t\t\t</kt-portlet>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-5 \">\r\n\r\n\r\n\t\t\t\t\t\t<kt-widget1></kt-widget1>\r\n\t\t\r\n\t</div>\r\n\t<div class=\"col-sm-12 col-md-12 col-lg-4\">\r\n\t\t<kt-widget5></kt-widget5>\r\n\t</div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-xl-8\">\r\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\r\n\t\t\t<kt-portlet-header [title]=\"'Agenda'\"\r\n\t\t\t\t[class]=\"'kt-portlet__head--lg kt-portlet__head--noborder kt-portlet__head--break-sm'\">\r\n\t\t\t\t<ng-container ktPortletTools>\r\n\r\n\t\t\t\t</ng-container>\r\n\t\t\t</kt-portlet-header>\r\n\t\t\t<kt-portlet-body [class]=\"'kt-portlet__body--fit'\">\r\n\t\t\t\t<kt-agenda></kt-agenda>\r\n\t\t\t</kt-portlet-body>\r\n\t\t</kt-portlet>\r\n\t</div>\r\n\t<div class=\"col-xl-4\">\r\n\t\t<div class=\"kt-portlet kt-portlet--height-fluid\">\r\n\t\t\t<div class=\"kt-portlet__head\">\r\n\t\t\t\t<div class=\"kt-portlet__head-label\">\r\n\t\t\t\t\t<h3 class=\"kt-portlet__head-title\">\r\n\t\t\t\t\t\tRecent Activities\r\n\t\t\t\t\t</h3>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"kt-portlet__body\">\r\n\t\t\t\t<!--Begin::Timeline 3 -->\r\n\t\t\t\t<div class=\"kt-timeline-v2\">\r\n\t\t\t\t\t<div class=\"kt-timeline-v2__items  kt-padding-top-25 kt-padding-bottom-30\">\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">10:00</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-danger\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text  kt-padding-top-5\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit,consectetur eiusmdd tempor<br>\r\n\t\t\t\t\t\t\t\tincididunt ut labore et dolore magna\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">12:45</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-success\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text kt-timeline-v2__item-text--bold\">\r\n\t\t\t\t\t\t\t\tAEOL Meeting With\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-list-pics kt-list-pics--sm kt-padding-l-20\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"./assets/media/users/100_4.jpg\" title=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"./assets/media/users/100_13.jpg\" title=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"./assets/media/users/100_11.jpg\" title=\"\"></a>\r\n\t\t\t\t\t\t\t\t<a href=\"#\"><img src=\"./assets/media/users/100_14.jpg\" title=\"\"></a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">14:00</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-brand\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text kt-padding-top-5\">\r\n\t\t\t\t\t\t\t\tMake Deposit <a href=\"#\" class=\"kt-link kt-link--brand kt-font-bolder\">USD 700</a> To\r\n\t\t\t\t\t\t\t\tESL.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">16:00</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-warning\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text kt-padding-top-5\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit,consectetur eiusmdd tempor<br>\r\n\t\t\t\t\t\t\t\tincididunt ut labore et dolore magna elit enim at minim<br>\r\n\t\t\t\t\t\t\t\tveniam quis nostrud\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">17:00</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-info\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text kt-padding-top-5\">\r\n\t\t\t\t\t\t\t\tPlaced a new order in <a href=\"#\"\r\n\t\t\t\t\t\t\t\t\tclass=\"kt-link kt-link--brand kt-font-bolder\">SIGNATURE MOBILE</a> marketplace.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">16:00</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-brand\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text kt-padding-top-5\">\r\n\t\t\t\t\t\t\t\tLorem ipsum dolor sit amit,consectetur eiusmdd tempor<br>\r\n\t\t\t\t\t\t\t\tincididunt ut labore et dolore magna elit enim at minim<br>\r\n\t\t\t\t\t\t\t\tveniam quis nostrud\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">17:00</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-danger\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text kt-padding-top-5\">\r\n\t\t\t\t\t\t\t\tReceived a new feedback on <a href=\"#\"\r\n\t\t\t\t\t\t\t\t\tclass=\"kt-link kt-link--brand kt-font-bolder\">FinancePro App</a> product.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"kt-timeline-v2__item\">\r\n\t\t\t\t\t\t\t<span class=\"kt-timeline-v2__item-time\">15:30</span>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-cricle\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-genderless kt-font-danger\"></i>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"kt-timeline-v2__item-text kt-padding-top-5\">\r\n\t\t\t\t\t\t\t\tNew notification message has been received on <a href=\"#\"\r\n\t\t\t\t\t\t\t\t\tclass=\"kt-link kt-link--brand kt-font-bolder\">LoopFin Pro</a> product.\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!--End::Timeline 3 -->\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep ngb-tabset > .nav-tabs {\n  display: none; }\n\n.rn-container {\n  margin: 0;\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL0U6XFxHRU1JTlxcZ3ltaW4tMi4wLXNhYXMtZnJvbnRlbmQvc3JjXFxhcHBcXHZpZXdzXFxwYWdlc1xcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyxhQUFhLEVBQUE7O0FBSWhCO0VBRUMsU0FBUztFQUNULFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcblx0OjpuZy1kZWVwIHtcclxuXHRcdG5nYi10YWJzZXQgPiAubmF2LXRhYnMge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4ucm4tY29udGFpbmVyXHJcbntcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
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
// Services
var layout_1 = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
var dashboard_service_1 = __webpack_require__(/*! ./dashboard.service */ "./src/app/views/pages/dashboard/dashboard.service.ts");
var DashboardComponent = /** @class */ (function () {
    //variables of widget
    function DashboardComponent(layoutConfigService, dashboradService, cahngeDetectref) {
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.dashboradService = dashboradService;
        this.cahngeDetectref = cahngeDetectref;
        this.model = '7';
        this.model1 = '7';
        this.model2 = '7';
        this.model3 = '7';
        this.model4 = '7';
        this.model5 = '7';
        this.model6 = '7';
        this.model7 = '7';
        //horizental bar
        this.chart = [];
        this.dashboradService.getAllreports().subscribe(function (res) {
            if (res) {
                _this.allDataFromReports = res['result'];
                console.log(_this.allDataFromReports);
            }
        });
    }
    DashboardComponent.prototype.dateChange = function (event) {
        this.model = new Date(event.value.begin).toDateString() + "-" + new Date(event.value.end).toDateString();
        console.log(this.model);
    };
    DashboardComponent.prototype.specifyValue = function (value) {
        this.model = value;
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.filterActivity = function (range) {
        var _this = this;
        console.log(range);
        this.dashboradService.getActivity({ 'rangeTime': range }).subscribe(function (res) {
            _this.allDataFromReports.Activity = res['Activity'];
            _this.cahngeDetectref.detectChanges();
        });
    };
    DashboardComponent.prototype.filterrevenu = function (range) {
        var _this = this;
        this.dashboradService.getrevenue({ 'rangeTime': range }, null).subscribe(function (res) {
            _this.allDataFromReports.Revenus = res['Revenus'];
            _this.cahngeDetectref.detectChanges();
        });
    };
    DashboardComponent.prototype.filterSoldmembership = function (range) {
        var _this = this;
        this.dashboradService.getSoldMembership({ 'rangeTime': range }).subscribe(function (res) {
            _this.allDataFromReports.membershipsolid = res['membershipsolid'];
            _this.cahngeDetectref.detectChanges();
        });
    };
    DashboardComponent.prototype.filterSubscriber = function (range) {
        var _this = this;
        this.dashboradService.getSubscriber({ 'rangeTime': range }).subscribe(function (res) {
            _this.allDataFromReports.subscribedMembers = res['subscribedMembers'];
            _this.cahngeDetectref.detectChanges();
        });
    };
    DashboardComponent.prototype.filterstaff = function (range) {
        var _this = this;
        this.dashboradService.getstaff({ 'rangeTime': range }).subscribe(function (res) {
            _this.allDataFromReports.staff = res['staff'];
            _this.cahngeDetectref.detectChanges();
        });
    };
    DashboardComponent.prototype.filterDiscount = function (range) {
        var _this = this;
        this.dashboradService.getDiscount({ 'rangeTime': range }).subscribe(function (res) {
            _this.allDataFromReports.Activity = res['discount'];
            _this.cahngeDetectref.detectChanges();
        });
    };
    DashboardComponent.prototype.filterUsers = function (range) {
        var _this = this;
        this.dashboradService.getMembers({ 'rangeTime': range }).subscribe(function (res) {
            _this.allDataFromReports.users = res['discount'];
            _this.cahngeDetectref.detectChanges();
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [layout_1.LayoutConfigService, dashboard_service_1.DashboardService, core_1.ChangeDetectorRef])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.module.ts ***!
  \***********************************************************/
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
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// NgBootstrap
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
// Core Module
// import { SatDatepickerModule } from 'saturn-datepicker';
// import { SatNativeDateModule } from 'saturn-datepicker';
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var core_module_1 = __webpack_require__(/*! ../../../core/core.module */ "./src/app/core/core.module.ts");
var partials_module_1 = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
//import {AmexioMapModule, AmexioWidgetModule, MapLoaderService} from "amexio-ng-extensions";
var dashboard_component_1 = __webpack_require__(/*! ./dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
var reschedual_module_1 = __webpack_require__(/*! ../reschedual/reschedual.module */ "./src/app/views/pages/reschedual/reschedual.module.ts");
var ej2_angular_maps_1 = __webpack_require__(/*! @syncfusion/ej2-angular-maps */ "./node_modules/@syncfusion/ej2-angular-maps/@syncfusion/ej2-angular-maps.es5.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                ej2_angular_maps_1.MapsModule,
                forms_1.FormsModule,
                // SatDatepickerModule,
                // SatNativeDateModule,
                material_1.MatDividerModule,
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
                material_1.MatTreeModule,
                common_1.CommonModule,
                reschedual_module_1.ReschedualModule,
                partials_module_1.PartialsModule,
                //AmexioMapModule,AmexioWidgetModule,
                core_module_1.CoreModule,
                ng_bootstrap_1.NgbModule,
                //  AmexioWidgetModule,
                router_1.RouterModule.forChild([
                    {
                        path: '',
                        component: dashboard_component_1.DashboardComponent,
                        data: { title: 'dasboard' },
                    },
                ]),
            ],
            providers: [],
            declarations: [
                dashboard_component_1.DashboardComponent
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());
exports.DashboardModule = DashboardModule;


/***/ })

}]);
//# sourceMappingURL=app-views-pages-dashboard-dashboard-module.js.map