<template>
  <div
    class="bg-tertiary-gray-5  py-[26px] px-[60px] flex justify-between items-center relative"
  >
    <NuxtLink to="/" aria-label="Go to homepage of The Training Hub">
      <LogoHeader :colorIcon="'#727d7d'" />
    </NuxtLink>

    <div>
      <NuxtLink to="/" aria-label="Go to homepage of The Training Hub">
        <DownloadBtn :title="'Back To Home'" :hasIcon="false"/>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import { NuxtLink } from '#components'

import LogoHeader from '@/components/svg/LogoHeader.vue'
import DownloadBtn from '../buttons/DownloadBtn.vue';

export default {
  components: { LogoHeader, NuxtLink, DownloadBtn },
}
</script>
