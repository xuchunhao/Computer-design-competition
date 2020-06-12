import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
  },
  {
    path: '/login',
    name: 'Login',
    component:() => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component:() => import('@/views/Register.vue')
  },{
    path: '/secondPage',
    name: 'SecondPage',
    component:() => import('@/views/SecondPage.vue'),
    children: [
      {
        path: '/secondPage/blog',
        name: 'Blog',
        component: () => import('@/components/secondPage/Blog.vue')
      },
      {
        path: '/secondPage/blog/:blogID',
        name: 'Blog',
        component: () => import('@/components/secondPage/BlogEach.vue')
      },
      {
        path: '/secondPage/blogWrite',
        // name: 'Blog',
        component: () => import('@/components/secondPage/BlogWrite.vue')
      },{
        path: '/secondPage/message',
        name: 'Message',
        component: () => import('@/components/secondPage/Message.vue')
      },{
        path: '/secondPage/manage',
        name: 'Manage',
        component: () => import('@/components/secondPage/Manage.vue')
      },{
        path: '/secondPage/match',
        name: 'Match',
        component: () => import('@/components/secondPage/Match.vue')
      },{
        path: '/secondPage/match/:matchID',
        name: 'MatchEach',
        component: () => import('@/components/secondPage/MatchEach.vue')
      },{
        path: '/secondPage/matchSubmit',
        name: 'MatchSubmit',
        component: () => import('@/components/secondPage/MatchSubmit.vue')
      },{
        path: '/secondPage/dynamic',
        name: 'Dynamic',
        component: () => import('@/components/secondPage/Dynamic.vue')
      },{
        path: '/secondPage/basicInfo',
        name: 'BasicInfo',
        component: () => import('@/components/secondPage/BasicInfo.vue')
      },{
        path: '/secondPage/personalPage',
        name: 'PersonalPage',
        component: () => import('@/components/secondPage/PersonalPage.vue')
      },{
        path: '/secondPage/personalSkill',
        name: 'PersonalSkill',
        component: () => import('@/components/secondPage/PersonalSkill.vue')
      },{
        path: '/secondPage/firstPage',
        name: 'FirstPage',
        component: () => import('@/components/secondPage/FirstPage.vue')
      },{
        path: '/secondPage/teamInt',
        name: 'TeamInt',
        component: () => import('@/components/secondPage/TeamInt.vue')
      }
    ]
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
  },
  {
    path: '/test',
    name: 'porotrait',
    component: () => import('@/views/porotrait.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
