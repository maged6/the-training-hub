<template>
     <div 
     class=" rounded-2xl p-8 text-left shadow-md h-full w-full flex flex-col items-center justify-center"
     :class="`${backgroundColorCard} `">
            <p class="text-[32px] font-[600] mb-3" :class="`text-${colorCard}`">
             {{ titleCard }}
            </p>
            <p class="text-gray-600 text-[20px] leading-relaxed font-[400]" >
              
              {{ contentCard }}
            </p>
          </div>
</template>


<script lang="ts">

export default {
  props: {
    titleCard: {
      type: String,
      default: ' Modern & Comfortable Spaces ',
    },
    backgroundColorCard: {
      type: String,
      default: 'bg-white',
    },
    colorCard: {
      type: String,
      default: 'primary-10',
    },
    contentCard: {
      type: String,
      default: 'Our purpose-built center combines style and comfort to create an inviting environment that supports productive learning.',
    },
  },

};
</script>
