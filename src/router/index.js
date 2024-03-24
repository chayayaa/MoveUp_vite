import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory (import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/front/Home.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/front/Cart.vue')
    },
    {
      path: '/Product/:id',
      name: 'Product',
      component: () => import('../views/front/Product.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/front/Checkout.vue')
    },
    {
      path: '/complete/:id',
      name: 'complete',
      component: () => import('../views/front/Complete.vue')
    },
  ]
})

export default router
