<template>
    <main>
        <Segment class="bg-gray-100">
            <h1>{{ page.title }}</h1>
            <p>{{ page.description }}</p>
        </Segment>
        <p-article>
            <nuxt-content :document="page" />
        </p-article>
    </main>
</template>

<script>
import PArticle from '@/components/organisms/PArticle';
import Segment from '@/components/organisms/Segment.vue';

export default {
    components: {
        PArticle,
        Segment,
    },
    async asyncData({ $content, params, error }) {
        const slug = params.slug || 'index';
        const namespace = params.namespace || 'articles';
        const page = await $content(namespace, slug)
            .fetch()
            // eslint-disable-next-line handle-callback-err
            .catch((err) => {
                error({ statusCode: 404, message: 'Page not found' });
            });
        return {
            page,
        };
    },
};
</script>
