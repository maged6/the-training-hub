<template>
  <footer>
    <FooterLoginDesktop class="hidden md:flex" />
    <FooterLoginMobile class="flex md:hidden" />
  </footer>
</template>

<script lang="ts">
import FooterLoginDesktop from './FooterLoginDesktop.vue'
import FooterLoginMobile from './FooterLoginMobile.vue'

export default {
  components: { FooterLoginDesktop, FooterLoginMobile },
}
</script>
