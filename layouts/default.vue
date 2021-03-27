<template>
    <div class="w-full h-full">
        <Header />
        <Nuxt />
    </div>
</template>
<script>
import Header from '@/components/organisms/Header';
export default {
    components: {
        Header,
    },
};
</script>
