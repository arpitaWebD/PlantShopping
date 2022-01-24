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
                    name: "Aluminum Plant",
                    price: 200,
                    shortdesc: "Best Drip in the Market",
                    url: "/src/assets/plan.jpg",
                    reviewCount: "98",
                    title: "tred",
                    qty: 1,
                    likeProductq: false,
                    tprice: 0,
                    subname: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                },
                {
                    id: 2,
                    name: "Areca Palm",
                    price: 50,
                    shortdesc: "Classy, Stylish, Dope",
                    url: "/src/assets/plant-6.jpg",
                    reviewCount: "918",
                    qty: 1,
                    likeProductq: false
                },
                {
                    id: 3,
                    name: "Arrowhead",
                    price: 2500,
                    shortdesc: "Elegance built in",
                    url: "/src/assets/plant-2.jpg",
                    reviewCount: "58",
                    qty: 1,
                    likeProductq: false
                },
                {
                    id: 4,
                    name: "Broadleaf Lady Palm",
                    price: 80,
                    shortdesc: "Sleek, Trendy, Clean",
                    url: "/src/assets/plant-3.jpg",
                    reviewCount: "48",
                    qty: 1,
                    likeProductq: false
                },
                {
                    id: 5,
                    name: "Chinese Evergreen",
                    price: 230,
                    shortdesc: "Fabulous, Exotic, Classy",
                    url: "/src/assets/plant-4.jpg",
                    reviewCount: "28",
                    qty: 1,
                    likeProductq: false
                },
                {
                    id: 6,
                    name: "Canary Date Palm",
                    price: 30,
                    shortdesc: "Neat, Sleek, Smart",
                    url: "/src/assets/plant-5.jpg",
                    reviewCount: "38",
                    qty: 1,
                    likeProductq: false
                },
            ],
            tPrice: 0,
            wishList: [],
            qtyValue: 1,
            showPreview: false,
            productPreviews: [],
            tabDetails: false,
            tabReviews: false,
            modal: false
        };
    },
    mutations: {
        addToCart(state, payload) {
            const cartProduct = state.cart.find(
                p => p.id === payload.id
            );
            if (cartProduct) {
                payload.qty++;
                payload.tprice = payload.price * payload.qty;
            }
            else {
                state.cart.push(payload);
            }
        },
        addQty(state, payload) {
            if (payload.qty < 10) {
                payload.qty++;
            }
            payload.tprice = payload.price * payload.qty;
        },
        removeQty(state, payload) {
            if (payload.qty > 0) {
                payload.qty--;
            }
            payload.tprice = payload.price * payload.qty;
        },
        removeToCart(state, payload) {
            state.cart.splice(state.cart.indexOf(payload), 1);
        },
        likeProduct(state, payload) {
            payload.likeProductq = !(payload.likeProductq);
            return payload.likeProductq;
        },
        addToWishlist(state, payload, likeProductq) {
            payload.likeProductq = !payload.likeProductq;
            const wishlistProduct = state.wishList.find(
                p => p.id === payload.id
            );
            console.log(payload.likeProductq);
            if ((payload.likeProductq === true)) {
                if (wishlistProduct) {
                    console.log("fail");
                }
                else {
                    state.wishList.push(payload);
                    console.log("sucess");
                }
            }
            else {
                state.wishList.splice(state.wishList.indexOf(payload), 1);
            }
        },
        clsoePreview(state, payload) {
            state.showPreview = false;
            state.productPreviews.splice(state.productPreviews.indexOf(payload));
        },
        productPreview(state, payload) {
            state.showPreview = true;
            const alreadyProduct = state.productPreviews.find(
                p => p.id === payload.id
            );
            var nalreadyProduct = state.productPreviews.find(
                p => p.id !== payload.id
            );
            if (alreadyProduct) {
                state.showPreview = false;
                state.productPreviews.splice(state.productPreviews.indexOf(payload));
            }
            else if (alreadyProduct != nalreadyProduct) {
                state.productPreviews.splice(state.productPreviews.indexOf(alreadyProduct));
                state.productPreviews.push(payload);
                state.modal = false;
                console.log(modal)
            }
            else {
                state.productPreviews.push(payload);
                state.modal = false;
                console.log(modal)
            }

        },
    },
    getters: {
        getProduct(state) {
            state.filterdState;
        },
        getItems(state, payload) {
            let totalItems = 0;
            state.cart.forEach(payload => (totalItems += payload.qty));
            return totalItems;
        },
        getTotalPrice: (state, payload) => {
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