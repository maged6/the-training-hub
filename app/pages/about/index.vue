<template>
  <InfoAboutUs />
  <VideoSection />
  <AboutNumbers />
  <OurVisionAndMission />
  <OurCommitment />
  <ClientStories />
  <TouchOurTeam />
</template>

<script>
import { useGeneralStore } from '~/stores/general'

import InfoAboutUs from '~/components/about-us/InfoAboutUs.vue';
import VideoSection from '~/components/main-section/VideoSection.vue';
import AboutNumbers from '~/components/about-us/AboutNumbers.vue';
import OurVisionAndMission from '~/components/about-us/OurVisionAndMission.vue';
import OurCommitment from '~/components/about-us/OurCommitment.vue';
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

import ClientStories from '~/components/home/ClientStories.vue';
export default{
  components: {
    InfoAboutUs,
    VideoSection,
    AboutNumbers,
    OurVisionAndMission,
    OurCommitment,
    ClientStories,
    TouchOurTeam
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
