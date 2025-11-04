<template>
  <section>
    <div class="bg-about-us flex justify-between items-center px-[183px]">
      <div class="flex flex-col justify-center items-center" v-for="(about , index) in AboutNumber" :key="index">
        <p class="text-primary-20 font-[100] text-[60px] "> + {{  about.number }}</p>
        <p class=" font-[100] text-[20px] text-gray-500 max-w-[120px] text-center leading-tight">
            {{ about.text }}</p>
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
     default: () => [
               {
          "number": 1000,
          "text": "Professionals Trained"
        },
               {
          "number": 10,
          "text": "Years of Experience"
        },
               {
          "number": 200,
          "text": "Specialized Programs"
        },
               {
          "number": 50,
          "text": "Expert Trainers"
        }
     ],
   }
  }
};
</script>


<style scoped>
.bg-about-us {
  background-image: url('@/assets/images/background-about-us.svg');
  background-size: cover;
  background-position: center;
  height: auto;
  min-height: 50vh;
}
</style>
