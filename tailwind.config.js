// tailwind.config.js
/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['TitilliumWeb-Regular', 'sans-serif'],
            'sans-light': ['TitilliumWeb-Light', 'sans-serif'],
            'sans-bold': ['TitilliumWeb-Bold', 'sans-serif'],
        },
        filter: {
            // defaults to {}
            none: 'none',
            grayscale: 'grayscale(1)',
            invert: 'invert(1)',
            sepia: 'sepia(1)',
        },
        backdropFilter: {
            // defaults to {}
            none: 'none',
            blur: 'blur(20px)',
        },
        extend: {
            colors: {
                'light-outsoar': '#fd9012',
                'dark-outsoar': '#ec623b',
                // outsoar: '#e7442e', // '#ec623b', // FD6335 // F59536 // F4A771 // FD9012
                // 'pale-outsoar': '#fd9012', // E38523
                'dark-vue': '#1b2835', // '#35495e',
                'light-vue': '#fdfdfd',
                'dark-odd': '#223242',
                'dark-even': '#1f2d3b',
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
            typography: (theme) => ({
                dark: {
                    css: {
                        color: theme('colors.light-vue'),
                        a: {
                            color: theme('colors.light-outsoar'),
                            '&:hover': {
                                color: theme('colors.light-outsoar'),
                            },
                        },

                        h1: {
                            color: theme('colors.light-vue'),
                        },
                        h2: {
                            color: theme('colors.light-vue'),
                        },
                        h3: {
                            color: theme('colors.light-vue'),
                        },
                        h4: {
                            color: theme('colors.light-vue'),
                        },
                        h5: {
                            color: theme('colors.light-vue'),
                        },
                        h6: {
                            color: theme('colors.light-vue'),
                        },

                        strong: {
                            color: theme('colors.light-vue'),
                        },

                        code: {
                            color: theme('colors.light-vue'),
                        },

                        figcaption: {
                            color: theme('colors.gray.500'),
                        },
                    },
                },
            }),
        },
    },
    variants: {
        backgroundColor: [
            'dark',
            'dark-hover',
            'dark-group-hover',
            'dark-even',
            'dark-odd',
        ],
        borderColor: ['dark', 'dark-focus', 'dark-focus-within'],
        textColor: ['dark', 'dark-hover', 'dark-active'],
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/jit'),
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
