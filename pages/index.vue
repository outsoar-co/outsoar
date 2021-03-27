<template>
    <main>
        <Segment class="bg-white">
            <hero />
        </Segment>
        <Segment class="bg-gray-200">
            <h3 class="text-5xl mb-4">We write & ship beautiful code</h3>
            <btn-link> Let's chat </btn-link>
        </Segment>
    </main>
</template>

<script>
import Hero from '@/components/organisms/Hero';
import BtnLink from '@/components/atoms/BtnLink';
import Segment from '~/components/organisms/Segment.vue';

export default {
    components: {
        Hero,
        Segment,
        BtnLink,
    },
};
</script>
