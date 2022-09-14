"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _callee;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// export default async function (id, flag) {
//   return await axios.post(`http://139.9.48.23:8080/like?id=${id}&flag=${flag}`);
// }
function _callee(id, flag) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _axios["default"].post("http://139.9.48.23:8080/like?id=".concat(id, "&flag=").concat(flag)).then(function (res) {
            return res;
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}