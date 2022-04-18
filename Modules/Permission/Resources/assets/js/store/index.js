import {createStore} from 'vuex';
import axiosClient from "../axios";

// Create a new store instance.
const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    }
  },
  getters: {},
  actions: {
    login({commit}, user) {
      return axiosClient.post('/token', user)
        .then(({data}) => {
          commit("setUser", data);
          return data;
        });
    }
  },
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    }
  },
  modules: {}
});

export default store;

