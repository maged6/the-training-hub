<template>
  <svg
    width="62"
    height="62"
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="transition-transform duration-500"
  >
    <rect width="62" height="62" rx="31" :fill="backgroundColorIcon" />
    <!-- Add a group that only scales the arrow -->
    <g
      class="transition-transform duration-500 origin-center"
      :class="{ 'scale-150': isHovered , 'rotate-45': isHovered }"
    >
      <path
        d="M37.3749 23.7751L26.2985 23.6954C25.8204 23.6954 25.4485 24.0673 25.4485 24.5454C25.4485 25.0235 25.8204 25.3954 26.2985 25.3954L35.3031 25.4751L24.0141 36.764C23.6954 37.0828 23.6954 37.614 24.0141 37.9328C24.3329 38.2515 24.8907 38.2781 25.2094 37.9593L36.5515 26.6173L36.6312 35.7281C36.6312 36.2062 37.0031 36.5781 37.4812 36.5781C37.6937 36.5781 37.9062 36.4719 38.0656 36.3125C38.2249 36.1531 38.3312 35.9406 38.3046 35.7015L38.2249 24.6251C38.2249 24.147 37.8531 23.7751 37.3749 23.7751Z"
        :fill="colorIcon"
      />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    colorIcon: { type: String, default: 'none' },
    backgroundColorIcon: { type: String, default: 'none' },
    isHovered: { type: Boolean, default: false }, // <— accept hover state from parent
  },
}
</script>
