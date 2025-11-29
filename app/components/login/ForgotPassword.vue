<template>
  <section
    class="bg-tertiary-gray-5 flex flex-col items-center justify-center h-[70vh] w-full "
  >
    <div class="w-full max-w-md p-[44px] bg-white rounded-lg shadow-md ">
      <h1 class="text-[32px] font-[900] text-center">Forgot Password?</h1>
      <div class="my-[24px]">
        <InputText
          v-model="form.email"
          :label="'Email Address'"
          :type="'email'"
        />
      </div>

      <MainBtn :title="'Reset Password'" :hasIcon="false" class="w-full" />
    </div>
  </section>
</template>

<script lang="ts">
import InputText from "../inputs/FloatingInput.vue";
import MainBtn from "../buttons/MainBtn.vue";

export default {
  components: { InputText , MainBtn},

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
