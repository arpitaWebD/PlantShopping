<template>
  <div class="text">Test3</div>
  {{ color }} <!-- This works -->
</template>

<script>
//   import { Options } from 'vue-class-component';
//   import { Vue } from 'vue-class-component';

  @Options({
    data() {
      return {
        color: 'red',
      }
    },
  })
  export default class Test3 extends Vue {
  }
</script>

<style scoped>
  .text {
    color: v-bind(color); /* This doesn't work :( */
    font-size: 20px; /* This works */
  }
</style>