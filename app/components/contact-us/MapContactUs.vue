<template>
  <section>
    <MapSection
  :showContacts="true"
  height="724px"
  :contactItems="[
    { icon: 'Envelope', text: 'info@thetraining-hub.com' },
    { icon: 'Phone', text: '0222907369 .0222907369 .0222907369' },
    { icon: 'MapMark', text: 'Egypt Office:22 Al Shahid Mohammed Qenaya Almaza , Cairo ,Egypt <span class=text-primary-20>Get Direction</span>' },
    { icon: 'MapMark', text: 'KSA Office:2599 Unit 9 - South Ring Road- Riyadh-Saudi Arabia <span class=text-primary-20>Get Direction</span>' },
  ]"
/>

  </section>
</template>

<script>
import MapSection from "../main-section/MapSection.vue";

export default {
  components: {
    MapSection,
  },

};
</script>