<script>
import AuthorCard from '../components/About/AuthorCard.vue'
import bogdanPhoto from '../assets/bogdan.webp'
import raufPhoto from '../assets/rauf.webp'
import timofeiPhoto from '../assets/timofei.webp'

function Author(name, tgLink, vkLink, authorPhoto) {
  this.name = name
  this.tgLink = tgLink
  this.vkLink = vkLink
  this.authorPhoto = authorPhoto
}

export default {
  data() {
    return {
      authors: [
        new Author('Bogdan', 't.me/norafith', 'vk.com/norafith', bogdanPhoto),
        new Author('Rauf', 't.me/khalil_r', 'vk.com/khalil_r', raufPhoto),
        new Author('Timofei', 't.me/ts_petrov', 'vk.com/ddpsffkfsg', timofeiPhoto)
      ]
    }
  },
  components: {
    AuthorCard
  }
}
</script>

<template>
  <main class="about">
    <section>
      <h2><b>Authors</b></h2>
      <div class="author-card-container">
        <AuthorCard
          v-for="author of this.authors"
          :key="author.name"
          :name="author.name"
          :tgLink="author.tgLink"
          :vkLink="author.vkLink"
          :authorPhoto="author.authorPhoto"
        />
      </div>
    </section>
    <section>
      <h2><b>Technologies</b></h2>
      <p>The project is made using</p>
      <ul>
        <li>
          <strong>Vue</strong>. We used built-in functions for routing, store for state management,
          as well as UI libraries
        </li>
        <li>
          <strong>Python</strong>. Libraries for working with the Telegram API for creating a
          chatbot
        </li>
        <li><strong>Docker</strong>. To containerize a chatbot</li>
        <li><strong>Vercel</strong>. Hosting</li>
        <li><strong>Git, Github</strong>. Version control and CI/CD for Vercel</li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
.about {
  padding: 25px;
}

.author-card-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
