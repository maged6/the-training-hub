<template>
  <section>
    <div class="bg-black py-[80px] flex flex-col items-center justify-center text-center">
      <!-- Title -->
      <h1 class="text-white text-[18px] font-[500] mb-6">{{ titleSection }}</h1>

      <!-- Paragraph -->
      <p
        class="text-tertiary-gray-50 text-[32px] md:text-[38px] font-light leading-[1.5] md:w-[58vw] mx-auto pb-[80px]"
      >
        <strong class="text-white">{{ subtitle1Section }}</strong>
        <NuxtImg
          :src="image1Section"
          alt="training"
          sizes="(max-width: 600px) 75px, 1000px"
          width="60"
          height="40"
          class="inline-block object-cover rounded-full mx-2 align-middle"
        />
        <strong class="text-white">{{ subtitle2Section }}</strong>
        {{ subtitle3Section }}
        <NuxtImg
          :src="image2Section"
          alt="training session"
          sizes="(max-width: 600px) 75px, 1000px"
          width="60"
          height="40"
          class="inline-block object-cover rounded-full mx-2 align-middle"
        />
        {{ subtitle4Section }}
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
          <li v-for="(list, index) in listSection" :key="index">{{ list }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import MainBtn from '../buttons/MainBtn.vue';

export default {
  components: { MainBtn },
  props: {
    titleSection: { type: String, default: 'Overview' },
    subtitle1Section: { type: String, default: 'We deliver practical,' },
    subtitle2Section: { type: String, default: 'mentor-led training rooted in real world experience.' },
    subtitle3Section: { type: String, default: 'Our approach goes beyond theory, equipping professionals with applicable skills, added value, and the confidence to succeed' },
    subtitle4Section: { type: String, default: 'and excel in their careers.' },
    image1Section: { type: String, default: '/images/image-1-small.jpg' },
    image2Section: { type: String, default: '/images/image-2-small.jpg' },
    listSection: { type: Array, default: () => ['Learn', "Grow", "Achieve", "Lead", "Succeed", "Innovate",'Learn', "Grow", "Achieve", "Lead", "Succeed", "Innovate"] },
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
