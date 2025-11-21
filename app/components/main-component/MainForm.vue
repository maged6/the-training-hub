<template>
  <div
    class="flex flex-col items-center justify-center rounded-[16px] w-full min-h-[40rem] bg-white p-10 shadow-sm"
  >
    <!-- New Label -->
    <div class="flex items-center justify-center mb-2">
      <span
        class="bg-primary-20 text-white text-[14px] font-[900] px-2 py-0.5 rounded-full"
      >
        {{ labelComponent }}
      </span>
    </div>

    <!-- Title -->
    <h2 class="text-2xl md:text-3xl font-semibold text-center mb-8">
      {{ titleComponent }}
    </h2>

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
      <InputText v-model="form.government" label="Government" type="text" />

      <!-- Company & Position -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputText
          v-model="form.company"
          label="Company (Optional)"
          type="text"
        />
        <InputText
          v-model="form.position"
          label="Position (Optional)"
          type="text"
        />
      </div>

      <!-- Course Objectives -->
      <FloatingTextarea
        v-model="form.objectives"
        label="Course Objectives"
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
    labelComponent: { type: String, default: 'New' },
    titleComponent: { type: String, default: 'Request a Tailored Course for Your Team' },
    colorIcon: { type: String, default: 'black' },
    btnComponent: { type: String, default: ' Submit Request' },
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
