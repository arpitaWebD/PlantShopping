
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import AddCart from "./views/AddToCart.vue";
import WishList from "./views/WishList.vue";
import Login from "../components/login.vue";

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
        name: "login",
        component: Login
    },
]
const router = createRouter({

    history: createWebHistory(),
    routes
});
export default router