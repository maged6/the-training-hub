<template>
  <section class="bg-tertiary-gray-5 py-[60px] text-primary-10 leading-relaxed flex justify-center">
<div class="flex flex-col gap-[32px] max-w-[632px]">
    <!-- Overview -->
     <div>
    <h2 class="text-[32px] font-[900] mb-4">Overview</h2>
     <p class="mb-10 text-[14px] font-[100]">
      {{ overview }}
    </p>
</div>

    <!-- About the Role -->
     <div>
    <h2 class="text-[32px] font-[900] mb-4">About the Role</h2>
    <p class="mb-10 text-[14px] font-[100]">
      {{ aboutRole }}
    </p></div>

    <div>
    <!-- Key Responsibilities -->
    <h2 class="text-[32px] font-[900] mb-4">Key Responsibilities</h2>
     <ListOfCheckmark :list="responsibilities"/>
</div>

    <!-- Qualifications -->
     <div>
    <h2 class="text-[32px] font-[900] mb-4">Qualifications</h2>
    <ListOfCheckmark :list="qualifications"/>
   </div>

    <!-- What We Offer -->
     <div>
    <h2 class="text-[32px] font-[900] mb-4">What We Offer</h2>
    <ListOfCheckmark :list="offers"/>
</div>

    <!-- Apply Button -->
    <div>    <MainBtn 
:title="'Apply Now'"
/>
</div>

</div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import  ListOfCheckmark from "~/components/main-component/ListOfCheckmark.vue";
import MainBtn from '../buttons/MainBtn.vue';

export default defineComponent({
  name: "JobDescription",
  components: { ListOfCheckmark, MainBtn },
  data() {
    return {
      overview:
        "We’re seeking a motivated Sales Supervisor to lead our sales efforts and build lasting relationships with clients. This role is perfect for someone who thrives in a fast-paced environment and is passionate about driving business growth.",

      aboutRole:
        "As a Sales Supervisor at The Training Hub, you’ll oversee daily sales activities, guide a team of sales representatives, and develop strategies to achieve revenue targets. You’ll work closely with the marketing and operations teams to ensure seamless execution of sales plans and deliver an exceptional client experience.",

      responsibilities: [
        "Lead, mentor, and motivate the sales team to achieve individual and collective targets.",
        "Build and maintain strong client relationships to drive repeat business and referrals.",
        "Develop and implement sales strategies to reach new markets and expand client base.",
        "Analyze sales data, prepare reports, and recommend improvements to meet KPIs.",
        "Collaborate with marketing to align campaigns with sales initiatives.",
        "Ensure the team provides outstanding service and represents The Training Hub’s values."
      ],

      qualifications: [
        "Bachelor's degree in Business Administration, Marketing, or a related field.",
        "3–5 years of experience in sales, preferably in the training or service industry.",
        "Proven leadership skills with a track record of meeting or exceeding sales targets.",
        "Strong communication, negotiation, and problem-solving abilities.",
        "Ability to work collaboratively in a team-oriented environment."
      ],

      offers: [
        "Competitive salary with performance-based incentives.",
        "Opportunities for career development and continuous learning.",
        "A supportive work environment that values innovation and collaboration.",
        "The chance to be part of a purpose-driven team making an impact in professional learning."
      ]
    };
  }
});
</script>
