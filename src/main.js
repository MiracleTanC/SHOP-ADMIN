import 'virtual:uno.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.js' // 补上路由导入

const app = createApp(App)

app.use(ElementPlus) // 注册ElementPlus
app.use(router)      // 注册路由（解决router-view报错的关键！）

app.mount('#app')