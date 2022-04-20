import {createStore} from 'vuex';
import axiosClient from "../helper/axios";

const tmpGuard = [
  {
    'id':1,
    'user_id':1,
    'guard_name':'web'
  },
  {
    'id':2,
    'user_id':1,
    'guard_name':'admin'
  },
  {
    'id':3,
    'user_id':2,
    'guard_name':'writer'
  }
];

// Create a new store instance.
const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
      guard:[...tmpGuard],
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
    },
    logout({commit}){
      return axiosClient.post('/remove-token')
        .then((res) => {
          commit("logout");
          return res;
        })
    }
  },
  mutations: {
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
      sessionStorage.removeItem('TOKEN');
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

