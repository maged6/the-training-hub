<template>
    

<div class="block max-w-sm p-[32px] bg-white rounded-[16px] shadow-md">
   <slot name="icon" ></slot>
        <p class="mb-[12px] mt-[32px] font-[900] text-[28px] tracking-tight text-primary-10">
            {{ title }}</p>
    <p class="text-secondary-40 text-[20px]">{{ subtitle }}</p>
</div>


</template>



<script lang="ts">

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  }
};
</script>
