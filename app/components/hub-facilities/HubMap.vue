<template>
 <section>
    <HubMapSection
    :showGoogleBtn="true"
    :coords="{ lat: 30.0785, lng: 31.3186 }"
    height="500px"
  />

  </section>
</template>

<script>
import HubMapSection from "../main-section/MapSection.vue";

export default {
  components: {
    HubMapSection,
  },
};
</script>