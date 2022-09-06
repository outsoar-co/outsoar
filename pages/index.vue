<template>
    <main class="bg-light-vue dark:bg-dark-vue">
        <hero />
        <segment class="shadow-inner bg-grayish-red-200 dark:bg-dark-odd">
            <card
                class="container px-6 py-20 transform -translate-y-12 lg:transform lg:-translate-y-32"
            >
                <template #body>
                    <span class="flex justify-center text-base text-center"
                        >Our services</span
                    >
                    <h-title size="text-3xl" class="mb-4 text-center">
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
                                    'flex flex-col w-full lg:w-1/3 gap-6 lg:p-8 p-4 text-center',
                            },
                        }"
                    >
                        <template #icon="{ item }">
                            <div
                                class="rounded-sm shadow-sm bg-grayish-red-200 dark:bg-dark-even"
                            >
                                <component
                                    :is="item.props.banner.icon"
                                    :class="[
                                        'fill-current hover:text-outsoar',
                                        'object-contain h-64 w-full lg:h-56 mx-auto lg:p-6 p-2',
                                    ]"
                                />
                            </div>
                        </template>
                        <template #to="{ item }">
                            <div class="flex justify-center flex-none py-4">
                                <btn-link :to="item.slug">Learn more</btn-link>
                            </div>
                        </template>
                    </list>
                </template>
            </card>
        </segment>
        <segment
            v-for="(section, index) in landSections"
            :key="section.id"
            :class="{
                'bg-white dark:bg-dark-even py-8': (index + 2) % 2 === 0,
                'bg-grayish-red-200 dark:bg-dark-odd shadow-inner py-8':
                    (index + 2) % 2 !== 0,
            }"
        >
            <div class="flex flex-col items-center justify-center">
                <div
                    class="flex flex-wrap justify-center my-24 lg:flex-row lg:flex-nowrap lg:gap-x-8"
                    :class="{
                        'flex-wrap-reverse lg:flex-row-reverse':
                            (index + 2) % 2 !== 0,
                    }"
                >
                    <div class="w-5/6 lg:w-1/2">
                        <template
                            v-if="
                                section.props.banner.icon &&
                                !/our-tools-and-technologies|trusted-by/.test(
                                    section.slug
                                )
                            "
                        >
                            <div
                                class="p-8 mx-auto rounded-sm"
                                :class="{
                                    'bg-grayish-red-200 dark:bg-dark-odd':
                                        (index + 2) % 2 == 0,
                                    'bg-light-vue dark:bg-dark-even':
                                        (index + 2) % 2 !== 0,
                                }"
                            >
                                <component
                                    :is="section.props.banner.icon"
                                    class="object-contain w-auto h-64 p-4 mx-auto fill-current lg:h-96"
                                />
                            </div>
                        </template>
                        <template
                            v-if="
                                /our-tools-and-technologies|trusted-by/.test(
                                    section.slug
                                )
                            "
                        >
                            <component :is="section.props.banner.icon" />
                        </template>
                    </div>
                    <p-article class="w-5/6 p-8 lg:w-1/2 lg:p-4">
                        <span class="text-base">{{ section.title }}</span>
                        <h1>{{ section.props.banner.text }}</h1>
                        <p>{{ section.body }}</p>
                        <nuxt-link
                            v-if="section.props.linkText"
                            :to="section.slug"
                        >
                            <div class="flex flex-row items-center">
                                <span>{{ section.props.linkText }}</span>
                                <chevron-double-right
                                    class="ml-1 fill-current"
                                />
                            </div>
                        </nuxt-link>
                    </p-article>
                </div>
            </div>
        </segment>
    </main>
</template>

<script>
import { mapGetters } from 'vuex';
import Hero from '@/components/organisms/Hero';
import List from '@/components/molecules/List';
import BtnLink from '@/components/atoms/BtnLink';
import Card from '@/components/molecules/Card';
import Segment from '@/components/organisms/Segment';
import HTitle from '@/components/atoms/HTitle';
import PArticle from '@/components/organisms/PArticle.vue';
import WeAreOutsoar from '@/components/atoms/undraw/WeAreOutsoar';
import HowWeDoIt from '@/components/atoms/undraw/HowWeDoIt';
import ChevronDoubleRight from '@/components/atoms/icons/ChevronDoubleRight';

export default {
    components: {
        Hero,
        Segment,
        BtnLink,
        Card,
        List,
        HTitle,
        PArticle,
        WeAreOutsoar,
        HowWeDoIt,
        ChevronDoubleRight,
    },
    computed: {
        ...mapGetters('content', {
            contents: 'items',
        }),
        services() {
            return this.contents.data.filter(
                (item) => item.props.category === 'services'
            );
        },
        landSections() {
            return this.contents.data.filter(
                (item) =>
                    item.props.category === 'main' &&
                    item.props.section === 'landing'
            );
        },
    },
};
</script>
