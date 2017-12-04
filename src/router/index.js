import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Celebrity from '@/components/Celebrity'
import Photo from '@/components/Photo'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/celebrity',
      name: 'Celebrity',
      component: Celebrity
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
  ]
})
