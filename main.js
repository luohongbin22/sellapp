import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import store from './store';//引入store仓库
Vue.config.productionTip = false
// 把viewui挂载到全局上
Vue.use(ViewUI);
new Vue({
  router,
  store,//仓库--把store注入到vue中
  render: h => h(App)
}).$mount('#app')

