<template>
    <nuxt-link
        :to="to"
        :class="[
            'text-base font-bold no-underline inline-block px-6 py-2 rounded-sm',
            'hover:shadow-inner hover:text-dark-vue text-base',
            'border-b-4 border-dark-outsoar dark:border-light-outsoar',
            'bg-light-outsoar text-light-vue dark:bg-dark-outsoar',
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
