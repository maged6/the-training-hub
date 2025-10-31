<template>
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22" height="22" rx="11" :fill="backgroundIcon"/>
<g clip-path="url(#clip0_380_8516)">
<path d="M14.7123 6.79272L8.26211 6.74631C7.98369 6.74631 7.76714 6.96286 7.76714 7.24129C7.76714 7.51971 7.98369 7.73626 8.26211 7.73626L13.5058 7.78267L6.93187 14.3565C6.74625 14.5422 6.74625 14.8515 6.93187 15.0371C7.11748 15.2228 7.44231 15.2382 7.62793 15.0526L14.2327 8.44779L14.2791 13.7533C14.2792 14.0317 14.4957 14.2483 14.7741 14.2483C14.8979 14.2483 15.0216 14.1864 15.1144 14.0936C15.2072 14.0008 15.2691 13.877 15.2536 13.7378L15.2072 7.28769C15.2072 7.00927 14.9907 6.79272 14.7123 6.79272Z" 
:fill="colorIcon"/>
</g>
<defs>
<clipPath id="clip0_380_8516">
<rect width="14" height="14" fill="white" transform="translate(1.10046 11) rotate(-45)"/>
</clipPath>
</defs>
</svg>
</template>


<script>
export default {
  props: {
    colorIcon: { type: String, default: '#B22726' },
    backgroundIcon: { type: String, default: 'white' },
  },
}
</script>
