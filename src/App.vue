<script>
import AsideContent from './components/Aside/AsideContent.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  components: {
    AsideContent,
    PulseLoader
  }
}
</script>

<template>
  <div class="app-grid">
    <aside class="aside-wrapper">
      <AsideContent />
    </aside>
    <main class="content-wrapper">
      <RouterView v-slot="{ Component }">
        <Suspense timeout="0">
          <template #default>
            <component :is="Component" />
          </template>
          <template #fallback>
            <PulseLoader color="#000" />
          </template>
        </Suspense>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.content-wrapper {
  grid-column-start: 3;
  grid-column-end: -1;
}

.aside-wrapper {
  padding: 25px;
  background-color: black;
  grid-column-start: 1;
  grid-column-end: span 2;
}

.app-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
}
</style>
