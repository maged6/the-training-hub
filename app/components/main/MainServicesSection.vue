<template>
    <div class="bg-primary-10 relative">
        <DottedShape class="absolute top-[33px] left-0" />
        <EllipseCircle  class="absolute top-0 right-0"/>
        <div class="grid grid-cols-2 py-[80px] mx-[60px]">
            <div>
                <p>rem ipsum dolor sit amet, consectetur adipisicing elit. Iste,
                 blanditiis fuga? Placeat quaerat corrupti molestias quod re
                 pellat ex poss</p>
                </div>
            <div>

            <div class="h-full">
              <NuxtImg
                class="rounded-[24px] w-full h-full object-cover"
                :src="'images/layout-hero.jpg'"
                alt="the training hub faqs image"
                width="100%"
                height="100%"
                format="webp"
                quality="80"
                loading="lazy"
              />
            </div>
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import DottedShape from '../svg/DottedShapeRed.vue';
import EllipseCircle from '../svg/EllipseCircleRed.vue';

export default {
    name: 'MainServicesSection',
    components: { DottedShape, EllipseCircle },
}
</script>