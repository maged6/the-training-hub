<template>
  <div
    role="status"
    class="min-h-screen animate-pulse flex items-center justify-between py-20 px-[60px]"
  >
    <!-- LEFT SIDE (Text Skeleton) -->
    <div class="w-1/2 space-y-6">
      <!-- Yellow Tag Skeleton -->
      <div class="h-6 w-60 bg-gray-300 rounded-full rotate-[-5deg]"></div>

      <!-- Title Skeleton (3 lines) -->
      <div class="h-8 w-72 bg-gray-300 rounded-full"></div>
      <div class="h-8 w-96 bg-gray-300 rounded-full"></div>

      <!-- Paragraph Skeleton (2 lines) -->
      <div class="h-4 w-96 bg-gray-200 rounded-full"></div>
      <div class="h-4 w-72 bg-gray-200 rounded-full"></div>
      <div class="h-4 w-72 bg-gray-200 rounded-full"></div>

      <!-- Button Skeleton -->
      <div class="h-10 w-44 bg-gray-300 rounded-full mt-4"></div>
    </div>

    <!-- RIGHT SIDE (Image skeletons) -->
    <div class="relative w-1/2 flex justify-end">
      <!-- Main Large Image -->
      <div class="w-[50vw] h-[75vh] bg-gray-300 rounded-3xl"></div>
    </div>
  </div>
</template>
