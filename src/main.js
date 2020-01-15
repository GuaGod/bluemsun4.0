import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import iView from 'iview'
import Verify from '../lib/verify/index.js'
import './assets/styles/iview.css'

Vue.use(iView);
Vue.use(Verify);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
