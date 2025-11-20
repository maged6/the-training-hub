<template>
  <section class="w-full bg-primary-10 py-20">
    <div>
      <IntroCenterSection
        :labelBackgroundColor="'bg-primary-20'"
        :maxWidthofHeader="768"
        :headerColor="'white'"
        :labelColor="'white'"
        :subtitleColor="'gray-400'"
        :labelSection="LableSection"
        :titleSection="TitleSection"
        :subtitleSection="SubTilteSection"
      />
    </div>

    <div class="container mx-auto text-center">
      <!-- Image + Cards -->
      <div class="relative flex justify-center mt-3">
        <!-- Left Cards -->
        <div
          class="absolute right-[calc(90%-420px)] space-y-20 h-full flex flex-col items-center justify-center"
        >
          <SmallRedCard :text="BoxOne" />
          <SmallRedCard :text="BoxTwo" />
        </div>

        <!-- Center Image -->
        <div class="rounded-xl overflow-hidden shadow-xl">
          <NuxtImg
            class="object-cover"
            :src="ImgSection"
            :alt="AltSection"
            width="450px"
            height="449px"
            format="webp"
            quality="80"
            loading="lazy"
          />
        </div>

        <!-- Right Cards -->
        <div
          class="absolute left-[calc(90%-420px)] space-y-20 h-full flex flex-col items-center justify-center"
        >
          <SmallRedCard :text="BoxThree" />
          <SmallRedCard :text="BoxFour" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import IntroCenterSection from '../main-component/IntroCenterSection.vue'
import SmallRedCard from '../cards/SmallRedCard.vue';

export default {
  components: {
    IntroCenterSection,
    SmallRedCard
  },
  props: {
    LableSection: {
      type: String,
      default: '',
    },
    TitleSection: {
      type: String,
      default: '',
    },
    SubTilteSection: {
      type: String,
      default: '',
    },
    ImgSection: {
      type: String,
      default: '',
    },
    AltSection: {
      type: String,
      default: '',
    },
    BoxOne: {
      type: String,
      default: '',
    },
    BoxTwo: {
      type: String,
      default: '',
    },
    BoxThree: {
      type: String,
      default: '',
    },
    BoxFour: {
      type: String,
      default: '',
    },
  },

}
</script>
