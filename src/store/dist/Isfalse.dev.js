"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  namespaced: true,
  state: {
    isAccording: true
  },
  mutations: {
    setLoading: function setLoading(state, payload) {
      state.isAccording = payload;
    }
  }
};
exports["default"] = _default;