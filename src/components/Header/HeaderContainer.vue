<script>
import MenuContainer from './Menu/MenuContainer.vue'
export default {
  components: {
    MenuContainer
  }
}
</script>

<template>
  <header>
    <MenuContainer />
  </header>
</template>

<style scoped>
header {
  padding: 25px;
  background-color: black;
}
</style>
