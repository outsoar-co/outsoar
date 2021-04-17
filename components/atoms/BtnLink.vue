<template>
    <nuxt-link
        :to="to"
        :class="[
            'text-base font-bold no-underline inline-block px-4 py-2 rounded-sm',
            'hover:shadow-inner hover:text-dark-vue text-base',
            'border-b-4 border-dark-outsoar dark:border-light-outsoar',
            'bg-light-outsoar text-light-vue dark:bg-dark-outsoar',
        ]"
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
<style lang="postcss" scoped></style>
