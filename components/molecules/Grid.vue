<template>
    <div :class="['grid', cols, gap, breakpoints]">
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        cols: {
            type: String,
            default: 'grid-cols-1',
        },
        gap: {
            type: String,
            default: 'gap-1',
        },
        breakpoints: {
            type: String,
            default: 'md:grid-cols-6',
        },
    },
};
</script>
