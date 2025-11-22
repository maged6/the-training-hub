<template>
  <section>
    <div class="bg-tertiary-gray-5 py-[40px] px-[60px]">
      <div
        class="w-full h-full bg-transparent grid grid-cols-2  p-[40px] gap-[32px]"
      >
        <!-- Left Side -->
        <MainForm 
            :sections="formData"
            :labelComponent="'New'"
            :titleComponent="'Request a Tailored Course for Your Team'"
            :labelBackgroundColor="'primary-20'"
            :labelColor="'white'"
            :colorIcon="'black'"
            :btnComponent="'Submit'"
            />
        <!-- Right Side -->
        <div class="w-full bg-white rounded-[16px] relative">
         <NuxtImg 
            class="absolute top-0 left-0 w-full h-full object-cover rounded-[16px]"
            :src="imageSection"
            alt="the training hub team image"
            width="100%"
            height="100%"
            format="webp"
            quality="80"
            loading="lazy"
         />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import MainForm from '../main-component/MainForm.vue';
import type { FormSection } from "~/types/form-section";


export default {
  components: { MainForm},
  props: {
    labelSection: { type: String, default: 'Have A Question?' },
    titleSection: { type: String, default: 'Frequently asked questions' },
    imageSection: { type: String, default: 'images/request-team.png' },
  },
   data() {
    return {
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
          model: "Government",
          label: "government",
          typeInput: "text",
        },
           {
          type: "row",
          fields: [
            { model: "company", label: "Company Optional", type: "text" },
            { model: "position", label: "Position Optional", type: "text" },
          ],
        },
        {
          type: "textarea",
          model: "courseObjectives",
          label: "Course Objectives",
          rows: 4,
        },
      ] as FormSection[],
    };
  },
};
</script>