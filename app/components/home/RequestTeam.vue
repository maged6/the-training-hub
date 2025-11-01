<template>
  <section>
    <div class="bg-tertiary-gray-5 py-[40px] px-[60px]">
      <div
        class="w-full h-full bg-transparent grid grid-cols-2  p-[40px] gap-[32px]"
      >
        <!-- Left Side -->
        <div
    class="flex flex-col items-center justify-center rounded-[16px] w-full min-h-[40rem] bg-white p-10 shadow-sm"
  >
    <!-- New Label -->
    <div class="flex items-center justify-center mb-2">
      <span class="bg-primary-20 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
        New
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-2xl md:text-3xl font-semibold text-center mb-8">
      Request a Tailored Course for Your Team
    </h2>

    <!-- Form -->
    <form
      class="w-full max-w-xl flex flex-col gap-4"
      @submit.prevent="submitForm"
    >
      <!-- Name Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          v-model="form.firstName"
          type="text"
          placeholder="First Name"
          class="input-field"
        />
        <input
          v-model="form.lastName"
          type="text"
          placeholder="Last Name"
          class="input-field"
        />
      </div>

      <!-- Email -->
      <input
        v-model="form.email"
        type="email"
        placeholder="Email Address"
        class="input-field"
      />

      <!-- Phone -->
      <div class="flex items-center border border-gray-300 rounded-lg px-4 py-3">
        <span class="mr-2">🇪🇬 +20</span>
        <input
          v-model="form.phone"
          type="text"
          placeholder="01001234567"
          class="flex-1 outline-none"
        />
      </div>

      <!-- Government -->
      <input
        v-model="form.government"
        type="text"
        placeholder="Government"
        class="input-field"
      />

      <!-- Company & Position -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          v-model="form.company"
          type="text"
          placeholder="Company (Optional)"
          class="input-field"
        />
        <input
          v-model="form.position"
          type="text"
          placeholder="Position (Optional)"
          class="input-field"
        />
      </div>

      <!-- Course Objectives -->
      <textarea
        v-model="form.objectives"
        rows="4"
        placeholder="Course Objectives"
        class="input-field"
      ></textarea>

      <!-- Submit Button -->
      <button
        type="submit"
        class="mt-4 bg-gradient-to-r from-black to-gray-900 text-white rounded-full py-3 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
      >
        Submit Request
        <ArrowRightTop :colorIcon="'black'"/>
      </button>
    </form>
  </div>

        <!-- Right Side -->
        <div class="w-full bg-white rounded-[16px] relative">
         <NuxtImg 
            class="absolute top-0 left-0 w-full h-full object-cover rounded-[16px]"
            :src="imageSection"
         />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import IntroSection from '../main/IntroLeftSection.vue';
import ChevronDown from '../svg/ChevronDownRed.vue';
import ChevronRight from '../svg/ChevronRight.vue';
import ArrowRightTop from '../svg/ArrowRightTop.vue';

export default {
  components: { IntroSection, ChevronDown, ChevronRight, ArrowRightTop },
  props: {
    labelSection: { type: String, default: 'Have A Question?' },
    titleSection: { type: String, default: 'Frequently asked questions' },
    imageSection: { type: String, default: 'images/request-team.png' },
    faqsQuestion: {
        type: Array as PropType<{ question: string; answer: string }[]>,
        default: () => [],
    },
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        government: '',
        company: '',
        position: '',
        objectives: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Handle form submission here
      console.log(this.form);
    },
  },

};
</script>

<style scoped>
.input-field {
 border: 1px solid #CFD1D2;
 border-radius: 10px;
 padding: 0.8rem 1rem;
 width: 100%;
}
.input-field:focus {
  outline: none;
  border-color: black;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>