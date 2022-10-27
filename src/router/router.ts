import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import Product from '../views/pages/Product.vue'
import BestSellers from '../components/BestSelllers.vue'

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
          path: '/',
          component: Home,
          children: [
            {
              path: 'product',
              component: Product,
            },
            {
              path: 'bestsellers',
              component: BestSellers,
            }
          ]
        }
      ]
})
