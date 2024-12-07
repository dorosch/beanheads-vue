// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Beanheads Vue',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@vueuse/nuxt', 'nuxt-shiki'],
  colorMode: {
    preference: 'light',
  },
  shiki: {
    bundledThemes: ['github-light-default', 'github-dark'],
    bundledLangs: ['vue-html'],
  }
})