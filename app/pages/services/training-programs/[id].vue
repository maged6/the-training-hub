
<template>
  <MainSingleTraining
  />
  <SecoundSingleTraining /> 
</template>

<script>
import MainSingleTraining from "~/components/services-training-list/MainSingleTraining.vue";
import SecoundSingleTraining from "~/components/services-training-list/SecoundSingleTraining.vue";

export default {
  components: {
    MainSingleTraining,
    SecoundSingleTraining,
  },
};
</script>
