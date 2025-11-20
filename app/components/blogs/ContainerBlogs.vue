<template>
  <section class="bg-tertiary-gray-5">
    <div class="flex flex-wrap gap-[44px] px-[157px] py-[32px]">
      <span v-for="(Program, index) in programSection" :key="index">
        <NewsCard
          :ImageCard="Program.ImageCard"
          :CardTitle="Program.CardTitle"
          :ButtonTitle="Program.ButtonTitle"
          :MaxWidth="'370px'"
          :DateCard="Program.DateCard"
        />
      </span>
    </div>
  </section>
</template>

<script lang="ts">
import NewsCard from '~/components/cards/NewsCard.vue'

export default {
  components: {
    NewsCard,
  },

  data() {
    return {
      programSection: [    
         {
         ImageCard: 'services/captions/request-team.png',
         CardTitle: '5 Soft Skills Every Leader Should Master',
         DateCard: 'Dec 22, 2023',
         ButtonTitle: 'Know More',
       },
          {
         ImageCard: 'services/captions/request-team.png',
         CardTitle: '5 Soft Skills Every Leader Should Master',
         DateCard: 'Dec 22, 2023',
         ButtonTitle: 'Know More',
       },
          {
         ImageCard: 'services/captions/request-team.png',
         CardTitle: '5 Soft Skills Every Leader Should Master',
         DateCard: 'Dec 22, 2023',
         ButtonTitle: 'Know More',
       },
             {
         ImageCard: 'services/captions/request-team.png',
         CardTitle: '5 Soft Skills Every Leader Should Master',
         DateCard: 'Dec 22, 2023',
         ButtonTitle: 'Know More',
       },
             {
         ImageCard: 'services/captions/request-team.png',
         CardTitle: '5 Soft Skills Every Leader Should Master',
         DateCard: 'Dec 22, 2023',
         ButtonTitle: 'Know More',
       },
      ],
    }
  },
}
</script>
