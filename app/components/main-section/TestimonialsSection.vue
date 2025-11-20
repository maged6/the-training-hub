<template>
  <section class=" bg-tertiary-gray-5 py-[80px]">
    <div>
      <IntroCenterSection
      :labelBackgroundColor="'bg-primary-20'"
      :maxWidthofHeader="499"
      :headerColor="'black'"
      :labelColor="'white'"
      :labelSection="lableSection"
      :titleSection="titleSection"
      />
    </div>

    <div class="w-full">
     <TestimonialsCarousel />
    </div>
  </section>
</template>

<script lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import TestimonialsCarousel from '../main-component/TestimonialsCarousel.vue'



export default {
  components: {
    IntroCenterSection,
    TestimonialsCarousel,
  },
  props: {
    lableSection: {
      type: String,
      default: '',
    },
    titleSection: {
      type: String,
      default: '',
    }
  },

}
</script>
