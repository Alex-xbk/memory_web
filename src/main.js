// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-event-calendar/dist/style.css' //1.1.10之后的版本，css被放在了单独的文件中，方便替换
import vueEventCalendar from 'vue-event-calendar'
import Celebrity from '@/components/Celebrity'
import Photo from '@/components/Photo'
import Experience from '@/components/Experience'
import Message from '@/components/Message'
import Wish from '@/components/Wish'






Vue.use(vueEventCalendar, {
  locale: 'en'
}) //可以设置语言，支持中文和英文
Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

/* eslint-disable no-new */
Vue.component('Celebrity', Celebrity);
Vue.component('Photo', Photo);
Vue.component('Experience', Experience);
Vue.component('Message', Message);
Vue.component('Wish',Wish);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
