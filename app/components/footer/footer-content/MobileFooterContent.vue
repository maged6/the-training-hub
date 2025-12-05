<template>
  <div class="mx-auto w-full px-[16px] py-[40px] bg-primary-10">
    <!-- Logo and Description -->
    <div class="flex flex-col items-center gap-[24px] w-full">
      <NuxtLink to="/" aria-label="Go to homepage of The Training Hub">
        <LogoHeader />
      </NuxtLink>

      <p class="text-tertiary-gray-30">
        {{ footerInfo.description }}
      </p>

      <!-- Social Icons -->
      <ul class="flex gap-3">
        <li v-for="(icon, index) in footerInfo.socials" :key="index">
          <component :is="icon.component" />
        </li>
      </ul>
    </div>

    <!-- Dynamic Columns -->
    <div
      v-for="(section, index) in footerSections"
      :key="index"
      class="py-[32px]"
    >
      <div
        class="flex justify-between items-center cursor-pointer md:cursor-default"
        @click="toggleSection(index)"
      >
        <h2 class="font-semibold uppercase text-white">
          {{ section.title }}
        </h2>

        <!-- Show + or - on mobile only -->
        <span class="md:hidden">
          <component
            :is="openSections.includes(index) ? 'Minus' : 'Plus'"
            :colorIcon="'red'"
            :iconHeight="20"
            :iconWidth="20"
          />
        </span>
      </div>

      <!-- Animated Dropdown -->
      <transition name="accordion">
        <ul
          v-show="openSections.includes(index) || isDesktop"
          class="text-tertiary-gray-30 font-medium mt-4 overflow-hidden"
        >
          <li
            v-for="(link, idx) in section.links"
            :key="idx"
            class="mb-4 flex gap-5"
          >
            <component
              v-if="link.component"
              :is="link.component"
              class="w-[20px] h-[20px]"
            />
            <a :href="link.href || '#'" class="hover:underline">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import LogoHeader from '@/components/svg/LogoHeader.vue'
import Facebook from '@/components/svg/Facebook.vue'
import Instgram from '@/components/svg/Instgram.vue'
import LinkedIn from '@/components/svg/LinkedIn.vue'
import Youtube from '@/components/svg/Youtube.vue'
import Envelope from '@/components/svg/Envelope.vue'
import Phone from '@/components/svg/Phone.vue'
import MapMark from '@/components/svg/MapMark.vue'
import Minus from '@/components/svg/Minus.vue'
import Plus from '@/components/svg/Plus.vue'

export default {
  components: {
    LogoHeader,
    Facebook,
    Instgram,
    LinkedIn,
    Youtube,
    Envelope,
    Phone,
    MapMark,
    Plus,
    Minus
  },

  data() {
    return {
      isDesktop: false,
      openSections: [] as number[],

      footerInfo: {
        description:
          'The Training Hub empowers professionals and organizations with practical learning solutions, expert-led programs, and modern facilities for growth.',
        socials: [
          { name: 'Facebook', component: 'Facebook' },
          { name: 'Instagram', component: 'Instgram' },
          { name: 'LinkedIn', component: 'LinkedIn' },
          { name: 'YouTube', component: 'Youtube' }
        ]
      },

      footerSections: [
        {
          title: 'Services',
          links: [
            { label: 'Training' },
            { label: 'E - Learning' },
            { label: 'Experiential Learning' },
            { label: 'Consultation' },
            { label: 'Business Simulation' }
          ]
        },
        {
          title: 'Company',
          links: [
            { label: 'About' },
            { label: 'Training Calendar' },
            { label: 'Media Center' },
            { label: 'Careers' }
          ]
        },
        {
          title: 'Support',
          links: [
            { label: 'FAQs' },
            { label: 'Contact Us' },
            {
              label: 'info@thetraining-hub.com',
              href: 'mailto:info@thetraining-hub.com',
              component: 'Envelope'
            },
            {
              label: '0222907369 0222907369 0222907369',
              href: 'tel:0222907369',
              component: 'Phone'
            },
            {
              label:
                'Egypt Office: 22 Al Shahid Mohammed Qenaya Almaza, Cairo, Egypt (Get Direction)',
              component: 'MapMark'
            },
            {
              label:
                'KSA Office: 2599 Unit 9 - South Ring Road - Riyadh - Saudi Arabia (Get Direction)',
              component: 'MapMark'
            }
          ]
        }
      ]
    }
  },

  mounted() {
    this.checkScreen()
    window.addEventListener('resize', this.checkScreen)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreen)
  },

  methods: {
    toggleSection(index: number) {
      if (this.isDesktop) return

      if (this.openSections.includes(index)) {
        this.openSections = this.openSections.filter(i => i !== index)
      } else {
        this.openSections.push(index)
      }
    },

    checkScreen() {
      this.isDesktop = window.innerWidth >= 768
    }
  }
}
</script>

<style>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.35s ease;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 500px;
}
</style>
