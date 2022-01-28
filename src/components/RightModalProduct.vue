<template>
  <div class="right-sidebar p-4">
    <div class="flex-grow-1 h-100 pb-5">
      <div class="rs-img-section">
        <span class="rs-close" @click="clsoePreview"
          ><i class="bi bi-x"></i
        ></span>
        <div class="text-center">
          <img
            class="img-fluid img-section"
            :src="productPreviews.url"
            alt="product"
            height="250"
          />
        </div>

        <div class="rs-slider d-flex mt-4">
          <div class="rs-slider-img mx-2">
            <img src="../assets/slider-1.jpg" alt="slider1" />
          </div>
          <div class="rs-slider-img mx-2">
            <img src="../assets/slider-1.jpg" alt="slider1" />
          </div>
          <div class="rs-slider-img mx-2">
            <img src="../assets/slider-1.jpg" alt="slider1" />
          </div>
          <div class="rs-slider-img mx-2">
            <img src="../assets/slider-4.jpg" alt="slider1" />
          </div>
        </div>
      </div>
      <div class="mt-3">
        <span class="main-title">{{ productPreviews.name }}</span>
        <p class="main-subtitle">
          {{ productPreviews.subname }}
        </p>
      </div>
      <div>
        <div class="d-flex">
          <div class="w-50 tab tab-active">details</div>
          <div class="w-50 tab">
            reviewes({{ productPreviews.reviewCount }})
          </div>
        </div>
        <div>details tab content</div>
        <div>review tab content</div>
      </div>
    </div>
    <div class="rs-footer py-3 d-flex align-items-center">
      <div
        class="me-3 like-icon cursor-pointer"
        @click="addToWishlist(productPreviews)"
      >
        <i
          class="bi"
          :class="[
            !productPreviews.likeProductq
              ? 'bi-heart'
              : 'bi-heart-fill fav-icon',
          ]"
        ></i>
      </div>
      <div class="flex-grow-1">
        <button
          class="btn primary-btn"
          type="button"
          @click="addToCart(productPreviews)"
        >
          <span>₹{{ productPreviews.price }}</span>
          <span>-Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["clsoePreview", "addToCart", "addToWishlist"]),
  },
  props: ["productPreviews"],
};
</script>
