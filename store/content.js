export const state = () => ({
    items: {
        current_page: 1,
        data: [
            {
                id: 1,
                title: 'Development and Design',
                body: '',
                head: {},
                params: {},
                options: {},
                meta: [{ id: 1, content_id: 1, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: 'BuildingWebsites',
                        text: 'Development and Design',
                        body: 'Contrary to popular belief',
                    },
                },
                slug: 'services/development-and-design',
                // timestamps here
            },
            {
                id: 2,
                title: 'Planning and Consultancy',
                body: '',
                head: {},
                params: {},
                options: {},
                meta: [{ id: 2, content_id: 2, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: 'ScrumBoard',
                        text: 'Planning and Consultancy',
                        body: 'Contrary to popular belief',
                    },
                },
                slug: 'services/planning-and-consultancy',
                // timestamps here
            },
            {
                id: 3,
                title: 'DevOps and Support',
                body: '',
                head: {},
                params: {},
                options: {},
                meta: [{ id: 3, content_id: 3, key: 'foo', value: 'bar' }],
                props: {
                    banner: {
                        icon: 'BugFixing',
                        text: 'DevOps & Support',
                        body: 'Contrary to popular belief',
                    },
                },
                slug: 'services/devops-and-support',
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
