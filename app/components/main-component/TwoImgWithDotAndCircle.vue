<template>
     <div class="md:col-span-2 col-span-4 order-1 md:order-2 relative w-full md:h-[75vh] h-[40vh] ">
       <div class=" md:h-[82%] md:w-[62%] h-[79%] w-[57%] absolute top-0 left-0 rounded-[24px] z-30">
        <NuxtImg 
          class="absolute top-0 left-0 w-full h-full object-cover rounded-[24px]"
          :src="imageSectionOne"
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
       <div class=" md:h-[82%] md:w-[62%] h-[79%] w-[57%] absolute bottom-0 right-0 rounded-[24px] z-20">
        <NuxtImg 
          class="absolute top-0 left-0 w-full h-full object-cover rounded-[24px]"
          :src="imageSectionTwo"
          alt="the training hub image"
          width="100%"
          height="100%"
          format="webp"
          quality="80"
          loading="lazy"
        />
       </div>
      </div>
</template>


<script lang="ts">
import IntroSection from '../main-component/IntroLeftSection.vue';
import DottedShape from '../svg/DottedShapeYeloow.vue';
import EllipseCircle from '../svg/EllipseCircle.vue';

export default {
  components: { IntroSection, DottedShape, EllipseCircle },
  props: {
    imageSectionOne: {
      type: String,
      default: 'images/layout-hero.jpg',
    },
    imageSectionTwo: {
      type: String,
      default: 'images/layout-hero.jpg',
    },
  }
};
</script>