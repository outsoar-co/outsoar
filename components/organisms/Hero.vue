<template>
    <div
        class="bg-light-vue text-dark-vue dark:bg-dark-vue dark:text-white flex min-h-screen lg:mb-36"
    >
        <div class="container mx-auto">
            <div
                class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-10"
            >
                <div
                    class="flex lg:flex-row flex-wrap items-center justify-center"
                >
                    <div class="h-5/6">
                        <rocket class="object-cover h-56 lg:h-96" />
                    </div>
                    <div
                        class="flex flex-col gap-y-2 lg:gap-y-4 justify-center"
                    >
                        <h1
                            class="font-extrabold text-center text-3xl lg:text-7xl font-sans-bold"
                        >
                            <span class="block">We build better</span>
                        </h1>
                        <div
                            :class="[
                                'w-3/4 mx-auto flex items-center justify-center',
                                'bg-dark-vue text-light-vue',
                                'dark:bg-light-vue dark:text-dark-vue',
                            ]"
                        >
                            <typist
                                :class="[
                                    'text-center text-base p-1 w-full',
                                    'lg:text-xl',
                                ]"
                                :words="strings"
                                :human="false"
                            ></typist>
                        </div>
                        <div class="flex flex-wrap">
                            <h3
                                class="flex-grow font-sans text-center text-base lg:text-xl"
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
                        <div class="flex my-2">
                            <btn-link to="#" class="mx-auto">
                                <div
                                    class="flex flex-row items-center hover:scale-120 transform hover:translate-x-2"
                                >
                                    Talk to us today
                                </div>
                            </btn-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mx-auto absolute bottom-4 lg:bottom-8 left-0 right-0">
                <div class="flex flex-col items-center gap-4">
                    <!-- <ul
                        class="container flex flex-wrap lg:flex-row items-center justify-around"
                    >
                        <li>Custom Software</li>
                        <li>E-commerce</li>
                        <li>Wordpress Development</li>
                        <li>Consultancy</li>
                        <li>Support</li>
                        <li>DevOps</li>
                    </ul> -->
                    <chevron-double-down
                        class="h-6 w-6 fill-current animate-bounce text-dark-vue dark:text-light-vue"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BtnLink from '@/components/atoms/BtnLink';
import ChevronDoubleDown from '@/components/atoms/icons/ChevronDoubleDown';
// import ChevronDoubleRight from '@/components/atoms/icons/ChevronDoubleRight';
import Typist from '@/components/atoms/Typer';
import Rocket from '@/components/atoms/undraw/Rocket';

export default {
    components: {
        BtnLink,
        ChevronDoubleDown,
        // ChevronDoubleRight,
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
