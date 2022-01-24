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
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  props: {
    searchItem: Function,
  },
};
</script>
