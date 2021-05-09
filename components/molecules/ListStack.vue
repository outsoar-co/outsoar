<template>
    <div class="grid grid-cols-3 gap-4 p-4">
        <div v-for="(icon, index) in icons" :key="index">
            <img :src="icon" class="h-24 lg:h-32 w-auto" />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            icons: [
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain-wordmark.svg',
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-original.svg',
                'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-plain.svg',
                'https://cdn.svgporn.com/logos/shopify.svg',
                'https://cdn.svgporn.com/logos/aws.svg',
            ],
        };
    },
};
</script>
