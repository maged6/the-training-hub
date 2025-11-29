<template>
    <LoginHeader />

    <main>
      <slot /> <!-- Page content renders here -->
    </main>
 
    <FooterIndex />
</template>

<script setup lang="ts">
import LoginHeader from '~/components/header/LoginHeader.vue';
import FooterIndex from '~/components/footer/index.vue'

</script>