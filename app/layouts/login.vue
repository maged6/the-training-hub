<template>
    <LoginHeader />

    <main>
      <slot /> <!-- Page content renders here -->
    </main>
 
    <LoginFooter />
</template>

<script setup lang="ts">
import LoginHeader from '~/components/header/LoginHeader.vue';
import LoginFooter from '~/components/footer/LoginFooter.vue'

</script>