<template>
    <footer
        class="bg-light-vue text-dark-vue dark:bg-dark-vue dark:text-light-vue pt-12"
    >
        <segment class="my-12">
            <div class="flex flex-col justify-center items-center">
                <h-title size="text-xl" class="mb-4 text-center">
                    We write & ship beautiful code.
                </h-title>
                <div class="flex-none items-center">
                    <btn-link> Let's chat </btn-link>
                </div>
            </div>
        </segment>
        <div class="container mx-auto px-2 py-6">
            <grid
                cols="grid-cols-1"
                gap="gap-4"
                class="my-8"
                breakpoints="lg:grid-cols-4 justify-items-center lg:justify-items-start"
            >
                <div class="flex flex-col my-8 text-center lg:text-left">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-2xl lg:text-left"
                        class="mb-8 uppercase"
                        >About Us</h-title
                    >
                    <ul class="text-xs">
                        <li v-for="(s, i) in aboutus" :key="i" class="mb-2">
                            <anchor-link :to="s.url">
                                {{ s.label }}
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col my-8 text-center lg:text-left">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-2xl lg:text-left"
                        class="mb-8 uppercase"
                        >Discover</h-title
                    >
                    <ul class="text-xs">
                        <li v-for="(s, i) in discoveries" :key="i" class="mb-2">
                            <anchor-link :to="s.url">
                                {{ s.label }}
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col my-8 text-center lg:text-left">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-2xl lg:text-left"
                        class="mb-8 uppercase"
                        >Services</h-title
                    >
                    <ul class="text-xs">
                        <li v-for="(s, i) in services" :key="i" class="mb-2">
                            <anchor-link :to="s.url">
                                {{ s.label }}
                            </anchor-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col my-8">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-2xl lg:text-left"
                        class="mb-8 uppercase"
                        >Get in Touch</h-title
                    >
                    <ul class="text-xs">
                        <li class="mb-2">
                            <a
                                href="tel:+639176373812"
                                class="flex flex-row items-center"
                            >
                                <icon-phl
                                    class="h-4 lg:h-6 fill-current text-white"
                                />
                                <span class="mx-2"
                                    >Call Us
                                    <span class="font-bold"
                                        >(+63) 917 637 3812</span
                                    ></span
                                >
                            </a>
                        </li>
                        <li class="mb-2">
                            <anchor-link
                                to="mailto:hello@outsoar.ph?subject=Outsoar Enquiry"
                                class="flex flex-row items-center"
                            >
                                <icon-gmail
                                    class="h-4 lg:h-6 fill-current text-white"
                                />
                                <span class="mx-2"
                                    >Email us
                                    <span class="font-bold"
                                        >hello@outsoar.ph</span
                                    ></span
                                >
                            </anchor-link>
                        </li>
                        <li class="mb-2">
                            <anchor-link
                                to="https://slack.com/intl/en-ph/"
                                class="flex flex-row items-center"
                            >
                                <icon-slack
                                    class="h-4 lg:h-6 fill-current text-white"
                                />
                                <span class="mx-2"
                                    >Join us on our
                                    <span class="font-bold"
                                        >@outsoar</span
                                    ></span
                                >
                            </anchor-link>
                        </li>
                    </ul>
                </div>
            </grid>
        </div>
        <div
            class="container mx-auto flex flex-col items-center content-center justify-center my-12"
        >
            <!-- <outsoar class="h-10 w-10 fill-current" />
            <p class="text-sm p-4 text-center lg:text-left">
                We build better Web Experience that will outsoar your company
            </p> -->
            <ul class="flex flex-row gap-4 lg:gap-6">
                <li v-for="(s, i) in social" :key="i">
                    <anchor-link :to="s.url" class="flex flex-row items-center">
                        <component
                            :is="s.component"
                            class="h-6 w-6 fill-current hover:text-light-outsoar dark:hover:text-dark-outsoar"
                        />
                    </anchor-link>
                </li>
            </ul>
            <p class="text-xs mt-4">&#169; {{ copyright }}</p>
        </div>
        <div class="bg-grayish-red-200 dark:bg-darker-vue mt-16 text-xs">
            <div class="container mx-auto px-2 grid grid-cols-1 lg:grid-cols-3">
                <div
                    class="flex flex-row items-center justify-center lg:justify-start my-2"
                >
                    <color-mode-picker />
                </div>
                <ul class="flex flex-row items-center justify-center mx-auto">
                    <li>Accessibility Statement</li>
                    <li class="font-bold mx-1 lg:mx-2">/</li>
                    <li>Privacy</li>
                    <li class="font-bold mx-1 lg:mx-2">/</li>
                    <li>Terms</li>
                    <li class="font-bold mx-1 lg:mx-2">/</li>
                    <li>Sitemap</li>
                </ul>
                <div
                    class="flex flex-row items-center justify-center lg:justify-end my-2"
                >
                    {{ madewithlove }}
                </div>
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
import ColorModePicker from '@/components/atoms/ColorModePicker.vue';
import IconSlack from '@/components/atoms/icons/Slack';
import IconGmail from '@/components/atoms/icons/Gmail';
import IconPhl from '@/assets/icons/phl.svg?inline';

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
        ColorModePicker,
        IconSlack,
        IconGmail,
        IconPhl,
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
                    url: '/services/planning-and-consultancy',
                },
                {
                    label: 'DevOps & Support',
                    component: Twitter,
                    url: '/services/devops-and-support',
                },
            ],
            discoveries: [
                { label: 'Our Process', component: Facebook, url: '#' },
                { label: 'Case Studies', component: Github, url: '#' },
                { label: 'Annoucements', component: LinkedIn, url: '#' },
            ],
            copyright: `Copyright ${new Date().getFullYear()} by Outsoar`,
            madewithlove: `Made with ♥️ in PHL`,
        };
    },
};
</script>
