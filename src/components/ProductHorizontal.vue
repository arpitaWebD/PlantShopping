<template>
    <div class="addCart-card" v-if="currentRouteName === 'AddCart'">
        <div class="h-100 overflow-auto" v-if="getCart.length > 0">
            <div class="product-detail">
                <div class="row g-3 m-0 px-4 pb-3">
                    <h3 class="mb-2 fw-bold">My {{$route.name}}</h3>
                    <div class="col-sm-12" v-for="product in getCart" :key="product">
                        <div class="product-card p-4 border row add-product">
                            <div class="col-sm-12 col-md-2 img-section text-center">
                                <img :src="product.url" alt="product img" height="90"/>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex align-items-center">
                                <div class="text-start fw-bold">
                                    {{ product.name }}
                                </div>
                            </div>
                            <div
                                    class="col-sm-12 col-md-6 d-flex flex-column flex-sm-row align-items-center justify-content-between"
                            >
                                <div
                                        class="d-flex flex-row flex-sm-column me-2 align-items-center"
                                >
                                    <span class="price-name me-2">Qty</span>
                                    <div class="d-flex">
                                        <button @click="removeQty(product)" class="btn btn-success">
                                            -
                                        </button>
                                        <div class="mx-2 w-50">
                                            <input
                                                    type="number"
                                                    class="form-control"
                                                    :value="product.qty"
                                            />
                                        </div>
                                        <button @click="addQty(product)" class="btn btn-success">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div
                                        class="d-flex flex-row flex-sm-column align-items-center me-0 me-sm-2"
                                >
                                    <span class="price-name me-2">Total</span>
                                    <span
                                    ><b> {{ product.tprice }}</b></span
                                    >
                                </div>

                                <div
                                        class="d-flex flex-row flex-sm-column me-0 me-sm-2 align-items-center"
                                >
                                    <span class="price-name me-2">Price</span>
                                    <span
                                    ><b>₹ {{ product.price }}</b></span
                                    >
                                </div>
                                <div>
                                    <button
                                            v-if="getCart"
                                            class="btn secondary-btn"
                                            type="button"
                                            @click="removeToCart(product)"
                                    >
                                        Remove from cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-top">
                <div><b>Total Price:</b> {{ getTotalPrice }}</div>
                <div><b>Total Items:</b> {{ getItems }}</div>
            </div>
        </div>
        <div v-else class="h-100 d-flex align-items-center justify-content-center">
            <img src="../assets/empty-cart.png" alt="empty getCart"/>
        </div>
    </div>
    <div class="addCart-card" v-if=" currentRouteName === 'WishList'">
        <div class="h-100 overflow-auto" v-if="getWishList.length > 0">
            <div class="product-detail">
                <div class="row g-3 m-0 px-4 pb-3">
                    <h3 class="mb-2 fw-bold">My {{$route.name}}</h3>
                    <div class="col-sm-12" v-for="product in getWishList" :key="product">
                        <div class="product-card p-4 border row add-product">
                            <div class="col-sm-12 col-md-2 img-section text-center">
                                <img :src="product.url" alt="product img" height="90"/>
                            </div>
                            <div class="col-sm-12 col-md-3 d-flex align-items-center">
                                <div class="text-start fw-bold">
                                    {{ product.name }}
                                </div>
                            </div>
                            <div
                                    class="col-sm-12 col-md-7 d-flex flex-column flex-sm-row align-items-center justify-content-between"
                            >
                                <div class="d-flex flex-column">
                                    <span class="price-name">Price</span>
                                    <span
                                    ><b>₹ {{ product.price }}</b></span
                                    >
                                </div>
                                <div class="col-sm-12 col-md-4">

                                    <button
                                            v-if="getWishList"
                                            class="btn secondary-btn"
                                            type="button"
                                            @click="removeWishList(product)"
                                    >
                                        Remove from Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="h-100 d-flex align-items-center justify-content-center">
            <img src="../assets/no_wish_list.png" alt="empty getWishList"/>
        </div>
    </div>
</template>

<script>
    import { mapMutations, mapGetters} from "vuex";

    export default {
        name: "ProductHorizontal",
        computed: {
            ...mapGetters(["getTotalPrice", "getItems", "getCart", "getWishList"]),
            currentRouteName() {
                return this.$route.name;
            }
        },
        methods: {
            ...mapMutations(["removeToCart", "addQty", "removeQty","removeWishList"]),
        },
    };
</script>
