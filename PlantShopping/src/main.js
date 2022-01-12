import { createApp } from 'vue';
import { createStore } from "vuex";
import axios from "axios";
import App from './App.vue';
import router from './router';
export const $axios = axios.create();
const store = createStore({
    state() {
        return {
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
        addToCounter(state, payload) {
            state.counter = state.counter + payload;
            state.history.push(state.counter)
        },
        
        subToCounter(state, payload) {
            state.counter = state.counter - payload;
             state.history.push(state.counter)
       }  
    },
    actions: {
        // async addRandomNum(context) {
        //  let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new");
        //     console.log(data);
        //     context.commit("addToCounter", data.data)
        
        // }
    },
    getters: {
        activeIndexes: (state) => (payload) => {
            let indexes = [];
            state.history.forEach((number, index) => {
                if (number === payload) {
                    indexes.push(index);
                }
            });
            console.log(indexes);
            return indexes;
        }
    }
})

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
