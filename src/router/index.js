import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Profil from '../views/Profil.vue'
import Berita from '@/views/Berita.vue'
import DetailBerita from '@/views/DetailBerita.vue'


const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Beranda | MTs Persis Tokyo',
      description: 'MTs Persis Tokyo di RPL, TKJ & DKV.'
    }
  },
    {
    path: '/profil',
    name: 'Profil',
    component: Profil,
    meta: {
      title: 'Profil | MTs Persis Tokyo',
      description: 'MTs Persis Tokyo unggul di RPL, TKJ & DKV.'
    }
  },
  {
    path: '/berita',
    name: 'Berita',
    component: Berita,
    meta: {
      title: 'Berita | MTs Persis Tokyo',
      description: 'MTs Persis Tokyo unggul di RPL, TKJ & DKV.'
    }
  },
  {
    path: '/berita/:slug',
    name: 'DetailBerita',
    component: DetailBerita,
    meta: {
      title: 'Profil | MTs Persis Tokyo',
      description: 'MTs Persis Tokyo unggul di RPL, TKJ & DKV.'
    },
    props: true
  }
]

const router = createRouter({
  history: createWebHistory('/mts-persis-moscow/'),
  routes,
  scrollBehavior(){
    return{top: 0}
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', to.meta.description)
  }

  next()
})
export default router