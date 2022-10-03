<template>
  <div>
    <nav-bar/>
    <section>
      <div class="hero-section bg-faint bg-[url('../assets/images/home1.jpg')] h-screen/4 bg-center bg-cover text-white md:mx-20 mx-6 flex justify-center items-center">
        <h1 class="text-3xl sm:text-4xl md:text-5xl leading-relaxed text-white font-bold z-40">
          Great Minds Drink Alike
        </h1>
      </div>

      <div class="mx-16 shadow p-5 rounded-lg bg-white">
        <div class="flex items-center justify-between mt-4">
          <p class="font-medium">
            Filters
          </p>

          <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Reset Filter
          </button>
        </div>

        <div>
          <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">All Type</option>
              <option value="for-rent">For Rent</option>
              <option value="for-sale">For Sale</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Furnish Type</option>
              <option value="fully-furnished">Fully Furnished</option>
              <option value="partially-furnished">Partially Furnished</option>
              <option value="not-furnished">Not Furnished</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Any Price</option>
              <option value="1000">RM 1000</option>
              <option value="2000">RM 2000</option>
              <option value="3000">RM 3000</option>
              <option value="4000">RM 4000</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Floor Area</option>
              <option value="200">200 sq.ft</option>
              <option value="400">400 sq.ft</option>
              <option value="600">600 sq.ft</option>
              <option value="800 sq.ft">800</option>
              <option value="1000 sq.ft">1000</option>
              <option value="1200 sq.ft">1200</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Bedrooms</option>
              <option value="1">1 bedroom</option>
              <option value="2">2 bedrooms</option>
              <option value="3">3 bedrooms</option>
              <option value="4">4 bedrooms</option>
              <option value="5">5 bedrooms</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Bathrooms</option>
              <option value="1">1 bathroom</option>
              <option value="2">2 bathrooms</option>
              <option value="3">3 bathrooms</option>
              <option value="4">4 bathrooms</option>
              <option value="5">5 bathrooms</option>
            </select>

            <select class="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
              <option value="">Bathrooms</option>
              <option value="1">1 space</option>
              <option value="2">2 space</option>
              <option value="3">3 space</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between md:mx-20 mx-6 md:mt-10 mt-4 space-x-6">
        <div class="rounded overflow-hidden shadow-lg md:w-3/5 w-full bg-red-950">
          <div class="flex-col">

          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg md:w-2/5 w-0 bg-red-500 invisible md:visible">
          <div class="flex-col">

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/navbar'

export default {
  components: {
    NavBar
  }
}
</script>