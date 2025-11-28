<template>
      <section class=" px-[160px] py-[60px]">
        <div class="flex justify-between items-center">
    <div class="flex flex-col">
      <Breadcrumb
        :breadcrumbArray="[
                { name: 'Home', to: '/' },
                { name: 'Careers', to: '/careers' },
                { name: '5 Soft Skills Every Leader Should Master', to: '/careers/{slag}' }]"
        :fontSize="16"
        :textColor="'gray-600'"
      />
      <h1 class="font-[900] text-[42px] max-w-[517px] py-[16px]">
        Sales Supervisor
      </h1>
        <div class="flex gap-[16px]">
            <p class="flex gap-[4px] text-secondary-40 font-[900] text-[14px] items-center">
                <MapAlt :colorIcon="'#7B7B7B'" />
                Sheraton, Cairo
            </p>
            <p class="flex gap-[4px] text-secondary-40 font-[900] text-[14px] items-center">
                <ClockAlt :colorIcon="'#7B7B7B'" />
                Full Time
            </p>
      </div>
    </div>
<div>
<MainBtn 
:title="'Apply Now'"
/>
</div>
    </div>
  </section>
</template>


<script lang="ts">
import MapAlt from '@/components/svg/MapAlt.vue'
import ClockAlt from '@/components/svg/ClockAlt.vue'
import MainBtn from '../buttons/MainBtn.vue';

export default {
  components: {
    MapAlt,
    ClockAlt,
    MainBtn
  },
}
</script>
