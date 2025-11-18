<template>
  <section>
    <div>
      <HeaderOfSections 
      :labelSection="'Services'" 
      :titleSection="'Consultation'"
        :subtitleSection="'Your Partner in Organizational Transformation.'" 
        :breadcrumbSection="breadcrumbSection"
        :maxWidthofSubHeader="602"
         />
    </div>
   
    <div>
      <MainServicesSection 
        :title="'Strategic Guidance That Drives Change'"
        :subTitle="'At The Training Hub, our consultation services go beyond advice—we become your collaborators in building stronger organizations. Whether you’re navigating culture change, performance challenges, or organizational alignment, our consultants bring deep industry experience and a practical focus to deliver lasting results.'"
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
        { name: 'Consultation', to: '/services/consultation' },
      ]
    };
  },

}
</script>
