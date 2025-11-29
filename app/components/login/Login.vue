<template>
  <section class="bg-tertiary-gray-5 px-[60px] py-[40px]">
    <div class="flex justify-center">
      <div class="flex w-full max-w-[1400px] gap-[32px]">
        <!-- LEFT SIDE LOGIN BOX -->
        <div
          class="bg-white shadow-[0_0_20px_rgba(0,0,0,0.06)] border border-gray-200
                rounded-[12px] w-full max-w-[600px] p-[44px] flex flex-col justify-center"
        >
          <h1 class="text-center text-[28px] font-[900] text-primary-10 mb-[24px]">Login</h1>

          <!-- Email -->
          <div class="mb-[8px]">
            <InputText v-model="form.email" :label="'Email'" :type="'email'" />
          </div>

          <!-- Password -->
          <div class="mb-[24px]">
            <InputText
              v-model="form.password"
              :label="'Password'"
              :type="'password'"
            />
          </div>

          <!-- Remember + Forgot -->
          <div
            class="flex justify-between items-center mb-[24px] text-secondary-40 text-[14px] font-[100]"
          >
            <label class="flex items-center gap-2">
              <input
                class="accent-primary-20 w-[22px] h-[22px]"
                type="checkbox"
                checked
              />
              <label for="checkbox">Remember Me</label>
            </label>

            <NuxtLink to="/my-account/forgot-password">
              Forgot Password</NuxtLink
            >
          </div>

          <!-- Login Button -->
            <MainBtn :title="'Login'" :hasIcon="false" />

          <!-- OR separator -->
          <div class="text-center my-[24px] text-secondary-40">Or</div>

          <!-- Google button -->
           <div class="flex items-center justify-center">
            <GoogleBtn :title="'Sign in with Google'"/>
            </div>

          <!-- Create account -->
          <div class="text-center mt-6 text-sm">
            Don’t have an account?
            <NuxtLink to="/my-account/create-account" class="text-primary-20 underline hover:no-underline"
              >Create Account</NuxtLink>
          </div>
        </div>

        <!-- RIGHT SIDE IMAGE -->
        <div class="max-w-[788px] max-h-[861px] w-full">
          <NuxtImg
            class="rounded-[12px] object-cover w-full h-full"
            src="/images/login.png"
            alt="The Training Hub Login Form"
            width="800"
            height="900"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import InputText from "../inputs/FloatingInput.vue";
import MainBtn from "../buttons/MainBtn.vue";
import GoogleBtn from "../buttons/GoogleBtn.vue";

export default {
  components: { InputText , MainBtn, GoogleBtn},

  data() {
    return {
      form: {} as Record<string, string>,
    };
  },

  methods: {
    submitForm() {
      console.log("FORM DATA:", this.form);
      this.$emit("submit", this.form);
    },
  },
};
</script>
