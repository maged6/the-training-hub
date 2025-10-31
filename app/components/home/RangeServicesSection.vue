<template>
  <section
    @mouseenter="isHovering = true"
    @mouseleave="isHovering = false"
    @wheel="onSectionWheel"
  >
    <div class="bg-primary-10 pt-[60px] px-[60px] grid grid-cols-2 gap-[60px]">
      <div class="col-span-1">
        <IntroLeftSection 
        :backgroundLable="'bg-primary-20'"
        :colorLable="'white'"
        :labelSection="labelSection"
          :titleSection="titleSection"
          :subtitleSection="subtitleSection"
          :hasBtn="false"
        />
      </div>

      <!-- Scrollable div -->
      <div
        ref="scrollContainer"
        class="col-span-1 flex flex-col gap-[32px] max-h-[90vh] overflow-y-auto hide-scrollbar"
      >
      <div   
       v-for="(card, index) in ServicesCard" 
          :key="index"> 
        <ServicesCard 
          :cardImg="card.cardImg"
          :cardTitle="card.cardTitle"
          :cardSubtitle="card.cardSubtitle"
          :cardButton="card.cardButton"
          />
      </div>
       
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import IntroLeftSection from '../main/IntroLeftSection.vue'
import ServicesCard from '../main/ServicesCard.vue'

type ServiceCard = {
  cardImg: string
  cardTitle: string
  cardSubtitle: string
  cardButton: string
}

export default defineComponent({
  components: { IntroLeftSection, ServicesCard },
  props: {
    labelSection: { type: String, default: 'Beyond Training Programs' },
    titleSection: { type: String, default: 'Discover Our Full Range of Services' },
    subtitleSection: {
      type: String,
      default:
        'Discover flexible e-learning, immersive experiential learning, expert consultation, cultural journeys, and engaging business simulations—all designed to drive growth and real-world impact.',
    },
    ServicesCard: {
      type: Array as PropType<ServiceCard[]>,
      default: () => [
        {
          cardImg: '/images/image-service.png',
          cardTitle: 'E - Learning',
          cardSubtitle:
            'Learn anytime, anywhere with interactive online courses designed for busy professionals seeking flexible, self-paced growth.',
          cardButton: 'Explore',
        },
      ],
    },
  },
  data() {
    return {
      isHovering: false,
    }
  },
  methods: {
    onSectionWheel(event: WheelEvent) {
      if (!this.isHovering) return

      const container = this.$refs.scrollContainer as HTMLElement | null
      if (!container) return

      const { scrollTop, scrollHeight, clientHeight } = container
      const isAtTop = scrollTop <= 0
      const isAtBottom = scrollTop + clientHeight >= scrollHeight

      if ((event.deltaY < 0 && isAtTop) || (event.deltaY > 0 && isAtBottom)) {
        return
      }

      event.preventDefault()
      container.scrollTop += event.deltaY
    },
  },
})
</script>


<style scoped>
.hide-scrollbar {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
.hide-scrollbar::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>
