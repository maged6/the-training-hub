<template>
  <!-- //// breadcrumb  -->
    <nav class="flex py-5" aria-label="Breadcrumb">
      <ol
        class="flex items-center flex-wrap gap-[8px]"
      >
        <li
          class="flex items-center cursor-pointer text-nowrap"
          v-for="(items, index) in breadcrumbArray"
          :key="index"
        >
          <NuxtLink
            :to="items.to"
            class="flex items-center font-[100] hover:text-black mx-1"
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
