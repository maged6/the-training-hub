<template>
  <Favorites />
</template>

<script>
definePageMeta({
  layout: 'account',
  middleware: ['auth']
})
import Favorites from '~/components/aside-bar/Favorites.vue';
export default {
  components: { Favorites }
}
</script>
