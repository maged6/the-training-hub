<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="MinWidth" :height="MinHeight" viewBox="0 0 100 100" fill="none">
<path d="M10 0 l 80 0 q 10 0 10 10 l 0 40 q 0 10 -10 10 l -20 0 q -10 0 -10 10 l 0 20 q 0 10 -10 10 l -40 0 q -10 0 -10 -10 l 0 -80 q 0 -10 10 -10" fill="black"/>
</svg>
</template>

<script lang="ts">
export default {
  props: {
    MinHeight: {
      type: Number,
      default: 400,
      required: true,
    },
    MinWidth: {
      type: Number,
      default: 400,
      required: true,
    },
  },
}
</script>