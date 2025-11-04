<template>
  <div
    class="bg-primary-10 text-white py-[9px] px-[30px] flex justify-between items-center relative"
  >
    <NuxtLink to="/" aria-label="Go to homepage of The Training Hub">
      <LogoHeader />
    </NuxtLink>

    <nav aria-label="Main Navigation of The Training Hub">
      <ul class="flex flex-wrap gap-[2px] relative">
        <li
          v-for="(link, i) in AllLinks"
          :key="i"
          class="relative group overflow-hidden inline-block cursor-pointer "
          @click="toggleSection(link, i)"
        >
          <component
            :is="link.icon ? 'button' : 'NuxtLink'"
            :to="!link.icon ? link.to : undefined"
            class="focus:outline-none"
          >
            <div
              :class="[
                'xl:text-[16px] xl:px-[16px] xl:py-[10px] text-[11px] px-[10px] py-[6px] rounded-[100px] font-[500] inline-block relative transition-colors duration-300 delay-100',
                activeIndex === i && link.icon
                  ? 'bg-primary-20 text-white absolute'
                  : 'bg-white text-primary-10 group-hover:bg-primary-10 group-hover:text-white'
              ]"
            >
              <span
                class="flex items-center"
                :class="
                  activeIndex === i && link.icon
                  ? ''
                  : ' transition-transform duration-300 ease-in-out group-hover:-translate-y-[40px]'"
              >
                {{ link.name }}
                <span v-if="link.icon" class="px-[5px] xl:py-[5px] py-[2px]">
                  <Minus v-if="activeIndex === i && link.icon" />
                  <ChevronDown v-else color="'#10171f'" />
                </span>
              </span>
            </div>

            <span
              class="xl:text-[16px] xl:px-[16px] xl:py-[10px] text-[11px] px-[10px] py-[6px] rounded-[100px] font-[500] flex items-center absolute top-[40px] left-0 bg-primary-10 text-white transition-all duration-300 ease-in-out opacity-0 "
              :class="[
                activeIndex === i && link.icon
                  ? 'group-hover:opacity-0'
                  : 'group-hover:opacity-100 group-hover:top-0'
              ]"
            >
              {{ link.name }}
              <span v-if="link.icon" class="px-[5px] xl:py-[5px] py-[2px]">
                <ChevronDown color="white" />
              </span>
            </span>
          </component>
        </li>
        <li><SearchBtn /></li>
        <li>
          <MainBtn 
          :title="'My Account'"
           /></li>
      </ul>
    </nav>
  </div>

  <!-- SubLinks popup -->
  <SubLinks
    :showSection="showSection"
    :subLinks="subLinks"
    @close="closeSection"
  />
</template>

<script lang="ts">
// @ts-ignore
import { NuxtLink } from '#components'

import LogoHeader from '@/components/svg/LogoHeader.vue'
import ChevronDown from '@/components/svg/ChevronDown.vue'
import Minus from '@/components/svg/Minus.vue'
import MainBtn from '../buttons/MainBtn.vue'
import SearchBtn from '../buttons/SearchBtn.vue'
import SubLinks from './header-content/SubLinks.vue'

type NavLink = {
  name: string
  to: string
  icon: boolean
  links?: { name: string; to: string; rotate?: number }[]
}

type SubLinkType = {
  name: string
  to: string
  rotate?: number
}

export default {
  components: { LogoHeader, MainBtn, ChevronDown, SearchBtn, SubLinks, Minus, NuxtLink },

  data() {
    return {
      showSection: false,
      subLinks: [] as SubLinkType[],
      activeIndex: null as number | null,
      AllLinks: [
        { name: 'About', to: '/about', icon: false },
        {
          name: 'Services',
          to: '',
          icon: true,
          links: [
            { name: 'Training Programs', to: '/services/training-programs', rotate: -4.25 },
            { name: 'E learning', to: '/services/e-learning', rotate: 4.25 },
            { name: 'Experiential Learning', to: '/services/experiential-learning', rotate: -4.25 },
            { name: 'Consultation', to: '/services/consultation', rotate: 4.25 },
            { name: 'Learn & Explore Egypt', to: '/services/learn-explore-egypt', rotate: -4.25 },
            { name: 'Business Simulation', to: '/services/business-simulation', rotate: 4.25 },
          ],
        },
        { name: 'Training Calendar', to: '/training-calendar', icon: false },
        { name: 'Hub Facilities', to: '/hub-facilities', icon: false },
        {
          name: 'Media Center',
          to: '',
          icon: true,
          links: [
            { name: 'Blog', to: '/media-center/blog', rotate: -4.25 },
            { name: 'Gallery', to: '/media-center/gallery', rotate: 4.25 },
            { name: 'Videos', to: '/media-center/videos', rotate: -4.25 },
          ],
        },
        { name: 'Careers', to: '/careers', icon: false },
        { name: 'FAQs', to: '/faqs', icon: false },
        { name: 'Contact Us', to: '/contact-us', icon: false },
      ],
    }
  },

  methods: {
    toggleSection(link: NavLink, index: number) {
      if (!link.icon) return

      if (this.activeIndex === index) {
        this.showSection = false
        this.activeIndex = null
        this.subLinks = []
      } else {
        this.activeIndex = index
        this.showSection = true
        this.subLinks = link.links || []
      }
    },

    closeSection() {
      this.showSection = false
      this.activeIndex = null
      this.subLinks = []
    },
  },
  watch: {
    $route() {
      this.closeSection()
    },
  },
}
</script>
