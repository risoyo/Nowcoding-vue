import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
const state = {
  count: 0,
  token: ''
};

const mutations = {
  mutationsAddCount(state, n = 0) {
    return (state.count += n);
  }
};

const actions = {
  actionsAddCount(context, n = 0) {
    console.log(context);
    return context.commit('mutationsAddCount', n);
  }
};

const getters = {
  getterUserInfo(state) {
    return state.count;
  },
  getterToken(state) {
    return state.token;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(val) {
        return {
          // 只储存state中的count
          count: val.count
        };
      }
    })
  ]
});
