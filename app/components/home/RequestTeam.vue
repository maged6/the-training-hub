<template>
  <section>
    <div class="bg-tertiary-gray-5 py-[40px] px-[60px]">
      <div
        class="w-full h-full bg-transparent grid grid-cols-2  p-[40px] gap-[32px]"
      >
        <!-- Left Side -->
        <MainForm />
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


export default {
  components: { MainForm},
  props: {
    labelSection: { type: String, default: 'Have A Question?' },
    titleSection: { type: String, default: 'Frequently asked questions' },
    imageSection: { type: String, default: 'images/request-team.png' },
  },
};
</script>