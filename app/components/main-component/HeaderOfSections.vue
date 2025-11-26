<template>
  <div class="flex flex-col justify-center items-center bg-primary-20 py-[60px]">
    <!-- /// lable   -->
    <div v-if="labelSection" class="rounded w-fit px-1 rotate-[-5deg] mb-2 bg-secondary-10">
      <span class="font-[700] md:text-[14px]" :class="`text-primary-10`">
        {{ labelSection }}
      </span>
    </div>
 
    <BreadcrumbComponent :breadcrumbArray="breadcrumbSection"/>
    <!-- //// title  -->

    <h1 class="text-center text-white font-[900] md:text-[58px] w-full" v-if="titleSection">
      {{ titleSection }}
    </h1>
    <!-- //// sub title  -->

    <div :style="{ maxWidth: maxWidthofSubHeader + 'px' }" class="px-6">
      <p class="font-[100] text-[20px] text-gray-200 py-[16px] text-center" v-if="subtitleSection">
        {{ subtitleSection }}
      </p>
    </div>

  </div>
</template>

<script lang="ts">

import { defineComponent, type PropType } from 'vue'
import type { Breadcrumb } from "~/types/breadcrumb";
import BreadcrumbComponent from "../breadcrumb/Breadcrumb.vue";
import ChevronRight from '../svg/ChevronRight.vue'

export default defineComponent({
  components: {
    ChevronRight,
    BreadcrumbComponent,
  },
  props: {
    labelSection: {
      type: String,
      default: '',
    },
    breadcrumbSection: {
      type: Array as PropType<Breadcrumb[]>,
      default: () => [
        { name: 'Home', to: '/' },
      ],
    },
    titleSection: {
      type: String,
      default: '',
    },
    subtitleSection: {
      type: String,
      default: '',
    },
    maxWidthofSubHeader: {
      type: Number,
      default: 600,
    },
  },
})
</script>
