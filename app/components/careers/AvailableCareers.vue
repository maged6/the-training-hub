<template>
  <section class="bg-tertiary-gray-5 p-[60px]">
    <div class="bg-white rounded-[20px] p-[60px]">
      <h3 class="text-primary-10 font-[900] text-[32px] mb-[44px]">
        Available Careers
      </h3>
      <div class="flex gap-[44px] justify-between items-center">
        <div class="w-full">
          <FloatingSelect
            v-model="selectedCountry"
            label="Country"
            :items="[
                { label: 'UAE', value: 'uae' },
                { label: 'Saudi Arabia', value: 'sa' },
                { label: 'Egypt', value: 'eg' }
            ]"
          />
        </div>
        <div class="w-full">
          <FloatingSelect
            v-model="selectedCountry"
            label="Country"
            :items="[
                { label: 'UAE', value: 'uae' },
                { label: 'Saudi Arabia', value: 'sa' },
                { label: 'Egypt', value: 'eg' }
            ]"
          />
        </div>
        <div class="w-full">
          <FloatingSelect
            v-model="selectedCountry"
            label="Country"
            :items="[
                { label: 'UAE', value: 'uae' },
                { label: 'Saudi Arabia', value: 'sa' },
                { label: 'Egypt', value: 'eg' }
            ]"
          />
        </div>
      </div>

      <div>
        <div
          v-for="(job, index) in jobs"
          :key="index"
          class="flex items-center justify-between py-6 border-b border-gray-200"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        >
          <div class="flex gap-[16px]">
            <div><Briefcase2 /></div>
            <div>
            <h3 class="font-bold text-[18px]">{{ job.title }}</h3>
            <div class="flex items-center gap-4 text-sm text-gray-500 mt-1">
              <span class="flex gap-[4px] items-center"> <MapAlt colorIcon="#7B7B7B" />  {{ job.location }}</span>
              <span class="flex gap-[4px] items-center"> <ClockAlt colorIcon="#7B7B7B"/> {{ job.type }}</span>
            </div>
            </div>
          </div>

          <ArrowRightTop
            :colorIcon="'white'"
            :backgroundColorIcon="'#B22726'"
            :isHovered="hoveredIndex === index"
            :width="'42'"
            :height="'42'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import MainCareersSection from '~/components/main-section/MainCareersSection.vue'
import FloatingSelect from '~/components/inputs/FloatingSelected.vue'
import ArrowRightTop from '@/components/svg/ArrowRightTopBtn.vue'
import Briefcase2 from '@/components/svg/Briefcase2.vue'
import MapAlt from '@/components/svg/MapAlt.vue'
import ClockAlt from '@/components/svg/ClockAlt.vue'

export default {
  components: {
    MainCareersSection,
    FloatingSelect,
    ArrowRightTop,
    Briefcase2,
    MapAlt,
    ClockAlt
  },
data() {
  return {
    selectedCountry: null as string | null,
    hoveredIndex: null as number | null,
    jobs: [
      {
        title: "Sales Supervisor",
        location: "Sheraton, Cairo",
        type: "Full Time",
      },
      {
        title: "Sales Supervisor",
        location: "Sheraton, Cairo",
        type: "Full Time",
      },
      {
        title: "Paython Developer",
        location: "Sheraton, Cairo",
        type: "Full Time",
      },
      {
        title: "Learning & Development Specialist",
        location: "Sheraton, Cairo",
        type: "Full Time",
      },
      {
        title: "Sales Account Manager",
        location: "Sheraton, Cairo",
        type: "Full Time",
      },
      {
        title: "Logistics Coordinator",
        location: "Sheraton, Cairo",
        type: "Full Time",
      },
    ]
  }
}
}
</script>
