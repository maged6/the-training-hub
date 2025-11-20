<template>
  <!-- https://flowbite.com/docs/components/gallery/ -->
  <HeaderGallery />
  <ContainerGallery />
  <TouchOurTeam />
</template>

<script lang="ts">
import HeaderGallery from '~/components/gallery/HeaderGallery.vue'
import ContainerGallery from '~/components/gallery/ContainerGallery.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderGallery,
    ContainerGallery,
    TouchOurTeam
  },
}
</script>
