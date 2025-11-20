<template>
    <section>
    <div>
      <HeaderOfSections 
        :labelSection="'Stay Updated'" 
        :titleSection="'Media Center'"
        :subtitleSection="'Explore the latest updates from The Training Hub—news, success stories, event highlights, and insights that showcase our programs in action.'" 
        :breadcrumbSection="[
          { name: 'Home', to: '/' },
          { name: 'Media Center', to: '/media-center/blog' },]"
        :maxWidthofSubHeader="680"
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
