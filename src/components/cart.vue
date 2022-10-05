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
            <li class="flex flex-wrap group mb-8">
                <div class="mr-5 relative">
                    <a href="#"><img src="../assets/images/wine_bottle.png" alt="product image"
                                     class="object-scale-down"
                                     loading="lazy" width="45" height="40"></a>
                    <button
                        class="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                        <i class="icon-close"></i></button>
                </div>
                <div class="flex-1 pr-3">
                    <h4>
                        <a class="font-light text-sm md:text-base text-dark transition-all tracking-normal" href="#">Birpod
                            product unsde - m / gold</a>
                    </h4>
                    <span
                        class="font-light text-sm text-dark transition-all tracking-normal">1 x <span>$80.00</span></span>
                    <div class="flex flex-row justify-center">
                        <a @click="" href="javascript:void(0)"
                           class="flex items-center justify-center hover:bg-red-400 mr-1 w-12 h-12 border rounded-full">
                            -
                        </a>
                        <div class="flex items-center justify-center mr-1 w-12 h-12 border rounded-full">
                            1
                        </div>
                        <a @click="" href="javascript:void(0)"
                           class="flex items-center justify-center hover:bg-red-400 w-12 h-12 border rounded-full">
                            +
                        </a>

                    </div>
                </div>
            </li>
            <li class="flex flex-wrap group mb-8">
                <div class="mr-5 relative">
                    <a href="#"><img src="../assets/images/wine_bottle.png" alt="product image"
                                     class="object-scale-down"
                                     loading="lazy" width="45" height="40"></a>
                    <button
                        class="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                        <i class="icon-close"></i></button>
                </div>
                <div class="flex-1 pr-3">
                    <h4>
                        <a class="font-light text-sm md:text-base text-dark transition-all tracking-normal" href="#">Birpod
                            product unsde - m / gold</a>
                    </h4>
                    <span
                        class="font-light text-sm text-dark transition-all tracking-normal">1 x <span>$80.00</span></span>
                    <div class="flex flex-row justify-center">
                        <a @click="" href="javascript:void(0)"
                           class="flex items-center justify-center hover:bg-red-950 mr-1 w-12 h-12 border rounded-full">
                            -
                        </a>
                        <div class="flex items-center justify-center mr-1 w-12 h-12 border rounded-full">
                            1
                        </div>
                        <a @click="" href="javascript:void(0)"
                           class="flex items-center justify-center hover:bg-red-950 w-12 h-12 border rounded-full">
                            +
                        </a>

                    </div>
                </div>
            </li>
        </ul>
        <div
            class="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-gray-300 font-normal text-base text-dark capitalize">
            Total:<span>$218.00</span>
        </div>
        <div class="text-center">
            <a class="py-5 px-10 block bg-white border border-solid border-gray-300 uppercase font-semibold text-base hover:bg-red-950 hover:border-red-950 hover:text-white transition-all leading-none"
               href="">Checkout</a>
        </div>
    </div>

    <!--  Default Cart-->
    <div class="rounded overflow-hidden md:w-2/5 w-0 invisible md:visible">
        <div class="shadow border p-8">
            <div class="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-gray-400">
                <h4 class="font-normal text-md text-dark capitalize">Shoping Cart</h4>
                <button class="offcanvas-close md:invisible" aria-label="close icon"><i class="icon-close"></i></button>
            </div>
            <ul class="h-96 overflow-y-auto">
                <li v-for="item in cart_items" :key="item.id" class="flex flex-wrap group mb-8 p-2">
                    <div class="mr-5 relative">
                        <a href="#"><img src="../assets/images/wine_bottle.png" alt="product image"
                                         class="object-scale-down"
                                         loading="lazy" width="50" height="50"></a>
                        <button
                            class="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange">
                            <i class="icon-close"></i></button>
                    </div>
                    <div class="flex-1 pr-3 space-y-6">
                        <h4>
                            <a class="font-light text-sm md:text-base text-dark transition-all tracking-normal"
                               href="#">Birpod
                                product unsde - m / gold</a>
                        </h4>
                        <span
                            class="font-light text-sm text-dark transition-all tracking-normal">1 x <span>$80.00</span></span>
                        <br>
                        <div class="flex flex-row justify-center">
                            <a @click="updateQuantity(item,item.quantity - 1)" href="javascript:void(0)"
                               class="flex items-center justify-center hover:bg-red-950 mr-1 w-12 h-12 border rounded-full">
                                -
                            </a>
                            <div class="flex items-center justify-center mr-1 w-12 h-12 border rounded-full">
                                {{ item.quantity }}
                            </div>
                            <a @click="updateQuantity(item,item.quantity + 1)" href="javascript:void(0)"
                               class="flex items-center justify-center hover:bg-red-950 w-12 h-12 border rounded-full">
                                +
                            </a>

                        </div>
                    </div>
                    <hr class="w-full"/>
                </li>
            </ul>
            <div
                class="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-gray-400 font-normal text-base text-dark capitalize">
                Total:<span>$218.00</span>
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

import {mapGetters} from "vuex";

export default {
    name: 'Cart',
    components: {},
    data() {
        return {
            cart_items: [
                {
                    id: 1,
                    name: 'hajhsjhsja',
                    quantity: 1
                }
            ]
        }
    },
    computed: {
        ...mapGetters({
            visible: 'visible'
        })
    },
    methods: {
        open_cart() {
            console.log(this.visible)
            this.$store.commit('setVisible', !this.visible)
        },
        updateQuantity(item, quantity) {
            let cartIndex = this.cart_items.findIndex(k => k.id === item.id)
            if (cartIndex !== -1) {
                if (quantity < 1) {
                    this.cart_items.splice(cartIndex, 1)
                } else {
                    this.cart_items[cartIndex].quantity = quantity;
                }
            }
        },
    }
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
