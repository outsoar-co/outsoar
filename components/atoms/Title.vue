<template>
    <div :class="[size, 'font-sans-bold font-extrabold']">
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
    },
};
</script>
