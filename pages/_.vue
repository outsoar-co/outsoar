<template>
    <main>
        <banner :options="page.props.banner" />
        <Segment class="bg-white dark:bg-dark-even">
            <div class="max-w-screen-lg mx-auto p-2">
                <breadcrumbs />
            </div>
        </Segment>
        <Segment class="bg-white dark:bg-dark-odd px-2 py-16">
            <p-article class="flex items-center justify-center">
                <nuxt-content :document="page" />
            </p-article>
        </Segment>
    </main>
</template>

<script>
import PArticle from '@/components/organisms/PArticle';
import Segment from '@/components/organisms/Segment.vue';
import Banner from '@/components/organisms/Banner.vue';
import Breadcrumbs from '@/components/molecules/Breadcrumbs.vue';

export default {
    components: {
        PArticle,
        Segment,
        Banner,
        Breadcrumbs,
    },
    async asyncData({ $content, params, error, store }) {
        const path = `/${params.pathMatch || 'index'}`;
        const pageDetail = store.getters['content/items'].data.find(
            (item) => item.slug === params.pathMatch
        );
        try {
            const [page] = await $content({ deep: true })
                .where({ path })
                .fetch();
            return { page: Object.assign({}, pageDetail, page) };
        } catch (error) {
            error({ statusCode: 404, message: 'Page not found' });
        }
    },
    head() {
        return {
            title: this.page.title,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.page.description,
                },
                // Open Graph
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.page.title,
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.page.description,
                },
                // Twitter Card
                {
                    hid: 'twitter:title',
                    name: 'twitter:title',
                    content: this.page.title,
                },
                {
                    hid: 'twitter:description',
                    name: 'twitter:description',
                    content: this.page.description,
                },
            ],
        };
    },
};
</script>
