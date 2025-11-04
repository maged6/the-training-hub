<template>
  <section>
    <div
      class="flex flex-col items-center justify-start bg-white py-[80px]"
    >
      <IntroSection
        :labelSection="labelSection"
        :labelBackgroundColor="'bg-primary-20'"
        :labelColor="'white'"
        :maxWidthofHeader="300  "
        :titleSection="titleSection"
        :headerColor="'black  '"
        :hasBtn="false"
      />

      <!-- Grid Layout -->
      <div class="grid grid-cols-3 gap-3  max-w-[1200px] mb-8">
        <div v-for="(post, index) in posts" :key="index">
          <NewsCard 
            :ImageCard="post.image"
            :DateCard="post.date"
            :CardTitle="post.title"
          />
          </div>
      </div>

      <MainBtn
        :title="'Explore More'"
        :colorIcon="'#10171F'"
        :colorTo="'#10171F'"
        :colorFrom="'#4B4A5C'"
      />
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main/IntroCenterSection.vue';
import MainBtn from '../buttons/MainBtn.vue';
import NewsCard from '../main/NewsCard.vue';
import type { PropType } from 'vue'

interface posts {
  id: number;
  title: string;
  date: string;
  image: string;
}

export default {
  components: { IntroSection, MainBtn, NewsCard },
  props: {
    labelSection: {
      type: String,
      default: 'Media Center',
    },
    titleSection: {
      type: String,
      default: 'Stay Updated With Our News',
    },
    posts: {
      type: Array as PropType<posts[]>,
      default: () => [],
    },
  },

};
</script>
