<template>
    <nav
        :class="[
            isDisplay,
            'fixed bottom-0 top-0 left-0 right-0 flex flex-col items-center justify-center flex-1 space-y-4 bg-white',
        ]"
    >
        <div class="container">
            <div class="flex justify-center">
                <grid gap="4" breakpoints="lg:grid-cols-3">
                    <div
                        v-for="n in topMenuItems"
                        :key="n"
                        class="flex flex-col justify-items-center hover:text-outsoar cursor-pointer"
                    >
                        <h3
                            class="text-center font-bold text-xl leading-1 my-4"
                        >
                            {{ n.label }}
                        </h3>
                        <component
                            :is="n.component"
                            :class="[
                                'fill-current hover:text-outsoar',
                                'object-contain h-24 w-auto p-2 my-4 lg:h-64',
                            ]"
                        />
                    </div>
                </grid>
            </div>
            <hr />
            <div class="flex flex-wrap justify-center overflow-hidden my-4">
                <a
                    v-for="n in MenuItems"
                    :key="n"
                    href="#"
                    :class="[
                        'py-2 font-medium text-xl text-center uppercase hover:text-outsoar',
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
};
</script>
