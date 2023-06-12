import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RedesView from '../views/RedesView.vue';
import HelloView  from '../views/HelloView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/redes',
      name: 'redes',
      component:  RedesView
    },
    {
      path:'/hello',
      name: 'hello',
      component: HelloView
      
      
    }
  ]
})

export default router
