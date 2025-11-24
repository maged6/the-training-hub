<template>
  <div class="bg-white">
    <div class="grid grid-cols-2 py-[80px] mx-[60px] gap-[87px]">
      <div class=" z-10 flex flex-col justify-center gap-[16px] max-w-[604px]">
        <p class="text-primary-10 font-[900] text-[32px]">
          {{ title }}
        </p>
        <p class="text-gray-600 font-[100] text-[16px] max-w-[468px]">
          {{ subTitle }}
        </p>
        <ul class="list-none">
           <li v-for="(item, index ) in sectionList" :key="index" class="mb-[24px] font-[100] text-[16px] text-primary-10 flex gap-[8px] items-center">
           <CheckmarkCircle /> {{ item }}
          </li>
        </ul>
      </div>

      <div class="h-full min-h-[599px] z-10">
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

export default {
    name: 'MainCareersSection',
    components: {CheckmarkCircle  },
    props: {
        title: { type: String, default: '' },
        subTitle: { type: String, default: '' },
        sectionList: { type: Array, default: [] },
        images: { type: String, default: '' },
    }
}
</script>