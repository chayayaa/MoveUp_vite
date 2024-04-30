import { createRouter, createWebHashHistory } from 'vue-router'
import axios from 'axios';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../views/front/Home.vue')
        },
        {
          path: 'cart',
          name: 'Cart',
          component: () => import('../views/front/Cart.vue')
        },
        {
          path: 'product/:id',
          name: 'Product',
          component: () => import('../views/front/Product.vue')
        },
        {
          path: 'checkout',
          name: 'Checkout',
          component: () => import('../views/front/Checkout.vue')
        },
        {
          path: 'complete/:id',
          name: 'Complete',
          component: () => import('../views/front/Complete.vue')
        },
        {
          path: 'products',
          name: 'Products',
          component: () => import('../views/front/Products.vue')
        },
      ],
    },
    {
      path: '/admin',
      name: 'Admin',
      children: [
        {
          path: 'products',
          name: 'adminProducts',
          component: () => import('../views/admin/Products.vue'),
          // meta: { requiresAuth: true }, // 需驗證
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
    },
  ],
});

export default router;
