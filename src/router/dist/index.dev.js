"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _vueRouter["default"]({
  //配置
  routes: _routes["default"],
  linkActiveClass: "active",
  mode: "hash"
});

exports["default"] = _default;