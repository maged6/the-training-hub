<template>
  <div class="relative w-full h-[500px] overflow-hidden">
    <div ref="mapContainer" class="w-full h-full z-10"></div>
    <button
      @click="openGoogleMaps"
      class="absolute bottom-4 left-4 bg-primary-10 text-white px-6 py-[13px] rounded-[100px] z-50 flex gap-2"
    >
     <MapAlt />
      Open in Google Maps
    </button>
  </div>
      
</template>

<script setup>
import { onMounted, ref } from "vue";
import MapAlt from "../svg/MapAlt.vue";

const mapContainer = ref(null);

const coords = { lat: 30.0785, lng: 31.3186 };
const googleMapsUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
const openGoogleMaps = () => window.open(googleMapsUrl, "_blank");

const { $L } = useNuxtApp();

onMounted(() => {
  if (!$L || !mapContainer.value) return;

  const L = $L;

  const map = L.map(mapContainer.value).setView([coords.lat, coords.lng], 15);

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

  L.marker([coords.lat, coords.lng], { icon: customIcon }).addTo(map);
});
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
  background: #C33130;
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