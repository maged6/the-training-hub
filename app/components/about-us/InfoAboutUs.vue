<template>
  <section class="bg-primary-20">
    <div class="grid grid-cols-4 gap-[22px] p-[60px]">
      <!-- Left section -->
      <div class="col-span-2 flex items-center justify-center md:justify-start">
        <IntroSection
          :labelSection="labelSection"
          :titleSection="titleSection"
          :subtitleSection="subtitleSection"
          :hasBtn="false"
          :backgroundLable="'bg-secondary-10'"
        />
      </div>

      <!-- Right section -->
      <TwoImgWithDotAndCircle
        :imageSectionOne="firstImage"
        :imageSectionTwo="secondImage"
      />
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroLeftSection.vue';
import TwoImgWithDotAndCircle from '../main-component/TwoImgWithDotAndCircle.vue';

export default {
  components: { IntroSection, TwoImgWithDotAndCircle},
  props: {
    labelSection: {
      type: String,
      default: 'About Us',
    },
    titleSection: {
      type: String,
      default: 'Empowering Skills for Tomorrow',
    },
    subtitleSection: {
      type: String,
      default: 'Our training, led by experienced mentors, emphasizes practical knowledge over theory, making our slogan “Sharing knowledge” truly relatable. This approach adds significant value to employees skills, enhancing their success and productivity.',
    },
    firstImage: {
      type: String,
      default: '',
    },
    secondImage: {
      type: String,
      default: '',
    },
  }
};
</script>
