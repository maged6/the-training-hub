import 'leaflet/dist/leaflet.css';

export default defineNuxtPlugin(async () => {
  const L = await import('leaflet'); // ✔ dynamic import

  return {
    provide: {
      L: L.default
    }
  };
});
