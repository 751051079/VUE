import { createRouter, createWebHistory } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory

let router = createRouter({
  history: createWebHistory(),
  routes: [],
})

export default router