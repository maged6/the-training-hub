<template>
  <div
    class="flex justify-center 
     items-stretch  w-full min-h-[262px]"
  >
    <div class="max-w-[341px]">
      <NuxtImg
        class="rounded-l-[16px] w-full h-full object-cover"
        :src="'images/layout-hero.jpg'"
        alt="the training hub image"
        loading="lazy"
        format="webp"
        width="350"
        height="200"
      />
    </div>

    <div
      class="border border-gray-200 shadow-xs rounded-r-[16px] bg-white p-[28px] w-full flex justify-between"
    >
      <div class="flex flex-col justify-between items-start h-full">
        <div>
          <p
            class="bg-tertiary-gray-10 rounded-[4px] px-4 py-1 font-[900] w-fit"
          >
            Soft Skills
          </p>
          <p class="font-[900] text-[20px] pt-[8px]">
            Compensation, Benefits and Incentives
          </p>
        </div>

        <div class="flex flex-col gap-[8px]">
          <p class="font-[100] text-[14px] text-gray-900">
            2 Days/ Week .6 Weeks
          </p>
          <p class="font-[100] text-[14px] text-gray-900">
            Start From 25th Oct 2025
          </p>
          <p class="font-[900] text-[20px] text-primary-20">8,000 EGP</p>
        </div>
      </div>
      <div class="flex flex-col justify-between items-end h-full">
        <p class="bg-tertiary-gray-10 rounded-[4px] px-4 py-1 font-[900] w-fit">
          Active
        </p>
        <div class="flex items-end">
          <ArrowRightTop
            :backgroundColorIcon="'#b22726'"
            :colorIcon="'white'"
            :width="'42'"
            :height="'42'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ArrowRightTop from '~/components/svg/ArrowRightTopBtn.vue'

export default {
  components: { ArrowRightTop },

  props: {

  }
};
</script>
