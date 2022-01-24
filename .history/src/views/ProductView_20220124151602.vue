<template>
  <div class="col-lg-9 col-xl-10 col-md-8 p-0 h-100">
    <div class="row m-0 h-100">
      <div
        class="border-end p-4 h-100 overflow-auto"
        :class="[showPreview ? 'col-md-7 col-lg-8' : 'col-lg-12 col-md-12']"
      >
        <Search :searchItem="searchItem" />
        Searching for <b>{{ search }}</b>
        <div class="row g-3 m-0">
          <div
            class="col-sm-12"
            :class="[
              showPreview
                ? 'col-md-12 col-xl-6 col-xxl-4'
                : 'col-md-6 col-lg-4',
            ]"
            v-for="(product, index) in filterProduct"
            :key="index"
          >
            <Product :products="product" />
          </div>
        </div>
      </div>
      <div class="col-md-5 col-lg-4 p-0" v-show="showPreview">
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
import Search from "../components/Search.vue";
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  components: {
    Product,
    ProductPreview,
    Search,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["products", "showPreview", "productPreviews"]),
    ...mapGetters(["getProduct"]),
    ...mapMutations(["filterProduct"]),
  },
  methods: {
    ...mapMutations(["productPreview"]),
    searchItem(search) {
      this.search = search;
      console.log(search);
      return search;
    },
  },
};
</script>
