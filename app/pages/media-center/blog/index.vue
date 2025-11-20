<template>
  <HeaderBlogs />
  <ContainerBlogs />
  <TouchOurTeam />
</template>

<script lang="ts">
import HeaderBlogs from '~/components/blogs/HeaderBlogs.vue'
import ContainerBlogs from '~/components/blogs/ContainerBlogs.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    HeaderBlogs,
    ContainerBlogs,
    TouchOurTeam
  },
}
</script>
