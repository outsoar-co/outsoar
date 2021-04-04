<template>
    <div class="bg-gradient-to-r from-outsoar to-white">
        <div class="flex flex-row h-64 max-w-4xl mx-auto">
            <div class="w-1/2 flex flex-col items-center justify-center">
                <h-title>{{ options.text }}</h-title>
                <p class="text-base lg:text-lg">{{ options.body }}</p>
            </div>
            <div class="w-1/2">
                <component
                    :is="iconComponent"
                    class="object-fill h-64 w-full fill-current text-outsoar"
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
