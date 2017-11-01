import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: '',
    password: '',
    serverUrl: '',
  },


})
export default store
