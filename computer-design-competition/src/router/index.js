import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return import('@/views/About.vue')
    }
  },
  {
    path: '/inviate',
    name: 'Inviate',
    component: function () {
      return import('@/views/Inviate.vue')
    }
  },
  {
    path: '/conversation',
    name: 'Conversation',
    component: () => import('@/views/Conversation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
