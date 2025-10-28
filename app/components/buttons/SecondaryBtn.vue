<template>
  <button
    class="
    group 
    font-[300]
    text-[38px]
    flex gap-2 text-primary-20 justify-center items-center  
    cursor-pointer transition-all
    duration-300 ease-in-out"
  >
    <span>{{ title }}</span>
    <ArrowRightTop
      class="transform transition-transform duration-500 ease-in-out group-hover:rotate-45"
      :colorIcon="colorIcon"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowRightTop from '@/components/svg/ArrowRightTopBtn.vue'

export default defineComponent({
  name: 'TransparentButton',
  components: { ArrowRightTop },
  props: {
    title: { type: String, default: 'Explore' },
    colorIcon: { type: String, default: '#b22726' },
  },
})
</script>
