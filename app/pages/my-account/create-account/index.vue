<template>
  <CreateAccount />
</template>

<script>
definePageMeta({
  layout: 'login',
})

import CreateAccount from '~/components/login/CreateAccount.vue';
 
export default {
  components: { CreateAccount }
}

</script>
