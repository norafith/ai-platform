<script>
import { routes } from '../../router'

export default {
  data() {
    return {
      items: routes
    }
  }
}
</script>

<template>
  <nav>
    <ul>
      <li v-for="item of items">
        <RouterLink :key="item.index" :name="item.name" :to="item.path">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  color: red;
}
</style>
