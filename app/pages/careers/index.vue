<template>
  <HeaderCareers />
  <OurEnvironment/>
  <AvailableCareers />
  <TouchOurTeam />
</template>

<script lang="ts">
import HeaderCareers from '~/components/careers/HeaderCareers.vue'
import OurEnvironment from '~/components/careers/OurEnvironment.vue'
import AvailableCareers from '~/components/careers/AvailableCareers.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderCareers,
    OurEnvironment,
    AvailableCareers,
    TouchOurTeam
  },
}
</script>
