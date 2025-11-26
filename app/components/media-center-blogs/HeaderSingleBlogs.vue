<template>
  <section class="bg-tertiary-gray-5 px-[160px] py-[60px]">
    <div class="flex flex-col">
      <Breadcrumb
        :breadcrumbArray="[
                { name: 'Home', to: '/' },
                { name: 'Media Center (blog)', to: '/media-center/blogs' },
                { name: '5 Soft Skills Every Leader Should Master', to: '/media-center/blog/{slag}' }]"
        :fontSize="16"
        :textColor="'gray-600'"
      />
      <h1 class="font-[900] text-[42px] max-w-[517px] py-[16px]">
        5 Soft Skills Every Leader Should Master
      </h1>
      <div class="flex justify-between items-center">
        <p class="text-gray-700 font-[900] text-[14px]">12 Jan 2023</p>
        <div class="flex gap-[24px]">
          <Facebook :colorIcon="'#7B7B7B'" />
          <LinkedIn :colorIcon="'#7B7B7B'" />
          <Instgram :colorIcon="'#7B7B7B'" />
        </div>
      </div>
    </div>

    <div class="w-full max-h-[464px] py-[32px]">
      <NuxtImg
        class="rounded-2xl object-cover w-full h-full"
        :src="'/images/learning-home-1.png'"
        alt="The Training Hub Media Center Blog"
        width="600"
        height="150"
        format="webp"
        loading="lazy"
      />
    </div>

    <div class="flex flex-col items-center gap-[32px]">
        <div v-for="(soft , index) in softSkillsContent" :key="index" class="max-w-[615px]">
            <h2 class="text-primary-10 font-[900] text-[28px]">{{ soft.title }}</h2> 
            <p class="text-gray-500 font-[100] text-[16px]">{{ soft.text }}</p>
        </div>
    </div>
  </section>
</template>

<script lang="ts">
import HeaderOfSections from '~/components/main-component/HeaderOfSections.vue'
import Breadcrumb from '~/components/breadcrumb/Breadcrumb.vue'
import Facebook from '~/components/svg/Facebook.vue'
import LinkedIn from '~/components/svg/LinkedIn.vue'
import Instgram from '~/components/svg/Instgram.vue'

export default {
    components: {
        HeaderOfSections,
        Breadcrumb,
        Facebook,
        LinkedIn,
        Instgram,
    },
    data() {
        return {
            softSkillsContent: [
                {
                    title: "Introduction",
                    text: `Leadership today goes far beyond technical expertise or years of experience.
What truly sets exceptional leaders apart is their ability to connect with people,
inspire trust, and guide teams through challenges. These abilities—known as soft
skills—are critical for fostering collaboration, driving performance, and building a
positive work culture.

Here are five essential soft skills every leader should master to thrive in today’s
fast-changing workplace.`
                },
                {
                    title: "1. Emotional Intelligence (EI)",
                    text: `Great leaders understand their own emotions and can empathize with others.
Emotional intelligence helps leaders stay calm under pressure, resolve conflicts
with sensitivity, and foster trust within the team. A leader with strong EI knows
how to motivate individuals and maintain a positive work environment—even in
difficult situations.`
                },
                {
                    title: "2. Communication Skills",
                    text: `Clear, transparent communication ensures that everyone is on the same page.
Effective leaders know how to articulate vision, set expectations, and listen
actively. Strong communication builds confidence in the team and minimizes
misunderstandings that can lead to mistakes or frustration.`
                },
                {
                    title: "3. Adaptability",
                    text: `The business landscape changes quickly—leaders must be able to adjust plans,
shift strategies, and remain flexible. Adaptability not only keeps teams resilient
but also empowers them to embrace change rather than resist it.`
                },
                {
                    title: "4. Problem-Solving & Critical Thinking",
                    text: `Leaders often face complex challenges that require quick, smart decisions. Being
able to analyze problems, think strategically, and involve the team in finding
solutions builds trust and accelerates progress.`
                },
                {
                    title: "5. Conflict Resolution",
                    text: `Disagreements are inevitable in any workplace. Effective leaders don’t avoid
conflict; they address it promptly and fairly. By mediating differences and
encouraging collaboration, they maintain harmony and keep teams focused on
shared goals.`
                },
                {
                    title: "Conclusion",
                    text: `Mastering these five soft skills—emotional intelligence, communication,
adaptability, problem-solving, and conflict resolution—equips leaders to inspire
their teams, overcome challenges with confidence, and create a culture where
everyone can thrive.`
                }
            ]
        };
    },
}
</script>
