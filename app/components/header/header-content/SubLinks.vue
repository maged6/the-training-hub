<template>
  <section class="absolute w-full bg-primary-10 text-white py-16 px-6 md:px-16 lg:px-[12vw]">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 "
      >
        <div
          v-for="(link, i) in subLinks.media"
          :key="i"
          class="flex justify-center mb-6"
        >
          <NuxtLink
            :to="link.to"
            class="flex items-center justify-center w-full max-w-[380px] h-[100px]
                  bg-white text-primary-10 text-xl md:text-2xl font-medium
                  px-6 py-3 rounded-full"
            :style="{ transform: `rotate(${link.rotate || 0}deg)` }"
          >
            <span class="flex items-center">
              {{ link.name }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
</template>


<script lang="ts">

export default {
  data() {
    return {
      subLinks: {
        services: [
          { name: 'Training Programs', to: '/about', rotate: -4.25 },
          { name: 'E learning', to: '/about', rotate:  4.25  },
          { name: 'Experiential Learning', to: '/about' , rotate: -4.25},
          { name: 'Consultation', to: '/about' , rotate: 4.25},
          { name: 'Learn & Explore Egypt', to: '/about' , rotate: -4.25},
          { name: 'Business Simulation', to: '/about' , rotate: 4.25},
        ],
        media: [
          { name: 'Blog', to: '/about' , rotate: -4.25},
          { name: 'Gallery', to: '/about' , rotate: 4.25},
          { name: 'Videos', to: '/about' , rotate: -4.25},
        ]
      }
    }
  },
}
</script>
