<template>
  <div class="search-menu mb-2">
    <div class="d-flex search-icon" :class="{ 'search-icon-round': modal }">
      <span class="me-2"><i class="bi bi-search"></i></span>
      <input
        type="text"
        placeholder="Search"
        v-model="search"
        class="flex-grow-1 border-0"
        @input="searchItem(search)"
        @focus="modal = true"
      />
      <button
        type="button"
        class="btn-close btn-sm btn"
        aria-label="Close"
        @click="close()"
      ></button>
    </div>
    <div class="search-dropdown" :class="{ opened: modal }">
      <ul v-if="modal" class="list-unstyled mb-0">
        <li
          v-for="filterdState in filterProduct"
          :key="filterdState.id"
          @click="productPreview(products)"
        >
          <div class="row">
            <div class="col-2 d-flex justify-content-center align-items-center">
              <img :src="filterdState.url" height="80" class="rounded-3" />
            </div>
            <div class="d-flex flex-column col-10">
              <span class="fw-bold">{{ filterdState.name }}</span>
              <span> {{ filterdState.shortdesc }}</span>
              <span class="fw-bold">₹ {{ filterdState.price }}</span>
            </div>
          </div>
        </li>
      </ul>
      <ul
        v-if="filterProduct.length == 0 && search.length > 0"
        class="list-unstyled mb-0 no-result"
      >
        <li class="text-center fw-bold">No results...</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      modal: false,
    };
  },
  props: {
    searchItem: Function,
    filterProduct: Function,
  },
  methods: {
    //clear search product
    close() {
      this.search = "";
      this.modal = false;
      return this.search;
    },
    //set search data
    setState(search) {
      this.search = search.name;
      this.modal = false;
    },
  },
};
</script>
