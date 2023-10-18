import VueRouter from 'vue-router'
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Friend from '@/views/Friend.vue'
import Vue from 'vue';



Vue.use(VueRouter)
const router = new VueRouter(
    {
        // routes 路由规则们
        // route  一条路由规则 { path: 路径, component: 组件 }
        routes: [
            { path: '/find', component: Find },
            { path: '/my', component: My },
            { path: '/friends', component: Friend },
        ],
        linkActiveClass:'active',
        linkExactActiveClass:'exact-active',
    }
)
export default router 