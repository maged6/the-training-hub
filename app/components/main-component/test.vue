<template>
  <div
    class="flex flex-col items-center justify-center rounded-[16px] w-full min-h-[40rem] bg-white p-10 shadow-sm"
  >
  <div class="flex flex-col w-full justify-start items-start px-5">
    <!-- New Label -->
    <div
      class="rounded w-fit px-1 rotate-[-5deg] mb-2 "
      :class="`${labelBackgroundColor}`"
      v-if="labelComponent"
    >
      <span class="font-[700] md:text-[14px]" :class="`text-${labelColor}`">
        {{ labelComponent }}
      </span>
    </div>

      <h1
      class="text-center font-[900] md:text-[42px] mb-[8px]"
      :class="`text-${headerColor}`"
      v-if="titleComponent"
    >
      {{ titleComponent }}
    </h1>
    </div>

    <!-- Form -->
    <form
      class="w-full max-w-xl flex flex-col gap-4"
      @submit.prevent="submitForm"
    >
      <!-- Name Row -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText v-model="form.firstName" label="First Name" type="text" />
        <InputText v-model="form.lastName" label="Last Name" type="text" />
      </div>

      <!-- Email -->
      <InputText v-model="form.email" label="Email" type="email" />

      <!-- Phone -->
      <InputText v-model="form.phone" label="Phone" type="number" />

      <!-- Government -->
      <InputText v-model="form.inquiryPurpose" label="Inquiry Purpose" type="text" />

      <!-- Course Objectives -->
      <FloatingTextarea
        v-model="form.LeaveMessage"
        label="Leave a Message"
        type="text"
        :rows="4"
      />

      <!-- Submit Button -->
      <button
        type="submit"
        class="mt-4 bg-gradient-to-r 
        from-black 
        to-gray-900 
        text-white rounded-full 
        py-3 font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition"
      >
        {{ btnComponent }}
        <ArrowRightTop :colorIcon="colorIcon" />
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import ArrowRightTop from '../svg/ArrowRightTop.vue';
import InputText from '../inputs/FloatingInput.vue';
import FloatingTextarea from '../inputs/FloatingTextarea.vue';

export default {
  components: { ArrowRightTop , InputText, FloatingTextarea},
  props: {
    labelComponent: { type: String, default: 'Let’s Talk' },
    titleComponent: { type: String, default: 'Get In Touch' },
    labelBackgroundColor: {
      type: String,
      default: 'bg-primary-20',
    },
    labelColor: { type: String, default: 'white' },
    colorIcon: { type: String, default: 'black' },
    headerColor: { type: String, default: 'black' },
    btnComponent: { type: String, default: ' Submit' },
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiryPurpose: '',
        LeaveMessage: '',
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
