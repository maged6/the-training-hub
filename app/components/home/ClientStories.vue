<template>
  <section>
    <div class="py-[136px] bg-tertiary-gray-10">
      <!-- Section Title -->
      <h1 class="text-center font-[600] md:text-[42px] mb-12">
        {{ firstWord }}
        <span class="text-primary-20"> {{ highlightWord }} </span>
        {{ lastWord }}
      </h1>

      <!-- Slider Container -->
      <div class="relative w-full mx-auto overflow-hidden px-[60px]">
        <div
          ref="slider"
          class="flex gap-4 transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
        >
          <div v-for="(user, index) in userSection" :key="index" class="min-w-[360px] max-w-[360px]">
            <CommentCard 
              :commentCard="user.text"
              :userName="user.name"
              :userImg="user.image"
            />
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-center gap-3 mt-12">
          <div
            class="flex items-center justify-center rotate-[-135deg]"
            @click="prevSlide"
          >
            <ArrowRightTopBtn colorIcon="white" backgroundIcon="#b22726" />
          </div>

          <div
            class="flex items-center justify-center rotate-45"
            @click="nextSlide"
          >
            <ArrowRightTopBtn colorIcon="white" backgroundIcon="#b22726" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref, computed } from 'vue'
import type { PropType } from 'vue'
import CommentCard from '../main/CommentCard.vue'
import ArrowRightTopBtn from '~/components/svg/ArrowRightTop.vue'

interface UserSectionItem {
  text: string
  name: string
  image: string
}

export default {
  components: { CommentCard, ArrowRightTopBtn },
  props: {
    labelSection: {
      type: String,
      default: 'Client Success Stories',
    },
    userSection: {
      type: Array as PropType<UserSectionItem[]>,
      default: () => [],
    },
  },
  setup(props) {
    const currentIndex = ref(0)
    const totalCards = 5
    const cardWidth = 360

    // Split title words
    const words = computed(() => props.labelSection.split(' '))
    const firstWord = computed(() => words.value[0] || '')
    const highlightWord = computed(() => words.value[1] || '')
    const lastWord = computed(() => words.value.slice(2).join(' ') || '')

    const nextSlide = () => {
      if (currentIndex.value < totalCards - 3) currentIndex.value++
    }

    const prevSlide = () => {
      if (currentIndex.value > 0) currentIndex.value--
    }

    return {
      currentIndex,
      cardWidth,
      nextSlide,
      prevSlide,
      firstWord,
      highlightWord,
      lastWord,
    }
  },
}
</script>
