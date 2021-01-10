(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong_Them.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Bang_Luong_Them.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_crud_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/crud-model */ "./resources/js/components/models/crud-model.js");
/* harmony import */ var _models_bangluong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bangluong */ "./resources/js/components/models/bangluong.js");
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


var defaultRecord = {
  ma_phong_ban: "",
  ma_nhan_vien: "",
  thang: "",
  nam: "",
  luong_cb: "",
  so_ngay_tang_ca: "",
  luong_tang_ca: "",
  tien_bao_hiem: "",
  thuc_lanh: ""
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: _objectSpread({}, defaultRecord),
      alert: {
        className: "",
        isError: false,
        message: "",
        icon_class_name: ""
      },
      phong_ban: [],
      nhan_vien: [],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years: []
    };
  },
  created: function created() {
    var _this = this;

    var defaultYear = Number.parseInt(new Date().getFullYear());
    var startYear = 2015;
    var endYear = defaultYear + 5;
    this.years = Array(endYear - startYear).fill().map(function (_, idx) {
      return startYear + idx;
    });
    var bangLuongModel = new _models_bangluong__WEBPACK_IMPORTED_MODULE_1__["default"]();
    bangLuongModel.getLookupValues().then(function (res) {
      if (res.success) {
        _this.nhan_vien = res.data.nhan_vien;
        _this.phong_ban = res.data.phong_ban;
      }
    })["catch"](function (error) {
      return console.error(error);
    });
  },
  methods: {
    InsertRecord: function InsertRecord() {
      var _this2 = this;

      this.resetAlert();

      for (var item in this.data) {
        if (this.data[item] == "") {
          this.handleError("Bắt buộc phải hoàn thành tất cả các ô");
          return;
        }
      }

      var bangLuongModel = new _models_bangluong__WEBPACK_IMPORTED_MODULE_1__["default"]();
      bangLuongModel.insertRecord(this.data).then(function (res) {
        _this2.handleSuccess();

        setTimeout(function () {
          _this2.$router.push("/bang-luong");
        }, 500);
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    handleError: function handleError(message) {
      this.alert.isError = true;
      this.alert.className = "alert alert-custom alert-light-primary fade show mb-5";
      this.alert.message = message;
      this.alert.icon_class_name = "flaticon2-cross";
    },
    resetAlert: function resetAlert() {
      this.alert.isError = false;
    },
    handleSuccess: function handleSuccess() {
      this.alert.icon_class_name = "fas fa-check";
      this.data = _objectSpread({}, defaultRecord);
      this.alert.isError = true;
      this.alert.className = "alert alert-custom alert-light-success fade show mb-5";
      this.alert.message = "Thêm bảng lương thành công .";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong_Them.vue?vue&type=template&id=b416ca72&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Bang_Luong_Them.vue?vue&type=template&id=b416ca72& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        this.alert.isError
          ? _c(
              "div",
              { class: this.alert.className, attrs: { role: "alert" } },
              [
                _c("div", { staticClass: "alert-icon" }, [
                  _c("i", { class: _vm.alert.icon_class_name })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "alert-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(this.alert.message) +
                      "\n                "
                  )
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("h5", { staticClass: "text-dark font-weight-bold mb-10" }, [
          _vm._v("\n                Thêm Mới Bảng Lương :\n            ")
        ]),
        _vm._v(" "),
        _c("form", [
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Nhân Viên :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.ma_nhan_vien,
                        expression: "data.ma_nhan_vien"
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
                          _vm.data,
                          "ma_nhan_vien",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.nhan_vien, function(nhanvien) {
                    return _c(
                      "option",
                      { key: nhanvien.id, domProps: { value: nhanvien.id } },
                      [_vm._v(_vm._s(nhanvien.ho_ten))]
                    )
                  }),
                  0
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Phòng Ban :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.ma_phong_ban,
                        expression: "data.ma_phong_ban"
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
                          _vm.data,
                          "ma_phong_ban",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.phong_ban, function(phongban) {
                    return _c(
                      "option",
                      { key: phongban.id, domProps: { value: phongban.id } },
                      [_vm._v(_vm._s(phongban.name))]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "fv-plugins-message-container" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Tháng :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.thang,
                        expression: "data.thang"
                      }
                    ],
                    staticClass:
                      "form-control form-control-solid form-control-lg",
                    attrs: { placeholder: "Chọn Tháng" },
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
                          _vm.data,
                          "thang",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.months, function(month) {
                    return _c(
                      "option",
                      { key: month, domProps: { value: month } },
                      [_vm._v(_vm._s(month))]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "fv-plugins-message-container" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Năm :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.data.nam,
                        expression: "data.nam"
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
                          _vm.data,
                          "nam",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.years, function(year) {
                    return _c(
                      "option",
                      { key: year, domProps: { value: year } },
                      [_vm._v(_vm._s(year))]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", { staticClass: "fv-plugins-message-container" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Lương cơ bản :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.luong_cb,
                      expression: "data.luong_cb"
                    }
                  ],
                  staticClass:
                    "form-control form-control-solid form-control-lg",
                  attrs: { type: "text", name: "name", autocomplete: "off" },
                  domProps: { value: _vm.data.luong_cb },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "luong_cb", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "fv-plugins-message-container" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Số ngày tăng ca :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.so_ngay_tang_ca,
                      expression: "data.so_ngay_tang_ca"
                    }
                  ],
                  staticClass:
                    "form-control form-control-solid form-control-lg",
                  attrs: { type: "text", name: "name", autocomplete: "off" },
                  domProps: { value: _vm.data.so_ngay_tang_ca },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "so_ngay_tang_ca", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "fv-plugins-message-container" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Lương tăng ca :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.luong_tang_ca,
                      expression: "data.luong_tang_ca"
                    }
                  ],
                  staticClass:
                    "form-control form-control-solid form-control-lg",
                  attrs: { type: "text", name: "name", autocomplete: "off" },
                  domProps: { value: _vm.data.luong_tang_ca },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "luong_tang_ca", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "fv-plugins-message-container" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Tiền bảo hiểm :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.tien_bao_hiem,
                      expression: "data.tien_bao_hiem"
                    }
                  ],
                  staticClass:
                    "form-control form-control-solid form-control-lg",
                  attrs: { type: "text", name: "name", autocomplete: "off" },
                  domProps: { value: _vm.data.tien_bao_hiem },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "tien_bao_hiem", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "fv-plugins-message-container" })
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Thực Lãnh :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.thuc_lanh,
                      expression: "data.thuc_lanh"
                    }
                  ],
                  staticClass:
                    "form-control form-control-solid form-control-lg",
                  attrs: { type: "text", name: "name", autocomplete: "off" },
                  domProps: { value: _vm.data.thuc_lanh },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "thuc_lanh", $event.target.value)
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
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-10" }),
          _vm._v(" "),
          _c("div", { staticClass: "col-2" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary font-weight-bolder px-9 py-4",
                attrs: { type: "button" },
                on: { click: _vm.InsertRecord }
              },
              [_vm._v("\n                        Thêm\n                    ")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/models/bangluong.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/models/bangluong.js ***!
  \*****************************************************/
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



var BangLuong = /*#__PURE__*/function (_CrudModel) {
  _inherits(BangLuong, _CrudModel);

  var _super = _createSuper(BangLuong);

  function BangLuong() {
    _classCallCheck(this, BangLuong);

    return _super.call(this, "bangluong");
  }

  _createClass(BangLuong, [{
    key: "getLookupValues",
    value: function getLookupValues() {
      return this.api.get("bang-luong-lookup-values").then(function (res) {
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
      return this.api.post("bangluong/add", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }]);

  return BangLuong;
}(_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BangLuong);

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

/***/ "./resources/js/components/views/Bang_Luong_Them.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/views/Bang_Luong_Them.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bang_Luong_Them_vue_vue_type_template_id_b416ca72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bang_Luong_Them.vue?vue&type=template&id=b416ca72& */ "./resources/js/components/views/Bang_Luong_Them.vue?vue&type=template&id=b416ca72&");
/* harmony import */ var _Bang_Luong_Them_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bang_Luong_Them.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Bang_Luong_Them.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bang_Luong_Them_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bang_Luong_Them_vue_vue_type_template_id_b416ca72___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bang_Luong_Them_vue_vue_type_template_id_b416ca72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Bang_Luong_Them.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Bang_Luong_Them.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/views/Bang_Luong_Them.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_Them_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bang_Luong_Them.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong_Them.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_Them_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Bang_Luong_Them.vue?vue&type=template&id=b416ca72&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/views/Bang_Luong_Them.vue?vue&type=template&id=b416ca72& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_Them_vue_vue_type_template_id_b416ca72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bang_Luong_Them.vue?vue&type=template&id=b416ca72& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong_Them.vue?vue&type=template&id=b416ca72&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_Them_vue_vue_type_template_id_b416ca72___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_Them_vue_vue_type_template_id_b416ca72___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);