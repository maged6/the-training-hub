<template>
  <InfoAboutUs />
  <AboutVideo />
  <AboutNumbers />
  <OurVisionAndMission />
  <OurCommitment />
 <ClientStories />
</template>

<script>
import { useGeneralStore } from '~/stores/general'

import InfoAboutUs from '~/components/about-us/InfoAboutUs.vue';
import AboutVideo from '~/components/about-us/AboutVideo.vue';
import AboutNumbers from '~/components/about-us/AboutNumbers.vue';
import OurVisionAndMission from '~/components/about-us/OurVisionAndMission.vue';
import OurCommitment from '~/components/about-us/OurCommitment.vue';

import ClientStories from '~/components/home/ClientStories.vue';
export default{
  components: {
    InfoAboutUs,
    AboutVideo,
    AboutNumbers,
    OurVisionAndMission,
    OurCommitment,
    ClientStories
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