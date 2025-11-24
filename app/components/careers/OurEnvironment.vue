<template>
  <section>
    <div>
     <MainCareersSection
        title="Our Environment"
        subTitle="We foster a workplace that values collaboration..."
        :sectionList="[
          'Growth-Oriented',
          'Inclusive & Supportive',
          'Innovative Spirit',
          'Purpose-Driven'
        ]"
        images="/images/layout-hero.jpg"
      />
    </div>
  </section>
</template>


<script lang="ts">
import MainCareersSection from '~/components/main-section/MainCareersSection.vue'

export default {
  components: {
    MainCareersSection,
  },
}
</script>
