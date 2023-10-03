import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'

const app = createApp(App)

app.use(router)
app.use(VueSplide)

app.mount('#app')

const resizeHandler = () => {
  store.mobileView = window.innerWidth <= store.maxMobileWidth
}

window.onresize = resizeHandler
window.onload = resizeHandler
