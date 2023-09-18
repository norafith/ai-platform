<script>
export default {
  props: ['text', 'role']
}
</script>

<template>
  <div :class="'message ' + this.role">{{ this.text }}</div>
</template>

<style scoped>
.message {
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
  max-width: 600px;
}

.message.user {
  background-color: white;
  border: 1px solid black;
  color: black;
  align-self: end;
}

.message.ai {
  background-color: black;
  border: 1px solid white;
  color: white;
  align-self: flex-start;
}
</style>
