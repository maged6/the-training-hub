<template>
  <section class="bg-tertiary-gray-5">
    <div class="grid grid-cols-4 grid-rows-4 gap-4 px-[60px] py-[32px]">
      <div 
        v-for="(column, colIndex) in Videos"
        :key="colIndex"
        class="col-span-2 row-span-2 max-w-[684px] max-h-[452px]"
      >
          <video
              class="w-full h-full object-cover rounded-[30px]"
              muted
              controls
              >
              <source :src="column || 'captions/home-the-training-hub.mp4'" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      Videos: [
          "/captions/home-the-training-hub.mp4",
          "/captions/home-the-training-hub.mp4",
          "/captions/home-the-training-hub.mp4",
          "/captions/home-the-training-hub.mp4",
      ],
    }
  }
}
</script>
