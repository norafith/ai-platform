import { reactive } from 'vue'

const store = reactive({
  mobileView: false,
  maxMobileWidth: 800,
  showMobileMenu: false
})

export default store
