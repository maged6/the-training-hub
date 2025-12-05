<template>
    <div class="flex gap-[12px] items-center">
        <p class="md:text-[32px] text-[16px] font-[900] " :class="`text-${textPriceColor}`">{{ price }} EGP</p>
        <p class="md:text-[20px] text-[11px] font-[900] " :class="`text-${textOfferColor}`" v-if="offer !== 0"><s>{{ offer }} EGP</s></p>
        <p class="rounded font-[100] text-[14px] px-[6px] py-[2px] bg-[#A9EE9B]" v-if="lableOffer">
        {{ lableOffer }}
        </p>
    </div>
</template>


<script lang="ts">

export default {
    name: 'PriceAndOffer',
    props: {
        price: { type: Number, default: 0 },
        offer: { type: Number, default: 0 },
        textPriceColor: { type: String, default: 'primary-20' },
        textOfferColor: { type: String, default: 'primary-10' },
        lableOffer: { type: String, default: '' },
    }
}
</script>
