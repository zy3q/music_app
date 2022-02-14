import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/recommend'
  },
  {
    path:'/recommend',
    component:()=>import('../views/recommend.vue')
  },
  {
    path:'/singer',
    component:()=>import('../views/singer.vue')
  },
  {
    path:'/topList',
    component:()=>import('../views/topList.vue')
  },
  {
    path:'/search',
    component:()=>import('../views/search.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
