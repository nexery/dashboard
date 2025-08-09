import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/globals.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
      styles: ["normal"],
      subsets: ["latin", "cyrillic"],
    },
  },
  runtimeConfig: {
    public: {
      apiBackend: process.env.API_BACKEND,
    },
  },
  alias: {
    "~images": fileURLToPath(new URL("./assets/images", import.meta.url)),
  },
  nitro: {
    devProxy: {
      "/api": {
        target: process.env.API_BACKEND,
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  icon: {
    mode: "svg",
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/fonts",
    "@vee-validate/nuxt",
    "@nuxt/icon",
  ],
});
