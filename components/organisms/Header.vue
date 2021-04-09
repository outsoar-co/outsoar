<template>
    <header
        :class="[
            'sticky top-0 left-0 right-0 z-30',
            { 'bg-white shadow': scrollY > 0 },
            {
                'shadow-none bg-dark-vue':
                    scrollY == 0 && $route.name == 'index',
            },
        ]"
    >
        <div
            class="relative bg-gray-700 text-white p-2"
            :class="{ hidden: scrollY > 0 }"
        >
            <div
                class="container text-xs lg:text-sm mx-auto flex flex-row items-center justify-end"
            >
                <a
                    href="https://slack.com/intl/en-ph/"
                    class="mx-2 flex flex-row items-center justify-items-center"
                >
                    <slack class="mr-2 h-4 w-4 fill-current text-white" />
                    <span class="text-xs">Join us</span>
                </a>
                <a
                    href="mailto:hello@outsoar.ph?subject=Outsoar Enquiry"
                    class="mx-2 flex flex-row items-center justify-items-center"
                >
                    <gmail class="mr-2 h-4 w-4 fill-current text-white" />
                    <span class="text-xs">Email us</span>
                </a>
            </div>
        </div>
        <div class="container mx-auto flex items-stretch h-12 lg:h-16 px-2">
            <nuxt-link to="/" class="self-center z-10 mr-auto">
                <logo
                    :class="[
                        'h-10 lg:h-12 sans-bold m-2',
                        { 'fill-current text-outsoar': scrollY == 0 },
                        {
                            'fill-current text-outsoar':
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
import Slack from '@/components/atoms/icons/Slack';
import Gmail from '@/components/atoms/icons/Gmail';

export default {
    components: {
        Logo,
        Hamburger,
        Navigation,
        Slack,
        Gmail,
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
