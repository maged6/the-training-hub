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
      <MainServicesSection 
        :title="'Learn at Your Pace. Succeed on Your Terms.'"
        :subTitle="'Whether you’re upskilling for a promotion, exploring new fields, or supporting your team’s development, our E-Learning solutions deliver the same high standards as our in-person training—accessible anytime on desktop or mobile.'"
        :textButton="'Know More'"
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
        { name: 'E-Learning', to: '/services/e-learning' },
      ]
    };
  },

}
</script>
