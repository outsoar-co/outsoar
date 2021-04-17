<template>
    <div
        :class="[
            'bg-gray-200 text-dark-vue dark:text-light-vue dark:bg-dark-odd',
        ]"
    >
        <div
            class="container mx-auto flex flex-wrap lg:flex-row items-center justify-center py-6"
        >
            <div class="flex">
                <div class="m-auto flex flex-col lg:justify-end">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-4xl lg:text-left"
                    >
                        {{ options.text }}
                    </h-title>
                    <p class="text-sm text-center lg:text-base">
                        {{ options.body }}
                    </p>
                </div>
            </div>
            <div class="flex items-center justify-start">
                <div class="mx-auto">
                    <component
                        :is="iconComponent"
                        class="object-fill h-64 w-full fill-current text-outsoar"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HTitle from '~/components/atoms/HTitle';

export default {
    components: {
        HTitle,
    },
    props: {
        options: {
            type: Object,
            default: () => {
                return {
                    icon: 'BuildingWebsites',
                    text: 'Lorem Ipsum is simply dummy text of the printing.',
                    body:
                        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece',
                };
            },
        },
    },
    computed: {
        iconComponent() {
            return () =>
                import(`~/components/atoms/undraw/${this.options.icon}`);
        },
    },
};
</script>
