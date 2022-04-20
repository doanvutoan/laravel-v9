
import {createApp} from 'vue';
import store from './store-vuex';
import router from './routes'
import app from './index';

createApp(app)
  .use(store)
  .use(router)
  .mount('#app')
