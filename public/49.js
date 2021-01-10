(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TonGiao.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/TonGiao.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
/* harmony import */ var _models_crud_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/crud-model */ "./resources/js/components/models/crud-model.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LoadingComponent: _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      loading: true,
      data: []
    };
  },
  created: function created() {
    var _this = this;

    var tongiaoModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_2__["default"]("tongiao");
    tongiaoModel.getAll().then(function (res) {
      if (res.success) {
        res.data.forEach(function (element) {
          element.created_at = element.created_at.split("T")[0].split("-").reverse().join("/");
          element.updated_at = element.updated_at.split("T")[0].split("-").reverse().join("/");
        });
        _this.loading = false;
        _this.data = res.data;
      }
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    handleRemove: function handleRemove(item) {
      var _this2 = this;

      console.log(item);
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
        title: "X\xE1c nh\u1EADn x\xF3a t\xF4n gi\xE1o : ".concat(item.name),
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        preConfirm: function preConfirm() {
          var tongiaoModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_2__["default"]("tongiao");
          return tongiaoModel["delete"](item.id).then(function (res) {
            return res;
          });
        }
      }).then(function (result) {
        if (result.value) {
          if (result.value.success) {
            _this2.data = _this2.data.filter(function (rec) {
              return rec.id != item.id;
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("XÓA THÀNH CÔNG", "T\xF4n gi\xE1o: ".concat(item.name, " \u0111\xE3 \u0111\u01B0\u1EE3c x\xF3a."), "success");
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire("Đã có lỗi khi gửi", "", "error");
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TonGiao.vue?vue&type=template&id=631f8887&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/TonGiao.vue?vue&type=template&id=631f8887& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container mt-10" }, [
    _c("div", { staticClass: "card card-custom" }, [
      _c("div", { staticClass: "card-header border-0 py-5" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-toolbar" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn btn-success font-weight-bolder font-size-sm",
                attrs: { to: "/ton-giao/them" }
              },
              [_vm._v("\n                    Thêm Tôn Giáo")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body py-0" }, [
        _c("div", { staticClass: "table-responsive" }, [
          _c(
            "table",
            {
              staticClass: "table table-head-custom table-vertical-center",
              attrs: { id: "kt_advance_table_widget_1" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                [
                  this.loading
                    ? _c(
                        "div",
                        { staticClass: "loading-container" },
                        [_c("loading-component")],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.data, function(item) {
                    return _c("tr", { key: item.id }, [
                      _c("td", { staticClass: "pr-0" }, [
                        _c(
                          "a",
                          {
                            staticClass:
                              "text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                          },
                          [_vm._v(_vm._s(item.name))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(item.created_at) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          "\n                                " +
                            _vm._s(item.updated_at) +
                            "\n                            "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "pr-0 text-right" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass:
                                "btn btn-icon btn-light btn-hover-primary btn-sm mx-3",
                              attrs: {
                                to: {
                                  name: "tongiao-sua",
                                  params: { id: item.id }
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "svg-icon svg-icon-md svg-icon-primary"
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink":
                                          "http://www.w3.org/1999/xlink",
                                        width: "24px",
                                        height: "24px",
                                        viewBox: "0 0 24 24",
                                        version: "1.1"
                                      }
                                    },
                                    [
                                      _c(
                                        "g",
                                        {
                                          attrs: {
                                            stroke: "none",
                                            "stroke-width": "1",
                                            fill: "none",
                                            "fill-rule": "evenodd"
                                          }
                                        },
                                        [
                                          _c("rect", {
                                            attrs: {
                                              x: "0",
                                              y: "0",
                                              width: "24",
                                              height: "24"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z",
                                              fill: "#000000",
                                              "fill-rule": "nonzero",
                                              transform:
                                                "translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z",
                                              fill: "#000000",
                                              "fill-rule": "nonzero",
                                              opacity: "0.3"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass:
                                "btn btn-icon btn-light btn-hover-primary btn-sm",
                              on: {
                                click: function($event) {
                                  return _vm.handleRemove(item)
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "svg-icon svg-icon-md svg-icon-primary"
                                },
                                [
                                  _c(
                                    "svg",
                                    {
                                      attrs: {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        "xmlns:xlink":
                                          "http://www.w3.org/1999/xlink",
                                        width: "24px",
                                        height: "24px",
                                        viewBox: "0 0 24 24",
                                        version: "1.1"
                                      }
                                    },
                                    [
                                      _c(
                                        "g",
                                        {
                                          attrs: {
                                            stroke: "none",
                                            "stroke-width": "1",
                                            fill: "none",
                                            "fill-rule": "evenodd"
                                          }
                                        },
                                        [
                                          _c("rect", {
                                            attrs: {
                                              x: "0",
                                              y: "0",
                                              width: "24",
                                              height: "24"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z",
                                              fill: "#000000",
                                              "fill-rule": "nonzero"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("path", {
                                            attrs: {
                                              d:
                                                "M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z",
                                              fill: "#000000",
                                              opacity: "0.3"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ])
                  })
                ],
                2
              )
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "card-title align-items-start flex-column" },
      [
        _c("span", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("Danh Sách Dân Tộc")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "text-left" }, [
        _c("th", { staticStyle: { "min-width": "200px" } }, [
          _vm._v("Tên Tôn Giáo")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Ngày Tạo")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Ngày Chỉnh Sửa")
        ]),
        _vm._v(" "),
        _c("th", {
          staticClass: "pr-0 text-right",
          staticStyle: { "min-width": "150px" }
        })
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/models/crud-model.js":
/*!******************************************************!*\
  !*** ./resources/js/components/models/crud-model.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\resources\\js\\components\\models\\crud-model.js: Unexpected token (7:0)\n\n\u001b[0m \u001b[90m  5 | \u001b[39m    constructor(modelName) {\u001b[0m\n\u001b[0m \u001b[90m  6 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmodelName \u001b[33m=\u001b[39m modelName\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbaseUrl \u001b[33m=\u001b[39m \u001b[32m\"http://localhost:8000/api/\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbaseUrl \u001b[33m=\u001b[39m \u001b[32m\"http://127.0.0.1:8000/api/\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Parser.raiseWithData (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.raise (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.unexpected (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9101:16)\n    at Parser.parseExprAtom (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10575:20)\n    at Parser.parseExprSubscripts (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Parser.parseUpdate (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Parser.parseMaybeAssign (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at Parser.parseExpressionBase (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9871:23)\n    at C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9865:39\n    at Parser.allowInAnd (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11541:16)\n    at Parser.parseExpression (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9865:17)\n    at Parser.parseStatementContent (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11807:23)\n    at Parser.parseStatement (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseBlock (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12233:10)\n    at Parser.parseFunctionBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11221:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11205:10)\n    at Parser.parseMethod (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11155:10)\n    at Parser.pushClassMethod (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12701:30)\n    at Parser.parseClassMemberWithIsStatic (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12590:12)\n    at Parser.parseClassMember (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12532:10)\n    at C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12477:14\n    at Parser.withTopicForbiddingContext (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11516:14)\n    at Parser.parseClassBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12454:10)\n    at Parser.parseClass (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12427:22)\n    at Parser.parseStatementContent (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11718:21)\n    at Parser.parseStatement (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseTopLevel (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11607:10)\n    at Parser.parse (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:13415:10)");

/***/ }),

/***/ "./resources/js/components/views/TonGiao.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/views/TonGiao.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TonGiao_vue_vue_type_template_id_631f8887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TonGiao.vue?vue&type=template&id=631f8887& */ "./resources/js/components/views/TonGiao.vue?vue&type=template&id=631f8887&");
/* harmony import */ var _TonGiao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TonGiao.vue?vue&type=script&lang=js& */ "./resources/js/components/views/TonGiao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TonGiao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TonGiao_vue_vue_type_template_id_631f8887___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TonGiao_vue_vue_type_template_id_631f8887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/TonGiao.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/TonGiao.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/views/TonGiao.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TonGiao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TonGiao.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TonGiao.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TonGiao_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/TonGiao.vue?vue&type=template&id=631f8887&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/views/TonGiao.vue?vue&type=template&id=631f8887& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TonGiao_vue_vue_type_template_id_631f8887___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TonGiao.vue?vue&type=template&id=631f8887& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/TonGiao.vue?vue&type=template&id=631f8887&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TonGiao_vue_vue_type_template_id_631f8887___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TonGiao_vue_vue_type_template_id_631f8887___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);