<template>
  <section class="bg-white p-[60px]">
    <!-- Left section -->
    <div class="col-span-2 flex items-center justify-center">
      <IntroSection
        :labelSection="labelSection"
        :titleSection="titleSection"
        :hasBtn="false"
        :maxWidthofHeader="600"
        :backgroundLable="'bg-secondary-10'"
      />
    </div>

    <div>
      <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />

      <div
        v-for="(items , index) in commitmentItems"
        :key="index"
      >
      <div  class="flex justify-between items-center py-[32px]">
        <div class="max-w-[243px] max-h-[144px]">
          <NuxtImg
            class="rounded-2xl object-cover w-full h-full"
            :src="items.image"
            alt="Our Vision and Mission"
            width="250"
            height="150"
            format="webp"
            loading="lazy"
          />
        </div>

        <div class="text-[72px] font-[100] text-primary-20">
          <p>0{{ index + 1 }}</p>
        </div>

        <div class="max-w-[420px] font-[900] ">
          <p class="text-primary-10 text-[32px] ">{{ items.text }}</p>
          <p class="text-secondary-40 text-[14px]">{{ items.description }}</p>
        </div>
        </div>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
    </div>
<div class="flex justify-center mt-[60px]">
 <MainBtn
        :title="'Explore Programs'"
        :colorIcon="'#10171F'"
        :colorTo="'#10171F'"
        :colorFrom="'#4B4A5C'"
      />
</div>


  </section>
</template>

<script lang="ts">
import IntroSection from '../main/IntroCenterSection.vue';
import MainBtn from '../buttons/MainBtn.vue';
import type { PropType } from 'vue'

interface items {
    image: string,
    text: string,
   description: string
}

export default {
  components: { IntroSection, MainBtn},
  props: {
    labelSection: {
      type: String,
      default: 'Core Values',
    },
    titleSection: {
      type: String,
      default: 'Our Commitment to Excellence and Integrity',
    },
    commitmentItems: {
      type: Array as PropType<items[]>,
      default: [
     {
          image: "images/layout-hero.jpg",
          text: "Honesty",
          description: "We practice transparent communication, keep our promises, and build trust through integrity in all interactions."
        },
            {
          image: "images/layout-hero.jpg",
          text: "Respect",
          description: "We treat each person—clients, partners, trainees—with dignity and appreciation, valuing diversity in background and thought."
        },
          {
          image: "images/layout-hero.jpg",
          text: "Responsibility",
          description: "We are committed to making a positive impact in our community and country by sharing practical knowledge and empowering others."
        },
        {
          image: "images/layout-hero.jpg",
          text: "Partnership",
          description: "We form collaborative relationships with our clients, working side by side to deliver quality solutions at optimized costs."
        },
      ],
    },
  }
};
</script>
