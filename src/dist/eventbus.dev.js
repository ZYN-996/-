"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export default new Vue({});
var app = new _vue["default"]({});
_vue["default"].prototype.$bus = app;
var _default = app; //总线

exports["default"] = _default;