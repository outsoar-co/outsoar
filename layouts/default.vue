<template>
    <div class="antialiased min-h-screen">
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>
<script>
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';

export default {
    components: {
        Header,
        Footer,
    },
};
</script>
