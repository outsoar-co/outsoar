<template>
    <header
        :class="[
            'sticky top-0 left-0 right-0 z-30 bg-light-vue dark:bg-dark-vue border-t-2 border-dark-vue dark:border-light-vue',
            { shadow: scrollY > 0 },
            {
                'shadow-none': scrollY == 0 && $route.name == 'index',
            },
        ]"
    >
        <div class="container mx-auto flex items-stretch px-2 py-4">
            <nuxt-link to="/" class="self-center z-10 mr-auto">
                <logo
                    :class="[
                        'h-8 lg:h-10 sans-bold',
                        { 'fill-current text-light-outsoar': scrollY == 0 },
                        {
                            'fill-current text-light-outsoar':
                                scrollY > 0 ||
                                navigation.display ||
                                $route.name != 'index',
                        },
                    ]"
                    :display="navigation.display"
                    :scroll-y="scrollY"
                />
            </nuxt-link>
            <navigation :display="navigation.display" @close="onToggle" />
            <hamburger
                :scroll-y="scrollY"
                :display="navigation.display"
                @toggle="onToggle"
            />
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
