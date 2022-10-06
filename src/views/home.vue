<template>
    <div>
        <section class="space-y-10 z-10">
            <div
                class="hero-section bg-faint bg-[url('../assets/images/home1.jpg')] h-screen/4 bg-center bg-cover text-white lg:md:20 md:mx-14 mx-6 flex justify-center items-center">
                <h1 class="text-3xl sm:text-4xl md:text-5xl leading-relaxed text-white font-bold z-30">
                    Great Minds Drink Alike
                </h1>
            </div>

            <!--      filters-->
            <div class="flex md:flex-row flex-col lg:md:20 md:mx-14 mx-8 justify-around">
                <div class="md:w-1/3 w-full">
                    <div class="flex items-center justify-between mt-4">
                        <p class="font-bold">
                            Sort By
                        </p>
                    </div>

                    <div class="flex-row space-x-2 space-y-2">
                        <ul class="grid grid-cols-3 gap-x-2 m-6 max-w-md mx-auto">
                            <li class="relative">
                                <input class="sr-only peer" type="radio" value="price" v-model="filters.sort_by"
                                       id="answer_price">
                                <label
                                    class="flex items-center justify-center hover:bg-red-950 hover:text-white p-2 bg-white border border-gray-300 rounded-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-950 peer-checked:ring-2 peer-checked:border-transparent"
                                    for="answer_price">Price</label>
                                <div
                                    class="flex justify-center items-center absolute hidden w-6 h-5 peer-checked:block top-2 md:right-4 right-1 hover:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5"
                                         stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                    </svg>
                                </div>
                            </li>

                            <li class="relative">
                                <input class="sr-only peer" type="radio" value="quality" v-model="filters.sort_by"
                                       id="answer_vintage">
                                <label
                                    class="flex items-center justify-center hover:bg-red-950 hover:text-white p-2 bg-white border border-gray-300 rounded-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-950 peer-checked:ring-2 peer-checked:border-transparent"
                                    for="answer_vintage">Vintage</label>

                                <div class="absolute hidden w-5 h-5 peer-checked:block top-2 md:right-4 right-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5"
                                         stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                                    </svg>
                                </div>
                            </li>
                            <button v-if="filters.sort_by" @click="uncheckSortBy">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="black"
                                     class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </ul>
                    </div>
                </div>
                <div class="md:w-1/2 w-full">
                    <div class="flex items-center justify-between mt-4">
                        <p class="font-bold">
                            Popular Wine Tags
                        </p>
                    </div>
                    <div class="flex-row space-x-2 space-y-2">
                        <ul class="grid grid-cols-4 gap-x-3 m-10 max-w-md mx-auto">
                            <div v-for="(tag,index) in tags.data" :key="index">

                                <li class="relative">
                                    <input class="sr-only peer" type="radio" v-bind:value="tag.class"
                                           v-model="filters.tag" :id="index">
                                    <label v-bind:for="index"
                                           class="flex items-center justify-center hover:bg-red-950 hover:text-white px-4 p-2 bg-white border border-gray-300 rounded-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-950 peer-checked:ring-2 peer-checked:border-transparent">
                                        {{ tag.class }}
                                    </label>

                                    <div class="absolute hidden w-5 h-5 peer-checked:block top-2 md:right-4 right-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             stroke-width="1.5"
                                             stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M4.5 12.75l6 6 9-13.5"/>
                                        </svg>
                                    </div>
                                </li>
                            </div>
                            <button v-if="filters.tag" @click="uncheckTags">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="black"
                                     class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
            <!--      filters-->

            <!--      product and cart cards-->
            <div class="flex justify-between lg:md:20 md:mx-14 mx-6 md:space-x-8 space-x-0">

                <div class="rounded overflow-hidden md:w-3/5 w-full space-y-6">

                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 m-2">
                        <!--            product card-->
                        <div v-for="product in computed_product" :key="product.id">
                            <div class="card hover:shadow-2xl border border-current rounded-lg p-4 h-full">
                                <div class="flex h-full group">
                                    <img :src="product.image" alt="Product"
                                         class="object-contain scale-90 group-hover:scale-110 ease-in duration-500 h-80 xl:h-96 md:h-96 lg:h-96 sm:h-80 w-2/5 p-2">
                                    <div class="w-3/5 flex flex-col h-full items-center space-y-6">
                                        <div class="flex justify-center items-center m-4 text-black h-[33%]">
                                            <span class="font-bold">{{ product.name }}</span>
                                        </div>
                                        <div class="flex flex-col items-center justify-center w-full h-[16%]">
                                            UOM
                                            <select @input="updateUom(product,$event.target.value)" class="bg-white border border-gray-500 text-gray-700 text-sm rounded-md focus:ring-red-950 focus:border-red-950 block w-full p-1"
                                                    size="small" style="width: 60%">
                                                <option v-for="uom in product.unit_of_measures"
                                                        :label="uom.name"
                                                        :value="uom.id"
                                                        :key="uom.id"
                                                />
                                            </select>
                                        </div>
                                        <div class="flex justify-center items-end w-full m-2 h-[16%]">
                                            <button
                                                class="relative inline-flex items-center justify-center overflow-hidden p-2 w-5/6 h-full font-medium bg-transparent text-red-950 border border-red-950 rounded-full">
                                                {{ product.price }}
                                            </button>
                                        </div>
                                        <div class="flex justify-center items-end w-full mx-2 w-full h-[33%]">
                                            <button
                                                type="button"
                                                class=" flex justify-center items-center bg-gray-500 py-1 px-1 w-1/2 h-10 text-xs text-white"
                                                v-on:click="toggleModal(product)">
                                                Details
                                            </button>
                                            <button
                                                class="flex justify-center items-center bg-red-950 py-1 px-1 w-1/2 h-10 text-xs text-white"
                                                v-on:click="addProduct(product)">
                                                Add
                                                to Cart
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--            product card-->
                    </div>

                    <!--pagination-->
                    <div class="flex justify-center items-center md:pb-0 pb-4">
                        <el-pagination
                            :current-page.sync="products.data.current_page"
                            :page-size="parseInt(products.data.per_page)"
                            :page-sizes="[10, 25, 50, 100]"
                            :total="products.data.total"
                            layout="sizes, total, prev, pager, next"
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"/>
                    </div>
                    <!--pagination-->

                </div>
                <cart/>
            </div>
            <!--      product and cart cards-->

            <!--Details Modal-->
            <div v-if="showModal"
                 class="overflow-x-hidden overflow-y-auto fixed md:inset-0 top-20 z-50 outline-none focus:outline-none justify-center items-center flex mx-3">
                <div class="relative w-auto my-16 mx-auto max-w-3xl">
                    <!--content-->
                    <div
                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <!--header-->
                        <div class="flex items-start justify-between rounded-t">

                            <button
                                class="ml-auto bg-transparent border-0 text-black opacity-40 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                v-on:click="toggleModal()">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <!--body-->
                        <div class="relative p-6 flex w-full h-full">
                            <div class="h-full w-1/2 border-r border-current">
                                <img :src="form.image" alt="Product"
                                     class="object-contain w-full h-96">
                            </div>
                            <div class="flex flex-col justify-around items-start w-1/2 p-4 font-serif">
                                <div
                                    class="flex justify-start items-start m-4 text-black font-bold md:text-4xl text-3xl">
                                    <span class="font-bold">{{ form.name }}</span>
                                </div>
                                <div class="flex flex-col items-start md:text-3xl text-2xl">
                                    <p>
                                        Case: {{
                                            Object.keys(form.unit_of_measures).length === 0 ? '' : form.unit_of_measures.map(function (item) {
                                                return item;
                                            }).filter(val => val.name === 'Case')
                                        }}
                                    </p>
                                    <p>
                                        Bottle: {{
                                            Object.keys(form.unit_of_measures).length === 0 ? '' : form.unit_of_measures.map(function (item) {
                                                return item.price;
                                            }).filter(val => val.name === 'Bottle')
                                        }}
                                    </p>
                                </div>
                                <div class="text-justify text-md mb-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ull.
                                </div>
                                <div class="flex space-x-6 border-t border-current mt-2 w-full">
                                    <p class="text-lg text-black">
                                        Tags:
                                    </p>
                                    <p class="text-lg">
                                        {{ form.class }}, {{ form.quality }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
            <!--      modal end-->

        </section>
    </div>
</template>

<script>
import Cart from '../components/cart'
import {ElButton, ElSelect, ElPagination} from 'element-plus'
import {mapActions, mapGetters} from 'vuex';
import Footer from "@/components/footer";

export default {
    components: {
        Cart,
        ElButton,
        ElSelect,
        ElPagination,
        Footer
    },
    data() {
        return {
            filters: {
                paginate: true
            },
            form: {},
            price: '',
            showModal: false,
        }
    },
    mounted() {
        this.getProducts(this.filters)
        this.getUnitOfMeasure({})
        this.getTags({})

        let cart_items =  JSON.parse(localStorage.getItem('cart')) ?? []
        cart_items = Object.values(cart_items.reduce((a, {id,name,image,uom_id,price,uom_name}) => {
            a[uom_id] = a[uom_id] || {uom_id, quantity: 0, name,image,id,price,uom_name};
            a[uom_id].quantity++;
            return a;
        }, Object.create(null)));

        let total = cart_items.reduce(function (s, a) {
            return s + (a.price * a.quantity);
        }, 0);
        this.$store.commit('products/setCartItems', cart_items)
        this.$store.commit('products/setTotal', total)

    },
    computed: {
        ...mapGetters({
            products: 'products/products',
            product: 'products/product',
            uoms: 'uoms/uoms',
            tags: 'products/tags',
        }),
        computed_product() {
            return this.products.data.map(function (item) {
                if (item.unit_of_measures.length && !item.price) {
                    item.price = item.unit_of_measures[0].price
                    item.uom_id = item.unit_of_measures[0].id
                    item.uom_name = item.unit_of_measures[0].name
                }
                return item

            })
        }
    },
    methods: {
        ...mapActions({
            getProducts: 'products/getProducts',
            getProduct: 'products/getProduct',
            getUnitOfMeasure: 'uoms/getUnitOfMeasure',
            getTags: 'products/getTags'
        }),
        toggleModal: function (product) {
            this.showModal = !this.showModal;
            this.form = Object.assign({}, this.form, product);
        },
        updateUom(product, value) {
            let product_index = this.products.data.findIndex(i => i.id === product.id)
            if (product_index !== -1) {
                let selected_uom_index = product.unit_of_measures.findIndex(k => k.id == value)
                if (selected_uom_index !== -1) {
                    this.products.data[product_index].price = product.unit_of_measures[selected_uom_index].price
                    this.products.data[product_index].uom_id = product.unit_of_measures[selected_uom_index].id
                    this.products.data[product_index].uom_name = product.unit_of_measures[selected_uom_index].name
                    this.products.data = [...this.products.data]
                }
            }
        },
        addProduct(product){
            let cart = JSON.parse(localStorage.getItem('cart')) ?? []
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart))

            cart =  JSON.parse(localStorage.getItem('cart')) ?? []
            let cart_items = Object.values(cart.reduce((a, {id,name,image,uom_id,price,uom_name}) => {
                a[uom_id] = a[uom_id] || {uom_id, quantity: 0, name,image,id,price,uom_name};
                a[uom_id].quantity++;
                return a;
            }, Object.create(null)));

            let total = cart_items.reduce(function (s, a) {
                return s + (a.price * a.quantity);
            }, 0);
            this.$store.commit('products/setCartItems', cart_items)
            this.$store.commit('products/setTotal', total)
        },
        handleSizeChange(size) {
            this.filters.per_page = size;
            this.getProducts({...this.filters});
        },
        handleCurrentChange(page) {
            this.filters.page = page;
            this.getProducts({...this.filters});
        },
        uncheckSortBy() {
            this.filters.sort_by = ''
        },
        uncheckTags() {
            this.filters.tag = '';
        }
    },
    watch: {
        search: function (val) {
            this.getProducts({
                ...this.filters,
                search: val
            });
        },
        filters: {
            deep: true,
            handler: function () {
                this.getProducts(this.filters)
            }
        }
    },
}
</script>

<style>
.el-pager li.is-active {
    color: #bd515f !important;
    cursor: default;
}
</style>
