<template>
    <LearnAndExplore
    />
    <DiscoverEgyptWhileYouLearn 
    :LableSection="'Key Features'"
    :TitleSection="'Discover Egypt While You Learn 🇪🇬'"
    :ImageSection="'images/layout-hero.jpg'"
    :BenefitsCardSection="[
          { title: 'Cultural Immersion', subtitle: 'isit Egypt’s iconic landmarks—from the Pyramids of Giza and the Nile River to vibrant local markets.' },
          { title: 'Professional Development', subtitle: 'articipate in expert-led workshops and training programs tailored to your career goals.' },
          { title: 'Networking Opportunities', subtitle: 'Meet and learn alongside professionals from around the world in inspiring settings.'},
          { title: 'Unique Venues', subtitle: 'Experience learning in modern facilities, historic venues, or even riverside spaces that enhance creativity.' },
        ]"
    
    />
       <ImgAndFourCard 
      :LableSection="'Ideal For'"
      :TitleSection="'Who Can Join'"
      :ImgSection="'/services/captions/request-team.png'"
      :AltSection="'the training hub Learn & Explore Egypt image'"
      :BoxOne="'International Professionals who looking to combine professional development with an enriching cultural journey.'"
      :BoxTwo="'Corporate Teams who seeking unique offsite programs that blend team development with memorable travel experiences.'"
      :BoxThree="'Students & Young Leaders who eager to gain new skills while exploring Egypt’s heritage and culture.'"
      :BoxFour="'Organizations Hosting Delegations who welcoming international partners or teams who want tailored learning with guided exploration.'"
    />
        <FrequentlyQuestions />
    
</template>

<script>
import LearnAndExplore from "~/components/learn-and-explore/LearnAndExplore.vue";
import DiscoverEgyptWhileYouLearn from "~/components/main-section/ImgAndBenefitsCard.vue";
import ImgAndFourCard from "~/components/main-section/ImgAndFourRedCard.vue";
import FrequentlyQuestions from "~/components/main-section/FrequentlyQuestions.vue"; 

export default {
  components: {
    LearnAndExplore,
    DiscoverEgyptWhileYouLearn,
    ImgAndFourCard,
    FrequentlyQuestions,
  },

};
</script>
