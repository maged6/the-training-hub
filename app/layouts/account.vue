<template>
    <!-- Header -->
   <HeaderIndex />

    <main>
      <slot /> <!-- Page content renders here -->
    </main>
 
    <FooterIndex />
</template>

<script setup lang="ts">
import HeaderIndex from '~/components/header/index.vue'
import FooterIndex from '~/components/footer/index.vue'

</script>