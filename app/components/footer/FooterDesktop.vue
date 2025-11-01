<template>
    <div class="flex flex-col">
        <TouchOurTeam />
        <JoinOurNew />
        <FooterContent />
        <Copyright/>
    </div>
</template>

<script lang="ts">
import TouchOurTeam from './footer-content/TouchOurTeam.vue'
import JoinOurNew from './footer-content/JoinOurNew.vue'
import Copyright from './footer-content/Copyright.vue'
import FooterContent from './footer-content/FooterContent.vue'


export default {
  components: {TouchOurTeam, JoinOurNew , Copyright, FooterContent},
}
</script>
