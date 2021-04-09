<template>
    <div class="to-white py-2 bg-dark-vue max-w-4xl mx-auto">
        <div class="flex flex-row mx-auto p-4">
            <div class="w-1/2 flex flex-col items-center justify-center">
                <h-title class="text-white">{{ options.text }}</h-title>
                <p class="text-sm lg:text-base text-white">
                    {{ options.body }}
                </p>
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
