<template>
    <!-- Header -->
   <HeaderIndex />
    

    <main class="flex gap-[32px] p-[60px] bg-tertiary-gray-5">
      <aside id="default-sidebar" aria-label="Sidebar">
        <AsideBar />
      </aside>

      <slot /> <!-- Page content renders here -->
    </main>
 
    <LoginFooter />
</template>

<script setup lang="ts">
import HeaderIndex from '~/components/header/index.vue'
import LoginFooter from '~/components/footer/LoginFooter.vue'
import AsideBar from '~/components/aside-bar/AsideBar.vue'

</script>