import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import result from '@/components/result'
import defuse from '@/components/defuse'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/result/:building/:house',
        name: 'result',
        component: result
    },{
        path:'/defuse/:building/:house',
        name:'defuse',
        component:defuse
    }]
})