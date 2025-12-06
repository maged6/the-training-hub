<template>
  <section class=" bg-tertiary-gray-5 md:px-[60px] md:py-[40px] px-[16px] py-[60px]">
    <div class="mb-[32px] md:mb-0">
      <IntroCenterSection
      :labelBackgroundColor="'bg-primary-20'"
      :maxWidthofHeader="550"
      :headerColor="'bg-primary-10'"
      :labelColor="'white'"
      :titleSection="TitleSection"
      :labelSection="LableSection"
      />
    </div>

    <div class="grid grid-cols-7 gap-[32px]">
      <div class="md:col-span-3 col-span-7 md:h-full  h-[437px]">
        <NuxtImg
          class="rounded-2xl object-cover w-full h-full"
          :src="ImageSection"
          alt="Our Vision and Mission"
          width="250"
          height="150"
          format="webp"
          loading="lazy"
        />
      </div>
      <div
        class="md:col-span-4 col-span-7 flex flex-wrap items-stretch gap-[32px]"
      >
        <div
          class="md:w-[calc(50%-16px)] w-full"
          v-for="(item, index) in BenefitsCardSection"
          :key="index"
        >
          <BenefitsCard :title="item.title" :subtitle="item.subtitle" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import BenefitsCard from '../cards/BenefitsCard.vue'
import type { PropType } from 'vue'

interface BenefitCard {
  title: string;
  subtitle: string;
}

export default {
  components: {
    IntroCenterSection,
    BenefitsCard
  },
  props: {
  LableSection: {
      type: String,
      default: '',
  },
  TitleSection: {
      type: String,
      default: '',
  },
  ImageSection: {
      type: String,
      default: '',
  },
  BenefitsCardSection: {
      type: Array as PropType<BenefitCard[]>,
      required: true,
       default: () => [],

    },
  },

}
</script>
