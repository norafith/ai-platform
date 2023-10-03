import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueSplide from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})
const app = createApp(App)

app.use(router)
app.use(VueSplide)
app.use(vuetify)

app.mount('#app')

const resizeHandler = () => {
  store.mobileView = window.innerWidth <= store.maxMobileWidth
}

window.onresize = resizeHandler
window.onload = resizeHandler
