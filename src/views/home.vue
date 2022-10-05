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

          <div class="flex-row space-x-2 space-y-2">
            <ul class="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
              <li class="relative">
                <input class="sr-only peer" type="radio" value="price" v-model="filters.sort_by" id="answer_price">
                <label
                    class="flex items-center justify-center hover:bg-red-950 hover:text-white p-2 bg-white border border-gray-300 rounded-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-950 peer-checked:ring-2 peer-checked:border-transparent"
                    for="answer_price">Price</label>

                <div class="absolute hidden w-5 h-5 peer-checked:block top-3 right-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                  </svg>
                </div>
              </li>

              <li class="relative">
                <input class="sr-only peer" type="radio" value="quality" v-model="filters.sort_by" id="answer_vintage">
                <label
                    class="flex items-center justify-center hover:bg-red-950 hover:text-white p-2 bg-white border border-gray-300 rounded-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-950 peer-checked:ring-2 peer-checked:border-transparent"
                    for="answer_vintage">Vintage</label>

                <div class="absolute hidden w-5 h-5 peer-checked:block top-3 right-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                       stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                  </svg>
                </div>
              </li>
              <button v-if="filters.sort_by" @click="uncheckSortBy"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
                                               class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg></button>
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
            <ul class="grid grid-cols-3 gap-x-5 m-10 max-w-md mx-auto">
              <div v-for="(tag,index) in tags" :key="index">

                <li class="relative">
                  <input class="sr-only peer" type="radio" v-bind:value="tag" v-model="filters.tag" :id="index">
                  <label v-bind:for="index"
                          class="flex items-center justify-center hover:bg-red-950 hover:text-white p-2 bg-white border border-gray-300 rounded-full cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-red-950 peer-checked:ring-2 peer-checked:border-transparent">
                   {{ tag }}
                  </label>

                  <div class="absolute hidden w-5 h-5 peer-checked:block top-3 right-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                </li>
              </div>
              <button v-if="filters.tag" @click="uncheckTags"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
                                                                   class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg></button>
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
                      <el-select v-model="product.uom" :value="product.id" @change="updateUom" class="m-2" placeholder="Select" size="small" style="width: 60%">
                        <el-option
                            label="Case"
                            value="case"
                        />
                        <el-option
                            label="Bottle"
                            value="bottle"
                        />
                      </el-select>
                    </div>
                    <div class="flex justify-center items-end w-full h-[16%]">
                      <button
                          class="relative inline-flex items-center justify-center overflow-hidden w-2/5 p-2 h-full font-medium bg-transparent text-red-950 border border-red-950 rounded-full">
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
      price:'',
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
      uoms: 'uoms/uoms'
    }),
    tags() {
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
      getUnitOfMeasure: 'uoms/getUnitOfMeasure'
    }),
    updateUom(e){
      console.log(e)
      this.getUnitOfMeasure({
        product_id:e
      })
      console.log(this.uoms)
    },
    handleSizeChange(size) {
      this.filters.per_page = size;
      this.getProducts({...this.filters});
    },
    handleCurrentChange(page) {
      this.filters.page = page;
      this.getProducts({...this.filters});
    },
    uncheckSortBy(){
      this.filters.sort_by = ''
    },
    uncheckTags(){
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