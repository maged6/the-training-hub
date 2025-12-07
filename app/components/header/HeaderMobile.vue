<template>

    <!-- MOBILE TOP BAR -->
    <div class="bg-primary-10 text-white flex justify-between items-center md:hidden py-[38.5px] px-[16px] ">
        <NuxtLink to="/" aria-label="Go to homepage of The Training Hub">
      <LogoHeader />
    </NuxtLink> 
    
      <HamburgerMenu  @click="openSidebarMenue()" />
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

      <!-- SCROLLABLE CONTENT -->
      <nav class="h-full overflow-y-auto px-2">


        <!-- Accordion Example -->
        <div class="mt-2">
            <button
            class=" flex  items-center justify-between w-full py-2 px-3"
          >
            <span class="text-white flex items-center gap-x-3">
              About
            </span>
          </button>

          <button
            @click="toggle('services')"
            class=" flex  items-center justify-between w-full py-2 px-3"
          >
            <span class="text-white flex items-center gap-x-3">
              Services
            </span>
            <span>
              <svg v-if="accordion.services" width="20" height="20"><path d="M18 15L12 9 6 15"/></svg>
              <svg v-else width="20" height="20"><path d="M6 9L12 15 18 9"/></svg>
            </span>
          </button>

          <!-- ACCORDION CONTENT -->
          <transition name="accordion">
            <div v-if="accordion.services" class="pl-6 py-1 space-y-1">
              
              <!-- Sub accordion -->
              <button
                @click="toggle('sub1')"
                class="flex items-center justify-between w-full py-2 px-3 rounded-lg text-white"
              >
                Training Programs
              </button>
            </div>
          </transition>

        </div>

      </nav>
    </aside>
</template>

<script>
import HamburgerMenu from '@/components/svg/HamburgerMenu.vue'
import LogoHeader from '@/components/svg/LogoHeader.vue'
import HeaderClose from '@/components/svg/HeaderClose.vue'

export default {
    components: { HamburgerMenu , LogoHeader, HeaderClose},

  data() {
    return {
      openSidebar: false,
      accordion: {
        services: false,
        sub1: false,
        sub2: false,
      }
    }
  },
  methods: {
    toggle(key) {
      this.accordion[key] = !this.accordion[key];
    },
    openSidebarMenue() {
      this.openSidebar = !this.openSidebar
    }
  }
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
