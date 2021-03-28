<template>
    <footer>
        <div class="container mx-auto">
            <grid
                cols="2"
                class="px-4 py-8 gap-4 lg:p-12 lg:my-4"
                breakpoints="lg:grid-cols-4"
            >
                <div class="flex flex-col">
                    <h-title class="my-2 uppercase">Follow us</h-title>
                    <ul>
                        <li v-for="(s, i) in social" :key="i">
                            <anchor-link
                                :to="s.url"
                                class="flex flex-row items-center"
                            >
                                <component
                                    :is="s.component"
                                    class="h-4 w-4 fill-current hover:text-outsoar"
                                />
                                <span class="font-bold text-base ml-2">{{
                                    s.label
                                }}</span>
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <h-title class="my-2 uppercase">Services</h-title>
                    <ul>
                        <li v-for="(s, i) in services" :key="i">
                            <anchor-link
                                :to="s.url"
                                class="flex flex-row items-center"
                            >
                                <span class="font-bold text-base">{{
                                    s.label
                                }}</span>
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <h-title class="my-2 uppercase">Discover</h-title>
                    <ul>
                        <li v-for="(s, i) in discoveries" :key="i">
                            <anchor-link
                                :to="s.url"
                                class="flex flex-row items-center"
                            >
                                <span class="font-bold text-base">{{
                                    s.label
                                }}</span>
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <div
                        class="flex flex-wrap py-2 content-center justify-center"
                    >
                        <outsoar class="h-16 w-16" />
                        <p class="p-2">
                            We build better Web Experience that will outsoar
                            your company
                        </p>
                    </div>
                </div>
            </grid>
        </div>
        <div class="bg-black text-white">
            <div
                class="container text-xs lg:text-sm mx-auto flex flex-row justify-between p-2"
            >
                <p>{{ copyright }}</p>
                <p>{{ madewithlove }}</p>
            </div>
        </div>
    </footer>
</template>
<script>
import {
    Github,
    Facebook,
    Twitter,
    Outsoar,
    LinkedIn,
} from '@/components/atoms/icons';
import Grid from '@/components/molecules/Grid';
import AnchorLink from '@/components/atoms/AnchorLink';
import HTitle from '@/components/atoms/HTitle';

export default {
    components: {
        Grid,
        Facebook,
        Github,
        Twitter,
        Outsoar,
        AnchorLink,
        HTitle,
    },
    data() {
        return {
            social: [
                { label: 'Facebook', component: Facebook, url: '#' },
                { label: 'Github', component: Github, url: '#' },
                { label: 'Twitter', component: Twitter, url: '#' },
                { label: 'linkedIn', component: LinkedIn, url: '#' },
            ],
            services: [
                {
                    label: 'Development & Design',
                    component: Facebook,
                    url: '#',
                },
                {
                    label: 'Planning & Consultancy',
                    component: Github,
                    url: '#',
                },
                { label: 'DevOps & Support', component: Twitter, url: '#' },
            ],
            discoveries: [
                { label: 'How we do things', component: Facebook, url: '#' },
                { label: 'Case Studies', component: Github, url: '#' },
                { label: 'Who We Are', component: Twitter, url: '#' },
                { label: 'Our Technologies', component: LinkedIn, url: '#' },
                { label: 'Annoucements', component: LinkedIn, url: '#' },
                { label: 'Industry Insights', component: LinkedIn, url: '#' },
            ],
            copyright: `Copyright ${new Date().getFullYear()} by Outsoar`,
            madewithlove: `Powered By Nuxtjs. Made with ♥️ in 🇵🇭 PHL`,
        };
    },
};
</script>
