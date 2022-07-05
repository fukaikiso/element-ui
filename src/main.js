import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

// 设置数据库ip及端口，也可在state中设置共享数据
axios.defaults.baseURL = 'http://127.0.0.1:3000/';

Vue.use(VueAxios, axios);

Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
