<template>
  <MyPrograms />
</template>

<script>
definePageMeta({
  layout: 'account',
  middleware: ['auth']
})
import MyPrograms from '~/components/aside-bar/MyPrograms.vue';
export default {
  components: { MyPrograms }
}
</script>
