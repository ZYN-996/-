import VueRouter from "vue-router";

import routes from "./routes";

export default new VueRouter({
  //配置
  routes: routes,
  linkActiveClass: "active",
  mode: "hash",
});
