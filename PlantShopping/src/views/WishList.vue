<template>
  <div class="addCart-card">
    <div class="h-100 overflow-auto" v-if="wishList.length > 0">
      <div class="row g-3 m-0 px-4 pb-3">
        <h3 class="mb-2 fw-bold">My WishList:</h3>
        <div class="col-sm-12" v-for="product in wishList" :key="product">
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
              class="col-sm-12 col-md-5 d-flex flex-column flex-sm-row align-items-center justify-content-between"
            >
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
                  @click="addToCart(product)"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="h-100 d-flex align-items-center justify-content-center">
      <img src="../assets/no_wish_list.png" alt="empty wishlist" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "WishList:",

  computed: {
    ...mapState(["products", "wishList"]),
  },
  methods: {
    ...mapMutations(["addToCart"]),
  },
};
</script>
<style scoped></style>
