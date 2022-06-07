import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

// 创建并挂载根实例
let app = createApp(App)
//整个应用支持路由。git add
app.use(router)
//挂载在apps
app.mount('#app')
