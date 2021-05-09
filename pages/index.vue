<template>
    <main class="bg-light-vue dark:bg-dark-vue">
        <hero />
        <segment class="bg-grayish-red-200 dark:bg-dark-odd shadow-inner">
            <card
                class="container px-6 py-20 transform -translate-y-12 lg:transform lg:-translate-y-32"
            >
                <template #body>
                    <span class="flex text-base justify-center text-center"
                        >Our services</span
                    >
                    <h-title size="text-3xl" class="text-center mb-4">
                        We are experts in
                    </h-title>
                    <list
                        :items="services"
                        :attr-class="{
                            items: {
                                basedClass:
                                    'flex flex-col lg:flex-row flex-wrap',
                            },
                            item: {
                                basedClass:
                                    'flex flex-col w-full lg:w-1/3 gap-6 lg:p-8 p-4',
                            },
                        }"
                    >
                        <template #icon="{ item }">
                            <div
                                class="bg-grayish-red-200 dark:bg-dark-even rounded-sm shadow-sm"
                            >
                                <component
                                    :is="item.props.banner.icon"
                                    :class="[
                                        'fill-current hover:text-outsoar',
                                        'object-contain h-64 w-full lg:h-56 mx-auto lg:p-6 p-2',
                                    ]"
                                />
                            </div>
                        </template>
                        <template #to="{ item }">
                            <div class="flex-none flex py-4 justify-center">
                                <btn-link :to="item.slug">Learn more</btn-link>
                            </div>
                        </template>
                    </list>
                </template>
            </card>
        </segment>
        <segment
            v-for="(section, index) in landSections"
            :key="section.id"
            :class="{
                'bg-white dark:bg-dark-even py-8': (index + 2) % 2 === 0,
                'bg-grayish-red-200 dark:bg-dark-odd shadow-inner py-8':
                    (index + 2) % 2 !== 0,
            }"
        >
            <div class="flex flex-col justify-center items-center">
                <div
                    class="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap lg:gap-x-8 my-24"
                    :class="{
                        'flex-wrap-reverse lg:flex-row-reverse':
                            (index + 2) % 2 !== 0,
                    }"
                >
                    <div class="w-5/6 lg:w-1/2">
                        <template
                            v-if="
                                section.props.banner.icon &&
                                !/our-tools-and-technologies|trusted-by/.test(
                                    section.slug
                                )
                            "
                        >
                            <div
                                class="rounded-sm p-8 mx-auto"
                                :class="{
                                    'bg-grayish-red-200 dark:bg-dark-odd':
                                        (index + 2) % 2 == 0,
                                    'bg-light-vue dark:bg-dark-even':
                                        (index + 2) % 2 !== 0,
                                }"
                            >
                                <component
                                    :is="section.props.banner.icon"
                                    class="fill-current object-contain h-64 lg:h-96 w-auto mx-auto p-4"
                                />
                            </div>
                        </template>
                        <template
                            v-if="
                                /our-tools-and-technologies|trusted-by/.test(
                                    section.slug
                                )
                            "
                        >
                            <component :is="section.props.banner.icon" />
                        </template>
                    </div>
                    <p-article class="w-5/6 lg:w-1/2 p-8 lg:p-4">
                        <span class="text-base">{{ section.title }}</span>
                        <h1>{{ section.props.banner.text }}</h1>
                        <p>{{ section.body }}</p>
                        <nuxt-link
                            v-if="section.props.linkText"
                            :to="section.slug"
                        >
                            <div class="flex flex-row items-center">
                                <span>{{ section.props.linkText }}</span>
                                <chevron-double-right
                                    class="fill-current ml-1"
                                />
                            </div>
                        </nuxt-link>
                    </p-article>
                </div>
            </div>
        </segment>
        <!-- <Segment class="bg-grayish-red-200 dark:bg-dark-odd shadow-inner py-8">
            <div class="flex flex-col justify-center items-center">
                <div
                    class="flex flex-wrap flex-wrap-reverse justify-center lg:flex-row lg:flex-row-reverse lg:flex-nowrap p-4"
                >
                    <div
                        class="p-8 my-20 lg:w-1/2 rounded-3xl bg-light-vue dark:bg-dark-even"
                    >
                        <how-we-do-it
                            class="fill-current object-contain h-96 w-auto mx-auto"
                        />
                    </div>
                    <p-article class="p-8 my-20 lg:w-1/2">
                        <span class="text-base">How we do it</span>
                        <h1>We do it for fun</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Sapien eget mi proin sed libero
                            enim sed. Nibh mauris cursus mattis molestie. Urna
                            condimentum mattis pellentesque id. Arcu ac tortor
                        </p>
                        <nuxt-link to="/about-us/who-we-are">
                            <div class="flex flex-row items-center">
                                <span>Learn more about us</span>
                                <chevron-double-right
                                    class="fill-current ml-1"
                                />
                            </div>
                        </nuxt-link>
                    </p-article>
                </div>
            </div>
        </Segment> -->
        <!-- <Segment class="bg-white dark:bg-dark-even shadow-inner py-8">
            <div class="flex flex-col justify-center items-center pt-4 pb-8">
                <div
                    class="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap"
                >
                    <p-article class="p-4">
                        <span>Our Technologies</span>
                        <h1>Stacks we are comforable to use</h1>
                        <p>
                            The Earth is a very small stage in a vast cosmic
                            arena. Think of the rivers of blood spilled by all
                            those generals and emperors so that, in glory and
                            triumph, they could become the momentary masters of
                            a fraction of a dot.
                        </p>
                        <div class="grid grid-cols-3 lg:grid-cols-4">
                            <div
                                v-for="s in stacks"
                                :key="s"
                                class="h-1/2 mx-auto"
                            >
                                <img :src="s" class="object-over h-24 w-full" />
                            </div>
                        </div>
                    </p-article>
                </div>
                <btn-link to="/about-us/who-we-are" class="mx-auto">
                    <div
                        class="flex flex-row items-center hover:scale-120 transform hover:translate-x-2"
                    >
                        Learn more about us
                    </div>
                </btn-link>
            </div>
        </Segment>
        <Segment class="bg-grayish-red-200 dark:bg-dark-odd">
            <div class="flex flex-col justify-center items-center">
                <div
                    class="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap w-full"
                >
                    <p-article class="p-4 lg:w-1/2">
                        <span>Trusted by</span>
                        <h1>You are on the good team.</h1>
                    </p-article>
                    <div
                        class="grid grid-cols-3 lg:grid-cols-5 lg:w-1/2 h-auto"
                    >
                        <template v-for="(trust, i) in trustedBy">
                            <div
                                :key="trust"
                                class="h-32 w-auto bg-white filter"
                            >
                                <img
                                    :src="trust"
                                    class="object-cover h-32 w-full"
                                />
                            </div>
                            <div
                                v-if="i !== trustedBy.length - 1"
                                :key="i"
                                class="h-32 w-auto"
                            ></div>
                        </template>
                    </div>
                </div>
            </div>
        </Segment> -->
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Hero from '@/components/organisms/Hero';
import List from '@/components/molecules/List';
import BtnLink from '@/components/atoms/BtnLink';
import Card from '@/components/molecules/Card';
import Segment from '@/components/organisms/Segment';
import HTitle from '@/components/atoms/HTitle';
import PArticle from '@/components/organisms/PArticle.vue';
import WeAreOutsoar from '@/components/atoms/undraw/WeAreOutsoar';
import HowWeDoIt from '@/components/atoms/undraw/HowWeDoIt';
import ChevronDoubleRight from '@/components/atoms/icons/ChevronDoubleRight';

