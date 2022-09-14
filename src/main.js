import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
import App from "./App.vue";
import "./eventBus.js";
import router from "./router";
import VueRouter from "vue-router";

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
