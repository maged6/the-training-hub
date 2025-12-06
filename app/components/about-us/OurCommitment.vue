<template>
  <section class="bg-white md:p-[60px] px-[16px] py-[60px]">
    <!-- Left section -->
    <div class="col-span-2 flex items-center justify-center">
      <IntroSection
        :labelSection="labelSection"
        :titleSection="titleSection"
        :maxWidthofHeader="600"
        :backgroundLable="'bg-secondary-10'"
      />
    </div>

    <div>
      <hr class="h-px md:mt-0 mt-[32px] bg-gray-200 border-0 dark:bg-gray-700" />

      <div v-for="(items , index) in commitmentItems" :key="index">
        <div class="flex md:flex-row flex-col justify-between md:items-center py-[32px]">
          <div class="w-[243px] h-[144px]">
            <NuxtImg
              class="rounded-2xl object-cover w-full h-full"
              :src="items.image"
              alt="Our Vision and Mission"
              width="250"
              height="150"
              format="webp"
              loading="lazy"
            />
          </div>

          <div class="text-[72px] font-[100] text-primary-20">
            <p>0{{ index + 1 }}</p>
          </div>

          <div class="max-w-[420px] font-[900] ">
            <p class="text-primary-10 text-[32px] ">{{ items.title }}</p>
            <p class="text-secondary-40 text-[14px]">{{ items.description }}</p>
          </div>
        </div>
        <hr class="h-px bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </div>
    <div class="flex justify-center mt-[60px]">
      <RouterLink :to="'/services/training-programs'">
        <MainBtn
          :title="'Explore Programs'"
          :colorIcon="'#10171F'"
          :colorTo="'#10171F'"
          :colorFrom="'#4B4A5C'"
        />
      </RouterLink>
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroCenterSection.vue';
import MainBtn from '../buttons/MainBtn.vue';
import type { PropType } from 'vue'

interface items {
  title: string,
  image: string,
  description: string
}

export default {
  components: { IntroSection, MainBtn},
  props: {
    labelSection: {
      type: String,
      default: '',
    },
    titleSection: {
      type: String,
      default: '',
    },
    commitmentItems: {
      type: Array as PropType<items[]>,
      default: [],
    },
  }
};
</script>
