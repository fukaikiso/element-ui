import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MintUI from 'mint-ui';
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import Vconsole from 'vconsole';

// const vConsole = new Vconsole();

//定义全局方法
Vue.prototype.showMsg = (msg) => {
  //清除前置的toast
  document.querySelectorAll('.is-placemiddle').forEach((e) => e.parentNode.removeChild(e));
  Toast({
    message: msg,
    duration: 2000,
  });
};

//NOTE：设置本地服务器ip
// 设置数据库ip及端口，也可在state中设置共享数据
axios.defaults.baseURL = 'http://192.168.1.24:3000/';

Vue.use(VueAxios, axios);

Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
