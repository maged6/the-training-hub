<template>
  <section v-if="videoScr">
    <div class="p-[60px] bg-primary-10 h-[95vh]">
      <video
        v-if="isVideo"
        class="w-full h-full object-cover rounded-[30px]"
        autoplay
        muted
        loop
      >
        <source :src="videoScr" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NuxtImg
        v-if="isImage"
        :src="videoScr"
        alt="mask"
        class="w-full h-full object-cover rounded-[30px]"
      />
    </div>
  </section>
</template>

<script lang="ts">

export default {
  props: {
    videoScr: {
      type: String,
      default: '',
    },
  },
  computed: {
  isVideo() {
    if (!this.videoScr) return false
    const videoExtensions = ['mp4', 'mov', 'avi', 'webm']
    const ext = this.videoScr.split('.').pop()?.toLowerCase()
    return videoExtensions.includes(ext as string)
  },

  isImage() {
    if (!this.videoScr) return false
    const imageExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif']
    const ext = this.videoScr.split('.').pop()?.toLowerCase()
    return imageExtensions.includes(ext as string)
  },
}

};
</script>
