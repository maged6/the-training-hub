<template>
  <div class="w-full relative">
    <!-- Navigation -->
    <div
      class="flex items-center justify-center gap-3 absolute bottom-[-6px] right-[60px] z-10"
    >
      <div
        class="flex items-center justify-center rotate-[-135deg] cursor-pointer"
        @click="scrollPrev"
      >
        <ArrowRightTopBtn colorIcon="white" backgroundIcon="#b22726" />
      </div>

      <div
        class="flex items-center justify-center rotate-45 cursor-pointer"
        @click="scrollNext"
      >
        <ArrowRightTopBtn colorIcon="white" backgroundIcon="#b22726" />
      </div>
    </div>

<div
  class="absolute bottom-[0px] left-[60px] w-[80%] bg-gray-300 rounded-full h-2 overflow-hidden"
>
  <div
    class="bg-primary-20 h-2 rounded-full transition-all duration-300"
    :style="{ width: progressPercent + '%' }"
  ></div>
</div>

    <!-- Slider -->
    <div class="relative pb-[32px] ml-[41px]">
      <!-- SCROLL AREA -->
      <div ref="wrapper" class="overflow-hidden">
        <div class="flex gap-[16px] min-w-max pb-[32px]">
          <div
            v-for="(item, index) in testimonials"
            :key="index"
            class="flex-shrink-0 w-[547px] h-[403px] rounded-[24px]"
          >
            <div class="rounded-[24px] w-full h-full overflow-hidden">
              <NuxtImg
                class="w-full h-full object-cover rounded-[24px]"
                :src="item.image"
                alt="Leadership article"
                format="webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

// https://jsfiddle.net/sm0yqfhv/2/

import { defineComponent } from "vue";
import ArrowRightTopBtn from "~/components/svg/ArrowRightTop.vue";

export default defineComponent({
  name: "TestimonialCarousel",
  components: { ArrowRightTopBtn },

  data() {
    return {
      cardWidth: 563, // 547 + 16 gap
      progressPercent: 0, // 👈 NEW
      testimonials: [
        { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500" },
        { image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500" },
        { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500" },
        { image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500" },
        { image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500" },
        { image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500" },
        { image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500" },
        { image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500" },
      ],
    };
  },

 mounted() {
  const wrapper = this.$refs.wrapper as HTMLElement;
  wrapper.addEventListener("scroll", this.updateProgress);
  this.updateProgress(); // initial
},

beforeUnmount() {
  const wrapper = this.$refs.wrapper as HTMLElement;
  wrapper.removeEventListener("scroll", this.updateProgress);
},

methods: {
  updateProgress() {
    const wrapper = this.$refs.wrapper as HTMLElement;

    const maxScroll =
      wrapper.scrollWidth - wrapper.clientWidth;

    this.progressPercent =
      (wrapper.scrollLeft / maxScroll) * 100;
  },

  scrollNext() {
    const wrapper = this.$refs.wrapper as HTMLElement;
    wrapper.scrollBy({ left: this.cardWidth, behavior: "smooth" });
  },

  scrollPrev() {
    const wrapper = this.$refs.wrapper as HTMLElement;
    wrapper.scrollBy({ left: -this.cardWidth, behavior: "smooth" });
  },
}
});
</script>
