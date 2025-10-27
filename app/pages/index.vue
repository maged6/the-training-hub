<template>
  <HeroSection />
  <ExploreSection />
  <OverviewSection />
</template>

<script>
import HeroSection from '~/components/home/HeroSection.vue';
import ExploreSection from '~/components/home/ExploreSection.vue';
import OverviewSection from '~/components/home/OverviewSection.vue';

export default{
  components: {
    HeroSection,
    ExploreSection,
    OverviewSection
  }
}
</script>
