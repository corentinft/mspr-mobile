import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import TabsAuth from '../views/Auth/TabsAuth.vue';
import TabsHome from '../views/App/TabsHome.vue';
import ScanQr from '../components/ScanQr.vue';

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
                name: 'login',
                component: () => import('@/views/Auth/Connection.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('@/views/Auth/Register.vue')
            }
        ]
    },
    {
        path: '/app',
        component: TabsHome,
        children: [
            {
                path: 'promotions',
                name: 'promotions',
                component: () => import('@/views/App/Promotions.vue')
            }
        ]
    }
    ,
    {
        path: '/scan',
        component: ScanQr
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && to.name !== 'register' && !localStorage.getItem('token')) {
        next({name: 'login'});
    }
    next();
})

export default router
