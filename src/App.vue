<script>
import HeaderContainer from './components/Header/HeaderContainer.vue'
export default {
  components: {
    HeaderContainer
  }
}
</script>

<template>
  <HeaderContainer />
  <div class="content-wrapper">
    <RouterView v-slot="{ Component }">
      <Suspense timeout="0">
        <template #default>
          <component :is="Component" />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </RouterView>
  </div>
</template>

<style scoped>
.content-wrapper {
  max-width: 800px;
  margin: auto;
}
</style>
