<template>
  <div
    class="flex flex-col w-full gap-10 p-[60px] rounded-[20px]"
    :class="darkBg ? 'bg-transparent text-white' : 'bg-white text-primary-10'"
  >
    <div v-for="(faq, index) in faqsQuestion" :key="index" class="py-4 ">
      <button
        @click="toggleFAQ(index)"
        class="flex justify-start gap-3 items-start w-full text-left focus:outline-none cursor-pointer"
      >
        <span v-if="activeIndex === index">
          <ChevronDown />
        </span>
        <span v-else>
          <ChevronRight />
        </span>
        <span class="text-[16px] font-[900]">
          {{ faq.question }}
        </span>
      </button>

      <!-- ✅ Transition for answer -->
      <transition name="faq-toggle">
        <p
          v-if="activeIndex === index"
          class="mt-2 text-[16px] font-[900] leading-relaxed overflow-hidden"
          :class="darkBg ? 'text-gray-300' : 'text-gray-500'"
        >
          {{ faq.answer }}
        </p>
      </transition>
    </div>

    <div class="mt-6 max-w-[200px]" v-if="hasBtn">
      <NuxtLink to="/faqs">
        <MainBtn
          :title="'View All FAQs'"
          :colorIcon="'#b22726'"
          :colorFrom="'transparent'"
          :colorTo="'transparent'"
          :colorBorder="'transparent'"
          :backgroundIcon="'white'"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import ChevronDown from '../svg/ChevronDownRed.vue';
import ChevronRight from '../svg/ChevronRight.vue';
import MainBtn from '../buttons/MainBtn.vue';



export default {
  components: { ChevronDown, ChevronRight, MainBtn },
  props: {
    faqsQuestion: {
        type: Array as PropType<{ question: string; answer: string }[]>,
        default: () => [],
    },
    hasBtn: {
        type: Boolean,
        default: true
    },
    darkBg: {
        type: Boolean,
        default: true
    }
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
