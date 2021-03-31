<template>
    <div class="flex flex-col mx-auto items-center">
        <div
            class="absolute top-25 flex flex-col p-4 lg:p-8 text-center items-center"
        >
            <h1
                class="font-extrabold text-center text-6xl lg:text-8xl font-sans-bold my-2"
            >
                <span class="block"> We build better </span>
            </h1>
            <vue-typed-js
                class="text-center text-white text-2xl lg:text-4xl bg-gray-900 m-1 p-1"
                :loop="true"
                :fade-out-delay="1000"
                :strings="strings"
            >
                <span class="typing"></span>
            </vue-typed-js>
            <h3 class="block font-sans text-center text-3xl lg:text-4xl">
                <span class="">that will</span>
                <transition-group tag="span">
                    <span
                        v-for="w in words"
                        :key="w.text"
                        :class="{ hidden: !w.display }"
                        class="font-extrabold underline"
                        >{{ w.text }}</span
                    >
                </transition-group>
                <span class="">your company</span>
            </h3>
        </div>
        <div class="absolute bottom-0 mb-4">
            <div class="flex flex-col items-center gap-2">
                <div
                    class="flex flex-col text-base lg:my-4 text-center items-center lg:text-xl"
                >
                    <span class="block">Custom software helps you </span>
                    <span class="block"
                        >gain customers faster, reduce operating costs,</span
                    >
                    <span class="block">and create new income streams.</span>
                </div>
                <btn-link class="my-2" to="#">Learn How </btn-link>
                <chevron-double-down
                    class="h-6 w-6 fill-current animate-bounce"
                />
            </div>
        </div>
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
            words: [
                { text: 'outsoar', display: false },
                { text: 'jumpstart', display: false },
                { text: 'transform', display: false },
            ],
            strings: [
                '[ Website Pages ]',
                '{ Mobile Applications }',
                '&lt; Custom Softwares &gt;',
            ],
        };
    },
    created() {
        const vm = this;
        setInterval(function () {
            vm.traverseWords();
        }, 3000);
    },
    mounted() {
        this.traverseWords();
    },
    methods: {
        traverseWords() {
            if (this.words[this.current]) {
                this.words = this.words.map((item, index) => {
                    return { text: item.text, display: this.current === index };
                });
                this.current++;
            } else {
                this.current = 0;
            }
        },
    },
};
</script>
<style scoped></style>
