webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lazy-modules/terminal/terminal.module": [
		"../../../../../src/app/lazy-modules/terminal/terminal.module.ts",
		"terminal.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-material/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatFormFieldModule */]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__test_test_component__["a" /* TestComponent */] },
    { path: 'terminal', loadChildren: './lazy-modules/terminal/terminal.module#TerminalModule' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.app-is-mobile .app-toolbar {\n  position: fixed;\n  z-index: 2;\n}\n\n.app-sub-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.app-is-mobile .app-sub-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n       `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <mat-toolbar color=\"primary\" class=\"app-toolbar\">\n    <span style=\"margin-left: 8px; margin-right: 8px;\"> {{ title }} </span>\n    <button mat-icon-button (click)=\"snav.toggle()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"message.toggle()\">\n      <mat-icon>message</mat-icon>\n    </button>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"app-sub-container\">\n    <mat-sidenav #snav mode=\"over\">\n      <p *ngFor=\"let item of routes\">\n        <a [routerLink]=\"item.path\">{{item.path.length ? item.path : '/'}}</a>\n      </p>\n    </mat-sidenav>\n\n    <mat-sidenav-content class=\"app-container\">\n      <mat-sidenav-container class=\"app-sub-container\">\n        <mat-sidenav #message mode=\"side\" [opened]=\"true\">\n          <app-message-container></app-message-container>\n        </mat-sidenav>\n        <mat-sidenav-content>\n          <router-outlet></router-outlet>\n        </mat-sidenav-content>\n      </mat-sidenav-container>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toolbar_service__ = __webpack_require__("../../../../../src/app/toolbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(toolbarService, messageService) {
        this.toolbarService = toolbarService;
        this.messageService = messageService;
        this.title = 'Renel972';
        this.routes = __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["b" /* routes */];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__toolbar_service__["a" /* ToolbarService */], __WEBPACK_IMPORTED_MODULE_2__message_service__["a" /* MessageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_material_app_material_module__ = __webpack_require__("../../../../../src/app/app-material/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_service__ = __webpack_require__("../../../../../src/app/toolbar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_container_message_container_component__ = __webpack_require__("../../../../../src/app/message-container/message-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__test_test_component__ = __webpack_require__("../../../../../src/app/test/test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__message_container_message_container_component__["a" /* MessageContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_10__test_test_component__["a" /* TestComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_material_app_material_module__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__toolbar_service__["a" /* ToolbarService */],
                __WEBPACK_IMPORTED_MODULE_6__message_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/message-container/message-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 200px;\n}\n\n#div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n#message {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  word-wrap: break-word;\n}\n\n#action {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-container/message-container.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<mat-toolbar id=\"toolbar\" color=\"primary\">\n  CHAT</mat-toolbar>-->\n<div style=\"width: 200px\"></div>\n<div id=\"div\">\n  <app-message></app-message>\n\n  <div id=\"action\">\n    <form (ngSubmit)=\"send()\">\n      <mat-form-field style=\"width: 100%\">\n        <input matInput placeholder=\"Message\" [(ngModel)]=\"message\" name=\"message\" autocomplete=\"off\">\n        <mat-icon matSuffix (click)=\"send()\">send</mat-icon>\n      </mat-form-field>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/message-container/message-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageContainerComponent = /** @class */ (function () {
    function MessageContainerComponent(messageService) {
        this.messageService = messageService;
        this.message = '';
    }
    MessageContainerComponent.prototype.ngOnInit = function () {
    };
    MessageContainerComponent.prototype.send = function () {
        if (this.message.length !== 0) {
            this.messageService.send('chat message', this.message);
            this.message = '';
        }
    };
    MessageContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-container',
            template: __webpack_require__("../../../../../src/app/message-container/message-container.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message-container/message-container.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessageContainerComponent);
    return MessageContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* unused harmony export Message */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/share.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessageService = /** @class */ (function () {
    function MessageService() {
        var _this = this;
        this.DEBUG = true;
        this.socketConnected$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false); // $ => Observable
        this.listenedEventStore = {};
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__('renel972.herokuapp.com');
        this.socket.on('connect', function () { return _this.socketConnected$.next(true); });
        this.socket.on('disconnect', function () { return _this.socketConnected$.next(false); });
        this.socketConnected$.asObservable().subscribe(function (connected) {
            console.log('Socket connected: ', connected);
        });
        if (this.DEBUG) {
            this.listen('chat message').subscribe(function (data) {
                console.log(data);
            });
        }
    }
    Object.defineProperty(MessageService.prototype, "id", {
        get: function () {
            return this.socket.id;
        },
        enumerable: true,
        configurable: true
    });
    MessageService.prototype.send = function (event, message) {
        this.socket.emit(event, this.newMessage(message));
    };
    MessageService.prototype.newMessage = function (message) {
        return new Message(this.id, Date.now(), message);
    };
    MessageService.prototype.listen = function (event) {
        var _this = this;
        this.listenedEventStore[event] = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */](function (observer) {
            _this.socket.on(event, function (data) {
                observer.next(data);
            });
            // observable is disposed
            return function () {
                _this.socket.off(event);
            };
        }).share();
        return this.listenedEventStore[event];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());

var Message = /** @class */ (function () {
    function Message(source, date, message) {
        this.source = source;
        this.date = date;
        this.message = message;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/message/message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  word-wrap: break-word;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_service__ = __webpack_require__("../../../../../src/app/toolbar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(toolbarService, messageService, element, renderer) {
        this.toolbarService = toolbarService;
        this.messageService = messageService;
        this.element = element;
        this.renderer = renderer;
    }
    MessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.listen('chat message').subscribe(function (data) {
            var t = _this.renderer.createText(JSON.stringify(data));
            var p = _this.renderer.createElement('p');
            _this.renderer.appendChild(p, t);
            _this.renderer.appendChild(_this.element.nativeElement, p);
            _this.element.nativeElement.scrollIntoView(false);
        });
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message',
            template: __webpack_require__("../../../../../src/app/message/message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__toolbar_service__["a" /* ToolbarService */], __WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer2 */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <p *ngFor=\"let item of fillerContent\">\n    {{item}}\n  </p>\n</mat-card>\n<mat-card>\n  <p *ngFor=\"let item of fillerContent\">\n    {{item}}\n  </p>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
        this.fillerNav = Array(50).fill(0).map(function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array(50).fill(0).map(function (_, i) {
            return "Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1) + "\n    Content Item " + (i + 1);
        });
        this.fillerMessage = Array(50).fill(0).map(function (_, i) {
            return "Message " + (i + 1);
        });
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toolbar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarService = /** @class */ (function () {
    function ToolbarService() {
    }
    ToolbarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ToolbarService);
    return ToolbarService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map