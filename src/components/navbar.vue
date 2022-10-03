<template>
  <header class="sticky top-0 z-30 w-full px-2 py-4 bg-white sm:px-4 shadow-xl mb-8">
    <div class="flex items-center justify-between mx-auto max-w-7xl py-3">
      <a href="#">
        <span class="flex text-3xl font-extrabold text-red-950 md:-ml-2"><img src="../assets/images/wine-glasses-toasting.jpg" class="h-10 w-12 mr-3" alt="">THE CITADEL</span>
      </a>
      <div class="flex items-center space-x-1">
        <ul class="hidden space-x-2 md:inline-flex">
          <li><a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">About Us</a></li>
          <li><a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded">Contact Us</a></li>
          <li></li>
        </ul>
        <a href="#" class="px-4 py-2 font-semibold text-gray-600 rounded"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg></a>
        <div class="inline-flex md:hidden">
          <button class="flex-none px-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
            </svg>
            <span class="sr-only">Open Menu</span>
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center mx-auto">
      <div class="relative flex items-center w-3/5 h-12 rounded-lg shadow-md focus-within:shadow-lg bg-white overflow-hidden">
        <div class="grid place-items-center h-full w-12 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search a Wine.." />
      </div>
    </div>
  </header>
</template>