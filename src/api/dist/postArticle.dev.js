"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArtile = getArtile;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getArtile() {
  return regeneratorRuntime.async(function getArtile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("http://120.46.131.162:8080/index", {
            params: {
              page: 1,
              limit: 1
            }
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}