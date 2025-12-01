<template>
  <section>
    <!-- Left section -->
    <div class="flex flex-col items-center justify-start bg-tertiary-gray-10 py-[80px]">
      <IntroSection
        :labelSection="labelSection"
        :titleSection="titleSection"
        :subtitleSection="subtitleSection"
        :hasBtn="false"
      />

      <!-- Wrapper that centers the scrollable area -->
      <div ref="scrollSection" class="w-[95vw] mx-auto relative"
        v-if="programs.length > 0"
        @mouseenter="enableHorizontalScroll"
        @mouseleave="disableHorizontalScroll">
        <div
          ref="scrollContent"
          class="flex gap-4 my-[60px] inner-scrollbar w-full overflow-x-auto"
        >
          <div v-for="(program, index) in programs" :key="index" class="flex-shrink-0">
            <ProgramsCard
              :imgSection="program.image"
              :linkTo="program.slug"
              :hoverImgSection="''"
              :seatsAvailable="program.seats_available"
              :limitedOffer="program.limited_offer"
              :programName="''"
              :titleProgram="program.title"
              :daysPerWeek="program.days_per_week"
              :durationInWeeks="program.duration_in_weeks"
              :startFrom="program.start_from"
              :programPrice="''"
              :programOffer="''"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-8">
        <RouterLink :to="'/services/training-programs'">
          <MainBtn :title="'Explore All Programs'" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue'
import IntroSection from '../main-component/IntroCenterSection.vue';
import ProgramsCard from '../cards/ProgramsCard.vue';
import MainBtn from '../buttons/MainBtn.vue';

interface Program {
  title: string;
  slug: string;
  days_per_week: string;
  duration_in_weeks: string;
  start_from: string;
  image: string;
  seats_available: number;
  limited_offer: boolean;
}

export default {
  components: { IntroSection, ProgramsCard, MainBtn },
  props: {
    labelSection: {
      type: String,
      default: 'Popular Programs',
    },
    titleSection: {
      type: String,
      default: 'Explore Our Training Courses',
    },
    subtitleSection: {
      type: String,
      default:
        'From leadership workshops to technical certifications, our programs help you stay competitive. Browse our catalog to find the right course for your growth.',
    },
    programs: {
      type: Array as PropType<Program[]>,
      default: () => [],
    },
  },
  setup() {
    const scrollSection = ref<HTMLElement | null>(null);
    const scrollContent = ref<HTMLElement | null>(null);
    let isInsideSection = false
    
  const handleWheel = (event: WheelEvent) => {
      if (!isInsideSection || !scrollContent.value) return

      const el = scrollContent.value
      const atStart = el.scrollLeft === 0
      const atEnd =
        Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth

      // Only prevent vertical scroll if we can scroll horizontally
      if ((event.deltaY > 0 && !atEnd) || (event.deltaY < 0 && !atStart)) {
        event.preventDefault()
        const scrollSpeed = 3
        el.scrollLeft += event.deltaY * scrollSpeed
      }
      // Otherwise, allow normal vertical scroll (page moves)
    }

    const enableHorizontalScroll = () => {
      isInsideSection = true
      window.addEventListener('wheel', handleWheel, { passive: false })
    }

    const disableHorizontalScroll = () => {
      isInsideSection = false
      window.removeEventListener('wheel', handleWheel)
    }

    return { scrollSection, scrollContent, enableHorizontalScroll, disableHorizontalScroll };
  },
};
</script>

<style scoped>
.inner-scrollbar {
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 60px;
}

.inner-scrollbar::-webkit-scrollbar {
  height: 4px;
}

.inner-scrollbar::-webkit-scrollbar-thumb {
  background-color: #b22726;
  border-radius: 10px;
  background-clip: content-box;
}

.inner-scrollbar::-webkit-scrollbar-track {
  background: #9fa2a5;
  border-radius: 10px;
}

.inner-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #721919;
}
</style>
