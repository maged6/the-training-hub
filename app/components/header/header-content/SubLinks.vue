<template>
  <!-- Background motion wrapper -->
  <Motion
    tag="section"
    :initial="{ opacity: 0 }"
    :animate="showSection ? { opacity: 1 } : { opacity: 0 }"
    :transition="{ duration: 0.6, ease: 'easeInOut' }"
    class="absolute w-full py-16 px-6 md:px-16 lg:px-[12vw] bg-primary-10"
  >
    <!-- ✅ Content motion -->
    <AnimatePresence>
      <Motion
        v-if="showSection"
        tag="div"
        :initial="{ opacity: 0, scale: 0.1 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.1}"
        :transition="{ duration: 0.6, ease: 'easeInOut' }"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white"
      >
        <div
          v-for="(link, i) in subLinks"
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
      </Motion>
    </AnimatePresence>
  </Motion>
</template>

<script lang="ts">

export default {
  props: {
    showSection: {
      type: Boolean,
      default: false,
    },
    subLinks: {
      type: Array,
      default: () => ([]),
    }
  }
  }
</script>
