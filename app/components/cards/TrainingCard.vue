<template>
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
              <NuxtLink :to="'/services/training-programs/single-training'">
               <MainBtn :title="'Register Now'" />
              </NuxtLink>
            </div>
          </div>
        </div>
</template>


<script lang="ts">
import Heart from '~/components/svg/Heart.vue';
import MainBtn from '~/components/buttons/MainBtn.vue';

export default {
  components: { Heart, MainBtn},
  props: {
  },
}
</script>
