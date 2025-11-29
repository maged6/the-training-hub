<template>
  <Login />
</template>

<script>
definePageMeta({
  layout: 'login',
})

import Login from '~/components/login/Login.vue';
 
export default {
  components: { Login }
}

</script>
