import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from './store'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'vue-social-share/dist/client.css'
import Share from 'vue-social-share'

AOS.init();

Vue.use(ElementUI);

Vue.config.productionTip = false

Vue.use(Share);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
