<template>
  <div class="bg-white">
    <div class="md:flex grid grid-cols-4 md:py-[80px] py-[60px] md:mx-[60px] mx-[16px] md:gap-[87px] gap-[32px]"
    :class="reverseSection ? 'justify-end flex-row-reverse' : 'justify-between'">
      <div class="col-span-4 order-2 flex flex-col justify-center gap-[16px] max-w-[604px]">
         <div class="rounded w-fit px-1 rotate-[-5deg] mb-2" 
        :class="backgroundLable"
        v-if="labelSection"> 
        <span class="font-[700] md:text-[14px]" :class="`text-${colorLable}`">{{ labelSection }}</span>
      </div>
        <p class="text-primary-10 font-[900] text-[32px]">
          {{ title }}
        </p>
        <p class="text-gray-600 font-[100] text-[16px] max-w-[468px]">
          {{ subTitle }}
        </p>
        <ListOfCheckmark :list="sectionList"/>
      </div>

      <div class="col-span-4 order-1 w-full h-full max-w-[668px] max-h-[599px]">
        <NuxtImg
          class="rounded-[24px] w-full h-full object-cover"
          :src="images"
          alt="the training hub careers image"
          width="100%"
          height="100%"
          format="webp"
          quality="80"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CheckmarkCircle from '~/components/svg/CheckmarkCircle.vue'
import ListOfCheckmark from '~/components/main-component/ListOfCheckmark.vue'

export default {
    name: 'MainCareersSection',
    components: {CheckmarkCircle, ListOfCheckmark  },
    props: {
        backgroundLable: { type: String, default: '' },
        labelSection: { type: String, default: '' },
        colorLable: { type: String, default: '' },
        title: { type: String, default: '' },
        subTitle: { type: String, default: '' },
        sectionList: { type: Array, default: [] },
        images: { type: String, default: '' },
        reverseSection: { type: Boolean, default: false },
    }
}
</script>