<template>
  <section>
    <div
      class="flex flex-col items-center justify-start bg-gray-100 md:bg-white md:py-[80px] py-[60px]"
    >
    <div class="py-[32px] md:py-0">
      <IntroSection
        :labelSection="labelSection"
        :labelBackgroundColor="'bg-primary-20'"
        :labelColor="'white'"
        :maxWidthofHeader="300  "
        :titleSection="titleSection"
        :headerColor="'black  '"
      />
      </div>

      <!-- Grid Layout -->
      <div class="flex gap-3 max-w-[90vw] mb-8 overflow-x-auto ">
            <div v-for="(post, index) in posts" :key="index">
            <NuxtLink :to="`/media-center/blog/${post.slug}`">
                <!-- :ImageCard="post.image" -->
              <NewsCard 
                :ImageCard="'/images/layout-hero.jpg'"
                :DateCard="post.date"
                :CardTitle="post.title"
              />
          </NuxtLink>
          </div>
      </div>

      <NuxtLink :to="'/media-center/blog'" class="w-full md:w-[350px] px-[60px]">
        <MainBtn
          :title="'Explore More'"
          :colorIcon="'#10171F'"
          :colorTo="'#10171F'"
          :colorFrom="'#4B4A5C'"
        />
      </NuxtLink>
    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroCenterSection.vue';
import MainBtn from '../buttons/MainBtn.vue';
import NewsCard from '../cards/NewsCard.vue';
import type { PropType } from 'vue'

interface posts {
  id: number;
  title: string;
  date: string;
  image: string;
  slug: string;
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
