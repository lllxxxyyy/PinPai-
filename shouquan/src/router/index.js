import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import ADetails from '@/components/ADetails/ADetails'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/ADetails',
            name: 'ADetails',
            component: ADetails
        }
    ]
})