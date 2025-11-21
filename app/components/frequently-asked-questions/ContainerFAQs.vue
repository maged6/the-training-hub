<template>
  <section class="bg-tertiary-gray-5 py-[60px] flex justify-center">
    <div class="bg-white w-fit rounded-[20px]">
     <AskedQuestions
         :faqsQuestion="faqsQuestion"
         :hasBtn="false"
         :darkBg="false"
        />
        </div>
  </section>
</template>

<script lang="ts">
import AskedQuestions from '../main-component/AskedQuestions.vue';
import type { PropType } from 'vue'

export default {
  components: {
    AskedQuestions,
  },
   props: {
    labelSection: { type: String, default: 'Have A Question?' },
    titleSection: { type: String, default: 'Frequently asked questions' },
    imageSection: { type: String, default: 'images/layout-hero.jpg' },
    faqsQuestion: {
        type: Array as PropType<{ question: string; answer: string }[]>,
        default: () => [
            {
                question: 'What is the difference between a training and a program?',
                answer: 'A training is a specific course or module, whereas a program is a series of training modules.',
            },
                {
                question: 'What is the difference between a training and a program?',
                answer: 'A training is a specific course or module, whereas a program is a series of training modules.',
            },
                {
                question: 'What is the difference between a training and a program?',
                answer: 'A training is a specific course or module, whereas a program is a series of training modules.',
            },
                {
                question: 'What is the difference between a training and a program?',
                answer: 'A training is a specific course or module, whereas a program is a series of training modules.',
            },
                {
                question: 'What is the difference between a training and a program?',
                answer: 'A training is a specific course or module, whereas a program is a series of training modules.',
            },
        ],
    },
  },
}
</script>
