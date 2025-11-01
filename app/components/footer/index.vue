<template>
  <footer>
    <FooterDesktop class="hidden md:flex" />
    <FooterMobile class="flex md:hidden" />
  </footer>
</template>

<script lang="ts">
import FooterDesktop from './FooterDesktop.vue'
import FooterMobile from './FooterMobile.vue'

export default {
  components: { FooterDesktop, FooterMobile },
}
</script>
