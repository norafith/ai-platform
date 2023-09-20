<script>
import chat from '../../../assets/chat.png'

export default {
  props: ['index', 'name', 'path'],
  data() {
    return {
      chat
    }
  }
}
</script>

<template>
  <RouterLink :key="this.index" :name="this.name" :to="this.path">{{
    this.name[0].toUpperCase() + this.name.slice(1).toLowerCase()
  }}</RouterLink>
</template>

<style scoped></style>
