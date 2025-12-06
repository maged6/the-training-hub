<template>
  <section class="bg-tertiary-gray-5 md:p-[60px] px-[16px] py-[60px]">
    <div class="flex justify-between items-center">   

      <!-- Replace old buttons here -->
      <FiltersGroup
        :filters="filters"
        :selectedFilter="selectedFilter"
        @update:selectedFilter="selectedFilter = $event"
      />

    </div>

    <div class="flex flex-wrap gap-[32px]">
      <div
        class="max-w-[680px] bg-white rounded-[16px]"
        v-for="(prog, index) in filteredPrograms"
        :key="index"
      >
        <TrainingCard />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import FiltersGroup from "~/components/main-component/FiltersGroup.vue";
import TrainingCard from "~/components/cards/TrainingCard.vue";

export default {
  components: { FiltersGroup, TrainingCard },

  data() {
    return {
      filters: [
        { label: "All Programs", value: "all" },
        { label: "Soft Skills", value: "soft-skills" },
        { label: "Human Resources", value: "hr" },
        { label: "Supply Chain", value: "supply-chain" },
        { label: "Finance", value: "finance" },
        { label: "Sales & Customer Services", value: "sales" },
        { label: "Marketing", value: "marketing" },
        { label: "Management", value: "management" },
        { label: "Technical", value: "technical" },
      ],
      selectedFilter: "all",

      programs: [
        { id: 1, title: "Compensation", category: "soft-skills" },
        { id: 2, title: "HR Management Essentials", category: "hr" },
        { id: 3, title: "HR Management Essentials", category: "hr" },
        { id: 4, title: "HR Management Essentials", category: "hr" },
      ],
    };
  },

  computed: {
    filteredPrograms() {
      if (this.selectedFilter === "all") return this.programs;
      return this.programs.filter(
        p => p.category === this.selectedFilter
      );
    },
  },
};
</script>
