<script>
import { routes } from '../../../router'
import store from '../../../store/store'

export default {
  data() {
    return {
      store,
      items: routes
    }
  }
}
</script>

<template>
  <nav>
    <ul :class="`nav-ul ${store.mobileView && 'mobile'}`">
      <li v-for="item of items">
        <RouterLink :key="item.index" :name="item.name" :to="item.path">{{
          item.name[0].toUpperCase() + item.name.slice(1).toLowerCase()
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav-ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-ul > li {
  margin: 0;
  margin-bottom: 10px;
  color: white;
}

.nav-ul.mobile {
  display: flex;
}

.nav-ul.mobile > li {
  margin: 0 10px;
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
