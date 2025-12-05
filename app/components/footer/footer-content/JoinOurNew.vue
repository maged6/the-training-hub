<template>
  <div
    class="bg-primary-20 text-white p-4 flex flex-wrap justify-between items-center md:px-[60px] px-[16px] md:py-[43px] py-[32px]"
  >
    <p class="font-[600] text-[24px] mb-[16px] md:mb-0">Join Our Newsletter</p>
    <div
      class="flex items-center bg-[#F8DCDC] rounded-full overflow-hidden shadow-md p-2"
    >
      <input
        type="email"
        placeholder="Enter Your Email Address"
        class="bg-transparent px-6 py-3 text-sm text-black outline-none placeholder-black w-[220px] md:w-[280px]"
      />

      <MainBtn
        :title="'Contact Us'"
        :colorIcon="'#10171F'"
        :colorTo="'#10171F'"
        :colorFrom="'#4B4A5C'"
      />
    </div>
  </div>
</template>

<script>
import MainBtn from '../../buttons/MainBtn.vue';

export default{
  components: {
    MainBtn
  },
}
</script>
