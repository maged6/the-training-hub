<template>
    <div class="flex flex-col justify-center">
        <div class="rounded w-fit px-1 rotate-[-5deg] mb-2" 
        :class="backgroundLable"
        v-if="labelSection"> 
        <span class="font-[700] md:text-[14px]" :class="`text-${colorLable}`">{{ labelSection }}</span>
      </div>
        <h1 class="text-white font-[600] md:text-[58px] max-w-[500px] " v-if="titleSection">{{ titleSection }}</h1>
        <div class="max-w-[497px]">
            <p class="text-gray-400 font-[400] md:text-[20px]" v-if="subtitleSection">{{ subtitleSection }}</p>
        </div>
        <div class="mt-8" v-if="hasBtn">
            <MainBtn :title="'Explore Programs'"/>
        </div>
    </div>  
</template>

<script lang="ts">
import MainBtn from '../buttons/MainBtn.vue';

export default{
  components: {
    MainBtn
  },
  props: {
    labelSection: {
      type: String,
      default: '',
    },
    backgroundLable: {
      type: String,
      default: 'bg-secondary-10',
    },
    colorLable: {
      type: String,
      default: 'black',
    },
    titleSection: {
      type: String,
      default: '',
    },
    subtitleSection: {
      type: String,
      default: '',
    },
    hasBtn: {
      type: Boolean,
      default: false,
    },
  },
}

</script>