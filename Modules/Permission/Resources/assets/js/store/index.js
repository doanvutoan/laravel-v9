import {createStore} from 'vuex'

// Create a new store instance.
const store = createStore({
  state: {
    user: {
      data: {
        name: 'harry',
        email: 'harry@gmail.com',
        imageUrl: ""
      },
      token: 123
    }
  },
  getters: {},
  actions: {},
  mutations: {
    logout: state => {
      state.user.data = {};
      state.user.token = null;
    }
  },
  modules: {}
});

export default store;

