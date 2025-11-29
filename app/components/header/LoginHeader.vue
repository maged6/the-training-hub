<template>
  <header>
    <HeaderLoginDesktop class="hidden md:flex" />
    <HeaderMobile class="flex md:hidden" />
  </header>
</template>

<script lang="ts">
import HeaderLoginDesktop from './HeaderLoginDesktop.vue'
import HeaderMobile from './HeaderLoginMobile.vue'

export default {
  components: { HeaderLoginDesktop, HeaderMobile },
}
</script>
