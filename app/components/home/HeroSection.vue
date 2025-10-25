<template>
  <div class="bg-home">
    <div class="grid grid-cols-5 gap-[22px] px-[60px] py-[36px]">
      <div class="col-span-2">
        <IntroSection 
        :labelSection="labelSection"
        :titleSection="titleSection"
        :subtitleSection="subtitleSection"
        :hasBtn="true"
        />
      </div>
      <div class="col-span-3 md:min-h-[644px] relative">
        <div class="w-full h-full bg-cover bg-center bg-no-repeat rounded-[30px] "     
        :style="{ backgroundImage: `url(${Image})` }"
        ></div>
        <div class="absolute right-0 bottom-0 w-[346px] h-[239px] rounded-[30px] pt-2 pl-2 bg-amber-200">
           <video class="w-full h-full object-cover rounded-[30px]" autoplay muted loop>
            <source src="@/assets/imges/hpme-the-training-hub.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import IntroSection from '../main/IntroSection.vue';

export default{
  components: {
    IntroSection
  },
  data() {
    return {
      labelSection: 'Your Gateway to Professional Growth',
      titleSection: 'Empowering Skills for Tomorrow',
      subtitleSection: 'Gain the skills and confidence to advance your career with expert-led programs and modern learning solutions',
      hasBtn: true,
      Image: 'https://images.pexels.com/photos/34299175/pexels-photo-34299175/free-photo-of-elegant-coffee-cup-on-artistic-table-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  }
}
</script>


<style scoped>
.bg-home {
  background-image: url('@/assets/imges/background-home.gif');
  background-size: cover;
  background-position: center;
  height: 90vh;
}
</style>
