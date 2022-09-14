import Vue from "vue";
// export default new Vue({});
const app = new Vue({});
Vue.prototype.$bus = app;
export default app;
//总线
