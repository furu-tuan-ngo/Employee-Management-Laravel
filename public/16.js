(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _models_crud_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/crud-model */ "./resources/js/components/models/crud-model.js");
=======
/* harmony import */ var _models_khenthuong__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/khenthuong */ "./resources/js/components/models/khenthuong.js");
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
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
<<<<<<< HEAD
      data: {
        name: ""
      },
      alert: {
        className: "",
        isSuccess: false,
        text: ""
=======
      submitClass: "btn btn-success",
      record: {},
      alert: {
        isError: false,
        className: "alert alert-custom alert-light-primary fade show mb-5",
        message: "Fail to update new record ."
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
      }
    };
  },
  created: function created() {
    var _this = this;

<<<<<<< HEAD
    var danTocModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("dantoc");
    danTocModel.getOne(this.$route.params.id).then(function (res) {
      if (res.success) {
        _this.data = res.data;
      } else {
        console.error(res.message);
=======
    var khenThuong = new _models_khenthuong__WEBPACK_IMPORTED_MODULE_0__["default"]();
    khenThuong.get(this.$route.params.id).then(function (res) {
      if (res.success) {
        _this.record = res.data;
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
      }
    });
  },
  methods: {
<<<<<<< HEAD
    InsertRecord: function InsertRecord() {
      var _this2 = this;

      var danTocModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("dantoc");
      danTocModel.update({
        id: this.$route.params.id,
        name: this.data.name
      }).then(function (res) {
        _this2.alert.className = "alert alert-custom alert-light-success fade show mb-5";
        _this2.alert.isSuccess = true;
        _this2.alert.text = "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng.";

        _this2.$router.push('/dan-toc');
      })["catch"](function (err) {
        console.log(err);
        _this2.alert.className = "alert alert-custom alert-light-danger fade show mb-5";
        _this2.alert.isSuccess = true;
        _this2.alert.text = "C\u1EADp nh\u1EADt Th\u1EA5t b\u1EA1i ";
      });
=======
    updateRecord: function updateRecord() {
      var _this2 = this;

      this.submitClass += "  spinner spinner-white spinner-right";
      this.resetAlert();

      if (!this.validateNull()) {
        this.handleError("All fields must be completed.");
        return;
      }

      var fields = _objectSpread({}, this.record);

      var khenthuongModel = new _models_khenthuong__WEBPACK_IMPORTED_MODULE_0__["default"]();
      khenthuongModel.update(fields).then(function (res) {
        _this2.submitClass = "btn btn-success";

        if (res.success) {
          _this2.alert.isError = true;
          _this2.alert.message = "Update new record successfully.";
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
    },
    handleSuccess: function handleSuccess() {
      this.alert.className = "alert alert-custom alert-light-success fade show mb-5";
      this.alert.message = "Insert record successfully .";
    },
    resetAlert: function resetAlert() {
      this.alert.isError = false;
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
    }
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=template&id=235eff7b&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=template&id=235eff7b& ***!
  \*********************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        this.alert.isSuccess
          ? _c(
              "div",
              { class: this.alert.className, attrs: { role: "alert" } },
              [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "alert-text" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(this.alert.text) +
                      "\n                "
                  )
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("h5", { staticClass: "text-dark font-weight-bold mb-10" }, [
          _vm._v("\n                Cập nhật Dân Tộc :\n            ")
        ]),
        _vm._v(" "),
        _c("form", [
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Tên Dân Tộc :")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.name,
                      expression: "data.name"
                    }
                  ],
                  staticClass:
                    "form-control form-control-solid form-control-lg",
                  attrs: {
                    placeholder: "nhập tên dân tộc",
                    type: "text",
                    name: "name",
                    autocomplete: "off"
                  },
                  domProps: { value: _vm.data.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "name", $event.target.value)
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
              [_vm._v("\n                        Sửa\n                    ")]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-3" })
=======
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
                  [_vm._v("Tên Hạn Mục")]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.record.name,
                        expression: "record.name"
                      }
                    ],
                    staticClass:
                      "form-control form-control-solid form-control-lg",
                    attrs: { type: "text" },
                    domProps: { value: _vm.record.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.record, "name", $event.target.value)
                      }
                    }
                  }),
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
                    on: { click: _vm.updateRecord }
                  },
                  [
                    _vm._v(
                      "\n                            sửa\n                        "
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
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
=======
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
                    "\n                    Sửa Thông Tin Khen Thưởng\n                "
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
    return _c("div", { staticClass: "alert-icon" }, [
      _c("i", { staticClass: "flaticon-warning" })
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
<<<<<<< HEAD
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
=======
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



<<<<<<< HEAD

=======
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
var CrudModel = /*#__PURE__*/function () {
  function CrudModel(modelName) {
    _classCallCheck(this, CrudModel);

    this.modelName = modelName;
<<<<<<< HEAD
    this.baseUrl = "http://employee-management-v4.herokuapp.com/api/";
=======
    this.baseUrl = "http://localhost:8000/api/";
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
    this.accessToken = localStorage.getItem("access-token");
  }

  _createClass(CrudModel, [{
    key: "getAll",
    value: function getAll() {
<<<<<<< HEAD
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.api.get(this.modelName + "s", {
        params: params,
        paramsSerializer: function paramsSerializer(params) {
          return qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify(params);
        }
      }).then(function (res) {
=======
      return this.api.get(this.modelName + "s").then(function (res) {
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
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
<<<<<<< HEAD
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
=======
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
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
/***/ "./resources/js/components/views/Dan_Toc_Edit.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/views/Dan_Toc_Edit.vue ***!
  \********************************************************/
=======
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
  }]);

  return KhenThuong;
}(_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (KhenThuong);

/***/ }),

/***/ "./resources/js/components/views/KhenThuong_Edit_Form.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/views/KhenThuong_Edit_Form.vue ***!
  \****************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Dan_Toc_Edit_vue_vue_type_template_id_235eff7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dan_Toc_Edit.vue?vue&type=template&id=235eff7b& */ "./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=template&id=235eff7b&");
/* harmony import */ var _Dan_Toc_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dan_Toc_Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=script&lang=js&");
=======
/* harmony import */ var _KhenThuong_Edit_Form_vue_vue_type_template_id_6a36171a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a& */ "./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a&");
/* harmony import */ var _KhenThuong_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KhenThuong_Edit_Form.vue?vue&type=script&lang=js& */ "./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=script&lang=js&");
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
<<<<<<< HEAD
  _Dan_Toc_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dan_Toc_Edit_vue_vue_type_template_id_235eff7b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dan_Toc_Edit_vue_vue_type_template_id_235eff7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _KhenThuong_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _KhenThuong_Edit_Form_vue_vue_type_template_id_6a36171a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _KhenThuong_Edit_Form_vue_vue_type_template_id_6a36171a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/components/views/Dan_Toc_Edit.vue"
=======
component.options.__file = "resources/js/components/views/KhenThuong_Edit_Form.vue"
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
=======
/***/ "./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dan_Toc_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dan_Toc_Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dan_Toc_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=template&id=235eff7b&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=template&id=235eff7b& ***!
  \***************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KhenThuong_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./KhenThuong_Edit_Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KhenThuong_Edit_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a& ***!
  \***********************************************************************************************/
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dan_Toc_Edit_vue_vue_type_template_id_235eff7b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dan_Toc_Edit.vue?vue&type=template&id=235eff7b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Dan_Toc_Edit.vue?vue&type=template&id=235eff7b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dan_Toc_Edit_vue_vue_type_template_id_235eff7b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dan_Toc_Edit_vue_vue_type_template_id_235eff7b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KhenThuong_Edit_Form_vue_vue_type_template_id_6a36171a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/KhenThuong_Edit_Form.vue?vue&type=template&id=6a36171a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KhenThuong_Edit_Form_vue_vue_type_template_id_6a36171a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_KhenThuong_Edit_Form_vue_vue_type_template_id_6a36171a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 70f680a551ae3d0412f7b39d4d9179ab221feb9a



/***/ })

}]);