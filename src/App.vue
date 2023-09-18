<script>
import MenuContainer from './components/Menu/MenuContainer.vue'
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

  <RouterView />
</template>

<style scoped></style>
