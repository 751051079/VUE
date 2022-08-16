import { RouteRecordRaw } from "vue-router"

/**
 * 路由配置信息
 * @param(routes)
 */
const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        redirect:'/home',
        component:()=>require("@/view/home.vue"),
        children:[
            {
                path:"home",
                name:"HOME",
                component:()=>require("@/view/home.vue"),
                meta:{
                    title:'首页'
                }
            }
        ]
    },
    {
        path:'/file',
        name:'FILE',
        component:()=>require("@/view/file/ts.vue"),
        children:[
            {
                path:'ts',
                name:'TYPESCRIPT',
                component:()=>require("@/view/file/ts.vue"),
                meta:{
                    title:'TS学习文档',
                    hide:true
                }
            }
        ]
    }
]


export default routes