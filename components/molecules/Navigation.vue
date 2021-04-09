<template>
    <nav
        :class="[
            isDisplay,
            'fixed bottom-0 top-0 left-0 right-0 flex flex-col items-center justify-center bg-white',
        ]"
    >
        <div
            class="container mx-auto min-h-screen flex flex-col justify-center items-center"
        >
            <div class="flex flex-cols justify-center max-h-screen">
                <grid gap="gap-4" breakpoints="lg:grid-cols-3">
                    <div
                        v-for="(n, i) in topMenuItems"
                        :key="i"
                        class="flex flex-col justify-items-center hover:text-outsoar cursor-pointer"
                        @click="pushRouter(n.to)"
                    >
                        <h3
                            class="text-center font-bold text-xl leading-1 lg:my-4"
                        >
                            {{ n.label }}
                        </h3>
                        <component
                            :is="n.component"
                            :class="[
                                'fill-current hover:text-outsoar',
                                'object-contain h-24 w-auto lg:p-2 lg:my-4 lg:h-64',
                            ]"
                        />
                    </div>
                </grid>
            </div>
            <hr class="my-2 lg:my-8" />
            <div class="flex flex-wrap justify-center overflow-hidden">
                <a
                    v-for="(n, i) in MenuItems"
                    :key="i"
                    href="#"
                    :class="[
                        'py-2 font-medium text-lg text-center uppercase hover:text-outsoar',
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
                { label: 'Planning & Consultancy', component: 'ScrumBoard' },
                { label: 'DevOps & Support', component: 'BugFixing' },
            ],
            MenuItems: [
                'How we do things',
                'Case Studies',
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
