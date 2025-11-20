<template>
    <ExperientialLearning />
    <VideoSection />
    <WhyExperiential />
    <HowItWorks />
    <OurPrograms />
    <MomentsThatInspire />
    <FrequentlyQuestions />
</template>

<script>
import ExperientialLearning from "~/components/experiential-learning/ExperientialLearning.vue";
import VideoSection from '~/components/main-section/VideoSection.vue';
import WhyExperiential from "~/components/experiential-learning/WhyExperiential.vue";
import HowItWorks from "~/components/experiential-learning/HowItWorks.vue";
import OurPrograms from "~/components/experiential-learning/OurPrograms.vue";
import MomentsThatInspire from "~/components/experiential-learning/MomentsThatInspire.vue";
import FrequentlyQuestions from "~/components/main-section/FrequentlyQuestions.vue"; 


export default {
  components: {
    ExperientialLearning,
    VideoSection,
    WhyExperiential,
    HowItWorks,
    OurPrograms,
    MomentsThatInspire,
    FrequentlyQuestions
  },

};
</script>
