<template>
  <section v-if="videoScr">
    <div class="md:p-[60px] px-[16px] py-[60px] bg-primary-10 md:h-[95vh] h-[50vh]">
      <video
        v-if="isVideo"
        class="w-full h-full object-cover md:rounded-[30px] rounded-[24px]"
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
        class="w-full h-full object-cover md:rounded-[30px] rounded-[24px]"
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
