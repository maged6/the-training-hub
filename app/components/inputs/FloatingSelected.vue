<template>
  <div class="relative max-h-[58px]">

    <!-- SELECT -->
    <select
      class="peer p-4 block w-full border border-gray-600 rounded-lg bg-white
             appearance-none  /* HIDE DEFAULT ARROW */
             placeholder:text-transparent disabled:pointer-events-none
             focus:pt-6 focus:pb-2
             not-placeholder-shown:pt-6 not-placeholder-shown:pb-2"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="" disabled hidden></option>

      <option
        v-for="(item, index) in items"
        :key="index"
        :value="item.value"
      >
        {{ item.label }}
      </option>
    </select>

    <!-- FLOATING LABEL -->
    <label
      class="absolute top-0 left-0 p-4 h-full sm:text-sm truncate text-gray-600 pointer-events-none 
             transition ease-in-out duration-100 origin-[0_0]
             peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5
             peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:translate-x-0.5 peer-not-placeholder-shown:-translate-y-1.5"
    >
      {{ label }}
    </label>

    <!-- RIGHT ICON -->
    <div
      class="absolute inset-y-0 right-3 flex items-center pointer-events-none
             transition-all duration-150
             peer-focus:translate-x-1
             peer-not-placeholder-shown:translate-x-1"
    >
      <!-- Replace SVG with any icon you want -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-600"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 9l-7 7-7-7"/>
      </svg>
    </div>

  </div>
</template>

<script>
export default {
  name: "FloatingSelect",
  props: {
    modelValue: {
      type: [String, Number, null],
      default: "",
    },
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
