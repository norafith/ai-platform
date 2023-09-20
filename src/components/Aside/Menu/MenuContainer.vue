<script>
import { routes } from '../../../router'
import store from '../../../store/store'
import MenuLink from './MenuLink.vue'
import MenuIcon from './MenuIcon.vue'
import CloseMobileMenu from './CloseMobileMenu.vue'

export default {
  data() {
    return {
      store,
      items: routes
    }
  },
  components: { MenuLink, MenuIcon, CloseMobileMenu }
}
</script>

<template>
  <nav class="main-nav">
    <MenuIcon v-if="store.mobileView" />
    <ul :class="`nav-ul ${store.mobileView && 'mobile'} ${store.showMobileMenu && 'show'}`">
      <li v-for="item of items">
        <MenuLink :name="item.name" :path="item.path" :index="index" />
      </li>
      <CloseMobileMenu v-if="store.mobileView" />
    </ul>
  </nav>
</template>

<style scoped>
.main-nav {
  display: flex;
  align-items: center;
}

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
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  flex-direction: column;
  height: 100%;
  width: 100%;
  z-index: 1000;
  transform: translateX(-100%);
  opacity: 0;
  transition: ease-in 0.5s;
}

.nav-ul.nav-ul.mobile.show {
  transform: translateX(0);
  opacity: 1;
}

.nav-ul.mobile > li {
  margin: 10px;
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
