<template>
  <HeaderVideos />
  <ContainerVideos />
  <TouchOurTeam />

</template>

<script lang="ts">
import HeaderVideos from '~/components/media-center-videos/HeaderVideos.vue'
import ContainerVideos from '~/components/media-center-videos/ContainerVideos.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderVideos,
    ContainerVideos,
    TouchOurTeam
  },
}
</script>
