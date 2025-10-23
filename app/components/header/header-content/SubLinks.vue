<template>
  <!-- Animated Section -->
  <AnimatePresence>
    <Motion
      v-if="showSection"
      tag="section"
      :initial="{ opacity: 0, scale: 0.1 }"
      :animate="{ opacity: 1, scale: 1 }"
      :exit="{ opacity: 0, scale: 0.1 }"
      :transition="{ duration: 0.6, ease: 'easeInOut' }"
      class="absolute w-full bg-primary-10 text-white py-16 px-6 md:px-16 lg:px-[12vw]"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(link, i) in subLinks.services"
          :key="i"
          class="flex justify-center mb-6"
        >
          <NuxtLink
            :to="link.to"
            class="flex items-center justify-center w-full max-w-[380px] h-[100px]
                   bg-white text-primary-10 text-xl md:text-2xl font-medium
                   px-6 py-3 rounded-full shadow-lg"
            :style="{ transform: `rotate(${link.rotate || 0}deg)` }"
          >
            <span class="flex items-center">
              {{ link.name }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </Motion>
  </AnimatePresence>

  <!-- Toggle Button -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
    <Motion
      tag="button"
      @click="toggleSection"
      :whileHover="{ scale: 1.1 }"
      :whileTap="{ scale: 0.95 }"
      class="bg-white text-primary-10 font-semibold px-6 py-3 rounded-full shadow-md"
    >
      {{ showSection ? 'Close Section' : 'Open Section' }}
    </Motion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

const showSection = ref(false)
const toggleSection = () => {
  showSection.value = !showSection.value
}

const subLinks = {
  services: [
    { name: 'Training Programs', to: '/about', rotate: -4.25 },
    { name: 'E learning', to: '/about', rotate: 4.25 },
    { name: 'Experiential Learning', to: '/about', rotate: -4.25 },
    { name: 'Consultation', to: '/about', rotate: 4.25 },
    { name: 'Learn & Explore Egypt', to: '/about', rotate: -4.25 },
    { name: 'Business Simulation', to: '/about', rotate: 4.25 },
  ],
}
</script>
