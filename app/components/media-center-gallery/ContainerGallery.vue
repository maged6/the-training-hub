<template>
  <section class="bg-tertiary-gray-5">
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 px-[60px] py-[32px]">
      <div 
        v-for="(column, colIndex) in gallery"
        :key="colIndex"
        class="grid gap-4"
      >
        <div v-for="(img, imgIndex) in column" :key="imgIndex">
         <NuxtImg
            class="h-auto max-w-full rounded-[24px]" 
            :src="img" 
            alt="the training hub media center gallery image"
            width="600"
            height="150"
            format="webp"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data() {
    return {
      gallery: [
        [
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        ],
        [
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        ],
        [
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
          "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        ],
      ],
    }
  }
}
</script>
