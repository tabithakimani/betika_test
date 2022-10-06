<template>
    <div class="flex justify-center">
        <div class="container">
            <div class="grid grid-cols-12 gap-5">
                <div class="col-span-12 lg:col-span-7 mx-3">
                    <div>
                        <h3 class="text-start text-black text-2xl font-bold mb-5">Order Details</h3>
                        <form class="personal-information">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                                <div class="lg:col-span-2">
                                    <div>
                                        <label class="mb-3 inline-block">Street Address</label>
                                        <input v-model="form.address" class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-10 focus:outline-none text-base" placeholder="House number and street name" type="text">
                                    </div>
                                </div>
                                <div class="lg:col-span-2">
                                    <div>
                                        <label class="mb-3 inline-block">Apartment,Floor</label>
                                        <input
                                            class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-10 focus:outline-none text-base"
                                            placeholder="Apartment, suite, unit etc." type="text">
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div class="additional-info-wrap">
                            <h4 class="text-base font-semibold">Additional information</h4>
                            <div class="additional-info">
                                <label class="mb-3 inline-block">Order notes</label>
                                <textarea
                                    v-model="form.delivery_notes"
                                    class="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-36 focus:outline-none text-base"
                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                    name="message"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-12 lg:col-span-5 mt-lg-0">
                    <div>
                        <h3 class="text-black text-2xl font-bold mb-10">Your order</h3>
                        <div class="bg-zinc-200 p-10">
                            <div  class="your-order-product-info">
                                <ul class="flex flex-wrap items-center justify-between">
                                    <li class="text-base font-semibold">Product</li>
                                    <li class="text-base font-semibold">Total</li>
                                </ul>
                                <ul v-for="item in cart_items"  class=" border-b border-gray-600 py-5 my-5">
                                    <li class="flex flex-wrap items-center justify-between">
                                        <span>{{item.name}}</span>
                                        <span>{{parseFloat(item.price * item.quantity).toFixed(2)}}</span>
                                    </li>
                                </ul>
                                <ul class="flex flex-wrap items-center justify-between border-b border-gray-600 py-5 my-10">
                                    <li class="text-base font-semibold">Total</li>
                                    <li class="text-base font-semibold">{{parseFloat(total).toFixed(2)}}</li>
                                </ul>
                            </div>

                        </div>
                        <div class="mt-6">
                            <button @click="addOrder" class="block w-full text-center leading-none uppercase text-white text-sm bg-gray-500 px-5 py-5 transition-all hover:bg-orange font-semibold"
                               >Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Checkout",
    components: {
        VueGoogleAutocomplete
    },
    data() {
        return {
            form: {},
        }
    },
    computed: {
        ...mapGetters({
            cart_items: 'products/cart_items',
            total: 'products/total'
        }),
    },
    methods:{
        ...mapActions({
           createOrder:'orders/createOrder'
        }),
        addOrder(){

        }
    }
}
</script>
