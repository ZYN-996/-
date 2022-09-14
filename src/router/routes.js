export default [
  {
    path: "/",
    redirect: "/zonghe",
    children: [
      {
        name: "综合",
        path: "zonghe",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "关注",
        path: "following",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "后端",
        path: "backend",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "Android",
        path: "android",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "前端",
        path: "frontend",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "ios",
        path: "ios",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "人工智能",
        path: "ai",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "开发工具",
        path: "freebie",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "代码人生",
        path: "career",
        component: () => import("@/views/main/homeMain.vue"),
      },
      {
        name: "阅读",
        path: "article",
        component: () => import("@/views/main/homeMain.vue"),
      },
    ],
    component: () => import("@/views/homePage/homePage.vue"),
  },
  {
    path: "/recommended",
    name: "推荐",
    children: [],
    component: () => import("@/views/main/homeMain.vue"),
  },
  {
    path: "/newest",
    name: "最新",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
  {
    path: "/hottest",
    name: "热榜",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },

  {
    name: "标签管理",
    path: "/subscribe",
    // redirect: "/subscribe",
    component: () => import("@/views/main/homeMain.vue"),
  },

  {
    path: "/pins",
    name: "沸点",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
  {
    path: "/course",
    name: "课程",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
  {
    path: "/live",
    name: "直播",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
  {
    path: "/zixun",
    name: "资讯",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
  {
    path: "/events",
    name: "活动",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },

  {
    path: "/notFount",
    name: "未找到",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
  {
    name: "acticle",
    path: "/acticle:acticleId",

    component: () =>
      import("@/views/articleDetailsPage/articleDetailsPage.vue"),
  },

  {
    name: "NotFound",
    path: "*",
    component: () => import("@/views/NotFound/NotFound.vue"),
  },
];
