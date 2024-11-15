// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3030
  },
  modules: ['@primevue/nuxt-module', '@pinia/nuxt', '@vueuse/nuxt'],
css: ['~/assets/css/main.css'],
primevue: {
},
public: {
  apiBase: process.env.NUXT_API_BASE || 'http://localhost:8000/api/v1'
},
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},
})