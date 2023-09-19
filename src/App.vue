<script>
import AsideContent from './components/Aside/AsideContent.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import store from './store/store'

export default {
  components: {
    AsideContent,
    PulseLoader
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div id="app-grid" :class="store.mobileView && 'mobile'">
    <aside class="aside-wrapper">
      <AsideContent />
    </aside>
    <div class="content-wrapper">
      <RouterView v-slot="{ Component }">
        <Suspense timeout="0">
          <template #default>
            <component :is="Component" />
          </template>
          <template #fallback>
            <PulseLoader color="#000" :style="{ padding: '25px' }" />
          </template>
        </Suspense>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.content-wrapper {
  grid-column-start: 3;
  grid-column-end: -1;
  overflow: auto;
}

.aside-wrapper {
  padding: 25px;
  background-color: black;
  grid-column-start: 1;
  grid-column-end: span 2;
}

#app-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  height: 100%;
}

/*!TODO*/
#app-grid.mobile {
  grid-template-columns: 1fr;
  grid-template-rows: repeat(12, 1fr);
}

#app-grid.mobile .aside-wrapper,
#app-grid.mobile .content-wrapper {
  grid-column-end: 1;
  grid-column-start: 1;
}
#app-grid.mobile .aside-wrapper {
  grid-row-start: 1;
  grid-row-end: 2;
}
#app-grid.mobile .content-wrapper {
  grid-row-start: 2;
  grid-row-end: -1;
}
</style>
