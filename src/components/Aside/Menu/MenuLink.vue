<script>
export default {
  props: ['index', 'name', 'path']
}
</script>

<template>
  <RouterLink :key="this.index" :name="this.name" :to="this.path">{{
    this.name[0].toUpperCase() + this.name.slice(1).toLowerCase()
  }}</RouterLink>
</template>
