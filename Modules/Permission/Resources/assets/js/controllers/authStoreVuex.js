import axiosClient from "../helper/axios";

const authStoreVuex = {
  namespaced: true,
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
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
    },
  },
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
    },
  },
  getters: {}
}

export default authStoreVuex;
