<template>
  <div
    class="bg-primary-20 text-gray-300 rounded-[16px] p-[32px] max-w-[420px] shadow-lg"
  >
    <p class="text-[20px] font-[100]">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
props: {
    text: { type: String, default: '' },
  }
}
</script>
