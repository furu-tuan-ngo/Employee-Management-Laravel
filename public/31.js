(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/js/components/models/crud-model.js":
/*!******************************************************!*\
  !*** ./resources/js/components/models/crud-model.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\resources\\js\\components\\models\\crud-model.js: Unexpected token (7:0)\n\n\u001b[0m \u001b[90m  5 | \u001b[39m    constructor(modelName) {\u001b[0m\n\u001b[0m \u001b[90m  6 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmodelName \u001b[33m=\u001b[39m modelName\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m\u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbaseUrl \u001b[33m=\u001b[39m \u001b[32m\"http://localhost:8000/api/\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 | \u001b[39m\u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 | \u001b[39m        \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mbaseUrl \u001b[33m=\u001b[39m \u001b[32m\"http://127.0.0.1:8000/api/\"\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:748:17)\n    at Parser.raiseWithData (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.raise (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:735:17)\n    at Parser.unexpected (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9101:16)\n    at Parser.parseExprAtom (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10575:20)\n    at Parser.parseExprSubscripts (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10150:23)\n    at Parser.parseUpdate (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10130:21)\n    at Parser.parseMaybeUnary (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:10119:17)\n    at Parser.parseExprOps (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9989:23)\n    at Parser.parseMaybeConditional (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9963:23)\n    at Parser.parseMaybeAssign (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9926:21)\n    at Parser.parseExpressionBase (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9871:23)\n    at C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9865:39\n    at Parser.allowInAnd (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11541:16)\n    at Parser.parseExpression (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:9865:17)\n    at Parser.parseStatementContent (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11807:23)\n    at Parser.parseStatement (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseBlock (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12233:10)\n    at Parser.parseFunctionBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11221:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11205:10)\n    at Parser.parseMethod (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11155:10)\n    at Parser.pushClassMethod (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12701:30)\n    at Parser.parseClassMemberWithIsStatic (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12590:12)\n    at Parser.parseClassMember (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12532:10)\n    at C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12477:14\n    at Parser.withTopicForbiddingContext (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11516:14)\n    at Parser.parseClassBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12454:10)\n    at Parser.parseClass (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12427:22)\n    at Parser.parseStatementContent (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11718:21)\n    at Parser.parseStatement (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11676:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12258:25)\n    at Parser.parseBlockBody (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:12249:10)\n    at Parser.parseTopLevel (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:11607:10)\n    at Parser.parse (C:\\Users\\ngoco\\OneDrive\\Desktop\\Employee-Management\\employee-management-v3\\node_modules\\@babel\\parser\\lib\\index.js:13415:10)");

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

/***/ })

}]);