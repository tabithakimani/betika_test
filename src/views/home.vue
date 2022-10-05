<template>
  <div>
    <section class="space-y-10 z-10">
      <div
          class="hero-section bg-faint bg-[url('../assets/images/home1.jpg')] h-screen/4 bg-center bg-cover text-white lg:md:20 md:mx-14 mx-6 flex justify-center items-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl leading-relaxed text-white font-bold z-40">
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
          {{tags}}
          <div class="flex-row space-x-2 space-y-2">
            <ul v-for="tag in tags" class="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
              <li class="relative">
                <input class="sr-only peer" type="radio" v-model="filters.tag" :name="tag" id="answer_yes">
                <label class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent" for="answer_yes">Yes</label>

                <div class="absolute hidden w-5 h-5 peer-checked:block top-5 right-3">
                  👍
                </div>
              </li>
            </ul>
<!--            <button -->
<!--               class="relative inline-flex items-center justify-center p-4 px-6 py-2 md:w-40 w-28 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group">-->
<!--            <span-->
<!--                class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"-->
<!--                   stroke="currentColor" class="w-6 h-6">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>-->
<!--              </svg>-->

<!--            </span>-->
<!--              <span-->
<!--                  class="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">Price</span>-->
<!--              <span class="relative invisible">Price</span>-->
<!--            </button>-->

<!--            <button-->
<!--               class="relative inline-flex items-center justify-center p-4 px-6 py-2 md:w-40 w-28  overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group">-->
<!--            <span-->
<!--                class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">-->
<!--              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"-->
<!--                   stroke="currentColor" class="w-6 h-6">-->
<!--                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>-->
<!--              </svg>-->

