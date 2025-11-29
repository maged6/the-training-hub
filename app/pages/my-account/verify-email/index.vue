<template>
  <VerifyEmail />
</template>

<script>
definePageMeta({
  layout: 'login',
})

import VerifyEmail from '~/components/login/VerifyEmail.vue';
 
export default {
  components: { VerifyEmail }
}

</script>
