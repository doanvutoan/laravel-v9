import {createStore} from 'vuex';
import authStoreVuex from "./authStoreVuex";
import guardStoreVuex from "./guardStoreVuex";
import testStoreVuex from "./testStoreVuex";

// Create a new store instance.
const store = createStore({
  modules: {
    authController: authStoreVuex,
    guardController: guardStoreVuex,
    // testController: testStoreVuex,
  }
});

export default store;

