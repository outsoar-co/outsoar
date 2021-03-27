<template>
    <div class="flex flex-col items-center mx-auto text-center">
        <h1 class="font-extrabold text-center text-8xl font-sans-bold">
            <span class="block"> We build better </span>
            <span class="block"> Web Experience </span>
            <span class="block"> that will outsoar your company </span>
        </h1>
        <btn-link to="#">Learn How </btn-link>
    </div>
</template>
<script>
import BtnLink from '@/components/atoms/BtnLink';

export default {
    components: {
        BtnLink,
    },
};
</script>
