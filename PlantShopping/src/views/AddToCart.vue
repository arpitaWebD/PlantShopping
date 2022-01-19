<template>
  <div class="addCart-card">
    <div class="h-100 overflow-auto" v-if="cart.length > 0">
      <div class="product-detail">
        <div class="row g-3 m-0 px-4 pb-3">
          <h3 class="mb-2 fw-bold">My Cart:</h3>
          <div class="col-sm-12" v-for="product in cart" :key="product">
            <div class="product-card p-4 border row add-product">
              <div class="col-sm-12 col-md-2 img-section text-center">
                <img :src="product.url" alt="product img" height="90" />
              </div>
              <div class="col-sm-12 col-md-4 d-flex align-items-center">
                <div class="text-start fw-bold">
                  {{ product.name }}
                </div>
              </div>
              <div
                class="col-sm-12 col-md-6 d-flex flex-column flex-sm-row align-items-center justify-content-between"
              >
                <div
                  class="d-flex flex-row flex-sm-column me-2 align-items-center"
                >
                  <span class="price-name me-2">Qty</span>
                  <div class="d-flex">
                    <button @click="removeQty(product)" class="btn btn-success">
                      -
                    </button>
                    <div class="mx-2 w-50">
                      <input
                        type="number"
                        class="form-control"
                        :value="product.qty"
                      />
                    </div>
                    <button @click="addQty(product)" class="btn btn-success">
                      +
                    </button>
                  </div>
                </div>
                <div
                  class="d-flex flex-row flex-sm-column align-items-center me-0 me-sm-2"
                >
                  <span class="price-name me-2">Total</span>
                  <span
                    ><b> {{ product.tprice }}</b></span
                  >
                </div>

                <div
                  class="d-flex flex-row flex-sm-column me-0 me-sm-2 align-items-center"
                >
                  <span class="price-name me-2">Price</span>
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
          </div>
        </div>
      </div>
      <div class="p-4 border-top">
        <div><b>Total Price:</b> {{ getTotalPrice }}</div>
        <div><b>Total Items:</b> {{ getItems }}</div>
      </div>
    </div>
    <div v-else class="h-100 d-flex align-items-center justify-content-center">
      <img src="../assets/empty-cart.png" alt="empty cart" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
export default {
  name: "AddCart",

  computed: {
    ...mapState(["products", "cart", "tPrice", "totalamount", "qtyValue"]),
    ...mapGetters(["getTotalPrice", "getItems"]),
  },
  methods: {
    ...mapMutations(["removeToCart", "totalAmount", "addQty", "removeQty"]),
  },
};
</script>
<style scoped></style>
