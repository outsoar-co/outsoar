// tailwind.config.js
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
                outsoar: '#fd910f', // FD6335 // F59536 // F4A771 // FD9012
                'pale-outsoar': '#fd9012', // E38523
                laravel: '#f8981e',
                'dark-vue': '#35495e',
                'dark-desaturated-blue': '#2c3e50',
            },
            fontSize: {
                xxs: '.75',
                xs: ['0.875rem', { lineHeight: '1.25rem' }],
                sm: ['1rem', { lineHeight: '1.5rem' }],
                base: ['1.125rem', { lineHeight: '1.75rem' }],
                lg: ['1.5rem', { lineHeight: '1.75rem' }],
                xl: ['1.75rem', { lineHeight: '2rem' }],
                '2xl': ['1.875rem', { lineHeight: '2.25rem' }],
                '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
                '4xl': ['3rem', { lineHeight: '1' }],
                '5xl': ['3.75rem', { lineHeight: '1' }],
                '6xl': ['4.5rem', { lineHeight: '1' }],
                '7xl': ['6rem', { lineHeight: '1' }],
                '8xl': ['8rem', { lineHeight: '1' }],
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
    future: {
        purgeLayersByDefault: true,
    },
    purge: {
        // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            'content/**/**.md',
        ],
    },
};
