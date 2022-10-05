<template>

  <!-- ====== Forms Section Start -->
  <div class="flex mx-10">
    <div class="w-full px-4">
      <div
          class="
               max-w-[525px]
               mx-auto
               text-center
               bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               ">
        <div class="mb-10 md:mb-16 text-center">
          Login
        </div>
        <form>
          <div class="mb-6">
            <input
                type="text"
                placeholder="Phone Number"
                v-model="login_form.phone_number"
                class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
            />
            <span class="text-red-650" v-if="errors.data.errors.phone_number && this.has_errors">
                    {{ errors.data.errors.phone_number[0] }}
                  </span>
          </div>
          <div class="mb-6">
            <input
                type="password"
                placeholder="Password"
                v-model="login_form.password"
                class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
            />
            <span class="text-red-650" v-if="errors.data.errors.password && this.has_errors">
                    {{ errors.data.errors.password[0] }}
                  </span>
          </div>
          <div class="mb-10">
            <input
                type="submit"
                @click="loginUser"
                value="Sign In"
                class="
                        w-full
                        rounded-md
                        border
                        border-red-950
                        py-3
                        px-5
                        bg-transparent
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        hover:bg-red-950
                        hover:text-white
                        text-black
                        transition
                        "
            />
          </div>
        </form>
      </div>
    </div>
    <div class="w-full px-4">
      <div
          class="
               max-w-[525px]
               mx-auto
               text-center
               bg-white
               rounded-lg
               relative
               overflow-hidden
               py-16
               px-10
               sm:px-12
               md:px-[60px]
               ">
        <div class="mb-10 md:mb-16 text-center">
          Register
        </div>
        <form>
          <div class="mb-6">
            <input
                type="text"
                placeholder="Full Name"
                v-model="form.full_name"
                class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
            />
            <span class="text-red-650" v-if="errors.data.errors.full_name && this.has_errors">
                    {{ errors.data.errors.full_name[0] }}
                  </span>
          </div>
          <div class="mb-6">
            <input
                type="text"
                placeholder="Phone Number"
                v-model="form.phone_number"
                class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
            />
            <span class="text-red-650" v-if="errors.data.errors.phone_number && this.has_errors">
                    {{ errors.data.errors.phone_number[0] }}
                  </span>
          </div>
          <div class="mb-6">
            <input
                type="password"
                v-model="form.password"
                placeholder="Password"
                class="
                        w-full
                        rounded-md
                        border
                        bordder-[#E9EDF4]
                        py-3
                        px-5
                        bg-[#FCFDFE]
                        text-base text-body-color
                        placeholder-[#ACB6BE]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
            />
            <span class="text-red-650" v-if="errors.data.errors.password && this.has_errors">
                    {{ errors.data.errors.password[0] }}
                  </span>
          </div>
          <div class="mb-10">
            <input
                type="submit"
                value="Sign Up"
                @click="registerUser"
                class="
                        w-full
                        rounded-md
                        border
                        border-red-950
                        py-3
                        px-5
                        bg-transparent
                        text-base text-white
                        cursor-pointer
                        hover:bg-opacity-90
                        hover:bg-red-950
                        hover:text-white
                        text-black
                        transition
                        "
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- ====== Forms Section End -->
</template>
<script>
import {mapGetters,mapActions} from "vuex";

export default {
  name: 'Account',
  data() {
    return {
      form:{},
      login_form:{}
    }
  },
  computed:{
    ...mapGetters({
      errors: 'users/errors',
      has_errors: 'users/has_errors',
    })
  },
  methods: {
    ...mapActions({
      login: 'users/login',
      register:'users/register'
    }),
    loginUser() {
      this.login(this.login_form)
    },
    registerUser(){
      this.register(this.form)
    }
  }
}
</script>