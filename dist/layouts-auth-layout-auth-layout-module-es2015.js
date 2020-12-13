(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rtl/rtl.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rtl/rtl.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-12\">\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n          <div class=\" row\">\n            <div class=\" col-sm-6 text-left\">\n              <h5 class=\" card-category\">Total Shipments</h5>\n              <h2 class=\" card-title\">Performance</h2>\n            </div>\n            <div class=\" col-sm-6\">\n              <div\n                class=\" btn-group btn-group-toggle float-right\"\n                data-toggle=\"buttons\"\n              >\n                <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"data=datasets[0];updateOptions();clicked=true;clicked1=false;clicked2=false\" [ngClass]=\"{'active':clicked===true}\">\n                  <input checked=\"checked\" name=\"options\" type=\"radio\" />\n\n                  <span\n                    class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\"\n                  >\n                    Accounts\n                  </span>\n                  <span class=\" d-block d-sm-none\">\n                    <i class=\" tim-icons icon-single-02\"> </i>\n                  </span>\n                </label>\n                <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"data=datasets[1];updateOptions();clicked=false;clicked1=true;clicked2=false\" [ngClass]=\"{'active':clicked1===true}\">\n                  <input\n                    class=\" d-none d-sm-none\"\n                    name=\"options\"\n                    type=\"radio\"\n                  />\n\n                  <span\n                    class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\"\n                  >\n                    Purchases\n                  </span>\n                  <span class=\" d-block d-sm-none\">\n                    <i class=\" tim-icons icon-gift-2\"> </i>\n                  </span>\n                </label>\n                <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"data=datasets[2];updateOptions();clicked=false;clicked1=false;clicked2=true\" [ngClass]=\"{'active':clicked2===true}\">\n                  <input class=\" d-none\" name=\"options\" type=\"radio\" />\n\n                  <span\n                    class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\"\n                  >\n                    Sessions\n                  </span>\n                  <span class=\" d-block d-sm-none\">\n                    <i class=\" tim-icons icon-tap-02\"> </i>\n                  </span>\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" chart-area\"><canvas id=\"chartBig1\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\" row\">\n    <div class=\" col-lg-4\">\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Total Shipments</h5>\n          <h3 class=\" card-title\">\n            <i class=\" tim-icons icon-bell-55 text-danger-states\"> </i> 763,215\n          </h3>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" chart-area\"><canvas id=\"chartLineRed\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-4\">\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Daily Sales</h5>\n          <h3 class=\" card-title\">\n            <i class=\" tim-icons icon-delivery-fast text-info\"> </i> 3,500€\n          </h3>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" chart-area\"><canvas id=\"CountryChart\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-4\">\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Completed Tasks</h5>\n          <h3 class=\" card-title\">\n            <i class=\" tim-icons icon-send text-success\"> </i> 12,100K\n          </h3>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" chart-area\"><canvas id=\"chartLineGreen\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\" row\">\n    <div class=\" col-lg-6 col-md-12\">\n      <div class=\" card card-tasks\">\n        <div class=\" card-header\">\n          <h6 class=\" title d-inline\">Tasks(5)</h6>\n          <p class=\" card-category d-inline\">today</p>\n          <div ngbDropdown>\n            <button\n              class=\" btn btn-link btn-icon\"\n              data-toggle=\"dropdown\"\n              ngbDropdownToggle\n              type=\"button\"\n            >\n              <i class=\" tim-icons icon-settings-gear-63\"> </i>\n            </button>\n            <div\n              aria-labelledby=\"dropdownMenuLink\"\n              class=\" dropdown-menu-right\"\n              ngbDropdownMenu\n            >\n              <a href=\"javascript:void(0)\" ngbDropdownItem> Action </a>\n              <a href=\"javascript:void(0)\" ngbDropdownItem> Another action </a>\n              <a href=\"javascript:void(0)\" ngbDropdownItem> Something else </a>\n            </div>\n          </div>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" table-full-width table-responsive\">\n            <table class=\" table\">\n              <tbody>\n                <tr>\n                  <td>\n                    <div class=\" form-check\">\n                      <label class=\" form-check-label\">\n                        <input\n                          class=\" form-check-input\"\n                          type=\"checkbox\"\n                          value=\"\"\n                        />\n\n                        <span class=\" form-check-sign\">\n                          <span class=\" check\"> </span>\n                        </span>\n                      </label>\n                    </div>\n                  </td>\n                  <td>\n                    <p class=\" title\">Update the Documentation</p>\n                    <p class=\" text-muted\">\n                      Dwuamish Head, Seattle, WA 8:47 AM\n                    </p>\n                  </td>\n                  <td class=\" td-actions text-right\">\n                    <button class=\" btn btn-link\" type=\"button\" placement=\"left\" ngbTooltip=\"Edit Task\" container=\"body\" >\n                      <i class=\" tim-icons icon-pencil\"> </i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\" form-check\">\n                      <label class=\" form-check-label\">\n                        <input\n                          checked=\"\"\n                          class=\" form-check-input\"\n                          type=\"checkbox\"\n                          value=\"\"\n                        />\n\n                        <span class=\" form-check-sign\">\n                          <span class=\" check\"> </span>\n                        </span>\n                      </label>\n                    </div>\n                  </td>\n                  <td>\n                    <p class=\" title\">GDPR Compliance</p>\n                    <p class=\" text-muted\">\n                      The GDPR is a regulation that requires businesses to\n                      protect the personal data and privacy of Europe citizens\n                      for transactions that occur within EU member states.\n                    </p>\n                  </td>\n                  <td class=\" td-actions text-right\">\n                    <button class=\" btn btn-link\" type=\"button\" placement=\"left\" ngbTooltip=\"Edit Task\" container=\"body\" >\n                      <i class=\" tim-icons icon-pencil\"> </i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\" form-check\">\n                      <label class=\" form-check-label\">\n                        <input\n                          class=\" form-check-input\"\n                          type=\"checkbox\"\n                          value=\"\"\n                        />\n\n                        <span class=\" form-check-sign\">\n                          <span class=\" check\"> </span>\n                        </span>\n                      </label>\n                    </div>\n                  </td>\n                  <td>\n                    <p class=\" title\">Solve the issues</p>\n                    <p class=\" text-muted\">\n                      Fifty percent of all respondents said they would be more\n                      likely to shop at a company\n                    </p>\n                  </td>\n                  <td class=\" td-actions text-right\">\n                    <button class=\" btn btn-link\" type=\"button\" placement=\"left\" ngbTooltip=\"Edit Task\" container=\"body\" >\n                      <i class=\" tim-icons icon-pencil\"> </i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\" form-check\">\n                      <label class=\" form-check-label\">\n                        <input\n                          class=\" form-check-input\"\n                          type=\"checkbox\"\n                          value=\"\"\n                        />\n\n                        <span class=\" form-check-sign\">\n                          <span class=\" check\"> </span>\n                        </span>\n                      </label>\n                    </div>\n                  </td>\n                  <td>\n                    <p class=\" title\">Release v2.0.0</p>\n                    <p class=\" text-muted\">\n                      Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM\n                    </p>\n                  </td>\n                  <td class=\" td-actions text-right\">\n                    <button class=\" btn btn-link\" type=\"button\" placement=\"left\" ngbTooltip=\"Edit Task\" container=\"body\"  >\n                      <i class=\" tim-icons icon-pencil\"> </i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\" form-check\">\n                      <label class=\" form-check-label\">\n                        <input\n                          class=\" form-check-input\"\n                          type=\"checkbox\"\n                          value=\"\"\n                        />\n\n                        <span class=\" form-check-sign\">\n                          <span class=\" check\"> </span>\n                        </span>\n                      </label>\n                    </div>\n                  </td>\n                  <td>\n                    <p class=\" title\">Export the processed files</p>\n                    <p class=\" text-muted\">\n                      The report also shows that consumers will not easily\n                      forgive a company once a breach exposing their personal\n                      data occurs.\n                    </p>\n                  </td>\n                  <td class=\" td-actions text-right\">\n                    <button class=\" btn btn-link\" type=\"button\" placement=\"left\" ngbTooltip=\"Edit Task\" container=\"body\" >\n                      <i class=\" tim-icons icon-pencil\"> </i>\n                    </button>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <div class=\" form-check\">\n                      <label class=\" form-check-label\">\n                        <input\n                          class=\" form-check-input\"\n                          type=\"checkbox\"\n                          value=\"\"\n                        />\n\n                        <span class=\" form-check-sign\">\n                          <span class=\" check\"> </span>\n                        </span>\n                      </label>\n                    </div>\n                  </td>\n                  <td>\n                    <p class=\" title\">Arival at export process</p>\n                    <p class=\" text-muted\">\n                      Capitol Hill, Seattle, WA 12:34 AM\n                    </p>\n                  </td>\n                  <td class=\" td-actions text-right\">\n                    <button class=\" btn btn-link\" type=\"button\" placement=\"left\" ngbTooltip=\"Edit Task\" container=\"body\" >\n                      <i class=\" tim-icons icon-pencil\"> </i>\n                    </button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-6 col-md-12\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Simple Table</h4>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" table-responsive\">\n            <table class=\" table tablesorter\" id=\"\">\n              <thead class=\" text-primary\">\n                <tr>\n                  <th>Name</th>\n                  <th>Country</th>\n                  <th>City</th>\n                  <th class=\" text-center\">Salary</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>Dakota Rice</td>\n                  <td>Niger</td>\n                  <td>Oud-Turnhout</td>\n                  <td class=\" text-center\">$36,738</td>\n                </tr>\n                <tr>\n                  <td>Minerva Hooper</td>\n                  <td>CuraÃ§ao</td>\n                  <td>Sinaai-Waas</td>\n                  <td class=\" text-center\">$23,789</td>\n                </tr>\n                <tr>\n                  <td>Sage Rodriguez</td>\n                  <td>Netherlands</td>\n                  <td>Baileux</td>\n                  <td class=\" text-center\">$56,142</td>\n                </tr>\n                <tr>\n                  <td>Philip Chaney</td>\n                  <td>Korea, South</td>\n                  <td>Overland Park</td>\n                  <td class=\" text-center\">$38,735</td>\n                </tr>\n                <tr>\n                  <td>Doris Greene</td>\n                  <td>Malawi</td>\n                  <td>Feldkirchen in KÃ¤rnten</td>\n                  <td class=\" text-center\">$63,542</td>\n                </tr>\n                <tr>\n                  <td>Mason Porter</td>\n                  <td>Chile</td>\n                  <td>Gloucester</td>\n                  <td class=\" text-center\">$78,615</td>\n                </tr>\n                <tr>\n                  <td>Jon Porter</td>\n                  <td>Portugal</td>\n                  <td>Gloucester</td>\n                  <td class=\" text-center\">$98,615</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-layout.routing */ "./src/app/layouts/auth-layout/auth-layout.routing.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/rtl/rtl.component */ "./src/app/pages/rtl/rtl.component.ts");









