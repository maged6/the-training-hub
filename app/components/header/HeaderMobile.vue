<template>
  <!-- MOBILE TOP BAR -->
  <div
    class="bg-primary-10 text-white flex justify-between items-center md:hidden py-[38.5px] px-[16px] "
  >
    <NuxtLink to="/" aria-label="Go to homepage of The Training Hub">
      <LogoHeader />
    </NuxtLink>

    <HamburgerMenu @click="openSidebarMenue()" />
  </div>

  <!-- OVERLAY (only mobile) -->
  <div
    v-if="openSidebar"
    class="fixed inset-0 bg-white/50 z-40 md:hidden"
    @click="openSidebar = !openSidebar"
  ></div>

  <!-- SIDEBAR -->
  <aside
    :class="openSidebar ? 'translate-x-0' : '-translate-x-full'"
    class="fixed top-0 left-0 w-80 h-full bg-primary-10 border-r z-50 transition-transform duration-300"
  >
    <header class="p-4 flex justify-between items-center">
      <LogoHeader :width="130" />

      <HeaderClose @click="openSidebar = !openSidebar" />
    </header>

    <ul class="flex flex-col gap-[38px] relative">
      <li v-for="(link, i) in AllLinks" :key="i" class="cursor-pointer">
        <!-- BUTTON OR LINK -->
        <component
          :is="link.icon ? 'button' : 'NuxtLink'"
          v-bind="link.to ? { to: link.to } : {}"
          class="w-full flex items-center justify-between py-2 px-3 text-white"
          @click="link.icon ? toggleSection(i) : null"
        >
          <span>{{ link.name }}</span>

          <span v-if="link.icon">
            <svg v-if="activeIndex === i" width="20" height="20" fill="white">
              <path d="M18 15L12 9 6 15" />
            </svg>
            <svg v-else width="20" height="20" fill="white">
              <path d="M6 9L12 15 18 9" />
            </svg>
          </span>
        </component>

        <!-- SUB-MENU -->
        <transition name="accordion">
          <div
            v-if="activeIndex === i && link.links"
            class="pl-6 py-1 space-y-1 text-white"
          >
            <NuxtLink
              v-for="(child, j) in link.links"
              :key="j"
              class="flex items-center justify-between w-full py-2 px-3 rounded-lg"
              :to="child.to"
            >
              {{ child.name }}
            </NuxtLink>
          </div>
        </transition>
      </li>
    </ul>
  </aside>
</template>

<script>
  // @ts-ignore
import { NuxtLink } from '#components'
import { AllLinks } from '@/utils/navLinks'
import HamburgerMenu from '@/components/svg/HamburgerMenu.vue'
import LogoHeader from '@/components/svg/LogoHeader.vue'
import HeaderClose from '@/components/svg/HeaderClose.vue'

export default {
    components: { HamburgerMenu , LogoHeader, HeaderClose, NuxtLink},

  data() {
    return {
      openSidebar: false,
      accordion: {
        services: false,
        sub1: false,
        sub2: false,
      },
      activeIndex: null,
      AllLinks
    }
  },
  methods: {
    openSidebarMenue() {
      this.openSidebar = !this.openSidebar
    },
     toggleSection(i) {
      this.activeIndex = this.activeIndex === i ? null : i;
    },
  },
    watch: {
    $route() {
      // Auto-close sidebar when page changes
      this.openSidebar = false
      this.activeIndex = null
    }
  },
}
</script>

<style>
/* Smooth accordion */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
