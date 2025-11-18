<template>
  <section class="bg-primary-10 p-[60px]">
      
      <!-- Left section -->
      <div class="col-span-2 flex items-center justify-center md:justify-start">
        <IntroSection 
          :labelSection="labelSection"
          :subtitleSection="subtitleSection"
          :hasBtn="false"
          :backgroundLable="'bg-secondary-10'"
        />
      </div>

  <div class="w-full min-h-[391px] py-[40px]">
        <NuxtImg
            class="rounded-2xl object-cover w-full max-h-[391px]"
            :src="imageSection"
            alt="Our Vision and Mission"
            width="600"
            height="150"
            format="webp"
            loading="lazy"
          />
    </div>

     <div class="col-span-2 flex items-center justify-end md:justify-end">
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
      default: 'Our Vision',
    },
    subtitleSection: {
      type: String,
      default: 'To share knowledge and experience through a team of hands-on, fully experienced trainers with our targeted customers.',
    },
     labelSection2: {
      type: String,
      default: 'Our Mission',
    },
       subtitleSection2: {
      type: String,
      default: 'To help our clients grow, achieve better performance, and improve profitability—through targeted training and development delivered by dedicated mentors and experts.',
    },
    imageSection: {
      type: String,
      default: 'images/layout-hero.jpg',
    },
  }
};
</script>