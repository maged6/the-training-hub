
<template>
  <MainSingleTraining
  />
  <SecoundSingleTraining /> 
    <MainServicesSection 
        :title="'Program Overview'"
        :subTitle="'The rules for work are changing. We’re being judged by a new yardstick: not just by how smart we are, or by our training and expertise, but also by how we handle ourselves and each other. This is increasingly applied in choosing who will be hired and not, who will be let go or retained. In a time with no guarantee of job security, when the very concept of a job is being replaced by “portable skills,” these are prime qualities that make and keep us employable. Talked about loosely for decades under a variety of names, from “character” and “personality” to “soft skills” and “competence,” there is at last a more precise understanding of these human talents.'"
        :images="'/images/learning-home-1.png'"
      />
      <ProgramContent /> 
      <MainCareersSection 
      :backgroundLable="'bg-primary-20'"
      :labelSection="'Key Takeaways'"
      :colorLable="'white'"
      :title="'Program Benefits'"
      :subTitle="'Upon completion of this course, participants will be able to:'"
      :sectionList="['Introduce to the participants the  for  management situations.',
        'The five domains of emotional intelligence.',
        'The five domains of emotional intelligence.',
        'The five domains of emotional intelligence.',
        'Understanding people’s personalities – SELF – ASSESSMENT TEST REGARDING EI.',
      ]"
      :images="'/images/learning-home-1.png'"
      :reverseSection="true"
      />
      <WhoShouldAttend />
       <MainCareersSection 
      :backgroundLable="'bg-primary-20'"
      :labelSection="'Rules'"
      :colorLable="'white'"
      :title="'Registration Terms'"
      :sectionList="['Registration deadline is three days before the course date..',
        'Fill your registration form..',
        'Course fees include material, lunch, 2 coffee breaks and certificate..',
        'Your registration is confirmed only after course payment.',
        'Payment is non-refundable; however, participant can be substituted or can attend next confirmed round of the same course or another course..',
      ]"
      :images="'/images/learning-home-1.png'"
      />
      <FrequentlyQuestions />
      <ClientStories />
</template>

<script>
import MainSingleTraining from "~/components/services-training-list/MainSingleTraining.vue";
import SecoundSingleTraining from "~/components/services-training-list/SecoundSingleTraining.vue";
import MainServicesSection from "~/components/main-section/MainServicesSection.vue";
import ProgramContent from "~/components/services-training-list/ProgramContent.vue";
import WhoShouldAttend from "~/components/services-training-list/WhoShouldAttend.vue";
import MainCareersSection from '~/components/main-section/MainCareersSection.vue'
import FrequentlyQuestions from "~/components/main-section/FrequentlyQuestions.vue";
import ClientStories from "~/components/main-section/ClientStories.vue";


export default {
  components: {
    MainSingleTraining,
    SecoundSingleTraining,
    MainServicesSection,
    ProgramContent,
    MainCareersSection,
    WhoShouldAttend,
    FrequentlyQuestions,
    ClientStories,
  },
};
</script>
