<template>
    <div
        :class="[
            'bg-grayish-red-200 text-dark-vue dark:text-light-vue dark:bg-darker-vue',
        ]"
    >
        <div class="flex flex-col items-center lg:flex-row">
            <div class="flex w-1/2">
                <div
                    class="flex flex-col mx-auto items-top lg:justify-content-center"
                >
                    <h-title
                        size="text-4xl"
                        breakpoints="lg:text-7xl lg:text-left"
                    >
                        {{ options.text }}
                    </h-title>
                    <p class="py-4 text-sm text-center lg:text-left lg:text-lg">
                        {{ options.body }}
                    </p>
                </div>
            </div>
            <div class="lg:w-1/2">
                <component
                    :is="options.icon"
                    class="object-contain w-auto h-64 mx-auto fill-current lg:h-96 text-outsoar"
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
                    body: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece',
                };
            },
        },
    },
};
</script>
