webpackJsonp(["terminal.module"],{

/***/ "../../../../../src/app/lazy-modules/terminal/terminal-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_component__ = __webpack_require__("../../../../../src/app/lazy-modules/terminal/terminal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__terminal_component__["a" /* TerminalComponent */]
    },
];
var TerminalRoutingModule = /** @class */ (function () {
    function TerminalRoutingModule() {
    }
    TerminalRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(routes)]
        })
    ], TerminalRoutingModule);
    return TerminalRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/lazy-modules/terminal/terminal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n#output {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  overflow-y: auto;\n  word-wrap: break-word;\n}\n\n#input {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lazy-modules/terminal/terminal.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"flex-container\">\n  <mat-card-header>\n    <mat-card-title>{{title}}</mat-card-title>\n  </mat-card-header>\n\n  <div id=\"ouput\"></div>\n\n  <mat-card-actions id=\"input\">\n    <form (ngSubmit)=\"send()\">\n      <mat-form-field style=\"width: 100%\">\n        <input matInput [placeholder]=\"commandPlaceHolder\" [(ngModel)]=\"command\" name=\"command\" autocomplete=\"off\">\n        <mat-icon matSuffix (click)=\"send()\">send</mat-icon>\n      </mat-form-field>\n    </form>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "../../../../../src/app/lazy-modules/terminal/terminal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__terminal_service__ = __webpack_require__("../../../../../src/app/lazy-modules/terminal/terminal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminalComponent = /** @class */ (function () {
    function TerminalComponent(terminalService) {
        this.terminalService = terminalService;
        this.title = 'Terminal';
        this.command = '';
        this.commandPlaceHolder = 'Command';
    }
    TerminalComponent.prototype.ngOnInit = function () {
    };
    TerminalComponent.prototype.send = function () {
        this.command = '';
    };
    TerminalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-terminal',
            template: __webpack_require__("../../../../../src/app/lazy-modules/terminal/terminal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lazy-modules/terminal/terminal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__terminal_service__["a" /* TerminalService */]])
    ], TerminalComponent);
    return TerminalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lazy-modules/terminal/terminal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminalModule", function() { return TerminalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminal_routing_module__ = __webpack_require__("../../../../../src/app/lazy-modules/terminal/terminal-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terminal_component__ = __webpack_require__("../../../../../src/app/lazy-modules/terminal/terminal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terminal_service__ = __webpack_require__("../../../../../src/app/lazy-modules/terminal/terminal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_material_app_material_module__ = __webpack_require__("../../../../../src/app/app-material/app-material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TerminalModule = /** @class */ (function () {
    function TerminalModule() {
    }
    TerminalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__terminal_routing_module__["a" /* TerminalRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_material_app_material_module__["a" /* AppMaterialModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__terminal_component__["a" /* TerminalComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__terminal_service__["a" /* TerminalService */]]
        })
    ], TerminalModule);
    return TerminalModule;
}());



/***/ }),

/***/ "../../../../../src/app/lazy-modules/terminal/terminal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalService; });
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

var TerminalService = /** @class */ (function () {
    function TerminalService() {
        this.commandHistory = [];
    }
    TerminalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TerminalService);
    return TerminalService;
}());



/***/ })

});
//# sourceMappingURL=terminal.module.chunk.js.map