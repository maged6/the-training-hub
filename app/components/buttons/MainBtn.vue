<template>
  <button
    class="group flex gap-2 justify-center items-center 
    bg-gradient-to-t
    text-white 
    font-bold 
    py-2 
    px-4
    rounded-full
    cursor-pointer
    transition-all duration-300 ease-in-out"
    :class="[
      `from-${colorFrom}`,
      `to-${colorTo}`,
      `hover:from-${colorTo}`,
      `hover:to-${colorFrom}`,
      colorBorder ? `border border-${colorBorder}` : ''
    ]"
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
import ArrowRightTop from '@/components/svg/ArrowRightTop.vue'

export default defineComponent({
  name: 'GradientButton',
  components: { ArrowRightTop },
  props: {
    title: {
      type: String,
      default: 'My Account',
      required: true,
    },
    colorIcon: {
      type: String,
      default: '#B22726',
    },
    colorTo: {
      type: String,
      default: 'secondary-30',
    },  
    colorFrom: {
      type: String,
      default: 'secondary-20',
    },
    colorBorder: {
      type: String,
      default: '',
    },
  },
})
</script>
