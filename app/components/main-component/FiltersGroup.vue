<template>
  <div class="flex md:flex-wrap overflow-auto gap-3 mb-8 md:max-w-[650px] no-scrollbar">
    <button
      v-for="filter in filters"
      :key="filter.value"
      @click="$emit('update:selectedFilter', filter.value)"
      class="px-4 py-2 rounded-full border text-sm text-nowrap"
      :class="selectedFilter === filter.value 
        ? 'bg-primary-10 text-white' 
        : 'bg-white text-gray-600'"
    >
      {{ filter.label }}
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    filters: {
      type: Array as () => Array<{ label: string; value: string }>,
      required: true,
    },
    selectedFilter: {
      type: String,
      required: true,
    },
  },
};
</script>