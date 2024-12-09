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
  modules: ['@nuxt/ui', '@vueuse/nuxt', 'nuxt-shiki', 'nuxt-gtag'],
  colorMode: {
    preference: 'light',
  },
  shiki: {
    bundledThemes: ['github-light-default', 'github-dark'],
    bundledLangs: ['vue-html', 'bash'],
  },
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-6K665MD6XP'
  }
})