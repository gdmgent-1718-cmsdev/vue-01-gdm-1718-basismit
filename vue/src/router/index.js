import Vue from 'vue'
import Router from 'vue-router'
import Create from '@/components/Create'
import Get from '@/components/Get'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Get',
      component: Get
    },
      {
      path: '/create',
      name: 'Create',
      component: Create
    }
  ]
})
