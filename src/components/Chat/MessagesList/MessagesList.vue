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
      :text="message.text"
      :role="message.role"
    />
    <PulseLoader v-if="this.isLoading" color="#000" />
  </section>
</template>

<style scoped>
.messages-list {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: span 4;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
</style>
