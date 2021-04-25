<template>
    <div
        :class="[
            'bg-grayish-red-200 text-dark-vue dark:text-light-vue dark:bg-dark-odd',
        ]"
    >
        <div class="flex items-center flex-wrap lg:flex-row">
            <div class="flex w-1/2">
                <div class="flex flex-col items-top lg:justify-end">
                    <h-title
                        size="text-xl"
                        breakpoints="lg:text-7xl lg:text-left"
                    >
                        {{ options.text }}
                    </h-title>
                    <p class="text-sm text-center lg:text-left py-4 lg:text-lg">
                        {{ options.body }}
                    </p>
                </div>
            </div>
            <div class="w-1/2">
                <component
                    :is="iconComponent"
                    class="object-fill h-3/4 w-auto fill-current text-outsoar"
                />
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
