<template>
    <div :class="[size, 'font-sans-bold', direction, breakpoints]">
        <slot />
    </div>
</template>
<script>
export default {
    props: {
        size: {
            type: String,
            default: 'text-lg',
        },
        breakpoints: {
            type: String,
            default: 'lg:text-4xl',
        },
        direction: {
            type: String,
            default: 'text-center',
        },
    },
};
</script>
