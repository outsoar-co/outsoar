<template>
    <div class="flex flex-col mx-auto items-center my-24 py-16">
        <div class="flex flex-col mb-8 text-center items-center">
            <h1
                class="font-extrabold text-center text-6xl lg:text-8xl font-sans-bold my-2"
            >
                <span class="block"> We build better </span>
            </h1>
            <vue-typed-js
                class="text-center text-white text-6xl p-3 bg-gray-900 my-2"
                :loop="true"
                :cursor-char="'|'"
                :fade-out-delay="1000"
                :strings="strings"
            >
                <span class="block typing"></span>
            </vue-typed-js>
            <h3 class="block text-center text-6xl">
                <span class="block my-2">that will</span>
                <transition-group tag="span">
                    <span
                        v-for="(w, i) in words"
                        :key="w"
                        :class="{ hidden: current !== i }"
                        class="font-extrabold underline uppercase font-sans-bold"
                        >{{ w }}</span
                    >
                </transition-group>
                <span class="block my-2">your company</span>
            </h3>
        </div>
        <div class="flex flex-col my-4 text-center items-center text-xl">
            <span class="block">Custom software helps you </span>
            <span class="block"
                >gain customers faster, reduce operating costs,</span
            >
            <span class="block">and create new income streams.</span>
        </div>
        <btn-link to="#">Learn How </btn-link>
        <chevron-double-down class="h-6 w-6 my-6 fill-current animate-bounce" />
    </div>
</template>
<script>
import BtnLink from '@/components/atoms/BtnLink';
import ChevronDoubleDown from '@/components/atoms/icons/ChevronDoubleDown';

export default {
    components: {
        BtnLink,
        ChevronDoubleDown,
    },
    data() {
        return {
            current: 0,
            words: [],
            strings: [
                '[ Website Pages ]',
                '{ Mobile Applications }',
                '&lt; Custom Softwares &gt;',
            ],
        };
    },
    created() {
        const vm = this;
        const words = ['outsoar', 'jumpstart', 'transform'];
        setInterval(function () {
            if (words[vm.current]) {
                vm.words.push(words[vm.current]);
                vm.current++;
            } else {
                vm.current = 0;
                vm.words = [];
            }
        }, 3000);
    },
};
</script>
<style scoped></style>
