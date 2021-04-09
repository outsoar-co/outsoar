<template>
    <footer>
        <Segment class="bg-dark-vue">
            <div class="flex flex-col my-6 justify-center items-center">
                <h-title size="text-xl" class="mb-4 text-center text-white">
                    We write & ship beautiful code.
                </h-title>
                <div class="flex-none items-center">
                    <btn-link> Let's chat </btn-link>
                </div>
            </div>
        </Segment>
        <div class="container mx-auto">
            <grid
                cols="grid-cols-1"
                gap="gap-4"
                class="px-6 py-8 lg:p-12"
                breakpoints="lg:grid-cols-4 justify-items-center lg:justify-items-start"
            >
                <div class="flex flex-col text-center lg:text-left">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-2xl lg:text-left"
                        class="mb-8 uppercase"
                        >About Us</h-title
                    >
                    <ul class="text-dark-vue">
                        <li v-for="(s, i) in aboutus" :key="i" class="mb-2">
                            <anchor-link :to="s.url">
                                {{ s.label }}
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col text-center lg:text-left">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-2xl lg:text-left"
                        class="mb-8 uppercase"
                        >Discover</h-title
                    >
                    <ul class="text-dark-vue">
                        <li v-for="(s, i) in discoveries" :key="i" class="mb-2">
                            <anchor-link :to="s.url">
                                {{ s.label }}
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col text-center lg:text-left">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-2xl lg:text-left"
                        class="mb-8 uppercase"
                        >Services</h-title
                    >
                    <ul class="text-dark-vue">
                        <li v-for="(s, i) in services" :key="i" class="mb-2">
                            <anchor-link :to="s.url">
                                {{ s.label }}
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col">
                    <div
                        class="flex flex-wrap py-2 content-center justify-center"
                    >
                        <outsoar class="h-16 w-16 fill-current text-dark-vue" />
                        <p
                            class="text-sm p-2 text-dark-vue text-center lg:text-left"
                        >
                            We build better Web Experience that will outsoar
                            your company
                        </p>
                        <ul class="text-dark-vue flex flex-row gap-4 lg:gap-6">
                            <li v-for="(s, i) in social" :key="i">
                                <anchor-link
                                    :to="s.url"
                                    class="flex flex-row items-center"
                                >
                                    <component
                                        :is="s.component"
                                        class="h-6 w-6 fill-current hover:text-outsoar"
                                    />
                                    <!-- <span class="font-bold text-base ml-2">{{
                                        s.label
                                    }}</span> -->
                                </anchor-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </grid>
        </div>
        <div class="bg-gray-700 text-white">
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
import Segment from '@/components/organisms/Segment';
import BtnLink from '@/components/atoms/BtnLink';

export default {
    components: {
        Grid,
        Facebook,
        Github,
        Twitter,
        Outsoar,
        AnchorLink,
        HTitle,
        Segment,
        BtnLink,
    },
    data() {
        return {
            social: [
                { label: 'Facebook', component: Facebook, url: '#' },
                { label: 'Github', component: Github, url: '#' },
                { label: 'Twitter', component: Twitter, url: '#' },
                { label: 'linkedIn', component: LinkedIn, url: '#' },
            ],
            aboutus: [
                { label: 'Work Culture', component: Github, url: '#' },
                { label: 'Company History', component: Facebook, url: '#' },
                { label: 'Mission & Vision', component: Twitter, url: '#' },
            ],
            services: [
                {
                    label: 'Development & Design',
                    component: Facebook,
                    url: '/services/development-and-design',
                },
                {
                    label: 'Planning & Consultancy',
                    component: Github,
                    url: '#',
                },
                { label: 'DevOps & Support', component: Twitter, url: '#' },
            ],
            discoveries: [
                { label: 'Our Process', component: Facebook, url: '#' },
                { label: 'Case Studies', component: Github, url: '#' },
                { label: 'Annoucements', component: LinkedIn, url: '#' },
            ],
            copyright: `Copyright ${new Date().getFullYear()} by Outsoar`,
            madewithlove: `Made with ♥️ in 🇵🇭 PHL`,
        };
    },
};
</script>
