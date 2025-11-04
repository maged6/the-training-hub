<template>
    <!-- Header -->
   <HeaderIndex />

    <main>
      <slot /> <!-- Page content renders here -->
    </main>
 
    <FooterIndex />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '~/stores/user'
import HeaderIndex from '~/components/header/index.vue'
import FooterIndex from '~/components/footer/index.vue'

const userStore = useUserStore()
onMounted(() => {
  userStore.loadUserFromLocalStorage()
})
</script>