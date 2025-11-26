<template>
          <ul class="list-none">
           <li v-for="(item, index ) in list" :key="index" 
           class="mb-[24px] flex gap-[8px] items-start">
           <span class="mt-1">
               <CheckmarkCircle /> 
           </span>
           <span class="font-[100] text-[16px] text-primary-10 text-wrap">
               {{ item }}
        </span>
            
          </li>
        </ul>
</template>

<
<script lang="ts">
import CheckmarkCircle from '~/components/svg/CheckmarkCircle.vue'

export default {
    components: {CheckmarkCircle  },
    props: {
        list: { type: Array, default: [] },
    }
}
</script>