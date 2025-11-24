<template>
  <div class="bg-primary-10 relative">
    <div class="z-0">
      <DottedShape class="absolute top-[33px] left-0 " />
    </div>
    <div class="z-0">
      <EllipseCircle class="absolute top-0 right-0" />
    </div>
    <div class="grid grid-cols-2 py-[80px] mx-[60px] gap-[87px]">
      <div class=" z-10 flex flex-col justify-center gap-[16px]">
        <p class="text-white font-[900] text-[32px] max-w-[340px]">
          {{ title }}
        </p>
        <p class="text-gray-200 font-[100] text-[16px] max-w-[95%]">
          {{ subTitle }}
        </p>
        <div v-if="textButton">
          <TertiaryButton :title="textButton" />
        </div>
      </div>

      <div class="h-full z-10">
        <NuxtImg
          class="rounded-[24px] w-full h-full object-cover"
          :src="images"
          alt="the training hub services image"
          width="100%"
          height="100%"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DottedShape from '../svg/DottedShapeRed.vue';
import EllipseCircle from '../svg/EllipseCircleRed.vue';
import TertiaryButton from '../buttons/TertiaryButton.vue';

export default {
    name: 'MainServicesSection',
    components: { DottedShape, EllipseCircle, TertiaryButton },
    props: {
        title: { type: String, default: '' },
        subTitle: { type: String, default: '' },
        textButton: { type: String, default: null },
        images: { type: String, default: '' },
    }
}
</script>