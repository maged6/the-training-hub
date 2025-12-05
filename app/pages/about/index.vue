<template>
  <InfoAboutUs
    :labelSection="generalData?.hero?.label"
    :titleSection="generalData?.hero?.title"
    :subtitleSection="generalData?.hero?.description"
    :firstImage="generalData?.hero?.first_image?.url"
    :secondImage="generalData?.hero?.second_image"
  />
  <VideoSection :videoScr="generalData?.video_section?.video" />
  <AboutNumbers :AboutNumber="generalData?.video_section?.numbers" />
  <OurVisionAndMission
    :labelSection="generalData?.mission_vision_section?.vision_label"
    :subtitleSection="generalData?.mission_vision_section?.vision_description"
    :labelSection2="generalData?.mission_vision_section?.mission_label"
    :subtitleSection2="generalData?.mission_vision_section?.mission_description"
    :imageSection="generalData?.mission_vision_section?.mission_vision_image"
  />
  <OurCommitment
    :labelSection="generalData?.values_section?.values_label"
    :titleSection="generalData?.values_section?.values_title"
    :commitmentItems="generalData?.values_section?.values"
  />
  <ClientStories
    :labelSection="successStoriesData?.title"
    :userSection="successStoriesData?.stories"
  />
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

    const generalData = computed(() => generalStore.about.data);
    const successStoriesData = computed(() => generalStore.successStories);

    return { generalData, successStoriesData };
  },

}
</script>
