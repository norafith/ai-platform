<script>
export default {
  props: ['content', 'role']
}
</script>

<template>
  <div :class="'message ' + this.role">{{ this.content }}</div>
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

.message.assistant {
  background-color: black;
  border: 1px solid white;
  color: white;
  align-self: flex-start;
}
</style>
