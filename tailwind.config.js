/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    theme: {
        fontFamily: {
            sans: ['TitilliumWeb-Regular', 'sans-serif'],
            'sans-light': ['TitilliumWeb-Light', 'sans-serif'],
            'sans-bold': ['TitilliumWeb-Bold', 'sans-serif'],
        },
        extend: {
            colors: {
                outsoar: '#f8981e',
                // terracotta: '#be8856',
                // latte: '#e0c6ab',
                // shadow: '#3c3c3b',
            },
            // fontSize: {
            //     xxs: '.65rem',
            // },
        },
    },
    variants: {},
    plugins: [],
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],
    },
};
