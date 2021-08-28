<template>
    <nuxt-link
        :to="to"
        class="hover:text-light-outsoar dark:hover:text-dark-outsoar"
        @click="dispatch('click')"
    >
        <slot />
    </nuxt-link>
</template>
<script>
export default {
    props: {
        to: {
            type: [String, Object],
            default: '#',
        },
    },
};
</script>
