<template>
  <HeroSection />
  <ExploreSection />
  <OverviewSection />
  <RangeServicesSection/>
  <LearningAndCollaborationSection />
  <OurNewsSection /> 
  <SupportClientsSection />
  <ClientStories />
  <FrequentlyQuestions/>
  <RequestTeam />
</template>

<script>
import { useGeneralStore } from '~/stores/general'


import HeroSection from '~/components/home/HeroSection.vue';
import ExploreSection from '~/components/home/ExploreSection.vue';
import OverviewSection from '~/components/home/OverviewSection.vue';
import RangeServicesSection from '~/components/home/RangeServicesSection.vue';
import LearningAndCollaborationSection from '~/components/home/LearningAndCollaborationSection.vue';
import OurNewsSection from '~/components/home/OurNewsSection.vue';
import SupportClientsSection from '~/components/home/SupportClientsSection.vue';
import ClientStories from '~/components/home/ClientStories.vue';
import FrequentlyQuestions from '~/components/home/FrequentlyQuestions.vue';
import RequestTeam from '~/components/home/RequestTeam.vue';

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
    FrequentlyQuestions,
    RequestTeam
  },

  mounted() {
    const generalStore = useGeneralStore()

    if (!generalStore.home) {
      generalStore.fetchHomeData()
    }

    console.log('Home data:', generalStore.home)
  },

}
</script>