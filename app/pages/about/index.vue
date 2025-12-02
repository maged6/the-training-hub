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
import ClientStories from '~/components/main-section/ClientStories.vue';


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

  setup() {
    const generalStore = useGeneralStore();

    onBeforeMount(async () => {
      if (!generalStore.about || generalStore.about.length === 0) {
        await generalStore.fetchAboutData();
      }
    });

    const generalData = computed(() => generalStore.about);
    const successStoriesData = computed(() => generalStore.successStories);

    console.log('successStoriesData.value',successStoriesData.value);
    console.log( 'generalData.value',generalData.value);

    return { generalData, successStoriesData };
  },

}
</script>
