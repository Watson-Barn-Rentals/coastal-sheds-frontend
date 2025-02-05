// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: false },
    runtimeConfig: {
        public: {
            // 
        }
    },
    devServer: {
        host: '0.0.0.0', // This makes the app available on the LAN
        port: 3000,      // Port number
    }
})
