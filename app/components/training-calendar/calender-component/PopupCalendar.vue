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

        <div class="grid grid-cols-2 items-stretch">
          <div class="relative h-full">
            <div class="h-full">
              <NuxtImg
                class="rounded-l-[16px] w-full h-full object-cover"
                :src="'images/layout-hero.jpg'"
                alt="the training hub faqs image"
                width="100%"
                height="100%"
                format="webp"
                quality="80"
                loading="lazy"
              />
            </div>

            <div class="absolute top-3 left-3">
              <p
                class="font-normal rounded-[4px] px-2 py-1 text-white w-fit"
                :class="`bg-primary-20`"
              >
                2 SEATS LEFT
              </p>
            </div>
          </div>

          <div class="flex flex-col px-[37px] py-[24px] gap-[39px]">
            <!-- {{ dataToShow }} -->
            <div class="flex flex-col gap-[8px]">
              <div class="flex justify-between">
                <div>
                  <p
                    class="bg-tertiary-gray-10 rounded-[4px] px-4 py-1 font-[900]"
                  >
                    Soft Skills
                  </p>
                </div>
                <div class="rounded-full bg-tertiary-gray-10 px-2 py-2">
                  <Heart />
                </div>
              </div>
              <div>
                <p class="font-[900] text-[20px] max-w-[240px]">
                  Compensation, Benefits and Incentives
                </p>
              </div>
              <div>
                <p class="font-[100] text-[16px] text-gray-500">
                  Learn how emotional intelligence drives employability,
                  success, and resilience in today’s changing workplace.
                </p>
              </div>
            </div>

            <div class="flex flex-col gap-[8px]">
              <p class="font-[100] text-[14px] text-gray-900">
                2 Days/ Week .6 Weeks
              </p>
              <p class="font-[100] text-[14px] text-gray-900">
                Start From 25th Oct 2025
              </p>
              <p class="font-[900] text-[20px] text-primary-20">8,000 EGP</p>
            </div>

            <div>
              <MainBtn :title="'Register Now'" />
            </div>
          </div>
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script lang="ts">
import CloseBtn from '~/components/svg/Close.vue'
import Heart from '~/components/svg/Heart.vue';
import MainBtn from '~/components/buttons/MainBtn.vue';
import { useTruncateWords } from "@/composables/useTruncateWords";

export default {
  components: { CloseBtn , Heart, MainBtn},
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
