<template>
  <div class="text-center">
      <div>My Account</div>
  </div>
</template>

<script>
definePageMeta({
  layout: 'account',
  middleware: ['auth']
})
</script>
