<template>
    <nuxt-link
        :to="to"
        class="no-underline inline-block font-medium px-4 py-2 shadow uppercase hover:shadow-md hover:text-white sm:mr-4 text-base mb-4 bg-outsoar"
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
