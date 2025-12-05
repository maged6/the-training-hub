<template>
  <div
    class="flex flex-col items-center justify-center rounded-[16px] w-full min-h-[40rem] bg-white md:p-10 p-[24px] shadow-sm"
  >
    <div class="flex flex-col w-full justify-start  px-5" :class="itemCenter ? 'items-start' : 'items-center' ">

      <!-- Label -->
      <div
        class="rounded w-fit px-1 rotate-[-5deg] mb-2"
        :class="`bg-${labelBackgroundColor}`"
        v-if="labelComponent"
      >
        <span class="font-[700] md:text-[14px]" :class="`text-${labelColor}`">
          {{ labelComponent }}
        </span>
      </div>

      <!-- Title -->
      <h1
        class="text-center font-[900] md:text-[32px] text-[20px] mb-[8px] text-primary-10"
        v-if="titleComponent"
      >
        {{ titleComponent }}
      </h1>
    </div>

    <!-- Form -->
    <form class="w-full flex flex-col gap-4 max-w-xl" @submit.prevent="submitForm">

      <!-- LOOP SECTIONS -->
      <template v-for="(section, index) in sections" :key="index">

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

      <!-- Submit -->
      <button
        type="submit"
        class="mt-4 bg-gradient-to-r 
        from-black to-gray-900 text-white rounded-full 
        py-3 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
      >
        {{ btnComponent }}
        <ArrowRightTop :colorIcon="colorIcon" />
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import ArrowRightTop from "../svg/ArrowRightTop.vue";
import InputText from "../inputs/FloatingInput.vue";
import FloatingTextarea from "../inputs/FloatingTextarea.vue";
import type { PropType } from "vue";
import type { FormSection } from "~/types/form-section";

export default {
  components: { ArrowRightTop, InputText, FloatingTextarea },

  props: {
    sections: {
      type: Array as PropType<readonly FormSection[]>,
      required: true
    },
    labelComponent: String,
    titleComponent: String,
    itemCenter: { type: Boolean, default: false },
    labelBackgroundColor: { type: String, default: "bg-primary-20" },
    labelColor: { type: String, default: "white" },
    colorIcon: { type: String, default: "black" },
    btnComponent: { type: String, default: "Submit" },
  },

  data() {
    return {
      form: {} as Record<string, string>,
    };
  },

  created() {
    this.sections.forEach((section) => {
      if (section.type === "row") {
        section.fields.forEach((f) => (this.form[f.model] = ""));
      } else {
        this.form[section.model] = "";
      }
    });
  },

  methods: {
    submitForm() {
      console.log("FORM DATA:", this.form);
      this.$emit("submit", this.form);
    },
  },
};
</script>

