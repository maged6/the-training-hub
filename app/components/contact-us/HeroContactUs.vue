<template>
  <section class="bg-primary-20">
    <div class="grid grid-cols-4 gap-[22px] p-[60px]">
      <!-- Left section -->
      <div class="col-span-2 flex items-center justify-center md:justify-start">
        <MainForm 
        :sections="formData"
        :labelComponent="'Let’s Talk'"
        :titleComponent="'Get In Touch'"
        :labelBackgroundColor="'secondary-10'"
        :labelColor="'primary-10'"
        :colorIcon="'black'"
        :btnComponent="'Submit'"
        />
      </div>

   


      <!-- Right section -->
      <TwoImgWithDotAndCircle
        :imageSectionOne="imageSection"
        :imageSectionTwo="imageSection"
      />
    </div>
  </section>
</template>

<script lang="ts">
import TwoImgWithDotAndCircle from "../main-component/TwoImgWithDotAndCircle.vue";
import MainForm from "../main-component/MainForm.vue";
import type { FormSection } from "~/types/form-section";

export default {
  components: { TwoImgWithDotAndCircle, MainForm },
  props: {
    imageSection: {
      type: String,
      default: "images/layout-hero.jpg",
    },
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
          model: "inquiryPurpose",
          label: "Inquiry Purpose",
          typeInput: "text",
        },
        {
          type: "textarea",
          model: "LeaveMessage",
          label: "Leave a Message",
          rows: 4,
        },
      ] as FormSection[],
    };
  },
};
</script>
