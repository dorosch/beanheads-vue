// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Beanheads Vue',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      meta: [
        { name: 'description', content: 'Create billions of unique characters by mixing and matching colors, hairstyles, and clothing.' },
        { name: 'author', content: '@heunsig' },
        { name: 'og:title', content: 'Beanheads Vue' },
        { name: 'og:description', content: 'Create billions of unique characters by mixing and matching colors, hairstyles, and clothing.' },
        { name: 'og:image', content: '/thumbnail.png' },
        { name: 'og:url', content: 'https://beanheads-vue.heunsig.com' },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:creator', content: '@heunsig' },
        { name: 'twitter:title', content: 'Beanheads Vue' },
        { name: 'twitter:description', content: 'Create billions of unique characters by mixing and matching colors, hairstyles, and clothing.' },
        { name: 'twitter:image', content: '/thumbnail.png' },
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