<!--            </span>-->
<!--              <span-->
<!--                  class="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">Vintage</span>-->
<!--              <span class="relative invisible">Vintage</span>-->
<!--            </button>-->
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          <div class="flex items-center justify-between mt-4">
            <p class="font-bold">
              Popular Wine Tags
            </p>
          </div>
          <div class="flex-row space-x-2 space-y-2">
            <a href="#_"
               class="relative inline-flex items-center justify-center p-4 px-6 py-2 md:w-40 w-28 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group">
            <span
                class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>

            </span>
              <span
                  class="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">Red</span>
              <span class="relative invisible">Red</span>
            </a>

            <a href="#_"
               class="relative inline-flex items-center justify-center p-4 px-6 py-2 md:w-40 w-28 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group">
            <span
                class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>

            </span>
              <span
                  class="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">White</span>
              <span class="relative invisible">White</span>
            </a>

            <a href="#_"
               class="relative inline-flex items-center justify-center p-4 px-6 py-2 md:w-40 w-28 overflow-hidden font-medium text-gray-500 transition duration-300 ease-out border-2 border-gray-500 rounded-full shadow-md group">
            <span
                class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-gray-500 group-hover:translate-x-0 ease">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                   stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
              </svg>

            </span>
              <span
                  class="absolute flex items-center justify-center w-full h-full text-gray-500 transition-all duration-300 transform group-hover:translate-x-full ease">Sparkling</span>
              <span class="relative invisible">Sparkling</span>
            </a>
          </div>
        </div>
      </div>
      <!--      filters-->

      <!--      product and cart cards-->
      <div class="flex justify-between lg:md:20 md:mx-14 mx-6 md:space-x-8 space-x-0">

        <div class="rounded overflow-hidden md:w-3/5 w-full space-y-6">

          <div class="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7 m-2">
            <!--            product card-->
            <div v-for="product in products.data.data" :key="product.id">
              <div class="card hover:shadow-2xl border border-current rounded-lg p-4 h-full">
                <div class="flex h-full">
                  <img :src="product.image" alt="Product"
                       class="object-contain h-80 xl:h-96 md:h-96 lg:h-96 sm:h-80 w-2/5 p-2">
                  <div class="w-3/5 flex flex-col h-full items-center space-y-6">
                    <div class="flex justify-center items-center m-4 text-black h-[33%]">
                      <span class="font-bold">{{ product.name }}</span>
                    </div>
                    <div class="flex flex-col items-center justify-center w-full h-[16%]">
                      UOM
                      <el-select v-model="form.uom" class="m-2" placeholder="Select" size="small" style="width: 60%">
                        <el-option
                            v-for="item in product.unit_of_measures"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id"
                        />
                      </el-select>
                    </div>
                    <div class="flex justify-center items-end w-full h-[16%]">
                      <button
                          class="relative inline-flex items-center justify-center overflow-hidden w-2/5 p-2 h-full font-medium bg-transparent text-red-950 border border-red-950 rounded-full">
                        {{}}
                      </button>
                    </div>
                    <div class="flex justify-center items-end w-full mx-2 h-[33%]">
                      <a href="#"
                         class="flex justify-center items-center bg-gray-500 py-1 px-1 w-1/2 h-10 text-xs text-white">Details</a>
                      <a href="#"
                         class="flex justify-center items-center bg-red-950 py-1 px-1 w-1/2 h-10 text-xs text-white">Add
                        to Cart</a>
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

    </section>
    <div class="flex justify-center items-center py-8 bg-gray-500">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-4">
          <div class="flex order-last md:order-first flex-wrap items-center text-white justify-center md:justify-start">
            Copyright © 2022, Tabitha. All right reserved
          </div>

          <div class="flex flex-wrap items-center justify-center md:justify-end">
            <div
                class="flex  sm:mt-0 mt-2 sm:justify-start scale-110 justify-between space-x-6 text-black px-2 md:px-10 ">
              <a target="_blank" class="bg-card rounded-full p-1" href="">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a target="_blank" class="bg-card rounded-full p-1" href="">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round"
                     stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                  </path>
                </svg>
              </a>
              <a target="_blank" class="bg-card rounded-full p-1" href="">
                <svg fill="none" stroke="currentColor" stroke-linecap="round"
                     stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a target="_blank" class="bg-card rounded-full p-1" href="">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="Capa_1" x="0px" y="0px"
                     viewBox="0 0 24 24"
                     style="enable-background:new 0 0 24 24;" xml:space="preserve" width="20" height="20">
                        <g>
                            <path id="Path_2525"
                                  d="M23.002,21.584h0.227l-0.435-0.658l0,0c0.266,0,0.407-0.169,0.409-0.376c0-0.008,0-0.017-0.001-0.025   c0-0.282-0.17-0.417-0.519-0.417h-0.564v1.476h0.212v-0.643h0.261L23.002,21.584z M22.577,20.774h-0.246v-0.499h0.312   c0.161,0,0.345,0.026,0.345,0.237c0,0.242-0.186,0.262-0.412,0.262"/>
                          <path id="Path_2520"
                                d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463"/>
                          <path id="Path_2526"
                                d="M22.603,19.451c-0.764,0.007-1.378,0.633-1.37,1.397c0.007,0.764,0.633,1.378,1.397,1.37   c0.764-0.007,1.378-0.633,1.37-1.397c-0.007-0.754-0.617-1.363-1.37-1.37H22.603 M22.635,22.059   c-0.67,0.011-1.254-0.522-1.265-1.192c-0.011-0.67,0.523-1.222,1.193-1.233c0.67-0.011,1.222,0.523,1.233,1.193   c0,0.007,0,0.013,0,0.02C23.81,21.502,23.29,22.045,22.635,22.059h-0.031"/>
                        </g>
                    </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Cart from '../components/cart'
import {ElButton, ElSelect, ElPagination} from 'element-plus'
import {mapActions, mapGetters} from 'vuex';

export default {
  components: {
    Cart,
    ElButton,
    ElSelect,
    ElPagination,
  },
  data() {
    return {
      filters: {
        paginate: true
      },
      form:{}
    }
  },
  mounted() {
    this.getProducts(this.filters)
    this.getUnitOfMeasure({})
  },
  computed: {
    ...mapGetters({
      products: 'products/products',
      product: 'products/product',
      uoms:'uoms/uoms'
    }),
    tags(){
      var products = this.products.data.data
      return products?.map(function (item) {
        return item.class;
      }).filter(
          (item, index, arr) => {
            return arr.indexOf(item) === index
          }
      );
    }
  },
  methods: {
    ...mapActions({
      getProducts: 'products/getProducts',
      getProduct: 'products/getProduct',
      getUnitOfMeasure:'uoms/getUnitOfMeasure'
    }),
    handleSizeChange(size) {
      this.filters.per_page = size;
      this.getProducts({...this.filters});
    },
    handleCurrentChange(page) {
      this.filters.page = page;
      this.getProducts({...this.filters});
    }
  }
}
</script>
<style>
.el-pager li.is-active {
  color: #bd515f !important;
  cursor: default;
}
</style>