<template>
  <HeroContactUs />
  <MapContactUs />
</template>

<script lang="ts">
import HeroContactUs from '~/components/contact-us/HeroContactUs.vue'
import MapContactUs from '~/components/contact-us/MapContactUs.vue'

export default {
  components: {
    HeroContactUs,
    MapContactUs,
  },
}
</script>
