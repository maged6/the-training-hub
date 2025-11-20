<template>
   <MainSection
    :labelSection="'Services'"
    :title="'Experiential Learning'"
    :subtitle="'Hands-on programs that transform theory into action through immersive activities.'"
    :breadcrumbSection="[
        { name: 'Home', to: '/' },
        { name: 'Experiential Learning', to: '/services/experiential-learning' },
      ]"
    :maxWidthofSubHeader="620"
    :tileSection="'Transform Your Skills Through Experience'"
    :subTitleSection="'“At The Training Hub, we believe that real learning happens when you do, not just observe. Inspired by the wisdom, ‘I hear and I forget. I see and I remember. I do and I understand,’ our experiential learning programs bring learning to life—engaging participants in hands-on, immersive activities that drive deeper understanding and lasting transformation.”'"
    :imgSection="'images/layout-hero.jpg'"
  />


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
  <TestimonialsSection 
    :lableSection="'Gallery'"
    :titleSection="'Moments That Inspire'"
  />
  <FrequentlyQuestions />
</template>

<script>
import MainSection from "~/components/main-section/MainSection.vue";
import VideoSection from '~/components/main-section/VideoSection.vue';
import WhyExperiential from "~/components/main-section/ImgAndBenefitsCard.vue";
import HowItWorks from "~/components/experiential-learning/HowItWorks.vue";
import OurPrograms from "~/components/experiential-learning/OurPrograms.vue";
import TestimonialsSection from "~/components/main-section/TestimonialsSection.vue";
import FrequentlyQuestions from "~/components/main-section/FrequentlyQuestions.vue";


export default {
  components: {
    MainSection,
    VideoSection,
    WhyExperiential,
    HowItWorks,
    OurPrograms,
    TestimonialsSection,
    FrequentlyQuestions
  },

};
</script>
