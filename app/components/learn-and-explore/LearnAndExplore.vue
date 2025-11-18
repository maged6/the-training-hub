<template>
  <section>
    <div>
      <HeaderOfSections 
      :labelSection="'Services'" 
      :titleSection="'Learn & Explore Egypt'"
        :subtitleSection="'Earn Recognized International Certifications'" 
        :breadcrumbSection="breadcrumbSection"
        :maxWidthofSubHeader="602"
         />
    </div>
   
    <div>
      <MainServicesSection 
        :title="'Learning Journeys Across Egypt'"
        :subTitle="'Our program is designed for international participants and local professionals who want to gain new skills while experiencing Egypt’s rich heritage. We combine tailored training sessions with guided cultural tours, giving you the best of both worlds—personal growth and unforgettable memories.'"
        :images="'images/layout-hero.jpg'"
      />
    </div>
  </section>
</template>

<script lang="ts">
import HeaderOfSections from '../main/HeaderOfSections.vue';
import MainServicesSection from '../main/MainServicesSection.vue';

export default {
  components: {
    HeaderOfSections,
    MainServicesSection
  },
  props: {

  },
  data() {
    return {
      breadcrumbSection: [
        { name: 'Home', to: '/' },
        { name: 'Learn & Explore Egypt', to: '/services/learn-explore-egypt' },
      ]
    };
  },

}
</script>
