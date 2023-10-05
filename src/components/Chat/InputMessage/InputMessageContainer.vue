<script>
export default {
  props: ['sendRequest', 'addUserMessage'],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    submitForm(request) {
      this.addUserMessage(request)
      this.sendRequest(request)
      this.text = ''
    }
  }
}
</script>

<template>
  <section class="input-message-container">
    <form class="main-form" @submit.prevent="() => this.submitForm(this.text)">
      <input v-model="text" class="input-message" type="text" placeholder="Write a message..." />
      <button type="submit" class="send-button">✉</button>
    </form>
  </section>
</template>

<style scoped>
.input-message-container {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: -2;
  grid-row-end: span 2;
  border-top: 1px solid white;
  padding: 15px;
}

.input-message {
  background: none;
  height: 100%;
  width: 100%;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  color: white;
  transition: border 0.25s ease;
}

.input-message:focus {
  border: 1px solid rgb(150, 150, 150);
}

.input-message::placeholder {
  color: white;
}

.send-button {
  border-radius: 5px;
  background-color: white;
  border: none;
  margin-left: 10px;
  color: black;
  width: 50px;
  font-size: 20px;
  font-weight: bold;
}

.main-form {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
