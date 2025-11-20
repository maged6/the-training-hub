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
</template>

<script>
import MainSection from "~/components/main-section/MainSection.vue";
import FiveBenefitsCardSection from "~/components/main-section/FiveBenefitsCardSection.vue";


export default {
  components: {
    MainSection,
    FiveBenefitsCardSection,
  },

};
</script>


    
   