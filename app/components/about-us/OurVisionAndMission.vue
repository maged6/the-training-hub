<template>
  <section class="bg-primary-10 md:p-[60px] px-[16px] py-[60px]">
    <!-- Left section -->
    <div class="flex items-center justify-center md:justify-start">
      <IntroSection
        :labelSection="labelSection"
        :subtitleSection="subtitleSection"
        :hasBtn="false"
        :backgroundLable="'bg-secondary-10'"
      />
    </div>

    <div class="w-full h-[391px] md:py-[40px] py-[32px]">
      <NuxtImg
        class="rounded-2xl object-cover w-full h-full"
        :src="imageSection"
        alt="Our Vision and Mission"
        width="600"
        height="150"
        format="webp"
        loading="lazy"
      />
    </div>

    <div class="flex items-center justify-end md:justify-end">
      <IntroSection
        :labelSection="labelSection2"
        :subtitleSection="subtitleSection2"
        :colorLable="'white'"
        :hasBtn="false"
        :backgroundLable="'bg-secondary-20'"
      />
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroLeftSection.vue';

export default {
  components: { IntroSection },
  props: {
    labelSection: {
      type: String,
      default: '',
    },
    subtitleSection: {
      type: String,
      default: '',
    },
     labelSection2: {
      type: String,
      default: '',
    },
       subtitleSection2: {
      type: String,
      default: '',
    },
    imageSection: {
      type: String,
      default: '',
    },
  }
};
</script>
