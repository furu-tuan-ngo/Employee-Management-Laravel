(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/CtKhen_Thuong.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/CtKhen_Thuong.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_nhanvien__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/nhanvien */ "./resources/js/components/models/nhanvien.js");
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
<<<<<<< HEAD
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
=======

>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
<<<<<<< HEAD
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
        message: "Fail to update new record ."
      },
      disableBtn: true
=======
      loading: true,
      data: {
        ct_khen_thuong: []
      }
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
    };
  },
  created: function created() {
    var _this = this;

<<<<<<< HEAD
    var nhanVien = new _models_nhanvien__WEBPACK_IMPORTED_MODULE_0__["default"]();
    nhanVien.get(this.$route.params.id).then(function (res) {
      if (res.success) {
        delete res.data.ton_giao;
        delete res.data.bang_luong;
        delete res.data.phong_ban;
        delete res.data.dan_toc;
        delete res.data.chuc_vu;
        delete res.data.created_at;
        delete res.data.ct_khen_thuong;
        delete res.data.ct_ky_luat;
        delete res.data.ky_luat;
        delete res.data.khen_thuong;
        delete res.data.ngoai_ngu;
        delete res.data.trinh_do;
        delete res.data.updated_at;
        res.data.ngay_sinh = res.data.ngay_sinh.split(" ")[0].split("-").reverse().join("/");
        res.data.ngay_vao_lam = res.data.ngay_vao_lam.split("T")[0].split("-").reverse().join("/");
        _this.record = res.data;
      }
    });
    nhanVien.getLookupValue().then(function (res) {
      if (res.success) {
        _this.data = res.data;
        _this.disableBtn = false;
=======
    var khenThuongModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_1__["default"]("khenthuong");
    khenThuongModel.get(this.$router.currentRoute.params.id).then(function (res) {
      if (res.success) {
        _this.data = res.data;
        _this.loading = false;
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
      }
    })["catch"](function (error) {
      console.log(error);
    });
  },
  methods: {
    updateRecord: function updateRecord() {
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
      var nhanvienModel = new _models_nhanvien__WEBPACK_IMPORTED_MODULE_0__["default"]();
      nhanvienModel.update(fields).then(function (res) {
        _this2.submitClass = "btn btn-success";

        if (res.success) {
          _this2.alert.isError = true;
          _this2.alert.message = "Update new record successfully.";
          _this2.alert.className = "alert alert-custom alert-light-success fade show mb-5";
          setTimeout(function () {
            _this2.$router.push("/nhan-vien");
          }, 500);
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
          console.log(item, this.record[item]);
          isvalid = false;
        }
      }

      return isvalid;
    },
    handleError: function handleError(message) {
      this.submitClass = "btn btn-success";
      this.alert.isError = true;
      this.alert.className = "alert alert-custom alert-light-primary fade show mb-5";
      this.alert.message = message;
    },
    handleSuccess: function handleSuccess() {
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

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e& ***!
  \***************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/CtKhen_Thuong.vue?vue&type=template&id=898f8c5a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/CtKhen_Thuong.vue?vue&type=template&id=898f8c5a& ***!
  \**********************************************************************************************************************************************************************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
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
<<<<<<< HEAD
    _vm._m(0),
    _vm._v(" "),
    _vm.alert.isError
      ? _c("div", { class: _vm.alert.className, attrs: { role: "alert" } }, [
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "alert-text" }, [
            _vm._v(_vm._s(_vm.alert.message))
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
                      _c("option", { attrs: { value: "nu" } }, [_vm._v("Nữ")])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "fv-plugins-message-container" })
                ])
              ]
            )
          ])
        ]),
