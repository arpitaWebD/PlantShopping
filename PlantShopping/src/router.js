
import {createRouter, createWebHistory} from "vue-router";
import Home from "./views/Home.vue";
import AddCart from "./views/AddToCart.vue";

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
]
const router = createRouter({

    history: createWebHistory(), 
    routes
});
export default router