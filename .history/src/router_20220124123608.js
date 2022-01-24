
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import AddCart from "./views/AddToCart.vue";
import WishList from "./views/WishList.vue";
import test1 from "./components/Test/test1.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/AddCart",
        name: "AddCart",
        component: AddCart
    },
    {
        path: "/WishList",
        name: "WishList",
        component: WishList
    },
    {
        path: "/login",
        name: "test1",
        component: test1
    },
]
const router = createRouter({

    history: createWebHistory(),
    routes
});
export default router