import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false
// 把viewui挂载到全局上
Vue.use(ViewUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
