<template>
  <MainSection
    :labelSection="'Services'"
    :title="'Our Training Programs'"
    :breadcrumbSection=" [
        { name: 'Home', to: '/' },
        { name: 'Training Programs', to: '/services/training-programs' },
      ]"
    :maxWidthofSubHeader="602"
    :hasServicesSection="false"
  />

  <TrainingList />
  <TouchOurTeam />

</template>

<script>
import MainSection from "~/components/main-section/MainSection.vue";
import TrainingList from "~/components/services-training-list/TrainingList.vue";
import TouchOurTeam from "~/components/main-section/TouchOurTeam.vue";

export default {
  components: {
    MainSection,
    TrainingList,
    TouchOurTeam
  },
};
</script>
