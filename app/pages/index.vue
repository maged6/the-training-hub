<template>
  <HeroSection />
  <ExploreSection />
  <OverviewSection />
  <RangeServicesSection
    :labelSection="labelSection"
    :titleSection="titleSection"
    :subtitleSection="subtitleSection"
    :ServicesCard="ServicesCard"
  />
</template>

<script>
import HeroSection from '~/components/home/HeroSection.vue';
import ExploreSection from '~/components/home/ExploreSection.vue';
import OverviewSection from '~/components/home/OverviewSection.vue';
import RangeServicesSection from '~/components/home/RangeServicesSection.vue';

export default{
  components: {
    HeroSection,
    ExploreSection,
    OverviewSection,
    RangeServicesSection
  },
  data() {
    return {
       labelSection:'Beyond Training Programs' ,
    titleSection:'Discover Our Full Range of Services',
    subtitleSection:  'Discover flexible e-learning, immersive experiential learning, expert consultation, cultural journeys, and engaging business simulations—all designed to drive growth and real-world impact.',
    ServicesCard: [
      {
        cardImg: '/images/image-service.png',
        cardTitle: 'E - Learning',
        cardSubtitle: 'Learn anytime, anywhdesigned for busy professionals seeking flexible, self-paced growth. ',
        cardButton: 'Explore'},
            {
        cardImg: '/images/image-service.png',
        cardTitle: 'Training Programs',
        cardSubtitle: 'Learn anytime, anywhere with interactive online coursble, self-paced growth. ',
        cardButton: 'Explore'},
            {
        cardImg: '/images/image-service.png',
        cardTitle: 'Experiential Learning',
        cardSubtitle: 'Learn anytime, anywhere with interactive online courses d ',
        cardButton: 'Explore'}
    ] ,
    };
  },
}
</script>
