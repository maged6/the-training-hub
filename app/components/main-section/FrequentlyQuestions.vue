<template>
  <section>
    <div class="bg-tertiary-gray-5 p-[60px]">
      <div
        class="w-full h-full bg-black rounded-[32px] grid grid-cols-2  p-[40px] gap-1"
      >
        <div
          class="flex flex-col items-start justify-center gap-10 w-full min-h-[40rem] text-white"
        >
          <IntroSection
            :labelSection="labelSection"
            :titleSection="titleSection"
            :hasBtn="false"
            :backgroundLable="'bg-primary-20'"
            :colorLable="'white'"
          />
          <NuxtImg
            class="rounded-[16px] w-full h-auto object-contain object-top"
            :src="imageSection"
            alt="the training hub faqs image"
            width="800"
            height="300"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>

        <!-- Right Side -->
        <AskedQuestions
         :faqsQuestion="faqsQuestion"
        />
        
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import IntroSection from '../main-component/IntroLeftSection.vue';
import AskedQuestions from '../main-component/AskedQuestions.vue';
import ChevronDown from '../svg/ChevronDownRed.vue';
import ChevronRight from '../svg/ChevronRight.vue';
import MainBtn from '../buttons/MainBtn.vue';



export default {
  components: { IntroSection, ChevronDown, ChevronRight, MainBtn, AskedQuestions },
  props: {
    labelSection: { type: String, default: 'Have A Question?' },
    titleSection: { type: String, default: 'Frequently asked questions' },
    imageSection: { type: String, default: 'images/layout-hero.jpg' },
    faqsQuestion: {
        type: Array as PropType<{ question: string; answer: string }[]>,
        default: () => [],
    },
  },
};
</script>