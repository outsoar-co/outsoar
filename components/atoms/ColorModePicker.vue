<template>
    <ul class="cursor-pointer ml-2">
        <li v-for="color of colors" v-show="color != toggle" :key="color">
            <component
                :is="`icon-${color}`"
                :class="[getClasses(color), 'h-4 w-4 fill-current']"
                @click="changeColor(color)"
            />
        </li>
    </ul>
</template>

<script>
import IconLight from '@/assets/icons/light.svg?inline';
import IconDark from '@/assets/icons/dark.svg?inline';

export default {
    components: {
        IconLight,
        IconDark,
    },
    data() {
        return {
            toggle: 'light',
            colors: ['light', 'dark'],
        };
    },
    methods: {
        getClasses(color) {
            // Does not set classes on ssr preference is system (because we know them on client-side)
            if (this.$colorMode.unknown) {
                return {};
            }
            return {
                preferred: color === this.$colorMode.preference,
                selected: color === this.$colorMode.value,
            };
        },
        changeColor(color) {
            if (color === 'system') {
                this.$colorMode.preference = 'light';
            }
            this.$colorMode.preference = color;
            this.toggle = color;
        },
    },
};
</script>
