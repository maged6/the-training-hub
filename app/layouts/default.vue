<template>
  <!-- Header -->
  <HeaderIndex />
  <Loadingskeleton v-if="isLoading" />
  <main v-else>
    <slot />
    <!-- Page content renders here -->
  </main>

  <FooterIndex />
</template>

<script setup lang="ts">
import { onBeforeMount , computed} from 'vue'
import { useUserStore } from '~/stores/user'
import HeaderIndex from '~/components/header/index.vue'
import FooterIndex from '~/components/footer/index.vue'
import Loadingskeleton from "~/components/main-component/LoadingSkeleton.vue";

import { useGeneralStore } from '~/stores/general'

    const userStore = useUserStore()

    const generalStore = useGeneralStore()

    const isLoading = computed(() => generalStore.isLoadingData)

onBeforeMount(() => {
  userStore.loadUserFromLocalStorage();

  if (!generalStore.home?.length) {
    generalStore.fetchHomeData();
  }
});
</script>
