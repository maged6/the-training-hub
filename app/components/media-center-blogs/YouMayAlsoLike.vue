<template>
  <section class="bg-white px-[157px] py-[60px]">
    <h3 class="text-center font-[900] text-[42px] text-primary-10">You May Also Like</h3>

     <div class="flex flex-wrap gap-[44px] py-[44px] ">
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

    <div class="flex justify-center">
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
import NewsCard from '~/components/cards/NewsCard.vue'
import MainBtn from '~/components/buttons/MainBtn.vue';


export default {
  components: {
    NewsCard,
    MainBtn
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
      ],
    }
  },
}
</script>
