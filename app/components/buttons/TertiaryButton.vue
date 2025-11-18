<template>
  <button
    class="
    group 
    font-[900]
    text-[20px]
    flex gap-2 text-secondary-10 justify-center items-center  
    cursor-pointer transition-all
    duration-300 ease-in-out"
  >
    <span>{{ title }}</span>
    <WindowMaximize />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WindowMaximize from '@/components/svg/WindowMaximize.vue'

export default defineComponent({
  name: 'TertiaryButton',
  components: { WindowMaximize },
  props: {
    title: { type: String, default: 'Know More' },
  },
})
</script>
