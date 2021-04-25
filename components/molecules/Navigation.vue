<template>
    <nav
        :class="[
            isDisplay,
            'z-50 min-h-screen fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center flex-1',
            'text-dark-vue bg-light-vue dark:bg-dark-vue dark:text-light-vue',
        ]"
    >
        <div class="container flex justify-center min-h-screen mx-auto">
            <div class="w-full my-auto">
                <div
                    class="flex flex-col items-center justify-center divide-y divide-light-blue-400"
                >
                    <template v-for="(n, i) in MenuItems">
                        <anchor-link
                            :key="i"
                            to="#"
                            :class="[
                                'py-2 font-bold text-4xl lg:text-2xl text-center w-full',
                            ]"
                            >{{ n.label }}</anchor-link
                        >
                        <div
                            v-if="n.children.length > 0"
                            :key="i.label"
                            class="w-full flex items-center justify-center"
                        >
                            <grid
                                gap="gap-0"
                                breakpoints="lg:grid-cols-3 lg:gap-4"
                            >
                                <div
                                    v-for="(c, ci) in n.children"
                                    :key="ci"
                                    class="flex flex-col cursor-pointer"
                                    @click="pushRouter(c.to)"
                                >
                                    <anchor-link
                                        class="flex flex-row lg:flex-col items-center"
                                    >
                                        <component
                                            :is="c.component"
                                            :class="[
                                                'fill-current',
                                                'object-contain h-24 w-auto lg:p-2 lg:my-4 lg:h-64',
                                                'hidden lg:block',
                                            ]"
                                        />
                                        <h3
                                            class="text-center font-medium text-base lg:text-lg leading-1 lg:my-4"
                                        >
                                            {{ c.label }}
                                        </h3>
                                    </anchor-link>
                                </div>
                            </grid>
                        </div>
                    </template>
                    <div class="py-2 w-full flex justify-center">
                        <btn-link to="#"> Contact Us </btn-link>
                    </div>
                    <div class="py-2 w-full flex justify-center">
                        <ul
                            class="flex flex-wrap lg:flex-row items-center justify-around w-3/4"
                        >
                            <li>
                                <a
                                    href="tel:+639176373812"
                                    class="flex flex-row items-center justify-items-center"
                                >
                                    <icon-phl
                                        class="m-2 h-4 lg:h-6 fill-current text-white"
                                    />
                                    <span
                                        >Call Us
                                        <span class="font-bold"
                                            >(+63) 917 637 3812</span
                                        ></span
                                    >
                                </a>
                            </li>
                            <li>
                                <anchor-link
                                    to="mailto:hello@outsoar.ph?subject=Outsoar Enquiry"
                                    class="flex flex-row items-center justify-items-center"
                                >
                                    <icon-gmail
                                        class="m-2 h-4 lg:h-6 fill-current text-white"
                                    />
                                    <span
                                        >Email us
                                        <span class="font-bold"
                                            >hello@outsoar.ph</span
                                        ></span
                                    >
                                </anchor-link>
                            </li>
                            <li>
                                <anchor-link
                                    to="https://slack.com/intl/en-ph/"
                                    class="flex flex-row items-center justify-items-center"
                                >
                                    <icon-slack
                                        class="mx-2 h-4 lg:h-6 fill-current text-white"
                                    />
                                    <span
                                        >Join us on our
                                        <span class="font-bold"
                                            >@outsoar</span
                                        ></span
                                    >
                                </anchor-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import {
    BuildingWebsites,
    ScrumBoard,
    BugFixing,
} from '@/components/atoms/undraw';
import Grid from '@/components/molecules/Grid';
import AnchorLink from '@/components/atoms/AnchorLink';
import IconSlack from '@/components/atoms/icons/Slack';
import IconGmail from '@/components/atoms/icons/Gmail';
import IconPhl from '@/assets/icons/phl.svg?inline';
import BtnLink from '@/components/atoms/BtnLink';

export default {
    components: {
        BuildingWebsites,
        ScrumBoard,
        BugFixing,
        Grid,
        AnchorLink,
        IconSlack,
        IconGmail,
        IconPhl,
        BtnLink,
    },
    props: {
        display: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            topMenuItems: [
                {
                    label: 'Development & Design',
                    component: 'BuildingWebsites',
                    to: '/services/development-and-design',
                },
                {
                    label: 'Planning & Consultancy',
                    component: 'ScrumBoard',
                    to: '/services/planning-and-consultancy',
                },
                {
                    label: 'DevOps & Support',
                    component: 'BugFixing',
                    to: '/services/devops-and-support',
                },
            ],
            MenuItems: [
                {
                    label: 'Who we are',
                    to: '/services/development-and-design',
                    children: [],
                },
                {
                    label: 'What we do',
                    to: '#', // indicates parents and no link
                    children: [
                        {
                            label: 'Development & Design',
                            component: 'BuildingWebsites',
                            to: '/services/development-and-design',
                        },
                        {
                            label: 'Planning & Consultancy',
                            component: 'ScrumBoard',
                            to: '/services/planning-and-consultancy',
                        },
                        {
                            label: 'DevOps & Support',
                            component: 'BugFixing',
                            to: '/services/devops-and-support',
                        },
                    ],
                },
                {
                    label: 'How we do it',
                    to: '/services/development-and-design',
                    children: [],
                },
            ],
        };
    },
    computed: {
        isDisplay() {
            return this.display ? 'block' : 'hidden';
        },
    },
    methods: {
        pushRouter(to) {
            this.$router.push({ path: to });
            this.$emit('close', false);
        },
    },
};
</script>
