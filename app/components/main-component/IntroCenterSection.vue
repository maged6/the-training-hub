<template>
  <div class="min-h-[197px] flex flex-col justify-center items-center">
    <div
      class="rounded w-fit px-1 rotate-[-5deg] mb-2 "
      :class="`${labelBackgroundColor}`"
      v-if="labelSection"
    >
      <span class="font-[700] md:text-[14px]" :class="`text-${labelColor}`">
        {{ labelSection }}
      </span>
    </div>
    <h1
      class="text-center font-[600] md:text-[42px]"
      :class="`text-${headerColor}`"
      :style="{ maxWidth: maxWidthofHeader + 'px' }"
      v-if="titleSection"
    >
      {{ titleSection }}
    </h1>
    <div :style="{ maxWidth: maxWidthofSubHeader + 'px' }">
      <p class="font-[400] md:text-[20px]" v-if="subtitleSection">
        <span :class="`text-${subtitleColor}`">
        {{ subtitleSection }}
      </span>
      </p>
    </div>
    <div class="mt-8" v-if="hasBtn">
      <MainBtn :title="buttonTitle" />
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
    labelBackgroundColor: {
      type: String,
      default: 'bg-primary-20',
    },
    maxWidthofHeader: {
      type: Number,
      default: 367,
    },
    maxWidthofSubHeader: {
      type: Number,
      default: 750,
    },
    headerColor: {
      type: String,
      default: 'black',
    },
   labelColor: {
      type: String,
      default: 'white',
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
    subtitleColor: {
      type: String,
      default: 'gray-600',
    },
    buttonTitle: {
      type: String,
      default: 'Explore Programs',
    },
  },
}
</script>
