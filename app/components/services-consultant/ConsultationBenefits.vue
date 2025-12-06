<template>
  <section class=" bg-tertiary-gray-5 md:px-[60px] px-[16px] py-[40px] ">
    <div>
      <IntroCenterSection
        :labelSection="'Highlights'"
        :labelBackgroundColor="'bg-primary-20'"
        :maxWidthofHeader="550"
        :headerColor="'bg-primary-10'"
        :labelColor="'white'"
        :titleSection="'Consultation Benefits'"
      />
    </div>

     
      <div
        class="flex flex-wrap mt-[32px] md:mt-0 gap-[32px]"
      >
        <div
          class="max-w-[440px]"
          v-for="(item, index) in BenefitsCardSection"
          :key="index"
        >
          <BenefitsCard :title="item.title" :subtitle="item.subtitle" />
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
        { title: 'HR Consultation', subtitle: 'Empower your HR team to move beyond administration and become a true driver of organizational success. We help design effective performance management systems, boost employee engagement, enhance workplace culture, and build strategies that attract and retain top talent.' },
        { title: 'Sales Consultation', subtitle: 'Unlock your team’s full selling potential with strategies tailored to your market. We focus on refining sales processes, improving lead conversion, setting clear KPIs, and equipping sales teams with the tools and skills needed to achieve consistent growth.' },
        { title: 'Online & Offline Marketing Consultation', 
        subtitle: 
        'Bridge the gap between strategy and execution with integrated marketing solutions. From optimizing digital presence and campaigns to enhancing offline branding and events, we guide you in creating cohesive marketing strategies that strengthen your brand and drive measurable results.'},
       ],

    },
  },

}
</script>
