<template>
  <section>
    <div class="bg-about-us flex md:flex-row flex-col justify-between items-center md:px-[183px] px-[96.5px] py-[60px]">
      <div class="flex flex-col justify-center items-center" v-for="(about, index) in AboutNumber" :key="index">
        <p class="text-primary-20 font-[100] text-[60px] ">
          + {{ about.number }}
        </p>
        <p class=" font-[100] text-[20px] text-gray-500 max-w-[120px] text-center leading-tight">
          {{ about.text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'

interface AboutNumber {
  number: string;
  text: string;
}

export default {
  props: {
    AboutNumber: {
      type: Array as PropType<AboutNumber[]>,
      default: () => [],
    }
  }
};
</script>

<style scoped>
.bg-about-us {
  background-image: url('@/assets/images/background-about-us.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: auto;
  min-height: 50vh;
}

@media (max-width: 644px) {
  .bg-about-us {
    height: 80vh;
    width: 100%;
    background-size: contain;
    background-position: center;
  }
}
</style>
