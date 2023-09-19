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
  <main class="prikol">
    <div v-for="post of posts">
      <p>
        {{ post.title }}
      </p>
      <p class="body">{{ post.body }}</p>
    </div>
  </main>
</template>

<style scoped>
.prikol {
  padding: 25px;
}
.body {
  margin-bottom: 40px;
}
</style>
