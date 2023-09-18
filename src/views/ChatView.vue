<script>
import ChatOptions from '../components/Chat/ChatOptions/ChatOptions.vue'
import MessagesList from '../components/Chat/MessagesList/MessagesList.vue'
import InputMessageContainer from '../components/Chat/InputMessage/InputMessageContainer.vue'
export default {
  components: {
    ChatOptions,
    MessagesList,
    InputMessageContainer
  }
}
</script>

<template>
  <main>
    <div class="messages-container">
      <ChatOptions />
      <MessagesList />
      <InputMessageContainer />
    </div>
  </main>
</template>

<style scoped>
.messages-container {
  height: 600px;
  background-color: grey;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(9, 1fr);
}
</style>
