<template>
  <section class=" bg-primary-10 px-[60px] py-[80px] ">
    <div>
      <IntroCenterSection
        :labelSection="'Process'"
        :labelBackgroundColor="'bg-primary-20'"
        :maxWidthofHeader="550"
        :headerColor="'white'"
        :labelColor="'white'"
        :titleSection="'How It Works'"
      />
    </div>

    <div class="flex justify-center">
      <div
        class="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-white"
      ></div>
      <ol
        class="relative text-body border-s-0 border-e-0 border-white"
        role="list"
      >
        <li
          v-for="(item, index) in processSteps"
          :key="index"
          class="relative mb-10 ms-7 mt-5 max-w-[592px]"
          :class="[
                index % 2 === 0 ? 'transform translate-x-1/2 mr-2' : 'transform -translate-x-1/2 ml-2 text-end'
            ]"
        >
          <span
            :class="index % 2 === 0 ? '-start-[1.5rem]' : '-end-[1.5rem]'"
            class="absolute flex items-center justify-center w-7 h-8 text-fg-success-strong bg-primary-10 "
          >
            <Circle />
          </span>

          <!-- Auto number -->
          <div class="px-[10px]">
            <span
              class="font-[100] text-[38px] text-red-500"
              aria-hidden="true"
            >
              {{ String(index + 1).padStart(2, '0') }}.
            </span>

            <p class="font-[900] text-[28px] text-white">{{ item.title }}</p>
            <p class="font-[100] text-[16px] text-white">
              {{ item.description }}
            </p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import Circle from '../svg/Circle.vue'

export default {
  components: {
    IntroCenterSection,
    Circle,
  },
  data() {
    return {
      processSteps: [
        {
          title: 'Pre-Session Discovery',
          description:
            'We start by understanding your goals. Our team consults with you to identify your organization’s challenges, team dynamics, and desired outcomes. This helps us design a program that truly fits your needs.',
        },
        {
          title: 'Designed Immersion',
          description:
            'Based on the discovery phase, we craft customized activities, simulations, and challenges that mirror real workplace situations. Every activity is chosen to be relevant, engaging, and impactful.',
        },
         {
          title: 'Facilitated Experience',
          description:
          'During the session, our expert facilitators guide participants through the activities, encouraging collaboration, reflection, and problem-solving. They adapt in real time to keep energy high and outcomes meaningful.'
        },
         {
          title: 'Debrief & Reflection',
          description:
          'After each activity, we pause for structured reflection. Participants analyze what happened, discuss lessons learned, and explore how these insights can be applied to their actual roles and teams.'
        },
      ],
    }
  },
}
</script>
