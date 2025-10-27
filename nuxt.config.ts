// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-10-21",
  devtools: { enabled: true },
  app: {
    head: {
      title: "The Training Hub",
      meta: [
        { name: "apple-mobile-web-app-title", content: "The Training Hub" },
        {
          name: "description",
          content:
            "The Training Hub provides professional training programs, e-learning, and experiential learning opportunities for personal and organizational growth."
        }
      ],
      htmlAttrs: {
        lang: "en" // or 'ar', 'fr', etc.
      },
      link: [
        // 🔹 Favicon and icons
        { rel: "icon", type: "image/svg+xml", href: "/favicon.ico" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/favicon.ico", sizes: "180x180" },

        // 🔹 Google Fonts (still okay if not self-hosting)
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: ""
        },
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400;500;600;700&display=swap"
        },

        // 🔹 Preload self-hosted font (works only if font file exists in /public or /assets/fonts/)
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/fonts/host-grotesk-latin-700.woff2",
          crossorigin: ""
        }
      ]
    }
  },

  // ✅ Global CSS
  css: ["@/assets/css/index.css"],

  // ✅ Tailwind with Vite plugin
  vite: {
    plugins: [tailwindcss()]
  },
  modules: ["motion-v/nuxt", "@nuxt/image"]
});
