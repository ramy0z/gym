(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-views-pages-members-members-module~app-views-themes-default-theme-module"],{

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
            return _this.url;
        });
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

module.exports = "<link rel=\"stylesheet\" href=\"https://unpkg.com/angular-calendar@0.27.8/css/angular-calendar.css\">\r\n<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div class=\"btn btn-primary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n        Previous\r\n      </div>\r\n      <div class=\"btn btn-outline-secondary\" mwlCalendarToday [(viewDate)]=\"viewDate\">\r\n        Today\r\n      </div>\r\n      <div class=\"btn btn-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\">\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <!-- <div\r\n    class=\"btn btn-primary\"\r\n    (click)=\"setView(CalendarView.Month)\"\r\n    [class.active]=\"view === CalendarView.Month\"\r\n  >\r\n    Month\r\n  </div> -->\r\n      <!-- <div\r\n    class=\"btn btn-primary\"\r\n    (click)=\"setView(CalendarView.Week)\"\r\n    [class.active]=\"view === CalendarView.Week\"\r\n  >\r\n    Week\r\n  </div> -->\r\n\r\n      <div class=\"btn btn-primary\" (click)=\"SaveAttendance()\" [class.active]=\"true\">\r\n        Save\r\n      </div>\r\n      <!-- <div\r\n    class=\"btn btn-primary\"\r\n    (click)=\"setView(CalendarView.Day)\"\r\n    [class.active]=\"view === CalendarView.Day\"\r\n  >\r\n    Day\r\n  </div> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<br />\r\n\r\n<div *ngIf=\"isLoading\" class=\"center\" style=\"padding: 150px;\">\r\n    <mat-progress-spinner style=\"margin:0 auto;\" mode=\"indeterminate\" diameter=\"40\">\r\n    </mat-progress-spinner>\r\n</div>\r\n<div *ngIf=\"!isLoading\" [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view *ngSwitchCase=\"CalendarView.Month\" [viewDate]=\"viewDate\" [events]=\"events\"\r\n    [refresh]=\"refresh\" (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view *ngSwitchCase=\"CalendarView.Week\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\"\r\n    [weekStartsOn]=\"startDay\" (eventClicked)=\"handleEvent('Clicked', $event.event)\">\r\n  </mwl-calendar-week-view>\r\n  <!-- <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view> -->\r\n</div>\r\n\r\n\r\n<!-- <ng-template #modalContent let-close=\"close\">\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\">Event action occurred</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <div>\r\n      Action:\r\n      <pre>{{ modalData?.action }}</pre>\r\n    </div>\r\n    <div>\r\n      Event:\r\n      <pre>{{ modalData?.event | json }}</pre>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">\r\n      OK\r\n    </button>\r\n  </div>\r\n</ng-template> -->"

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
    function MyPageComponent(modal, router, service, Membershipservice, layoutUtilsService, route, ChangeDetectorRef) {
        var _this = this;
        this.modal = modal;
        this.router = router;
        this.service = service;
        this.Membershipservice = Membershipservice;
        this.layoutUtilsService = layoutUtilsService;
        this.route = route;
        this.ChangeDetectorRef = ChangeDetectorRef;
        this.view = angular_calendar_1.CalendarView.Week;
        this.CalendarView = angular_calendar_1.CalendarView;
        this.viewDate = new Date();
        this.startDay = 1;
        this.refresh = new rxjs_1.Subject();
        this.activeDayIsOpen = true;
        this.isLoading = false;
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
        this.isLoading = true;
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
            _this.isLoading = false;
            if (!_this.ChangeDetectorRef.destroyed) {
                _this.ChangeDetectorRef.detectChanges();
                // do other tasks
            }
        });
    };
    /*
      get Activity By Id
    */
    MyPageComponent.prototype.getActivity = function (_package) {
        var _this = this;
        this.isLoading = true;
        this.service.getActivity(_package).subscribe(function (res) {
            console.log('resut', res);
            if (res['result']) {
                _this.view = angular_calendar_1.CalendarView.Month;
                console.log('resut', res['data'][0].schedual_time);
                _this.drawOnCalender(res['data'][0].schedual_time, true);
            }
            _this.isLoading = false;
            if (!_this.ChangeDetectorRef.destroyed) {
                _this.ChangeDetectorRef.detectChanges();
                // do other tasks
            }
        });
    };
    MyPageComponent.prototype.SaveAttendance = function () {
        var _this = this;
        this.isLoading = true;
        if (this.type == 'activity')
            this.route.navigate(['default/members/add', this.user_key, 'payment-cart']);
        else {
            var times = new Array();
            Object.values(this.selectedTimes).forEach(function (item) {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        item = { from: item['from'], to: item['to'] };
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
                _this.isLoading = false;
                if (!_this.ChangeDetectorRef.destroyed) {
                    _this.ChangeDetectorRef.detectChanges();
                    // do other tasks
                }
                if (res['result']) {
                    _this.layoutUtilsService.showActionNotification("reservation has sucessfully added", crud_1.MessageType.Create, 5000, true, true);
                    _this.route.navigate(['default/members/add', _this.user_key, 'payment-cart', _this.se_id]);
                }
                else {
                    alert(res['error']);
                }
            });
        }
    };
    MyPageComponent.prototype.drawOnCalender = function (data, activity) {
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
            _services_1.SchedualService, members_service_1.MembersService,
            crud_1.LayoutUtilsService, router_2.Router,
            core_1.ChangeDetectorRef])
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
var material_1 = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
                }),
                material_1.MatProgressSpinnerModule
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