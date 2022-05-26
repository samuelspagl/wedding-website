import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    css: ["@/assets/css/fonts.css"],
    head:{
        meta:[{ name: 'viewport', 
        content: 'width=device-width, initial-scale=1, minimal-ui' },]
    },
    target: 'static',
    meta:[
        { name: 'title', content: "Samuel & Hannah - Save the date"},
        { name: 'description', content: 'My amazing site.' },
        { name: 'og:url', content: 'https://samuel-und-hannah.de'},
        { name: 'og:type', content: 'website'},
        { name: 'og:image', content: '@/public/og-hero.png'}
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ssr:false
})
