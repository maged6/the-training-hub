<template>
<section class="bg-tertiary-gray-5 flex flex-col items-center justify-center h-[70vh] w-full ">
  <div class="w-full max-w-md px-8 py-10 bg-white rounded-lg shadow-md ">
    <h1 class="text-[32px] font-[900] text-center mb-6">Verify Email Address</h1>
    <p class="text-gray-600 text-center mb-4">A verification code has been sent to your email addressmarkelmallakh@gmail.com</p>
    <p class="text-gray-600 text-center mb-4">Ener Code</p>
    <div class="grid grid-cols-6 gap-x-4 my-2">
      <div contenteditable="true"  class="rounded-lg bg-transparent border  cursor-text w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700">1</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-transparent border  cursor-text w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700">9</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-transparent border  cursor-text w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700">6</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-transparent border  cursor-text w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700">4</span>
      </div>
      <div contenteditable="true"  class="rounded-lg bg-transparent border  cursor-text w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700">3</span>
      </div>
       <div contenteditable="true"  class="rounded-lg bg-transparent border  cursor-text w-14 aspect-square flex items-center justify-center">
        <span class="text-gray-700">3</span>
      </div>
    </div>
      <div class="flex items-center justify-between space-x-2 mt-6">
        <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-primary-20">Resend Code</button>
        <button class="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-primary-20">Edit Email Address</button>
    </div>
  </div>
</section>
</template>