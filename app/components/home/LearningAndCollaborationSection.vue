<template>
  <section>
    <div
      class="flex flex-col items-center justify-start bg-primary-20 md:py-[80px] py-[60px]"
    >
      <IntroSection
        :labelSection="labelSection"
        :labelBackgroundColor="'bg-secondary-10'"
        :labelColor="'black'"
        :maxWidthofHeader="566"
        :titleSection="titleSection"
        :headerColor="'white'"
      />

      <!-- Grid Layout -->
      <div
        class="md:grid md:grid-flow-col md:grid-cols-6 md:grid-rows-[200px_200px_200px] max-w-[1200px] 
        my-8 
        px-4 
        md:gap-1
        gap-4 
        flex flex-col "
      >
        <!-- Card 1 -->
        <div class="md:row-span-2 md:col-span-2 order-1">
          <!-- 
            -->
          <BaseCard
            :titleCard="facilities[0]?.title"
            :contentCard="facilities[0]?.description"
            colorCard="primary-10"
            backgroundColorCard="bg-white"
          />
        </div>

       <div class="md:row-span-1 md:col-span-2  order-2">
          <NuxtImg
            class="rounded-2xl w-full h-full object-cover"
            :src="smallImage"
            alt="Leadership article"
            width="400"
            height="250"
            format="webp"
            loading="lazy"
          />
        </div>

         <div class="md:row-span-1 md:col-span-4 md:order-3 order-4">
          <NuxtImg
            class="rounded-2xl w-full h-full object-cover"
            :src="largeImage"
            alt="Leadership article"
            width="400"
            height="250"
            format="webp"
            loading="lazy"
          />
        </div>

        <!-- Card 2 -->
        <div class="md:row-span-2 md:col-span-2 md:order-4 order-3">
          <BaseCard
            :titleCard="facilities[1]?.title"
            :contentCard="facilities[1]?.description"
            colorCard="white"
            backgroundColorCard="bg-black"
          />
        </div>

        <!-- Card 3 -->
        <div class="md:row-span-2 md:col-span-2  order-5">
          <BaseCard
            :titleCard="facilities[2]?.title"
            :contentCard="facilities[2]?.description"
            colorCard="primary-10"
            backgroundColorCard="bg-white"
          />
        </div>
      </div>
      <NuxtLink :to="'/hub-facilities'" class="w-full md:w-[250px]  px-4 "  >
        <MainBtn
          :title="'Know More'"
          :colorIcon="'#10171F'"
          :colorTo="'#10171F'"
          :colorFrom="'#4B4A5C'"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroCenterSection.vue';
import MainBtn from '../buttons/MainBtn.vue';
import BaseCard from '../cards/BaseCard.vue';
import type { PropType } from 'vue'

interface Facility {
  title: string;
  description: string;
}

export default {
  components: { IntroSection, MainBtn, BaseCard },
  props: {
    labelSection: {
      type: String,
      default: 'Hub Facilities',
    },
    titleSection: {
      type: String,
      default: 'Designed to Inspire Learning and Collaboration',
    },
    facilities: {
      type: Array as PropType<Facility[]>,
      default: () => [],
    },
    smallImage: {
      type: String,
      default: '/images/learning-home-1.png',
    },
    largeImage: {
      type: String,
      default: '/images/learning-home-2.png',
    },
  },

};
</script>
