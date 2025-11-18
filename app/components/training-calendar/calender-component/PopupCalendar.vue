<template>
  <div>
    <button
      @click="openModal = true"
      class="rounded-[21px] bg-primary-20 py-[0.5px] px-2 cursor-pointer text-sm text-white hover:bg-red-900 transition-all"
    >
    {{ truncateWords('Open Animation Modal') }}
    </button>

    <!-- Backdrop -->
    <div
      v-if="openModal"
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      :leave="{ opacity: 0 }"
      class="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm"
      @click="closeModal"
    />

    <!-- MODAL -->
    <AnimatePresence>
      <Motion
        v-if="openModal"
        tag="div"
        :initial="{ opacity: 0, y: -40, scale: 0.9 }"
        :animate="{ opacity: 1, y: 0, scale: 1 }"
        :exit="{ opacity: 0, y: -40, scale: 0.9 }"
        :transition="{ duration: 0.6, ease: 'easeInOut' }"
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] h-fit flex-1 w-3/5 min-w-[40%] max-w-[50%] rounded-[16px] bg-white shadow-sm"
      >
        <!-- header  -->
        <div class="bg-transparent flex justify-end fixed top-[-50px] right-1">
          <div class="bg-white p-3 rounded-full" @click="closeModal">
            <CloseBtn />
          </div>
        </div>

        <TrainingCard />
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script lang="ts">
import CloseBtn from '~/components/svg/Close.vue'
import { useTruncateWords } from "@/composables/useTruncateWords";
import TrainingCard from "~/components/cards/TrainingCard.vue";

export default {
  components: { CloseBtn, TrainingCard},
  props: {
    dataToShow: {
      type: String,
      default: '',
    }
  },
data() {
  return {
    openModal: false,
  }
},
methods: {
  closeModal() {
    this.openModal = false
  },
  truncateWords(text: string) {
    return useTruncateWords().truncateWords(text)
  },
},
}
</script>
