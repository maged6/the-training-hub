<template>
  <button
    class="
    group 
    font-[900]
    text-[20px]
    flex gap-[10px] text-primary-10 justify-center items-center  
    cursor-pointer transition-all
    duration-300 ease-in-out
    border-2 border-primary-10
    py-[13px]
    px-[26px]
    rounded-[100px]
    "
  >
    <Download />
    <span>{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Download from '@/components/svg/Download.vue'

export default defineComponent({
  name: 'TransparentButton',
  components: { Download },
  props: {
    title: { type: String, default: 'Explore' },
    colorIcon: { type: String, default: '#b22726' },
  },
})
</script>
