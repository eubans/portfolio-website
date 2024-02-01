import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ContactView from '../views/ContactView.vue'
import NotFoundMisc from '../views/misc/NotFoundMisc.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact me!'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundMisc,
      meta: {
        title: '404 Page not found'
      }
    }
  ]
})

router.afterEach((to) => {
  const BASE_TITLE = import.meta.env.VITE_BASE_TITLE
  nextTick(() => {
    document.title = to.meta.title ? `${BASE_TITLE} | ${to.meta.title}` : BASE_TITLE
  })
})

export default router
