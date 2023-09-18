<script>
export default {
  async setup() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
      res.json()
    )
    return {
      posts
    }
  }
}
</script>

<template>
  <div v-for="post of posts">
    <p>{{ post.title }}</p>
    <p class="body">{{ post.body }}</p>
  </div>
</template>

<style scoped>
.body {
  margin-bottom: 40px;
}
</style>
