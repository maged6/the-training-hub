<template>
  <InfoAboutUs />
</template>

<script>
import { useGeneralStore } from '~/stores/general'

import InfoAboutUs from '~/components/about-us/InfoAboutUs.vue';

export default{
  components: {
    InfoAboutUs,
  },

  mounted() {
    const generalStore = useGeneralStore()

    if (!generalStore.about) {
      generalStore.fetchAbout()
    }

    console.log('about data:', generalStore.about)
  },

}
</script>