<template>
  <div class="mx-auto w-full p-[60px] bg-primary-10">
    <div class="grid grid-cols-4 gap-8">
      <!-- Logo and Description -->
      <div class="flex flex-col gap-8">
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
      <div v-for="(section, index) in footerSections" :key="index">
        <h2 class="mb-6 font-semibold uppercase text-white">
          {{ section.title }}
        </h2>
        <ul class="text-tertiary-gray-30 font-medium">
            <li
            v-for="(link, idx) in section.links"
            :key="idx"
            class="mb-4 flex gap-5"
            >
            <component :is="link.component"  class="w-[20px] h-[20px] flex-shrink-0" />
            <a :href="link.href || '#'" class="hover:underline ">
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
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


export default {
  components: { LogoHeader, Facebook, Instgram, LinkedIn, Youtube, Envelope, Phone, MapMark },
  data() {
    return {
      footerInfo: {
        description:
          'The Training Hub empowers professionals and organizations with practical learning solutions, expert-led programs, and modern facilities for growth.',
        socials: [
          { name: 'Facebook', component: 'Facebook' },
          { name: 'Instagram', component: 'Instgram' },
          { name: 'LinkedIn', component: 'LinkedIn' },
          { name: 'YouTube', component: 'Youtube' },
        ],
      },

      footerSections: [
        {
          title: 'Services',
          links: [
            { label: 'Training' },
            { label: 'E - Learning' },
            { label: 'Experiential Learning' },
            { label: 'Consultation' },
            { label: 'Business Simulation' },
          ],
        },
        {
          title: 'Company',
          links: [
            { label: 'About' },
            { label: 'Training Calendar' },
            { label: 'Media Center' },
            { label: 'Careers' },
          ],
        },
        {
          title: 'Support',
          links: [
            { label: 'FAQs' },
            { label: 'Contact Us' },
            { label: 'info@thetraining-hub.com', href: 'mailto:info@thetraining-hub.com', component: 'Envelope' },
            { label: '0222907369 0222907369 0222907369', href: 'tel:0222907369' , component: 'Phone' },
            {
              label:
                'Egypt Office: 22 Al Shahid Mohammed Qenaya Almaza, Cairo, Egypt (Get Direction)',
                component: 'MapMark'
            },
            {
              label:
                'KSA Office: 2599 Unit 9 - South Ring Road - Riyadh - Saudi Arabia (Get Direction)',
                component: 'MapMark'
            },
          ],
        },
      ],
    }
  },
}
</script>