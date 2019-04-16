import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import UpdateImage from './views/updateImage.vue'
import Computing from './views/computing.vue'
// import Login from './views/login/index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
        path: '/updateImage',
        name: 'UpdateImage',
        component: UpdateImage
    },
    {
        path: '/computing',
        name: 'Computing',
        component: Computing
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import(/* webpackChunkName: "about" */ './views/login/index.vue')
    // },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      // meta: {
      //   auth: true
      // }
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (to.meta.auth) {
//     const username = localStorage.getItem('username')
//     if (username) {
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.path }
//       })
//     }
//   } else {
//     // 不需要登录验证
//     next()
//   }
// })

export default router
