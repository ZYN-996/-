import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);
import isFalse from "./isFalse";
export default new Vuex.Store({
  modules: {
    isFalse,
  },
  strict: true,
});
