<template>
    <button class="bg-tertiary-gray-80 text-white xl:px-3 xl:py-3 xl:mx-[6px] xl:w-[45px] xl:h-[45px]
     w-[30px] h-[30px]
     flex items-center justify-center 
      px-2 py-2 rounded-[50%] mx-[3px]"
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