<template>
  <button
    class="
    group 
    font-[900]
    text-[16px]
    flex gap-[10px] text-secondary-40 justify-center items-center  
    cursor-pointer transition-all
    duration-300 ease-in-out
    py-[13px]
    px-[23px]
    rounded-[100px]
    bg-tertiary-gray-5
    max-w-[240px]
    max-h-[48px]
    "
  >
    <Google v-if="hasIcon"/>
    <span>{{ title }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Google from '@/components/svg/Google.vue'

export default defineComponent({
  name: 'TransparentButton',
  components: { Google },
  props: {
    title: { type: String, default: 'Explore' },
    colorIcon: { type: String, default: '#b22726' },
    hasIcon: { type: Boolean, default: true },
  },
})
</script>
