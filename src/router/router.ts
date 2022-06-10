import { RouteRecordRaw } from "vue-router"

const Home = ()=>require("@/view/home.vue");//首页


/**
 * 路由配置信息
 * @param(routes)
 */
const routes:RouteRecordRaw[]=[
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        name:'home',
        component:Home
    }
]
export default routes