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
  flex-shrink: 0;
}

.message.user {
  background-color: white;
  color: black;
  align-self: end;
}

.message.assistant {
  background-color: rgb(157, 193, 255);
  color: black;
  align-self: flex-start;
}
</style>
