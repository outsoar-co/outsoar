<template>
    <nuxt-link :to="to" class="hover:text-outsoar">
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
