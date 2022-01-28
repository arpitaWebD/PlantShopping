<template>
  <div class="addCart-card" v-if="currentRouteName === 'AddCart'">
    <div class="h-100 overflow-auto" v-if="getCart.length > 0">
      <div class="product-detail">
        <div class="row g-3 m-0 px-4 pb-3">
          <h3 class="mb-2 fw-bold">My {{ $route.name }}</h3>
          <div class="col-sm-12" v-for="product in getCart" :key="product">
            <div class="product-card p-4 border row add-product">
              <div class="col-sm-12 col-md-2 img-section text-center">
                <img :src="product.url" alt="product img" height="90" />
              </div>
              <div
                class="
                  col-sm-12 col-md-10
                  d-flex
                  flex-column
                  justify-content-center
                "
              >
                <div class="d-flex">
                  <div class="text-start fw-bold flex-grow-1 text-truncate">
                    {{ product.name }}
                  </div>
                  <span class="text-nowrap"
                    ><b>₹ {{ product.price }}</b></span
                  >
                </div>
                <div
                  class="
                    col-sm-12 col-md-7
                    d-flex
                    mt-2
                    flex-column flex-sm-row
                    align-items-sm-center
                    justify-content-between
                    w-100
                  "
                >
                  <div class="d-flex flex-column me-sm-2 me-0 mb-2 mb-sm-0">
                    <div class="d-flex align-items-start">
                      <button
                        @click="removeQty(product)"
                        class="btn btn-success"
                      >
                        -
                      </button>
                      <div class="mx-2 d-flex flex-column">
                        <input
                          type="number"
                          class="form-control"
                          :value="product.qty"
                          :disabled="product.qty > 9 || product.qty < 0"
                        />
                      </div>
                      <button @click="addQty(product)" class="btn btn-success">
                        +
                      </button>
                    </div>
                    <div
                      class="hidden text-danger"
                      :class="{ 'd-block': product.qty > 9 }"
                    >
                      The maximum you may purchase is 10 products.
                    </div>
                  </div>
                  <div class="d-flex flex-row justify-content-between">
                    <div
                      class="
                        d-flex
                        flex-row flex-sm-column
                        align-items-center
                        me-0 me-sm-2
                      "
                    >
                      <span class="price-name me-2">Total</span>
                      <span
                        ><b> {{ product.qty * product.price }}</b></span
                      >
                    </div>

                    <div class="d-flex">
                      <!-- <button
                        class="btn secondary-btn w-auto text-nowrap me-2"
                        type="button"
                        @click="addToWishlist(product)"
                      >
                        Save for later
                      </button> -->
                      <button
                        v-if="getCart"
                        class="btn secondary-btn"
                        type="button"
                        @click="removeToCart(product)"
                      >
                        <i class="bi bi-trash-fill"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 border-top d-flex flex-column align-items-end">
        <div>
          Sub Total(<b>{{ getItems }}</b
          >) : <b>{{ getTotalPrice }}</b>
        </div>
      </div>
    </div>
    <div v-else class="h-100 d-flex align-items-center justify-content-center">
      <img src="../assets/empty-cart.png" alt="empty getCart" />
    </div>
  </div>
  <div class="addCart-card" v-if="currentRouteName === 'WishList'">
    <div class="h-100 overflow-auto" v-if="getWishList.length > 0">
      <div class="product-detail">
        <div class="row g-3 m-0 px-4 pb-3">
          <h3 class="mb-2 fw-bold">My {{ $route.name }}</h3>
          <div class="col-sm-12" v-for="product in getWishList" :key="product">
            <div class="product-card p-4 border row add-product">
              <div class="col-sm-12 col-md-2 img-section text-center">
                <img :src="product.url" alt="product img" height="90" />
              </div>
              <div
                class="
                  col-sm-12 col-md-10
                  d-flex
                  flex-column
                  justify-content-center
                "
              >
                <div class="d-flex">
                  <div class="text-start fw-bold flex-grow-1">
                    {{ product.name }}
                  </div>
                  <span
                    ><b>₹ {{ product.price }}</b></span
                  >
                </div>
                <div
                  class="
                    col-sm-12 col-md-3
                    mt-2
                    d-flex
                    justify-content-end
                    w-100
                  "
                >
                  <button
                    class="btn primary-btn w-auto"
                    type="button"
                    @click="addToCart(product)"
                  >
                    Add to cart
                  </button>
                  <button
                    v-if="getWishList"
                    class="btn secondary-btn w-auto ms-2"
                    type="button"
                    @click="removeWishList(product)"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="h-100 d-flex align-items-center justify-content-center">
      <img src="../assets/no_wish_list.png" alt="empty getWishList" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "ProductHorizontal",
  computed: {
    ...mapGetters(["getTotalPrice", "getItems", "getCart", "getWishList"]),
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapMutations([
      "removeToCart",
      "addQty",
      "removeQty",
      "removeWishList",
      "addToCart",
      "addToWishlist",
    ]),
  },
};
</script>
