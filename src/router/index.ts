import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory
const routes:RouteRecordRaw[] = [
  {
    path:"/home",
    name:"home",
    component:()=>import("../view/home.vue")
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router