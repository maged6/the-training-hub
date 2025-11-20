<template>
  <HubFacilities />
  <HubMap />
   <TestimonialsSection 
    :lableSection="'Gallery'"
    :titleSection="'Our Training Rooms'"
  />
    <TouchOurTeam />

</template>

<script>
import HubFacilities from '~/components/hub-facilities/HubFacilities.vue';
import HubMap from '~/components/hub-facilities/HubMap.vue';
import TestimonialsSection from "~/components/main-section/TestimonialsSection.vue";
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default{
  components: {
    HubFacilities,
    HubMap,
    TestimonialsSection,
    TouchOurTeam
  },
}
</script>