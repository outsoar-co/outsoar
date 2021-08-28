export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    ssr: false,
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: "Outsoar PH | Philippines's Better Software Agency",
        htmlAttrs: {
            lang: 'en',
            amp: true,
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    'We build and design better software to jumstart your business. We ship scallable, creative, and neat solution with fun!',
            },
            {
                hid: 'og:image',
                name: 'og:image',
                content: '/outsoar-og.jpg',
            },
            {
                hid: 'og:site_name',
                name: 'og:site_name',
                content: 'outsoar.ph',
            },
            {
                hid: 'apple-mobile-web-app-title',
                name: 'apple-mobile-web-app-title',
                content: 'outsoar.ph',
            },
            {
                name: 'msapplication-TileColor',
                content: '#ffffff',
            },
            {
                name: 'theme-color',
                content: '#ffffff',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module',
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/gtm',
        '@nuxtjs/color-mode',
        '@nuxtjs/svg',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt/content
        '@nuxt/content',
    ],

    // Used as fallback if no runtime config is provided
    gtm: {
        id: 'GTM-N8VKR7C',
        pageTracking: true,
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Content module configuration
     ** See https://content.nuxtjs.org/configuration
     */
    content: {
        liveEdit: false,
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
    tailwindcss: {
        jit: true,
        // add '~tailwind.config` alias
        exposeConfig: true,
    },
    colorMode: {
        classSuffix: '',
    },
};
