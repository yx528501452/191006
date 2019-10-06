import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/mSite/mSite.vue'
import Order from '../pages/order/order.vue'
import Profile from '../pages/profile/profile.vue'
import Search from '../pages/search/search.vue'
import Login from '../pages/login/login.vue'
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: MSite,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})