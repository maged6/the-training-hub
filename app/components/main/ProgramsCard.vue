<template>
  <NuxtLink :to="'/about'">
    <div
      class="rounded-[20px] h-[560px] w-[500px] shadow-sm border border-gray-200 overflow-hidden relative group bg-cover bg-center transition-all duration-500 "
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Default background image -->
      <div
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
        :style="{ backgroundImage: `url(${imgSection})` }"
      ></div>
      
      <!-- Hover background image -->
      <div
        class="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        :style="{ backgroundImage: `url(${hoverImgSection})` }"
      ></div>

       <!-- Gradient overlay (white → black with opacity 0.2) -->
      <div
        class="absolute inset-0 z-[1]"
        style="
          background: linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(0,0,0,0.2));
        "
      ></div>

      <!-- Card content -->
      <div
         class="relative z-[2] p-5 w-full h-full flex flex-col justify-between rounded-lg"
      >
        <div class="flex justify-end">
          <p
            class="font-normal rounded-[4px] px-2 py-1 text-white w-fit"
            :class="`bg-${lableColor}`"
          >
            {{ lableText }}
          </p>
        </div>

        <div class="flex justify-between">
          <div>
            <p
              class="font-[500] text-[14px] rounded-[4px] px-2 py-1 text-black bg-white w-fit"
            >
              {{ programName }}
            </p>
            <p class="font-[600] text-[28px] text-white">
              {{ titleProgram }}
            </p>
            <p class="font-[400] text-[14px] text-white">
              {{ programDate }}
            </p>
            <p class="font-[500] text-[20px] text-secondary-10">
              {{ programPrice }}
            </p>
          </div>

          <div class="flex items-end ">
            <ArrowRightTop
              :isHovered="isHovered"
              :colorIcon="isHovered ? 'white' : 'black'"
              :backgroundColorIcon="isHovered ? '#b22726' : 'white'"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import ArrowRightTop from '~/components/svg/ArrowRightTopBtn.vue'

export default {
  components: { ArrowRightTop },
  props: {
    imgSection: { type: String, default: '/images/image-1.jpg' },
    hoverImgSection: { type: String, default: '/images/image-2.jpg' },
    lableText: { type: String, default: '2 SEATS LEFT' },
    lableColor: { type: String, default: 'primary-20' },
    programName: { type: String, default: 'Soft Skills' },
    titleProgram: { type: String, default: 'Emotional Intelligence ' },
    programDate: { type: String, default: ' 2 Days/ Week - 6 Weeks - Start at 25th Oct 2025' },
    programPrice: { type: String, default: '8,000 EGP' },
  },
  data() {
    return {
      isHovered: false,
    }
  },
}
</script>
