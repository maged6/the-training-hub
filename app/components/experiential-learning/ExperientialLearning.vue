<template>
  <section>
    <div>
      <HeaderOfSections 
      :labelSection="'Services'" 
      :titleSection="'Experiential Learning'"
        :subtitleSection="'Hands-on programs that transform theory into action through immersive activities.'" 
        :breadcrumbSection="breadcrumbSection"
        :maxWidthofSubHeader="620"
         />
    </div>
   
    <div>
      <MainServicesSection 
        :title="'Transform Your Skills Through Experience'"
        :subTitle="'“At The Training Hub, we believe that real learning happens when you do, not just observe. Inspired by the wisdom, ‘I hear and I forget. I see and I remember. I do and I understand,’ our experiential learning programs bring learning to life—engaging participants in hands-on, immersive activities that drive deeper understanding and lasting transformation.”'"
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
        { name: 'Experiential Learning', to: '/services/experiential-learning' },
      ]
    };
  },

}
</script>
