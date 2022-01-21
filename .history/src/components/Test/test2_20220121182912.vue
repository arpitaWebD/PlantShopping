<template>
  <div class="text">Test2</div>
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
    color: v-bind(color); /* This doesn't work :( */
    font-size: 20px; /* This works */
  }
</style>