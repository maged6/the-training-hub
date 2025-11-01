<template>
  <section>
    <div class="bg-tertiary-gray-5 py-[40px] px-[60px]">
      <div
        class="w-full h-full bg-black rounded-[32px] grid grid-cols-2  p-[40px] gap-1"
      >
        <!-- Left Side -->
        <div
          class="flex flex-col items-center justify-center gap-10 w-full min-h-[40rem] text-white"
        >
          <IntroSection
            :labelSection="labelSection"
            :titleSection="titleSection"
            :hasBtn="false"
            :backgroundLable="'bg-primary-20'"
            :colorLable="'white'"
          />
          <NuxtImg
            class="rounded-[16px] w-full h-auto object-cover"
            :src="imageSection"
            alt="the training hub faqs image"
            width="800"
            height="600"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>

        <!-- Right Side -->
        <div class="flex flex-col text-white w-full gap-10 px-10">
          <div v-for="(faq, index) in faqsQuestion" :key="index" class="py-4 ">
            <button
              @click="toggleFAQ(index)"
              class="flex justify-start gap-3 items-start w-full text-left focus:outline-none"
            >
              <span v-if="activeIndex === index">
                <ChevronDown />
              </span>
              <span v-else>
                <ChevronRight />
              </span>
              <span class="text-[16px] font-medium">
                {{ faq.question }}
              </span>
            </button>

            <!-- ✅ Transition for answer -->
            <transition name="faq-toggle">
              <p
                v-if="activeIndex === index"
                class="mt-2 text-gray-300 text-[14px] leading-relaxed overflow-hidden"
              >
                {{ faq.answer }}
              </p>
            </transition>
          </div>

          <div class="mt-6 max-w-[156px]">
            <MainBtn
              :title="'View All FAQs'"
              :colorIcon="'#b22726'"
              :colorFrom="'transparent'"
              :colorTo="'transparent'"
              :colorBorder="'transparent'"
              :backgroundIcon="'white'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import IntroSection from '../main/IntroLeftSection.vue';
import ChevronDown from '../svg/ChevronDownRed.vue';
import ChevronRight from '../svg/ChevronRight.vue';
import MainBtn from '../buttons/MainBtn.vue';

export default {
  components: { IntroSection, ChevronDown, ChevronRight, MainBtn },
  props: {
    labelSection: { type: String, default: 'Have A Question?' },
    titleSection: { type: String, default: 'Frequently asked questions' },
    imageSection: { type: String, default: 'images/layout-hero.jpg' },
    faqsQuestion: {
        type: Array as PropType<{ question: string; answer: string }[]>,
        default: () => [],
    },
  },
  data() {
    return {
      activeIndex: 0,
    };
  },
  methods: {
    toggleFAQ(index: number) {
      this.activeIndex = this.activeIndex === index ? -1 : index;
    },
  },
};
</script>

<style scoped>
/* ✅ Transition Animation */
.faq-toggle-enter-active,
.faq-toggle-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  opacity: 1;
}
.faq-toggle-enter-from,
.faq-toggle-leave-to {
  max-height: 0;
  opacity: 0;
  transform: translateY(-5px);
}
.faq-toggle-enter-to,
.faq-toggle-leave-from {
  max-height: 500px;
  opacity: 1;
  transform: translateY(0);
}
</style>
