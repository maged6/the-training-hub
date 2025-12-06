<template>
    <section class="bg-white px-[16px] py-[60px] md:p-[60px]">
        <div class="bg-gray-100 rounded-[32px] md:p-[80px] px-[16px] py-[32px]">
         <IntroLeftSection 
         :labelSection="'What You Will Learn'"
         :backgroundLable="'bg-primary-20'"
         :colorLable="'white'"
         :titleSection="'Program Content'"
         :colorTitle="'black'"
         />
          <div class="grid grid-cols-4 md:pt-[60px] pt-[32px]">
            <div class="col-span-4 md:col-span-2">
                <ListOfCheckmark :list="listOfSection"/>
            </div>
            <div class="col-span-4 md:col-span-2">
               <ListOfCheckmark :list="listOfSection"/>
              </div>
        </div>
        </div>
    </section>
</template>



<script lang="ts">
import IntroLeftSection from '~/components/main-component/IntroLeftSection.vue';
import ListOfCheckmark from '~/components/main-component/ListOfCheckmark.vue';

export default {
    name: 'ProgramContent',
    components: { IntroLeftSection, ListOfCheckmark},
    props: {
        titleSection: { type: String, default: 'Compensation, Benefits and Incentives' },
        priceSection: { type: String, default: '9500' },
    },
     data() {
    return {
      filters: [
        { label: "Overview", value: "overview" },
        { label: "Content", value: "content" },
        { label: "Benefits", value: "benefits" },
        { label: "Audience", value: "audience" },
        { label: "Registration Terms", value: "registration" },
        { label: "FAQs", value: "faqs" },
      ],
      listOfSection:[
        'Emotional Intelligence importance in dealing with others.', 
        'Emotional Intelligence importance in dealing with others.', 
        'Emotional Intelligence importance in dealing with others.', 
        'Emotional Intelligence importance in dealing with others.', 
        'Emotional Intelligence importance in dealing with others.', 
      ],
      selectedFilter: "overview",
    };
  },
}
</script>
