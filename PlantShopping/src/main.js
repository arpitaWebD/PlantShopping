import { createApp } from 'vue';
import { createStore } from "vuex";
import axios from "axios";
import App from './App.vue';
import router from './router';
export const $axios = axios.create();
const store = createStore({
    state() {
        return {
            cart: [],
            products: [
                {
                    id: 1,
                    name: "Chelsea Shoes",
                    price: 200,
                    shortdesc: "Best Drip in the Market",
                    url: "/src/assets/plan.jpg",
                    reviewCount: "98",
                    title: "tred",
                },
                {
                    id: 2,
                    name: "Kimono",
                    price: 50,
                    shortdesc: "Classy, Stylish, Dope",
                    url: "/src/assets/plant-6.jpg",
                    reviewCount: "918",
                },
                {
                    id: 3,
                    name: "Watch",
                    price: 2500,
                    shortdesc: "Elegance built in",
                    url: "/src/assets/plant-2.jpg",
                    reviewCount: "58",
                },
                {
                    id: 4,
                    name: "Wallet",
                    price: 80,
                    shortdesc: "Sleek, Trendy, Clean",
                    url: "/src/assets/plant-3.jpg",
                    reviewCount: "48",
                },
                {
                    id: 5,
                    name: "Lady Handbags",
                    price: 230,
                    shortdesc: "Fabulous, Exotic, Classy",
                    url: "/src/assets/plant-4.jpg",
                    reviewCount: "28",
                },
                {
                    id: 6,
                    name: "Casual Shirts",
                    price: 30,
                    shortdesc: "Neat, Sleek, Smart",
                    url: "/src/assets/plant-5.jpg",
                    reviewCount: "38",
                },
            ],
        };
    },
    mutations: {
        addToCart(state, payload) {
            state.cart.push(payload);
        },
        
        removeToCart(state, payload) {
            state.cart.splice(cart.indexOf(payload), 1);
       }  
    },
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
