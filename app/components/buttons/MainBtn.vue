<template>
  <button
    class="group flex gap-2 justify-center items-center 
    bg-gradient-to-t
    from-secondary-20
    to-secondary-30
    hover:from-secondary-30
    hover:to-secondary-20
    text-white 
    font-bold 
    py-2 
    px-4
    rounded-full
    cursor-pointer
    transition-all duration-300 ease-in-out"
  >
    <span>{{ title }}</span>
    <ArrowRightTop
      class="transform transition-transform duration-500 ease-in-out group-hover:rotate-45"
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
  },
})
</script>