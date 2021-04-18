<template>
    <nuxt-link
        :to="to"
        :class="[
            'text-sm no-underline inline-block rounded-sm',
            'hover:shadow-inner hover:text-dark-vue text-base hover:font-bold',
            'border-b-4 border-dark-outsoar dark:border-light-outsoar',
            'bg-light-outsoar text-light-vue dark:bg-dark-outsoar',
            'lg:text-base py-1 px-4 lg:px-6 lg:py-2',
        ]"
    >
        <div
            class="flex flex-row items-center hover:scale-120 transform hover:translate-x-2"
        >
            <slot /> <component :is="iconComponent" class="ml-2" />
        </div>
    </nuxt-link>
</template>
<script>
export default {
    props: {
        to: {
            type: [String, Object],
            default: '#',
        },
        icon: {
            type: String,
            default: 'arrow-narrow-right',
        },
    },
    computed: {
        iconComponent() {
            return () => import(`@/assets/icons/${this.icon}.svg?inline`);
        },
    },
};
</script>
<style lang="postcss" scoped></style>
