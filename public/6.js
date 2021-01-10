(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Chi_Tiet_Nhan_Vien.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_crud_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/crud-model */ "./resources/js/components/models/crud-model.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
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
      displayData: []
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "card card-custom gutter-b" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "d-flex" }, [
          _c("div", { staticClass: "flex-grow-1" }, [
            _c(
              "div",
              {
                staticClass:
                  "d-flex align-items-center justify-content-between flex-wrap mt-2"
              },
              [
                _c("div", { staticClass: "mr-3" }, [
                  _c(
                    "a",
                    {
                      staticClass:
                        "d-flex align-items-center text-dark text-hover-primary font-size-h5 font-weight-bold mr-3"
                    },
                    [
                      _vm._v(
                        _vm._s(_vm.data.ho_ten) +
                          "\n                            "
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
                            staticClass:
                              "svg-icon svg-icon-md svg-icon-gray-500 mr-1"
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
                                          "M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z",
                                        fill: "#000000"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("circle", {
                                      attrs: {
                                        fill: "#000000",
                                        opacity: "0.3",
                                        cx: "19.5",
                                        cy: "17.5",
                                        r: "2.5"
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
                            staticClass:
                              "svg-icon svg-icon-md svg-icon-gray-500 mr-1"
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
                                    _c("mask", { attrs: { fill: "white" } }, [
                                      _c("use", {
                                        attrs: { "xlink:href": "#path-1" }
                                      })
                                    ]),
                                    _vm._v(" "),
                                    _c("g"),
                                    _vm._v(" "),
                                    _c("path", {
                                      attrs: {
                                        d:
                                          "M7,10 L7,8 C7,5.23857625 9.23857625,3 12,3 C14.7614237,3 17,5.23857625 17,8 L17,10 L18,10 C19.1045695,10 20,10.8954305 20,12 L20,18 C20,19.1045695 19.1045695,20 18,20 L6,20 C4.8954305,20 4,19.1045695 4,18 L4,12 C4,10.8954305 4.8954305,10 6,10 L7,10 Z M12,5 C10.3431458,5 9,6.34314575 9,8 L9,10 L15,10 L15,8 C15,6.34314575 13.6568542,5 12,5 Z",
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
                      {
                        staticClass:
                          "text-muted text-hover-primary font-weight-bold"
                      },
                      [
                        _c(
                          "span",
                          {
                            staticClass:
                              "svg-icon svg-icon-md svg-icon-gray-500 mr-1"
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
                                          "M9.82829464,16.6565893 C7.02541569,15.7427556 5,13.1079084 5,10 C5,6.13400675 8.13400675,3 12,3 C15.8659932,3 19,6.13400675 19,10 C19,13.1079084 16.9745843,15.7427556 14.1717054,16.6565893 L12,21 L9.82829464,16.6565893 Z M12,12 C13.1045695,12 14,11.1045695 14,10 C14,8.8954305 13.1045695,8 12,8 C10.8954305,8 10,8.8954305 10,10 C10,11.1045695 10.8954305,12 12,12 Z",
                                        fill: "#000000"
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
                _c(
                  "div",
                  { staticClass: "my-lg-0 my-1" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass:
                          "btn btn-sm btn-primary font-weight-bolder text-uppercase",
                        attrs: {
                          to: {
                            name: "sua_nhanvien",
                            params: { id: this.data.id }
                          }
                        }
                      },
                      [_vm._v("Cập Nhật")]
                    )
                  ],
                  1
                )
              ]
            ),
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
              _vm._m(0),
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
              _vm._m(1),
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
          _vm._m(2)
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card card-custom gutter-b" }, [
      _c("div", { staticClass: "card-body" }, [
        _c("h5", [
          _vm._v("\n                Danh sách khen thưởng :\n            ")
        ]),
        _vm._v(" "),
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
                        _vm._m(3, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-label" }, [
                          _c(
                            "span",
                            { staticClass: "text-success font-weight-bold" },
                            [_vm._v(_vm._s(kt.ngay_qd))]
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
                              _vm._m(4, true)
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
      _c("div", { staticClass: "card-body" }, [
        _c("h5", [
          _vm._v("\n                Danh sách Kỷ Luật :\n            ")
        ]),
        _vm._v(" "),
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
                        _vm._m(5, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "timeline-label" }, [
                          _c(
                            "span",
                            { staticClass: "text-primary font-weight-bold" },
                            [_vm._v(_vm._s(kl.ngay_kl))]
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
                              _vm._m(6, true)
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
    ])
  ])
}
var staticRenderFns = [
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
    return _c("div", { staticClass: "timeline-badge" }, [
      _c("div", { staticClass: "bg-success" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
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
        _c(
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown-menu p-0 m-0 dropdown-menu-right" },
          [
            _c("ul", { staticClass: "navi navi-hover" }, [
              _c("li", { staticClass: "navi-item" }, [
                _c("a", { staticClass: "navi-link", attrs: { href: "#" } }, [
                  _c("span", { staticClass: "navi-text" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "label label-xl label-inline label-light-success"
                      },
                      [_vm._v("Xóa")]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
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
        _c(
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "dropdown-menu p-0 m-0 dropdown-menu-right" },
          [
            _c("ul", { staticClass: "navi navi-hover" }, [
              _c("li", { staticClass: "navi-item" }, [
                _c("a", { staticClass: "navi-link", attrs: { href: "#" } }, [
                  _c("span", { staticClass: "navi-text" }, [
                    _c(
                      "span",
                      {
                        staticClass:
                          "label label-xl label-inline label-light-success"
                      },
                      [_vm._v("Xóa")]
                    )
                  ])
                ])
              ])
            ])
          ]
        )
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