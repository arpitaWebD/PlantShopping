<template>
  <div class="col-lg-9 col-xl-10 col-md-8 p-0 h-100">
    <div class="row m-0 h-100">
      <div
        class="border-end p-4 h-100 overflow-auto"
        :class="[getShowPreview ? 'col-md-7 col-lg-8' : 'col-lg-12 col-md-12']"
      >
        <Search :searchItem="searchItem" :filterProduct="filterProduct" />
        <div v-if="filterProduct.length">
          <div class="row g-3 m-0">
            <div
              class="col-sm-12"
              :class="[
                getShowPreview
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
        <div v-else class="d-flex justify-content-center">
          <img src="../assets/no-result.png" />
        </div>
      </div>
      <div class="col-md-5 col-lg-4 p-0" v-show="getShowPreview">
        <RightModalProduct
          v-for="productPreview in getProductPreviews"
          :key="productPreview.id"
          :productPreviews="productPreview"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../components/Product.vue";
import RightModalProduct from "../components/RightModalProduct.vue";
import Search from "../components/Search.vue";
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  components: {
    Product,
    RightModalProduct,
    Search,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState([ "isActive"]),
    ...mapGetters(["getProduct","getShowPreview","getProductPreviews"]),

    filterProduct() {
      return this.getProduct.filter((product) => {
        var productName = product.name.toLowerCase();
        var searchName = this.search.toLowerCase();
        return productName.includes(searchName);
      });
    },
  },
  methods: {
    ...mapMutations(["productPreview"]),
    searchItem(search) {
      this.search = search;
      return search;
    },
  },
};
</script>
