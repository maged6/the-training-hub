<template>
  <HeroSection />
  <ExploreSection />
  <OverviewSection />
  <RangeServicesSection/>
  <LearningAndCollaborationSection />
  <OurNewsSection /> 
  <SupportClientsSection />
  <ClientStories />
</template>

<script>
import HeroSection from '~/components/home/HeroSection.vue';
import ExploreSection from '~/components/home/ExploreSection.vue';
import OverviewSection from '~/components/home/OverviewSection.vue';
import RangeServicesSection from '~/components/home/RangeServicesSection.vue';
import LearningAndCollaborationSection from '~/components/home/LearningAndCollaborationSection.vue';
import OurNewsSection from '~/components/home/OurNewsSection.vue';
import SupportClientsSection from '~/components/home/SupportClientsSection.vue';
import ClientStories from '~/components/home/ClientStories.vue';




export default{
  components: {
    HeroSection,
    ExploreSection,
    OverviewSection,
    RangeServicesSection,
    LearningAndCollaborationSection,
    OurNewsSection,
    SupportClientsSection,
    ClientStories,
  },
}
</script>
