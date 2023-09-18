<script>
import { routes } from '../../../router'

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
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

ul > li {
  margin: 0 10px;
  display: inline;
  color: white;
}

a:link,
a:visited {
  color: white;
}

a:hover {
  color: grey;
}
.router-link-active {
  color: red !important;
}
</style>
