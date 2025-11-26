<template>
    <section class="bg-white p-[60px]">
        <div class="bg-gray-100 rounded-[32px] p-[80px]">
         <IntroLeftSection 
         :labelSection="'What You Will Learn'"
         :backgroundLable="'bg-primary-20'"
         :colorLable="'white'"
         :titleSection="'Program Content'"
         :colorTitle="'black'"
         />
          <div class="grid grid-cols-2 pt-[60px]">
            <div>
                <ListOfCheckmark :list="listOfSection"/>
            </div>
            <div> <ListOfCheckmark :list="listOfSection"/></div>
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
