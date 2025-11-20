<template>
    <MainSection 
    :labelSection="'Services'"
    :title="'Business Simulation'"
    :subtitle="'Practice. Compete. Succeed.'"
    :breadcrumbSection=" [
        { name: 'Home', to: '/' },
        { name: 'Business Simulation', to: '/services/business-simulation' },
      ]"
    :maxWidthofSubHeader="602"
    :tileSection="'Transform Learning into Real-World Action'"
    :subTitleSection="'Business simulation is an interactive, game-based learning approach that replicates real market dynamics. It allows professionals and teams to apply theory to practical challenges—managing budgets, leading teams, analyzing competitors, and making high-stakes choices that drive measurable outcomes.'"
    :imgSection="'images/layout-hero.jpg'"
    />

     <FiveBenefitsCardSection
     :maxWidthofHeader="700"
    :labelSection="'Key Features'"
    :titleSection="'Why Choose Business Simulation?'"
    :BenefitsCardSection=" [
        { title: 'Hands-On Experience', subtitle: 'Learn by making decisions in a risk-free but realistic business environment.' },
        { title: 'Immediate Feedback', subtitle: 'See the results of your strategies in real time and learn to adjust quickly.' },
        { title: 'Team Collaboration', subtitle: 'mprove communication, teamwork, and leadership under competitive conditions.' },
        { title: 'Critical Thinking & Strategy', subtitle: 'Build sharper problem-solving skills and understand how every decision impacts the bigger picture.' },
        { title: 'Engaging & Memorable', subtitle: 'Interactive and fun activities that enhance retention and motivation.' },
       ]"
  />
    <ImgAndFourCard
    :LableSection="'Ideal For'"
    :TitleSection="'Who Can Join'"
    :ImgSection="'/services/captions/request-team.png'"
    :AltSection="'the training hub Learn & Explore Egypt image'"
    :BoxOne="'Simulations boost corporate teamwork by improving collaboration, communication, and problem-solving.'"
    :BoxTwo="'Managers and emerging leaders will build confidence in high-stakes decision-making and learn to handle complex scenarios under pressure.'"
    :BoxThree="'Students and graduates encounter real business challenges that ready them for the workforce, connecting theory with practice.'"
    :BoxFour="'Entrepreneurs will refine their strategic thinking, resource management, and leadership skills to effectively grow their businesses.'"
  />
</template>

<script>
import MainSection from "~/components/main-section/MainSection.vue";
import FiveBenefitsCardSection from "~/components/main-section/FiveBenefitsCardSection.vue";
import ImgAndFourCard from "~/components/main-section/ImgAndFourRedCard.vue";


export default {
  components: {
    MainSection,
    FiveBenefitsCardSection,
    ImgAndFourCard,
  },

};
</script>


    
   