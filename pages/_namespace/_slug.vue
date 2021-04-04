<template>
    <main>
        <!-- <p v-if="$fetchState.pending">Fetching mountains...</p>
        <p v-else-if="$fetchState.error">An error occurred :(</p> -->
        <banner :options="page.props.banner" />
        <Segment class="bg-gray-100">
            <p-article>
                <nuxt-content :document="page" />
            </p-article>
        </Segment>
    </main>
</template>

<script>
import PArticle from '@/components/organisms/PArticle';
import Segment from '@/components/organisms/Segment.vue';
import Banner from '@/components/organisms/Banner.vue';
export default {
    components: {
        PArticle,
        Segment,
        Banner,
    },
    async asyncData({ $content, params, error, store }) {
        const slug = params.slug || 'index';
        const namespace = params.namespace || 'articles';
        const pageDetail = store.getters['content/items'].data.find(
            (item) => item.slug === params.slug
        );
        try {
            const page = await $content(namespace, slug).fetch();
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
