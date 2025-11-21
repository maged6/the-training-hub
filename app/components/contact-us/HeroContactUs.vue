<template>
      <section class="bg-primary-20">
    <div class="grid grid-cols-4 gap-[22px] p-[60px]">
      
      <!-- Left section -->
      <div class="col-span-2 flex items-center justify-center md:justify-start">
       
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
import TwoImgWithDotAndCircle from '../main-component/TwoImgWithDotAndCircle.vue';

export default {
  components: { TwoImgWithDotAndCircle},
  props: {
    imageSection: {
      type: String,
      default: 'images/layout-hero.jpg',
    },
  }
};
</script>