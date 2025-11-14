<template>
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <Loadingskeleton />
  </div>
  <div v-else>
    <HeroSection
      :labelSection="generalData.hero?.label"
      :titleSection="generalData.hero?.title"
      :subtitleSection="generalData.hero?.subtitle"
      :imageSection="generalData.hero?.image"
      :videoSection="generalData.hero?.video"
    />

    <ExploreSection
      :labelSection="generalData.explore?.label"
      :titleSection="generalData.explore?.title"
      :subtitleSection="generalData.explore?.subtitle"
      :programs="generalData.explore?.programs"
    />
    <OverviewSection
      :titleSection="generalData.overview?.title"
      :descriptionSection="generalData.overview?.description"
      :image1Section="generalData.overview?.first_small_image"
      :image2Section="generalData.overview?.second_small_image"
      :listSection="generalData.overview?.red_line_text"
    />
    <RangeServicesSection
      :labelSection="generalData.discover?.label"
      :titleSection="generalData.discover?.second_title"
      :subtitleSection="generalData.discover?.second_description"
      :ServicesCard="generalData.discover?.pages"
    />
    <LearningAndCollaborationSection
      :labelSection="generalData.facilities?.label"
      :titleSection="generalData.facilities?.title"
      :facilities="generalData.facilities?.facilities"
      :smallImage="generalData.facilities?.small_image"
      :largeImage="generalData.facilities?.large_image"
    />
    <OurNewsSection
      :labelSection="generalData.news?.label"
      :titleSection="generalData.news?.title"
      :posts="generalData.news?.posts"
    />
    <SupportClientsSection
      :labelSection="generalData.partners?.label"
      :titleSection="generalData.partners?.title"
      :OurClients="generalData.partners?.logos"
    />
    <ClientStories 
    :labelSection="successStoriesData?.title"
    :userSection="successStoriesData?.stories"
    />
    <FrequentlyQuestions 
    :labelSection="faqsData?.red_label_text"
    :titleSection="faqsData?.title"
    :imageSection="faqsData?.image"
    :faqsQuestion="faqsData?.faqs"
    />
    <RequestTeam />
  </div>
</template>

<script>
import { useGeneralStore } from "~/stores/general";

import Loadingskeleton from "~/components/main/LoadingSkeleton.vue";
import HeroSection from "~/components/home/HeroSection.vue";
import ExploreSection from "~/components/home/ExploreSection.vue";
import OverviewSection from "~/components/home/OverviewSection.vue";
import RangeServicesSection from "~/components/home/RangeServicesSection.vue";
import LearningAndCollaborationSection from "~/components/home/LearningAndCollaborationSection.vue";
import OurNewsSection from "~/components/home/OurNewsSection.vue";
import SupportClientsSection from "~/components/home/SupportClientsSection.vue";
import ClientStories from "~/components/home/ClientStories.vue";
import FrequentlyQuestions from "~/components/home/FrequentlyQuestions.vue";
import RequestTeam from "~/components/home/RequestTeam.vue";

export default {
  components: {
    HeroSection,
    ExploreSection,
    OverviewSection,
    RangeServicesSection,
    LearningAndCollaborationSection,
    OurNewsSection,
    SupportClientsSection,
    ClientStories,
    FrequentlyQuestions,
    RequestTeam,
    Loadingskeleton,
  },
  setup() {
    const generalStore = useGeneralStore();

    onMounted(async () => {
      if (!generalStore.home || generalStore.home.length === 0) {
        await generalStore.fetchHomeData();
      }
    });

    const generalData = computed(() => generalStore.home);
    const successStoriesData = computed(() => generalStore.successStories);
    const faqsData = computed(() => generalStore.faqs);

    const isLoading = computed(() => generalStore.loading);
    return { generalData, successStoriesData, faqsData, isLoading };
  },
};
</script>
