<template>
    <section class="py-[24px] px-[60px]">
        <div class="flex justify-between pb-[24px] border-b-2 border-gray-200">
            <div class="flex flex-col gap-[8px]">
     <p class="text-[32px] font-[900] text-primary-10">
              {{ titleSection }}
            </p>
                  <p class="text-[20px] font-[900] text-primary-20">{{ priceSection }} EGP</p>
            </div>

            <div>
                      <MainBtn :title="'Register Now'" />
            </div>
       
        </div>
        <div class="py-[24px]">
              <FiltersGroup
        :filters="filters"
        :selectedFilter="selectedFilter"
        @update:selectedFilter="selectedFilter = $event"
      />
</div>

    </section>
</template>


<script lang="ts">
import MainBtn from '~/components/buttons/MainBtn.vue';
import PriceAndOffer from '../main-component/PriceAndOffer.vue';
import FiltersGroup from '../main-component/FiltersGroup.vue';

export default {
    name: 'SecoundSingleTraining',
    components: { MainBtn, PriceAndOffer, FiltersGroup },
    props: {
        titleSection: { type: String, default: 'Compensation, Benefits and Incentives' },
        priceSection: { type: String, default: '9500' },
    },
     data() {
    return {
      filters: [
        { label: "Overview", value: "overview" },
        { label: "Content", value: "content" },
        { label: "Benefits", value: "benefits" },
        { label: "Audience", value: "audience" },
        { label: "Registration Terms", value: "registration" },
        { label: "FAQs", value: "faqs" },
      ],
      selectedFilter: "overview",
    };
  },
}
</script>
