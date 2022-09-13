export const state = () => ({
    items: {
        current_page: 1,
        data: [
            // Development and Design
            {
                id: 1,
                title: 'Development and Design',
                body: `
                Develop a website that underscores how it seems, delivers, and collaborates to attract people to have the finest and most accurate design and marketing impact.
                `,
                head: {},
                params: {},
                options: {},
                meta: [{ id: 1, content_id: 1, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import('../components/atoms/undraw/DevAndDesign'),
                        text: 'Development and Design',
                        body: 'Experience Digital Transformation',
                    },
                    category: 'services',
                },
                slug: 'services/development-and-design',
                // timestamps here
            },
            // Planning and Consultancy
            {
                id: 2,
                title: 'Planning and Consultancy',
                body: `
The Earth is a very small stage in a vast cosmic
arena. Think of the rivers of blood spilled by all
those generals and emperors so that, in glory and
triumph, they could become the momentary masters of
a fraction of a dot.
                `,
                head: {},
                params: {},
                options: {},
                meta: [{ id: 2, content_id: 2, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import(
                                '../components/atoms/undraw/PlanningAndConsultancy'
                            ),
                        text: 'Planning and Consultancy',
                        body: 'Contrary to popular belief',
                    },
                    category: 'services',
                },
                slug: 'services/planning-and-consultancy',
                // timestamps here
            },
            // DevOps and Support
            {
                id: 3,
                title: 'DevOps and Support',
                body: `
The Earth is a very small stage in a vast cosmic
arena. Think of the rivers of blood spilled by all
those generals and emperors so that, in glory and
triumph, they could become the momentary masters of
a fraction of a dot.
                `,
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import(
                                '../components/atoms/undraw/DevopsAndSupport'
                            ),
                        text: 'DevOps and Support',
                        body: 'Contrary to popular belief',
                    },
                    category: 'services',
                },
                slug: 'services/devops-and-support',
                // timestamps here
            },
            // Who we are
            {
                id: 4,
                title: 'Who we are',
                body: `
The Earth is a very small stage in a vast cosmic
arena. Think of the rivers of blood spilled by all
those generals and emperors so that, in glory and
triumph, they could become the momentary masters of
a fraction of a dot.
                `,
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import('../components/atoms/undraw/WeAreOutsoar'),
                        text: 'We are your team',
                        body: 'Contrary to popular belief',
                    },
                    linkText: 'Learn more about us',
                    category: 'main',
                    section: 'landing',
                },
                slug: 'about-us/who-we-are',
                // timestamps here
            },
            // How we do it
            {
                id: 5,
                title: 'How we do it',
                body: `
The Earth is a very small stage in a vast cosmic
arena. Think of the rivers of blood spilled by all
those generals and emperors so that, in glory and
triumph, they could become the momentary masters of
a fraction of a dot.
                `,
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import('../components/atoms/undraw/HowWeDoIt'),
                        text: 'We do it for fun',
                        body: 'Contrary to popular belief',
                    },
                    linkText: 'Checkout our process',
                    category: 'main',
                    section: 'landing',
                },
                slug: 'about-us/how-we-do-it',
                // timestamps here
            },
            // Our tools and tech stacks
            {
                id: 6,
                title: 'Our tools and tech stacks',
                body: `
The Earth is a very small stage in a vast cosmic
arena. Think of the rivers of blood spilled by all
those generals and emperors so that, in glory and
triumph, they could become the momentary masters of
a fraction of a dot.
                `,
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () => import('../components/molecules/ListStack'),
                        text: 'We love opensource.',
                        body: 'Contrary to popular belief',
                    },
                    linkText: 'See our tools & technologies',
                    category: 'main',
                    section: 'landing',
                },
                slug: 'about-us/our-tools-and-technologies',
                // timestamps here
            },
            // Trusted by
            {
                id: 7,
                title: 'Trusted by',
                body: `
The Earth is a very small stage in a vast cosmic
arena. Think of the rivers of blood spilled by all
those generals and emperors so that, in glory and
triumph, they could become the momentary masters of
a fraction of a dot.
                `,
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import('../components/molecules/ListTrusted'),
                        text: 'How we do it',
                        body: 'Contrary to popular belief',
                    },
                    category: 'main',
                    section: 'landing',
                },
                slug: 'about-us/trusted-by',
            },
        ],
        first_page_url: null,
        from: null,
        last_page: 1,
        last_page_url: null,
        links: [],
        next_page_url: null,
        path: null,
        per_page: 15,
        prev_page_url: null,
        to: null,
        total: 0,
    },
});

export const mutations = {};

export const actions = {};

export const getters = {
    items(state) {
        return state.items;
    },
};
