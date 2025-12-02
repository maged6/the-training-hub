<template>
  <section>
    <div
      class="flex flex-col items-center justify-start bg-primary-20 py-[80px]"
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
        class="grid grid-flow-col grid-cols-6 gap-1 grid-rows-[200px_200px_200px] max-w-[1200px] mb-8 px-4"
      >
        <!-- Card 1 -->
        <div class="row-span-2 col-span-2">
          <!-- 
            -->
          <BaseCard
            :titleCard="facilities[0]?.title"
            :contentCard="facilities[0]?.description"
            colorCard="primary-10"
            backgroundColorCard="bg-white"
          />
        </div>

        <div class="row-span-1 col-span-2">
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

        <div class="row-span-1 col-span-4 ">
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
        <div class="row-span-2 col-span-2 ">
          <BaseCard
            :titleCard="facilities[1]?.title"
            :contentCard="facilities[1]?.description"
            colorCard="white"
            backgroundColorCard="bg-black"
          />
        </div>

        <!-- Card 3 -->
        <div class="row-span-2 col-span-2 ">
          <BaseCard
            :titleCard="facilities[2]?.title"
            :contentCard="facilities[2]?.description"
            colorCard="primary-10"
            backgroundColorCard="bg-white"
          />
        </div>
      </div>
      <NuxtLink :to="'/hub-facilities'">
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
