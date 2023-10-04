<script>
import image from '../../../assets/close.svg'
import store from '../../../store/store'

export default {
  data() {
    return {
      image,
      store
    }
  },
  methods: {
    closeMenu() {
      store.showMobileMenu = false
    }
  }
}
</script>

<template>
  <img class="close-btn" alt="Close menu" :src="image" @click="closeMenu" />
</template>

<style scoped>
.close-btn {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 25px;
  right: 25px;
}
</style>
