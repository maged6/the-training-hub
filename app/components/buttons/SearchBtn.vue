<template>
    <button class="bg-tertiary-10 text-white px-3 py-3 rounded-[50%] mx-[6px]"
     aria-label="Search">
        <Search />
    </button>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import Search from '@/components/svg/Search.vue'

export default defineComponent({
  name: 'SearchButton',
  components: { Search },
})
</script>