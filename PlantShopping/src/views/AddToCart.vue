<template>
  <div v-for="product in cart" :key="product">
    <Product :products="product"></Product>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Product from "../components/Product.vue";
export default {
  components: {
    Product,
  },
  computed: {
    ...mapState(["products", "cart"]),
  },
  methods: {
    ...mapMutations(["addToCart"]),
  },
  props: ["products"],
};
</script>
