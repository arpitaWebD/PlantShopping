
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductHorizontal from "../components/ProductHorizontal.vue";
import WishList from "../views/WishList.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/AddCart",
        name: "AddCart",
        component: ProductHorizontal
    },
    {
        path: "/WishList",
        name: "WishList",
        component: ProductHorizontal
    },
]
const router = createRouter({

    history: createWebHistory(),
    routes
});
export default router