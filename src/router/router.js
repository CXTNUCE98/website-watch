import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/pages/Home.vue'
import BestSellers from '../components/BestSelllers.vue'
import LastChaneToBuy from '../components/BestSelllers.vue'
import Product from '../views/pages/Product.vue'

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
            }
          ]
        }
      ]
})
