<template>
  <ForgotPassword />
</template>

<script>
definePageMeta({
  layout: 'login',
})

import ForgotPassword from '~/components/login/ForgotPassword.vue';
 
export default {
  components: { ForgotPassword }
}

</script>
