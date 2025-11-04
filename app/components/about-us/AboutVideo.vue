<template>
  <section>
    <div class="p-[60px] bg-primary-10 h-[95vh]">
      <video
        class="w-full h-full object-cover rounded-[30px]"
        autoplay
        muted
        loop
      >
        <source
          :src="videoSection || 'captions/home-the-training-hub.mp4'"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  props: {
    videoSection: {
      type: String,
      default: 'captions/home-the-training-hub.mp4',
    },
  }
};
</script>