=======
    _c(
      "div",
      {
        staticClass:
          "card card-custom card-stretch gutter-b card-shadowless p-0"
      },
      [
        _vm._m(0),
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
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
<<<<<<< HEAD
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
                    attrs: { type: "button", disabled: _vm.disableBtn },
                    on: { click: _vm.updateRecord }
                  },
                  [
                    _vm._v(
                      "\n                            sửa\n                        "
                    )
                  ]
=======
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
                    _vm._l(_vm.data.ct_khen_thuong, function(item) {
                      return _c("tr", { key: item.id }, [
                        _c("td", { staticClass: "pr-0" }, [
                          _c(
                            "a",
                            {
                              staticClass:
                                "text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg",
                              attrs: { href: "#" }
                            },
                            [_vm._v(_vm._s(item.nhanvien.ho_ten))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.noi_dung) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.hinh_thuc) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            "\n                                " +
                              _vm._s(item.ngay_qd) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", { staticClass: "pl-0 text-right" })
                      ])
                    })
                  ],
                  2
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
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
<<<<<<< HEAD
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
                    "\n                    Sửa Thông Tin Nhân Viên\n                "
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
=======
    return _c("div", { staticClass: "card-header border-0 py-5 px-0" }, [
      _c("h3", { staticClass: "card-title align-items-start flex-column" }, [
        _c("span", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("Chi tiết khen thưởng")
        ])
      ])
    ])
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
    return _c("div", { staticClass: "alert-icon" }, [
      _c("i", { staticClass: "flaticon-warning" })
=======
    return _c("thead", [
      _c("tr", { staticClass: "text-left" }, [
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Tên Nhân Viên")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Nội dung")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v("Hình thức")
        ]),
        _vm._v(" "),
        _c("th", { staticStyle: { "min-width": "150px" } }, [
          _vm._v(
            "\n                                Ngày quyết định\n                            "
          )
        ]),
        _vm._v(" "),
        _c("th", {
          staticClass: "pr-0 text-right",
          staticStyle: { "min-width": "150px" }
        })
      ])
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
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
    this.baseUrl = "http://employee-management-v4.herokuapp.com/api/";
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

<<<<<<< HEAD
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

/***/ "./resources/js/components/views/NhanVien_Edit_Form.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/views/NhanVien_Edit_Form.vue ***!
  \**************************************************************/
=======
/***/ "./resources/js/components/views/CtKhen_Thuong.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/views/CtKhen_Thuong.vue ***!
  \*********************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _NhanVien_Edit_Form_vue_vue_type_template_id_9130de2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e& */ "./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e&");
/* harmony import */ var _NhanVien_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NhanVien_Edit_Form.vue?vue&type=script&lang=js& */ "./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _CtKhen_Thuong_vue_vue_type_template_id_898f8c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CtKhen_Thuong.vue?vue&type=template&id=898f8c5a& */ "./resources/js/components/views/CtKhen_Thuong.vue?vue&type=template&id=898f8c5a&");
/* harmony import */ var _CtKhen_Thuong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CtKhen_Thuong.vue?vue&type=script&lang=js& */ "./resources/js/components/views/CtKhen_Thuong.vue?vue&type=script&lang=js&");
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _NhanVien_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NhanVien_Edit_Form_vue_vue_type_template_id_9130de2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NhanVien_Edit_Form_vue_vue_type_template_id_9130de2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _CtKhen_Thuong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CtKhen_Thuong_vue_vue_type_template_id_898f8c5a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CtKhen_Thuong_vue_vue_type_template_id_898f8c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/views/NhanVien_Edit_Form.vue"
=======
component.options.__file = "resources/js/components/views/CtKhen_Thuong.vue"
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
=======
/***/ "./resources/js/components/views/CtKhen_Thuong.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/views/CtKhen_Thuong.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NhanVien_Edit_Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e& ***!
  \*********************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CtKhen_Thuong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CtKhen_Thuong.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/CtKhen_Thuong.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CtKhen_Thuong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/CtKhen_Thuong.vue?vue&type=template&id=898f8c5a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/views/CtKhen_Thuong.vue?vue&type=template&id=898f8c5a& ***!
  \****************************************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Edit_Form_vue_vue_type_template_id_9130de2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/NhanVien_Edit_Form.vue?vue&type=template&id=9130de2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Edit_Form_vue_vue_type_template_id_9130de2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NhanVien_Edit_Form_vue_vue_type_template_id_9130de2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CtKhen_Thuong_vue_vue_type_template_id_898f8c5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CtKhen_Thuong.vue?vue&type=template&id=898f8c5a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/CtKhen_Thuong.vue?vue&type=template&id=898f8c5a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CtKhen_Thuong_vue_vue_type_template_id_898f8c5a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CtKhen_Thuong_vue_vue_type_template_id_898f8c5a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a



/***/ })

}]);