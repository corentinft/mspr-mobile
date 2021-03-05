import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsAuth from '../views/Auth/TabsAuth.vue';
import TabsHome from '../views/App/TabsHome.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  {
    path: '/auth/',
    component: TabsAuth,
    children: [
      {
        path: '',
        redirect: '/auth/login'
      },
      {
        path: 'login',
        component: () => import('@/views/Auth/Connection.vue')
      },
      {
        path: 'register',
        component: () => import('@/views/Auth/Register.vue')
      }
    ]
  }
  ,
  {
    path: '/App',
    component: TabsHome,
    children: [
      {
        path: 'Promotions',
        component: () => import('@/views/App/Promotions.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
