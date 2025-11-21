<template>
    <section>
    <div>
      <HeaderOfSections 
        :labelSection="'Have a Question?'" 
        :titleSection="'Frequently Asked Questions'"
        :subtitleSection="`Get clear answers to common questions about our programs and services. If you need more info, contact our team—we're here to help!`" 
        :breadcrumbSection="[
          { name: 'Home', to: '/' },
          { name: 'FAQs', to: '/faqs' },]"
        :maxWidthofSubHeader="690"
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
