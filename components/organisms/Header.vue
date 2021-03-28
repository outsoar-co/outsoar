<template>
    <header
        :class="[
            'sticky top-0 left-0 right-0 z-30',
            { 'bg-white shadow': scrollY > 0 },
        ]"
    >
        <div
            class="container relative mx-auto px-4 py-2 flex items-center lg:py-6 h-full"
        >
            <a
                class="inline-block text-nuxt-gray h-10 lg:h-10 z-10 mr-auto nuxt-link-active"
            >
                <logo :class="['h-10 lg:h-12 sans-bold']" />
            </a>
            <navigation :display="navigation.display" />
            <hamburger @toggle="onToggle" />
        </div>
    </header>
</template>
<script>
import Logo from '@/components/atoms/Logo';
import Hamburger from '@/components/molecules/Hamburger';
import Navigation from '@/components/molecules/Navigation';

export default {
    components: {
        Logo,
        Hamburger,
        Navigation,
    },
    data() {
        return {
            navigation: {
                display: false,
            },
            scrollY: 0,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        onToggle(active) {
            this.navigation.display = active;
        },
        handleScroll(event) {
            this.scrollY = window.scrollY;
            console.log('event: ', this.scrollY);
            // Any code to be executed when the window is scrolled
        },
    },
};
</script>
