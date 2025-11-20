<template>
    <section>
        <HeaderOfSections 
        :labelSection="'Our Center'"
        :breadcrumbSection="breadcrumbSection"
        :titleSection="'Hub Facilities'"
        :subtitleSection="'Modern Spaces for Learning & Collaboration'"
        />

        <div class="bg-tertiary-gray-5 p-[60px]">
            <div class="w-full max-h-[488px] rounded-[24px] overflow-hidden">
                <NuxtImg
                    class="w-full h-full object-cover rounded-[24px]"
                    :src="'/images/learning-home-1.png'"
                    alt="user profile image"
                    width="1000"
                    height="500"
                    format="webp"
                    loading="lazy"
                />
            </div>

            <div class="pt-[32px] flex justify-between">
                <div>
                    <h2 class="max-w-[414px] font-[900] text-[32px]">Experience State-of-the-Art Training Facilities</h2>
                </div>
                <div class="flex flex-col max-w-[687px] gap-[32px]">
                    <div>
                        <p class="font-[100] text-gray-500">Our hub is strategically located in Cairo and designed to support training sessions, workshops, corporate meetings, and private events. With advanced technology, ergonomic furniture, and a welcoming environment, we ensure every participant enjoys a smooth and focused experience.</p>
                    </div>
                    <div class="bg-white flex justify-around py-[16px]">
                    
                       <div class="flex flex-col gap-[8px]" v-for="(items, index) in hubFeatures" :key="index">
                           <component :is="items.icon" aria-hidden="true" />
                            <p class="text-[20px] font-[900] text-primary-20">{{ items.number }}</p>
                            <p class="text-[16px] font-[100] text-gray-700">{{ items.label }}</p>
                        </div>
                    

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import HeaderOfSections from '../main-component/HeaderOfSections.vue';
import WifiAlt from '../svg/WifiAlt.vue';
import Monitor from '../svg/Monitor.vue';
import Speaker from '../svg/Speaker.vue';

export default{
  components: {
    HeaderOfSections
  },
  data() {
    return {
      breadcrumbSection:  [
        { name: 'Home', to: '/' },
        { name: 'Hub Facilities', to: '/hub-facilities' },
      ],
       hubFeatures: [
        { number: "300", label: "Square Meters" },
        { number: "03", label: "Training Rooms" },
        { number: '',  label: "Wifi Network" , icon: WifiAlt},
        { number: "",  label: "Plasma Screen", icon: Monitor},
        { number: "",  label: "Speakers", icon: Speaker}, 
      ],
    }
  }
}
</script>
