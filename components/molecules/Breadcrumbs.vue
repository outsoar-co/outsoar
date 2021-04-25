<template>
    <ul class="text-dark-vue dark:text-light-vue">
        <li>
            <nuxt-link
                v-for="(link, i) in breadcrumbsLinks"
                :key="i"
                :to="link"
                class="text-xs lg:text-base"
            >
                {{ link.meta.title }}
                <span v-if="i != breadcrumbsLinks.length - 1"> > </span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Breadcrumbs',
    computed: {
        ...mapGetters('content', ['items']),
        breadcrumbsLinks() {
            const tmp = [];
            tmp.push({ path: '/', meta: { title: 'Home' } });
            this.items.data.forEach((link) => {
                if (link.slug === this.$route.params.pathMatch) {
                    tmp.push(
                        Object.assign(
                            { meta: { title: link.title } },
                            { to: `/${link.slug}` }
                        )
                    );
                }
            });
            return tmp;
        },
    },
};
</script>
