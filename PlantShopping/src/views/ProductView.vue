<template>
  <div class="row g-3 m-0 px-4">
    <div
      class="col-sm-12 col-md-6 col-lg-4"
      v-for="(product, index) in products"
      :key="index"
    >
      <Product :products="product" />
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import { mapState } from "vuex";
export default {
  components: {
    Product,
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>
