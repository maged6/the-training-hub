<template>
    <div class="flex flex-col">
        <JoinOurNew />
        <FooterContent />
        <Copyright/>
    </div>
</template>

<script lang="ts">
import JoinOurNew from './footer-content/JoinOurNew.vue'
import Copyright from './footer-content/Copyright.vue'
import FooterContent from './footer-content/FooterContent.vue'


export default {
  components: {JoinOurNew , Copyright, FooterContent},
}
</script>
