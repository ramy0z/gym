(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-views-pages-dashboard-dashboard-module~app-views-themes-default-theme-module"],{

/***/ "./src/app/views/pages/reschedual/reschedual.component.html":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/reschedual/reschedual.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/angular-calendar@0.27.8/css/angular-calendar.css\">\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div> -->\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div> -->\r\n\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"SaveAttendance()\"\r\n        [class.active]=\"true\"\r\n      >\r\n        Save\r\n      </div>\r\n      <!-- <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div [ngSwitch]=\"view\">\r\n  <!-- <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view> -->\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [weekStartsOn]=\"startDay\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event,$event)\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <!-- <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/pages/reschedual/reschedual.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/reschedual/reschedual.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcGFnZXMvcmVzY2hlZHVhbC9FOlxcR0VNSU5cXGd5bWluLTIuMC1zYWFzLWZyb250ZW5kL3NyY1xcYXBwXFx2aWV3c1xccGFnZXNcXHJlc2NoZWR1YWxcXHJlc2NoZWR1YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx5QkFBeUI7RUFDekIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmVzY2hlZHVhbC9yZXNjaGVkdWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/reschedual/reschedual.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/reschedual/reschedual.component.ts ***!
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ng_bootstrap_1 = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var dashboard_service_1 = __webpack_require__(/*! ../dashboard/dashboard.service */ "./src/app/views/pages/dashboard/dashboard.service.ts");
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
var ReschedualComponent = /** @class */ (function () {
    function ReschedualComponent(dialog, modal, service) {
        this.dialog = dialog;
        this.modal = modal;
        this.service = service;
        this.view = angular_calendar_1.CalendarView.Week;
        this.CalendarView = angular_calendar_1.CalendarView;
        this.viewDate = new Date();
        this.startDay = 1;
        this.refresh = new rxjs_1.Subject();
        this.activeDayIsOpen = true;
        this.options = '';
        this.membership_id = '5c8915c0faed181b68b965c9';
        this.units_key = '01a3a4e66c98b32e';
        this.start_date = new Date(1559692800000);
        this.user_key = '01a3a4e66c98b32e';
        this.trainer_key = '030f82f93227d12e';
        this.events = [];
        this.selectedTimes = {};
        this.viewAttendance(7);
    }
    ReschedualComponent.prototype.handleEvent = function (action, event) {
        // this.modalData = { event, action };
        // this.modal.open(this.modalContent, { size: 'lg' });
        // console.log(event);
        // const dialogRef = this.dialog.open(ReschedualEditDialogComponent, { data: {} });
    };
    /*
      get all schedual time
    */
    ReschedualComponent.prototype.viewAttendance = function (range) {
        var _this = this;
        // this.startDay = startday.getDay();
        // this.viewDate = startday;
        // var start_date = startday.getTime();
        this.service.getClubAgenda({ 'rangeTime': range }).subscribe(function (res) {
            console.log(res);
            if (res['result']) {
                _this.refresh.next();
                _this.events = [];
                console.log(res['result']);
                for (var i = 0; i < res['result'].length; i++) {
                    var start = new Date(res['result'][i].from);
                    var end = new Date(res['result'][i].to);
                    var title = _this.gethoursandminutes(start) + " to " + _this.gethoursandminutes(end) + "\n                 member name:" + res['result'][i].username + "\n                trainer name:" + res['result'][i].trainername + "\n                unit name :res['result'][i].unitsname}\n                ";
                    var color = colors.blue;
                    var id = res['result'][i]._id;
                    if (res['result'][i].status == "reschedual")
                        color = colors.yellow;
                    //if(i%2) var color = colors.blue;else var color = colors.yellow;
                    _this.events.push({ start: start, end: end, title: title, color: color, id: id });
                }
            }
        });
    };
    ReschedualComponent.prototype.SaveAttendance = function () {
        //   // var times =new Array();
        //   // Object.values(this.selectedTimes).forEach(async function(item){
        //   //   times.push(item);
        //   // });
        //   // var data = {units_key:this.units_key,package:this.membership_id,start_date:this.start_date,recervation:times}
        //   // this.service.addAttendance(data).subscribe(
        //   //   res => {
        //   //     if (res['result']) {
        //         // action after recervation
        //       }
        //     }
        //   )
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
    ReschedualComponent.prototype.objectSize = function (obj) {
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
    ], ReschedualComponent.prototype, "modalContent", void 0);
    ReschedualComponent = __decorate([
        core_1.Component({
            selector: 'kt-agenda',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: __webpack_require__(/*! ./reschedual.component.html */ "./src/app/views/pages/reschedual/reschedual.component.html"),
            styles: [__webpack_require__(/*! ./reschedual.component.scss */ "./src/app/views/pages/reschedual/reschedual.component.scss")]
        }),
        __metadata("design:paramtypes", [material_1.MatDialog, ng_bootstrap_1.NgbModal, dashboard_service_1.DashboardService])
    ], ReschedualComponent);
    return ReschedualComponent;
}());
exports.ReschedualComponent = ReschedualComponent;


/***/ }),

/***/ "./src/app/views/pages/reschedual/reschedual.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/pages/reschedual/reschedual.module.ts ***!
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
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var angularx_flatpickr_1 = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
var angular_calendar_1 = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
var date_fns_1 = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
var reschedual_component_1 = __webpack_require__(/*! ./reschedual.component */ "./src/app/views/pages/reschedual/reschedual.component.ts");
//import { ReschedualEditDialogComponent } from '../members/member-profile/reschedule/rechedual-edit/rechedual-edit.dialog.component';
// Material
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var ReschedualModule = /** @class */ (function () {
    function ReschedualModule() {
    }
    ReschedualModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
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
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                material_1.MatSortModule,
                material_1.MatCheckboxModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatSnackBarModule,
                material_1.MatExpansionModule,
                material_1.MatTabsModule,
                material_1.MatTooltipModule,
                material_1.MatDialogModule,
                angularx_flatpickr_1.FlatpickrModule.forRoot(),
                angular_calendar_1.CalendarModule.forRoot({
                    provide: angular_calendar_1.DateAdapter,
                    useFactory: date_fns_1.adapterFactory
                })
            ],
            // entryComponents: [
            // 	ReschedualEditDialogComponent
            // ],
            declarations: [reschedual_component_1.ReschedualComponent],
            exports: [reschedual_component_1.ReschedualComponent]
        })
    ], ReschedualModule);
    return ReschedualModule;
}());
exports.ReschedualModule = ReschedualModule;


/***/ })

}]);
//# sourceMappingURL=default~app-views-pages-dashboard-dashboard-module~app-views-themes-default-theme-module.js.map