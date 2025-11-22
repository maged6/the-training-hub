<template>
  <div class="relative max-h-[55px]">
    <input
      :type="type"
      class="peer p-4 block w-full border border-gray-600 rounded-lg placeholder:text-transparent disabled:pointer-events-none focus:pt-6 focus:pb-2 not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />

    <label
      class="absolute top-0 start-0 p-4 h-full sm:text-sm truncate text-gray-600 pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0] peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5 peer-not-placeholder-shown:text-gray-500"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: "FloatingInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>
