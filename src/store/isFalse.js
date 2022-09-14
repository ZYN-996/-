export default {
  namespaced: true,
  state: {
    isAccording: true,
  },
  mutations: {
    setLoading(state, payload) {
      state.isAccording = payload;
    },
  },
};
