// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    appManifest: false
  },
  nitro: {
    preset: 'netlify'
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@sidebase/nuxt-auth'
  ],
  auth: {
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/login', method: 'post' },
        signOut: { path: '/logout', method: 'post' },
        getSession: { path: '/session', method: 'get' }
      },
      token: { 
        signInResponseTokenPointer: '/token',
        maxAgeInSeconds: 86400 // 24 hours
      },
      pages: {
        login: '/login'
      }
    },
    session: {
      enableRefreshPeriodically: 1000 * 60 * 15, // Refresh every 15 mins
      enableRefreshOnWindowFocus: true
    },
    globalAppMiddleware: false,
  },
  ui: {
    global: true,
    primary: 'indigo',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      title: 'RhyseForge — AI-Powered Certification Exam Preparation',
      meta: [
        { name: 'description', content: 'Master professional certifications like AWS, Databricks, and SAP with RhyseForge — a premium AI-powered exam simulation platform.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'charset', content: 'utf-8' },
        { property: 'og:title', content: 'RhyseForge — AI-Powered Certification Exam Preparation' },
        { property: 'og:description', content: 'Master professional certifications with high-confidence practice modules and deep mock analysis.' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  srcDir: '.',
  compatibilityDate: '2024-04-20',
})
