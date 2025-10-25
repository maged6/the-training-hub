<template>
    <!-- Header -->
   <HeaderIndex />

    <main>
      <slot /> <!-- Page content renders here -->
    </main>

    <!-- <footer class="bg-gray-800 text-gray-300 p-4 text-center">
      © {{ new Date().getFullYear() }} The Training Hub
    </footer> -->
</template>

<script setup lang="ts">
import HeaderIndex from '~/components/header/index.vue'
</script>