<template>
    <main>
        <Segment class="bg-white">
            <hero />
        </Segment>
        <Segment class="bg-gray-200 shadow-inner">
            <card class="container p-6 transform -translate-y-32">
                <template #body>
                    <h3-title size="text-4xl" class="text-center">
                        We are experts in
                    </h3-title>
                    <list :items="services">
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
        <Segment class="bg-white">
            <!-- <hero /> -->
            <div class="flex flex-col my-6 justify-center items-center">
                <h3-title size="text-4xl"> Who we are</h3-title>
            </div>
        </Segment>
        <Segment class="bg-gray-200 shadow-inner">
            <!-- <hero /> -->
            <div class="flex flex-col my-6 justify-center items-center">
                <h3-title size="text-4xl"> How we do it</h3-title>
            </div>
        </Segment>
        <Segment class="bg-white">
            <!-- <hero /> -->
            <div class="flex flex-col my-6 justify-center items-center">
                <h3-title size="text-4xl"> Trusted by</h3-title>
            </div>
        </Segment>
        <Segment class="bg-gray-200 shadow-inner">
            <div class="flex flex-col my-6 justify-center items-center">
                <h3-title class="text-5xl mb-4 text-center">
                    We write & ship beautiful code.
                </h3-title>
                <div class="flex-none items-center">
                    <btn-link> Let's chat </btn-link>
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
import Segment from '@/components/organisms/Segment.vue';
import H3Title from '@/components/atoms/Title.vue';
export default {
    components: {
        Hero,
        Segment,
        BtnLink,
        Card,
        List,
        H3Title,
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
        };
    },
};
</script>
