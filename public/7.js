(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_nhanvien__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/nhanvien */ "./resources/js/components/models/nhanvien.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var defaultRecord = {
  ho_ten: "",
  gioi_tinh: "",
  so_cmnd: "",
  ngay_sinh: "",
  noi_sinh: "",
  dien_thoai: "",
  ho_khau: "",
  cho_o_hien_nay: "",
  so_bhyt: "",
  ngay_vao_lam: "",
  so_the_atm: "",
  ma_ton_giao: "",
  ma_phong_ban: "",
  ma_chuc_vu: "",
  ma_dan_toc: ""
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      submitClass: "btn btn-success",
      record: {},
      data: {
        phong_ban: [],
        chuc_vu: [],
        dan_toc: [],
        ton_giao: []
      },
      alert: {
        isError: false,
        className: "alert alert-custom alert-light-primary fade show mb-5",
        message: "Fail to insert new record ."
      }
    };
  },
  created: function created() {
    var _this = this;

    this.record = _objectSpread({}, defaultRecord);
    var nhanVien = new _models_nhanvien__WEBPACK_IMPORTED_MODULE_0__["default"]();
    nhanVien.getLookupValue().then(function (res) {
      if (res.success) {
        _this.data = res.data;
      }
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    insertRecord: function insertRecord() {
      var _this2 = this;

      this.submitClass += "  spinner spinner-white spinner-right";
      this.resetAlert();

      if (!this.validateNull()) {
        this.handleError("All fields must be completed.");
        return;
      }

      var fields = _objectSpread({}, this.record);

      fields.ngay_sinh = this.handleDateTime(this.record.ngay_sinh);
      fields.ngay_vao_lam = this.handleDateTime(this.record.ngay_vao_lam);
      console.log(_typeof(fields.ngay_sinh));
      var nhanvienModel = new _models_nhanvien__WEBPACK_IMPORTED_MODULE_0__["default"]();
      nhanvienModel.insertRecord(fields).then(function (res) {
        _this2.submitClass = "btn btn-success";

        if (res.success) {
          _this2.record = _objectSpread({}, defaultRecord);
          _this2.alert.isError = true;
          _this2.alert.message = "Insert new record successfully.";
          _this2.alert.className = "alert alert-custom alert-light-success fade show mb-5";
        } else {
          _this2.alert.isError = true;
          _this2.alert.message = "Fail to insert new Record.";
          _this2.alert.className = "alert alert-custom alert-light-danger fade show mb-5";
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    validateNull: function validateNull() {
      var isvalid = true;

      for (var item in this.record) {
        if (this.record[item] == "") {
          isvalid = false;
        }
      }

      return isvalid;
    },
    handleError: function handleError(message) {
      this.alert.isError = true;
      this.alert.className = "alert alert-custom alert-light-primary fade show mb-5";
      this.alert.message = message;
      this.alert.icon_class_name = "fas fa-check";
    },
    handleSuccess: function handleSuccess() {
      this.alert.icon_class_name = "flaticon2-cross";
      this.alert.className = "alert alert-custom alert-light-success fade show mb-5";
      this.alert.message = "Insert record successfully .";
    },
    resetAlert: function resetAlert() {
      this.alert.isError = false;
    },
    handleDateTime: function handleDateTime(str) {
      var strArr = str.split("/");
      return new Date(strArr[2], Number.parseInt(strArr[1]) - 1, Number.parseInt(strArr[0]) + 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=template&id=2fae0382&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=template&id=2fae0382& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    _vm._m(0),
    _vm._v(" "),
    this.alert.isError
      ? _c("div", { class: this.alert.className, attrs: { role: "alert" } }, [
          _c("div", { staticClass: "alert-icon" }, [
            _c("i", { class: _vm.alert.icon_class_name })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "alert-text" }, [
            _vm._v(_vm._s(this.alert.message))
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Họ Tên")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.ho_ten,
                        expression: "record.ho_ten"
                      }
                    ],
                    staticClass:
                      "form-control form-control-solid form-control-lg",
                    attrs: { type: "text" },
                    domProps: { value: _vm.record.ho_ten },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "ho_ten", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "fv-plugins-message-container" })
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Giới Tính")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.record.gioi_tinh,
                          expression: "record.gioi_tinh"
                        }
                      ],
                      staticClass:
                        "form-control form-control-solid form-control-lg",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.record,
                            "gioi_tinh",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Chọn giới tính")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "nam" } }, [
                        _vm._v("Nam")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "nữ" } }, [_vm._v("Nữ")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "fv-plugins-message-container" })
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Điện Thoại")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.dien_thoai,
                        expression: "record.dien_thoai"
                      }
                    ],
                    staticClass:
                      "form-control form-control-solid form-control-lg",
                    attrs: { type: "text" },
                    domProps: { value: _vm.record.dien_thoai },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "dien_thoai", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "fv-plugins-message-container" })
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Ngày Sinh")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.ngay_sinh,
                            expression: "record.ngay_sinh"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { placeholder: "ngày/tháng/năm", type: "text" },
                        domProps: { value: _vm.record.ngay_sinh },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.record,
                              "ngay_sinh",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "fv-plugins-message-container" })
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Nơi Sinh")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.noi_sinh,
                            expression: "record.noi_sinh"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { type: "text" },
                        domProps: { value: _vm.record.noi_sinh },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.record,
                              "noi_sinh",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "fv-plugins-message-container" })
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Số CMND")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.so_cmnd,
                            expression: "record.so_cmnd"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { type: "text", value: " " },
                        domProps: { value: _vm.record.so_cmnd },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.record, "so_cmnd", $event.target.value)
                          }
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Hộ Khẩu")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.ho_khau,
                            expression: "record.ho_khau"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { type: "text" },
                        domProps: { value: _vm.record.ho_khau },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.record, "ho_khau", $event.target.value)
                          }
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Chỗ Ở Hiện Nay")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.cho_o_hien_nay,
                            expression: "record.cho_o_hien_nay"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { value: "", type: "text" },
                        domProps: { value: _vm.record.cho_o_hien_nay },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.record,
                              "cho_o_hien_nay",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Số BHYT")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.so_bhyt,
                            expression: "record.so_bhyt"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { type: "text" },
                        domProps: { value: _vm.record.so_bhyt },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.record, "so_bhyt", $event.target.value)
                          }
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Ngày Vào Làm")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.ngay_vao_lam,
                            expression: "record.ngay_vao_lam"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { placeholder: "ngày/tháng/năm", type: "text" },
                        domProps: { value: _vm.record.ngay_vao_lam },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.record,
                              "ngay_vao_lam",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Số Thẻ ATM")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.so_the_atm,
                            expression: "record.so_the_atm"
                          }
                        ],
                        staticClass:
                          "form-control form-control-solid form-control-lg",
                        attrs: { type: "text" },
                        domProps: { value: _vm.record.so_the_atm },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.record,
                              "so_the_atm",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Tôn Giáo")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.ma_ton_giao,
                              expression: "record.ma_ton_giao"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.record,
                                "ma_ton_giao",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.data.ton_giao, function(item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item.id } },
                            [_vm._v(_vm._s(item.name))]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Dân Tộc")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.ma_dan_toc,
                              expression: "record.ma_dan_toc"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.record,
                                "ma_dan_toc",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.data.dan_toc, function(item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item.id } },
                            [_vm._v(_vm._s(item.name))]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Phòng Ban")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.ma_phong_ban,
                              expression: "record.ma_phong_ban"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.record,
                                "ma_phong_ban",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.data.phong_ban, function(item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item.id } },
                            [_vm._v(_vm._s(item.name))]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              { staticClass: "form-group row fv-plugins-icon-container" },
              [
                _c(
                  "label",
                  {
                    staticClass: "col-xl-3 col-lg-3 col-form-label text-right"
                  },
                  [_vm._v("Chức Vụ")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "input-group input-group-solid input-group-lg"
                    },
                    [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.record.ma_chuc_vu,
                              expression: "record.ma_chuc_vu"
                            }
                          ],
                          staticClass: "form-control",
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.record,
                                "ma_chuc_vu",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        _vm._l(_vm.data.chuc_vu, function(item) {
                          return _c(
                            "option",
                            { key: item.id, domProps: { value: item.id } },
                            [_vm._v(_vm._s(item.name))]
                          )
                        }),
                        0
                      )
                    ]
                  )
                ])
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-6" }, [
            _c(
              "div",
              {
                staticClass: "d-flex align-items-center flex-wrap",
                staticStyle: { "margin-left": "80px" }
              },
              [
                _c(
                  "button",
                  {
                    class: _vm.submitClass,
                    attrs: { type: "button" },
                    on: { click: _vm.insertRecord }
                  },
                  [
                    _vm._v(
                      "\n                            Thêm\n                        "
                    )
                  ]
                )
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-6" })
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
      "div",
      {
        staticClass:
          "container d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap p-0 mb-5"
      },
      [
        _c("div", { staticClass: "d-flex align-items-center p-0" }, [
          _c(
            "div",
            { staticClass: "d-flex align-items-baseline flex-wrap mr-5" },
            [
              _c(
                "h2",
                {
                  staticClass:
                    "d-flex align-items-center text-dark font-weight-bold my-1"
                },
                [
                  _vm._v(
                    "\n                    Thêm Mới Nhân Viên\n                "
                  )
                ]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex align-items-center flex-wrap" })
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
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var CrudModel = /*#__PURE__*/function () {
  function CrudModel(modelName) {
    _classCallCheck(this, CrudModel);

    this.modelName = modelName;
    this.baseUrl = "http://localhost:8000/api/";
    this.accessToken = localStorage.getItem("access-token");
  }

  _createClass(CrudModel, [{
    key: "getAll",
    value: function getAll() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.api.get(this.modelName + "s", {
        params: params,
        paramsSerializer: function paramsSerializer(params) {
          return qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params);
        }
      }).then(function (res) {
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
    key: "getOne",
    value: function getOne(id) {
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

/***/ "./resources/js/components/views/NhanVien_Add_Form.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/views/NhanVien_Add_Form.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NhanVien_Add_Form_vue_vue_type_template_id_2fae0382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NhanVien_Add_Form.vue?vue&type=template&id=2fae0382& */ "./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=template&id=2fae0382&");
/* harmony import */ var _NhanVien_Add_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NhanVien_Add_Form.vue?vue&type=script&lang=js& */ "./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NhanVien_Add_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NhanVien_Add_Form_vue_vue_type_template_id_2fae0382___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NhanVien_Add_Form_vue_vue_type_template_id_2fae0382___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/NhanVien_Add_Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Add_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NhanVien_Add_Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Add_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=template&id=2fae0382&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=template&id=2fae0382& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Add_Form_vue_vue_type_template_id_2fae0382___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NhanVien_Add_Form.vue?vue&type=template&id=2fae0382& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Add_Form.vue?vue&type=template&id=2fae0382&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Add_Form_vue_vue_type_template_id_2fae0382___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Add_Form_vue_vue_type_template_id_2fae0382___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);