let AuthLayoutModule = class AuthLayoutModule {
};
AuthLayoutModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutRoutes"]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ],
        declarations: [
            _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_8__["RtlComponent"],
        ]
    })
], AuthLayoutModule);



/***/ }),

/***/ "./src/app/layouts/auth-layout/auth-layout.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/rtl/rtl.component */ "./src/app/pages/rtl/rtl.component.ts");


const AuthLayoutRoutes = [
    { path: 'rtl', component: _pages_rtl_rtl_component__WEBPACK_IMPORTED_MODULE_1__["RtlComponent"] },
];


/***/ }),

/***/ "./src/app/pages/rtl/rtl.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/rtl/rtl.component.ts ***!
  \********************************************/
/*! exports provided: RtlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RtlComponent", function() { return RtlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



let RtlComponent = class RtlComponent {
    constructor() {
        this.clicked = true;
        this.clicked1 = false;
        this.clicked2 = false;
    }
    ngOnInit() {
        var gradientChartOptionsConfigurationWithTooltipBlue = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#2380f7"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#2380f7"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipPurple = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(225,78,202,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipRed = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(233,32,16,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipOrange = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 110,
                            padding: 20,
                            fontColor: "#ff8a76"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(220,53,69,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#ff8a76"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipGreen = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(0,242,195,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }]
            }
        };
        var gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 120,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }]
            }
        };
        this.canvas = document.getElementById("chartLineRed");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
        var data = {
            labels: ['يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
            datasets: [{
                    label: "البيانات",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#ec250d',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#ec250d',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#ec250d',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [80, 100, 70, 80, 120, 80],
                }]
        };
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipRed
        });
        this.canvas = document.getElementById("chartLineGreen");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
        var data = {
            labels: ['يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر'],
            datasets: [{
                    label: "مجموعة بياناتي الأولى",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#00d6b4',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#00d6b4',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#00d6b4',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [90, 27, 60, 12, 80],
                }]
        };
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipGreen
        });
        var chart_labels = ['يناير', 'فبراير', 'مارس', 'أبريل', ' مايو', ' يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
        this.datasets = [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
        ];
        this.data = this.datasets[0];
        this.canvas = document.getElementById("chartBig1");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
        var config = {
            type: 'line',
            data: {
                labels: chart_labels,
                datasets: [{
                        label: "مجموعة بياناتي الأولى",
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: '#ec250d',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: '#ec250d',
                        pointBorderColor: 'rgba(255,255,255,0)',
                        pointHoverBackgroundColor: '#ec250d',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: this.data,
                    }]
            },
            options: gradientChartOptionsConfigurationWithTooltipRed
        };
        this.myChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, config);
        this.canvas = document.getElementById("CountryChart");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                labels: ['الولايات المتحدة الأمريكية', 'ألمانيا', 'أستراليا', 'المملكة المتحدة', 'رومانيا', 'البرازيل'],
                datasets: [{
                        label: "بلدان",
                        fill: true,
                        backgroundColor: gradientStroke,
                        hoverBackgroundColor: gradientStroke,
                        borderColor: '#1f8ef1',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [53, 20, 10, 80, 100, 45],
                    }]
            },
            options: gradientBarChartConfiguration
        });
    }
    updateOptions() {
        this.myChartData.data.datasets[0].data = this.data;
        this.myChartData.update();
    }
};
RtlComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-rtl",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./rtl.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rtl/rtl.component.html")).default
    })
], RtlComponent);



/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module-es2015.js.map