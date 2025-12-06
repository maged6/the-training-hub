<template>
  <button
    class="group flex gap-2
    justify-center 
    items-center  
    font-bold 
    md:text-[16px] 
    md:py-[10px] 
    text-[20px] 
    px-[16px] 
    py-[13px]
    w-full
    h-full
    rounded-full cursor-pointer transition-all duration-300 ease-in-out"
    :style="{
      background: hovered
        ? `linear-gradient(to top, ${colorTo}, ${colorFrom})`
        : `linear-gradient(to top, ${colorFrom}, ${colorTo})`,
      border: colorBorder ? `1px solid ${colorBorder}` : 'none',
    }"
    @mouseenter="hovered = true"
    @mouseleave="hovered = false"
  >
    <span :style="{ color: textColor }">{{ title }}</span>
    <ArrowRightTop
      v-if="hasIcon"
      class="transform transition-transform duration-500 ease-in-out group-hover:rotate-45"
      :colorIcon="colorIcon"
      :backgroundIcon="backgroundIcon"
    />
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ArrowRightTop from '@/components/svg/ArrowRightTop.vue'

export default defineComponent({
  name: 'GradientButton',
  components: { ArrowRightTop },
  props: {
    title: { type: String, default: 'My Account' },
    textColor: { type: String, default: 'white' },
    colorIcon: { type: String, default: '#B22726' },
    colorTo: { type: String, default: '#7c0400' },
    colorFrom: { type: String, default: '#e20700' },
    colorBorder: { type: String, default: '' },
    backgroundIcon: { type: String, default: 'white' },
    hasIcon: { type: Boolean, default: true },
  },
  setup() {
    const hovered = ref(false)
    return { hovered }
  },
})
</script>
