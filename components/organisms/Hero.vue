<template>
    <div class="bg-dark-vue flex min-h-screen">
        <div class="container mx-auto lg:m-auto lg:pb-80">
            <div
                class="flex flex-wrap items-center justify-center content-center"
            >
                <div>
                    <rocket class="h-40 lg:h-auto" />
                </div>
                <div
                    class="flex flex-col gap-2 items-strech justify-items-center"
                >
                    <h1
                        class="font-extrabold text-center text-4xl lg:text-6xl font-sans-bold my-2 text-white"
                    >
                        <span class="block">We build better</span>
                    </h1>
                    <typist
                        class="text-center text-dark-vue text-base lg:text-xl bg-outsoar m-1 p-1 lg:p-2 lg:m-2"
                        :words="strings"
                        :human="false"
                    ></typist>
                    <div class="flex-grow">
                        <h3
                            class="flex-grow block font-sans text-center text-base lg:text-xl text-white"
                        >
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
                            <span>your company</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="container mx-auto absolute bottom-6 lg:bottom-4 left-0 right-0"
        >
            <div class="flex flex-col items-center gap-4">
                <div
                    class="flex flex-col text-base text-center items-center lg:text-lg text-white"
                >
                    <span class="block">Custom software helps you </span>
                    <span class="block"
                        >gain customers faster, reduce operating costs,</span
                    >
                    <span class="block">and create new income streams.</span>
                </div>
                <btn-link to="#">Learn How</btn-link>
                <chevron-double-down
                    class="h-6 w-6 fill-current animate-bounce text-white"
                />
            </div>
        </div>
    </div>
</template>
<script>
import BtnLink from '@/components/atoms/BtnLink';
import ChevronDoubleDown from '@/components/atoms/icons/ChevronDoubleDown';
import Typist from '@/components/atoms/Typer';
import Rocket from '@/components/atoms/undraw/Rocket';

export default {
    components: {
        BtnLink,
        ChevronDoubleDown,
        Typist,
        Rocket,
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
                '< Custom Softwares >',
            ],
            scrollY: 0,
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
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            this.scrollY = window.scrollY;
        },
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
