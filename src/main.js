import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/scss/index.scss'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
