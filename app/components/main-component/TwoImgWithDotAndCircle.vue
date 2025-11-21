<template>
     <div class="col-span-2 relative w-full h-[75vh] ">
       <div class="bg-amber-700 h-[82%] w-[62%] absolute top-0 left-0 rounded-[24px] z-30">
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
       <div class="bg-amber-900 h-[82%] w-[62%] absolute bottom-0 right-0 rounded-[24px] z-20">
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