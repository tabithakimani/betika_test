<template>
    <!-- default header-->
    <header class="sticky top-0 z-50 w-full px-2 py-4 bg-white sm:px-4 shadow-xl mb-8 space-y-6">
        <div class="flex items-center justify-between mx-auto max-w-7xl py-3">
            <div class="inline-flex md:hidden">
                <button @click="tog()" class="flex-none px-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
                    </svg>
                    <span class="sr-only">Open Menu</span>
                </button>
            </div>
            <a href="/">
        <span class="flex text-3xl font-extrabold text-red-950 md:-ml-2"><img
            src="../assets/images/wine-glasses-toasting.jpg" class="h-10 w-12 mr-3" alt="">THE CITADEL</span>
            </a>
            <div class="flex items-center space-x-1">
                <ul class="hidden space-x-2 md:inline-flex">
                    <li><a href="#" class="flex px-4 py-2 font-semibold text-gray-600 rounded">About Us</a></li>
                    <li><a href="#" class="flex px-4 py-2 font-semibold text-gray-600 rounded">Contact Us</a></li>
                    <div class="flex justify-center">
                        <el-dropdown>
                            <el-button class="border-0">
                                <a class="px-4 py-2 font-semibold text-gray-600 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         stroke-width="1.5"
                                         stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
                                    </svg>
                                </a>
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu v-if="isLoggedIn">
                                    <el-dropdown-item>{{ user.full_name }}</el-dropdown-item>
                                    <el-dropdown-item @click.native="logoutUser">Logout</el-dropdown-item>
                                </el-dropdown-menu>
                                <el-dropdown-menu v-else>
                                    <router-link to="/account">
                                        <el-dropdown-item>My Account</el-dropdown-item>
                                    </router-link>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                </ul>

                <button @click="open_cart"
                        class="md:hidden text-primary text-md hover:text-orange transition-all relative offcanvas-toggle">
                    <span
                        class="w-5 h-5 bg-red-950 text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">{{ cart_items.length }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="flex items-center justify-center mx-auto">
            <div
                class="relative flex items-center w-3/5 h-12 rounded-lg shadow-md focus-within:shadow-lg bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </div>
                <input
                    class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                    type="text"
                    id="search"
                    v-model="search"
                    placeholder="Search a Wine.."/>
            </div>
        </div>
    </header>

    <!--  mobile header-->
    <header
        :class="nav_visible ? 'navbar-open' : 'navbar-close'"
        class="navbar w-64 h-screen fixed overflow-x-scroll bg-white top-0 z-50 md:invisible bg-slate">
        <div class="flex pr-2 justify-end">
            <button @click="tog" class="p-4 text-white text-xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="black"
                     class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>

            </button>
        </div>
        <h1 class="text-xl text-center text-black font-bold pt-5">Menu</h1>
        <ul class="list-none text-black text-center">
            <li class="my-8 text-black">
                <a href="#"></a>About Us
            </li>
            <li class="my-8 text-black">
                <a href="#"></a>Contact Us
            </li>
            <div class="flex justify-center">
                <el-dropdown>
                    <el-button class="border-0">
                        Account
                        <el-icon class="el-icon--right">
                            <arrow-down/>
                        </el-icon>
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu v-if="isLoggedIn">
                            <el-dropdown-item>{{ user.full_name }}</el-dropdown-item>
                            <el-dropdown-item @click.native="logoutUser">Logout</el-dropdown-item>
                        </el-dropdown-menu>
                        <el-dropdown-menu v-else>
                            <router-link to="/account">
                                <el-dropdown-item>My Account</el-dropdown-item>
                            </router-link>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </ul>
    </header>

</template>

<script>
import {ArrowDown} from '@element-plus/icons-vue'
import {mapActions, mapGetters} from "vuex";

export default {
    name: "NavBar",
    data() {
        return {
            cart: false,
            search: '',
            filters: {paginate: true}
        };
    },
    components: {ArrowDown},
    computed: {
        isLoggedIn() {
            return this.$store.getters['users/loggedIn'];
        },
        user() {
            return JSON.parse(localStorage.getItem('user'));
        },
        ...mapGetters({
            visible: 'visible',
            nav_visible: 'nav_visible',
            cart_items: 'products/cart_items'
        })
    },
    methods: {
        ...mapActions({
            logout: 'users/logout',
            getProducts: 'products/getProducts',
        }),
        tog() {
            this.$store.commit('setNavVisible', !this.nav_visible);
            if (this.nav_visible === true) {
                this.$store.commit('setVisible', false)
            }
        },
        open_cart() {
            this.$store.commit('setVisible', !this.visible)
            if (this.visible === true) {
                this.$store.commit('setNavVisible', false)
            }
        },
        logoutUser() {
            this.logout()
        }
    },
    watch: {
        search: function (val) {
            this.getProducts({
                ...this.filters,
                search: val
            });
        },
    },
};
</script>

<style>
.navbar {
    transition: all 330ms ease-out;
}

.cart {
    transition: all 330ms ease-out;
}

.navbar-open {
    transform: translateX(0%);
}

.navbar-close {
    transform: translateX(-100%);
}

.cart-open {
    transform: translateY(0%);
}

.cart-close {
    transform: translateY(-100%);
}

.dropdown:hover .dropdown-menu {
    display: block;
}
</style>
