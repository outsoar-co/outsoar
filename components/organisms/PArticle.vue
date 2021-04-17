<template>
    <div class="flex items-center justify-center">
        <article
            :class="[
                'prose md:prose-xl dark:prose-dark dark:md:prose-xl-dark',
                'max-w-screen-lg',
            ]"
        >
            <slot />
        </article>
    </div>
</template>
