(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{dB9c:function(e,t,n){"use strict";n.r(t);var r=n("wj3C"),o=n.n(r),i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function s(e,t){function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function c(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,a)}c((r=r.apply(e,t||[])).next())})}function u(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(o=(o=s.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),s=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return s}var f,l,h,p=n("zVF4"),b=((f={})["only-available-in-window"]="This method is available in a Window context.",f["only-available-in-sw"]="This method is available in a service worker context.",f["should-be-overriden"]="This method should be overriden by extended classes.",f["bad-sender-id"]="Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().",f["permission-default"]="The required permissions were not granted and dismissed instead.",f["permission-blocked"]="The required permissions were not granted and blocked instead.",f["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",f["notifications-blocked"]="Notifications have been blocked.",f["failed-serviceworker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",f["sw-registration-expected"]="A service worker registration was the expected input.",f["get-subscription-failed"]="There was an error when trying to get any existing Push Subscriptions.",f["invalid-saved-token"]="Unable to access details of the saved token.",f["sw-reg-redundant"]="The service worker being used for push was made redundant.",f["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",f["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",f["token-subscribe-no-push-set"]="FCM returned an invalid response when getting an FCM token.",f["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",f["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",f["token-update-no-token"]="FCM returned no token when updating the user to push.",f["use-sw-before-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",f["invalid-delete-token"]="You must pass a valid token into deleteToken(), i.e. the token from getToken().",f["delete-token-not-found"]="The deletion attempt for token could not be performed as the token was not found.",f["delete-scope-not-found"]="The deletion attempt for service worker scope could not be performed as the scope was not found.",f["bg-handler-function-expected"]="The input to setBackgroundMessageHandler() must be a function.",f["no-window-client-to-msg"]="An attempt was made to message a non-existant window client.",f["unable-to-resubscribe"]="There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}",f["no-fcm-token-for-resubscribe"]="Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.",f["failed-to-delete-token"]="Unable to delete the currently saved token.",f["no-sw-in-reg"]="Even though the service worker registration was successful, there was a problem accessing the service worker itself.",f["incorrect-gcm-sender-id"]="Please change your web app manifest's 'gcm_sender_id' value to '103953800507' to use Firebase messaging.",f["bad-scope"]="The service worker scope must be a string with at least one character.",f["bad-vapid-key"]="The public VAPID key is not a Uint8Array with 65 bytes.",f["bad-subscription"]="The subscription must be a valid PushSubscription.",f["bad-token"]="The FCM Token used for storage / lookup was not a valid token string.",f["bad-push-set"]="The FCM push set used for storage / lookup was not not a valid push set string.",f["failed-delete-vapid-key"]="The VAPID key could not be deleted.",f["invalid-public-vapid-key"]="The public VAPID key must be a string.",f["use-public-key-before-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",f["public-vapid-key-decryption-failed"]="The public VAPID key did not equal 65 bytes when decrypted.",f),g=new p.ErrorFactory("messaging","Messaging",b),w=new Uint8Array([4,51,148,247,223,161,235,177,220,3,162,94,21,113,219,72,211,46,237,237,178,52,219,183,71,58,12,143,196,204,225,111,60,140,132,223,171,182,102,62,242,12,212,139,254,227,249,118,47,20,28,99,8,106,111,45,177,26,149,176,206,55,192,156,110]),v="https://fcm.googleapis.com";function y(e,t){if(null==e||null==t)return!1;if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(var n=new DataView(e),r=new DataView(t),o=0;o<e.byteLength;o++)if(n.getUint8(o)!==r.getUint8(o))return!1;return!0}function m(e){return function(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(d(arguments[t]));return e}(t)))}(e).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}!function(e){e.TYPE_OF_MSG="firebase-messaging-msg-type",e.DATA="firebase-messaging-msg-data"}(l||(l={})),function(e){e.PUSH_MSG_RECEIVED="push-msg-received",e.NOTIFICATION_CLICKED="notification-clicked"}(h||(h={}));var k=function(){function e(){}return e.prototype.getToken=function(e,t,n){return c(this,void 0,void 0,function(){var r,o,i,s,a,c,d,f;return u(this,function(u){switch(u.label){case 0:r=m(t.getKey("p256dh")),o=m(t.getKey("auth")),i="authorized_entity="+e+"&endpoint="+t.endpoint+"&encryption_key="+r+"&encryption_auth="+o,y(n.buffer,w.buffer)||(s=m(n),i+="&application_pub_key="+s),(a=new Headers).append("Content-Type","application/x-www-form-urlencoded"),c={method:"POST",headers:a,body:i},u.label=1;case 1:return u.trys.push([1,4,,5]),[4,fetch(v+"/fcm/connect/subscribe",c)];case 2:return[4,u.sent().json()];case 3:return d=u.sent(),[3,5];case 4:throw f=u.sent(),g.create("token-subscribe-failed",{errorInfo:f});case 5:if(d.error)throw g.create("token-subscribe-failed",{errorInfo:d.error.message});if(!d.token)throw g.create("token-subscribe-no-token");if(!d.pushSet)throw g.create("token-subscribe-no-push-set");return[2,{token:d.token,pushSet:d.pushSet}]}})})},e.prototype.updateToken=function(e,t,n,r,o){return c(this,void 0,void 0,function(){var i,s,a,c,d,f,l,h;return u(this,function(u){switch(u.label){case 0:i=m(r.getKey("p256dh")),s=m(r.getKey("auth")),a="push_set="+n+"&token="+t+"&authorized_entity="+e+"&endpoint="+r.endpoint+"&encryption_key="+i+"&encryption_auth="+s,y(o.buffer,w.buffer)||(c=m(o),a+="&application_pub_key="+c),(d=new Headers).append("Content-Type","application/x-www-form-urlencoded"),f={method:"POST",headers:d,body:a},u.label=1;case 1:return u.trys.push([1,4,,5]),[4,fetch(v+"/fcm/connect/subscribe",f)];case 2:return[4,u.sent().json()];case 3:return l=u.sent(),[3,5];case 4:throw h=u.sent(),g.create("token-update-failed",{errorInfo:h});case 5:if(l.error)throw g.create("token-update-failed",{errorInfo:l.error.message});if(!l.token)throw g.create("token-update-no-token");return[2,l.token]}})})},e.prototype.deleteToken=function(e,t,n){return c(this,void 0,void 0,function(){var r,o,i,s,a;return u(this,function(c){switch(c.label){case 0:r="authorized_entity="+e+"&token="+t+"&pushSet="+n,(o=new Headers).append("Content-Type","application/x-www-form-urlencoded"),i={method:"POST",headers:o,body:r},c.label=1;case 1:return c.trys.push([1,4,,5]),[4,fetch(v+"/fcm/connect/unsubscribe",i)];case 2:return[4,c.sent().json()];case 3:if((s=c.sent()).error)throw g.create("token-unsubscribe-failed",{errorInfo:s.error.message});return[3,5];case 4:throw a=c.sent(),g.create("token-unsubscribe-failed",{errorInfo:a});case 5:return[2]}})})},e}();function T(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}var S=function(){function e(){this.dbPromise=null}return e.prototype.get=function(e){return this.createTransaction(function(t){return t.get(e)})},e.prototype.getIndex=function(e,t){return this.createTransaction(function(n){return n.index(e).get(t)})},e.prototype.put=function(e){return this.createTransaction(function(t){return t.put(e)},"readwrite")},e.prototype.delete=function(e){return this.createTransaction(function(t){return t.delete(e)},"readwrite")},e.prototype.closeDatabase=function(){return c(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return this.dbPromise?[4,this.dbPromise]:[3,2];case 1:e.sent().close(),this.dbPromise=null,e.label=2;case 2:return[2]}})})},e.prototype.createTransaction=function(e,t){return void 0===t&&(t="readonly"),c(this,void 0,void 0,function(){var n,r,o,i;return u(this,function(s){switch(s.label){case 0:return[4,this.getDb()];case 1:return n=s.sent(),r=n.transaction(this.objectStoreName,t),o=r.objectStore(this.objectStoreName),[4,_(e(o))];case 2:return i=s.sent(),[2,new Promise(function(e,t){r.oncomplete=function(){e(i)},r.onerror=function(){t(r.error)}})]}})})},e.prototype.getDb=function(){var e=this;return this.dbPromise||(this.dbPromise=new Promise(function(t,n){var r=indexedDB.open(e.dbName,e.dbVersion);r.onsuccess=function(){t(r.result)},r.onerror=function(){e.dbPromise=null,n(r.error)},r.onupgradeneeded=function(t){return e.onDbUpgrade(r,t)}})),this.dbPromise},e}();function _(e){return new Promise(function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}})}var P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_token_details_db",t.dbVersion=3,t.objectStoreName="fcm_token_object_Store",t}return s(t,e),t.prototype.onDbUpgrade=function(e,t){var n=e.result;switch(t.oldVersion){case 0:(r=n.createObjectStore(this.objectStoreName,{keyPath:"swScope"})).createIndex("fcmSenderId","fcmSenderId",{unique:!1}),r.createIndex("fcmToken","fcmToken",{unique:!0});case 1:!function(){var e=indexedDB.open("undefined");e.onerror=function(e){},e.onsuccess=function(t){!function(e){if(e.objectStoreNames.contains("fcm_token_object_Store")){var t=e.transaction("fcm_token_object_Store").objectStore("fcm_token_object_Store"),n=new k,r=t.openCursor();r.onerror=function(e){console.warn("Unable to cleanup old IDB.",e)},r.onsuccess=function(){var t=r.result;if(t){var o=t.value;n.deleteToken(o.fcmSenderId,o.fcmToken,o.fcmPushSet),t.continue()}else e.close(),indexedDB.deleteDatabase("undefined")}}}(e.result)}}();case 2:var r,o=(r=e.transaction.objectStore(this.objectStoreName)).openCursor();o.onsuccess=function(){var e=o.result;if(e){var t=e.value,n=a({},t);t.createTime||(n.createTime=Date.now()),"string"==typeof t.vapidKey&&(n.vapidKey=T(t.vapidKey)),"string"==typeof t.auth&&(n.auth=T(t.auth).buffer),"string"==typeof t.auth&&(n.p256dh=T(t.p256dh).buffer),e.update(n),e.continue()}}}},t.prototype.getTokenDetailsFromToken=function(e){return c(this,void 0,void 0,function(){return u(this,function(t){if(!e)throw g.create("bad-token");return M({fcmToken:e}),[2,this.getIndex("fcmToken",e)]})})},t.prototype.getTokenDetailsFromSWScope=function(e){return c(this,void 0,void 0,function(){return u(this,function(t){if(!e)throw g.create("bad-scope");return M({swScope:e}),[2,this.get(e)]})})},t.prototype.saveTokenDetails=function(e){return c(this,void 0,void 0,function(){return u(this,function(t){if(!e.swScope)throw g.create("bad-scope");if(!e.vapidKey)throw g.create("bad-vapid-key");if(!e.endpoint||!e.auth||!e.p256dh)throw g.create("bad-subscription");if(!e.fcmSenderId)throw g.create("bad-sender-id");if(!e.fcmToken)throw g.create("bad-token");if(!e.fcmPushSet)throw g.create("bad-push-set");return M(e),[2,this.put(e)]})})},t.prototype.deleteToken=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return"string"!=typeof e||0===e.length?[2,Promise.reject(g.create("invalid-delete-token"))]:[4,this.getTokenDetailsFromToken(e)];case 1:if(!(t=n.sent()))throw g.create("delete-token-not-found");return[4,this.delete(t.swScope)];case 2:return n.sent(),[2,t]}})})},t}(S);function M(e){if(e.fcmToken&&("string"!=typeof e.fcmToken||0===e.fcmToken.length))throw g.create("bad-token");if(e.swScope&&("string"!=typeof e.swScope||0===e.swScope.length))throw g.create("bad-scope");if(e.vapidKey&&(!(e.vapidKey instanceof Uint8Array)||65!==e.vapidKey.length))throw g.create("bad-vapid-key");if(e.endpoint&&("string"!=typeof e.endpoint||0===e.endpoint.length))throw g.create("bad-subscription");if(e.auth&&!(e.auth instanceof ArrayBuffer))throw g.create("bad-subscription");if(e.p256dh&&!(e.p256dh instanceof ArrayBuffer))throw g.create("bad-subscription");if(e.fcmSenderId&&("string"!=typeof e.fcmSenderId||0===e.fcmSenderId.length))throw g.create("bad-sender-id");if(e.fcmPushSet&&("string"!=typeof e.fcmPushSet||0===e.fcmPushSet.length))throw g.create("bad-push-set")}var D=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.dbName="fcm_vapid_details_db",t.dbVersion=1,t.objectStoreName="fcm_vapid_object_Store",t}return s(t,e),t.prototype.onDbUpgrade=function(e){e.result.createObjectStore(this.objectStoreName,{keyPath:"swScope"})},t.prototype.getVapidFromSWScope=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:if("string"!=typeof e||0===e.length)throw g.create("bad-scope");return[4,this.get(e)];case 1:return[2,(t=n.sent())?t.vapidKey:void 0]}})})},t.prototype.saveVapidDetails=function(e,t){return c(this,void 0,void 0,function(){return u(this,function(n){if("string"!=typeof e||0===e.length)throw g.create("bad-scope");if(null===t||65!==t.length)throw g.create("bad-vapid-key");return[2,this.put({swScope:e,vapidKey:t})]})})},t.prototype.deleteVapidDetails=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return[4,this.getVapidFromSWScope(e)];case 1:if(!(t=n.sent()))throw g.create("delete-scope-not-found");return[4,this.delete(e)];case 2:return n.sent(),[2,t]}})})},t}(S),I="messagingSenderId",C=function(){function e(e){var t=this;if(!e.options[I]||"string"!=typeof e.options[I])throw g.create("bad-sender-id");this.messagingSenderId=e.options[I],this.tokenDetailsModel=new P,this.vapidDetailsModel=new D,this.iidModel=new k,this.app=e,this.INTERNAL={delete:function(){return t.delete()}}}return e.prototype.getToken=function(){return c(this,void 0,void 0,function(){var e,t,n,r,o;return u(this,function(i){switch(i.label){case 0:if("denied"===(e=this.getNotificationPermission_()))throw g.create("notifications-blocked");return"granted"!==e?[2,null]:[4,this.getSWRegistration_()];case 1:return t=i.sent(),[4,this.getPublicVapidKey_()];case 2:return n=i.sent(),[4,this.getPushSubscription(t,n)];case 3:return r=i.sent(),[4,this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];case 4:return(o=i.sent())?[2,this.manageExistingToken(t,r,n,o)]:[2,this.getNewToken(t,r,n)]}})})},e.prototype.manageExistingToken=function(e,t,n,r){return c(this,void 0,void 0,function(){return u(this,function(o){switch(o.label){case 0:return function(e,t,n){if(!n.vapidKey||!y(t.buffer,n.vapidKey.buffer))return!1;var r=e.endpoint===n.endpoint,o=y(e.getKey("auth"),n.auth),i=y(e.getKey("p256dh"),n.p256dh);return r&&o&&i}(t,n,r)?Date.now()<r.createTime+6048e5?[2,r.fcmToken]:[2,this.updateToken(e,t,n,r)]:[4,this.deleteTokenFromDB(r.fcmToken)];case 1:return o.sent(),[2,this.getNewToken(e,t,n)]}})})},e.prototype.updateToken=function(e,t,n,r){return c(this,void 0,void 0,function(){var o,i,s;return u(this,function(a){switch(a.label){case 0:return a.trys.push([0,4,,6]),[4,this.iidModel.updateToken(this.messagingSenderId,r.fcmToken,r.fcmPushSet,t,n)];case 1:return o=a.sent(),i={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:o,fcmPushSet:r.fcmPushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(i)];case 2:return a.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return a.sent(),[2,o];case 4:return s=a.sent(),[4,this.deleteToken(r.fcmToken)];case 5:throw a.sent(),s;case 6:return[2]}})})},e.prototype.getNewToken=function(e,t,n){return c(this,void 0,void 0,function(){var r,o;return u(this,function(i){switch(i.label){case 0:return[4,this.iidModel.getToken(this.messagingSenderId,t,n)];case 1:return r=i.sent(),o={swScope:e.scope,vapidKey:n,fcmSenderId:this.messagingSenderId,fcmToken:r.token,fcmPushSet:r.pushSet,createTime:Date.now(),endpoint:t.endpoint,auth:t.getKey("auth"),p256dh:t.getKey("p256dh")},[4,this.tokenDetailsModel.saveTokenDetails(o)];case 2:return i.sent(),[4,this.vapidDetailsModel.saveVapidDetails(e.scope,n)];case 3:return i.sent(),[2,r.token]}})})},e.prototype.deleteToken=function(e){return c(this,void 0,void 0,function(){var t,n;return u(this,function(r){switch(r.label){case 0:return[4,this.deleteTokenFromDB(e)];case 1:return r.sent(),[4,this.getSWRegistration_()];case 2:return(t=r.sent())?[4,t.pushManager.getSubscription()]:[3,4];case 3:if(n=r.sent())return[2,n.unsubscribe()];r.label=4;case 4:return[2,!0]}})})},e.prototype.deleteTokenFromDB=function(e){return c(this,void 0,void 0,function(){var t;return u(this,function(n){switch(n.label){case 0:return[4,this.tokenDetailsModel.deleteToken(e)];case 1:return t=n.sent(),[4,this.iidModel.deleteToken(t.fcmSenderId,t.fcmToken,t.fcmPushSet)];case 2:return n.sent(),[2]}})})},e.prototype.getPushSubscription=function(e,t){return e.pushManager.getSubscription().then(function(n){return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:t})})},e.prototype.requestPermission=function(){throw g.create("only-available-in-window")},e.prototype.useServiceWorker=function(e){throw g.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){throw g.create("only-available-in-window")},e.prototype.onMessage=function(e,t,n){throw g.create("only-available-in-window")},e.prototype.onTokenRefresh=function(e,t,n){throw g.create("only-available-in-window")},e.prototype.setBackgroundMessageHandler=function(e){throw g.create("only-available-in-sw")},e.prototype.delete=function(){return c(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return[4,Promise.all([this.tokenDetailsModel.closeDatabase(),this.vapidDetailsModel.closeDatabase()])];case 1:return e.sent(),[2]}})})},e.prototype.getNotificationPermission_=function(){return Notification.permission},e.prototype.getTokenDetailsModel=function(){return this.tokenDetailsModel},e.prototype.getVapidDetailsModel=function(){return this.vapidDetailsModel},e.prototype.getIidModel=function(){return this.iidModel},e}(),N=function(e){function t(t){var n=e.call(this,t)||this;return n.bgMessageHandler=null,self.addEventListener("push",function(e){n.onPush(e)}),self.addEventListener("pushsubscriptionchange",function(e){n.onSubChange(e)}),self.addEventListener("notificationclick",function(e){n.onNotificationClick(e)}),n}return s(t,e),t.prototype.onPush=function(e){e.waitUntil(this.onPush_(e))},t.prototype.onSubChange=function(e){e.waitUntil(this.onSubChange_(e))},t.prototype.onNotificationClick=function(e){e.waitUntil(this.onNotificationClick_(e))},t.prototype.onPush_=function(e){return c(this,void 0,void 0,function(){var t,n,r,o,i,s;return u(this,function(a){switch(a.label){case 0:if(!e.data)return[2];try{t=e.data.json()}catch(c){return[2]}return[4,this.hasVisibleClients_()];case 1:return a.sent()?[2,this.sendMessageToWindowClients_(t)]:(n=this.getNotificationData_(t))?(r=n.title||"",[4,this.getSWRegistration_()]):[3,3];case 2:return o=a.sent(),i=n.actions,s=Notification.maxActions,i&&s&&i.length>s&&console.warn("This browser only supports "+s+" actions.The remaining actions will not be displayed."),[2,o.showNotification(r,n)];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:return a.sent(),[2];case 5:return[2]}})})},t.prototype.onSubChange_=function(e){return c(this,void 0,void 0,function(){var e,t,n,r;return u(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,this.getSWRegistration_()];case 1:return e=o.sent(),[3,3];case 2:throw t=o.sent(),g.create("unable-to-resubscribe",{errorInfo:t});case 3:return o.trys.push([3,5,,8]),[4,e.pushManager.getSubscription()];case 4:return o.sent(),[3,8];case 5:return n=o.sent(),[4,this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];case 6:if(!(r=o.sent()))throw n;return[4,this.deleteToken(r.fcmToken)];case 7:throw o.sent(),n;case 8:return[2]}})})},t.prototype.onNotificationClick_=function(e){return c(this,void 0,void 0,function(){var t,n,r,o;return u(this,function(i){switch(i.label){case 0:return e.notification&&e.notification.data&&e.notification.data.FCM_MSG?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(t=e.notification.data.FCM_MSG).notification&&(n=t.fcmOptions&&t.fcmOptions.link||t.notification.click_action)?[4,this.getWindowClient_(n)]:[2]):[2];case 1:return(r=i.sent())?[3,3]:[4,self.clients.openWindow(n)];case 2:return r=i.sent(),[3,5];case 3:return[4,r.focus()];case 4:r=i.sent(),i.label=5;case 5:return r?(delete t.notification,delete t.fcmOptions,o=F(h.NOTIFICATION_CLICKED,t),[2,this.attemptToMessageClient_(r,o)]):[2]}})})},t.prototype.getNotificationData_=function(e){var t;if(e&&"object"==typeof e.notification){var n=a({},e.notification);return n.data=a({},e.notification.data,((t={}).FCM_MSG=e,t)),n}},t.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw g.create("bg-handler-function-expected");this.bgMessageHandler=e},t.prototype.getWindowClient_=function(e){return c(this,void 0,void 0,function(){var t,n,r,o;return u(this,function(i){switch(i.label){case 0:return t=new URL(e,self.location.href).href,[4,K()];case 1:for(n=i.sent(),r=null,o=0;o<n.length;o++)if(new URL(n[o].url,self.location.href).href===t){r=n[o];break}return[2,r]}})})},t.prototype.attemptToMessageClient_=function(e,t){return c(this,void 0,void 0,function(){return u(this,function(n){if(!e)throw g.create("no-window-client-to-msg");return e.postMessage(t),[2]})})},t.prototype.hasVisibleClients_=function(){return c(this,void 0,void 0,function(){return u(this,function(e){switch(e.label){case 0:return[4,K()];case 1:return[2,e.sent().some(function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")})]}})})},t.prototype.sendMessageToWindowClients_=function(e){return c(this,void 0,void 0,function(){var t,n,r=this;return u(this,function(o){switch(o.label){case 0:return[4,K()];case 1:return t=o.sent(),n=F(h.PUSH_MSG_RECEIVED,e),[4,Promise.all(t.map(function(e){return r.attemptToMessageClient_(e,n)}))];case 2:return o.sent(),[2]}})})},t.prototype.getSWRegistration_=function(){return c(this,void 0,void 0,function(){return u(this,function(e){return[2,self.registration]})})},t.prototype.getPublicVapidKey_=function(){return c(this,void 0,void 0,function(){var e,t;return u(this,function(n){switch(n.label){case 0:return[4,this.getSWRegistration_()];case 1:if(!(e=n.sent()))throw g.create("sw-registration-expected");return[4,this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];case 2:return null==(t=n.sent())?[2,w]:[2,t]}})})},t}(C);function K(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function F(e,t){var n;return(n={})[l.TYPE_OF_MSG]=e,n[l.DATA]=t,n}var O=function(e){function t(t){var n=e.call(this,t)||this;return n.registrationToUse=null,n.publicVapidKeyToUse=null,n.manifestCheckPromise=null,n.messageObserver=null,n.tokenRefreshObserver=null,n.onMessageInternal=Object(p.createSubscribe)(function(e){n.messageObserver=e}),n.onTokenRefreshInternal=Object(p.createSubscribe)(function(e){n.tokenRefreshObserver=e}),n.setupSWMessageListener_(),n}return s(t,e),t.prototype.getToken=function(){return c(this,void 0,void 0,function(){return u(this,function(t){switch(t.label){case 0:return this.manifestCheckPromise||(this.manifestCheckPromise=function(){return c(this,void 0,void 0,function(){var e,t;return u(this,function(n){switch(n.label){case 0:if(!(e=document.querySelector('link[rel="manifest"]')))return[2];n.label=1;case 1:return n.trys.push([1,4,,5]),[4,fetch(e.href)];case 2:return[4,n.sent().json()];case 3:return t=n.sent(),[3,5];case 4:return n.sent(),[2];case 5:if(!t||!t.gcm_sender_id)return[2];if("103953800507"!==t.gcm_sender_id)throw g.create("incorrect-gcm-sender-id");return[2]}})})}()),[4,this.manifestCheckPromise];case 1:return t.sent(),[2,e.prototype.getToken.call(this)]}})})},t.prototype.requestPermission=function(){return c(this,void 0,void 0,function(){var e;return u(this,function(t){switch(t.label){case 0:return"granted"===this.getNotificationPermission_()?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw g.create("denied"===e?"permission-blocked":"permission-default")}})})},t.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw g.create("sw-registration-expected");if(null!=this.registrationToUse)throw g.create("use-sw-before-get-token");this.registrationToUse=e},t.prototype.usePublicVapidKey=function(e){if("string"!=typeof e)throw g.create("invalid-public-vapid-key");if(null!=this.publicVapidKeyToUse)throw g.create("use-public-key-before-get-token");var t=T(e);if(65!==t.length)throw g.create("public-vapid-key-decryption-failed");this.publicVapidKeyToUse=t},t.prototype.onMessage=function(e,t,n){return"function"==typeof e?this.onMessageInternal(e,t,n):this.onMessageInternal(e)},t.prototype.onTokenRefresh=function(e,t,n){return"function"==typeof e?this.onTokenRefreshInternal(e,t,n):this.onTokenRefreshInternal(e)},t.prototype.waitForRegistrationToActivate_=function(e){var t=e.installing||e.waiting||e.active;return new Promise(function(n,r){if(t)if("activated"!==t.state)if("redundant"!==t.state){var o=function(){if("activated"===t.state)n(e);else{if("redundant"!==t.state)return;r(g.create("sw-reg-redundant"))}t.removeEventListener("statechange",o)};t.addEventListener("statechange",o)}else r(g.create("sw-reg-redundant"));else n(e);else r(g.create("no-sw-in-reg"))})},t.prototype.getSWRegistration_=function(){var e=this;return this.registrationToUse?this.waitForRegistrationToActivate_(this.registrationToUse):(this.registrationToUse=null,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"}).catch(function(e){throw g.create("failed-serviceworker-registration",{browserErrorMessage:e.message})}).then(function(t){return e.waitForRegistrationToActivate_(t).then(function(){return e.registrationToUse=t,t.update(),t})}))},t.prototype.getPublicVapidKey_=function(){return c(this,void 0,void 0,function(){return u(this,function(e){return this.publicVapidKeyToUse?[2,this.publicVapidKeyToUse]:[2,w]})})},t.prototype.setupSWMessageListener_=function(){var e=this;navigator.serviceWorker.addEventListener("message",function(t){if(t.data&&t.data[l.TYPE_OF_MSG]){var n=t.data;switch(n[l.TYPE_OF_MSG]){case h.PUSH_MSG_RECEIVED:case h.NOTIFICATION_CLICKED:e.messageObserver&&e.messageObserver.next(n[l.DATA])}}},!1)},t}(C);function V(){return self&&"ServiceWorkerGlobalScope"in self?"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}o.a.INTERNAL.registerService("messaging",function(e){if(!V())throw g.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new N(e):new O(e)},{isSupported:V})}}]);