<template>
  <section>
    <div>
      <HeaderOfSections 
      :labelSection="'Services'" 
      :titleSection="'E-Learning Solutions'"
        :subtitleSection="'Flexible online courses you can access anytime, anywhere—learn at your own pace.'" 
        :breadcrumbSection="breadcrumbSection"
        :maxWidthofSubHeader="602"
         />
    </div>
   
    <div>
      <MainServicesSection />
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
        { name: 'E-Learning', to: '/services/e-learning' },
      ]
    };
  },

}
</script>
