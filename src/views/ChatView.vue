<script></script>

<template>
  <main>
    <div class="messages-container">
      <section class="chat-options"></section>
      <section class="messages-list"></section>
      <section class="input-message-container">
        <input class="input-message" type="text" />
        <button class="send-button">Send</button>
      </section>
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

.chat-options {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 1;
  grid-row-end: 2;
  border-bottom: 1px solid black;
}

.messages-list {
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: 2;
  grid-row-end: span 4;
}

.input-message-container,
.chat-options {
  padding: 15px;
}

.input-message-container {
  display: flex;
  grid-column-start: 1;
  grid-column-end: -1;
  grid-row-start: -2;
  grid-row-end: span 2;
  border-top: 1px solid black;
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

.send-button {
  border-radius: 5px;
  background-color: white;
  border: 1px solid black;
  margin-left: 10px;
}
</style>
