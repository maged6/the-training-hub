<template>
  <section class="bg-tertiary-gray-5 px-[60px] py-[40px]">
    <div class="flex justify-center">
      <div class="flex w-full max-w-[1400px] gap-[32px]">
        <!-- LEFT SIDE LOGIN BOX -->
        <div
          class="bg-white shadow-[0_0_20px_rgba(0,0,0,0.06)] border border-gray-200
                rounded-[12px] w-full max-w-[600px] p-[44px] flex flex-col justify-center"
        >
          <h1 class="text-center text-[28px] font-[900] text-primary-10 mb-[24px]">Create Account</h1>

     
    <!-- Form -->
    <form class="w-full flex flex-col gap-4 max-w-xl" @submit.prevent="submitForm">

      <!-- LOOP SECTIONS -->
      <template v-for="(section, index) in formData" :key="index">

        <!-- ROW (two items) -->
        <div
          v-if="section.type === 'row'"
          class="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <InputText
            v-for="field in section.fields"
            :key="field.model"
            v-model="form[field.model]"
            :label="field.label"
            :type="field.type"
          />
        </div>

        <!-- FULL WIDTH TEXT INPUT -->
        <div v-if="section.type === 'full'">
          <InputText
            v-model="form[section.model]"
            :label="section.label"
            :type="section.typeInput"
          />
        </div>

        <!-- TEXTAREA -->
        <div v-if="section.type === 'textarea'">
          <FloatingTextarea
            v-model="form[section.model]"
            :label="section.label"
            :rows="section.rows || 4"
          />
        </div>

      </template>

        <MainBtn :title="'Create Account'" :hasIcon="false" class="w-full mt-[37px]"/>
    </form>

        <!-- Create account -->
          <div class="text-center mt-6 text-sm">
            Already have an account? 
            <NuxtLink to="/my-account/login" class="text-primary-20 underline hover:no-underline"
              >Sign in</NuxtLink>
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
import MainBtn from "../buttons/MainBtn.vue";
import MainForm from "../main-component/MainForm.vue";
import InputText from "../inputs/FloatingInput.vue";
import type { FormSection } from "~/types/form-section";

export default {
  components: {  MainBtn , MainForm, InputText},

  data() {
    return {
      form: {} as Record<string, string>,
       formData: [
        {
          type: "row",
          fields: [
            { model: "firstName", label: "First Name", type: "text" },
            { model: "lastName", label: "Last Name", type: "text" },
          ],
        },
        { type: "full", model: "email", label: "Email Address", typeInput: "email" },
        { type: "full", model: "phone", label: "Phone Number", typeInput: "number" },
        {
          type: "full",
          label : "Password",
          model: "password",
          typeInput: "password",
        },
        {
          type: "full",
          label : "Confirm Password",
          model: "confirmPassword",
          typeInput: "password",
        },
        {
          type: "full",
          model: "government",
          label: "Government",
          typeInput: "text",
        },
        {
          type: "row",
          fields: [
            { model: "company", label: "Company Optional", type: "text" },
            { model: "position", label: "Position Optional", type: "text" },
          ],
        },
      ] as FormSection[],
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
