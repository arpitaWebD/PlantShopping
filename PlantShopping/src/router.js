
import {createRouter, createWebHistory} from "vue-router";
import App from "./App.vue";
import AddCart from "./views/AddToCart.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: App
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