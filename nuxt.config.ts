// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css",
          rel: "stylesheet",
        },
      ],
    },
  },
  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@pinia/nuxt"],
  ssr: false,
});
