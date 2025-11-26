<template>
  <!-- //// breadcrumb  -->
    <nav class="flex pt-5" aria-label="Breadcrumb">
      <ol
        class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
      >
        <li
          class="inline-flex items-center cursor-pointer"
          v-for="(items, index) in breadcrumbArray"
          :key="index"
        >
          <NuxtLink
            :to="items.to"
            class="inline-flex items-center font-[100] hover:text-black mx-1"
            :class="`text-[${fontSize}px] text-${textColor} `"
          >
            {{ items.name }}
          </NuxtLink>
          <ChevronRight
            v-if="index !== breadcrumbArray.length - 1"
            :colorIcon="'#CFD1D2'"
          />
        </li>
      </ol>
    </nav>
</template>

<script lang="ts">

import { defineComponent, type PropType } from 'vue'
import type { Breadcrumb } from "~/types/breadcrumb";
import ChevronRight from '../svg/ChevronRight.vue'

export default defineComponent({
  components: {
    ChevronRight,
  },
  props: {
    breadcrumbArray: {
      type: Array as PropType<Breadcrumb[]>,
      default: () => [
        { name: 'Home', to: '/' },
      ],
    },
    fontSize: {
      type: Number,
      default: 16,
    },
    textColor: {
      type: String,
      default: 'gray-200',
    },
  },
})
</script>
