<template>
  <section>
    <div>
      <HeaderOfSections 
      :labelSection="labelSection" 
      :titleSection="title"
        :subtitleSection="subtitle" 
        :breadcrumbSection="breadcrumbSection"
        :maxWidthofSubHeader="maxWidthofSubHeader"
         />
    </div>
   
    <div v-if="hasServicesSection">
      <MainServicesSection 
        :title="tileSection"
        :subTitle="subTitleSection"
        :textButton="textBtnSection"
        :images="imgSection"
      />
    </div>
  </section>
</template>

<script lang="ts">
import HeaderOfSections from '../main-component/HeaderOfSections.vue';
import MainServicesSection from './MainServicesSection.vue';
import type { PropType } from 'vue'
import type { Breadcrumb } from "~/types/breadcrumb";

export default {
  components: {
    HeaderOfSections,
    MainServicesSection
  },
  props: {
    labelSection: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    maxWidthofSubHeader: {
      type: Number,
      default: 602,
    },
    breadcrumbSection: {
      type: Array as PropType<Breadcrumb[]>,
      default: '',
    },
    tileSection: {
      type: String,
      default: '',
    },
    subTitleSection: {
      type: String,
      default: '',
    },
    textBtnSection: {
      type: String,
      default: '',
    },
    imgSection: {
      type: String,
      default: '',
    },
    hasServicesSection: {
      type: Boolean,
      default: true
    }
  },

}
</script>
