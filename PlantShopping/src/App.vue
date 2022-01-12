<template>
  <Navbar />
  <ProductView />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ProductView from "./views/ProductView.vue";
export default {
  components: {
    Navbar,
    ProductView,
  },
};
</script>
