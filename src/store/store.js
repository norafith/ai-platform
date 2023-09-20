import { reactive } from 'vue'

const store = reactive({
  mobileView: false,
  maxMobileWidth: 600,
  showMobileMenu: false
})

export default store
