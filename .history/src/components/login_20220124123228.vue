<template>
  <form>
    <label>Email</label>
    <input type="text" placeholder="Email" v-model="email" />
    <label>Pass</label>
    <input type="password" placeholder="Pass" v-model="Pass" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        pass: "",
      },
    };
  },
};
</script>

<style>
</style>