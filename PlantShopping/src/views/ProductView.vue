<template>
  <div class="col-lg-10 col-md-9 p-0">
    <div class="row m-0">
      <div
        class="border-end p-4"
        :class="[showPreview ? 'col-lg-9 col-md-8' : 'col-lg-12 col-md-12']"
      >
        <div class="row g-3 m-0 px-4">
          <div
            class="col-sm-12 col-lg-4"
            :class="[showPreview ? 'col-md-12' : 'col-md-6']"
            v-for="(product, index) in products"
            :key="index"
          >
            <Product :products="product" />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 p-0" v-show="showPreview">
        <ProductPreview
          v-for="productPreview in productPreviews"
          :key="productPreview.id"
          :productPreviews="productPreview"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import ProductPreview from "../components/ProductPreview.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    Product,
    ProductPreview,
  },
  computed: {
    ...mapState(["products", "showPreview", "productPreviews"]),
  },
  methods: {
    ...mapMutations(["productPreview"]),
  },
};
</script>
