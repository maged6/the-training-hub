<template>
    <div class="min-h-[197px] flex flex-col justify-center items-center">
        <div class="text-white rounded w-fit px-1 rotate-[-5deg] mb-2" :class="`bg-${labelColor}`" v-if="labelSection"> <span class="font-[700] md:text-[14px]">{{ labelSection }}</span></div>
        <h1 class="max-w-[367px] text-center font-[600] md:text-[42px]" v-if="titleSection">{{ titleSection }}</h1>
        <div class="max-w-[750px]">
            <p class="text-gray-600 font-[400] md:text-[20px]" v-if="subtitleSection">{{ subtitleSection }}</p>
        </div>
        <div class="mt-8" v-if="hasBtn">
            <MainBtn :title="'Explore Programs'"/>
        </div>
    </div>  
</template>

<script>
import MainBtn from '../buttons/MainBtn.vue';

export default{
  components: {
    MainBtn
  },
  props: {
    labelSection: {
      type: String,
      default: false,
    },
    labelColor: {
      type: String,
      default: 'primary-20',
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