<template>
    <nav
        :class="[
            isDisplay,
            'min-h-screen fixed bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-center flex-1',
            'text-dark-vue bg-light-vue dark:bg-dark-vue dark:text-light-vue',
        ]"
    >
        <div class="container flex flex-col flex-grow mt-24 mx-auto">
            <div class="flex flex-cols justify-center">
                <grid gap="gap-4" breakpoints="lg:grid-cols-3">
                    <div
                        v-for="(n, i) in topMenuItems"
                        :key="i"
                        class="flex flex-col cursor-pointer"
                        @click="pushRouter(n.to)"
                    >
                        <div
                            class="flex flex-row lg:flex-col items-center justify-between"
                        >
                            <h3
                                class="text-center font-bold text-base lg:text-lg leading-1 lg:my-4"
                            >
                                {{ n.label }}
                            </h3>
                            <component
                                :is="n.component"
                                :class="[
                                    'fill-current',
                                    'object-contain h-24 w-auto lg:p-2 lg:my-4 lg:h-64',
                                ]"
                            />
                        </div>
                    </div>
                </grid>
            </div>
            <div class="flex flex-wrap justify-center overflow-hidden">
                <a
                    v-for="(n, i) in MenuItems"
                    :key="i"
                    href="#"
                    :class="[
                        'py-2 font-medium text-base lg:text-lg text-center',
                        'w-1/2 overflow-hidden lg:w-1/3',
                    ]"
                    >{{ n }}</a
                >
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

export default {
    components: {
        BuildingWebsites,
        ScrumBoard,
        BugFixing,
        Grid,
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
                'Who we are',
                '',
                'Who We Are',
                'Our Technologies',
                'Annoucements',
                'Industry Insights',
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
