<template>
  <div class="rounded-lg w-full">
    <div class="w-full max-h-[220px]">
        <NuxtImg
          class="rounded-lg object-cover w-full h-full"
          :src="ImageCard"
          alt="Leadership article"
          width="370"
          height="250"
          format="webp"
        />
    </div>
    <div class="py-5">
      <p class="mb-3 mx-3 font-normal text-gray-500" v-if="DateCard">
        {{ DateCard }}
      </p>
      <p
        class="mb-2 mx-3 text-2xl font-[600] tracking-tight text-primary-10 "
        v-if="CardTitle"
      >
        {{ CardTitle }}
      </p>

      <div class="md:w-[120px] w-[140px]">
      <MainBtn
        :title="ButtonTitle"
        :colorTo="'transparent'"
        :colorFrom="'transparent'"
        :backgroundIcon="'#b22726'"
        :textColor="'#b22726'"
        :colorIcon="'white'"
      />
      </div>
    </div>
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
  },

};
</script>
