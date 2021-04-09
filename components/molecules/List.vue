<template>
    <div :class="itemsClassArray">
        <div v-for="(item, i) in items" :key="i" :class="itemClassArray">
            <slot name="icon" :item="item">
                <component :is="item.icon" />
            </slot>
            <slot name="title" :item="item">
                <h-title breakpoints="lg:text-xl">{{ item.title }}</h-title>
            </slot>
            <slot name="body" :item="item">
                <div class="text-base line-clamp-3">{{ item.body }}</div>
            </slot>
            <slot name="to" :item="item">
                <div class="flex-none">
                    <btn-link :to="item.to">Learn More</btn-link>
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
import BtnLink from '@/components/atoms/BtnLink';
import HTitle from '@/components/atoms/HTitle';

export default {
    components: {
        BtnLink,
        HTitle,
    },
    props: {
        items: {
            type: [Array],
            default: () => [],
        },
        attrClass: {
            type: Object,
            default() {
                return {
                    items: {
                        basedClass: 'flex flex-col lg:flex-row flex-wrap',
                    },
                    item: {
                        basedClass: 'flex flex-col w-full lg:w-1/3 gap-6',
                    },
                };
            },
        },
    },
    computed: {
        itemsClassArray() {
            return Object.values(this.attrClass.items);
        },
        itemClassArray() {
            return Object.values(this.attrClass.item);
        },
    },
};
</script>
