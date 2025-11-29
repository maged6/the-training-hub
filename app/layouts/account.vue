<template>
    <!-- Header -->
   <HeaderIndex />
    

    <main class="flex gap-[32px] p-[60px] bg-tertiary-gray-5">
      <aside id="default-sidebar" aria-label="Sidebar">
        <AsideBar />
      </aside>

      <slot /> <!-- Page content renders here -->
    </main>
 
    <FooterIndex />
</template>

<script setup lang="ts">
import HeaderIndex from '~/components/header/index.vue'
import FooterIndex from '~/components/footer/index.vue'
import AsideBar from '~/components/aside-bar/AsideBar.vue'

</script>