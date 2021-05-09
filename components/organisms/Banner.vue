<template>
    <div
        :class="[
            'bg-grayish-red-200 text-dark-vue dark:text-light-vue dark:bg-darker-vue',
        ]"
    >
        <div class="flex items-center flex-col lg:flex-row">
            <div class="flex w-1/2">
                <div
                    class="mx-auto flex flex-col items-top lg:justify-content-center"
                >
                    <h-title
                        size="text-4xl"
                        breakpoints="lg:text-7xl lg:text-left"
                    >
                        {{ options.text }}
                    </h-title>
                    <p class="text-sm text-center lg:text-left py-4 lg:text-lg">
                        {{ options.body }}
                    </p>
                </div>
            </div>
            <div class="lg:w-1/2">
                <component
                    :is="options.icon"
                    class="mx-auto object-contain h-64 lg:h-96 w-auto fill-current text-outsoar"
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
};
</script>
