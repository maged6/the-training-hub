<template>
  <section>
    <div class="bg-black py-[80px] flex flex-col items-center justify-center text-center">
      <!-- Title -->
      <h1 class="text-white text-[18px] font-[500] mb-6">{{ titleSection }}</h1>

      <!-- Paragraph -->
      <p
        class="text-tertiary-gray-50 text-[32px] md:text-[38px] font-light leading-[1.5] md:w-[58vw] mx-auto pb-[80px]"
      >
        <strong class="text-white">{{ subtitleParts[0] }}</strong>
        <NuxtImg
          :src="image1Section"
          alt="training"
          sizes="(max-width: 600px) 75px, 1000px"
          width="60"
          height="40"
          class="inline-block object-cover rounded-full mx-2 align-middle"
        />
        <strong class="text-white">{{ subtitleParts[1] }}</strong>
        {{ subtitleParts[2] }}
        <NuxtImg
          :src="image2Section"
          alt="training session"
          sizes="(max-width: 600px) 75px, 1000px"
          width="60"
          height="40"
          class="inline-block object-cover rounded-full mx-2 align-middle"
        />
        {{ subtitleParts[3] }}
      </p>

      <MainBtn
        :title="'About Us'"
        :colorIcon="'black'"
        :colorFrom="'transparent'"
        :colorTo="'transparent'"
        :colorBorder="'white'"
      />
    </div>

    <!-- Auto-scrolling list -->
    <div class="bg-primary-20 overflow-hidden">
      <div class="overflow-hidden group relative w-full">
        <ul
          class="flex text-white text-[38px] font-[300] list-disc space-x-10 whitespace-nowrap
                 transition-transform duration-[15s] ease-linear group-hover:animate-scroll-x-bounce"
        >
          <li v-for="(list, index) in listSection" :key="index">{{ list.word }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import MainBtn from '../buttons/MainBtn.vue';
import type { PropType } from 'vue'

export default {
  components: { MainBtn },
  props: {
    titleSection: { type: String, default: 'Overview' },
    descriptionSection: { type: String, default: 'We deliver practical, mentor-led training rooted in real world experience. Our approach goes beyond theory equipping professionals with applicable skills, added value, and the confidence to succeed and excel in their careers.' },
    image1Section: { type: String, default: '/images/small-about-1.png' },
    image2Section: { type: String, default: '/images/small-about-2.jpg' },
    listSection: {
      type: Array as PropType<{ word: string }[]>,
      default: () => [],
    },
  },
   computed: {
    subtitleParts(): string[] {
      const parts = this.descriptionSection
        .split(/(?<=[.,])\s+/)
        .filter(p => p.trim() !== '')

      while (parts.length < 4) {
        parts.push('')
      }

      return parts.slice(0, 4)
    },
  },
}
</script>

<style scoped>
@keyframes scroll-x-bounce {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(0);
  }
}

.group-hover\:animate-scroll-x-bounce:hover {
  animation: scroll-x-bounce 8s ease-in-out infinite;
}
</style>
