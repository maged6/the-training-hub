<template>
<div class="bg-transparent rounded-lg" :style="{ maxWidth: MaxWidth }">
  {{ MaxWidth }}
    <NuxtLink href="/">
        <NuxtImg
          class="rounded-lg"
          :src="ImageCard"
          alt="Leadership article"
          width="370"
          height="250"
          format="webp"
        />
        <div class="p-5">

        <p class="mb-3 mx-3 font-normal text-gray-500" v-if="DateCard">
          {{ DateCard }}
        </p>
        <p class="mb-2 mx-3 text-2xl font-[600] tracking-tight text-primary-10 " v-if="CardTitle">
          {{ CardTitle }}
        </p>
       
        <MainBtn
        :title="ButtonTitle"
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
    ImageCard: {
      type: String,
      default: '',
    },
    DateCard: {
      type: String,
      default: '',
    },
    CardTitle: {
      type: String,
      default: '5 Soft Skills Every Leader Should Master',
    },
    ButtonTitle: {
      type: String,
      default: 'Know More',
    },
    MaxWidth: {
      type: String,
      default: '370px',
    },
  },

};
</script>
