<template>
  <section>
    <div>
      <HeaderOfSections 
      :labelSection="'Services'" 
      :titleSection="'Business Simulation'"
        :subtitleSection="'Practice. Compete. Succeed.'" 
        :breadcrumbSection="breadcrumbSection"
        :maxWidthofSubHeader="602"
         />
    </div>
   
    <div>
      <MainServicesSection 
        :title="'Transform Learning into Real-World Action'"
        :subTitle="'Business simulation is an interactive, game-based learning approach that replicates real market dynamics. It allows professionals and teams to apply theory to practical challenges—managing budgets, leading teams, analyzing competitors, and making high-stakes choices that drive measurable outcomes.'"
        :images="'images/layout-hero.jpg'"
      />
    </div>
  </section>
</template>

<script lang="ts">
import HeaderOfSections from '../main-component/HeaderOfSections.vue';
import MainServicesSection from '../main-component/MainServicesSection.vue';

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
        { name: 'Business Simulation', to: '/services/business-simulation' },
      ]
    };
  },

}
</script>
