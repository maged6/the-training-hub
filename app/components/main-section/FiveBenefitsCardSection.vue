<template>
  <section>
    <div
      class="flex flex-col items-center justify-start bg-gray-100  py-[60px] px-[83px]"
    >
      <IntroSection
        :labelSection="labelSection"
        :labelBackgroundColor="'bg-primary-20'"
        :labelColor="'white'"
        :maxWidthofHeader="maxWidthofHeader"
        :titleSection="titleSection"
        :headerColor="'black'"
      />

      <!-- Grid Layout -->
      <div class="flex flex-wrap justify-center gap-[32px] px-[53px]">
        <div v-for="(item, index) in BenefitsCardSection" :key="index" class="max-w-[392px]">
          <BenefitsCard :title="item.title" :subtitle="item.subtitle" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroCenterSection.vue';
import BenefitsCard from '../cards/BenefitsCard.vue';

import type { PropType } from 'vue'

interface BenefitCard {
  title: string;
  subtitle: string;
}

export default {
  components: { IntroSection, BenefitsCard},
  props: {
    labelSection: {
      type: String,
      default: '',
    },
    titleSection: {
      type: String,
      default: '',
    },
    maxWidthofHeader: {
      type: Number,
      default: 499,
    },
    BenefitsCardSection: {
      type: Array as PropType<BenefitCard[]>,
      required: true,
       default: () => [],

    },
  },

};
</script>
