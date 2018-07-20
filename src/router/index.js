import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Requests from '@/components/requests/Requests'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Requests',
      component: Requests
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
