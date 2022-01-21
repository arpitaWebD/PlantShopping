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
import test1 from "../components/Test/test1.vue";
import test2 from "../components/Test/test2.vue";
import test3 from "../components/Test/test3.vue";
export default {
  name: "Home",
  components: {
    ProductView,
    LeftSidebar,
    test1,
    test2,
    test3
  },
};
</script>
