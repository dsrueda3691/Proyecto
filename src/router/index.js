import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OfertasView from '@/views/OfertasView.vue'
import PerfilView from '@/views/PerfilView.vue'
import CatalogoView from '@/views/CatalogoView.vue'
import DetallesView from '@/views/DetallesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detalles/:id',
    name: 'detalles',
    component: DetallesView
  },
  {
    path: '/ofertas',
    name: 'ofertas',
    component: OfertasView
  },
  {
    path: '/catalogo',
    name: 'catalogo',
    component: CatalogoView
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: PerfilView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  }
})

export default router
