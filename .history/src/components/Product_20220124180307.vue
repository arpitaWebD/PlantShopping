<template>
  <div class="product-card p-4 border my-2" :class="'active':'productPreview'">
    <div class="img-section text-center">
      <img
        :src="products.url"
        alt="product img"
        @click="productPreview(products)"
      />
      <div class="like-icon" @click="addToWishlist(products)">
        <i
          class="bi"
          :class="[
            !products.likeProductq ? 'bi-heart' : 'bi-heart-fill fav-icon',
          ]"
        ></i>
      </div>
    </div>
    <div class="mt-2">
      <div class="text-start fw-bold">
        {{ products.name }}
      </div>
      <div class="d-flex mt-1">
        <div class="d-flex">
          <span class="ms-1"><i class="bi bi-star-fill"></i></span>
          <span class="ms-1"><i class="bi bi-star-fill"></i></span>
          <span class="ms-1"><i class="bi bi-star-fill"></i></span>
          <span class="ms-1"><i class="bi bi-star-half"></i></span>
          <span class="ms-1"><i class="bi bi-star"></i></span>
        </div>
        <span class="ms-2">({{ products.reviewCount }})</span>
      </div>
    </div>
    <div class="d-flex align-items-center justify-content-between mt-3">
      <div class="d-flex flex-column">
        <span class="price-name">Price</span>
        <span
          ><b>₹ {{ products.price }}</b></span
        >
      </div>
      <div>
        <button
          class="btn secondary-btn"
          type="button"
          @click="addToCart(products)"
        >
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["products", "cart", "wishList", "wishlistProductt"]),
  },
  methods: {
    ...mapMutations([
      "addToCart",
      "likeProduct",
      "addToWishlist",
      "productPreview",
    ]),
  },
  props: ["products"],
};
</script>
