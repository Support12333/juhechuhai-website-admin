import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

export const asyncRoutes = [
  {
    path: '/master',
    name: '主要的',
    component: Layout,
    redirect: '/master/nacos',
    children: [
      {
        path: 'nacos',
        component: () => import('@/views/master/home'),
        meta: {
          title: '主控台',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/OFF',
    name: 'OFF',
    component: Layout,
    redirect: '/OFF/list',
    meta: {
      title: '开户管理',
      icon: ''
    },
    children: [
      {
        path: 'list',
        name: 'off-list',
        component: () => import('@views/OFF/list.vue'),
        meta: {
          title: '开户申请',
          noCache: true
        }
      },
      {
        path: 'OFF-ADS-workbench',
        name: 'OFF-ADS-workbench',
        component: () => import('@views/OFF/ADS-workbench.vue'),
        meta: {
          title: '开户历史',
          noCache: true
        }
      }
    ]
  },
  {
    path: '/ADS',
    name: 'ADS',
    component: Layout,
    redirect: '/ADS/workbench',
    meta: {
      title: '广告账户',
      icon: ''
    },
    children: [
      {
        path: 'workbench',
        name: 'ADS-workbench',
        component: () => import('@views/ADS/workbench.vue'),
        meta: {
          title: '账号管理',
          noCache: true
        }
      },
      {
        path: 'order-conversion',
        name: 'ADS-order-conversion',
        component: () => import('@views/ADS/orderConversion.vue'),
        meta: {
          title: '账号充值',
          noCache: true
        }
      },
      {
        path: 'summary',
        name: 'ADS-summary',
        component: () => import('@views/ADS/summary.vue'),
        meta: {
          title: '账号充值历史',
          noCache: true
        }
      }
    ]
  },
]

export const constantRoutes = [
  {
    path: '/',
    redirect() {
      if (store.getters.token) {
        return '/OFF'
      } else {
        return '/login'
      }
    }
  },
  {
    path: '/login',
    component: () => import('@views/main/login.vue'),
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  ...asyncRoutes
]

const createRouter = () => new VueRouter({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
