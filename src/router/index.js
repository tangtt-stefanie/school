/*
 * @Author: MR.T
 * @Date: 2020-08-06 17:33:39
 * @LastEditors: MR.T
 * @LastEditTime: 2020-09-09 15:54:09
 * @Description: No Description
 * @FilePath: \article-manage\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path:'/',
      redirect:'/home/person/info'
    },
    {
      path:'/user',
      name:'user',
      component:()=>import('../views/User/Index.vue'),
      children:[
        {
          path:'login',
          name:'login',
          component:()=>import('../views/User/Login.vue')
        },{
          path:'selectRole',
          name:'selectRole',
          component:()=>import('../views/User/SelectRole.vue')
        }
      ]
    },
    {
      path:'/home',
      name:'home',
      meta:{name:'首页'},
      redirect:'/home/person/info',
      component:()=>import('../views/Home/Home.vue'),
      children:[
        {
          path:'person',
          name:'person',
          meta:{name:'工作台'},
          redirect:'/home/person/info',
          component:()=>import('../views/Person/Index.vue'),
          children:[
            {
              path:'info',
              name:'info',
              meta:{name:'个人信息'},
              component:()=>import('../views/Person/Info.vue')
            },
          ]
        },{
          path:'projectAll',
          name:'projectAll',
          meta:{name:'项目管理'},
          redirect:'/home/projectAll/project',
          component:()=>import('../views/ProjectAll/Index.vue'),
          children:[
            {
              path:'plan',
              name:'plan',
              meta:{name:'项目计划'},
              component:()=>import('../views/ProjectAll/ProjectPlan.vue')
            },
            {
              path:'project',
              name:'project',
              meta:{name:'项目列表'},
              component:()=>import('../views/ProjectAll/Project.vue')
            },
            {
              path:'contract',
              name:'contract',
              meta:{name:'项目合同'},
              component:()=>import('../views/ProjectAll/contract.vue')
            },
          ]
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

//判断是否登录有两处:1.发接口时2:跳转路由时
router.beforeEach(async (to, from, next) => {
  //在此判断跳转路径时是否登录
  //判断逻辑：取sessionStorage里的isLogin,没有说明第一次登录有的话往下进行
  //发登录验证接口，是否登录？是的话next(),否则next({path:'/user/login'})
  next()
})

export default router
