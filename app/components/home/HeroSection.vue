<template>
  <section class="bg-home">
    <div class="grid grid-cols-1 md:grid-cols-5 gap-[22px] px-[20px] md:px-[60px] py-[36px]">
      
      <!-- Left section -->
      <div class="col-span-2 flex items-center justify-center md:justify-start">
        <IntroSection 
          :labelSection="labelSection"
          :titleSection="titleSection"
          :subtitleSection="subtitleSection"
          :hasBtn="true"
          :backgroundLable="'bg-secondary-10'"
        />
      </div>

      <!-- Right section -->
      <div class="col-span-3 relative w-full">
        <!-- Masked image background -->
        <div class="w-full h-0 pb-[79%] md:pb-[80%] rounded-[30px] relative overflow-hidden">
         <NuxtImg
          class="mask1 absolute top-0 left-0 w-full h-full object-cover rounded-[30px]"
          :src="imageSection"
          alt="the training hub image"
         sizes="(max-width: 480px) 100vw,
         (max-width: 1024px) 50vw,
         471px"
          format="webp"
          quality="80"
          loading="lazy"
        />

          <!-- Bottom-right video -->
          <div
            class="absolute bottom-[0%] right-[0%] w-[45.5%] md:w-[42.5%] h-[38.5%] md:h-[37%]"
          >
            <video
              class="w-full h-full object-cover rounded-[30px]"
              autoplay
              muted
              loop
            >
              <source :src="videoSection || 'captions/home-the-training-hub.mp4'" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import IntroSection from '../main-component/IntroLeftSection.vue';

export default {
  components: { IntroSection },
  props: {
    labelSection: {
      type: String,
      default: 'Your Gateway to Professional Growth',
    },
    titleSection: {
      type: String,
      default: 'Empowering Skills for Tomorrow',
    },
    subtitleSection: {
      type: String,
      default: 'Gain the skills and confidence to advance your career with expert-led programs and modern learning solutions',
    },
    imageSection: {
      type: String,
      default: 'images/layout-hero.jpg',
    },
    videoSection: {
      type: String,
      default: 'captions/home-the-training-hub.mp4',
    }
  }
};
</script>

<style scoped>
.bg-home {
  background-image: url('@/assets/images/background-home.gif');
  background-size: cover;
  background-position: center;
  height: auto;
  min-height: 90vh;
}

.mask1 {
  -webkit-mask-image: url('@/assets/images/layout-mask.svg');
  mask-image: url('@/assets/images/layout-mask.svg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
}
</style>
