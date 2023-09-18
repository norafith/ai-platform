<template>
  <section class="input-message-container">
    <input class="input-message" type="text" placeholder="Write a message..." />
    <button class="send-button">Send</button>
  </section>
</template>

<style scoped>
.input-message-container {
  display: flex;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: -2;
  grid-row-end: span 2;
  border-top: 1px solid black;
  padding: 15px;
}

.input-message {
  background: none;
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2px 10px;
  transition: border 0.25s ease;
}

.input-message:focus {
  border: 1px solid white;
}

.input-message::placeholder {
  color: black;
}

.send-button {
  border-radius: 5px;
  background-color: white;
  border: 1px solid black;
  margin-left: 10px;
}
</style>
