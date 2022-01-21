<template>
  <div class="text">Test2</div>
  {{ color }} <!-- This works -->
</template>

<script lang="ts" setup src="./Test2.js"></script>

<style>
  .text {
    color: v-bind(color); /* This doesn't work :( */
    font-size: 20px; /* This works */
  }
</style>