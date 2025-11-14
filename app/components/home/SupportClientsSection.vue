<template>
  <section>
    <div class="bg-primary-10 py-[40px] px-[60px]">
      <div class="w-full h-full bg-white rounded-[32px]">
        <IntroSection
          :labelSection="labelSection"
          :titleSection="titleSection"
          :hasBtn="false"
        />
        <div v-if="OurClients.length > 0" class="grid grid-cols-7 gap-[52px]  px-[120px] py-[80px]">
      
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
import IntroSection from '../main/IntroCenterSection.vue';

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
