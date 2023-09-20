<script>
import image from '../../../assets/menu.svg'
import store from '../../../store/store'

export default {
  data() {
    return {
      image,
      store
    }
  },
  methods: {
    showMenu() {
      store.showMobileMenu = true
    }
  }
}
</script>
<template>
  <img :src="image" alt="Menu" class="menu-icon" @click="showMenu" />
</template>

<style scoped>
.menu-icon {
  height: 30px;
  cursor: pointer;
}
</style>
