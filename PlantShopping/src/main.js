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
                    qty: 2,
                    likeProductq: true
                },
                {
                    id: 2,
                    name: "Kimono",
                    price: 50,
                    shortdesc: "Classy, Stylish, Dope",
                    url: "/src/assets/plant-6.jpg",
                    reviewCount: "918",
                    qty: 12,
                      likeProductq: false
                },
                {
                    id: 3,
                    name: "Watch",
                    price: 2500,
                    shortdesc: "Elegance built in",
                    url: "/src/assets/plant-2.jpg",
                    reviewCount: "58",
                     qty: 29,
                },
                {
                    id: 4,
                    name: "Wallet",
                    price: 80,
                    shortdesc: "Sleek, Trendy, Clean",
                    url: "/src/assets/plant-3.jpg",
                    reviewCount: "48",
                     qty: 21,
                },
                {
                    id: 5,
                    name: "Lady Handbags",
                    price: 230,
                    shortdesc: "Fabulous, Exotic, Classy",
                    url: "/src/assets/plant-4.jpg",
                    reviewCount: "28",
                     qty: 8,
                },
                {
                    id: 6,
                    name: "Casual Shirts",
                    price: 30,
                    shortdesc: "Neat, Sleek, Smart",
                    url: "/src/assets/plant-5.jpg",
                    reviewCount: "38",
                     qty: 42,
                },
            ],
            tPrice: [],
            wishList: [],
        };
    },
    mutations: {
        addToCart(state, payload) {
             const cartProduct = state.cart.find(
                    p => p.id === payload.id
             );
            if (cartProduct) {
                return alert("Already added product in cart");
            }
             else {
               state.cart.push(payload);
            }    
        },
        removeToCart(state, payload) {
            state.cart.splice(state.cart.indexOf(payload), 1);
        },
        totalAmount(state, payload) {
            state.totalamount = payload.price * payload.qty
        },
        likeProduct(state, payload) {
            payload.likeProductq = !(payload.likeProductq);
            return payload.likeProductq;
        },
        addToWishlist(state, payload) {
            debugger
            const wishlistProduct = state.wishList.find(
                    p => p.id === payload.id
             );
            if (wishlistProduct) {
                return alert("Already added product in wishlist");
            }
             else {
                state.wishList.push(payload);
            }
        }
    },
    getters: {
        getItems(state, payload) {
            let totalItems = 0;
            state.cart.forEach(payload => (totalItems += payload.qty));
            return totalItems;
        },
        getTotalPrice: (state,payload) => {
            let totalPrice = 0;
            state.cart.forEach(payload => (totalPrice += payload.price * payload.qty));
            return totalPrice;
        },     
    },
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
