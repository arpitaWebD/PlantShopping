<template>
  <nav class="navbar navbar-expand-md navbar-light border-bottom header">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/logo.png" alt="logo" class="logo" />
        </router-link>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="
          collapse
          navbar-collapse
          justify-content-md-end justify-content-center
        "
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <ul
            class="
              d-flex
              flex-column flex-md-row
              list-unstyled
              mb-0
              h-100
              align-items-center
              n-links
            "
          >
            <li class="nav-link">shop</li>
            <li class="nav-link">shop</li>
            <li class="nav-link">shop</li>
          </ul>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <Search :searchItem="searchItem" :filterProduct="filterProduct" />
          <div class="dropdown">
            <router-link :to="{ name: 'AddCart' }">
              <div class="me-3 cart-icon">
                <i class="bi bi-bag fa-2x"></i>
                <span
                  class="
                    position-absolute
                    bottom-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                  "
                  >{{ cart.length }}</span
                >
              </div>
            </router-link>
          </div>
          <div class="me-3">
            <router-link :to="{ name: 'WishList' }">
              <div class="cart-icon">
                <i class="bi bi-heart fa-2x"></i>
                <span
                  class="
                    position-absolute
                    bottom-0
                    start-100
                    translate-middle
                    badge
                    rounded-pill
                    bg-danger
                  "
                  >{{ wishList.length }}</span
                >
              </div>
            </router-link>
          </div>
          <div class="avatar-icon">
            <img src="../assets/avatar.png" alt="avatar" width="40" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Search from "../components/Search.vue";
export default {
  components: { Search },
  computed: {
    ...mapState(["products", "cart", "wishList"]),
    filterProduct() {
      return this.products.filter((product) => {
        var productName = product.name.toLowerCase();
        var searchName = this.search.toLowerCase();
        return productName.includes(searchName);
      });
    },
  },
};
</script>
