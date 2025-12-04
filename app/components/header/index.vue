<template>
  <header>
    <HeaderDesktop />
    <HeaderMobile  />
  </header>
</template>

<script lang="ts">
import HeaderDesktop from './HeaderDesktop.vue'
import HeaderMobile from './HeaderMobile.vue'

export default {
  components: { HeaderDesktop, HeaderMobile },
}
</script>
