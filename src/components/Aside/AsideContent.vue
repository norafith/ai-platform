<script>
import MenuContainer from './Menu/MenuContainer.vue'
export default {
  components: {
    MenuContainer
  }
}
</script>

<template>
  <MenuContainer />
</template>

<style scoped>
header {
  padding: 25px;
  background-color: black;
  grid-column-start: 1;
  grid-column-end: span 2;
}
</style>
