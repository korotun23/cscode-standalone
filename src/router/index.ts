import { createRouter, createWebHistory } from 'vue-router'

// Import views
import barcodeGeneratorView from '../views/barcodeGeneratorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/barcode-generator',
      name: 'BarcodeGenerator',
      component: barcodeGeneratorView,
    },
    {
      path: '/',
      name: 'BarcodeGenerator',
      component: barcodeGeneratorView,
    },
  ],
})

export default router
