<template>
  <section>
    <div class="bg-primary-10 py-[40px] px-[60px]">
      <div class="w-full h-full bg-white rounded-[32px]">
        <IntroSection
          :labelSection="labelSection"
          :titleSection="titleSection"
          :hasBtn="false"
        />
        <div class="grid grid-cols-7 gap-[52px]  px-[120px] py-[80px]">
          <div
            v-for=" (client, index) in OurClients"
            :key="index"
            class="w-full h-full max-w-[120px] max-h-[80px] "
          >
            <NuxtImg
              :src="client"
              alt="client"
              sizes="(max-width: 120px) 60px, 120px"
              class="container w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main/IntroCenterSection.vue';

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
      type: Array as () => string[],
        default: () => [
                '/images/client-logo.png',
                '/images/client-logo-2.png',
                '/images/client-logo.png',
                '/images/client-logo-2.png',
                '/images/client-logo-2.png',
                '/images/client-logo-2.png',
                '/images/client-logo.png',
                '/images/client-logo-2.png',
                '/images/client-logo.png',
              ],
    }
  },
};
</script>
