
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {router} from './router/router'

const app = createApp(App).use(router, ElementPlus)
app.mount('#app')