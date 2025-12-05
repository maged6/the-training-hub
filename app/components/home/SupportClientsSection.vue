<template>
  <section>
    <div class="md:bg-primary-10 bg-transparent md:py-[40px] py-[60px] md:px-[60px] px-[16px]">
      <div class="w-full h-full bg-white rounded-[32px]">
        <div class="pb-[42px] md:pb-0">
        <IntroSection
          :labelSection="labelSection"
          :titleSection="titleSection"
        />
        </div>
        <div v-if="OurClients.length > 0" class="grid md:grid-cols-7 grid-cols-2 md:gap-[52px] gap-[61px] md:px-[120px] md:*:py-[80px]">
          <div
            v-for=" (client, index) in OurClients"
            :key="index"
            class="flex items-center justify-center"
          >
           <div class="relative w-[120px] h-[80px]">
            <NuxtImg
              :src="client.image"
              alt="client"
              class="absolute inset-0 w-full h-full object-contain"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import IntroSection from '../main-component/IntroCenterSection.vue';

interface OurClients {
  image: string;
}

export default {
  components: { IntroSection},
  props: {
    labelSection: {
      type: String,
      default: 'Partners in Growth',
    },
    titleSection: {
      type: String,
      default: 'Proud to Support Our Valued Clients',
    },
    OurClients: {
      type: Array  as PropType<OurClients[]>,
        default: () => [],
    }
  },
};
</script>
