<template>
    <button class="outline-none focus:outline-none black z-50" @click="toogle">
        <component :is="iconComponent" class="h-6 lg:h-8 dark:text-white" />
    </button>
</template>
<script>
import IconMenu from '~/components/atoms/icons/Menu';
import IconClose from '~/components/atoms/icons/Close';

export default {
    components: {
        IconMenu,
        IconClose,
    },
    props: {
        display: {
            type: Boolean,
            default: false,
        },
        scrollY: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            active: false,
        };
    },
    computed: {
        iconComponent() {
            return this.active ? IconClose : IconMenu;
        },
    },
    watch: {
        display(val) {
            this.active = val;
        },
    },
    methods: {
        toogle() {
            this.active = !this.active;
            this.$emit('toggle', this.active);
        },
    },
};
</script>
