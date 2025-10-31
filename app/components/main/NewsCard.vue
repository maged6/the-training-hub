<template>
<div class="max-w-sm bg-transparent rounded-lg">
    <NuxtLink href="#">
        <img class="rounded-lg" src="/images/image-1.jpg" alt="" />
        <div class="p-5">

        <p class="mb-3 mx-3 font-normal text-gray-500">Dec 22, 2023</p>
        <h5 class="mb-2 mx-3 text-2xl font-[600] tracking-tight text-primary-10 ">5 Soft Skills Every Leader Should Master</h5>
       
        <MainBtn
        :title="'Know More'"
        :colorTo="'transparent'"
        :colorFrom="'transparent'"
        :backgroundIcon="'#b22726'"
        :textColor="'#b22726'"
        :colorIcon="'white'"
      />

    </div>
        </NuxtLink>
</div>
</template>


<script lang="ts">
import MainBtn from '../buttons/MainBtn.vue';

export default {
  components: { MainBtn },
  props: {
    labelSection: {
      type: String,
      default: 'Hub Facilities',
    },
    titleSection: {
      type: String,
      default: 'Designed to Inspire Learning and Collaboration',
    },
    programs: {
      type: Array,
      default: () => [],
    },
  },

};
</script>
