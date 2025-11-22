<template>
  <div class="relative w-full overflow-hidden" :style="{ height }">
    <!-- Map -->
    <div ref="mapContainer" class="w-full h-full z-10"></div>

    <!-- Google Maps Button (optional) -->
    <button
      v-if="showGoogleBtn"
      @click="openGoogleMaps"
      class="absolute bottom-4 left-4 bg-primary-10 text-white px-6 py-[13px] rounded-[100px] z-50 flex gap-2"
    >
      <MapAlt />
      Open in Google Maps
    </button>

    <!-- Contacts Box (optional) -->
    <div
      v-if="showContacts"
      class="absolute bottom-[24%] right-[5%] bg-white px-[24px] py-[32px] rounded-[20px] z-50 flex flex-col gap-[32px] min-w-[617px]"
    >
      <h2 class="font-[900] text-[42px] max-w-[526px]">{{ contactTitle }}</h2>

      <div
        v-for="(item, i) in contactItems"
        :key="i"
        class="flex items-center gap-[12px] max-w-[526px]"
      >
        <component :is="item.icon" :colorIcon="'#B22726'" />
        <p class="font-[900] text-[19px]" v-html="item.text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useNuxtApp } from "#app";

import MapAlt from "../svg/MapAlt.vue";
import Envelope from "../svg/Envelope.vue";
import Phone from "../svg/Phone.vue";
import MapMark from "../svg/MapMark.vue";

export default {
  components: {
    MapAlt,
    Envelope,
    Phone,
    MapMark,
  },

  props: {
    height: { type: String, default: "500px" },
    coords: {
      type: Object,
      default: () => ({ lat: 30.0785, lng: 31.3186 }),
    },
    showGoogleBtn: { type: Boolean, default: false },
    showContacts: { type: Boolean, default: false },

    contactTitle: { type: String, default: "Contacts" },

    contactItems: {
      type: Array,
      default: () => [],
    },
  },

  setup(props) {
    const mapContainer = ref(null);
    const { $L } = useNuxtApp();

    const openGoogleMaps = () => {
      const url = `https://www.google.com/maps?q=${props.coords.lat},${props.coords.lng}`;
      window.open(url, "_blank");
    };

    onMounted(() => {
      if (!$L || !mapContainer.value) return;

      const L = $L;

      const map = L.map(mapContainer.value, {
        attributionControl: false,
      }).setView([props.coords.lat, props.coords.lng], 15);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

      const customIcon = L.divIcon({
        html: `
          <div class="pulse-wrapper">
            <div class="pulse-circle"></div>
            <div class="pulse-circle delay"></div>

            <div class="logo-holder">
              <img src="/images/logo-text.svg" style="width:45px;" />
            </div>
          </div>
        `,
        className: "",
        iconSize: [78, 78],
        iconAnchor: [39, 39],
      });

      L.marker([props.coords.lat, props.coords.lng], { icon: customIcon }).addTo(map);
    });

    return {
      mapContainer,
      openGoogleMaps,
    };
  },
};
</script>

<style>
.pulse-wrapper {
  position: relative;
  width: 78px;
  height: 78px;
}

.logo-holder {
  position: absolute;
  top: 0;
  left: 0;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: #c33130;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.pulse-circle {
  position: absolute;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  background: rgba(195, 49, 48, 0.4);
  animation: pulseAnimation 2s infinite;
  z-index: 1;
}

.pulse-circle.delay {
  animation-delay: 1s;
  background: rgba(195, 49, 48, 0.25);
}

@keyframes pulseAnimation {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}
</style>
