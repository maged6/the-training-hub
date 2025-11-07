<template>
  <div class="flex flex-col justify-center items-center bg-primary-20 py-[60px]">
    <!-- /// lable   -->
    <div v-if="labelSection" class="rounded w-fit px-1 rotate-[-5deg] mb-2 bg-secondary-10">
      <span class="font-[700] md:text-[14px]" :class="`text-primary-10`">
        {{ labelSection }}
      </span>
    </div>
    <!-- //// breadcrumb  -->

    <nav class="flex pt-5" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center cursor-pointer" v-for="(items, index) in breadcrumbSection" :key="index">
          <NuxtLink :to="items.to"
            class="inline-flex items-center text-lg font-[100] text-gray-200 hover:text-gray-600 mx-1">
            {{ items.name }}
          </NuxtLink>
          <ChevronRight v-if="index !== breadcrumbSection.length - 1" :colorIcon="'#CFD1D2'" />
        </li>
      </ol>
    </nav>
    <!-- //// title  -->
    <h1 class="text-center text-white font-[900] md:text-[58px] w-full" v-if="titleSection">
      {{ titleSection }}
    </h1>
    <!-- //// sub title  -->

    <div :style="{ maxWidth: maxWidthofSubHeader + 'px' }">
      <p class="font-[100] text-[20px] text-gray-200 py-[16px]" v-if="subtitleSection">
        {{ subtitleSection }}
      </p>
    </div>

  </div>
</template>

<script lang="ts">

import { defineComponent, type PropType } from 'vue'
import ChevronRight from '../svg/ChevronRight.vue'

interface Breadcrumb {
  name: string
  to: string
}

export default defineComponent({
  components: {
    ChevronRight,
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
