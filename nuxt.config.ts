// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  devServer: {
    port: 3030
  },
  modules: [
    '@primevue/nuxt-module'
],
css: ['~/assets/css/main.css'],
primevue: {
},
postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},
})
