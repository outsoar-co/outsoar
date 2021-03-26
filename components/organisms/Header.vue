<template>
    <header class="sticky top-0 left-0 right-0 z-30">
        <div
            class="container relative mx-auto px-4 flex items-center lg:py-6 h-full"
        >
            <a
                class="inline-block text-nuxt-gray h-10 lg:h-10 z-10 mr-auto nuxt-link-active"
            >
                <Logo :class="['h-10 lg:h-12 sans-bold']" />
            </a>
            <button
                class="items-center px-8 py-2 ml-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-blueGray-900 focus:ring focus:outline-none"
            >
                Button
            </button>
        </div>
    </header>
</template>
<script>
import Logo from '@/components/atoms/Logo';
export default {
    components: {
        Logo,
    },
};
</script>
