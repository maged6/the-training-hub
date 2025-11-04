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
        @mouseenter="enableHorizontalScroll"
        @mouseleave="disableHorizontalScroll">
        <div
          ref="scrollContent"
          class="flex gap-4 my-[60px] inner-scrollbar w-full overflow-x-auto"
        >
          <div v-for="(program, index) in programs" :key="index" class="flex-shrink-0">
            <ProgramsCard
              :imgSection="program.permalink"
              :hoverImgSection="'/images/image-2.jpg'"
              :lableText="program.title"
              :lableColor="'primary-20'"
              :programName="'Soft Skills'"
              :titleProgram="'Emotional Intelligence '"
              :programDate="'2 Days/ Week - 6 Weeks - Start at 25th Oct 2025'"
              :programPrice="'8,000 EGP'"
            />
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <MainBtn :title="'Explore All Programs'" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue'
import IntroSection from '../main/IntroCenterSection.vue';
import ProgramsCard from '../main/ProgramsCard.vue';
import MainBtn from '../buttons/MainBtn.vue';

interface Program {
  title: string;
  permalink: string;

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
