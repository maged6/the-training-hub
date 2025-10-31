<template>
  <HeroSection />
  <ExploreSection />
  <OverviewSection />
  <RangeServicesSection/>
  <LearningAndCollaborationSection />
  <OurNewsSection /> 
</template>

<script>
import HeroSection from '~/components/home/HeroSection.vue';
import ExploreSection from '~/components/home/ExploreSection.vue';
import OverviewSection from '~/components/home/OverviewSection.vue';
import RangeServicesSection from '~/components/home/RangeServicesSection.vue';
import LearningAndCollaborationSection from '~/components/home/LearningAndCollaborationSection.vue';
import OurNewsSection from '~/components/home/OurNewsSection.vue';

export default{
  components: {
    HeroSection,
    ExploreSection,
    OverviewSection,
    RangeServicesSection,
    LearningAndCollaborationSection,
    OurNewsSection,
  },
}
</script>
