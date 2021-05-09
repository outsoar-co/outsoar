export const state = () => ({
    items: {
        current_page: 1,
        data: [
            {
                id: 1,
                title: 'Development and Design',
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
                meta: [{ id: 1, content_id: 1, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import('../components/atoms/undraw/DevAndDesign'),
                        text: 'Development and Design',
                        body: 'Contrary to popular belief',
                    },
                    category: 'services',
                },
                slug: 'services/development-and-design',
                // timestamps here
            },
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
            {
                id: 4,
                title: 'Who we are',
                body: '',
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: () =>
                            import('../components/atoms/undraw/WeAreOutsoar'),
                        text: 'Who we are',
                        body: 'Contrary to popular belief',
                    },
                    category: 'main',
                },
                slug: 'about-us/who-we-are',
                // timestamps here
            },
            {
                id: 5,
                title: 'How we do it',
                body: '',
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: 'BugFixing',
                        text: 'How we do it',
                        body: 'Contrary to popular belief',
                    },
                    category: 'main',
                },
                slug: 'about-us/how-we-do-it',
                // timestamps here
            },
            {
                id: 5,
                title: 'How we do it',
                body: '',
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: 'BugFixing',
                        text: 'How we do it',
                        body: 'Contrary to popular belief',
                    },
                    category: 'main',
                },
                slug: 'about-us/how-we-do-it',
                // timestamps here
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
