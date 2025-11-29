<template>
  <CheckYourEmail />
</template>

<script>
definePageMeta({
  layout: 'login',
})

import CheckYourEmail from '~/components/login/CheckYourEmail.vue';
 
export default {
  components: { CheckYourEmail }
}

</script>
