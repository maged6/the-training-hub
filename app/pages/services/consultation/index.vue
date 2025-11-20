<template>
    <MainSection 
    :labelSection="'Services'"
    :title="'Consultation'"
    :subtitle="'Your Partner in Organizational Transformation.'"
    :breadcrumbSection="[
        { name: 'Home', to: '/' },
        { name: 'Consultation', to: '/services/consultation' },
      ]"
    :maxWidthofSubHeader="602"
    :tileSection="'Strategic Guidance That Drives Change'"
    :subTitleSection="'At The Training Hub, our consultation services go beyond advice—we become your collaborators in building stronger organizations. Whether you’re navigating culture change, performance challenges, or organizational alignment, our consultants bring deep industry experience and a practical focus to deliver lasting results.'"
    :imgSection="'images/layout-hero.jpg'"
    />
    <ConsultationBenefits />
    <ImgAndFourCard 
      :LableSection="'Advantage'"
      :TitleSection="'E-Learning Benefits'"
      :SubTilteSection="'Work with experts who combine real-world insight and hands-on experience to deliver practical, results-driven solutions that create measurable impact.'"
      :ImgSection="'/services/captions/request-team.png'"
      :AltSection="'the training hub E-Learning Benefits image'"
      :BoxOne="'Our consultants combine practical experience with training expertise.'"
      :BoxTwo="'We offer end-to-end support, from diagnosis to implementation.'"
      :BoxThree="'We don’t provide cookie-cutter solutions—every engagement is customized to your context.'"
      :BoxFour="'Our approach is collaborative, we work with your team, not impose on it.'"
    />
    <FrequentlyQuestions />
</template>

<script>
import MainSection from "~/components/main-section/MainSection.vue";
import ConsultationBenefits from "~/components/consultant/ConsultationBenefits.vue";
import ImgAndFourCard from "~/components/main-section/ImgAndFourRedCard.vue";
import FrequentlyQuestions from "~/components/main-section/FrequentlyQuestions.vue"; 

export default {
  components: {
    MainSection,
    ConsultationBenefits,
    ImgAndFourCard,
    FrequentlyQuestions,
  },

};
</script>


    
   