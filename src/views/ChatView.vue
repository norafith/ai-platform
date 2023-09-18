<script>
// import ChatOptions from '../components/Chat/ChatOptions/ChatOptions.vue'
import MessagesList from '../components/Chat/MessagesList/MessagesList.vue'
import InputMessageContainer from '../components/Chat/InputMessage/InputMessageContainer.vue'
import api from '../api/api'
export default {
  data() {
    return {
      messages: [],
      isLoading: false
    }
  },
  components: {
    // ChatOptions,
    MessagesList,
    InputMessageContainer
  },
  methods: {
    sendRequest(request) {
      this.isLoading = true
      api.sendRequest(request).then((value) => {
        this.messages.push({ role: 'ai', text: value })
        this.isLoading = false
      })
    },
    addUserMessage(request) {
      this.messages.push({ role: 'user', text: request })
    }
  }
}
</script>

<template>
  <div class="messages-container">
    <!-- <ChatOptions /> -->
    <MessagesList :messages="this.messages" :isLoading="this.isLoading" />
    <InputMessageContainer :sendRequest="this.sendRequest" :addUserMessage="this.addUserMessage" />
  </div>
</template>

<style scoped>
.messages-container {
  height: 100%;
  background-color: grey;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(9, 1fr);
}
</style>
