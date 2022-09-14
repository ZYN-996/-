"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _default = [{
  path: "/",
  redirect: "/zonghe",
  children: [{
    name: "综合",
    path: "zonghe",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "关注",
    path: "following",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "后端",
    path: "backend",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "Android",
    path: "android",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "前端",
    path: "frontend",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "ios",
    path: "ios",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "人工智能",
    path: "ai",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "开发工具",
    path: "freebie",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "代码人生",
    path: "career",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }, {
    name: "阅读",
    path: "article",
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
      });
    }
  }],
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/homePage/homePage.vue"));
    });
  }
}, {
  path: "/recommended",
  name: "推荐",
  children: [],
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
    });
  }
}, {
  path: "/newest",
  name: "最新",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  path: "/hottest",
  name: "热榜",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  name: "标签管理",
  path: "/subscribe",
  // redirect: "/subscribe",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/main/homeMain.vue"));
    });
  }
}, {
  path: "/pins",
  name: "沸点",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  path: "/course",
  name: "课程",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  path: "/live",
  name: "直播",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  path: "/zixun",
  name: "资讯",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  path: "/events",
  name: "活动",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  path: "/notFount",
  name: "未找到",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}, {
  name: "acticle",
  path: "/acticle:acticleId",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/articleDetailsPage/articleDetailsPage.vue"));
    });
  }
}, {
  name: "NotFound",
  path: "*",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require("@/views/NotFound/NotFound.vue"));
    });
  }
}];
exports["default"] = _default;