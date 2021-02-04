import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vant.js'
import echarts from 'echarts/lib/echarts';
import  "./plugins/echarts";
import 'amfe-flexible/index.js'
import '@vant/touch-emulator';
import "./plugins/cookies";

Vue.config.productionTip = false

Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
