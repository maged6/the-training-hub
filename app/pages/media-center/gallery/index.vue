<template>
  <HeaderGallery />
  <ContainerGallery />
  <TouchOurTeam />
</template>

<script lang="ts">
import HeaderGallery from '~/components/media-center-gallery/HeaderGallery.vue'
import ContainerGallery from '~/components/media-center-gallery/ContainerGallery.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderGallery,
    ContainerGallery,
    TouchOurTeam
  },
}
</script>
