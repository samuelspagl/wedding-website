import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ["@/assets/css/fonts.css"],
    head:{
        meta:[{ name: 'viewport', 
        content: 'width=device-width, initial-scale=1, minimal-ui' },]
    },
    target: 'static'
})
