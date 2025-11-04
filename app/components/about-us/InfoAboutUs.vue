<template>
  <section class="bg-primary-20">
    <div class="grid grid-cols-4 gap-[22px] px-[20px] md:px-[60px] py-[36px]">
      
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
      <div class="col-span-2 relative w-full h-[75vh] ">
       <div class="bg-amber-700 h-[82%] w-[62%] absolute top-0 left-0 rounded-[24px] z-30">
        <NuxtImg 
          class="absolute top-0 left-0 w-full h-full object-cover rounded-[24px]"
          :src="imageSection"
          alt="the training hub image"
          width="100%"
          height="100%"
          format="webp"
          quality="80"
          loading="lazy"
        />
       </div>
       <div class="absolute top-[7%] right-[8.7%] rounded-[24px] z-10">
        <DottedShape />
       </div>
        <div class="absolute bottom-[6%] left-[23.7%] rounded-[24px] z-10">
        <EllipseCircle />
       </div>
       <div class="bg-amber-900 h-[82%] w-[62%] absolute bottom-0 right-0 rounded-[24px] z-20">
        <NuxtImg 
          class="absolute top-0 left-0 w-full h-full object-cover rounded-[24px]"
          :src="imageSection"
          alt="the training hub image"
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
import IntroSection from '../main/IntroLeftSection.vue';
import DottedShape from '../svg/DottedShape.vue';
import EllipseCircle from '../svg/EllipseCircle.vue';

export default {
  components: { IntroSection, DottedShape, EllipseCircle },
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
    imageSection: {
      type: String,
      default: 'images/layout-hero.jpg',
    },
  }
};
</script>