<template>
    <div class="flex flex-col">
        <FooterContent />
        <Copyright/>
    </div>
</template>

<script lang="ts">
import Copyright from './footer-content/Copyright.vue'
import FooterContent from './footer-content/FooterContent.vue'


export default {
  components: {Copyright, FooterContent},
}
</script>
