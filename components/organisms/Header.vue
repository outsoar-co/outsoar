<template>
    <header
        :class="[
            'sticky top-0 left-0 right-0 z-30',
            { 'bg-white shadow': scrollY > 0 },
            {
                'shadow-none': scrollY == 0 && $route.name == 'index',
            },
        ]"
    >
        <div
            class="container relative mx-auto px-4 py-2 flex items-center lg:py-6 h-full"
        >
            <nuxt-link
                to="/"
                class="inline-block text-nuxt-gray h-10 lg:h-10 z-10 mr-auto nuxt-link-active"
            >
                <logo
                    :class="[
                        'h-10 lg:h-12 sans-bold',
                        { 'fill-current text-black ': scrollY == 0 },
                        {
                            'fill-current text-outsoar':
                                scrollY > 0 ||
                                navigation.display ||
                                $route.name != 'index',
                        },
                    ]"
                />
            </nuxt-link>
            <navigation :display="navigation.display" @close="onToggle" />
            <hamburger :display="navigation.display" @toggle="onToggle" />
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
        },
    },
};
</script>
