import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AnimalFormView from '../views/AnimalFormView.vue'
import AnimalListView from '../views/AnimalListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: AnimalFormView,
  },

  {
    path: '/list',
    name: 'list',
    component: AnimalListView,
  },

  {
    path: '/animal/id',
    name: 'animalModify',
    component: AnimalFormView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
