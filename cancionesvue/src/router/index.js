import { createRouter, createWebHashHistory } from 'vue-router'
import Listado from '../views/Listado.vue'
import SongsView from '../component/SongsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Listado
  },
  {
    path: '/categoria/id',
    name: 'categories',
    component: SongsView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
