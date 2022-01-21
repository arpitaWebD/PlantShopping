<template>
  <div class="text">Test1</div>
  {{ color }} <!-- This works -->
</template>

<script>
  export default {
    data() {
      return {
        color: 'blue',
      }
    }
  }
</script>

<style scoped>
  .text {
    color: v-bind(color); /* This works */
    font-size: 20px; /* This works */
  }
</style>