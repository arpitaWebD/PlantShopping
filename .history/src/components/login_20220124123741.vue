<template>
  <form>
    <label>Email</label>
    <input type="text" placeholder="Email" v-model="form.email" />
    <label>Pass</label>
    <input type="password" placeholder="Pass" v-model="form.pass" />
    <button type="button" class="btn btn-success" @click="login()">
      Login
    </button>
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