<template>
  <section class=" bg-tertiary-gray-5 px-[60px] py-[40px] ">
    <div>
      <IntroCenterSection
        :labelSection="'Key Features'"
        :labelBackgroundColor="'bg-primary-20'"
        :maxWidthofHeader="550"
        :headerColor="'bg-primary-10'"
        :labelColor="'white'"
        :titleSection="'Why Experiential Learning?'"
      />
    </div>

    <div class="flex gap-[32px]">
        <div class="w-[45%]">
          <NuxtImg
            class="rounded-2xl object-cover w-full h-full"
            :src="'images/layout-hero.jpg'"
            alt="Our Vision and Mission"
            width="250"
            height="150"
            format="webp"
            loading="lazy"
          />
        </div>
          <div  class="flex flex-wrap items-stretch gap-[32px] w-[70%]">
             <BenefitsCard
                    v-for="(item, index) in BenefitsCardSection"
                    :key="index"
                    :title="item.title"
                    :subtitle="item.subtitle"
                />
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
  BenefitsCardSection: {
      type: Array as PropType<BenefitCard[]>,
      required: true,
       default: () => [
        { title: 'Active Engagement', subtitle: 'Participants actively engage with information, testing ideas and applying concepts in real time.' },
        { title: 'Real-World Relevance', subtitle: 'Scenarios mirror actual workplace challenges, making the learning transferable to day-to-day roles.' },
        { title: 'Deep Retention', subtitle: 'Through doing, learners internalize skills more effectively than through lectures alone.'},
        { title: 'Team & Personal Growth', subtitle: 'Encourages collaboration, improves communication, fosters empathy, and accelerates personal insight.' },
       ],

    },
  },

}
</script>
