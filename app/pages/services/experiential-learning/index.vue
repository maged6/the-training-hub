<template>
  <ExperientialLearning />
  <VideoSection />
  <WhyExperiential
    :LableSection="'Key Features'"
    :TitleSection="'Why Experiential Learning?'"
    :ImageSection="'images/layout-hero.jpg'"
    :BenefitsCardSection="[
          { title: 'Active Engagement', subtitle: 'Participants actively engage with information, testing ideas and applying concepts in real time.' },
          { title: 'Real-World Relevance', subtitle: 'Scenarios mirror actual workplace challenges, making the learning transferable to day-to-day roles.' },
          { title: 'Deep Retention', subtitle: 'Through doing, learners internalize skills more effectively than through lectures alone.'},
          { title: 'Team & Personal Growth', subtitle: 'Encourages collaboration, improves communication, fosters empathy, and accelerates personal insight.' },
        ]"
  />
  <HowItWorks />
  <OurPrograms />
  <MomentsThatInspire />
  <FrequentlyQuestions />
</template>

<script>
import ExperientialLearning from "~/components/experiential-learning/ExperientialLearning.vue";
import VideoSection from '~/components/main-section/VideoSection.vue';
import WhyExperiential from "~/components/main-section/ImgAndBenefitsCard.vue";
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
