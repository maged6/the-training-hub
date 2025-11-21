<template>
  <HeaderBlogs />
  <ContainerBlogs />
  <TouchOurTeam />
</template>

<script lang="ts">
import HeaderBlogs from '~/components/media-center-blogs/HeaderBlogs.vue'
import ContainerBlogs from '~/components/media-center-blogs/ContainerBlogs.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderBlogs,
    ContainerBlogs,
    TouchOurTeam
  },
}
</script>
