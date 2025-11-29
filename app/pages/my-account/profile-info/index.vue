<template>
  <ProfileInfo />
</template>

<script>
definePageMeta({
  layout: 'account',
  middleware: ['auth']
})
import ProfileInfo from '~/components/aside-bar/ProfileInfo.vue';
export default {
  components: { ProfileInfo }
}
</script>
