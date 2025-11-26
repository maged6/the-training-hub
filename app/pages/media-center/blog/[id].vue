<template>
  <HeaderSingleBlogs />
  <YouMayAlsoLike />
  <TouchOurTeam />
</template>

<script lang="ts">
import HeaderSingleBlogs from '~/components/media-center-blogs/HeaderSingleBlogs.vue'
import YouMayAlsoLike from '~/components/media-center-blogs/YouMayAlsoLike.vue'
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";



export default {
  components: {
    HeaderSingleBlogs,
    YouMayAlsoLike,
    TouchOurTeam,
  },
}
</script>
