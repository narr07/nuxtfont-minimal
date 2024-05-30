// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxtjs/tailwindcss"],
   fonts: {
    families: [
      { name: 'Display', src: '/fonts/Display', weights: ['200', '300', '400', '500', '700', '900'], display: 'swap' },
      { name: 'Narr', src: '/fonts/Narr', weights: ['100', '300', '400', '500', '700', '900'], display: 'swap' },
    ],
    defaults: {
      styles: ['normal', 'italic'],
    },
    providers: {
      google: false,
      bunny: false,
      fontshare: false,
    }
    
  },
  tailwindcss: {
    config: {},
    cssPath: '~/assets/css/tailwind.css',

  } 
})