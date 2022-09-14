"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addComment = addComment;
exports.getComment = getComment;
exports.deleteComment = deleteComment;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "http://139.9.48.23:8080/comment";

function addComment(data) {
  return regeneratorRuntime.async(function addComment$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].post(url, _qs["default"].stringify(data), {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
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

function getComment(page, limit, articleId) {
  return regeneratorRuntime.async(function getComment$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_axios["default"].get("http://139.9.48.23:8080/comment?articleId=".concat(articleId, "&page=").concat(page, "&limit=").concat(limit)));

        case 2:
          return _context2.abrupt("return", _context2.sent);

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function deleteComment(id) {
  return regeneratorRuntime.async(function deleteComment$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_axios["default"]["delete"]("http://139.9.48.23:8080/comment?id=".concat(id)));

        case 2:
          return _context3.abrupt("return", _context3.sent);

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}