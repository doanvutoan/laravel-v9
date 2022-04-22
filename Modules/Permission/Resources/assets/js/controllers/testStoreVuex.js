const moduleA = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    increment (state) {
      state.count++;
      console.log('increment');
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ commit, getters}) {
      commit('increment');
      getters.doubleCount;
    }
  },
  getters: {
    doubleCount (state){
      console.log('doubleCount');
      return state.count * 2
    },
  }
}

export default moduleA
