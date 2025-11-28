<template>
  <HeaderSingleJob />
  <ContainerSingleJob />
  <TouchOurTeam />

</template>

<script lang="ts">
import HeaderSingleJob from '~/components/careers/HeaderSingleJob.vue'
import ContainerSingleJob from '~/components/careers/ContainerSingleJob.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderSingleJob,
    ContainerSingleJob,
    TouchOurTeam
  },
}
</script>
