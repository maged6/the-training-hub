<template>
    <ExperientialLearning />
    <VideoSection />
    <WhyExperiential />
    <HowItWorks />
</template>

<script>
import ExperientialLearning from "~/components/experiential-learning/ExperientialLearning.vue";
import VideoSection from '~/components/main-section/VideoSection.vue';
import WhyExperiential from "~/components/experiential-learning/WhyExperiential.vue";
import HowItWorks from "~/components/experiential-learning/HowItWorks.vue";

export default {
  components: {
    ExperientialLearning,
    VideoSection,
    WhyExperiential,
    HowItWorks,
  },

};
</script>
