<template>
  <section
    class=" bg-white px-[41px] py-[80px] "
    v-if="programSection.length > 0"
  >
    <h1 class="text-center text-primary-10 font-[900] text-[32px]">
      {{ titleSection }}
    </h1>

    <div class="flex gap-[16px]">
      <span v-for="(Program, index) in programSection" :key="index">
        <NewsCard
          :ImageCard="Program.ImageCard"
          :CardTitle="Program.CardTitle"
          :ButtonTitle="Program.ButtonTitle"
          :MaxWidth="'225px'"
        />
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import NewsCard from '../cards/NewsCard.vue';
import type { PropType } from 'vue'

interface Program {
  ImageCard: string;
  CardTitle: string;
  ButtonTitle: string;
}

export default {
 components: { NewsCard },
 props: {
   titleSection: {
     type: String,
     default: 'Our Programs',
   },
   programSection: {
     type: Array as PropType<Program[]>,
     default: () => [],
   },
 }
}
</script>
