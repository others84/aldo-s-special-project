import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    build: {
      rolldownOptions: {
        external: ["cloudflare:sockets"],
      },
      rollupOptions: {
        external: ["cloudflare:sockets"],
      },
    },
  },
  nitro: {
    preset: "node",
    externals: {
      external: ["cloudflare:sockets"],
    },
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
