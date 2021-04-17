<template>
    <svg
        id="ALL_LAYERS"
        data-name="ALL LAYERS"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1797.9 374.1"
        class="fill-current text-light-outsoar dark:text-dark-outsoar"
    >
        <defs />
        <g id="RSB">
            <polygon
                points="102.83 153.69 131.28 137.23 130.75 344.26 20.7 281.1 23.2 199.5 50.58 184.65 49.69 263.92 102.29 296.66 102.83 153.69"
            />
            <polygon
                points="15.61 194.22 57.36 170.16 55.63 261.48 96.31 286.41 96.97 150.6 136.99 126.98 136.99 354.64 15.61 284.44 15.61 194.22"
            />
            <polygon
                points="185.5 135.8 214.13 152.79 215.21 173.01 295.55 218.65 295.55 280.38 185.86 343.9 185.86 234.93 212.7 250.68 213.06 296.31 268.17 262.67 267.1 232.96 185.18 186.8 185.5 135.8"
            />
            <polygon
                points="178.98 125.67 219.65 148.63 220.97 169.63 302.32 215.26 302.32 283.79 178.65 354.64 178.65 225.53 218.78 246.83 219 286.41 262.3 259.51 261.64 236.55 179.63 190.62 178.98 125.67"
            />
            <polygon
                points="19.8 109.31 20.52 142.59 154.19 66.01 263.34 128.46 264.24 150.47 293.76 164.96 292.87 110.74 153.29 29.15 19.8 109.31"
            />
            <polygon
                points="302.32 107.68 302.32 174.88 260.77 154.1 260.77 131.79 157.11 72.31 15.61 153.68 15.61 110.34 156.23 22.88 302.32 107.68"
            />
            <text
                class="fill-current cls-2 text-dark-vue dark:text-light-vue"
                :class="{
                    'text-dark-vue':
                        scrollY > 0 || display || $route.name != 'index',
                    'text-dark-vue':
                        scrollY === 0 && !display && $route.name == 'index',
                }"
                transform="translate(362.09 278.09) scale(1.25)"
            >
                Outsoar
            </text>
        </g>
    </svg>
</template>
<script>
export default {
    props: {
        scrollY: {
            type: Number,
            default: 0,
        },
        display: {
            type: Boolean,
            default: false,
        },
    },
};
</script>
<style scoped>
.cls-2 {
    font-size: 200.4px;
    font-family: TitilliumWeb-Bold;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 0.2em;
}
</style>
