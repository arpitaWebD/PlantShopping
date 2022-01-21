<template>
  <div class="addCart-card row p-0 m-0 flex-grow-1 main">
    <test1/>
    <test2/>
    <test3/>
    <LeftSidebar />
    <ProductView />
  </div>
</template>

<script>
import ProductView from "../views/ProductView.vue";
import LeftSidebar from "../views/LeftSidebar.vue";
export default {
  name: "Home",
  components: {
    ProductView,
    LeftSidebar,
  },
};
</script>
