<template>
  <div>
    <button
      @click="openModal = true"
      class="rounded-md bg-slate-800 py-2 px-4 text-sm text-white hover:bg-slate-700 transition-all"
    >
      Open Animation Modal
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
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm p-4"
      >
      <!-- header  -->
         <div class="bg-transparent flex justify-end fixed top-[-50px] right-1">
            <div class="bg-white p-3 rounded-full">
                <CloseBtn /> 
            </div>
        </div>
        <div class="text-xl font-medium text-slate-800 pb-4">
          Custom Animation Modal
        </div>

        <div class="border-t border-slate-200 py-4 text-slate-600">
          The key to more success is to have a lot of pillows...
        </div>

        <div class="pt-4 flex justify-end gap-2">
          <button @click="closeModal" class="py-2 px-4 text-sm rounded border hover:bg-slate-100">
            Cancel
          </button>
          <button @click="closeModal" class="py-2 px-4 text-sm rounded bg-green-600 text-white hover:bg-green-700">
            Confirm
          </button>
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script lang="ts">
import CloseBtn from '~/components/svg/Close.vue'

export default {
  components: { CloseBtn },
data() {
  return {
    openModal: false,
  }
},
methods: {
  closeModal() {
    this.openModal = false
  },
},
}
</script>
