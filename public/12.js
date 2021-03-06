(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {
        name: ""
      },
      alert: {
        className: "",
        isSuccess: false,
        text: ""
      }
    };
  },
  created: function created() {
    var _this = this;

    var chucvuModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("chucvu");
    chucvuModel.getOne(this.$route.params.id).then(function (res) {
      if (res.success) {
        _this.data = res.data;
      } else {
        console.error(res.message);
      }
    });
  },
  methods: {
    InsertRecord: function InsertRecord() {
      var _this2 = this;

      this.alert.isSuccess = false;

      if (this.data.name == "") {
        this.handleError("Tên Chức vụ không được rỗng.");
        return;
      }

      var chucvuModel = new _models_crud_model__WEBPACK_IMPORTED_MODULE_0__["default"]("chucvu");
      chucvuModel.update({
        id: this.$route.params.id,
        name: this.data.name,
        luong_co_ban: this.data.luong_co_ban
      }).then(function (res) {
        _this2.alert.className = "alert alert-custom alert-light-success fade show mb-5";
        _this2.alert.icon_class_name = "fas fa-check";
        _this2.alert.isSuccess = true;
        _this2.alert.text = "C\u1EADp nh\u1EADt th\xE0nh c\xF4ng.";
        setTimeout(function () {
          _this2.$router.push("/chuc-vu");
        }, 500);
      })["catch"](function (err) {
        console.log(err);

        _this2.handleError("Cập nhật chức vụ thất bại.");
      });
    },
    handleError: function handleError(message) {
      this.alert.className = "alert alert-custom alert-light-danger fade show mb-5";
      this.alert.isSuccess = true;
      this.alert.text = message;
      this.alert.icon_class_name = "flaticon2-cross";
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-3" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-6" }, [
        this.alert.isSuccess
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
                      _vm._s(this.alert.text) +
                      "\n                "
                  )
                ])
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _c("h5", { staticClass: "text-dark font-weight-bold mb-10" }, [
          _vm._v("\n                Cập nhật Chức Vụ :\n            ")
        ]),
        _vm._v(" "),
        _c("form", [
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Tên Chức Vụ\n                    ")
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
                  attrs: { type: "text", name: "name", autocomplete: "off" },
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
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group row fv-plugins-icon-container" },
            [
              _c("label", { staticClass: "col-xl-3 col-lg-3 col-form-label" }, [
                _vm._v("Lương Cơ Bản\n                    ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9 col-xl-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.data.luong_co_ban,
                      expression: "data.luong_co_ban"
                    }
                  ],
                  staticClass:
                    "form-control form-control-solid form-control-lg",
                  attrs: { type: "text", name: "name", autocomplete: "off" },
                  domProps: { value: _vm.data.luong_co_ban },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.data, "luong_co_ban", $event.target.value)
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
    ])
  ])
}
var staticRenderFns = []
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

/***/ "./resources/js/components/views/Chuc_Vu_Edit.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/views/Chuc_Vu_Edit.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chuc_Vu_Edit_vue_vue_type_template_id_d53f7dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac& */ "./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac&");
/* harmony import */ var _Chuc_Vu_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chuc_Vu_Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chuc_Vu_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chuc_Vu_Edit_vue_vue_type_template_id_d53f7dac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chuc_Vu_Edit_vue_vue_type_template_id_d53f7dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/Chuc_Vu_Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chuc_Vu_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chuc_Vu_Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chuc_Vu_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chuc_Vu_Edit_vue_vue_type_template_id_d53f7dac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/Chuc_Vu_Edit.vue?vue&type=template&id=d53f7dac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chuc_Vu_Edit_vue_vue_type_template_id_d53f7dac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chuc_Vu_Edit_vue_vue_type_template_id_d53f7dac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);