(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_crud_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/crud-model */ "./resources/js/components/models/crud-model.js");
/* harmony import */ var _models_chi_tiet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/chi_tiet */ "./resources/js/components/models/chi_tiet.js");
/* harmony import */ var _models_khenthuong__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/khenthuong */ "./resources/js/components/models/khenthuong.js");
/* harmony import */ var _models_kyluat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/kyluat */ "./resources/js/components/models/kyluat.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      alert: {
        message: "",
        className: "",
        iconClassname: "",
        isShowAlert: false
      },
      data: {
        ct_khen_thuong: [],
        ct_ky_luat: [],
        chuc_vu: {
          name: ""
        },
        phong_ban: {
          name: ""
        },
        ky_luat: []
      },
      displayData: [],
      KTKLRecord: {},
      //////
      record: {
        ma_khen_thuong: ""
      },
      khen_thuong: [],
      ky_luat: [],
      modalTitle: "Khen Thưởng",
      isKT: true
    };
  },
  created: function created() {
    var _this = this;

    var list_label = [{
      key: "ho_ten",
      value: "Họ Tên"
    }, {
      key: "gioi_tinh",
      value: "Giới Tính"
    }, {
      key: "so_cmnd",
      value: "số CMND"
    }, {
      key: "noi_sinh",
      value: "Nơi Sinh"
    }, {
      key: "ngay_sinh",
      value: "Ngày Sinh"
    }, {
      key: "dien_thoai",
      value: "Điện Thoại"
    }, {
      key: "ho_khau",
      value: "Hộ Khẩu"
    }, {
      key: "so_the_atm",
      value: "Số Thẻ ATM"
    }, {
      key: "cho_o_hien_nay",
      value: "Chỗ Ở Hiện Nay"
    }, {
      key: "so_bhyt",
      value: "SỐ Bảo Hiểm Y Tế"
    }, {
      key: "ngay_vao_lam",
      value: "Ngày Vào Làm"
    }];
    var nhanvienModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("nhanvien");
    nhanvienModel.get(this.$route.params.id).then(function (res) {
      if (res.success) {
        res.data.ngay_sinh = res.data.ngay_sinh.split(" ")[0];
        res.data.ngay_vao_lam = res.data.ngay_vao_lam.split("T")[0];
        _this.data = res.data;

        for (var item in res.data) {
          if (!item.includes("ma_") && typeof res.data[item] == "string") {
            var _iterator = _createForOfIteratorHelper(list_label),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var label = _step.value;

                if (item == label.key) {
                  _this.displayData.push({
                    label: label.value,
                    value: res.data[item]
                  });
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      } else {
        console.log(res);
      }
    });
    var khenThuongModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("khenthuong");
    khenThuongModel.getAll().then(function (res) {
      _this.khen_thuong = res.data;
    });
    var kyLuatModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("kyluat");
    kyLuatModel.getAll().then(function (res) {
      _this.ky_luat = res.data;
    });
  },
  methods: {
    handleShowModal: function handleShowModal(isKL) {
      if (isKL) {
        this.modalTitle = "Kỷ Luật";
        this.isKT = false;
      } else {
        this.modalTitle = "Khen Thưởng";
        this.isKT = true;
      }
    },
    handleSaveKTKL: function handleSaveKTKL() {
      var _this2 = this;

      if (this.getSizeObjectNotNull(this.KTKLRecord) < 4) {
        this.handleThrowError();
        console.log(this.KTKLRecord);
        return;
      }

      this.KTKLRecord.ma_nhan_vien = this.$route.params.id;

      if (this.isKT) {
        var ktModel = new _models_chi_tiet__WEBPACK_IMPORTED_MODULE_1__["default"]("ct-khen-thuong");
        ktModel.insertChiTiet(_objectSpread(_objectSpread({}, this.KTKLRecord), {}, {
          ngay_qd: this.handleDateTime(this.KTKLRecord.ngay_qd)
        })).then(function (res) {
          if (res.success) {
            _this2.handleSuccess();

            _this2.data.ct_khen_thuong.push(res.data);
          } else {
            _this2.handleThrowError();
          }
        });
      } else {
        var _ktModel = new _models_chi_tiet__WEBPACK_IMPORTED_MODULE_1__["default"]("ct-ky-luat");

        _ktModel.insertChiTiet(_objectSpread(_objectSpread({}, this.KTKLRecord), {}, {
          ngay_kl: this.handleDateTime(this.KTKLRecord.ngay_kl)
        })).then(function (res) {
          if (res.success) {
            _this2.handleSuccess();

            _this2.data.ct_ky_luat.push(res.data);
          } else {
            _this2.handleThrowError();
          }
        });
      }
    },
    handleCloseModal: function handleCloseModal() {
      this.KTKLRecord = {};
    },
    handleThrowError: function handleThrowError() {
      this.alert.message = "Thêm Thất Bại.";
      this.alert.className = "alert alert-custom alert-light-danger fade show mb-5";
      this.alert.iconClassname = "flaticon2-cross";
      this.alert.isShowAlert = true;
    },
    getSizeObjectNotNull: function getSizeObjectNotNull(obj) {
      var len = 0;

      for (var i in obj) {
        if (i != null && obj[i] != "") {
          len++;
        }
      }

      return len;
    },
    handleDateTime: function handleDateTime(str) {
      var strArr = str.split("/");
      return new Date(strArr[2], Number.parseInt(strArr[1]) - 1, Number.parseInt(strArr[0]) + 1);
    },
    handleSuccess: function handleSuccess() {
      this.alert.message = "Thêm Thành Công.";
      this.alert.className = "alert alert-custom alert-light-success fade show mb-5";
      this.alert.iconClassname = "fas fa-check";
      this.alert.isShowAlert = true;
    },
    handleRemoveKhenThuong: function handleRemoveKhenThuong(kt) {
      var _this3 = this;

      Swal.fire({
        title: "X\xE1c nh\u1EADn x\xF3a : \n ".concat(kt.khen_thuong.name),
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        preConfirm: function preConfirm() {
          var khenthuongModel = new _models_khenthuong__WEBPACK_IMPORTED_MODULE_2__["default"]();
          return khenthuongModel.deleteCtKt(kt.id).then(function (res) {
            return res;
          });
        }
      }).then(function (result) {
        if (result.value) {
          if (result.value.success) {
            _this3.data.ct_khen_thuong = _this3.data.ct_khen_thuong.filter(function (rec) {
              return rec.id != kt.id;
            });
            Swal.fire("XÓA THÀNH CÔNG", "".concat(kt.khen_thuong.name, " \u0111\xE3 \u0111\u01B0\u1EE3c x\xF3a."), "success");
          } else {
            Swal.fire("Đã có lỗi khi gửi", "", "error");
          }
        }
      });
    },
    handleRemoveKyLuat: function handleRemoveKyLuat(kl) {
      var _this4 = this;

      Swal.fire({
        title: "X\xE1c nh\u1EADn x\xF3a : \n ".concat(kl.name),
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        preConfirm: function preConfirm() {
          var kyluatModel = new _models_kyluat__WEBPACK_IMPORTED_MODULE_3__["default"]();
          return kyluatModel.deleteCtKl(kl.id).then(function (res) {
            return res;
          });
        }
      }).then(function (result) {
        if (result.value) {
          if (result.value.success) {
            _this4.data.ct_ky_luat = _this4.data.ct_ky_luat.filter(function (rec) {
              return rec.id != kl.id;
            });
            Swal.fire("XÓA THÀNH CÔNG", "".concat(kl.name, " \u0111\xE3 \u0111\u01B0\u1EE3c x\xF3a."), "success");
          } else {
            Swal.fire("Đã có lỗi khi gửi", "", "error");
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "card card-custom gutter-b" }, [
      _c("div", { staticClass: "card-header border-0 pt-5" }, [
        _c("div", [
          _c(
            "h3",
            { staticClass: "card-title align-items-start flex-column" },
            [
              _c(
                "span",
                { staticClass: "card-label font-weight-bolder text-dark" },
                [_vm._v(_vm._s(_vm.data.ho_ten))]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "d-flex flex-wrap my-2" }, [
            _c(
              "a",
              {
                staticClass:
                  "text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                  },
                  [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
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
                                  "M5.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L5.5,11 C4.67157288,11 4,10.3284271 4,9.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 Z M11,6 C10.4477153,6 10,6.44771525 10,7 C10,7.55228475 10.4477153,8 11,8 L13,8 C13.5522847,8 14,7.55228475 14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 Z",
                                fill: "#000000",
                                opacity: "0.3"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M5.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M11,15 C10.4477153,15 10,15.4477153 10,16 C10,16.5522847 10.4477153,17 11,17 L13,17 C13.5522847,17 14,16.5522847 14,16 C14,15.4477153 13.5522847,15 13,15 L11,15 Z",
                                fill: "#000000"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(_vm._s(this.data.chuc_vu.name))
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass:
                  "text-muted text-hover-primary font-weight-bold mr-lg-8 mr-5 mb-lg-0 mb-2"
              },
              [
                _c(
                  "span",
                  {
                    staticClass: "svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                  },
                  [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
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
                                  "M18,2 L20,2 C21.6568542,2 23,3.34314575 23,5 L23,19 C23,20.6568542 21.6568542,22 20,22 L18,22 L18,2 Z",
                                fill: "#000000",
                                opacity: "0.3"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M5,2 L17,2 C18.6568542,2 20,3.34314575 20,5 L20,19 C20,20.6568542 18.6568542,22 17,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,3 C4,2.44771525 4.44771525,2 5,2 Z M12,11 C13.1045695,11 14,10.1045695 14,9 C14,7.8954305 13.1045695,7 12,7 C10.8954305,7 10,7.8954305 10,9 C10,10.1045695 10.8954305,11 12,11 Z M7.00036205,16.4995035 C6.98863236,16.6619875 7.26484009,17 7.4041679,17 C11.463736,17 14.5228466,17 16.5815,17 C16.9988413,17 17.0053266,16.6221713 16.9988413,16.5 C16.8360465,13.4332455 14.6506758,12 11.9907452,12 C9.36772908,12 7.21569918,13.5165724 7.00036205,16.4995035 Z",
                                fill: "#000000"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(_vm._s(this.data.phong_ban.name))
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              { staticClass: "text-muted text-hover-primary font-weight-bold" },
              [
                _c(
                  "span",
                  {
                    staticClass: "svg-icon svg-icon-md svg-icon-gray-500 mr-1"
                  },
                  [
                    _c(
                      "svg",
                      {
                        attrs: {
                          xmlns: "http://www.w3.org/2000/svg",
                          "xmlns:xlink": "http://www.w3.org/1999/xlink",
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
                                  "M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z",
                                fill: "#000000",
                                opacity: "0.3"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              attrs: {
                                d:
                                  "M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z",
                                fill: "#000000",
                                "fill-rule": "nonzero"
                              }
                            })
                          ]
                        )
                      ]
                    )
                  ]
                ),
                _vm._v(_vm._s(this.data.dien_thoai))
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-toolbar" }, [
          _c("ul", { staticClass: "nav nav-pills nav-pills-sm nav-dark-75" }, [
            _c(
              "li",
              { staticClass: "nav-item" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-light-danger font-weight-bold",
                    attrs: {
                      to: {
                        name: "sua_nhanvien",
                        params: { id: this.$route.params.id }
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "flaticon-add" }),
                    _vm._v(" Cập nhật\n                        ")
                  ]
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "d-flex ml-5" }, [
          _c("div", { staticClass: "flex-grow-1" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-center flex-wrap justify-content-between w-50"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "flex-grow-1 font-weight-bold text-dark-50 py-2 py-lg-2 mr-5"
                  },
                  [
                    _c(
                      "table",
                      {
                        staticClass:
                          "table table-borderless table-vertical-center"
                      },
                      _vm._l(this.displayData, function(field) {
                        return _c("tr", { key: field.label }, [
                          _c("td", { staticClass: "pl-0" }, [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              },
                              [_vm._v(_vm._s(field.label))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              "\n                                        " +
                                _vm._s(field.value) +
                                "\n                                    "
                            )
                          ])
                        ])
                      }),
                      0
                    )
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "separator separator-solid my-7" }),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex align-items-center flex-wrap" }, [
          _c(
            "div",
            { staticClass: "d-flex align-items-center flex-lg-fill mr-5 my-1" },
            [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex flex-column text-dark-75" }, [
                _c("span", { staticClass: "font-weight-bolder font-size-sm" }, [
                  _vm._v("Khen Thưởng")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bolder font-size-h5" }, [
                  _c("span", { staticClass: "text-dark-50 font-weight-bold" }),
                  _vm._v(_vm._s(this.data.ct_khen_thuong.length))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "d-flex align-items-center flex-lg-fill mr-5 my-1" },
            [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "d-flex flex-column text-dark-75" }, [
                _c("span", { staticClass: "font-weight-bolder font-size-sm" }, [
                  _vm._v("Kỷ Luật")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "font-weight-bolder font-size-h5" }, [
                  _c("span", { staticClass: "text-dark-50 font-weight-bold" }),
                  _vm._v(_vm._s(this.data.ct_ky_luat.length))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _vm._m(3)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card card-custom gutter-b" }, [
      _c("div", { staticClass: "card-header border-0 pt-5" }, [
        _vm._m(4),
        _vm._v(" "),
        _c("div", { staticClass: "card-toolbar" }, [
          _c("ul", { staticClass: "nav nav-pills nav-pills-sm nav-dark-75" }, [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-light-danger font-weight-bold",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#exampleModalCenter"
                  },
                  on: {
                    click: function($event) {
                      return _vm.handleShowModal(false)
                    }
                  }
                },
                [_c("i", { staticClass: "flaticon-add" })]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        this.data.ct_khen_thuong.length == 0
          ? _c(
              "div",
              {
                staticClass:
                  "font-weight-mormal font-size-lg timeline-content text-muted pl-3"
              },
              [
                _vm._v(
                  "\n                Chưa có khen thưởng nào\n            "
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        this.data.ct_khen_thuong.length > 0
          ? _c(
              "div",
              { staticClass: "timeline timeline-justified timeline-4" },
              [
                _c("div", { staticClass: "timeline-bar" }),
                _vm._v(" "),
                _vm._l(this.data.ct_khen_thuong, function(kt) {
                  return _c(
                    "div",
                    { key: kt.id, staticClass: "timeline-items" },
                    [
                      _c("div", { staticClass: "timeline-item" }, [
                        _vm._m(5, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-label" }, [
                          _c(
                            "span",
                            { staticClass: "text-success font-weight-bold" },
                            [_vm._v(_vm._s(kt.ngay_qd.split(" ")[0]))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-content" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-between"
                            },
                            [
                              _c("div", { staticClass: "mr-2" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "text-dark-75 text-hover-success font-weight-bold"
                                  },
                                  [_vm._v(_vm._s(kt.khen_thuong.name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "dropdown ml-2",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    title: "",
                                    "data-placement": "left",
                                    "data-original-title": "Quick actions"
                                  }
                                },
                                [
                                  _vm._m(6, true),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "dropdown-menu p-0 m-0 dropdown-menu-right"
                                    },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "navi navi-hover" },
                                        [
                                          _c(
                                            "li",
                                            { staticClass: "navi-item" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "navi-link",
                                                  attrs: {
                                                    href: "javascript:;",
                                                    title: "Delete"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.handleRemoveKhenThuong(
                                                        kt
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._m(7, true)]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mx-5" }, [
                            _c("div", {}, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-weight-bolder text-dark-75 mr-3"
                                },
                                [
                                  _vm._v(
                                    "Nội Dung :\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(kt.noi_dung) +
                                  "\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-3" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-weight-bolder text-dark-75 mr-2"
                                },
                                [
                                  _vm._v(
                                    "Hình Thức :\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(kt.hinh_thuc) +
                                  "\n                                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
            )
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card card-custom gutter-b" }, [
      _c("div", { staticClass: "card-header border-0 pt-5" }, [
        _vm._m(8),
        _vm._v(" "),
        _c("div", { staticClass: "card-toolbar" }, [
          _c("ul", { staticClass: "nav nav-pills nav-pills-sm nav-dark-75" }, [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-light-danger font-weight-bold",
                  attrs: {
                    "data-toggle": "modal",
                    "data-target": "#exampleModalCenter"
                  },
                  on: {
                    click: function($event) {
                      return _vm.handleShowModal(true)
                    }
                  }
                },
                [_c("i", { staticClass: "flaticon-add" })]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        this.data.ct_ky_luat.length == 0
          ? _c(
              "div",
              {
                staticClass:
                  "font-weight-mormal font-size-lg timeline-content text-muted pl-3"
              },
              [_vm._v("\n                Chưa có kỷ luật nào\n            ")]
            )
          : _vm._e(),
        _vm._v(" "),
        this.data.ct_ky_luat.length > 0
          ? _c(
              "div",
              { staticClass: "timeline timeline-justified timeline-4" },
              [
                _c("div", { staticClass: "timeline-bar" }),
                _vm._v(" "),
                _vm._l(this.data.ct_ky_luat, function(kl) {
                  return _c(
                    "div",
                    { key: kl.id, staticClass: "timeline-items" },
                    [
                      _c("div", { staticClass: "timeline-item" }, [
                        _vm._m(9, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-label" }, [
                          _c(
                            "span",
                            { staticClass: "text-primary font-weight-bold" },
                            [_vm._v(_vm._s(kl.ngay_kl.split(" ")[0]))]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-content" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-flex align-items-center justify-content-between"
                            },
                            [
                              _c("div", { staticClass: "mr-2" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "text-dark-75 text-hover-primary font-weight-bold"
                                  },
                                  [_vm._v(_vm._s(kl.ky_luat.name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass: "dropdown ml-2",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    title: "",
                                    "data-placement": "left",
                                    "data-original-title": "Quick actions"
                                  }
                                },
                                [
                                  _vm._m(10, true),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "dropdown-menu p-0 m-0 dropdown-menu-right"
                                    },
                                    [
                                      _c(
                                        "ul",
                                        { staticClass: "navi navi-hover" },
                                        [
                                          _c(
                                            "li",
                                            { staticClass: "navi-item" },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "navi-link",
                                                  attrs: {
                                                    href: "javascript:;",
                                                    title: "Delete"
                                                  },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.handleRemoveKyLuat(
                                                        kl
                                                      )
                                                    }
                                                  }
                                                },
                                                [_vm._m(11, true)]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "mx-5" }, [
                            _c("div", {}, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-weight-bolder text-dark-75 mr-3"
                                },
                                [
                                  _vm._v(
                                    "Nguyên Nhân :\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(kl.nguyen_nhan) +
                                  "\n                                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "mt-3" }, [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "font-weight-bolder text-dark-75 mr-2"
                                },
                                [
                                  _vm._v(
                                    "Hình Thức :\n                                    "
                                  )
                                ]
                              ),
                              _vm._v(
                                "\n                                    " +
                                  _vm._s(kl.hinh_thuc) +
                                  "\n                                "
                              )
                            ])
                          ])
                        ])
                      ])
                    ]
                  )
                })
              ],
              2
            )
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModalCenter",
          "data-backdrop": "static",
          tabindex: "-1",
          role: "dialog",
          "aria-labelledby": "staticBackdrop",
          "aria-hidden": "true"
        }
      },
      [
        _c(
          "div",
          {
            staticClass: "modal-dialog modal-dialog-centered modal-lg",
            attrs: { role: "document" }
          },
          [
            _c("div", { staticClass: "modal-content" }, [
              _c("div", { staticClass: "modal-header" }, [
                _c(
                  "h5",
                  {
                    staticClass: "modal-title",
                    attrs: { id: "exampleModalLabel" }
                  },
                  [
                    _vm._v(
                      "\n                        " +
                        _vm._s(_vm.modalTitle) +
                        "\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(12)
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _vm.alert.isShowAlert
                  ? _c(
                      "div",
                      { class: _vm.alert.className, attrs: { role: "alert" } },
                      [
                        _c("div", { staticClass: "alert-icon" }, [
                          _c("i", { class: _vm.alert.iconClassname })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "alert-text" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(_vm.alert.message) +
                              "\n                        "
                          )
                        ])
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  { attrs: { "data-scroll": "true", "data-height": "300" } },
                  [
                    _vm.isKT
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "form-group row fv-plugins-icon-container"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-3 col-form-label text-right"
                              },
                              [_vm._v("Chọn loại khen thưởng:")]
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
                                          value: _vm.KTKLRecord.ma_khen_thuong,
                                          expression:
                                            "KTKLRecord.ma_khen_thuong"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.KTKLRecord,
                                            "ma_khen_thuong",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.khen_thuong, function(item) {
                                      return _c(
                                        "option",
                                        {
                                          key: item.id,
                                          domProps: { value: item.id }
                                        },
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
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isKT
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "form-group row fv-plugins-icon-container"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-3 col-form-label text-right"
                              },
                              [_vm._v("Chọn loại kỷ luật:")]
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
                                          value: _vm.KTKLRecord.ma_ky_luat,
                                          expression: "KTKLRecord.ma_ky_luat"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.KTKLRecord,
                                            "ma_ky_luat",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    _vm._l(_vm.ky_luat, function(item) {
                                      return _c(
                                        "option",
                                        {
                                          key: item.id,
                                          domProps: { value: item.id }
                                        },
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
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isKT
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "form-group row fv-plugins-icon-container"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-3 col-form-label text-right"
                              },
                              [_vm._v("Ngày quyết định :")]
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
                                        value: _vm.KTKLRecord.ngay_qd,
                                        expression: "KTKLRecord.ngay_qd"
                                      }
                                    ],
                                    staticClass:
                                      "form-control form-control-solid form-control-lg",
                                    attrs: {
                                      placeholder: "ngày/tháng/năm",
                                      type: "text"
                                    },
                                    domProps: { value: _vm.KTKLRecord.ngay_qd },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.KTKLRecord,
                                          "ngay_qd",
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
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isKT
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "form-group row fv-plugins-icon-container"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-3 col-form-label text-right"
                              },
                              [_vm._v("Ngày kỷ luật :")]
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
                                        value: _vm.KTKLRecord.ngay_kl,
                                        expression: "KTKLRecord.ngay_kl"
                                      }
                                    ],
                                    staticClass:
                                      "form-control form-control-solid form-control-lg",
                                    attrs: {
                                      placeholder: "ngày/tháng/năm",
                                      type: "text"
                                    },
                                    domProps: { value: _vm.KTKLRecord.ngay_kl },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.KTKLRecord,
                                          "ngay_kl",
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
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.isKT
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "form-group row fv-plugins-icon-container"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-3 col-form-label text-right"
                              },
                              [_vm._v("Nội dung :")]
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
                                        value: _vm.KTKLRecord.noi_dung,
                                        expression: "KTKLRecord.noi_dung"
                                      }
                                    ],
                                    staticClass:
                                      "form-control form-control-solid form-control-lg",
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.KTKLRecord.noi_dung
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.KTKLRecord,
                                          "noi_dung",
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
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.isKT
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "form-group row fv-plugins-icon-container"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "col-xl-3 col-lg-3 col-form-label text-right"
                              },
                              [_vm._v("Nguyên nhân :")]
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
                                        value: _vm.KTKLRecord.nguyen_nhan,
                                        expression: "KTKLRecord.nguyen_nhan"
                                      }
                                    ],
                                    staticClass:
                                      "form-control form-control-solid form-control-lg",
                                    attrs: { type: "text" },
                                    domProps: {
                                      value: _vm.KTKLRecord.nguyen_nhan
                                    },
                                    on: {
                                      input: function($event) {
                                        if ($event.target.composing) {
                                          return
                                        }
                                        _vm.$set(
                                          _vm.KTKLRecord,
                                          "nguyen_nhan",
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
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "form-group row fv-plugins-icon-container"
                      },
                      [
                        _c(
                          "label",
                          {
                            staticClass:
                              "col-xl-3 col-lg-3 col-form-label text-right"
                          },
                          [_vm._v("Hình thức :")]
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
                                    value: _vm.KTKLRecord.hinh_thuc,
                                    expression: "KTKLRecord.hinh_thuc"
                                  }
                                ],
                                staticClass:
                                  "form-control form-control-solid form-control-lg",
                                attrs: { type: "text" },
                                domProps: { value: _vm.KTKLRecord.hinh_thuc },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.KTKLRecord,
                                      "hinh_thuc",
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
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-light-primary font-weight-bold",
                    attrs: { type: "button", "data-dismiss": "modal" },
                    on: { click: _vm.handleCloseModal }
                  },
                  [
                    _vm._v(
                      "\n                        Đóng\n                    "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary font-weight-bold",
                    attrs: { type: "button" },
                    on: { click: _vm.handleSaveKTKL }
                  },
                  [
                    _vm._v(
                      "\n                        Thêm\n                    "
                    )
                  ]
                )
              ])
            ])
          ]
        )
      ]
    )
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
          "d-flex align-items-center justify-content-between flex-wrap mt-2"
      },
      [_c("div", { staticClass: "mr-3" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-4" }, [
      _c("i", {
        staticClass: "flaticon-piggy-bank icon-2x text-muted font-weight-bold"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "mr-4" }, [
      _c("i", {
        staticClass: "flaticon-confetti icon-2x text-muted font-weight-bold"
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex align-items-center flex-lg-fill mr-5 my-1" },
      [
        _c("span", { staticClass: "mr-4" }, [
          _c("i", {
            staticClass:
              "flaticon-pie-chart icon-2x text-muted font-weight-bold"
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "d-flex flex-column text-dark-75" }, [
          _c("span", { staticClass: "font-weight-bolder font-size-sm" }, [
            _vm._v("Lương")
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "font-weight-bolder font-size-h5" }, [
            _c("span", { staticClass: "text-dark-50 font-weight-bold" }, [
              _vm._v("$")
            ]),
            _vm._v("782,300")
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "card-title align-items-start flex-column" },
      [
        _c("span", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("Danh sách khen thưởng")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-badge" }, [
      _c("div", { staticClass: "bg-success" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-hover-light-primary btn-sm btn-icon",
        attrs: {
          href: "#",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "ki ki-more-hor text-primary" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "navi-text" }, [
      _c(
        "span",
        { staticClass: "label label-xl label-inline label-light-success" },
        [_vm._v("Xóa")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "h3",
      { staticClass: "card-title align-items-start flex-column" },
      [
        _c("span", { staticClass: "card-label font-weight-bolder text-dark" }, [
          _vm._v("Danh sách kỷ luật")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "timeline-badge" }, [
      _c("div", { staticClass: "bg-danger" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-hover-light-primary btn-sm btn-icon",
        attrs: {
          href: "#",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [_c("i", { staticClass: "ki ki-more-hor text-primary" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "navi-text" }, [
      _c(
        "span",
        { staticClass: "label label-xl label-inline label-light-success" },
        [_vm._v("Xóa")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close"
        }
      },
      [
        _c("i", {
          staticClass: "ki ki-close",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/models/chi_tiet.js":
/*!****************************************************!*\
  !*** ./resources/js/components/models/chi_tiet.js ***!
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




var ChiTiet = /*#__PURE__*/function (_CrudModel) {
  _inherits(ChiTiet, _CrudModel);

  var _super = _createSuper(ChiTiet);

  function ChiTiet(modelName) {
    _classCallCheck(this, ChiTiet);

    return _super.call(this, modelName);
  }

  _createClass(ChiTiet, [{
    key: "insertChiTiet",
    value: function insertChiTiet(param) {
      return this.api.post("".concat(this.modelName), param).then(function (res) {
        return res.data;
      })["catch"](function (error) {
        return {
          success: false,
          message: error
        };
      });
    }
  }]);

  return ChiTiet;
}(_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (ChiTiet);

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

/***/ "./resources/js/components/models/khenthuong.js":
/*!******************************************************!*\
  !*** ./resources/js/components/models/khenthuong.js ***!
  \******************************************************/
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



var KhenThuong = /*#__PURE__*/function (_CrudModel) {
  _inherits(KhenThuong, _CrudModel);

  var _super = _createSuper(KhenThuong);

  function KhenThuong() {
    _classCallCheck(this, KhenThuong);

    return _super.call(this, "khenthuong");
  }

  _createClass(KhenThuong, [{
    key: "insertRecord",
    value: function insertRecord(param) {
      return this.api.post("khenthuong/add", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "deleteCtKt",
    value: function deleteCtKt(id) {
      return this.api["delete"]("nhanvien/khenthuong/".concat(id)).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }]);

  return KhenThuong;
}(_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (KhenThuong);

/***/ }),

/***/ "./resources/js/components/models/kyluat.js":
/*!**************************************************!*\
  !*** ./resources/js/components/models/kyluat.js ***!
  \**************************************************/
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



var KyLuat = /*#__PURE__*/function (_CrudModel) {
  _inherits(KyLuat, _CrudModel);

  var _super = _createSuper(KyLuat);

  function KyLuat() {
    _classCallCheck(this, KyLuat);

    return _super.call(this, "kyluat");
  }

  _createClass(KyLuat, [{
    key: "insertRecord",
    value: function insertRecord(param) {
      return this.api.post("kyluat/add", param).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }, {
    key: "deleteCtKl",
    value: function deleteCtKl(id) {
      return this.api["delete"]("nhanvien/kyluat/".concat(id)).then(function (res) {
        return res.data;
      })["catch"](function (err) {
        return {
          success: false,
          message: err
        };
      });
    }
  }]);

  return KyLuat;
}(_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (KyLuat);

/***/ }),

/***/ "./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chi_Tiet_Nhan_Vien_vue_vue_type_template_id_066759c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0& */ "./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0&");
/* harmony import */ var _Chi_Tiet_Nhan_Vien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chi_Tiet_Nhan_Vien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chi_Tiet_Nhan_Vien_vue_vue_type_template_id_066759c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chi_Tiet_Nhan_Vien_vue_vue_type_template_id_066759c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Chi_Tiet_Nhan_Vien.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chi_Tiet_Nhan_Vien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chi_Tiet_Nhan_Vien_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chi_Tiet_Nhan_Vien_vue_vue_type_template_id_066759c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=template&id=066759c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chi_Tiet_Nhan_Vien_vue_vue_type_template_id_066759c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chi_Tiet_Nhan_Vien_vue_vue_type_template_id_066759c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);