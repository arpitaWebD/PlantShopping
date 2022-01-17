<template>
  <div class="addCart-card">
    <div v-if="cart.length > 0">
      <div class="row g-3 m-0 px-4 pb-3">
        <h3 class="mb-2 fw-bold">My Cart:</h3>
        <div class="col-sm-12" v-for="product in cart" :key="product">
          <div class="product-card p-4 border row add-product">
            <div class="col-sm-12 col-md-2 img-section text-center">
              <img :src="product.url" alt="product img" height="90" />
            </div>
            <div class="col-sm-12 col-md-5 d-flex align-items-center">
              <div class="text-start fw-bold">
                {{ product.name }}
              </div>
            </div>
            <div
              class="col-sm-12 col-md-5 d-flex align-items-center justify-content-between"
            >
              <div>qty {{ product.qty }}</div>
              <div>Total {{ totalAmount(product) }} {{ totalamount }}</div>
              <div class="d-flex flex-column">
                <span class="price-name">Price</span>
                <span
                  ><b>₹ {{ product.price }}</b></span
                >
              </div>
              <div>
                <button
                  v-if="cart"
                  class="btn secondary-btn"
                  type="button"
                  @click="removeToCart(product)"
                >
                  Remove to cart
                </button>
              </div>
            </div>
          </div>
          <div>Total Price: {{ totalPrice(product) }}</div>
        </div>
      </div>
    </div>
    <div v-else class="h-100 d-flex align-items-center justify-content-center">
      <img src="../assets/empty-cart.png" alt="empty cart" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Product from "../components/Product.vue";
export default {
  name: "AddCart",
  components: {
    Product,
  },
  computed: {
    ...mapState(["products", "cart", "tPrice", "totalamount"]),
  },
  methods: {
    ...mapMutations(["removeToCart", "totalAmount", "totalPrice"]),
  },
};
</script>
<style scoped>
.addCart-card {
  height: calc(100% - 80px);
  overflow: auto;
}
</style>
