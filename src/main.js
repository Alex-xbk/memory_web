// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueResource from 'vue-resource'



Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
