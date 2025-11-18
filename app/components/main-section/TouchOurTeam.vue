<template>
  <div    
  class="relative w-full p-[149px] flex justify-center items-center bg-cover bg-center"
      style="background-image: url('/images/footer.jpg')">
          <div class="absolute inset-0 bg-black opacity-70"></div>
<div class="relative z-10">
    <IntroCenterSection
      :labelSection="'Let’s Tallk'"
      :labelBackgroundColor="'bg-secondary-10'"
      :maxWidthofHeader="544"
      :headerColor="'white'"
      :labelColor="'black'"
      :titleSection="'Get in Touch with Our Team'"
      :subtitleSection="'Have a question or need help picking the right program? Our team is ready to guide you, reach out now'"
      :hasBtn="true"
      :subtitleColor="'gray-300'"
      :buttonTitle="'Contact Us'"
      :maxWidthofSubHeader="550"
    />
    </div>
  </div>
</template>

<script lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'

export default {
  components: { IntroCenterSection },
}
</script>
