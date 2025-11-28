<template>

    <main>
      <slot /> <!-- Page content renders here -->
    </main>
 
    <FooterIndex />
</template>

<script setup lang="ts">
import FooterIndex from '~/components/footer/index.vue'

</script>