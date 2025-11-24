<template>
  <section class="bg-tertiary-gray-5 p-[60px]">
    <div class="flex justify-between items-center">     
       <div class="flex flex-wrap gap-3 mb-8 max-w-[650px]">
        <button
          v-for="filter in filters"
          :key="filter.value"
          @click="selectedFilter = filter.value"
          class="px-4 py-2 rounded-full border text-sm"
          :class="selectedFilter === filter.value ? 'bg-primary-10 text-white' : 'bg-white text-gray-600'"
        >
          {{ filter.label }}
        </button>
      </div>
      </div>

      <div class="flex flex-wrap gap-[32px]">
        <div class="max-w-[680px] bg-white rounded-[16px]" v-for="(prog, index) in programs" :key="index">
          <TrainingCard />
          </div>
      </div>

  </section>
</template>


<script lang="ts">
import TrainingCard from "~/components/cards/TrainingCard.vue";


export default {
  components: {TrainingCard },
  props: { }, 
  data() {
  return {
    filters: [
      { label: 'All Programs', value: 'all' },
      { label: 'Soft Skills', value: 'soft-skills' },
      { label: 'Human Resources', value: 'hr' },
      { label: 'Supply Chain', value: 'supply-chain' },
      { label: 'Finance', value: 'finance' },
      { label: 'Sales & Customer Services', value: 'sales' },
      { label: 'Marketing', value: 'marketing' },
      { label: 'Management', value: 'management' },
      { label: 'Technical', value: 'technical' },
    ],
    selectedFilter: 'all',
    programs: [
      {
        id: 1,
        title: "Compensation, Benefits and Incentives",
        category: "soft-skills",
        price: "8000",
        // other info…
      },
      {
        id: 2,
        title: "HR Management Essentials",
        category: "hr",
      },
         {
        id: 3,
        title: "HR Management Essentials",
        category: "hr",
      },
         {
        id: 4,
        title: "HR Management Essentials",
        category: "hr",
      },
    ],
  }
}
};
</script>