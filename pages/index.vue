<template>
    <main>
        <Segment class="h-screen asymmetric">
            <hero class="bg-dark-desaturated-blue" />
        </Segment>
        <Segment class="bg-gray-100 shadow-inner">
            <card
                class="container p-6 transform -translate-y-12 lg:-translate-y-24"
            >
                <template #body>
                    <h-title size="text-4xl" class="text-center">
                        We are experts in
                    </h-title>
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
                <h-title size="text-4xl"> Who we are</h-title>
            </div>
        </Segment>
        <Segment class="bg-gray-100 shadow-inner">
            <!-- <hero /> -->
            <div class="flex flex-col my-6 justify-center items-center">
                <h-title size="text-4xl"> How we do it</h-title>
            </div>
        </Segment>
        <Segment class="bg-white shadow-inner">
            <!-- <hero /> -->
            <div class="flex flex-col my-6 justify-center items-center">
                <h-title size="text-4xl"> Our technologies</h-title>
            </div>
        </Segment>
        <Segment class="bg-gray-100">
            <!-- <hero /> -->
            <div class="flex flex-col my-6 justify-center items-center">
                <h-title size="text-4xl"> Trusted by</h-title>
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

export default {
    components: {
        Hero,
        Segment,
        BtnLink,
        Card,
        List,
        HTitle,
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

<style scoped>
/* .asymmetric::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: skewY(-12deg);
    z-index: -10;
} */

.asymmetric::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    background-image: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#f8981e),
        to(#f7b733)
    );
    background-image: linear-gradient(80deg, #f8981e, #f27958);
    transform-origin: top left;
    transform: skewY(-12deg);
    z-index: -10;
}
</style>
