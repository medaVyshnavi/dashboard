import { resolve } from "path";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

import type { NuxtConfig } from "@nuxt/types";

export const config: NuxtConfig = {
  buildModules: ["@nuxt/typescript-build"],
};
