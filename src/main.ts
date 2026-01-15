import { createApp } from 'vue'
import App from './app/App.vue'
import router from './router'

// Styles
import './sass/_global.scss'

// Import fonts
import '@fontsource/poppins'
import '@fontsource/courier-prime'

// Import services
import { BarcodeTypeService } from './services/barcodeTypeService'
import { BarcodeGeneratorService } from './services/barcodeGeneratorService'

const app = createApp(App)

// Provide services to the app and all child components
app.provide('barcodeTypeService', new BarcodeTypeService())
app.provide('barcodeGeneratorService', new BarcodeGeneratorService())

app.use(router)

app.mount('#app')
