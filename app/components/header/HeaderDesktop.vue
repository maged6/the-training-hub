<template>
  <div
    class="bg-primary-10 text-white py-[9px] px-[30px] flex justify-between items-center"
  >
    <LogoHeader />
    <nav class="flex flex-wrap gap-[2px]">
      <Motion
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        :hover="{
            background: 'black',
            color: 'white',
            transition: {
              duration: 0.3,
            },
          }"
      >
        <NuxtLink
          to="/about"
          >
           <span >About</span>
          </NuxtLink
        >
      </Motion>
      <NuxtLink
        to="/about"
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        >Services</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        >Training Calendar</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        >Hub Facilities</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        >Media Center</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        >Careers</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        >FAQs</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500]"
        >Contact Us</NuxtLink
      >
    </nav>
  </div>
</template>

<script setup  lang="ts">
import LogoHeader from '@/components/svg/LogoHeader.vue'
import { Motion } from 'motion-v'

</script>
