<template>
  <div class="search-menu mb-2">
    <div class="d-flex search-icon" :class="{ 'search-icon-round': modal }">
      <span class="me-2"><i class="bi bi-search"></i></span>
      <input
        type="text"
        placeholder="Search"
        v-model="search"
        class="flex-grow-1 border-0"
        @input="filterProduct"
        @focus="modal = true"
      />
      <button>fetch</button>
      <button
        type="button"
        class="btn-close btn-sm btn"
        aria-label="Close"
        @click="close()"
      ></button>
    </div>
    <!--        <div v-if="filterdState && modal" class="search-dropdown">-->
    <!--            <ul v-if="filterdState.length" class="list-unstyled mb-0">-->
    <!--                <li-->
    <!--                        v-for="filterdState in filterdState"-->
    <!--                        :key="filterdState.id"-->
    <!--                        @click="setState(filterdState)"-->
    <!--                >-->
    <!--                    <div class="row">-->
    <!--                        <div class="col-2 d-flex justify-content-center align-items-center">-->
    <!--                            <img :src="filterdState.url" height="80" class="rounded-3" />-->
    <!--                        </div>-->
    <!--                        <div class="d-flex flex-column col-10">-->
    <!--                            <span class="fw-bold">{{ filterdState.name }}</span>-->
    <!--                            <span> {{ filterdState.shortdesc }}</span>-->
    <!--                            <span class="fw-bold">₹ {{ filterdState.price }}</span>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </li>-->
    <!--            </ul>-->
    <!--            <ul v-else class="list-unstyled mb-0">-->
    <!--                <li class="text-center fw-bold">No results...</li>-->
    <!--            </ul>-->
    <!--        </div>-->
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["products", "search"]),
    filterProduct() {
      console.log(this.products);
      return this.products.filter((product) => {
        var productName = product.name.toLowerCase();
        var searchName = this.search.toLowerCase();
        this.filterProduct.push(product);
        console.log(this.filterProduct);
        return productName.includes(searchName);
      });
    },
  },
  methods: {},
};
</script>
