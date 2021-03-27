<template>
    <header class="sticky top-0 left-0 right-0 z-30">
        <div
            class="container relative mx-auto px-4 py-2 flex items-center lg:py-6 h-full"
        >
            <a
                class="inline-block text-nuxt-gray h-10 lg:h-10 z-10 mr-auto nuxt-link-active"
            >
                <logo :class="['h-10 lg:h-12 sans-bold']" />
            </a>
            <menu-item :display="menuItem.display" />
            <hamburger @toggle="onToggle" />
        </div>
    </header>
</template>
<script>
import Logo from '@/components/atoms/Logo';
import Hamburger from '@/components/molecules/Hamburger';
import MenuItem from '@/components/molecules/MenuItem';

export default {
    components: {
        Logo,
        Hamburger,
        MenuItem,
    },
    data() {
        return {
            menuItem: {
                display: false,
            },
        };
    },
    methods: {
        onToggle(active) {
            this.menuItem.display = active;
        },
    },
};
</script>
