import axiosClient from "../helper/axios";
const prefix = '/permission';
const guardStoreVuex = {
  namespaced: true,
  state: {
    currentGuard:{
      loading: false,
      data: {}
    },
    guard:{
      loading: false,
      data: {}
    },
  },
  mutations: {
    set_current:(state,loading) =>{
      state.currentGuard.loading = loading;
    },
    set_list:(state,loading) =>{
      state.guard.loading = loading;
    },
    get:(state,item) =>{
      state.currentGuard.data = item.data;
    },
    list:(state,item) =>{
      state.guard.data = item.data;
    },
    save:(state,item)=>{
      state.guard.data = item.data;
    },
    update:(state,item)=>{
      state.guard.data = state.guard.map((s) =>{
        if(s.id == item.id){
          return item.data;
        }
        return s;
      });
    },
    delete:(state,id) =>{

    }
  },
  actions: {
    get({commit},id){
      commit("set_current",true);
      return axiosClient
        .get(`${prefix}/guards/${id}`)
        .then((res)=>{
          commit("set_current",false);
          commit("get",res.data);
          return res;
        });
    },
    save({commit},item){
      if(item.id){
        return axiosClient
          .put(`${prefix}/guards/${item.id}`,item)
          .then((res) => {
            commit("update",res.data);
            return res;
          });
      }else{
        return axiosClient
          .post(`${prefix}/guards`,item)
          .then((res)=>{
            commit("save",res.data);
            return res;
          });
      }
    },
    list({commit}){
      commit("set_list",true);
      return axiosClient
        .get(`${prefix}/guards`)
        .then((res)=>{
          commit("set_list",false);
          commit("list",res.data);
          return res;
        });
    },
    delete({commit},id){
      return axiosClient
        .delete(`${prefix}/guards/${id}`)
        .then((res)=>{
          commit("delete",id);
          return res;
        });
    }
  },
  getters: {}
}

export default guardStoreVuex;
