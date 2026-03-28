// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://lavelada.dev",
  output: "static",
  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },

  integrations: [react({ experimentalReactChildren: true })],

  image: {
    domains: [],
    remotePatterns: [],
  },


  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
});