<template>
  <div
    class="flex flex-col justify-center items-start max-w-[360px] min-h-[188px] border border-gray-200 rounded-xl shadow-xs bg-white p-[28px] "
  >
    <DoubleQuotationMarks />

    <div class="max-w-2xl mx-auto mb-4 text-primary-10 text-[16px] font-[400]">
      <p class="my-4">{{ commentCard }}</p>
    </div>

    <div class="flex items-center justify-center ">
      <NuxtImg
        class="rounded-full w-9 h-9"
        :src="userImg"
        alt="Leadership article"
        width="24"
        height="24"
        format="webp"
        loading="lazy"
      />

      <div
        class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3"
      >
        <div>{{ userName }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import DoubleQuotationMarks from '../svg/DoubleQuotationMarks.vue';

export default {
  components: { DoubleQuotationMarks },
  props: {
    commentCard: {
      type: String,
      default: 'Great experience! The trainer was knowledgeable and engaging.',
    },
    userName: {
      type: String,
      default: 'John Kenson',
    },
        userImg: {
      type: String,
      default: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png',
    },
  }
};
</script>
