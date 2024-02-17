import { createRouter, createWebHashHistory } from 'vue-router'
import Listado from '../views/Listado.vue'
import SongsView from '../components/Tarjeta.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Listado
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
