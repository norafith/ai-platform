<script>
import SingleMessage from './SingleMessage.vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  props: ['messages', 'isLoading'],
  components: { SingleMessage, PulseLoader }
}
</script>
<template>
  <section class="messages-list">
    <SingleMessage
      :key="index"
      v-for="(message, index) of messages"
      :content="message.content"
      :role="message.role"
    />
    <PulseLoader v-if="this.isLoading" color="#fff" />
  </section>
</template>

<style scoped>
.messages-list {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: span 8;
  padding: 25px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-width: initial;
}
</style>
