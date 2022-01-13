<template>
  <Navbar />
  <router-view />
  <ProductView />
  <AddToCart />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ProductView from "./views/ProductView.vue";
import AddToCart from "./views/AddToCart.vue";
export default {
  components: {
    Navbar,
    ProductView,
    AddToCart,
  },
};
</script>
