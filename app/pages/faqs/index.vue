<template>
  <HeaderFAQs />
  <ContainerFAQs />
  <TouchOurTeam />
</template>

<script lang="ts">
import HeaderFAQs from '~/components/frequently-asked-questions/HeaderFAQs.vue'
import ContainerFAQs from '~/components/frequently-asked-questions/ContainerFAQs.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderFAQs,
    ContainerFAQs,
    TouchOurTeam
  },
}
</script>
