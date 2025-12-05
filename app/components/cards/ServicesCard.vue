<template>
  <NuxtLink :to="`/services/${cardButton}`">
    <div
      class="w-full bg-white border border-gray-200 rounded-[32px] md:p-5 p-[16px] shadow-sm 
      flex flex-col items-center overflow-hidden transition-all duration-300"
    >
      <!-- Responsive image wrapper -->
      <div class="w-full h-auto">
       <NuxtImg
          class="md:rounded-[24px] rounded-[30px] w-full object-cover h-[391px] md:h-[400px]"
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
        <p class="text-[32px] md:text-[28px] lg:text-[32px] font-[600] leading-snug">
          {{ cardTitle }}
        </p>
        <p class="text-gray-500 text-[16px] mt-2 leading-relaxed">
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
    cardTitle: { type: String, default: '' },
    cardSubtitle: {
      type: String,
      default:
        ''
    },
    cardImg: { type: String, default: '' },
    cardButton: { type: String, default: '' }
  }
}
</script>
