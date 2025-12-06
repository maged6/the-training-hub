<template>
  <section>
    <div class="bg-tertiary-gray-5 md:p-[60px] px-[16px] py-[60px]">
      <div class="grid grid-cols-4 md:gap-[92px] gap-[120px]">
        <div class="col-span-4 md:col-span-2 md:order-1 order-2 flex flex-col gap-[16px]">
          <BreadcrumbComponent
            class="md:block hidden"
            :breadcrumb-array="breadcrumbsSection"
            :fontSize="12"
            :textColor="'gray-700'"
          />
          <div class="flex justify-between">
            <div class="rounded w-fit px-1 mb-2 bg-gray-200">
              <span
                class="font-[900] md:text-[14px]"
                :class="`text-primary-10`"
              >
                {{ lableSection }}
              </span>
            </div>
            <div class="flex gap-[8px]">
              <span class="p-[8px] rounded-full bg-gray-200"><Heart /></span>
              <span class="p-[8px] rounded-full bg-gray-200"><Share /></span>
            </div>
          </div>
          <div class="max-w-[467px]">
            <h1 class="text-[32px] font-[900] text-primary-10">
              {{ titleSection }}
            </h1>
          </div>
          <div class="max-w-[527px]">
            <p class="text-[16px] font-[100] text-gray-500">
              {{ subTitleSection }}
            </p>
          </div>

          <div class="bg-white max-w-[497px] rounded-[8px] p-[16px]">
            <!-- 3 Columns for BOTH rows -->
            <div class="grid grid-cols-3 gap-y-[24px]">
              <!-- Row 1 -->
              <div
                v-for="(value, index) in dateSection.slice(0, 3)"
                :key="'r1-' + index"
                class="flex flex-col px-[16px] gap-[4px]"
                :class="index !== 2 ? 'border-r-2 border-gray-200' : ''"
              >
                <span
                  class="text-[14px] font-[100] text-gray-500"
                  >{{ value.type }}</span
                >
                <span
                  class="text-[16px] font-[900] text-primary-10"
                  >{{ value.date }}</span
                >
              </div>

              <!-- Row 2 -->
              <div
                v-for="(value, index) in dateSection.slice(3)"
                :key="'r2-' + index"
                class="flex flex-col px-[16px] gap-[4px]"
                :class="index !== 1 ? 'border-r-2 border-gray-200' : ''"
              >
                <span
                  class="text-[14px] font-[100] text-gray-500"
                  >{{ value.type }}</span
                >
                <span
                  class="text-[16px] font-[900] text-primary-10 text-nowrap"
                  >{{ value.date }}</span
                >
              </div>

              <!-- EMPTY CELL to keep alignment (important!!) -->
              <div></div>
            </div>
          </div>

          <PriceAndOffer :price="8000" :offer="9500" :lableOffer="'LIMITED OFFER'"/>

          <div class="grid grid-cols-4 gap-[16px]">
            <div class="col-span-4 md:col-span-2">
              <MainBtn :title="'Register Now'" />
            </div>
            <div class="col-span-4 md:col-span-2">
              <DownloadBtn :title="'Download PDF Brief'" />
            </div>
          </div>
        </div>

        <div class="col-span-4 md:col-span-2 md:order-2 order-1 h-full z-10">
          <BreadcrumbComponent
            class="md:hidden block"
            :breadcrumb-array="breadcrumbsSection"
            :fontSize="12"
            :textColor="'gray-700'"
          />
          <NuxtImg
            class="rounded-[24px] w-full h-full object-cover"
            :src="imagesSection"
            alt="the training hub services image"
            width="100%"
            height="100%"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { type PropType } from 'vue'
import type { Breadcrumb } from "~/types/breadcrumb";
import BreadcrumbComponent from "../breadcrumb/Breadcrumb.vue";
import PriceAndOffer from '../main-component/PriceAndOffer.vue';
import MainBtn from '../buttons/MainBtn.vue';
import DownloadBtn from '../buttons/DownloadBtn.vue';
import Heart from '../svg/Heart.vue';
import Share from '../svg/Share.vue';

interface dateSection {
    type: string;
    date: string;
}

export default {
    name: 'MainServicesSection',
    components: { BreadcrumbComponent, Heart, Share, PriceAndOffer, MainBtn, DownloadBtn },
    props: {
        lableSection: { type: String, default: 'Soft Skills' },
        titleSection: { type: String, default: 'Compensation, Benefits and Incentives' },
        subTitleSection: { type: String, default: 'Learn how emotional intelligence drives employability, success, and resilience in today’s changing workplace.' },
        dateSection: {
            type: Array as PropType<dateSection[]>, default: () => [
                { type: 'Starts From', date: '24th Oct 2025' },
                { type: 'Ends at', date: '11st Dec 2025' },
                { type: 'Duration', date: '6 Weeks' },
                { type: 'Days', date: '2 Days / Week' },
                { type: 'Time', date: '09:30am - 05:30pm' },
            ]
        },
        priceSection: { type: String, default: '8000' },
        offerSection: { type: String, default: '9500' },
        lableOfferSection: { type: String, default: 'LIMITED OFFER' },
        breadcrumbsSection: {
            type: Array as PropType<Breadcrumb[]>, default: () => [
                { name: 'Home', to: '/' },
                { name: 'Training Programs', to: '/' },
                { name: 'Soft Skills', to: '/' },
                { name: 'Compensation, Benefits and Incentives', to: '/' },

            ]
        },
        imagesSection: { type: String, default: '/images/learning-home-1.png' },
    }
}
</script>
