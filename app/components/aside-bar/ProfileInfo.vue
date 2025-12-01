<template>
    <section>
        <div class="flex flex-col w-[70vw]">
        <div class="pb-[16px]">
            <BreadcrumbComponent 
            :breadcrumbArray="breadcrumbArray" 
            :fontSize="12" 
            :textColor="'gray-600'"/>
            </div>
        <div class="flex justify-between">
            <h1 class="font-[900] text-[32px] text-primary-10">Profile Info</h1>
        </div>
        <div class="pt-[32px]">
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

            </template>

            <!-- Submit -->
            <button
                type="submit"
                class="mt-4 bg-primary-20 text-white rounded-full 
                py-3 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
               Save Changes
            </button>
            </form>
        </div>
        </div>
    </section>
</template>


<script lang="ts">

import { defineComponent, type PropType } from 'vue'
import BreadcrumbComponent from "../breadcrumb/Breadcrumb.vue";
import MainForm from "../main-component/MainForm.vue";
import type { FormSection } from "~/types/form-section";
import InputText from "../inputs/FloatingInput.vue";
import FloatingTextarea from "../inputs/FloatingTextarea.vue";

export default defineComponent({
  components: {
    BreadcrumbComponent,
    MainForm,
    InputText,
    FloatingTextarea    
  },

  data() {
    return {
        form: {} as Record<string, string>,
        breadcrumbArray: [
                { name: 'Home', to: '/' },
                { name: 'Profile Info', to: '/my-account/profile-info' }
            ],
                 formData: [
        {
          type: "row",
          fields: [
            { model: "firstName", label: "First Name", type: "text" },
            { model: "lastName", label: "Last Name", type: "text" },
          ],
        },
        { type: "full", model: "email", label: "Email", typeInput: "email" },
        { type: "full", model: "phone", label: "Phone", typeInput: "number" },
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

    }
  },
   methods: {
    submitForm() {
      console.log("FORM DATA:", this.form);
      this.$emit("submit", this.form);
    },
  },
})
</script>
