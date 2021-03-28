<template>
    <div class="overflow-hidden bg-white rounded-lg shadow-xl">
        <slot name="header">
            <div class="flex">
                <slot name="header-title"></slot>
                <slot name="header-action"></slot>
            </div>
        </slot>
        <slot name="image"> </slot>
        <slot name="body"> </slot>
        <slot name="footer"> </slot>
    </div>
</template>
