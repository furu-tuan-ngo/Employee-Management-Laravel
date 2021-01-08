(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/NhanVien.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../LoadingComponent.vue */ "./resources/js/components/LoadingComponent.vue");
/* harmony import */ var _models_crud_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/crud-model */ "./resources/js/components/models/crud-model.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_nhanvien__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/nhanvien */ "./resources/js/components/models/nhanvien.js");
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
    LoadingComponent: _LoadingComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      data: [],
      loading: true
    };
  },
  created: function created() {
    var _this = this;

    var nhanvienModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_1__["default"]("nhanvien");
    nhanvienModel.getAll().then(function (res) {
      if (res.success) {
        _this.data = res.data;
        _this.loading = false;
      } else {
        console.log(res);
      }
    })["catch"](function (err) {
      console.log(err);
    });
  },
  mounted: function mounted() {},
  methods: {
    handleRemove: function handleRemove(item) {
      var _this2 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        title: "X\xE1c nh\u1EADn x\xF3a nh\xE2n vi\xEAn : ".concat(item.ho_ten),
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        preConfirm: function preConfirm() {
          var nhanvienModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_1__["default"]("nhanvien");
          return nhanvienModel["delete"](item.id).then(function (res) {
            return res;
          });
        }
      }).then(function (result) {
        if (result.value) {
          if (result.value.success) {
            _this2.data = _this2.data.filter(function (rec) {
              return rec.id != item.id;
            });
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("XÓA THÀNH CÔNG", "Nh\xE2n vi\xEAn ".concat(item.ho_ten, " \u0111\xE3 \u0111\u01B0\u1EE3c x\xF3a."), "success");
          } else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Đã có lỗi khi gửi", "", "error");
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien.vue?vue&type=template&id=5a2dab62&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/NhanVien.vue?vue&type=template&id=5a2dab62& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card card-custom container p-0" }, [
    _c("div", { staticClass: "card-header flex-wrap border-0 pt-6 pb-0" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-toolbar" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary font-weight-bolder",
              attrs: { to: "/nhan-vien/them" }
            },
            [_vm._v("\n                Thêm Nhân Viên")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c(
        "div",
        {
          staticClass:
            "datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded",
          attrs: { id: "kt_datatable_2" }
        },
        [
          _c(
            "table",
            {
              staticClass: "datatable-table",
              staticStyle: { display: "block" }
            },
            [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "tbody",
                { staticClass: "datatable-body" },
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
                  _vm._l(this.data, function(item) {
                    return _c(
                      "tr",
                      {
                        key: item.id,
                        staticClass: "datatable-row datatable-row-even",
                        staticStyle: { left: "0px" },
                        attrs: { "data-row": "9" }
                      },
                      [
                        _c(
                          "td",
                          {
                            staticClass: "datatable-cell",
                            attrs: {
                              "data-field": "OrderID",
                              "aria-label": "68788-9890"
                            }
                          },
                          [
                            _c("span", { staticStyle: { width: "137px" } }, [
                              _vm._v(_vm._s(item.ho_ten))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "datatable-cell",
                            attrs: {
                              "data-field": "Country",
                              "aria-label": "Dominican Republic"
                            }
                          },
                          [
                            _c("span", { staticStyle: { width: "137px" } }, [
                              _vm._v(_vm._s(item.ngay_sinh.split(" ")[0]))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "datatable-cell",
                            attrs: {
                              "data-field": "ShipAddress",
                              "aria-label": "854 Dapin Terrace"
                            }
                          },
                          [
                            _c("span", { staticStyle: { width: "137px" } }, [
                              _vm._v(_vm._s(item.noi_sinh))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "datatable-cell",
                            attrs: {
                              "data-field": "ShipDate",
                              "aria-label": "8/10/2016"
                            }
                          },
                          [
                            _c("span", { staticStyle: { width: "137px" } }, [
                              _vm._v(_vm._s(item.dien_thoai))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "datatable-cell",
                            attrs: { "data-field": "Status", "aria-label": "1" }
                          },
                          [
                            _c("span", { staticStyle: { width: "137px" } }, [
                              _vm._v(_vm._s(item.phong_ban.name))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "datatable-cell",
                            attrs: {
                              "data-field": "Type",
                              "data-autohide-disabled": "false",
                              "aria-label": "2"
                            }
                          },
                          [
                            _c("span", { staticStyle: { width: "137px" } }, [
                              _vm._v(_vm._s(item.chuc_vu.name))
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "td",
                          {
                            staticClass: "datatable-cell-left datatable-cell",
                            attrs: {
                              "data-field": "Actions",
                              "data-autohide-disabled": "false",
                              "aria-label": "null"
                            }
                          },
                          [
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  overflow: "visible",
                                  position: "relative",
                                  width: "125px"
                                }
                              },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "btn btn-sm btn-clean btn-icon mr-2",
                                    attrs: {
                                      to: {
                                        name: "sua_nhanvien",
                                        params: { id: item.id }
                                      },
                                      href: "javascript:;",
                                      title: "Edit details"
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "svg-icon svg-icon-md" },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
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
                                                      "M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z",
                                                    fill: "#000000",
                                                    "fill-rule": "nonzero",
                                                    transform:
                                                      "translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("rect", {
                                                  attrs: {
                                                    fill: "#000000",
                                                    opacity: "0.3",
                                                    x: "5",
                                                    y: "20",
                                                    width: "15",
                                                    height: "2",
                                                    rx: "1"
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
                                      "btn btn-sm btn-clean btn-icon",
                                    attrs: {
                                      href: "javascript:;",
                                      title: "Delete"
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.handleRemove(item)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      { staticClass: "svg-icon svg-icon-md" },
                                      [
                                        _c(
                                          "svg",
                                          {
                                            attrs: {
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
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
                          ]
                        )
                      ]
                    )
                  })
                ],
                2
              )
            ]
          ),
          _vm._v(" "),
          _vm._m(2)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-title" }, [
      _c("h3", { staticClass: "card-label" }, [
        _vm._v("\n                Danh Sách Nhân Viên\n                "),
        _c("span", { staticClass: "d-block text-muted pt-2 font-size-sm" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "datatable-head" }, [
      _c("tr", { staticClass: "datatable-row", staticStyle: { left: "0px" } }, [
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "OrderID" }
          },
          [_c("span", { staticStyle: { width: "137px" } }, [_vm._v("Họ Tên")])]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "Country" }
          },
          [
            _c("span", { staticStyle: { width: "137px" } }, [
              _vm._v("Ngày Sinh")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "ShipAddress" }
          },
          [
            _c("span", { staticStyle: { width: "137px" } }, [
              _vm._v("Nơi Sinh")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "ShipDate" }
          },
          [
            _c("span", { staticStyle: { width: "137px" } }, [
              _vm._v("Số Điện Thoại")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "Status" }
          },
          [
            _c("span", { staticStyle: { width: "137px" } }, [
              _vm._v("Phòng Ban")
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "Type", "data-autohide-disabled": "false" }
          },
          [_c("span", { staticStyle: { width: "137px" } }, [_vm._v("Chức Vụ")])]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass:
              "datatable-cell-left datatable-cell datatable-cell-sort",
            attrs: {
              "data-field": "Actions",
              "data-autohide-disabled": "false"
            }
          },
          [_c("span", { staticStyle: { width: "125px" } })]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "datatable-pager datatable-paging-loaded" },
      [
        _c("ul", { staticClass: "datatable-pager-nav my-2 mb-sm-0" }, [
          _c("li", [
            _c(
              "a",
              {
                staticClass:
                  "datatable-pager-link datatable-pager-link-first datatable-pager-link-disabled",
                attrs: {
                  title: "First",
                  "data-page": "1",
                  disabled: "disabled"
                }
              },
              [_c("i", { staticClass: "flaticon2-fast-back" })]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticStyle: { display: "none" } }, [
            _c("input", {
              staticClass: "datatable-pager-input form-control",
              attrs: { type: "text", title: "Page number" }
            })
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "datatable-pager-link datatable-pager-link-number",
                attrs: { "data-page": "5", title: "5" }
              },
              [_vm._v("5")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "datatable-pager-link datatable-pager-link-last",
                attrs: { title: "Last", "data-page": "35" }
              },
              [_c("i", { staticClass: "flaticon2-fast-next" })]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "datatable-pager-info my-2 mb-sm-0" }, [
          _c("span", { staticClass: "datatable-pager-detail" }, [
            _vm._v("Showing 1 - 10 of 350")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/models/crud-model.js":
/*!******************************************************!*\
  !*** ./resources/js/components/models/crud-model.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var CrudModel = /*#__PURE__*/function () {
  function CrudModel(modelName) {
    _classCallCheck(this, CrudModel);

    this.modelName = modelName;
    this.baseUrl = "http://employee-management-v4.herokuapp.com/api/";
    this.accessToken = localStorage.getItem("access-token");
  }

  _createClass(CrudModel, [{
    key: "getAll",
    value: function getAll() {
      return this.api.get(this.modelName + "s").then(function (res) {
        return res.data;
      })["catch"](function (error) {
        return {
          success: false,
          message: error
        };
      });
    }
  }, {
    key: "insert",
    value: function insert(param) {
      return this.api.post("".concat(this.modelName, "s"), param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      return this.api["delete"]("".concat(this.modelName, "/remove/").concat(id)).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "get",
    value: function get(id) {
      return this.api.get("".concat(this.modelName, "/").concat(id)).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "update",
    value: function update(record) {
      return this.api.post("".concat(this.modelName, "/update"), record).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "api",
    get: function get() {
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
        baseURL: this.baseUrl,
        headers: {
          Authorization: "Bearer ".concat(this.accessToken)
        }
      });
    }
  }]);

  return CrudModel;
}();

/* harmony default export */ __webpack_exports__["default"] = (CrudModel);

/***/ }),

/***/ "./resources/js/components/models/nhanvien.js":
/*!****************************************************!*\
  !*** ./resources/js/components/models/nhanvien.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _crud_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud-model */ "./resources/js/components/models/crud-model.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var NhanVien = /*#__PURE__*/function (_CrudModel) {
  _inherits(NhanVien, _CrudModel);

  var _super = _createSuper(NhanVien);

  function NhanVien() {
    _classCallCheck(this, NhanVien);

    return _super.call(this, "nhanvien");
  }

  _createClass(NhanVien, [{
    key: "getLookupValue",
    value: function getLookupValue() {
      return this.api.get("lookup-value-nhan-vien").then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "insertRecord",
    value: function insertRecord(param) {
      return this.api.post("nhanvien/add", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "setKhenThuong",
    value: function setKhenThuong(param) {
      return this.api.post("nhanvien/khenthuong", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "setKyLuat",
    value: function setKyLuat(param) {
      return this.api.post("nhanvien/kyluat", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "setNgoaiNgu",
    value: function setNgoaiNgu(param) {
      return this.api.post("nhanvien/ngoaingu", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "setTrinhDo",
    value: function setTrinhDo(param) {
      return this.api.post("nhanvien/trinhdo", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }]);

  return NhanVien;
}(_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (NhanVien);

/***/ }),

/***/ "./resources/js/components/views/NhanVien.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/views/NhanVien.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NhanVien_vue_vue_type_template_id_5a2dab62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NhanVien.vue?vue&type=template&id=5a2dab62& */ "./resources/js/components/views/NhanVien.vue?vue&type=template&id=5a2dab62&");
/* harmony import */ var _NhanVien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NhanVien.vue?vue&type=script&lang=js& */ "./resources/js/components/views/NhanVien.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NhanVien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NhanVien_vue_vue_type_template_id_5a2dab62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NhanVien_vue_vue_type_template_id_5a2dab62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/NhanVien.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/NhanVien.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/views/NhanVien.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NhanVien.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/NhanVien.vue?vue&type=template&id=5a2dab62&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/views/NhanVien.vue?vue&type=template&id=5a2dab62& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_vue_vue_type_template_id_5a2dab62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NhanVien.vue?vue&type=template&id=5a2dab62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien.vue?vue&type=template&id=5a2dab62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_vue_vue_type_template_id_5a2dab62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_vue_vue_type_template_id_5a2dab62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);