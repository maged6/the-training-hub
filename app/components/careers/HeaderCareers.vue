<template>
    <section>
    <div>
      <HeaderOfSections 
        :labelSection="'Join Us'" 
        :titleSection="'Careers'"
        :subtitleSection="'Join The Training Hub and be part of a passionate team dedicated to empowering professionals and shaping future leaders.'" 
        :breadcrumbSection="[
          { name: 'Home', to: '/' },
          { name: 'Careers', to: '/careers' },]"
        :maxWidthofSubHeader="668"
         />
    </div>
  </section>
</template>


<script lang="ts">
import HeaderOfSections from '~/components/main-component/HeaderOfSections.vue'

export default {
  components: {
    HeaderOfSections,
  },
}
</script>
