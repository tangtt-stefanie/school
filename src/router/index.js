import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:'/user/login'
    },
    {
      path:'/user',
      name:'user',
      component:()=>import('../views/User/User.vue'),
      children:[
        {
          path:'login',
          name:'login',
          component:()=>import('../views/User/Login.vue')
        },
        {
          path:'selectRole',
          name:'selectRole',
          component:()=>import('../views/User/SelectRole.vue')
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
