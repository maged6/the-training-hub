<template>
    <div class="flex flex-col">
        <JoinOurNew />
        <MobileFooterContent />
        <Copyright/>
    </div>
</template>

<script lang="ts">
import JoinOurNew from './footer-content/JoinOurNew.vue'
import Copyright from './footer-content/Copyright.vue'
import MobileFooterContent from './footer-content/MobileFooterContent.vue'


export default {
  components: {JoinOurNew , Copyright, MobileFooterContent},
}
</script>
