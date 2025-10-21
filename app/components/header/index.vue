<template>
  <header>
    <HeaderDesktop class="hidden md:flex" />
    <HeaderMobile class="flex md:hidden" />
  </header>
</template>

<script setup lang="ts">
import HeaderDesktop from './HeaderDesktop.vue'
import HeaderMobile from './HeaderMobile.vue'
</script>
