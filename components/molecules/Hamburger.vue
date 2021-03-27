<template>
    <tasty-burger-button
        :type="buttonType"
        :active="isActive"
        :size="size"
        :color="color"
        :active-color="activeColor"
        @toggle="onToggle"
    />
</template>

<script>
import { TastyBurgerButton } from 'vue-tasty-burgers';

export default {
    components: {
        'tasty-burger-button': TastyBurgerButton,
    },
    data() {
        return {
            buttonType: 'elastic',
            isActive: false,
            size: 'm',
            color: 'black',
            activeColor: 'gray',
        };
    },
    methods: {
        onToggle(active) {
            // this.isActive = !active;
            this.$emit('toggle', active);
        },
    },
};
</script>
