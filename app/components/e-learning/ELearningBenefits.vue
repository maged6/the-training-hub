<template>
  <section>
    <div
      class="flex flex-col items-center justify-start bg-gray-100  py-[60px] px-[83px]"
    >
      <IntroSection
        :labelSection="labelSection"
        :labelBackgroundColor="'bg-primary-20'"
        :labelColor="'white'"
        :maxWidthofHeader="499"
        :titleSection="titleSection"
        :headerColor="'black'"
        :hasBtn="false"
      />

      <!-- Grid Layout -->
      <div class="flex flex-wrap justify-center gap-[32px] px-[53px]"> 
      <BenefitsCard
            v-for="(item, index) in BenefitsCardSection"
            :key="index"
            :title="item.title"
            :subtitle="item.subtitle"
        >
            <template #icon>
            <component :is="iconMap[item.title]" />
            </template>
        </BenefitsCard>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroCenterSection.vue';
import BenefitsCard from '../cards/BenefitsCard.vue';
import library from '../svg/library.vue';
import VideoPlayback from '../svg/VideoPlayback.vue';
import AnalyticsChat from '../svg/AnalyticsChat.vue';
import TimerDesktop from '../svg/TimerDesktop.vue';
import UserStar from '../svg/UserStar.vue';
import type { PropType } from 'vue'

interface BenefitCard {
  title: string;
  subtitle: string;
}

interface IconMap {
  [key: string]: any // or DefineComponent if you want stronger typing
}

export default {
  components: { IntroSection, BenefitsCard, library},
  props: {
    labelSection: {
      type: String,
      default: 'Highlights',
    },
    titleSection: {
      type: String,
      default: 'E-Learning Benefits',
    },
    BenefitsCardSection: {
      type: Array as PropType<BenefitCard[]>,
      required: true,
       default: () => [
        { title: 'Wide Course Library', subtitle: 'Access over 1000 courses across various industries.' },
        { title: 'Interactive Experience', subtitle: 'Videos, quizzes, and case studies for active learning.' },
        { title: 'Progress Tracking', subtitle: 'Monitor your achievements and completion rates.' },
        { title: 'Flexible Access', subtitle: 'Learn at your own pace, anytime, anywhere.' },
        { title: 'Expert-Led', subtitle: 'Courses developed by experienced trainers and industry professionals.' },
       ],

    },
  },
   computed: {
    iconMap(): IconMap {
      return {
        'Wide Course Library': library,
        'Interactive Experience': VideoPlayback,
        'Progress Tracking': AnalyticsChat,
        'Flexible Access': TimerDesktop,
        'Expert-Led': UserStar,
      }
    }
}

};
</script>