export default {
    components: {
        Hero,
        Segment,
        BtnLink,
        Card,
        List,
        HTitle,
        PArticle,
        WeAreOutsoar,
        HowWeDoIt,
        ChevronDoubleRight,
    },
    data() {
        return {
            // services: [
            //     {
            //         title: 'Development & Design',
            //         body: `Through implementing the latest technologies and patterns in the industry with exceptional attention to detail, we build and design digital systems tailored to the needs of each individual business.`,
            //         icon: () =>
            //             import('../components/atoms/undraw/BuildingWebsites'),
            //         to: '/services/development-and-design',
            //     },
            //     {
            //         title: 'Planning & Consultancy',
            //         body: `We love helping businesses lay out a cohesive digital strategy for long-term success and the initial consultation to see if we're the right fit for you is on us!`,
            //         icon: () => import('../components/atoms/undraw/ScrumBoard'),
            //         to: '/services/planning-and-consultancy',
            //     },
            //     {
            //         title: 'DevOps & Support',
            //         body: `Even the most robust systems need adjusting every now and then. As we're invested in your long-term success, we provide periodic maintenance that won't break the bank and will keep you running smoothly.`,
            //         icon: () => import('../components/atoms/undraw/BugFixing'),
            //         to: '/services/devops-and-support',
            //     },
            // ],
            // sections: ['about-us', 'how-we-do-it', 'out-stacks', 'trusted'],
            // stacks: [
            //     'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg',
            //     'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
            //     'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
            //     'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg',
            //     'https://cdn.svgporn.com/logos/shopify.svg',
            //     'https://cdn.svgporn.com/logos/aws.svg',
            // ],
            // trustedBy: [
            //     'https://i.pinimg.com/280x280_RS/d2/ce/05/d2ce052a66c9bcaed8ec2c302a309737.jpg',
            //     'https://avatars.githubusercontent.com/u/10903974?s=200&v=4',
            //     'https://assets1.phonebooky.com/listings/logos/000/029/634/original/Toni_and_Guy_%28logo%29.jpg',
            //     'https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/82993718_109478154144107_8387073756335526663_n.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGKEJfpCFffvi65fGMwR7h1YdknPWcoONNh2Sc9Zyg402CoaAO_CUNmEmaSRm8GQmP2ARvsFljmeH6OZ5tCeXST&_nc_ohc=HndV-WbZOzUAX-Adv7s&_nc_ht=scontent.fmnl17-1.fna&oh=c6f2260fc1d48e10c381b20be7df28ae&oe=60A163C7',
            //     'https://media-exp1.licdn.com/dms/image/C4D0BAQHWxlis-cuobQ/company-logo_200_200/0/1519912655201?e=2159024400&v=beta&t=LtME-VaBvRMGXYp1q-qaZT-Om_F6QOinKi1VtqAQ2uM',
            // ],
        };
    },
    computed: {
        ...mapGetters('content', {
            contents: 'items',
        }),
        services() {
            return this.contents.data.filter(
                (item) => item.props.category === 'services'
            );
        },
        landSections() {
            return this.contents.data.filter(
                (item) =>
                    item.props.category === 'main' &&
                    item.props.section === 'landing'
            );
        },
    },
};
</script>
