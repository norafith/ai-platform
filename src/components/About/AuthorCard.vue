<script>
export default {
  props: ['name', 'tgLink', 'vkLink', 'authorPhoto']
}
</script>

<template>
  <article class="author-card">
    <div class="author-name">
      <b>{{ this.name[0] }}</b
      >{{ this.name.slice(1) }}
    </div>
    <img class="author-photo" :src="this.authorPhoto" :alt="`${this.name}'s photo`" />
    <ul>
      <li>
        <a :href="'//' + this.tgLink" target="_blank">Telegram</a>
      </li>
      <li>
        <a :href="'//' + this.vkLink" target="_blank">VK</a>
      </li>
    </ul>
  </article>
</template>

<style scoped>
.author-name {
  margin-bottom: 20px;
  font-size: 1.15em;
}
.author-card {
  text-align: center;
  border: 1px solid white;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 20px;
  flex-grow: 1;
}

.author-photo {
  width: 100%;
  max-width: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.author-card > ul > li {
  list-style: none;
}
</style>
