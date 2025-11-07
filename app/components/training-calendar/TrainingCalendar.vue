<template>
  <section>
    <div>
      <HeaderOfSections :labelSection="'Explore'" :titleSection="'Training Calendar'"
        :subtitleSection="'Stay up to date with our upcoming sessions'" :breadcrumbSection="breadcrumbSection" />
    </div>

    <div>
      <CalendarPerMonth />
    </div>
  </section>
</template>

<script lang="ts">
import HeaderOfSections from '../main/HeaderOfSections.vue';
import CalendarPerMonth from './CalendarPerMonth.vue';

export default {
  components: {
    HeaderOfSections,
    CalendarPerMonth
  },
  props: {

  },
  data() {
    return {
      breadcrumbSection: [
        { name: 'Home', to: '/' },
        { name: 'Training Calendar', to: '/training-calendar' },
      ]
    };
  },

}
</script>
