<template>
    <div :class="['grid', colClass, gapClass, breakpoints]">
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        cols: {
            type: [String, Number],
            default: 1,
        },
        gap: {
            type: [String, Number],
            default: 1,
        },
        breakpoints: {
            type: String,
            default: 'md:grid-cols-6',
        },
    },
    computed: {
        colClass() {
            return `grid-cols-${this.cols}`;
        },
        gapClass() {
            return `gap-${this.gap}`;
        },
    },
};
</script>
