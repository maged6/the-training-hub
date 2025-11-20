<template>
  <MainSection
    :labelSection="'Services'"
    :title="'E-Learning Solutions'"
    :subtitle="'Flexible online courses you can access anytime, anywhere—learn at your own pace.'"
    :breadcrumbSection=" [
        { name: 'Home', to: '/' },
        { name: 'E-Learning', to: '/services/e-learning' },
      ]"
    :maxWidthofSubHeader="602"
    :tileSection="'Learn at Your Pace. Succeed on Your Terms.'"
    :subTitleSection="'Whether you’re upskilling for a promotion, exploring new fields, or supporting your team’s development, our E-Learning solutions deliver the same high standards as our in-person training—accessible anytime on desktop or mobile.'"
    :imgSection="'images/layout-hero.jpg'"
    :textBtnSection="'Know More'"
  />

  <FiveBenefitsCardSection
    :labelSection="'Highlights'"
    :titleSection="'E-Learning Benefits'"
    :BenefitsCardSection=" [
        { title: 'Wide Course Library', subtitle: 'Access over 1000 courses across various industries.' },
        { title: 'Interactive Experience', subtitle: 'Videos, quizzes, and case studies for active learning.' },
        { title: 'Progress Tracking', subtitle: 'Monitor your achievements and completion rates.' },
        { title: 'Flexible Access', subtitle: 'Learn at your own pace, anytime, anywhere.' },
        { title: 'Expert-Led', subtitle: 'Courses developed by experienced trainers and industry professionals.' },
       ]"
  />

  <FrequentlyQuestions
    :labelSection="faqsData?.red_label_text"
    :titleSection="faqsData?.title"
    :imageSection="faqsData?.image"
    :faqsQuestion="faqsData?.faqs"
  />
</template>

<script>
import { useGeneralStore } from "~/stores/general";

import MainSection from "~/components/main-section/MainSection.vue";

import FrequentlyQuestions from "~/components/main-section/FrequentlyQuestions.vue";
import FiveBenefitsCardSection from "~/components/main-section/FiveBenefitsCardSection.vue";

export default {
  components: {
    MainSection,
    FiveBenefitsCardSection,
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
