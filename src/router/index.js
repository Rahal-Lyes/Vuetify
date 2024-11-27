import {createMemoryHistory,createRouter,createWebHistory} from 'vue-router'

const routes=[
  {name:'home',path:'/',component:()=>import('../views/Home.vue')},
  {name:"about",path:'/about',component:()=>import('../views/About.vue')},
]

const router=createRouter({
  routes,
  history:createWebHistory(),
})



export default router 