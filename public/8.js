(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Bang_Luong.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_crud_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/crud-model */ "./resources/js/components/models/crud-model.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: [],
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years: [],
      defauldTime: {
        month: Number.parseInt(new Date().getMonth()) + 1,
        year: Number.parseInt(new Date().getFullYear())
      },
      defaultMonth: Number.parseInt(new Date().getMonth()) + 1,
      defaultYear: Number.parseInt(new Date().getFullYear())
    };
  },
  created: function created() {
    var _this = this;

    // Handle Years
    var startYear = 2015;
    var endYear = this.defauldTime.year + 5;
    this.years = Array(endYear - startYear).fill().map(function (_, idx) {
      return startYear + idx;
    }); // End handle years

    var bangluongModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("bangluong");
    bangluongModel.getAll({
      year: this.defauldTime.year.toString(),
      month: this.defauldTime.month.toString()
    }).then(function (res) {
      if (res.success) {
        _this.data = res.data;
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  },
  methods: {
    handleSearch: function handleSearch() {
      var _this2 = this;

      var bangluongModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("bangluong");
      bangluongModel.getAll({
        year: this.defauldTime.year.toString(),
        month: this.defauldTime.month.toString()
      }).then(function (res) {
        if (res.success) {
          _this2.data = res.data;
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    },
    handleRemove: function handleRemove(item) {
      var _this3 = this;

      console.log(item);
      Swal.fire({
        title: "X\xE1c nh\u1EADn x\xF3a b\u1EA3ng l\u01B0\u01A1ng c\u1EE7a : \n ".concat(item.nhan_vien.ho_ten, " \n trong th\xE1ng ").concat(item.thang, " n\u0103m ").concat(item.nam),
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        preConfirm: function preConfirm() {
          var bangLuongModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("bangluong");
          return bangLuongModel["delete"](item.id).then(function (res) {
            return res;
          });
        }
      }).then(function (result) {
        if (result.value) {
          if (result.value.success) {
            _this3.data = _this3.data.filter(function (rec) {
              return rec.id != item.id;
            });
            Swal.fire("XÓA THÀNH CÔNG", "", "success");
          } else {
            Swal.fire("Đã có lỗi khi gửi", "", "error");
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong.vue?vue&type=template&id=45bc18f8&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Bang_Luong.vue?vue&type=template&id=45bc18f8& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card card-custom container" }, [
    _c("div", { staticClass: "card-header py-3" }, [
      _c("div", { staticClass: "card-title" }, [
        _c("span", { staticClass: "card-icon" }, [
          _c("span", { staticClass: "svg-icon svg-icon-md svg-icon-primary" }, [
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
                      attrs: { x: "0", y: "0", width: "24", height: "24" }
                    }),
                    _vm._v(" "),
                    _c("rect", {
                      attrs: {
                        fill: "#000000",
                        opacity: "0.3",
                        x: "12",
                        y: "4",
                        width: "3",
                        height: "13",
                        rx: "1.5"
                      }
                    }),
                    _vm._v(" "),
                    _c("rect", {
                      attrs: {
                        fill: "#000000",
                        opacity: "0.3",
                        x: "7",
                        y: "9",
                        width: "3",
                        height: "8",
                        rx: "1.5"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      attrs: {
                        d:
                          "M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z",
                        fill: "#000000",
                        "fill-rule": "nonzero"
                      }
                    }),
                    _vm._v(" "),
                    _c("rect", {
                      attrs: {
                        fill: "#000000",
                        opacity: "0.3",
                        x: "17",
                        y: "11",
                        width: "3",
                        height: "6",
                        rx: "1.5"
                      }
                    })
                  ]
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "card-label" }, [
          _vm._v("Danh Sách Bảng Lương")
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-toolbar" },
        [
          _c(
            "router-link",
            {
              staticClass: "btn btn-primary font-weight-bolder",
              attrs: { to: { name: "bangluong-them" } }
            },
            [_c("i", { staticClass: "la la-plus" }), _vm._v("Thêm bảng lương")]
          )
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "mt-2 mb-7" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c("div", { staticClass: "col-lg-9 col-xl-8" }, [
            _c("div", { staticClass: "row align-items-center" }, [
              _c("div", { staticClass: "col-md-4 my-2 my-md-0" }, [
                _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c("label", { staticClass: "mr-3 mb-0 d-none d-md-block" }, [
                    _vm._v("Tháng:")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.defauldTime.month,
                          expression: "defauldTime.month"
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
                            _vm.defauldTime,
                            "month",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.months, function(item) {
                      return _c(
                        "option",
                        { key: item, domProps: { value: item } },
                        [_vm._v(_vm._s(item))]
                      )
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4 my-2 my-md-0" }, [
                _c("div", { staticClass: "d-flex align-items-center" }, [
                  _c("label", { staticClass: "mr-3 mb-0" }, [_vm._v("Năm:")]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.defauldTime.year,
                          expression: "defauldTime.year"
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
                            _vm.defauldTime,
                            "year",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.years, function(y) {
                      return _c("option", { key: y, domProps: { value: y } }, [
                        _vm._v(_vm._s(y))
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-3 col-xl-4 mt-5 mt-lg-0" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-light-primary px-6 font-weight-bold",
                    on: { click: _vm.handleSearch }
                  },
                  [_vm._v("Lọc")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded",
          attrs: { id: "kt_datatable" }
        },
        [
          _c(
            "table",
            {
              staticClass: "datatable-table",
              staticStyle: { display: "block" }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "tbody",
                { staticClass: "datatable-body" },
                _vm._l(this.data, function(item) {
                  return _c(
                    "tr",
                    {
                      key: item.id,
                      staticClass: "datatable-row",
                      staticStyle: { left: "0px" },
                      attrs: { "data-row": "0" }
                    },
                    [
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
                          attrs: {
                            "data-field": "OrderID",
                            "aria-label": "64616-103"
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "110px" }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "text-dark text-hover-primary font-weight-bold",
                                  staticStyle: { width: "110px" },
                                  attrs: {
                                    to: {
                                      name: "nhanvien_chitiet",
                                      params: { id: item.nhan_vien.id }
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(item.nhan_vien.ho_ten))]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
                          attrs: {
                            "data-field": "Country",
                            "aria-label": "Brazil"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "110px" }
                            },
                            [_vm._v(_vm._s(item.phong_ban.name))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
                          attrs: {
                            "data-field": "CompanyEmail",
                            "aria-label": "hboule0@hp.com"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "136px" }
                            },
                            [_vm._v(_vm._s(item.luong_cb))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
                          attrs: {
                            "data-field": "ShipDate",
                            "aria-label": "10/15/2017"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "130px" }
                            },
                            [_vm._v(_vm._s(item.so_ngay_tang_ca))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
                          attrs: {
                            "data-field": "CompanyName",
                            "aria-label": "Casper-Kerluke"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "136px" }
                            },
                            [_vm._v(_vm._s(item.luong_tang_ca))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
                          attrs: {
                            "data-field": "ShipAddress",
                            "aria-label": "698 Oriole Pass"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "110px" }
                            },
                            [_vm._v(_vm._s(item.tien_bao_hiem))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
                          attrs: {
                            "data-field": "Website",
                            "aria-label": "thetimes.co.uk"
                          }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "text-center",
                              staticStyle: { width: "110px" }
                            },
                            [_vm._v(_vm._s(item.thuc_lanh))]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        {
                          staticClass: "datatable-cell",
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
                              _c("div", {
                                staticClass: "dropdown dropdown-inline"
                              }),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "btn btn-sm btn-clean btn-icon mr-2",
                                  attrs: {
                                    to: {
                                      name: "bangluong-sua",
                                      params: { id: item.id }
                                    },
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
                                  staticClass: "btn btn-sm btn-clean btn-icon",
                                  attrs: { title: "Delete" },
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
                        ]
                      )
                    ]
                  )
                }),
                0
              )
            ]
          )
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
    return _c("thead", { staticClass: "datatable-head" }, [
      _c("tr", { staticClass: "datatable-row", staticStyle: { left: "0px" } }, [
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "OrderID" }
          },
          [
            _c(
              "span",
              { staticClass: "text-center", staticStyle: { width: "110px" } },
              [_vm._v("Nhân Viên")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "Country" }
          },
          [
            _c(
              "span",
              { staticClass: "text-center", staticStyle: { width: "110px" } },
              [_vm._v("Phòng Ban")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "CompanyEmail" }
          },
          [
            _c(
              "span",
              { staticClass: "text-center", staticStyle: { width: "136px" } },
              [_vm._v("Lương Cơ Bản")]
            )
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
            _c(
              "span",
              { staticClass: "text-center", staticStyle: { width: "130px" } },
              [_vm._v("Số Ngày Tăng Ca")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "CompanyName" }
          },
          [
            _c(
              "span",
              { staticClass: "text-center", staticStyle: { width: "136px" } },
              [_vm._v("Lương Tăng Ca")]
            )
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
            _c(
              "span",
              { staticClass: "text-center", staticStyle: { width: "110px" } },
              [_vm._v("Tiền Bảo Hiểm")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: { "data-field": "Website" }
          },
          [
            _c(
              "span",
              { staticClass: "text-center", staticStyle: { width: "110px" } },
              [_vm._v("Thực Lãnh")]
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "th",
          {
            staticClass: "datatable-cell datatable-cell-sort",
            attrs: {
              "data-field": "Actions",
              "data-autohide-disabled": "false"
            }
          },
          [
            _c("span", {
              staticClass: "text-center",
              staticStyle: { width: "125px" }
            })
          ]
        )
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

/***/ "./resources/js/components/views/Bang_Luong.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/views/Bang_Luong.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bang_Luong_vue_vue_type_template_id_45bc18f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bang_Luong.vue?vue&type=template&id=45bc18f8& */ "./resources/js/components/views/Bang_Luong.vue?vue&type=template&id=45bc18f8&");
/* harmony import */ var _Bang_Luong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bang_Luong.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Bang_Luong.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Bang_Luong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bang_Luong_vue_vue_type_template_id_45bc18f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bang_Luong_vue_vue_type_template_id_45bc18f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Bang_Luong.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Bang_Luong.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/views/Bang_Luong.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bang_Luong.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Bang_Luong.vue?vue&type=template&id=45bc18f8&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/views/Bang_Luong.vue?vue&type=template&id=45bc18f8& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_vue_vue_type_template_id_45bc18f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Bang_Luong.vue?vue&type=template&id=45bc18f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Bang_Luong.vue?vue&type=template&id=45bc18f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_vue_vue_type_template_id_45bc18f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bang_Luong_vue_vue_type_template_id_45bc18f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);