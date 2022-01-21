
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
        path: "/test1",
        name: "test1",
        component: test1
    },
    {
        path: "/test2",
        name: "test2",
        component: test2
    },
    {
        path: "/test3",
        name: "test3",
        component: test3
    },
]
const router = createRouter({

    history: createWebHistory(),
    routes
});
export default router