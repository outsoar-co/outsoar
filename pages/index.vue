<template>
    <main class="bg-light-vue dark:bg-dark-vue">
        <hero />
        <Segment class="bg-gray-100 dark:bg-dark-odd shadow-inner">
            <card
                class="container p-6 pb-12 transform -translate-y-12 lg:transform lg:-translate-y-32"
            >
                <template #body>
                    <h-title size="text-3xl" class="text-center">
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
                                    'flex flex-col w-full lg:w-1/3 gap-6 p-2',
                            },
                        }"
                    >
                        <template #icon="{ item }">
                            <component
                                :is="item.icon"
                                :class="[
                                    'fill-current hover:text-outsoar',
                                    'object-contain h-64 w-auto p-2 my-4 lg:h-64',
                                ]"
                            />
                        </template>
                    </list>
                </template>
            </card>
        </Segment>
        <Segment class="bg-white dark:bg-dark-even">
            <div class="flex flex-col justify-center items-center pt-4 pb-8">
                <div
                    class="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap p-4"
                >
                    <div class="p-4 lg:w-1/2">
                        <img
                            src="https://placeimg.com/640/480/animals"
                            class="object-cover w-full"
                        />
                    </div>
                    <p-article class="p-4 lg:w-1/2">
                        <h4>Who we are</h4>
                        <h1>We are Outsoar</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Sapien eget mi proin sed libero
                            enim sed. Nibh mauris cursus mattis molestie. Urna
                            condimentum mattis pellentesque id. Arcu ac tortor
                        </p>
                        <p>
                            The Earth is a very small stage in a vast cosmic
                            arena. Think of the rivers of blood spilled by all
                            those generals and emperors so that, in glory and
                            triumph, they could become the momentary masters of
                            a fraction of a dot.
                        </p>
                    </p-article>
                </div>
                <btn-link to="#" class="mx-auto">
                    <div
                        class="flex flex-row items-center hover:scale-120 transform hover:translate-x-2"
                    >
                        Lets Talk
                    </div>
                </btn-link>
            </div>
        </Segment>
        <Segment class="bg-gray-100 dark:bg-dark-odd shadow-inner">
            <div class="flex flex-col justify-center items-center pt-4 pb-8">
                <div
                    class="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap p-4"
                >
                    <p-article class="p-4 lg:w-1/2">
                        <h4>How we do it</h4>
                        <h1>We do it for fun</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Sapien eget mi proin sed libero
                            enim sed. Nibh mauris cursus mattis molestie. Urna
                            condimentum mattis pellentesque id. Arcu ac tortor
                        </p>
                        <p>
                            The Earth is a very small stage in a vast cosmic
                            arena. Think of the rivers of blood spilled by all
                            those generals and emperors so that, in glory and
                            triumph, they could become the momentary masters of
                            a fraction of a dot.
                        </p>
                    </p-article>
                    <div class="p-4 lg:w-1/2">
                        <img
                            src="https://placeimg.com/640/480/tech"
                            class="object-cover h-5/6 w-full"
                        />
                    </div>
                </div>
                <btn-link to="#" class="mx-auto">
                    <div
                        class="flex flex-row items-center hover:scale-120 transform hover:translate-x-2"
                    >
                        How can we help you
                    </div>
                </btn-link>
            </div>
        </Segment>
        <Segment class="bg-white dark:bg-dark-even shadow-inner">
            <div class="flex flex-col justify-center items-center pt-4 pb-8">
                <div
                    class="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap"
                >
                    <p-article class="p-4">
                        <h4>Our Technologies</h4>
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
                <btn-link to="#" class="mx-auto">
                    <div
                        class="flex flex-row items-center hover:scale-120 transform hover:translate-x-2"
                    >
                        Learn more about us
                    </div>
                </btn-link>
            </div>
        </Segment>
        <Segment class="bg-gray-100 dark:bg-dark-odd">
            <div class="flex flex-col justify-center items-center">
                <div
                    class="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap w-full"
                >
                    <p-article class="p-4 lg:w-1/2">
                        <h4>Trusted by</h4>
                        <h1>You are on the good team.</h1>
                        <p>
                            The Earth is a very small stage in a vast cosmic
                            arena. Think of the rivers of blood spilled by all
                            those generals and emperors so that, in glory and
                            triumph
                        </p>
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
                                :key="trust"
                                class="h-32 w-auto"
                            ></div>
                        </template>
                    </div>
                </div>
            </div>
        </Segment>
    </main>
</template>

<script>
import Hero from '@/components/organisms/Hero';
import List from '@/components/molecules/List';
import BtnLink from '@/components/atoms/BtnLink';
import Card from '@/components/molecules/Card';
import Segment from '@/components/organisms/Segment';
import HTitle from '@/components/atoms/HTitle';
import PArticle from '~/components/organisms/PArticle.vue';

export default {
    components: {
        Hero,
        Segment,
        BtnLink,
        Card,
        List,
        HTitle,
        PArticle,
    },
    data() {
        return {
            services: [
                {
                    title: 'Development & Design',
                    body: `Through implementing the latest technologies and patterns in the industry with exceptional attention to detail, we build and design digital systems tailored to the needs of each individual business.`,
                    icon: () =>
                        import('../components/atoms/undraw/BuildingWebsites'),
                    to: '#',
                },
                {
                    title: 'Planning & Consultancy',
                    body: `We love helping businesses lay out a cohesive digital strategy for long-term success and the initial consultation to see if we're the right fit for you is on us!`,
                    icon: () => import('../components/atoms/undraw/ScrumBoard'),
                    to: '#',
                },
                {
                    title: 'DevOps & Support',
                    body: `Even the most robust systems need adjusting every now and then. As we're invested in your long-term success, we provide periodic maintenance that won't break the bank and will keep you running smoothly.`,
                    icon: () => import('../components/atoms/undraw/BugFixing'),
                    to: '#',
                },
            ],
            stacks: [
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg',
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg',
                'https://cdn.svgporn.com/logos/shopify.svg',
                'https://cdn.svgporn.com/logos/aws.svg',
            ],
            trustedBy: [
                'https://i.pinimg.com/280x280_RS/d2/ce/05/d2ce052a66c9bcaed8ec2c302a309737.jpg',
                'https://avatars.githubusercontent.com/u/10903974?s=200&v=4',
                'https://assets1.phonebooky.com/listings/logos/000/029/634/original/Toni_and_Guy_%28logo%29.jpg',
                'https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/82993718_109478154144107_8387073756335526663_n.png?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGKEJfpCFffvi65fGMwR7h1YdknPWcoONNh2Sc9Zyg402CoaAO_CUNmEmaSRm8GQmP2ARvsFljmeH6OZ5tCeXST&_nc_ohc=HndV-WbZOzUAX-Adv7s&_nc_ht=scontent.fmnl17-1.fna&oh=c6f2260fc1d48e10c381b20be7df28ae&oe=60A163C7',
                'https://media-exp1.licdn.com/dms/image/C4D0BAQHWxlis-cuobQ/company-logo_200_200/0/1519912655201?e=2159024400&v=beta&t=LtME-VaBvRMGXYp1q-qaZT-Om_F6QOinKi1VtqAQ2uM',
            ],
        };
    },
};
</script>
