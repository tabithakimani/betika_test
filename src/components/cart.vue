<template>
    <!--  Mobile Cart-->
    <div :class="visible ? 'cart-open' : 'cart-close'"
         class="cart fixed p-3 w-[80%] right-0 bg-white overflow-x-scroll top-0 h-screen z-50 md:invisible space-y-10 bg-slate">
        <div class="flex pr-2 justify-end">
            <button @click="open_cart" class="p-4 text-white text-xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor"
                     class="w-6 h-6 text-black">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
        </div>
        <div class="flex flex-wrap justify-center text-center items-center pb-6 mb-6 border-b border-gray-200">
            <h4 class="font-normal text-md text-dark capitalize text-center">Shopping Cart</h4>
            <button class="offcanvas-close md:invisible" aria-label="close icon"><i class="icon-close"></i></button>
        </div>
        <ul class="h-96 overflow-y-auto">
            <li v-for="item in cart_items" :key="item.id" class="flex flex-wrap group mb-8 p-2">
                <div class="mr-5 relative">
                    <a href="#"><img :src="item.image" alt="product image"
                                     class="object-scale-down"
                                     loading="lazy" width="50" height="50"></a>
                    <button
                        class="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                        <i class="icon-close"></i></button>
                </div>
                <div class="flex-1 pr-3 space-y-6">
                    <h4>
                        <a class="font-light text-sm md:text-base text-dark transition-all tracking-normal">{{
                                item.name
                            }}</a>
                    </h4>
                    <span
                        class="font-light text-sm text-dark transition-all tracking-normal"> <span>${{
                            item.price
                        }}</span></span>
                    <br>
                    <div class="flex flex-row justify-center">
                        <button @click="updateQuantity(item,item.quantity - 1,'del')" href="javascript:void(0)"
                                class="flex items-center justify-center hover:bg-red-950 mr-1 w-12 h-12 border rounded-full">
                            -
                        </button>
                        <div class="flex items-center justify-center mr-1 w-12 h-12 border rounded-full">
                            {{ item.quantity }}
                        </div>
                        <button @click="updateQuantity(item,item.quantity + 1,'add')" href="javascript:void(0)"
                                class="flex items-center justify-center hover:bg-red-950 w-12 h-12 border rounded-full">
                            +
                        </button>

                    </div>
                </div>
                <hr class="w-full"/>
            </li>
        </ul>
        <div
            class="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-gray-400 font-normal text-base text-dark capitalize">
            Total:<span>{{ parseFloat(total).toFixed(2) }}</span>
        </div>
        <div class="text-center">
            <router-link to="/checkout">
                <button
                    class="w-full py-5 px-10 block bg-gray-500 uppercase font-semibold text-base text-white transition-all leading-none">
                    Checkout
                </button>
            </router-link>
        </div>
    </div>

    <!--  Default Cart-->
    <div class="rounded overflow-hidden md:w-2/5 w-0 invisible md:visible">
        <div class="shadow border p-8">
            <div class="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-gray-400">
                <h4 class="font-normal text-md text-dark capitalize">Shopping Cart</h4>
                <button class="offcanvas-close md:invisible" aria-label="close icon"><i class="icon-close"></i></button>
            </div>
            <ul class="h-96 overflow-y-auto">
                <li v-for="item in cart_items" :key="item.id" class="flex flex-wrap group mb-8 p-2">
                    <div class="mr-5 relative">
                        <a href="#"><img :src="item.image" alt="product image"
                                         class="object-scale-down"
                                         loading="lazy" width="50" height="50"></a>
                        <button
                            class="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                            <i class="icon-close"></i></button>
                    </div>
                    <div class="flex-1 pr-3 space-y-6">
                        <h4>
                            <a class="font-light text-sm md:text-base text-dark transition-all tracking-normal">{{
                                    item.name
                                }}</a>
                        </h4>
                        <span
                            class="font-light text-sm text-dark transition-all tracking-normal"><span>{{
                                item.uom_name
                            }}</span> <span>${{
                                item.price
                            }}</span></span>
                        <br>
                        <div class="flex flex-row justify-center">
                            <button @click="updateQuantity(item,item.quantity - 1,'del')" href="javascript:void(0)"
                                    class="flex items-center justify-center hover:bg-red-950 mr-1 w-12 h-12 border rounded-full">
                                -
                            </button>
                            <div class="flex items-center justify-center mr-1 w-12 h-12 border rounded-full">
                                {{ item.quantity }}
                            </div>
                            <button @click="updateQuantity(item,item.quantity + 1,'add')" href="javascript:void(0)"
                                    class="flex items-center justify-center hover:bg-red-950 w-12 h-12 border rounded-full">
                                +
                            </button>

                        </div>
                    </div>
                    <hr class="w-full"/>
                </li>
            </ul>
            <div
                class="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-gray-400 font-normal text-base text-dark capitalize">
                Total:<span>{{ parseFloat(total).toFixed(2) }}</span>
            </div>
            <div class="text-center">
                <router-link to="/checkout">
                    <button
                        class="w-full py-5 px-10 block bg-gray-500 uppercase font-semibold text-base text-white transition-all leading-none">
                        Checkout
                    </button>
                </router-link>
            </div>
        </div>
    </div>

</template>


<script>

import {mapActions, mapGetters} from "vuex";

export default {
    name: 'Cart',
    components: {},
    data() {
        return {}
    },
    mounted() {
        this.getCartItems()
    },
    computed: {
        ...mapGetters({
            visible: 'visible',
            cart_items: 'products/cart_items',
            total: 'products/total'
        })
    },

    methods: {
        ...mapActions({
            getCartItems: 'products/getCartItems'
        }),
        open_cart() {
            this.$store.commit('setVisible', !this.visible)
        },
        updateQuantity(item, quantity, action) {
            let cartIndex = this.cart_items.findIndex(k => k.uom_id === item.uom_id)

            if (cartIndex !== -1) {

                this.cart_items[cartIndex].quantity = quantity;

                let cart = JSON.parse(localStorage.getItem('cart')) ?? []

                const indexOfObject = cart.findIndex(object => {
                    return object.uom_id === this.cart_items[cartIndex].uom_id;
                });

                if (action === 'del') {
                    if (quantity < 1) {
                        this.cart_items.splice(cartIndex, 1)
                    }
                    cart.splice(indexOfObject, 1);
                } else {
                    cart.push(item)
                }

                localStorage.setItem('cart', JSON.stringify(cart))

                this.getCartItems()
            }
        },
    },
}
</script>

<style>
.cart {
    transition: all 330ms ease-out;
}

.cart-open {
    transform: translateY(0%);
}

.cart-close {
    transform: translateY(-100%);
}
</style>
