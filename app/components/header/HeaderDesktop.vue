<template>
  <div
    class="bg-primary-10 text-white py-[9px] px-[30px] flex justify-between items-center relative"
  >
    <NuxtLink to="/" aria-label="Go to homepage of The Training Hub">
      <LogoHeader />
    </NuxtLink>
    <nav
      class="flex flex-wrap gap-[6px] relative"
      aria-label="Main Navigation of The Training Hub"
    >
      <NuxtLink
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        class="relative group overflow-hidden inline-block"
      >
        <!-- White button (outer stays fixed) -->
        <div
          class="text-[16px] bg-white text-primary-10 px-[16px] py-[10px] rounded-[100px] font-[500] inline-block relative group-hover:bg-primary-10 transition-colors duration-300 delay-100"
        >
          <!-- Animate only text -->
          <span
            class="flex items-center transition-transform duration-300 ease-in-out group-hover:-translate-y-[40px]"
          >
            {{ link.name }}
            <span v-if="link.icon" class="px-[5px] py-[5px]">
              <ChevronDown color="#10171f" />
            </span>
          </span>
        </div>

        <!-- primary-10 hover button -->
        <span
          class="flex items-center absolute top-[40px] left-0 text-[16px] bg-primary-10 text-white px-[16px] py-[10px] rounded-[100px] font-[500] transition-all duration-300 ease-in-out opacity-0 group-hover:top-0 group-hover:opacity-100"
        >
          {{ link.name }}
          <span v-if="link.icon" class="px-[5px] py-[5px]">
            <ChevronDown color="white" />
          </span>
        </span>
      </NuxtLink>
      <SearchBtn />
      <MainBtn :title="'My Account'" @click="showpopup = !showpopup"/>
    </nav>
  </div>
  <SubLinks v-if="showpopup"/>
</template>

<script lang="ts">
import LogoHeader from '@/components/svg/LogoHeader.vue'
import ChevronDown from '@/components/svg/ChevronDown.vue'
import MainBtn from '../buttons/MainBtn.vue';
import SearchBtn from '../buttons/SearchBtn.vue';
import SubLinks from './header-content/SubLinks.vue';

export default {
  components: { LogoHeader, MainBtn, ChevronDown, SearchBtn,SubLinks },
  data() {
    return {
      showpopup: false,
      links: [
        { name: 'About', to: '/about', icon: false },
        { name: 'Services', to: '/services', icon: true },
        { name: 'Training Calendar', to: '/training-calendar', icon: false },
        { name: 'Hub Facilities', to: '/hub-facilities', icon: false },
        { name: 'Media Center', to: '/media-center' , icon: true},
        { name: 'Careers', to: '/careers' , icon: false},
        { name: 'FAQs', to: '/faqs', icon: false },
        { name: 'Contact Us', to: '/contact' , icon: false},
      ],
    }
  },
}
</script>
