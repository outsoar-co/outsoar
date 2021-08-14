<template>
    <div
        class="bg-light-vue text-dark-vue dark:bg-dark-vue dark:text-white flex min-h-screen lg:mb-36"
    >
        <div class="container mx-auto">
            <div
                class="w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mb-10"
            >
                <div class="container mx-auto px-2">
                    <div
                        class="flex lg:flex-row flex-col-reverse items-top justify-center lg:justify-start"
                    >
                        <div class="flex flex-col gap-y-2 lg:gap-y-4">
                            <!-- <span class="text-sm"
                                >Your creative and development team.</span
                            > -->
                            <h1
                                class="font-extrabold text-center lg:text-left text-4xl lg:text-7xl font-sans-bold"
                            >
                                <span class="block">We build Better</span>
                            </h1>
                            <div
                                :class="[
                                    'flex',
                                    'text-dark-vue dark:text-light-vue',
                                ]"
                            >
                                <typist
                                    :class="[
                                        'text-lg p-1 w-full',
                                        'lg:text-3xl',
                                        'text-center lg:text-left',
                                    ]"
                                    :words="strings"
                                    :human="false"
                                ></typist>
                            </div>
                            <div class="flex flex-wrap">
                                <h3
                                    class="flex-grow font-sans text-center lg:text-left text-sm lg:text-base"
                                >
                                    <span class=""
                                        >Delivering Digital Experience that
                                        will</span
                                    >
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
                            <div
                                class="flex my-2 justify-center lg:justify-start"
                            >
                                <btn-link to="#">
                                    <div
                                        class="flex flex-row items-center hover:scale-120 transform hover:translate-x-2"
                                    >
                                        Talk to us today
                                    </div>
                                </btn-link>
                            </div>
                        </div>
                        <div class="relative h-5/6 mb-4 p-4 w-auto lg:w-1/2">
                            <!-- <div
                                class="absolute inset-0 scale-90 bg-light-outsoar dark:bg-white opacity-80 rounded-sm transform rotate-1 mx-auto"
                            ></div>
                            <div
                                class="absolute inset-0 scale-90 bg-grayish-red-200 dark:bg-dark-even rounded-sm transform -rotate-1 mx-auto"
                            ></div> -->
                            <rocket
                                class="object-cover h-62 lg:h-96 transform scale-80 lg:scale-75 lg:-translate-x-40"
                            />
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
                        class="h-6 w-6 fill-current animate-bounce text-dark-vue dark:text-light-vue hidden lg:block"
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
// import WebHosting from '@/components/atoms/undraw/WebHosting';

export default {
    components: {
        BtnLink,
        ChevronDoubleDown,
        // ChevronDoubleRight,
        Typist,
        Rocket,
        // WebHosting,
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
