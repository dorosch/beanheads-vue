// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@vueuse/nuxt', 'nuxt-shiki'],
  colorMode: {
    preference: 'light',
  },
  shiki: {
    bundledLangs: ['vue-html']
  }
})