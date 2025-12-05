<template>
  <NuxtLink :to="`/services/training-programs/${linkTo}`">
    <div
      class="
      rounded-[16px] h-[387px] w-[90vw] 
      md:rounded-[20px] md:h-[560px] md:w-[500px] 
      shadow-sm border border-gray-200 overflow-hidden relative group bg-cover bg-center transition-all duration-500 "
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
             v-if="limitedOffer"
            class="font-normal rounded-[4px] px-2 py-1 text-primary-10 w-fit bg-secondary-50"
          >
            LIMITED OFFER
          </p>
          <p
            v-else
            class="font-normal rounded-[4px] px-2 py-1 text-white w-fit bg-primary-20"
          >
            {{ seatsAvailable }} SEATS LEFT
          </p>
        </div>

        <div class="flex justify-between">
          <div>
            <p
             v-if="programName"
              class="font-[500] md:text-[14px] text-[11px] rounded-[4px] px-2 py-1 text-black bg-white w-fit"
            >
              {{ programName }}
            </p>
            <p    v-if="titleProgram" class="font-[600] text-[20px] md:text-[28px] text-white">
              {{ titleProgram }}
            </p>
            <p class="font-[400] md:text-[14px] text-[10px] text-white">
              {{ daysPerWeek }} Days/ Week - {{ durationInWeeks }} Weeks - Start at {{ startFrom }}
            </p>
           <PriceAndOffer :price="programPrice" :offer="programOffer"  :textPriceColor="'secondary-10'" :textOfferColor="'white'"/>
          </div>

          <div class="flex items-end ">
            <ArrowRightTop
              :isHovered="isHovered"
              :colorIcon="isHovered ? 'white' : 'black'"
              :backgroundColorIcon="isHovered ? '#b22726' : 'white'"
              :width="'57'"
              :height="'57'"
            />
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import ArrowRightTop from '~/components/svg/ArrowRightTopBtn.vue'
import PriceAndOffer from '~/components/main-component/PriceAndOffer.vue'



export default {
  components: { ArrowRightTop, PriceAndOffer },
  props: {
    imgSection: { type: String, default: '' },
    hoverImgSection: { type: String, default: '' },

    seatsAvailable: { type: Number, default: 0 },
    limitedOffer: { type: Boolean, default: false},

    programName: { type: String, default: '' },
    titleProgram: { type: String, default: '' },

    daysPerWeek: { type: String, default: '' },
    durationInWeeks: { type: String, default: '' },
    startFrom: { type: String, default: '' },

    programPrice: { type: Number, default: 0 },
    programOffer: { type: Number, default: 0 },
    linkTo: { type: String, default: '' },
  },
  data() {
    return {
      isHovered: false,
    }
  },
}
</script>
