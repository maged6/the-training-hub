<template>
    <ELearning/>
    <ELearningBenefits />

    <FrequentlyQuestions 
        :labelSection="faqsData?.red_label_text"
        :titleSection="faqsData?.title"
        :imageSection="faqsData?.image"
        :faqsQuestion="faqsData?.faqs"
        />
</template>

<script>
import { useGeneralStore } from "~/stores/general";

import ELearning from "~/components/e-learning/ELearning.vue";
import ELearningBenefits from "~/components/e-learning/ELearningBenefits.vue";
import FrequentlyQuestions from "~/components/main-section/FrequentlyQuestions.vue";

export default {
  components: {
    ELearning,
    ELearningBenefits,
    FrequentlyQuestions,
  },
   setup() {
    const generalStore = useGeneralStore();

    onMounted(async () => {
      if (!generalStore.faqs || generalStore.faqs.length === 0) {
        await generalStore.fetchfaqs();
      }
    });

    const faqsData = computed(() => generalStore.faqs);

    return { faqsData };
  },

};
</script>
