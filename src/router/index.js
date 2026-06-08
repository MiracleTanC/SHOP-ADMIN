// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../pages/index.vue'
import Login from '../pages/login.vue'
import NotFound from '../pages/404.vue'

const routes = [
  { path: '/', component: index },
  { path: '/login', component: Login},
 { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(), // hash模式，url带#号
  routes
})

export default router