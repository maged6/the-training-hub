<template>
  <NuxtLink :to="'/'">
    <div
      class="w-full bg-white border border-gray-200 rounded-[32px] p-5 shadow-sm 
      flex flex-col items-center overflow-hidden transition-all duration-300"
    >
      <!-- Responsive image wrapper -->
      <div class="w-full h-auto">
       <NuxtImg
          class="rounded-[24px] w-full object-cover max-h-[300px] md:max-h-[400px]"
          :src="cardImg"
          alt="the training hub image"
          loading="lazy"
          format="webp"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
          width="400"
          height="200"
        />
      </div>

      <!-- Text content -->
      <div class="py-4 text-start w-full">
        <p class="text-[22px] md:text-[28px] lg:text-[32px] font-[600] leading-snug">
          {{ cardTitle }}
        </p>
        <p class="text-gray-500 text-[14px] md:text-[16px] mt-2 leading-relaxed">
          {{ cardSubtitle }}
        </p>
      </div>

      <!-- Button -->
      <div class="mt-auto flex items-start w-full">
        <SecondaryBtn :title="cardButton" />
      </div>
    </div>
  </NuxtLink>
</template>

<script>
import SecondaryBtn from '../buttons/SecondaryBtn.vue';

export default {
  components: {
    SecondaryBtn
  },
  props: {
    cardTitle: { type: String, default: 'E - Learning ' },
    cardSubtitle: {
      type: String,
      default:
        'Learn anytime, anywhere with interactive online courses designed for busy professionals seeking flexible, self-paced growth.'
    },
    cardImg: { type: String, default: '' },
    cardButton: { type: String, default: 'Explore' }
  }
}
</script>
