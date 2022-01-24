<template>
  <div class="addCart-card row p-0 m-0 flex-grow-1 main">
    <!-- <Login /> -->
    <LeftSidebar />
    <ProductView />
  </div>
</template>

<script>
import ProductView from "../views/ProductView.vue";
import LeftSidebar from "../views/LeftSidebar.vue";
import Login from "../components/Login.vue";
export default {
  name: "Home",
  components: {
    ProductView,
    LeftSidebar,
    Login,
  },
};
</script>
