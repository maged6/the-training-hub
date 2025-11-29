<template>
  <ResetPassword />
</template>

<script>
definePageMeta({
  layout: 'login',
})

import ResetPassword from '~/components/login/ResetPassword.vue';
 
export default {
  components: { ResetPassword }
}

</script>
